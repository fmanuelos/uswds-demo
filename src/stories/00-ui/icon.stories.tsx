import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
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
} from '@/components/ui/icon'

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

export const WithCustomStyles: Story = {
  args: {
    icon: 'flag',
    size: 'lg',
    className: 'text-blue-60 hover:text-blue-800',
  },
}

// Size Variations
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-6">
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="xs" className="text-gray-800" />
        <span className="text-sm font-medium text-gray-70">XS (16px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="sm" className="text-gray-800" />
        <span className="text-sm font-medium text-gray-70">SM (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="default" className="text-gray-800" />
        <span className="text-sm font-medium text-gray-70">Default (32px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="lg" className="text-gray-800" />
        <span className="text-sm font-medium text-gray-70">LG (40px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="xl" className="text-gray-800" />
        <span className="text-sm font-medium text-gray-70">XL (48px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="2xl" className="text-gray-800" />
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

// Government Contact Card Example
export const GovernmentContactCard: Story = {
  args: { icon: 'person' },
  render: () => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <PersonIcon size="lg" className="text-gray-800" />
        <div>
          <h3 className="font-semibold text-gray-900">Contact Information</h3>
          <p className="text-sm text-gray-600">Get in touch with us</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <PhoneIcon size="sm" className="text-gray-700" />
          <span className="text-sm text-gray-700">(555) 123-4567</span>
        </div>
        <div className="flex items-center gap-3">
          <MailIcon size="sm" className="text-gray-700" />
          <span className="text-sm text-gray-700">contact@agency.gov</span>
        </div>
        <div className="flex items-center gap-3">
          <LocationOnIcon size="sm" className="text-gray-700" />
          <span className="text-sm text-gray-700">123 Government Ave, DC 20001</span>
        </div>
        <div className="flex items-center gap-3">
          <PublicIcon size="sm" className="text-gray-700" />
          <span className="text-sm text-gray-700">www.agency.gov</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <VerifiedIcon size="sm" className="text-gray-700" />
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