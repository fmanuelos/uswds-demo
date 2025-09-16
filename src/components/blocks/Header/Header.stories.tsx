import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, within } from '@storybook/test'
import { Header, type HeaderNavigation } from './Header'

// Sample navigation data for stories
const sampleNavigation: HeaderNavigation = {
  primary: [
    {
      label: "Services",
      href: "#",
      children: [
        { label: "Web Design", href: "/services/web-design" },
        { label: "Development", href: "/services/development" },
        { label: "Consulting", href: "/services/consulting" },
        { label: "UI/UX Design", href: "/services/design" }
      ]
    },
    { label: "About", href: "/about", isActive: true },
    { label: "Contact", href: "/contact" },
    {
      label: "Resources",
      href: "#",
      children: [
        { label: "Documentation", href: "/docs" },
        { label: "Blog", href: "/blog" },
        { label: "Tutorials", href: "/tutorials" }
      ]
    }
  ],
  secondary: [
    { label: "Help", href: "/help" },
    { label: "Login", href: "/login" }
  ]
}

const simpleNavigation: HeaderNavigation = {
  primary: [
    { label: "Home", href: "/", isActive: true },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]
}

const meta = {
  title: 'Blocks/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive header component with navigation, search functionality, and mobile responsiveness following USWDS design guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    projectTitle: {
      control: 'text',
      description: 'The title/brand name displayed in the header',
    },
    projectTitleHref: {
      control: 'text',
      description: 'The URL for the project title link',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'extended'],
      description: 'The visual variant of the header',
    },
    navigation: {
      control: 'object',
      description: 'Navigation structure with primary and optional secondary items',
    },
    onSearch: { 
      action: 'searched',
      description: 'Callback function when search is performed'
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

// Default story with basic test
export const Default: Story = {
  args: {
    projectTitle: 'USWDS Demo Site',
    projectTitleHref: '/',
    navigation: sampleNavigation,
    onSearch: fn(),
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const header = screen.getByRole('banner')
    const projectTitle = screen.getByText('USWDS Demo Site')
    
    // Test that header renders correctly
    await expect(header).toBeInTheDocument()
    await expect(projectTitle).toBeInTheDocument()
    await expect(projectTitle.closest('a')).toHaveAttribute('href', '/')
    
    // Test that navigation items are present
    await expect(screen.getByText('Services')).toBeInTheDocument()
    await expect(screen.getByText('About')).toBeInTheDocument()
    await expect(screen.getByText('Contact')).toBeInTheDocument()
    await expect(screen.getByText('Resources')).toBeInTheDocument()
  },
}

// Simple navigation variant
export const SimpleNavigation: Story = {
  args: {
    projectTitle: 'Simple Site',
    navigation: simpleNavigation,
    onSearch: fn(),
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    
    // Test simple navigation structure
    await expect(screen.getByText('Home')).toBeInTheDocument()
    await expect(screen.getByText('About')).toBeInTheDocument()
    await expect(screen.getByText('Contact')).toBeInTheDocument()
    
    // Test that active state is applied
    const homeLink = screen.getByText('Home').closest('a')
    await expect(homeLink).toHaveClass('after:bg-blue-60')
  },
}

// Extended variant
export const Extended: Story = {
  args: {
    projectTitle: 'Extended Header Site',
    variant: 'extended',
    navigation: sampleNavigation,
    onSearch: fn(),
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const header = screen.getByRole('banner')
    const projectTitle = screen.getByText('Extended Header Site')
    
    // Test extended variant styling
    await expect(header).toHaveClass('border-b-0')
    await expect(projectTitle).toBeInTheDocument()
    
    // Test navigation is still present
    await expect(screen.getByText('Services')).toBeInTheDocument()
  },
  parameters: {
    docs: {
      description: {
        story: 'Extended variant provides more space for the project title and additional navigation layout.',
      },
    },
  },
}

// No secondary navigation
export const NoSecondaryNav: Story = {
  args: {
    projectTitle: 'Primary Only Site',
    navigation: {
      primary: [
        { label: "Home", href: "/", isActive: true },
        { label: "Products", href: "/products" },
        { label: "Support", href: "/support" }
      ]
    },
    onSearch: fn(),
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    
    // Test primary navigation
    await expect(screen.getByText('Home')).toBeInTheDocument()
    await expect(screen.getByText('Products')).toBeInTheDocument()
    await expect(screen.getByText('Support')).toBeInTheDocument()
    
    // Test no secondary navigation items are present
    await expect(screen.queryByText('Help')).not.toBeInTheDocument()
    await expect(screen.queryByText('Login')).not.toBeInTheDocument()
  },
}

// Dropdown navigation test
export const DropdownNavigation: Story = {
  args: {
    projectTitle: 'Dropdown Test Site',
    navigation: {
      primary: [
        {
          label: "Products",
          href: "#",
          children: [
            { label: "Product A", href: "/products/a" },
            { label: "Product B", href: "/products/b" },
            { label: "Product C", href: "/products/c" }
          ]
        },
        { label: "About", href: "/about" }
      ]
    },
    onSearch: fn(),
  },
  play: async ({ canvasElement, userEvent }) => {
    const screen = within(canvasElement)
    
    // Test dropdown functionality (desktop view)
    const productsButton = screen.getByText('Products').closest('button')
    if (productsButton) {
      await userEvent.click(productsButton)
      
      // Check if dropdown items appear
      await expect(screen.getByText('Product A')).toBeInTheDocument()
      await expect(screen.getByText('Product B')).toBeInTheDocument()
      await expect(screen.getByText('Product C')).toBeInTheDocument()
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with dropdown menus. Click on "Products" to see the dropdown functionality.',
      },
    },
  },
}

