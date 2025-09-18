import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { 
  Icon, 
  IconType,
  // Individual Icon Components
  AccessibilityNewIcon, AccessibleForwardIcon, SearchIcon, HomeIcon, MenuIcon, CloseIcon,
  ArrowBackIcon, ArrowForwardIcon, ArrowUpwardIcon, ArrowDownwardIcon, ArrowDropDownIcon, ArrowDropUpIcon,
  ExpandMoreIcon, ExpandLessIcon, PersonIcon, AccountCircleIcon, AccountBalanceIcon, AccountBoxIcon,
  GroupsIcon, LoginIcon, LogoutIcon, MailIcon, PhoneIcon, ChatIcon, AnnouncementIcon, AlternateEmailIcon,
  FolderIcon, FolderOpenIcon, FileDownloadIcon, FileUploadIcon, FilePresentIcon, AttachFileIcon, AttachMoneyIcon,
  CalendarTodayIcon, EventIcon, ScheduleIcon, AlarmIcon, AddIcon, AddCircleIcon, AddCircleOutlineIcon,
  EditIcon, DeleteIcon, CheckIcon, CheckBoxOutlineBlankIcon, CheckCircleIcon, CheckCircleOutlineIcon,
  CancelIcon, RemoveIcon, SaveAltIcon, AutorenewIcon, InfoIcon, WarningIcon, ErrorIcon, HelpIcon,
  LockIcon, LockOpenIcon, SecurityIcon, ShieldIcon, VerifiedIcon, FlagIcon, PublicIcon, LocationOnIcon,
  LocalPoliceIcon, LocalHospitalIcon, SettingsIcon, PrintIcon, ShareIcon, LinkIcon, VisibilityIcon,
  VisibilityOffIcon, ApiIcon, AssessmentIcon, BuildIcon, BugReportIcon, BookmarkIcon,
  BackpackIcon, BathtubIcon, BeddingIcon, CampaignIcon, CampingIcon, CheckroomIcon, CleanHandsIcon, ClothesIcon,
  // Legacy aliases
  UserIcon, DocumentIcon, CalendarIcon
} from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive inline SVG icon component with 77+ USWDS government-appropriate icons, multiple sizes, and variants following U.S. Web Design System guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [
        'accessibility_new', 'accessible_forward', 'search', 'home', 'menu', 'close',
        'arrow_back', 'arrow_forward', 'arrow_upward', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_up',
        'expand_more', 'expand_less', 'person', 'account_circle', 'account_balance', 'account_box',
        'groups', 'login', 'logout', 'mail', 'phone', 'chat', 'announcement', 'alternate_email',
        'folder', 'folder_open', 'file_download', 'file_upload', 'file_present', 'attach_file', 'attach_money',
        'calendar_today', 'event', 'schedule', 'alarm', 'add', 'add_circle', 'add_circle_outline',
        'edit', 'delete', 'check', 'check_box_outline_blank', 'check_circle', 'check_circle_outline',
        'cancel', 'remove', 'save_alt', 'autorenew', 'info', 'warning', 'error', 'help',
        'lock', 'lock_open', 'security', 'shield', 'verified', 'flag', 'public', 'location_on',
        'local_police', 'local_hospital', 'settings', 'print', 'share', 'link', 'visibility',
        'visibility_off', 'api', 'assessment', 'build', 'bug_report', 'bookmark',
        'backpack', 'bathtub', 'bedding', 'campaign', 'camping', 'checkroom', 'clean_hands', 'clothes'
      ] as IconType[],
      description: 'The icon to display',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl', '2xl'],
      description: 'Size of the icon',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined'],
      description: 'Visual variant of the icon',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Examples
export const Default: Story = {
  args: {
    icon: 'home',
  },
}

export const WithCustomSize: Story = {
  args: {
    icon: 'search',
    size: 'xl',
  },
}

export const OutlinedVariant: Story = {
  args: {
    icon: 'person',
    variant: 'outlined',
  },
}

