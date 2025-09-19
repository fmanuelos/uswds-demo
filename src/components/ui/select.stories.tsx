import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './select'
import { Label } from './label'

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A select dropdown component following USWDS design guidelines with proper focus states and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default'],
      description: 'The size of the select input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="">Choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  ),
}

// With Label
export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="select-with-label">Select an option</Label>
      <Select id="select-with-label" {...args}>
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select component paired with a label for better accessibility.',
      },
    },
  },
}

// Pre-selected
export const PreSelected: Story = {
  render: (args) => (
    <Select defaultValue="option2" {...args}>
      <option value="">Choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2 (Selected)</option>
      <option value="option3">Option 3</option>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select component with a pre-selected option.',
      },
    },
  },
}

// Disabled
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Select {...args}>
      <option value="">Choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  ),
}

// With Many Options
export const WithManyOptions: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="select-many">Select a US State</Label>
      <Select id="select-many" {...args}>
        <option value="">Choose a state</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select component with many options to test scrolling behavior.',
      },
    },
  },
}

// Form Example
export const FormExample: Story = {
  render: (args) => (
    <form className="space-y-4 w-full max-w-md">
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="country">Country</Label>
        <Select id="country" {...args}>
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="mx">Mexico</option>
          <option value="uk">United Kingdom</option>
        </Select>
      </div>
      
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="priority">Priority Level</Label>
        <Select id="priority" defaultValue="medium">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </Select>
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple select components used in a form context.',
      },
    },
  },
}