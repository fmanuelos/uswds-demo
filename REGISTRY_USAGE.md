# USWDS Component Registry

Your USWDS demo project is now set up as a shadcn-compatible component registry! This allows other developers to install your government-compliant components directly into their projects.

## 🎯 What's Been Added

### ✅ Registry Configuration
- `registry.json` - Main registry configuration with all 20+ components
- Registry build scripts in `package.json`
- shadcn CLI for building and managing the registry

### ✅ Components Included
**UI Components:**
- `button` - 8+ variants with full USWDS compliance
- `alert` - Success, warning, danger, info, emergency variants
- `icon` - Material Icons integration
- `badge` - Status and informational badges
- `input` - Form inputs with accessibility
- `label` - Proper form labeling
- `select` - Dropdown selectors
- `separator` - Content dividers
- `checkbox` - Accessible checkboxes
- `accordion` - Collapsible content
- `card` - Content grouping
- `dialog` - Modals and dialogs
- `form` - Form components with validation
- `pagination` - Navigation pagination
- `radio-group` - Radio button groups
- `search` - Search input components
- `table` - Data tables

**Block Components:**
- `header` - Complete navigation header
- `footer` - Site footer
- `in-page-navigation` - Section navigation

## 🚀 Usage

### For Development (This Project)
```bash
# Build the registry
npm run registry:build

# Watch for changes and rebuild
npm run registry:dev

# Continue development with Storybook
npm run dev
```

### For Installation (Other Projects)
Once deployed, others can install components like this:

```bash
# Install individual components
npx shadcn@latest add https://your-domain.com/r/button.json
npx shadcn@latest add https://your-domain.com/r/alert.json
npx shadcn@latest add https://your-domain.com/r/header.json

# Components will be installed with all dependencies
```

## 📁 Generated Files

The registry build creates JSON files in `public/r/`:
- `button.json` - Button component definition
- `alert.json` - Alert component definition  
- `icon.json` - Icon component definition
- ... and all other components

Each JSON file contains:
- Component source code
- Dependencies required
- Registry dependencies (other components needed)
- Metadata and descriptions

## 🌐 Deployment

To make your registry publicly available:

1. **Deploy to any static hosting** (Vercel, Netlify, GitHub Pages, etc.)
2. **Your components will be available at:**
   ```
   https://your-domain.com/r/[component-name].json
   ```

3. **Others can install with:**
   ```bash
   npx shadcn@latest add https://your-domain.com/r/button.json
   ```

## 🔧 Maintaining the Registry

### Adding New Components
1. Create your component in `src/components/ui/` or `src/components/blocks/`
2. Add entry to `registry.json`
3. Run `npm run registry:build`
4. Deploy the updated registry

### Updating Components
1. Modify your component files
2. Run `npm run registry:build` 
3. Deploy the updates

No need to move or restructure existing components - the registry points to your current file locations!

## 🏛️ Government Compliance

All components maintain:
- ✅ **WCAG 2.1 AA** accessibility compliance
- ✅ **Section 508** government standards  
- ✅ **USWDS** design system compliance
- ✅ **Semantic HTML** and proper ARIA labels
- ✅ **Keyboard navigation** support
- ✅ **Color contrast** requirements

This makes your registry perfect for government and public sector projects requiring compliance with federal accessibility standards.