export const WithCustomStyles: Story = {
  args: {
    icon: 'flag',
    size: 'lg',
    className: 'text-blue-600 hover:text-blue-800',
  },
}

// All Icons Showcase by Category
export const AllIcons: Story = {
  render: () => (
    <div className="space-y-8 p-6 max-w-6xl">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Navigation & Core Icons (14)</h3>
        <div className="grid grid-cols-7 gap-4">
          <div className="flex flex-col items-center gap-2">
            <AccessibilityNewIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">accessibility_new</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AccessibleForwardIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">accessible_forward</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SearchIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">search</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HomeIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">home</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MenuIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">menu</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CloseIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">close</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ArrowBackIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">arrow_back</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ArrowForwardIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">arrow_forward</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ArrowUpwardIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">arrow_upward</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ArrowDownwardIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">arrow_downward</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ArrowDropDownIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">arrow_drop_down</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ArrowDropUpIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">arrow_drop_up</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ExpandMoreIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">expand_more</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ExpandLessIcon size="lg" className="text-blue-60" />
            <span className="text-xs text-gray-600">expand_less</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">User & Account Icons (7)</h3>
        <div className="grid grid-cols-7 gap-4">
          <div className="flex flex-col items-center gap-2">
            <PersonIcon size="lg" className="text-green-60" />
            <span className="text-xs text-gray-600">person</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AccountCircleIcon size="lg" className="text-green-60" />
            <span className="text-xs text-gray-600">account_circle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AccountBalanceIcon size="lg" className="text-green-60" />
            <span className="text-xs text-gray-600">account_balance</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AccountBoxIcon size="lg" className="text-green-60" />
            <span className="text-xs text-gray-600">account_box</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GroupsIcon size="lg" className="text-green-60" />
            <span className="text-xs text-gray-600">groups</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LoginIcon size="lg" className="text-green-60" />
            <span className="text-xs text-gray-600">login</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LogoutIcon size="lg" className="text-green-60" />
            <span className="text-xs text-gray-600">logout</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Government & Civic Icons (5)</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col items-center gap-2">
            <FlagIcon size="lg" className="text-red-60" />
            <span className="text-xs text-gray-600">flag</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PublicIcon size="lg" className="text-red-60" />
            <span className="text-xs text-gray-600">public</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LocationOnIcon size="lg" className="text-red-60" />
            <span className="text-xs text-gray-600">location_on</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LocalPoliceIcon size="lg" className="text-red-60" />
            <span className="text-xs text-gray-600">local_police</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LocalHospitalIcon size="lg" className="text-red-60" />
            <span className="text-xs text-gray-600">local_hospital</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Security & Privacy Icons (5)</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col items-center gap-2">
            <LockIcon size="lg" className="text-orange-60" />
            <span className="text-xs text-gray-600">lock</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LockOpenIcon size="lg" className="text-orange-60" />
            <span className="text-xs text-gray-600">lock_open</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SecurityIcon size="lg" className="text-orange-60" />
            <span className="text-xs text-gray-600">security</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldIcon size="lg" className="text-orange-60" />
            <span className="text-xs text-gray-600">shield</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <VerifiedIcon size="lg" className="text-orange-60" />
            <span className="text-xs text-gray-600">verified</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Action Icons (13)</h3>
        <div className="grid grid-cols-7 gap-4">
          <div className="flex flex-col items-center gap-2">
            <AddIcon size="lg" className="text-purple-60" />
            <span className="text-xs text-gray-600">add</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <EditIcon size="lg" className="text-purple-60" />
            <span className="text-xs text-gray-600">edit</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <DeleteIcon size="lg" className="text-purple-60" />
            <span className="text-xs text-gray-600">delete</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CheckIcon size="lg" className="text-purple-60" />
            <span className="text-xs text-gray-600">check</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CheckCircleIcon size="lg" className="text-purple-60" />
            <span className="text-xs text-gray-600">check_circle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CancelIcon size="lg" className="text-purple-60" />
            <span className="text-xs text-gray-600">cancel</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SaveAltIcon size="lg" className="text-purple-60" />
            <span className="text-xs text-gray-600">save_alt</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Status & Alert Icons (4)</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center gap-2">
            <InfoIcon size="lg" className="text-cyan-60" />
            <span className="text-xs text-gray-600">info</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <WarningIcon size="lg" className="text-yellow-60" />
            <span className="text-xs text-gray-600">warning</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ErrorIcon size="lg" className="text-red-60" />
            <span className="text-xs text-gray-600">error</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HelpIcon size="lg" className="text-indigo-60" />
            <span className="text-xs text-gray-600">help</span>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All 77+ USWDS icons organized by category. These icons follow the U.S. Web Design System guidelines and are optimized for government and civic applications.',
      },
    },
    layout: 'fullscreen',
  },
}

