#!/bin/bash
# Font Download Script for USWDS Demo
# This script downloads Public Sans (official USWDS font)
# For other fonts, please use Google Fonts or the web font helper

set -e

echo "🚀 Downloading fonts for USWDS Demo..."
echo ""

# Public Sans (USWDS Official - High Priority)
echo "📥 Downloading Public Sans Variable (USWDS Official)..."
curl -L -o public-sans/public-sans-variable.woff2 \
  "https://github.com/uswds/public-sans/raw/develop/fonts/variable/PublicSans-VariableFont_wght.woff2"

curl -L -o public-sans/public-sans-variable-italic.woff2 \
  "https://github.com/uswds/public-sans/raw/develop/fonts/variable/PublicSans-Italic-VariableFont_wght.woff2"

echo "✅ Public Sans downloaded successfully!"
echo ""

echo "⚠️  MANUAL DOWNLOAD REQUIRED FOR OTHER FONTS:"
echo ""
echo "Please download the following fonts manually:"
echo ""
echo "1. Open Sans Variable"
echo "   → https://fonts.google.com/specimen/Open+Sans"
echo "   → Download family, extract and copy .woff2 files to open-sans/"
echo ""
echo "2. Roboto Mono Variable"
echo "   → https://fonts.google.com/specimen/Roboto+Mono"
echo "   → Download family, extract and copy .woff2 files to roboto-mono/"
echo ""
echo "3. Source Sans 3 Variable"
echo "   → https://fonts.google.com/specimen/Source+Sans+3"
echo "   → Download family, extract and copy .woff2 files to source-sans-3/"
echo ""
echo "4. Merriweather Variable"
echo "   → https://fonts.google.com/specimen/Merriweather"
echo "   → Download family, extract and copy .woff2 files to merriweather/"
echo ""
echo "5. Poppins (may need static weights if variable unavailable)"
echo "   → https://fonts.google.com/specimen/Poppins"
echo "   → Download family, extract and copy .woff2 files to poppins/"
echo ""
echo "📚 For easier downloads, use: https://gwfh.mranftl.com/fonts"
echo "   (Google Web Fonts Helper - select 'latin' subset and 'woff2' format)"
echo ""
echo "✨ Done! Follow the README.md for complete instructions."

