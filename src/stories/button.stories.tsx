import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Icon as UswdsIcon } from '../icon'

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

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
  },
}

// Variant stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Base: Story = {
  args: {
    variant: 'base',
    children: 'Base Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const AccentCool: Story = {
  args: {
    variant: 'accent-cool',
    children: 'Accent Button',
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
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
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
      <UswdsIcon icon="search" />
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only button with fixed square dimensions. Always include an aria-label for accessibility.',
      },
    },
  },
}

// Interactive story
export const Interactive: Story = {
  args: {
    children: 'Click Me!',
  },
}

// Keyboard navigation story
export const KeyboardNavigation: Story = {
  args: {
    children: 'Keyboard Test',
  },
}

// Accessibility story
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
}

// State stories
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}

// All Variants showcase
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
  parameters: {
    docs: {
      description: {
        story: 'All available button variants displayed together.',
      },
    },
  },
}

// All Sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="icon" aria-label="Icon button">
        <UswdsIcon icon="settings" />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button sizes displayed together.',
      },
    },
  },
}