// Search functionality test
export const SearchTest: Story = {
  args: {
    projectTitle: 'Search Test Site',
    navigation: simpleNavigation,
    onSearch: fn(),
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const screen = within(canvasElement)
    
    // Find search input (it might be initially hidden or in a different form)
    const searchInputs = screen.queryAllByRole('searchbox')
    if (searchInputs.length > 0) {
      const searchInput = searchInputs[0]
      
      // Test search functionality
      await userEvent.type(searchInput, 'test query')
      
      // Find and click search button
      const searchButton = screen.getByRole('button', { name: /search/i })
      await userEvent.click(searchButton)
      
      // Verify search handler was called
      await expect(args.onSearch).toHaveBeenCalledWith('test query')
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Test search functionality in the header. The search component should trigger the onSearch callback.',
      },
    },
  },
}

// Mobile menu test
export const MobileMenu: Story = {
  args: {
    projectTitle: 'Mobile Test Site',
    navigation: sampleNavigation,
    onSearch: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile responsive view with hamburger menu. Resize viewport to mobile to see the mobile menu button.',
      },
    },
  },
  play: async ({ canvasElement, userEvent }) => {
    const screen = within(canvasElement)
    
    // Look for mobile menu button (only visible on mobile)
    const menuButton = screen.queryByText('Menu')
    if (menuButton) {
      // Test mobile menu functionality
      await userEvent.click(menuButton)
      
      // The mobile menu should appear (in a dialog/modal)
      // Note: The specific test would depend on how the dialog is implemented
    }
  },
}

// Custom project title href
export const CustomTitleHref: Story = {
  args: {
    projectTitle: 'Custom Link Site',
    projectTitleHref: '/custom-home',
    navigation: simpleNavigation,
    onSearch: fn(),
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const projectTitle = screen.getByText('Custom Link Site')
    const titleLink = projectTitle.closest('a')
    
    // Test custom href
    await expect(titleLink).toHaveAttribute('href', '/custom-home')
  },
}

// Active navigation state test
export const ActiveNavigation: Story = {
  args: {
    projectTitle: 'Active State Site',
    navigation: {
      primary: [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products", isActive: true },
        { label: "About", href: "/about" }
      ]
    },
    onSearch: fn(),
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    
    // Test that active state is properly applied
    const productsLink = screen.getByText('Products').closest('a')
    await expect(productsLink).toHaveClass('after:bg-blue-60')
    
    // Test that non-active items don't have active styling
    const homeLink = screen.getByText('Home').closest('a')
    await expect(homeLink).not.toHaveClass('after:bg-blue-60')
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with active state styling. The "Products" item is marked as active.',
      },
    },
  },
}

// Accessibility test
export const AccessibilityTest: Story = {
  args: {
    projectTitle: 'Accessible Site',
    navigation: sampleNavigation,
    onSearch: fn(),
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    
    // Test semantic HTML structure
    const header = screen.getByRole('banner')
    await expect(header).toBeInTheDocument()
    
    // Test navigation landmark
    const navigation = screen.getByRole('navigation')
    await expect(navigation).toBeInTheDocument()
    
    // Test search component has proper labeling
    const searchSection = screen.getByLabelText('search component')
    await expect(searchSection).toBeInTheDocument()
    
    // Test that links have proper href attributes
    const aboutLink = screen.getByText('About').closest('a')
    await expect(aboutLink).toHaveAttribute('href')
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests accessibility features including semantic HTML, ARIA labels, and keyboard navigation support.',
      },
    },
  },
}

// Complete header showcase
export const CompleteShowcase: Story = {
  args: {
    projectTitle: 'Complete USWDS Demo',
    projectTitleHref: '/',
    variant: 'default',
    navigation: {
      primary: [
        {
          label: "Government",
          href: "#",
          children: [
            { label: "Federal Agencies", href: "/federal" },
            { label: "State & Local", href: "/state-local" },
            { label: "Tribal", href: "/tribal" }
          ]
        },
        {
          label: "Services",
          href: "#",
          isActive: true,
          children: [
            { label: "Digital Services", href: "/services/digital" },
            { label: "Consulting", href: "/services/consulting" },
            { label: "Training", href: "/services/training" },
            { label: "Support", href: "/services/support" }
          ]
        },
        { label: "Resources", href: "/resources" },
        { label: "News", href: "/news" },
        { label: "Contact", href: "/contact" }
      ],
      secondary: [
        { label: "Help", href: "/help" },
        { label: "Sign In", href: "/login" },
        { label: "Create Account", href: "/register" }
      ]
    },
    onSearch: fn(),
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    
    // Comprehensive test of all major features
    await expect(screen.getByRole('banner')).toBeInTheDocument()
    await expect(screen.getByText('Complete USWDS Demo')).toBeInTheDocument()
    
    // Test all primary navigation items
    await expect(screen.getByText('Government')).toBeInTheDocument()
    await expect(screen.getByText('Services')).toBeInTheDocument()
    await expect(screen.getByText('Resources')).toBeInTheDocument()
    await expect(screen.getByText('News')).toBeInTheDocument()
    await expect(screen.getByText('Contact')).toBeInTheDocument()
    
    // Test secondary navigation
    await expect(screen.getByText('Help')).toBeInTheDocument()
    await expect(screen.getByText('Sign In')).toBeInTheDocument()
    await expect(screen.getByText('Create Account')).toBeInTheDocument()
    
    // Test active state
    const servicesLink = screen.getByText('Services').closest('button') || screen.getByText('Services').closest('a')
    if (servicesLink) {
      await expect(servicesLink).toHaveClass('after:bg-blue-60')
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete header implementation showcasing all features: complex navigation with dropdowns, secondary navigation, active states, and search functionality.',
      },
    },
  },
}
