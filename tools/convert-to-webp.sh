#!/bin/bash
# convert-to-webp.sh
# Usage: bash convert-to-webp.sh                     — converts all jpg/jpeg/png in public/assets/images/
# Usage: bash convert-to-webp.sh path/to/image.jpg   — converts a single file
# Requirements: sharp-cli  ->  npm install -g sharp-cli

QUALITY=85
TARGET_DIR="public/assets/images"

convert_file() {
  local src="$1"
  local dst="${src%.*}.webp"

  if [ "$src" = "$dst" ]; then
    echo "Already webp: $src"
    return
  fi

  node -e "
    const sharp = require('sharp');
    sharp('$src')
      .webp({ quality: $QUALITY })
      .toFile('$dst')
      .then(() => { require('fs').unlinkSync('$src'); console.log('✓ $src -> $dst'); })
      .catch(e => console.error('✗ Failed:', e.message));
  "
}

if [ -n "$1" ]; then
  # Single file mode
  convert_file "$1"
else
  # Batch mode — all jpg/jpeg/png in target dir
  echo "Converting all images in $TARGET_DIR..."
  find "$TARGET_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    convert_file "$file"
  done
  echo "Done!"
fi
