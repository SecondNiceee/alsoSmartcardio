
$OriginalsDir = "public\images"
$ConfigFile = "resized-images.config.ts"

# Какие размеры нужны
$widths = @(576, 768, 1024, 1440)

# Читаем массив из config
Write-Host "Reading image list from $ConfigFile..."

# Получаем строки между [ и ]
$configLines = Get-Content $ConfigFile | Where-Object { $_ -notmatch '^export' -and $_ -notmatch '^\[' -and $_ -notmatch '^\];' -and $_.Trim() -ne '' }

# Парсим имена файлов
$imageNames = @()
foreach ($line in $configLines) {
  $name = $line -replace '[",]', ''
  $name = $name.Trim()
  if ($name) { $imageNames += $name }
}

if ($imageNames.Count -eq 0) {
  Write-Host "No images found in config!"
  exit 1
}

foreach ($img in $imageNames) {
  $original = Join-Path $OriginalsDir $img
  if (-not (Test-Path $original)) {
    Write-Host "Original $original not found - skipping"
    continue
  }

  $base = $img -replace '\.webp$', ''
  foreach ($w in $widths) {
    $resized = Join-Path $OriginalsDir ("${base}-${w}px.webp")
    if (Test-Path $resized) {
      Write-Host "Resized $resized already exists - skipping"
      continue
    }
    Write-Host "Resizing $original -> $resized (width: ${w}px)"
    magick "$original" -resize "${w}x>" "$resized"
  }
}

Write-Host "Done!" 