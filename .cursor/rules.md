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
│   │   ├── ui/                         # 17 Basic UI components (flat structure)
│   │   │   ├── accordion.tsx           # Expandable content panels
│   │   │   ├── alert.tsx               # Status notifications
│   │   │   ├── badge.tsx               # Status indicators
│   │   │   ├── button.tsx              # Button with 8 variants
│   │   │   ├── card.tsx                # Content containers
│   │   │   ├── checkbox.tsx            # Form checkboxes
│   │   │   ├── dialog.tsx              # Modal dialogs
│   │   │   ├── form.tsx                # Form components
│   │   │   ├── icon.tsx                # SVG icon system
│   │   │   ├── input.tsx               # Text inputs
│   │   │   ├── label.tsx               # Form labels
│   │   │   ├── pagination.tsx          # Page navigation
│   │   │   ├── radio-group.tsx         # Radio button groups
│   │   │   ├── search.tsx              # Search inputs
│   │   │   ├── select.tsx              # Dropdown selects
│   │   │   ├── separator.tsx           # Visual dividers
│   │   │   └── table.tsx               # Data tables
│   │   └── blocks/                     # Complex layout components
│   │       ├── footer.tsx              # Site footer
│   │       ├── header.tsx              # Navigation header
│   │       └── in-page-navigation.tsx  # Section navigation
│   ├── lib/
│   │   └── utils.ts                    # Utility functions, cn helper
│   ├── styles/
│   │   └── globals.css                 # USWDS-compliant global styles
│   ├── stories/                        # Storybook stories (separate from components)
│   │   ├── accordion.stories.tsx
│   │   ├── alert.stories.tsx
│   │   ├── badge.stories.tsx
│   │   ├── button.stories.tsx
│   │   ├── header.stories.tsx
│   │   ├── icon.stories.tsx
│   │   ├── input.stories.tsx
│   │   ├── select.stories.tsx
│   │   ├── separator.stories.tsx
│   │   ├── table.stories.tsx
│   │   └── Welcome.mdx
│   └── test/                           # Unit tests (separate from components)
│       ├── button.test.tsx
│       ├── icon.test.tsx
│       ├── table.test.tsx
│       └── setup.ts
├── .storybook/                         # Storybook configuration
├── registry.json                       # Component registry manifest
├── tailwind.config.ts
├── vitest.config.ts
├── README.md
├── REGISTRY_USAGE.md                   # Component registry documentation
├── STORYBOOK_GUIDE.md                  # Storybook usage guide
└── package.json
```

**Note:** This project uses a **flat file structure** for components, stories, and tests in separate directories, rather than colocating them. This makes it easier to manage the component registry and ensures clean separation of concerns.

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

**When to Use CVA:**
- ✅ Component has **2+ variants** with **actual style differences**
- ✅ Need type-safe variant combinations (e.g., size × variant)
- ✅ Component accepts variant props directly

**When NOT to Use CVA:**
- ❌ All variants are empty strings (`""`)
- ❌ Only one static style (use plain string instead)
- ❌ Variant comes from context (not props)
- ❌ Only 1-2 simple variants (manual types may be clearer)

#### Example: Using CVA (Multiple Real Variants)
```tsx
import { cva, type VariantProps } from 'class-variance-authority';

// ✅ GOOD: Real style differences across variants
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

// ✅ Use VariantProps to extract types automatically
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  VariantProps<typeof buttonVariants>
```

#### Example: Plain String (No Variants)
```tsx
// ✅ GOOD: Single style, no variants needed
const accordionTriggerStyles = "group flex items-center w-full py-4 px-5 bg-gray-5 hover:bg-gray-10 font-bold"

type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const AccordionTrigger = ({ className, ...props }: AccordionTriggerProps) => (
  <button className={cn(accordionTriggerStyles, className)} {...props} />
)
```

#### Example: CVA Only Where Needed
```tsx
// ✅ GOOD: Only use CVA for components with real variant differences
const accordionContentVariants = cva("py-6 px-4", {
  variants: {
    variant: {
      borderless: "",
      bordered: "border-b-4 border-x-4 border-gray-5",  // Real difference!
    },
  },
})

// ❌ BAD: Empty variants are unnecessary
const accordionItemVariants = cva("", {
  variants: {
    variant: { borderless: "", bordered: "" },  // All empty!
  },
})
```

**Decision Tree:**
```
Do you have a CVA definition?
├─ NO → ❌ Don't use VariantProps, use manual types
│
└─ YES → Does your component accept variant props?
    ├─ NO (variant from context) → ❌ Don't use VariantProps
    │
    └─ YES → Do variants have actual style differences?
        ├─ NO (all empty strings) → ❌ Remove CVA, use plain strings
        │
        └─ YES → ✅ USE CVA + VariantProps!
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
* **CVA Usage:** Only use CVA when you have real variant differences. Prefer plain strings for single styles or empty variants
* **VariantProps Usage:** Only use when component accepts variant props AND uses CVA with real style differences
* **Performance:** Use React.memo judiciously, keep dependencies minimal
* **Bundle Size:** Tree-shakeable exports, minimal dependencies
* **Code Simplicity:** Choose the simplest solution that works. Don't add complexity (CVA, VariantProps) unless it provides real value

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
