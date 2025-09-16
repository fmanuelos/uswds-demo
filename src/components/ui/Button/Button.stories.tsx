import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, within } from '@storybook/test'
import { Button } from './Button'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and sizes following USWDS design guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'success', 'warning', 'danger', 'ghost', 'link'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl', 'icon'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'The content of the button',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Default story with basic test
export const Default: Story = {
  args: {
    children: 'Button',
  },
  play: async ({ canvasElement, userEvent }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button', { name: /button/i })

    await userEvent.click(button)
    
    // Test that button renders correctly
    await expect(button).toBeInTheDocument()
    await expect(button).toHaveTextContent('Button')
    await expect(button).not.toBeDisabled()
  },
}

// Variant stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button', { name: /primary button/i })
    
    // Test primary variant styling
    await expect(button).toHaveClass('bg-blue-60v', 'text-white')
    await expect(button).not.toHaveClass('border')
  },
}

export const Base: Story = {
  args: {
    variant: 'base',
    children: 'Base Button',
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button')
    
    // Test base variant has border
    await expect(button).toHaveClass('bg-gray-50', 'text-white')
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button')
    
    // Test secondary variant has border
    await expect(button).toHaveClass('bg-red-50', 'text-white')

  },
}

export const AccentCool: Story = {

  args: {
    variant: 'accent-cool',
    children: 'Accent Button',
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button')
    
    // Test accent cool variant has blue styling
    await expect(button).toHaveClass('bg-cyan-30', 'text-black')
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button')
    
    // Test success variant has green styling
    await expect(button).toHaveClass('bg-green-60', 'text-white')
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Button',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button')
    
    // Test danger variant has red styling
    await expect(button).toHaveClass('bg-red-60', 'text-white')
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
}

// Size stories
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button')
    
    // Test small size classes
    await expect(button).toHaveClass('px-3', 'py-2', 'text-sm')
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button')
    
    // Test large size classes
    await expect(button).toHaveClass('px-6', 'py-4', 'text-lg')
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Extra Large Button',
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    variant: 'primary',
    'aria-label': 'Search',
  },
  render: (args) => (
    <Button {...args}>
      <span className="icon-[material-symbols--search]" />
    </Button>
  ),
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button', { name: /search/i })
    
    // Test icon size classes
    await expect(button).toHaveClass('size-9')
    await expect(button).toHaveAttribute('aria-label', 'Search')
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only button with fixed square dimensions. Always include an aria-label for accessibility.',
      },
    },
  },
}

// Interactive test story
export const Interactive: Story = {
  args: {
    children: 'Click Me!',
    onClick: fn(),
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button', { name: /click me!/i })
    
    // Verify button is in the document
    await expect(button).toBeInTheDocument()

    // Click button
    await userEvent.click(button)

    // Verify click handler was called
    await expect(args.onClick).toHaveBeenCalledTimes(1)
  },
}

// Keyboard navigation test
export const KeyboardNavigation: Story = {
  args: {
    children: 'Keyboard Test',
  },
  play: async ({ canvasElement, userEvent }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button')
    
    // Test keyboard navigation
    await userEvent.tab()
    await expect(button).toHaveFocus()
    
    // Test Enter key activation
    await userEvent.keyboard('{Enter}')
    await expect(button).toHaveFocus()
    
    // Test Space key activation
    await userEvent.keyboard(' ')
    await expect(button).toHaveFocus()
  },
}

// Accessibility test
export const AccessibilityTest: Story = {
  args: {
    children: 'Accessible Button',
    'aria-label': 'Custom accessible label',
    'aria-describedby': 'button-description',
  },
  render: (args) => (
    <div>
      <Button {...args} />
      <div id="button-description" className="sr-only">
        This button performs a custom action
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button', { name: /custom accessible label/i })
    
    // Test accessibility attributes
    await expect(button).toHaveAttribute('aria-label', 'Custom accessible label')
    await expect(button).toHaveAttribute('aria-describedby', 'button-description')
    
    // Test description element exists
    const description = screen.getByText('This button performs a custom action')
    await expect(description).toBeInTheDocument()
  },
}