// Size Variations
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-6">
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="xs" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">XS (16px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="sm" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">SM (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="default" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">Default (32px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="lg" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">LG (40px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">XL (48px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="2xl" className="text-blue-60" />
        <span className="text-sm font-medium text-gray-70">2XL (64px)</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon sizes from XS (16px) to 2XL (64px), optimized for government interfaces.',
      },
    },
  },
}

// Variant Showcase
export const Variants: Story = {
  render: () => (
    <div className="flex gap-8 p-6">
      <div className="flex flex-col items-center gap-4">
        <h4 className="font-semibold text-gray-800">Default (Filled)</h4>
        <div className="flex gap-4">
          <PersonIcon size="xl" variant="default" className="text-blue-60" />
          <SecurityIcon size="xl" variant="default" className="text-green-60" />
          <SettingsIcon size="xl" variant="default" className="text-purple-60" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h4 className="font-semibold text-gray-800">Outlined</h4>
        <div className="flex gap-4">
          <PersonIcon size="xl" variant="outlined" className="text-blue-60" />
          <SecurityIcon size="xl" variant="outlined" className="text-green-60" />
          <SettingsIcon size="xl" variant="outlined" className="text-purple-60" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Available icon variants: default (filled) and outlined.',
      },
    },
  },
}

// Government Contact Card Example
export const GovernmentContactCard: Story = {
  args: { icon: 'person' },
  render: () => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <PersonIcon size="lg" className="text-blue-60" />
        <div>
          <h3 className="font-semibold text-gray-900">Contact Information</h3>
          <p className="text-sm text-gray-600">Get in touch with us</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <PhoneIcon size="sm" className="text-gray-500" />
          <span className="text-sm text-gray-700">(555) 123-4567</span>
        </div>
        <div className="flex items-center gap-3">
          <MailIcon size="sm" className="text-gray-500" />
          <span className="text-sm text-gray-700">contact@agency.gov</span>
        </div>
        <div className="flex items-center gap-3">
          <LocationOnIcon size="sm" className="text-gray-500" />
          <span className="text-sm text-gray-700">123 Government Ave, DC 20001</span>
        </div>
        <div className="flex items-center gap-3">
          <PublicIcon size="sm" className="text-gray-500" />
          <span className="text-sm text-gray-700">www.agency.gov</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <VerifiedIcon size="sm" className="text-green-60" />
          <span className="text-xs text-gray-600">Verified Government Agency</span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example usage of USWDS icons in a government contact card component.',
      },
    },
    layout: 'centered',
  },
}

// Interaction Test
export const InteractionTest: Story = {
  args: {
    icon: 'home',
    size: 'default',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img')
    
    // Verify icon renders
    await expect(icon).toBeInTheDocument()
    await expect(icon).toHaveClass('h-8', 'w-8') // default size
    await expect(icon).toHaveAttribute('viewBox', '0 0 24 24')
    await expect(icon).toHaveAttribute('aria-hidden', 'true')
  },
}
