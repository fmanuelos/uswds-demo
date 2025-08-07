# Storybook Setup Guide

This guide covers how to use and extend Storybook for your UI components.

## Getting Started

Storybook has been successfully installed and configured for your project. Here's what was set up:

### Installation Complete ✅
- **Storybook 9.1.1** with Next.js integration
- **Essential addons**: docs, a11y (accessibility), vitest (testing)
- **PostCSS configuration** updated for compatibility
- **Stories created** for Button, Select, Input, Badge, and Alert components

### Running Storybook

```bash
# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook
```

Storybook will be available at: http://localhost:6006

## Component Stories Created

The following components now have complete Storybook documentation:

### 1. Button (`button.stories.tsx`)
- All 8 variants (primary, secondary, outline, success, warning, danger, ghost, link)
- All 4 sizes (sm, default, lg, xl)
- Disabled state
- Showcase views (AllVariants, AllSizes)

### 2. Select (`select.stories.tsx`)
- Basic select with options
- With label for accessibility
- Pre-selected values
- Disabled state
- Many options example
- Form context example

### 3. Input (`input.stories.tsx`)
- Different input types (text, email, password, search, tel)
- With labels
- Default values
- Disabled state
- Form context example

### 4. Badge (`badge.stories.tsx`)
- All 6 variants (default, secondary, success, warning, danger, outline)
- Status indicators example
- Category/tag usage
- Badges with numbers

### 5. Alert (`alert.stories.tsx`)
- All 6 variants (default, success, warning, danger, info, emergency)
- With and without icons
- Title and description components
- Real-world examples (form validation, system maintenance)

## Creating Stories for Remaining Components

For your remaining components, follow this pattern:

### 1. Create a `.stories.tsx` file

Create a file next to your component (e.g., `accordion.stories.tsx` for the Accordion component).

### 2. Basic Story Structure

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { YourComponent } from './your-component'

const meta = {
  title: 'UI/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered', // or 'fullscreen' for full-width components
    docs: {
      description: {
        component: 'Description of your component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Define controls for props
    variant: {
      control: { type: 'select' },
      options: ['option1', 'option2'],
      description: 'Variant description',
    },
  },
} satisfies Meta<typeof YourComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // Default props
  },
}
```

### 3. Story Types to Include

For each component, consider creating these story types:

- **Default**: Basic usage
- **Variants**: One story per variant (if using class-variance-authority)
- **Sizes**: Different size options
- **States**: Disabled, loading, error states
- **AllVariants**: Showcase all variants together
- **UsageExample**: Realistic usage context

## Component Documentation Best Practices

### 1. Use Descriptive Titles
- Use hierarchical titles: `'UI/ComponentName'`
- This organizes components in the sidebar

### 2. Add Component Descriptions
```typescript
parameters: {
  docs: {
    description: {
      component: 'Clear description of what the component does.',
    },
  },
},
```

### 3. Document Props with ArgTypes
```typescript
argTypes: {
  variant: {
    control: { type: 'select' },
    options: ['primary', 'secondary'],
    description: 'The visual style variant',
  },
  disabled: {
    control: 'boolean',
    description: 'Whether the component is disabled',
  },
},
```

### 4. Add Story Descriptions
```typescript
export const Example: Story = {
  // ... story config
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates...',
      },
    },
  },
}
```

## Remaining Components to Document

Create stories for these remaining components:

- [ ] Accordion (`accordion.tsx`)
- [ ] Card (`card.tsx`)
- [ ] Checkbox (`checkbox.tsx`)
- [ ] Dialog (`dialog.tsx`)
- [ ] Footer (`footer.tsx`)
- [ ] Header (`header.tsx`)
- [ ] Label (`label.tsx`)
- [ ] Pagination (`pagination.tsx`)
- [ ] Radio Group (`radio-group.tsx`)
- [ ] Search (`search.tsx`)
- [ ] Table (`table.tsx`)

## Advanced Features

### Testing with Vitest
Stories can be used as tests:
```bash
npm test # Runs component tests based on stories
```

### Accessibility Testing
The a11y addon automatically checks for accessibility issues in your stories.

### Visual Testing
Stories provide a foundation for visual regression testing with tools like Chromatic.

## Tips for Success

1. **Start Simple**: Begin with basic Default stories, then add variants
2. **Real Examples**: Include realistic usage examples, not just isolated components
3. **Accessibility**: Always pair form inputs with labels in your stories
4. **Documentation**: Use the docs addon to generate comprehensive component documentation
5. **Consistency**: Follow the same naming patterns across all your stories

## Troubleshooting

### Common Issues

1. **PostCSS Errors**: Already fixed - config updated to object format
2. **Import Errors**: Make sure all component imports are correct
3. **Styling Issues**: Verify Tailwind classes are working in Storybook

### Getting Help

- Storybook docs: https://storybook.js.org/docs
- Component examples: Look at the created stories as templates
- Community: https://discord.gg/storybook

Your Storybook setup is now complete and ready for development! 🎉