// State stories with interaction tests
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const button = screen.getByRole('button')
    
    // Test disabled state
    await expect(button).toBeDisabled()
    await expect(button).toHaveClass('disabled:pointer-events-none', 'disabled:opacity-50')
  },
}

// All Variants showcase with comprehensive testing
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  play: async ({ canvasElement, userEvent }) => {
    const screen = within(canvasElement)
    // Get all variant buttons
    const primaryButton = screen.getByRole('button', { name: /^primary$/i })
    const secondaryButton = screen.getByRole('button', { name: /^secondary$/i })
    const outlineButton = screen.getByRole('button', { name: /^outline$/i })
    const successButton = screen.getByRole('button', { name: /^success$/i })
    const warningButton = screen.getByRole('button', { name: /^warning$/i })
    const dangerButton = screen.getByRole('button', { name: /^danger$/i })
    const ghostButton = screen.getByRole('button', { name: /^ghost$/i })
    const linkButton = screen.getByRole('button', { name: /^link$/i })
    
    // Verify all buttons exist
    await expect(primaryButton).toBeInTheDocument()
    await expect(secondaryButton).toBeInTheDocument()
    await expect(outlineButton).toBeInTheDocument()
    await expect(successButton).toBeInTheDocument()
    await expect(warningButton).toBeInTheDocument()
    await expect(dangerButton).toBeInTheDocument()
    await expect(ghostButton).toBeInTheDocument()
    await expect(linkButton).toBeInTheDocument()


    // Test interactions work for all buttons
    await userEvent.click(primaryButton)
    await userEvent.click(secondaryButton)
    await userEvent.click(successButton)
    await userEvent.click(warningButton)
    await userEvent.click(dangerButton)
    await userEvent.click(ghostButton)
    await userEvent.click(linkButton)
    
    // Test specific styling for key variants
    await expect(primaryButton).toHaveClass('bg-blue-60', 'text-white')
    await expect(secondaryButton).toHaveClass('border-2', 'border-blue-60')
    await expect(outlineButton).toHaveClass('border-2', 'border-blue-60')
    await expect(successButton).toHaveClass('bg-green-60')
    await expect(warningButton).toHaveClass('bg-yellow-60')
    await expect(dangerButton).toHaveClass('bg-red-60')
    await expect(ghostButton).toHaveClass('bg-transparent')
    await expect(linkButton).toHaveClass('text-blue-60')
  },
  parameters: {
    docs: {
      description: {
        story: 'All available button variants displayed together with comprehensive testing.',
      },
    },
  },
}

// All Sizes showcase with size validation
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="icon" aria-label="Icon button">
        <span className="icon-[material-symbols--settings]" />
      </Button>
    </div>
  ),
  play: async ({ canvasElement, userEvent }) => {
    const screen = within(canvasElement)
    // Get all size buttons
    const smallButton = screen.getByRole('button', { name: /^small$/i })
    const defaultButton = screen.getByRole('button', { name: /^default$/i })
    const largeButton = screen.getByRole('button', { name: /^large$/i })
    const xlButton = screen.getByRole('button', { name: /^extra large$/i })
    const iconButton = screen.getByRole('button', { name: /icon button/i })
    
    // Test that all sizes are clickable
    await userEvent.click(smallButton)
    await userEvent.click(defaultButton)
    await userEvent.click(largeButton)
    await userEvent.click(xlButton)
    await userEvent.click(iconButton)
    
    // Verify size-specific classes
    await expect(smallButton).toHaveClass('px-3', 'py-2', 'text-sm')
    await expect(defaultButton).toHaveClass('px-5', 'py-3')
    await expect(largeButton).toHaveClass('px-6', 'py-4', 'text-lg')
    await expect(xlButton).toHaveClass('px-8', 'py-5', 'text-xl')
    await expect(iconButton).toHaveClass('size-9')
  },
  parameters: {
    docs: {
      description: {
        story: 'All available button sizes displayed together with size validation.',
      },
    },
  },
}