#!/bin/bash

# Путь к исходным изображениям
ORIGINALS_DIR="public/images"

# Путь для поиска кода с <img>
SRC_DIR="src"

# Временный файл для хранения найденных путей
TMP_FILE=$(mktemp)

echo "🔍 Searching for images in format -XXXpx.*..."

# Убираем старый временный файл, если он есть
if [ -f "$TMP_FILE" ]; then
  rm -f "$TMP_FILE"
fi

# Функция для извлечения пути из src или srcSet
extract_image_path() {
  local match="$1"
  local pattern="$2"
  echo "$match" | grep -o "$pattern" | head -1
}

# Шаг 1: Найдём все упоминания вида src="...-XXXpx.*" и srcSet="...-XXXpx.*"
echo "📁 Scanning files in $SRC_DIR..."
FILES=$(find "$SRC_DIR" -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.js" \) 2>/dev/null)
FILE_COUNT=$(echo "$FILES" | wc -l)
echo "📄 Found $FILE_COUNT files to scan"

while IFS= read -r file; do
  if [ -z "$file" ]; then
    continue
  fi
  
  echo "🔍 Scanning: $(basename "$file")"
  
  if [ ! -f "$file" ]; then
    echo "⚠️ File not found: $file"
    continue
  fi

  # Читаем содержимое файла
  content=$(cat "$file" 2>/dev/null)
  if [ $? -ne 0 ]; then
    echo "  Error reading file $(basename "$file")"
    continue
  fi

  # Паттерны для поиска
  pattern_src='src\s*=\s*"([^"]+-\d+px\.(png|jpg|webp))"'
  pattern_srcset='srcSet\s*=\s*"([^"]+-\d+px\.(png|jpg|webp))"'

  # Ищем src="..."
  src_matches=$(echo "$content" | grep -E "$pattern_src" || true)
  if [ -n "$src_matches" ]; then
    echo "  ✅ Found src matches in $(basename "$file")"
    while IFS= read -r match; do
      if [ -n "$match" ]; then
        path=$(echo "$match" | sed -E 's/.*src\s*=\s*"([^"]+)".*/\1/')
        if [ -n "$path" ]; then
          echo "    📝 Found: $path"
          echo "$path" >> "$TMP_FILE"
        fi
      fi
    done <<< "$src_matches"
  fi

  # Ищем srcSet="..."
  srcset_matches=$(echo "$content" | grep -E "$pattern_srcset" || true)
  if [ -n "$srcset_matches" ]; then
    echo "  ✅ Found srcSet matches in $(basename "$file")"
    while IFS= read -r match; do
      if [ -n "$match" ]; then
        path=$(echo "$match" | sed -E 's/.*srcSet\s*=\s*"([^"]+)".*/\1/')
        if [ -n "$path" ]; then
          echo "    📝 Found: $path"
          echo "$path" >> "$TMP_FILE"
        fi
      fi
    done <<< "$srcset_matches"
  fi

done <<< "$FILES"

# Проверяем, нашли ли что-то
if [ ! -f "$TMP_FILE" ] || [ ! -s "$TMP_FILE" ]; then
  echo "❌ No images found in format -XXXpx.*"
  rm -f "$TMP_FILE"
  exit 1
fi

echo "🖼️ Found the following image paths:"
cat "$TMP_FILE"

# Шаг 2: Обрабатываем каждое изображение
while IFS= read -r filename; do
  if [ -z "$filename" ]; then
    continue
  fi

  # Извлекаем базовое имя без суффикса -XXXpx.*
  base=$(echo "$filename" | sed -E 's/-([0-9]+)px\.(png|jpg|webp)$/.\2/')
  base=$(echo "$base" | sed -E 's|^/images/||')

  # Извлекаем ширину
  width=$(echo "$filename" | sed -E 's/.*-([0-9]+)px\.(png|jpg|webp)$/\1/')
  if [ -z "$width" ] || ! [[ "$width" =~ ^[0-9]+$ ]]; then
    echo "⚠️ Could not extract width from $filename - skipping"
    continue
  fi

  original="$ORIGINALS_DIR/$base"

  if [ ! -f "$original" ]; then
    echo "⚠️ Original $original not found - skipping"
    continue
  fi

  # Формируем путь к сжатому изображению без дублирования папки images
  resized_filename=$(echo "$filename" | sed -E 's|^/images/||')
  resized="$ORIGINALS_DIR/$resized_filename"

  if [ -f "$resized" ]; then
    echo "🟡 Resized image $resized already exists - skipping"
    continue
  fi

  echo "📐 Resizing $original -> $resized (width: ${width}px)"
  magick "$original" -resize "${width}x>" "$resized"

done < "$TMP_FILE"

rm -f "$TMP_FILE"
echo "✅ Done!"