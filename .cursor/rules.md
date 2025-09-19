# Cursor Development Guidelines for USWDS Component Library

**Preamble:**
These instructions guide Cursor AI (and serve as a reference for developers) to generate code adhering to modern best practices for our USWDS Component Library project. The goal is high-quality, maintainable, performant, type-safe, and accessible React components. When in doubt, prioritize clarity, accessibility, USWDS compliance, and component reusability.

## Guiding Philosophy

Our primary goal is to build a robust, maintainable, accessible, and USWDS-compliant component library by leveraging React, TypeScript, and Storybook. We focus on creating reusable components that meet government accessibility standards (Section 508, WCAG 2.1 AA) while following USWDS design principles.

## Core Principles (Priorities):

1. **Component-First Architecture:** Build reusable, composable components for government applications.
2. **USWDS Compliance:** Follow US Web Design System guidelines for design, spacing, typography, colors, and component patterns.
3. **Accessibility First:** Ensure WCAG 2.1 AA compliance and Section 508 compliance for all components.
4. **Storybook-Driven Development:** Use Storybook as the primary development environment.
5. **TypeScript Everywhere:** Enforce strict typing for props, variants, and component APIs.
6. **Form Components with react-hook-form:** Use `react-hook-form` for form-related components.
7. **Tailwind + CVA for Styling:** Use Tailwind CSS with Class Variance Authority for type-safe variants.
8. **Comprehensive Testing:** Unit tests, accessibility tests, and visual regression testing.
9. **Documentation Excellence:** Every component should have clear documentation and examples.
10. **Performance Optimization:** Optimize for bundle size and runtime performance.

## Core Technologies:

* **React:** Version 19+. Functional components with hooks only.
* **TypeScript:** Strict mode enabled. Default to using `type` over `interface`.
* **Storybook:** Version 9.1+. Primary development environment.
* **State Management:**
  * **Local Component State:** React Hooks (`useState`, `useReducer`)
  * **Form State:** **`react-hook-form`** for form components
* **UI/UX Frameworks:**
  * **Tailwind CSS:** Version 4+. USWDS design tokens
  * **USWDS Design System:** Official guidelines for colors, typography, spacing
  * **Radix UI:** Headless primitives for complex accessible components
  * **Class Variance Authority (CVA):** Type-safe variant management
* **Validation:** **Zod** for schema definition in form components
* **Testing:** **Vitest** + **React Testing Library** + **@storybook/addon-a11y**

## Project File Structure:

```
uswds-demo/
├── src/
│   ├── components/
│   │   ├── ui/                    # Basic UI components
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.stories.tsx
│   │   │   │   ├── Button.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   ├── Select/
│   │   │   └── Badge/
│   │   └── blocks/               # Complex layout components
│   │       ├── Header/
│   │       └── Footer/
│   ├── lib/
│   │   ├── utils.ts              # Utility functions, cn helper
│   │   └── constants.ts          # USWDS design tokens
│   ├── styles/
│   │   └── globals.css           # USWDS-compliant global styles
│   ├── stories/                  # Storybook configuration
│   └── test/
│       └── setup.ts              # Test setup
├── public/                       # Static assets
├── .storybook/                   # Storybook configuration
├── tailwind.config.ts
├── vitest.config.ts
└── package.json
```

## Component Development Guidelines:

### React Component Structure:
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

### Styling with CVA:
```tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-50',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
```

### Storybook Story Structure:
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};
```

### Form Components with react-hook-form:
```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && <label className="text-sm font-medium">{label}</label>}
        <input
          ref={ref}
          className={cn('border rounded px-3 py-2', className)}
          {...props}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);
```

## Accessibility Requirements:

* **WCAG 2.1 AA Compliance:** All components must meet accessibility standards
* **Semantic HTML:** Use proper semantic elements as foundation
* **ARIA Attributes:** Include appropriate ARIA labels and descriptions
* **Keyboard Navigation:** Full keyboard support (Tab, Enter, Arrow keys, Escape)
* **Focus Management:** Visible focus indicators and logical tab order
* **Color Contrast:** Follow USWDS color palette for accessibility
* **Screen Reader Support:** Test with screen readers

## USWDS Compliance:

* **Design System Adherence:** Follow USWDS patterns and component designs
* **Typography:** Use USWDS-approved fonts (Public Sans, Source Sans, etc.)
* **Color Palette:** Government-approved color combinations only
* **Grid System:** 8px grid system for consistent spacing
* **Component Patterns:** Implement following official USWDS guidelines

## Testing Strategy:

1. **Unit Tests (Vitest):** Component logic, prop handling, behavior
2. **Component Tests (React Testing Library):** Rendering, interactions, accessibility
3. **Accessibility Tests (@storybook/addon-a11y):** Automated a11y testing in Storybook
4. **Visual Regression Tests:** Consider Chromatic for visual testing
5. **Test Colocation:** Place test files alongside components

## Component Development Workflow:

1. **Design Review:** Ensure USWDS compliance
2. **Component Creation:** TypeScript interfaces + CVA variants
3. **Storybook Stories:** Comprehensive stories for all states
4. **Accessibility Testing:** Keyboard navigation + screen reader testing
5. **Unit Tests:** Component behavior and edge cases
6. **Documentation:** JSDoc comments + usage examples
7. **Code Review:** Focus on accessibility, USWDS compliance, reusability

## Naming Conventions:

* **Components, Types, Interfaces:** `PascalCase`
* **Variables, Functions, Hooks:** `camelCase`
* **Constants:** `UPPER_SNAKE_CASE`
* **Component Files:** `PascalCase` for both folder and main file
* **Non-Component Files:** `kebab-case`

## Best Practices:

* **TypeScript Strict Mode:** Always enabled
* **Explicit Prop Interfaces:** Define clear component APIs
* **forwardRef:** Use for components needing ref access
* **Default Parameter Values:** Instead of defaultProps
* **JSDoc Comments:** Document all exported components and functions
* **CN Utility:** Always use for className merging
* **Performance:** Use React.memo judiciously, keep dependencies minimal
* **Bundle Size:** Tree-shakeable exports, minimal dependencies

## Error Handling:

* **Component Error Boundaries:** For components that might fail
* **Prop Validation:** TypeScript interfaces + runtime validation
* **Graceful Degradation:** Handle missing props gracefully
* **Error States:** Include in component designs and stories

## Documentation Standards:

* **JSDoc Comments:** All exported components, functions, types
* **Storybook Docs:** Use autodocs feature
* **Usage Examples:** Clear examples for each component
* **Accessibility Notes:** Document keyboard interactions and ARIA features
* **README Files:** For complex components
