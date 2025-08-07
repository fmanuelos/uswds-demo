import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle, AlertDescription } from './alert'

const meta = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Alert component for displaying important messages with different severity levels, following USWDS design guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'danger', 'info', 'emergency'],
      description: 'The visual style variant of the alert',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the status icon',
      defaultValue: true,
    },
    role: {
      control: { type: 'select' },
      options: ['alert', 'status'],
      description: 'ARIA role for accessibility',
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    children: 'This is a default alert message.',
  },
}

// Variant stories
export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your form has been submitted successfully.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please review your information before proceeding.
      </AlertDescription>
    </Alert>
  ),
}

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        There was an error processing your request. Please try again.
      </AlertDescription>
    </Alert>
  ),
}

export const Info: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is some important information you should know.
      </AlertDescription>
    </Alert>
  ),
}

export const Emergency: Story = {
  args: {
    variant: 'emergency',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Emergency Alert</AlertTitle>
      <AlertDescription>
        This is an emergency alert requiring immediate attention.
      </AlertDescription>
    </Alert>
  ),
}

// Without Icon
export const WithoutIcon: Story = {
  args: {
    variant: 'success',
    showIcon: false,
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Success (No Icon)</AlertTitle>
      <AlertDescription>
        This alert displays without an icon.
      </AlertDescription>
    </Alert>
  ),
}

// Simple text only
export const SimpleText: Story = {
  args: {
    variant: 'info',
    children: 'This is a simple alert without title and description components.',
  },
}

// All Variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-4xl">
      <Alert variant="default">
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </Alert>
      
      <Alert variant="success">
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>This is a success alert message.</AlertDescription>
      </Alert>
      
      <Alert variant="warning">
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>This is a warning alert message.</AlertDescription>
      </Alert>
      
      <Alert variant="danger">
        <AlertTitle>Danger Alert</AlertTitle>
        <AlertDescription>This is a danger alert message.</AlertDescription>
      </Alert>
      
      <Alert variant="info">
        <AlertTitle>Info Alert</AlertTitle>
        <AlertDescription>This is an info alert message.</AlertDescription>
      </Alert>
      
      <Alert variant="emergency">
        <AlertTitle>Emergency Alert</AlertTitle>
        <AlertDescription>This is an emergency alert message.</AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available alert variants displayed together.',
      },
    },
  },
}

// Real-world examples
export const FormValidation: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Alert variant="danger">
        <AlertTitle>Form Validation Error</AlertTitle>
        <AlertDescription>
          Please correct the following errors:
          <ul className="mt-2 list-disc list-inside">
            <li>Email address is required</li>
            <li>Password must be at least 8 characters</li>
            <li>Please accept the terms and conditions</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using alerts for form validation feedback.',
      },
    },
  },
}

export const SystemMaintenance: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Alert variant="warning">
        <AlertTitle>Scheduled Maintenance</AlertTitle>
        <AlertDescription>
          The system will be undergoing maintenance on Sunday, March 15th from 2:00 AM to 6:00 AM EST. 
          During this time, some features may be unavailable.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using alerts for system notifications.',
      },
    },
  },
}