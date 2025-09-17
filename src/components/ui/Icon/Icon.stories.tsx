import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { 
  Icon, 
  SearchIcon, 
  UserIcon, 
  HomeIcon, 
  SettingsIcon, 
  DocumentIcon, 
  CalendarIcon, 
  MailIcon, 
  PhoneIcon, 
  LockIcon, 
  MenuIcon, 
  type IconType 
} from './Icon'

const meta = {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible inline SVG icon component with 10 government/business-appropriate icons, multiple sizes, and variants following USWDS design guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['search', 'user', 'home', 'settings', 'document', 'calendar', 'mail', 'phone', 'lock', 'menu'] as IconType[],
      description: 'The icon to display',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl', '2xl'],
      description: 'The size of the icon',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined'],
      description: 'The visual style of the icon',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling',
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    icon: 'search',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img')
    
    await expect(icon).toBeInTheDocument()
    await expect(icon).toHaveAttribute('viewBox', '0 0 24 24')
    await expect(icon).toHaveClass('h-5', 'w-5') // default size
  },
}

// All Icons showcase
export const AllIcons: Story = {
  args: { icon: 'search' },
  render: () => (
    <div className="grid grid-cols-5 gap-6 p-6">
      <div className="flex flex-col items-center gap-2">
        <Icon icon="search" size="xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">Search</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="user" size="xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">User</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="home" size="xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">Home</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="settings" size="xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">Settings</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="document" size="xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">Document</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="calendar" size="xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">Calendar</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="mail" size="xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">Mail</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="phone" size="xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">Phone</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="lock" size="xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">Lock</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="menu" size="xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">Menu</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All 10 available government-appropriate icons displayed together.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const icons = canvas.getAllByRole('img')
    
    // Test that all 10 icons are rendered
    await expect(icons).toHaveLength(10)
    
    // Test that all icons have proper viewBox
    icons.forEach(async (icon) => {
      await expect(icon).toHaveAttribute('viewBox', '0 0 24 24')
    })
  },
}

// All Sizes showcase
export const AllSizes: Story = {
  args: { icon: 'search' },
  render: () => (
    <div className="flex items-end gap-6 p-6">
      <div className="flex flex-col items-center gap-2">
        <Icon icon="search" size="xs" className="text-blue-60" />
        <span className="text-xs text-gray-60">XS (12px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="search" size="sm" className="text-blue-60" />
        <span className="text-xs text-gray-60">SM (16px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="search" size="default" className="text-blue-60" />
        <span className="text-xs text-gray-60">Default (20px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="search" size="lg" className="text-blue-60" />
        <span className="text-xs text-gray-60">LG (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="search" size="xl" className="text-blue-60" />
        <span className="text-xs text-gray-60">XL (32px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="search" size="2xl" className="text-blue-60" />
        <span className="text-xs text-gray-60">2XL (40px)</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available icon sizes from extra small to 2XL.',
      },
    },
  },
}

// Variants showcase
export const Variants: Story = {
  args: { icon: 'user' },
  render: () => (
    <div className="flex items-center gap-12 p-6">
      <div className="flex flex-col items-center gap-3">
        <Icon icon="user" variant="default" size="2xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">Default (Outline)</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Icon icon="user" variant="filled" size="2xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">Filled</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Icon icon="user" variant="outlined" size="2xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">Outlined (Thick)</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three visual variants: default outline, filled, and thick outlined.',
      },
    },
  },
}

// Individual Components
export const IndividualComponents: Story = {
  args: { icon: 'search' },
  render: () => (
    <div className="flex items-center gap-4 p-6">
      <SearchIcon size="lg" className="text-blue-60" />
      <UserIcon size="lg" className="text-green-60" />
      <HomeIcon size="lg" className="text-orange-60" />
      <SettingsIcon size="lg" className="text-purple-60" />
      <DocumentIcon size="lg" className="text-red-60" />
      <CalendarIcon size="lg" className="text-cyan-60" />
      <MailIcon size="lg" className="text-yellow-60" />
      <PhoneIcon size="lg" className="text-pink-60" />
      <LockIcon size="lg" className="text-indigo-60" />
      <MenuIcon size="lg" className="text-gray-60" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using individual icon components with USWDS-compliant colors.',
      },
    },
  },
}

// Government Contact Card Example
export const GovernmentContactCard: Story = {
  render: () => (
    <div className="max-w-md bg-white border border-gray-30 rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <UserIcon size="2xl" className="text-blue-60" />
        <div>
          <h3 className="font-bold text-lg text-gray-90">Sarah Johnson</h3>
          <p className="text-sm text-gray-60">Senior Program Manager</p>
          <p className="text-sm text-gray-50">U.S. Department of Health</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-sm">
          <MailIcon size="default" className="text-gray-50" />
          <span className="text-gray-70">sarah.johnson@hhs.gov</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <PhoneIcon size="default" className="text-gray-50" />
          <span className="text-gray-70">(202) 555-0123</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <CalendarIcon size="default" className="text-gray-50" />
          <span className="text-gray-70">Available Mon-Fri 8:30AM-5:00PM EST</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <HomeIcon size="default" className="text-gray-50" />
          <span className="text-gray-70">Washington, DC Office</span>
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-60 text-white rounded-md hover:bg-blue-70 focus:outline focus:outline-4 focus:outline-blue-40">
          <MailIcon size="sm" />
          Contact
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-30 text-gray-70 rounded-md hover:bg-gray-5 focus:outline focus:outline-4 focus:outline-blue-40">
          <CalendarIcon size="sm" />
          Schedule
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage in a government employee contact card with USWDS styling.',
      },
    },
    layout: 'centered',
  },
}

// Accessibility Test
export const AccessibilityTest: Story = {
  args: {
    icon: 'search',
    size: 'lg',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img')
    
    // Test accessibility attributes
    await expect(icon).toHaveAttribute('role', 'img')
    await expect(icon).toHaveAttribute('aria-hidden', 'true')
    await expect(icon).toHaveAttribute('viewBox', '0 0 24 24')
    
    // Test SVG structure
    await expect(icon.tagName.toLowerCase()).toBe('svg')
  },
  parameters: {
    docs: {
      description: {
        story: 'Accessibility testing with proper ARIA attributes and semantic structure.',
      },
    },
  },
}
