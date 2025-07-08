#!/bin/sh

# Путь к исходным изображениям
ORIGINALS_DIR="public/images"
CONFIG_FILE="resized-images.config.ts"
WIDTHS="576 768 1024 1440"

# Читаем массив из config
IMG_LIST=$(awk '/\[/{flag=1;next}/\]/{flag=0}flag' "$CONFIG_FILE" | sed 's/[",]//g' | sed '/^$/d')

if [ -z "$IMG_LIST" ]; then
  echo "❌ No images found in config!"
  exit 1
fi

for img in $IMG_LIST; do
  original="$ORIGINALS_DIR/$img"
  if [ ! -f "$original" ]; then
    echo "⚠️  Original $original not found - skipping"
    continue
  fi
  base="$(echo "$img" | sed 's/\.webp$//')"
  for w in $WIDTHS; do
    resized="$ORIGINALS_DIR/${base}-${w}px.webp"
    if [ -f "$resized" ]; then
      echo "🟡 Resized $resized already exists - skipping"
      continue
    fi
    echo "📐 Resizing $original -> $resized (width: ${w}px)"
    magick "$original" -resize "${w}x>" "$resized"
  done
done

echo "✅ Done!"