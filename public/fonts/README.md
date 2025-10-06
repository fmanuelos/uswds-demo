# Font Files Setup

This directory contains self-hosted variable fonts for the USWDS Demo project.

## Why Self-Hosted Fonts?

- ✅ **Better Performance** - No external requests, faster loading
- ✅ **Privacy Compliant** - No data shared with third parties
- ✅ **Full Control** - Custom subsetting and optimization
- ✅ **Reliable** - No dependency on external CDNs

## Required Font Files

You need to download the following **variable font** files (both WOFF2 and WOFF formats):

### 1. Open Sans Variable
**Directory:** `open-sans/`
**Files needed:**
- `open-sans-variable.woff2`
- `open-sans-variable.woff`
- `open-sans-variable-italic.woff2`
- `open-sans-variable-italic.woff`

**Download from:**
- Google Fonts: https://fonts.google.com/specimen/Open+Sans
- Or use: https://github.com/google/fonts/tree/main/ofl/opensans

**Alternative quick download:**
```bash
# Using fontsource files from node_modules (if you still have them)
cp node_modules/@fontsource-variable/open-sans/files/open-sans-latin-wght-normal.woff2 open-sans/open-sans-variable.woff2
```

---

### 2. Public Sans Variable (USWDS Official)
**Directory:** `public-sans/`
**Files needed:**
- `public-sans-variable.woff2`
- `public-sans-variable.woff`
- `public-sans-variable-italic.woff2`
- `public-sans-variable-italic.woff`

**Download from:**
- **Official USWDS:** https://github.com/uswds/public-sans/releases
- Google Fonts: https://fonts.google.com/specimen/Public+Sans

**Direct download (recommended):**
```bash
# Download from USWDS official repository
curl -L -o public-sans/public-sans-variable.woff2 \
  "https://github.com/uswds/public-sans/raw/develop/fonts/variable/PublicSans-VariableFont_wght.woff2"

curl -L -o public-sans/public-sans-variable-italic.woff2 \
  "https://github.com/uswds/public-sans/raw/develop/fonts/variable/PublicSans-Italic-VariableFont_wght.woff2"
```

---

### 3. Roboto Mono Variable
**Directory:** `roboto-mono/`
**Files needed:**
- `roboto-mono-variable.woff2`
- `roboto-mono-variable.woff`
- `roboto-mono-variable-italic.woff2`
- `roboto-mono-variable-italic.woff`

**Download from:**
- Google Fonts: https://fonts.google.com/specimen/Roboto+Mono
- Or use: https://github.com/google/fonts/tree/main/ofl/robotomono

---

### 4. Source Sans 3 Variable
**Directory:** `source-sans-3/`
**Files needed:**
- `source-sans-3-variable.woff2`
- `source-sans-3-variable.woff`
- `source-sans-3-variable-italic.woff2`
- `source-sans-3-variable-italic.woff`

**Download from:**
- Google Fonts: https://fonts.google.com/specimen/Source+Sans+3
- Adobe Fonts: https://github.com/adobe-fonts/source-sans

---

### 5. Merriweather Variable
**Directory:** `merriweather/`
**Files needed:**
- `merriweather-variable.woff2`
- `merriweather-variable.woff`
- `merriweather-variable-italic.woff2`
- `merriweather-variable-italic.woff`

**Download from:**
- Google Fonts: https://fonts.google.com/specimen/Merriweather

**Note:** Merriweather has variable font support. If you can't find variable versions, you can use static weights (300, 400, 700, 900) as fallback.

---

### 6. Poppins Variable
**Directory:** `poppins/`
**Files needed:**
- `poppins-variable.woff2`
- `poppins-variable.woff`
- `poppins-variable-italic.woff2`
- `poppins-variable-italic.woff`

**Download from:**
- Google Fonts: https://fonts.google.com/specimen/Poppins

**Note:** Poppins may not have full variable font support yet. If unavailable, use static weights as fallback.

---

## Quick Setup Script

You can use this script to download all fonts at once:

```bash
#!/bin/bash
# Save this as download-fonts.sh in the public/fonts/ directory

echo "Downloading Public Sans (USWDS Official)..."
curl -L -o public-sans/public-sans-variable.woff2 \
  "https://github.com/uswds/public-sans/raw/develop/fonts/variable/PublicSans-VariableFont_wght.woff2"

curl -L -o public-sans/public-sans-variable-italic.woff2 \
  "https://github.com/uswds/public-sans/raw/develop/fonts/variable/PublicSans-Italic-VariableFont_wght.woff2"

echo "✅ Public Sans downloaded"
echo "⚠️  For other fonts, please download manually from Google Fonts"
echo "   Visit: https://fonts.google.com"
```

