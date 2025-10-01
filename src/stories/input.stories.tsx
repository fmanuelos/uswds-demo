import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A form input component with USWDS styling and proper focus states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
      description: 'The type of input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

// With Label
export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="input-with-label">Name</Label>
      <Input id="input-with-label" placeholder="Enter your name" {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input component paired with a label for better accessibility.',
      },
    },
  },
}

// Email Input
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="email-input">Email Address</Label>
      <Input id="email-input" {...args} />
    </div>
  ),
}

// Password Input
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="password-input">Password</Label>
      <Input id="password-input" {...args} />
    </div>
  ),
}

// Search Input
export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="search-input">Search</Label>
      <Input id="search-input" {...args} />
    </div>
  ),
}

// Disabled
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    defaultValue: 'This input is disabled',
  },
}

// With Default Value
export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'Default value',
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="default-value-input">Name</Label>
      <Input id="default-value-input" {...args} />
    </div>
  ),
}

// Form Example
export const FormExample: Story = {
  render: () => (
    <form className="space-y-4 w-full max-w-md">
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="first-name">First Name</Label>
        <Input id="first-name" placeholder="Enter your first name" />
      </div>
      
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="last-name">Last Name</Label>
        <Input id="last-name" placeholder="Enter your last name" />
      </div>
      
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple input fields used in a form context.',
      },
    },
  },
}