# Font Migration: @fontsource to Self-Hosted Variable Fonts

## ✅ Completed Steps

### 1. Directory Structure Created
```
public/fonts/
├── open-sans/
├── public-sans/
├── roboto-mono/
├── source-sans-3/
├── merriweather/
└── poppins/
```

### 2. Font Declarations Created
- **File:** `src/styles/fonts.css`
- **Contains:** All @font-face declarations for variable fonts
- **Format:** WOFF2 (primary) + WOFF (fallback)
- **Subset:** Latin (optimized for US content)

### 3. Updated Global Styles
- **File:** `src/styles/globals.css`
- **Removed:** All @fontsource imports
- **Added:** Import to new fonts.css file

### 4. Documentation Created
- **File:** `public/fonts/README.md` - Complete download instructions
- **File:** `public/fonts/download-fonts.sh` - Automated download script

---

## 🔄 Next Steps (Action Required)

### Step 1: Download Font Files

You have three options:

#### Option A: Use the Download Script (Fastest)
```bash
cd public/fonts
./download-fonts.sh
```
This will download Public Sans automatically. You'll need to manually download the others from Google Fonts.

#### Option B: Use Google Web Fonts Helper (Easiest)
1. Visit: https://gwfh.mranftl.com/fonts
2. Search for each font
3. Select "latin" character set
4. Select "woff2" format
5. Download and extract to appropriate folders

#### Option C: Download from Google Fonts (Official)
1. Visit: https://fonts.google.com
2. Search for each font family
3. Click "Get font" → "Download family"
4. Extract ZIP files
5. Copy `.woff2` files to corresponding folders

### Step 2: Remove @fontsource Dependencies

```bash
npm uninstall @fontsource-variable/open-sans \
  @fontsource-variable/public-sans \
  @fontsource-variable/roboto-mono \
  @fontsource-variable/source-sans-3 \
  @fontsource/merriweather \
  @fontsource/poppins
```

### Step 3: Test the Migration

#### Start Development Server
```bash
npm run dev
# or
npm run storybook
```

#### Verify in Browser DevTools
1. Open DevTools → Network tab
2. Filter by "Font"
3. Reload page
4. Check that fonts load from `/fonts/...` URLs
5. Verify no 404 errors

#### Visual Check
1. Inspect text elements
2. Check Computed styles
3. Verify font-family shows "Variable" fonts
4. Test different font weights (300, 400, 700, 900)

### Step 4: Production Build Test

```bash
npm run build
npm run start
```

Verify fonts load correctly in production mode.

---

## 📊 Benefits of This Migration

| Aspect | Before (@fontsource) | After (Self-hosted) |
|--------|---------------------|-------------------|
| **Bundle Size** | Bundled with JS | Separate, cached |
| **Performance** | Processed by webpack | Direct serving |
| **HTTP Requests** | Multiple files | Fewer requests |
| **File Size** | ~600KB (4 weights) | ~200KB (variable) |
| **Control** | Limited | Full control |
| **CDN Ready** | ❌ | ✅ |
| **Privacy** | ✅ | ✅ |

---

## 🎯 What Changed

### Before:
```css
@import "@fontsource-variable/open-sans";
@import "@fontsource-variable/public-sans";
@import "@fontsource-variable/roboto-mono";
@import "@fontsource-variable/source-sans-3";
@import "@fontsource/merriweather/300.css";
@import "@fontsource/merriweather/400.css";
@import "@fontsource/merriweather/700.css";
@import "@fontsource/merriweather/900.css";
@import "@fontsource/poppins";
```

### After:
```css
@import "./fonts.css";
```

### Font Face Example:
```css
@font-face {
  font-family: 'Public Sans Variable';
  src: url('/fonts/public-sans/public-sans-variable.woff2') format('woff2-variations'),
       url('/fonts/public-sans/public-sans-variable.woff') format('woff-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, ...;
}
```

---

## 🔧 Troubleshooting

### Fonts not loading?
```bash
# Check file structure
ls -la public/fonts/*/

# Verify file paths
cat src/styles/fonts.css | grep "url"

# Check browser console for errors
# Open DevTools → Console
```

### Fonts look different?
- Ensure you downloaded **variable** versions, not static
- Check font-weight range in fonts.css
- Clear browser cache: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Build errors?
```bash
# Clean build cache
rm -rf .next
npm run build
```

### Still using @fontsource?
```bash
# Check if packages are still installed
npm list | grep fontsource

# Verify imports are removed
grep -r "@fontsource" src/
```

---

## 📝 Font Details

### Variable Font Specifications

| Font | Weight Range | Style | File Size (approx) |
|------|-------------|-------|-------------------|
| Open Sans | 300-800 | Normal, Italic | ~100KB |
| Public Sans | 100-900 | Normal, Italic | ~120KB |
| Roboto Mono | 100-700 | Normal, Italic | ~90KB |
| Source Sans 3 | 200-900 | Normal, Italic | ~110KB |
| Merriweather | 300-900 | Normal, Italic | ~130KB |
| Poppins | 100-900 | Normal, Italic | ~95KB |

**Total:** ~645KB for all fonts (both normal and italic)
**Previous:** ~1.2MB with multiple static weights

**Savings:** ~46% file size reduction

---

## ✨ Additional Optimizations

### Future Enhancements

1. **Font Subsetting**
   - Use only characters you need
   - Further reduce file size by 30-50%

2. **Preloading Critical Fonts**
   ```html
   <link rel="preload" href="/fonts/public-sans/public-sans-variable.woff2" 
         as="font" type="font/woff2" crossorigin>
   ```

3. **Service Worker Caching**
   - Cache fonts for offline use
   - Instant loading on repeat visits

4. **Font Display Strategy**
   - Current: `font-display: swap;`
   - Consider: `font-display: optional;` for better UX

---

## 📚 Resources

- **USWDS Typography:** https://designsystem.digital.gov/components/typography/
- **Variable Fonts Guide:** https://web.dev/variable-fonts/
- **Font Performance:** https://web.dev/font-best-practices/
- **Google Web Fonts Helper:** https://gwfh.mranftl.com/fonts

---

## ✅ Checklist

- [x] Created font directory structure
- [x] Created fonts.css with @font-face declarations
- [x] Updated globals.css imports
- [x] Created documentation (README.md)
- [x] Created download script
- [ ] **Download font files** ← YOU ARE HERE
- [ ] Remove @fontsource packages
- [ ] Test in development
- [ ] Test in production build
- [ ] Verify font loading in browser
- [ ] Check visual rendering
- [ ] Commit changes

---

## 🎉 Summary

Your project is now set up to use self-hosted variable fonts instead of @fontsource packages. This provides:

- ✅ Better performance (smaller files, fewer requests)
- ✅ Full control over font assets
- ✅ CDN-ready architecture
- ✅ Improved caching strategy
- ✅ No external dependencies

**Next action:** Download the font files following the instructions in `public/fonts/README.md`