---

## Using Google Fonts Download Helper

**Option 1: Download from Google Fonts Web UI**
1. Visit https://fonts.google.com
2. Search for each font (e.g., "Open Sans")
3. Click "Get font" → "Download family"
4. Extract the ZIP file
5. Look for `.woff2` files in the extracted folder
6. Copy to appropriate subdirectory

**Option 2: Use google-webfonts-helper**
1. Visit: https://gwfh.mranftl.com/fonts
2. Search for each font
3. Select "Modern Browsers" (woff2)
4. Select character set: "latin"
5. Download the files
6. Place in appropriate subdirectories

---

## File Format Priority

The browser will automatically choose the best format:
1. **WOFF2** - Best compression, smallest file size (primary format)
2. **WOFF** - Fallback for older browsers

---

## Verifying Installation

After downloading the fonts, your directory structure should look like:

```
public/fonts/
├── README.md
├── open-sans/
│   ├── open-sans-variable.woff2
│   ├── open-sans-variable.woff
│   ├── open-sans-variable-italic.woff2
│   └── open-sans-variable-italic.woff
├── public-sans/
│   ├── public-sans-variable.woff2
│   ├── public-sans-variable.woff
│   ├── public-sans-variable-italic.woff2
│   └── public-sans-variable-italic.woff
├── roboto-mono/
│   ├── roboto-mono-variable.woff2
│   ├── roboto-mono-variable.woff
│   ├── roboto-mono-variable-italic.woff2
│   └── roboto-mono-variable-italic.woff
├── source-sans-3/
│   ├── source-sans-3-variable.woff2
│   ├── source-sans-3-variable.woff
│   ├── source-sans-3-variable-italic.woff2
│   └── source-sans-3-variable-italic.woff
├── merriweather/
│   ├── merriweather-variable.woff2
│   ├── merriweather-variable.woff
│   ├── merriweather-variable-italic.woff2
│   └── merriweather-variable-italic.woff
└── poppins/
    ├── poppins-variable.woff2
    ├── poppins-variable.woff
    ├── poppins-variable-italic.woff2
    └── poppins-variable-italic.woff
```

---

## Testing Fonts

After downloading, you can verify the fonts are loading:

1. **Start your development server:**
   ```bash
   npm run dev
   # or
   npm run storybook
   ```

2. **Open browser DevTools:**
   - Go to Network tab
   - Filter by "Font"
   - Reload the page
   - You should see font files loading from `/fonts/...`

3. **Check font rendering:**
   - Inspect any text element
   - In Computed styles, verify the font-family is correct
   - Look for "Variable" in the font name

---

## File Size Reference

Variable fonts are more efficient than multiple static files:

| Font | Variable Size | Static Files (4 weights) |
|------|--------------|--------------------------|
| Public Sans | ~120KB | ~400KB |
| Open Sans | ~100KB | ~350KB |
| Roboto Mono | ~90KB | ~320KB |

**Total savings:** ~50-70% file size reduction

---

## Troubleshooting

### Fonts not loading?
1. Check file paths in `src/styles/fonts.css`
2. Verify files exist in `public/fonts/` subdirectories
3. Check browser console for 404 errors
4. Ensure file names match exactly (case-sensitive)

### Fonts look wrong?
1. Verify you downloaded variable font versions (not static)
2. Check font-weight ranges in `fonts.css`
3. Clear browser cache
4. Restart dev server

### WOFF vs WOFF2?
- Modern browsers (2016+) support WOFF2
- WOFF is fallback for older browsers
- Both formats are recommended for maximum compatibility

---

## License Information

All fonts used in this project are open source:
- **Public Sans** - SIL Open Font License 1.1
- **Open Sans** - Apache License 2.0
- **Roboto Mono** - Apache License 2.0
- **Source Sans 3** - SIL Open Font License 1.1
- **Merriweather** - SIL Open Font License 1.1
- **Poppins** - SIL Open Font License 1.1

Make sure to include appropriate license files if distributing.

---

## Next Steps

After downloading fonts:
1. ✅ Remove `@fontsource` dependencies from `package.json`
2. ✅ Run `npm install` to clean up
3. ✅ Test in development
4. ✅ Test in production build
5. ✅ Verify font loading in browser DevTools

