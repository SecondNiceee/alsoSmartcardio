#!/bin/bash

# Проверяем, на какой ОС мы находимся
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
  # Это Windows (MSYS/Cygwin)
  echo "Running on Windows..."
  powershell.exe -File ./resize.ps1
else
  # Это Linux/macOS/WSL
  echo "Running on Linux/macOS/WSL..."
  bash ./resize-linux.sh
fi