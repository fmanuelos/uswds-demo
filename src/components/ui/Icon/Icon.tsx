"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Icon variants
const iconVariants = cva(
  "inline-block text-current shrink-0",
  {
    variants: {
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4", 
        default: "h-5 w-5",
        lg: "h-6 w-6",
        xl: "h-8 w-8",
        "2xl": "h-10 w-10"
      },
      variant: {
        default: "stroke-current fill-none stroke-2",
        filled: "stroke-none fill-current",
        outlined: "stroke-current fill-none stroke-[3]"
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default"
    }
  }
)

// Available icon types
export type IconType = 
  | 'search'
  | 'user'
  | 'home'
  | 'settings'
  | 'document'
  | 'calendar'
  | 'mail'
  | 'phone'
  | 'lock'
  | 'menu'

// Icon component props
export interface IconProps
  extends React.SVGAttributes<SVGElement>,
    VariantProps<typeof iconVariants> {
  icon: IconType
  className?: string
}

// Individual icon SVG paths and elements
const iconPaths: Record<IconType, React.ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </>
  ),
  user: (
    <>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  home: (
    <>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="m12 1 2.09 3.26L18 5l-1.74 3.23L18 11.47 14.91 12 18 13.53 16.26 16.77 18 19l-3.91-.74L12 21l-2.09-2.74L6 19l1.74-3.23L6 12.53 9.09 12 6 10.47 7.74 7.23 6 5l3.91.74L12 1Z" />
    </>
  ),
  document: (
    <>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="14" x2="8" y2="14" />
      <line x1="12" y1="14" x2="12" y2="14" />
      <line x1="16" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="8" y2="18" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 8L2 6" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </>
  ),
  lock: (
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <circle cx="12" cy="16" r="1" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>
  ),
  menu: (
    <>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </>
  )
}

// Main Icon component
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size, variant, icon, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={cn(iconVariants({ size, variant }), className)}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-hidden="true"
        {...props}
      >
        {iconPaths[icon]}
      </svg>
    )
  }
)

Icon.displayName = "Icon"

// Individual icon components for convenience
export const SearchIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon="search" {...props} />
export const UserIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon="user" {...props} />
export const HomeIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon="home" {...props} />
export const SettingsIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon="settings" {...props} />
export const DocumentIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon="document" {...props} />
export const CalendarIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon="calendar" {...props} />
export const MailIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon="mail" {...props} />
export const PhoneIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon="phone" {...props} />
export const LockIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon="lock" {...props} />
export const MenuIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon="menu" {...props} />

export { Icon, iconVariants, type IconType }
