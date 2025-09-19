# USWDS Demo - Component Library

A comprehensive UI component library built with **React**, **TypeScript**, and **Storybook**, following the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) guidelines. This project demonstrates modern, accessible, and government-compliant web components.

## 🚀 Quick Start

### Development Server

```bash
# Start Storybook development server
npm run dev
# Opens http://localhost:6006

# Alternative: explicit storybook command
npm run storybook
```

### Testing

```bash
# Run all tests
npm test

# Run unit tests only
npm run test:unit

# Run storybook interaction tests
npm run test:storybook

# Watch mode for specific component
npm run test:watch
```

### Production Build

```bash
# Build Storybook for production
npm run build
```

## 📖 Documentation

- **Storybook UI**: [http://localhost:6006](http://localhost:6006) - Interactive component documentation
- **Setup Guide**: See [STORYBOOK_GUIDE.md](./STORYBOOK_GUIDE.md) for detailed Storybook usage

## 🏗️ Project Structure

```
src/
├── components/
│   ├── blocks/           # Complex layout components
│   │   └── header/       # Header with navigation & keyboard support
│   └── ui/              # Basic UI components
│       ├── Button/       # Button with 8 variants + stories
│       ├── Input/        # Form inputs + stories
│       ├── Select/       # Select dropdown + stories
│       └── Badge/        # Status badges + stories
├── styles/
│   └── globals.css      # USWDS-compliant global styles
└── stories/             # Storybook configuration & guides
```

## 🎨 Components Overview

### UI Components (`/ui`)
- **Button** - 8 variants (primary, secondary, outline, success, warning, danger, ghost, link)
- **Input** - Form inputs with accessibility features
- **Select** - Dropdown selectors with proper labeling  
- **Badge** - Status and informational badges

### Block Components (`/blocks`)
- **Header** - Complete navigation header with:
  - Desktop & mobile responsive design
  - Dropdown menus with keyboard navigation
  - Search functionality
  - WCAG-compliant accessibility

## ♿ Accessibility Features

✅ **WCAG 2.1 AA Compliance** - All components tested with Storybook's a11y addon  
✅ **Keyboard Navigation** - Full keyboard support (Tab, Enter, Arrow keys, Escape)  
✅ **ARIA Labels** - Proper semantic markup and screen reader support  
✅ **Focus Management** - Visible focus indicators and logical tab order  
✅ **Color Contrast** - USWDS-compliant color palette for accessibility  

## 🧪 Testing Strategy

- **Unit Tests** - Component logic and props with Vitest
- **Accessibility Tests** - Automated a11y testing with `@storybook/addon-a11y`
- **Visual Regression** - Story-based visual testing support

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript 5** - Full type safety
- **Storybook 9.1** - Component development environment
- **Tailwind CSS 4** - USWDS-compliant utility-first styling
- **Radix UI** - Accessible component primitives
- **Vitest** - Fast unit testing
- **Class Variance Authority** - Type-safe variant styling

## 📚 USWDS Compliance

This project follows USWDS standards for:
- **Typography** - Public Sans, Open Sans, Source Sans 3, Merriweather, Roboto Mono
- **Color System** - Government-approved color palette
- **Spacing** - Consistent 8px grid system
- **Components** - Pattern library based on USWDS components
- **Accessibility** - Section 508 and WCAG 2.1 AA compliance

## 🚀 Getting Started for Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd uswds-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development**
   ```bash
   npm run dev
   ```

4. **Open Storybook**
   Navigate to [http://localhost:6006](http://localhost:6006)

## 📝 Adding New Components

1. Create component in appropriate directory (`/ui` or `/blocks`)
2. Add TypeScript interfaces and variants using `class-variance-authority`
3. Create comprehensive `.stories.tsx` file with:
   - All variants and states
   - Accessibility tests
   - Documentation
4. Add unit tests if needed
5. Ensure USWDS compliance

See [STORYBOOK_GUIDE.md](./STORYBOOK_GUIDE.md) for detailed component development workflow.

## 🤝 Contributing

This project serves as a reference implementation for USWDS-compliant React components. Contributions should maintain:
- Accessibility standards (WCAG 2.1 AA)
- USWDS design compliance
- TypeScript type safety
- Comprehensive testing
- Clear documentation

## 📄 License

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).