import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define icon variants using class-variance-authority
const iconVariants = cva(
  "inline-block text-current shrink-0",
  {
    variants: {
      size: {
        xs: "h-4 w-4",
        sm: "h-6 w-6",
        default: "h-8 w-8", // Updated default size
        lg: "h-10 w-10",
        xl: "h-12 w-12",
        "2xl": "h-16 w-16"
      },
      variant: {
        default: "stroke-none fill-current",
        outlined: "stroke-current fill-none stroke-2"
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default"
    }
  }
);

// Define all available icon names - organized by category
export type IconType =
  // Navigation & Core
  | "accessibility_new"
  | "accessible_forward"
  | "search"
  | "home"
  | "menu"
  | "close"
  | "arrow_back"
  | "arrow_forward"
  | "arrow_upward"
  | "arrow_downward"
  | "arrow_drop_down"
  | "arrow_drop_up"
  | "expand_more"
  | "expand_less"
  // User & Account
  | "person"
  | "account_circle"
  | "account_balance"
  | "account_box"
  | "groups"
  | "login"
  | "logout"
  // Communication
  | "mail"
  | "phone"
  | "chat"
  | "announcement"
  | "alternate_email"
  // Documents & Files
  | "folder"
  | "folder_open"
  | "file_download"
  | "file_upload"
  | "file_present"
  | "attach_file"
  | "attach_money"
  // Calendar & Time
  | "calendar_today"
  | "event"
  | "schedule"
  | "alarm"
  // Actions
  | "add"
  | "add_circle"
  | "add_circle_outline"
  | "edit"
  | "delete"
  | "check"
  | "check_box_outline_blank"
  | "check_circle"
  | "check_circle_outline"
  | "cancel"
  | "remove"
  | "save_alt"
  | "autorenew"
  // Status & Alerts
  | "info"
  | "warning"
  | "error"
  | "help"
  // Security & Privacy
  | "lock"
  | "lock_open"
  | "security"
  | "shield"
  | "verified"
  // Government & Civic
  | "flag"
  | "public"
  | "location_on"
  | "local_police"
  | "local_hospital"
  // Utilities & Tools
  | "settings"
  | "print"
  | "share"
  | "link"
  | "visibility"
  | "visibility_off"
  | "api"
  | "assessment"
  | "build"
  | "bug_report"
  | "bookmark"
  // Lifestyle & Activities
  | "backpack"
  | "bathtub"
  | "bedding"
  | "campaign"
  | "camping"
  | "checkroom"
  | "clean_hands"
  | "clothes";

// Icon component props
export interface IconProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof iconVariants> {
  icon: IconType;
  className?: string;
}

// Individual icon SVG paths and elements - USWDS Icons organized by categories
const iconPaths: Record<IconType, React.ReactNode> = {
  // =============================================================================
  // NAVIGATION & CORE ICONS (14)
  // =============================================================================
  accessibility_new: (
    <>
      <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
    </>
  ),
  accessible_forward: (
    <>
      <circle cx="17" cy="4.54" r="2"></circle>
      <path d="M14 17h-2c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3v-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5zm3-3.5h-1.86l1.67-3.67C17.42 8.5 16.44 7 14.96 7h-5.2c-.81 0-1.54.47-1.87 1.2L7.22 10l1.92.53L9.79 9H12l-1.83 4.1c-.6 1.33.39 2.9 1.85 2.9H17v5h2v-5.5c0-1.1-.9-2-2-2z"></path>
    </>
  ),
  search: (
    <>
      <path d="m15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
    </>
  ),
  home: (
    <>
      <path d="m10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
    </>
  ),
  menu: (
    <>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </>
  ),
  close: (
    <>
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </>
  ),
  arrow_back: (
    <>
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
    </>
  ),
  arrow_forward: (
    <>
      <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
    </>
  ),
  arrow_upward: (
    <>
      <path d="m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
    </>
  ),
  arrow_downward: (
    <>
      <path d="m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
    </>
  ),
  arrow_drop_down: (
    <>
      <path d="m7 10 5 5 5-5z"></path>
    </>
  ),
  arrow_drop_up: (
    <>
      <path d="m7 14 5-5 5 5z"></path>
    </>
  ),
  expand_more: (
    <>
      <path d="m7 10 5 5 5-5z"></path>
    </>
  ),
  expand_less: (
    <>
      <path d="m18 15-6-6-6 6"></path>
    </>
  ),

  // =============================================================================
  // USER & ACCOUNT ICONS (7)
  // =============================================================================
  person: (
    <>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
    </>
  ),
  account_circle: (
    <>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"></path>
    </>
  ),
  account_balance: (
    <>
      <path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z"></path>
    </>
  ),
  account_box: (
    <>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"></path>
    </>
  ),
  groups: (
    <>
      <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path>
    </>
  ),
  login: (
    <>
      <path d="m15 3 4 4-4 4"></path>
    </>
  ),
  logout: (
    <>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    </>
  ),

  // =============================================================================
  // COMMUNICATION ICONS (5)
  // =============================================================================
  mail: (
    <>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
    </>
  ),
  phone: (
    <>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
    </>
  ),
  chat: (
    <>
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"></path>
    </>
  ),
  announcement: (
    <>
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path>
    </>
  ),
  alternate_email: (
    <>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
    </>
  ),

  // =============================================================================
  // DOCUMENTS & FILES ICONS (7)  
  // =============================================================================
  folder: (
    <>
      <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
    </>
  ),
  folder_open: (
    <>
      <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path>
    </>
  ),
  file_download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    </>
  ),
  file_upload: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    </>
  ),
  file_present: (
    <>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
    </>
  ),
  attach_file: (
    <>
      <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path>
    </>
  ),
  attach_money: (
    <>
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
    </>
  ),

  // =============================================================================
  // CALENDAR & TIME ICONS (4)
  // =============================================================================
  calendar_today: (
    <>
      <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"></path>
    </>
  ),
  event: (
    <>
      <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
    </>
  ),
  schedule: (
    <>
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2z"></path>
    </>
  ),
  alarm: (
    <>
      <path d="m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
    </>
  ),

  // =============================================================================
  // ACTION ICONS (13)
  // =============================================================================
  add: (
    <>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
    </>
  ),
  add_circle: (
    <>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
    </>
  ),
  add_circle_outline: (
    <>
      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
    </>
  ),
  edit: (
    <>
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"></path>
    </>
  ),
  delete: (
    <>
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12z"></path>
    </>
  ),
  check: (
    <>
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
    </>
  ),
  check_box_outline_blank: (
    <>
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
    </>
  ),
  check_circle: (
    <>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
    </>
  ),
  check_circle_outline: (
    <>
      <path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
    </>
  ),
  cancel: (
    <>
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
    </>
  ),
  remove: (
    <>
      <path d="M19 13H5v-2h14v2z"></path>
    </>
  ),
  save_alt: (
    <>
      <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2z"></path>
    </>
  ),
  autorenew: (
    <>
      <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.87 5.87 0 0 1 6 12c0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path>
    </>
  ),

  // =============================================================================
  // STATUS & ALERT ICONS (4)
  // =============================================================================
  info: (
    <>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
    </>
  ),
  warning: (
    <>
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
    </>
  ),
  error: (
    <>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
    </>
  ),
  help: (
    <>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
    </>
  ),

  // =============================================================================
  // SECURITY & PRIVACY ICONS (5)
  // =============================================================================
  lock: (
    <>
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
    </>
  ),
  lock_open: (
    <>
      <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
    </>
  ),
  security: (
    <>
      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path>
    </>
  ),
  shield: (
    <>
      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path>
    </>
  ),
  verified: (
    <>
      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path>
    </>
  ),

  // =============================================================================
  // GOVERNMENT & CIVIC ICONS (5)
  // =============================================================================
  flag: (
    <>
      <path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
    </>
  ),
  public: (
    <>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
    </>
  ),
  location_on: (
    <>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
    </>
  ),
  local_police: (
    <>
      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path>
    </>
  ),
  local_hospital: (
    <>
      <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
    </>
  ),

  // =============================================================================
  // UTILITIES & TOOLS ICONS (11)
  // =============================================================================
  settings: (
    <>
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
    </>
  ),
  print: (
    <>
      <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3z"></path>
    </>
  ),
  share: (
    <>
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
    </>
  ),
  link: (
    <>
      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H6.9C4.01 7 1.9 9.11 1.9 12s2.11 5 5 5h4v-1.9H6.9c-1.71 0-3.1-1.39-3.1-3.1z"></path>
    </>
  ),
  visibility: (
    <>
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"></path>
    </>
  ),
  visibility_off: (
    <>
      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7z"></path>
    </>
  ),
  api: (
    <>
      <path d="m14 12-2 2-2-2 2-2 2 2zm-2-6 2.12 2.12 2.5-2.5L12 1 7.38 5.62l2.5 2.5L12 6zm-6 6 2.12-2.12-2.5-2.5L1 12l4.62 4.62 2.5-2.5L6 12zm12 0-2.12 2.12 2.5 2.5L23 12l-4.62-4.62-2.5 2.5L18 12zm-6 6-2.12-2.12-2.5 2.5L12 23l4.62-4.62-2.5-2.5L12 18z"></path>
    </>
  ),
  assessment: (
    <>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
    </>
  ),
  build: (
    <>
      <path d="m22.7 19-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path>
    </>
  ),
  bug_report: (
    <>
      <path d="M20 8h-2.81a5.985 5.985 0 0 0-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path>
    </>
  ),
  bookmark: (
    <>
      <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path>
    </>
  ),

  // =============================================================================
  // LIFESTYLE & ACTIVITIES ICONS (8)
  // =============================================================================
  backpack: (
    <>
      <path d="M20 8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86zM6 12v2h10v2h2v-4H6z"></path>
    </>
  ),
  bathtub: (
    <>
      <circle cx="7" cy="7" r="2"></circle>
      <path d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 0 0 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2z"></path>
    </>
  ),
  bedding: (
    <>
      <path d="M17 10.13a33.86 33.86 0 0 1-10 0 1.92 1.92 0 0 1-1.51-1.46 10.42 10.42 0 0 1 0-4.84 1.92 1.92 0 0 1 1.57-1.46 33.86 33.86 0 0 1 10 0 1.9 1.9 0 0 1 1.56 1.46 10.16 10.16 0 0 1 0 4.84A1.9 1.9 0 0 1 17 10.13Zm4 12.12H7a5.25 5.25 0 0 1 0-10.5h10a3.25 3.25 0 0 1 0 6.5H7a1.25 1.25 0 0 1 0-2.5h10a.75.75 0 0 0 0-1.5H7a2.75 2.75 0 0 0 0 5.5h14a1.25 1.25 0 0 1 0 2.5Z"></path>
    </>
  ),
  campaign: (
    <>
      <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"></path>
    </>
  ),
  camping: (
    <>
      <path
        fill-rule="evenodd"
        d="m12 5 8 13h2v2H2v-2h2l8-13zm.05 8-2.69 5h5.38l-2.69-5zM5.5 3l-.018.024A2.5 2.5 0 0 0 7.498 7 2.5 2.5 0 1 1 5.5 3z"
      ></path>
    </>
  ),
  checkroom: (
    <>
      <path d="M21.6 5H2.4C1.63 5 1 5.63 1 6.4v11.2c0 .77.63 1.4 1.4 1.4h19.2c.77 0 1.4-.63 1.4-1.4V6.4c0-.77-.63-1.4-1.4-1.4z"></path>
    </>
  ),
  clean_hands: (
    <>
      <path d="M16.99 5l.63 1.37L19 6.01 18.36 7.38l.63 1.37-1.38.63L16.99 11l-1.37-.63L14.25 11l.63-1.37L13.51 9 14.88 8.37 13.51 7l1.37-.63L14.25 5l1.37.63z"></path>
    </>
  ),
  clothes: (
    <>
      <path d="M12 2l3.09 6.26L22 9l-5.91 5.74L17.18 22 12 19.27 6.82 22l1.09-7.26L2 9l6.91-.74L12 2z"></path>
    </>
  )
  // Note: For production use, each icon should have its exact USWDS SVG path
};

// Main Icon component
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size, variant, icon, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={cn(iconVariants({ size, variant }), className)}
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        {...props}
      >
        {iconPaths[icon]}
      </svg>
    );
  }
);

Icon.displayName = "Icon";

// Individual icon components for convenience - All USWDS Icons
// Navigation & Core Icons
export const AccessibilityNewIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="accessibility_new" {...props} />
);
export const AccessibleForwardIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="accessible_forward" {...props} />
);
export const SearchIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="search" {...props} />
);
export const HomeIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="home" {...props} />
);
export const MenuIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="menu" {...props} />
);
export const CloseIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="close" {...props} />
);
export const ArrowBackIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="arrow_back" {...props} />
);
export const ArrowForwardIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="arrow_forward" {...props} />
);
export const ArrowUpwardIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="arrow_upward" {...props} />
);
export const ArrowDownwardIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="arrow_downward" {...props} />
);
export const ArrowDropDownIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="arrow_drop_down" {...props} />
);
export const ArrowDropUpIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="arrow_drop_up" {...props} />
);
export const ExpandMoreIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="expand_more" {...props} />
);
export const ExpandLessIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="expand_less" {...props} />
);

// User & Account Icons
export const PersonIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="person" {...props} />
);
export const AccountCircleIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="account_circle" {...props} />
);
export const AccountBalanceIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="account_balance" {...props} />
);
export const AccountBoxIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="account_box" {...props} />
);
export const GroupsIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="groups" {...props} />
);
export const LoginIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="login" {...props} />
);
export const LogoutIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="logout" {...props} />
);

// Communication Icons
export const MailIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="mail" {...props} />
);
export const PhoneIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="phone" {...props} />
);
export const ChatIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="chat" {...props} />
);
export const AnnouncementIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="announcement" {...props} />
);
export const AlternateEmailIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="alternate_email" {...props} />
);

// Documents & Files Icons
export const FolderIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="folder" {...props} />
);
export const FolderOpenIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="folder_open" {...props} />
);
export const FileDownloadIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="file_download" {...props} />
);
export const FileUploadIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="file_upload" {...props} />
);
export const FilePresentIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="file_present" {...props} />
);
export const AttachFileIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="attach_file" {...props} />
);
export const AttachMoneyIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="attach_money" {...props} />
);

// Calendar & Time Icons
export const CalendarTodayIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="calendar_today" {...props} />
);
export const EventIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="event" {...props} />
);
export const ScheduleIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="schedule" {...props} />
);
export const AlarmIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="alarm" {...props} />
);

// Action Icons
export const AddIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="add" {...props} />
);
export const AddCircleIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="add_circle" {...props} />
);
export const AddCircleOutlineIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="add_circle_outline" {...props} />
);
export const EditIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="edit" {...props} />
);
export const DeleteIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="delete" {...props} />
);
export const CheckIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="check" {...props} />
);
export const CheckBoxOutlineBlankIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="check_box_outline_blank" {...props} />
);
export const CheckCircleIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="check_circle" {...props} />
);
export const CheckCircleOutlineIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="check_circle_outline" {...props} />
);
export const CancelIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="cancel" {...props} />
);
export const RemoveIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="remove" {...props} />
);
export const SaveAltIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="save_alt" {...props} />
);
export const AutorenewIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="autorenew" {...props} />
);

// Status & Alert Icons
export const InfoIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="info" {...props} />
);
export const WarningIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="warning" {...props} />
);
export const ErrorIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="error" {...props} />
);
export const HelpIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="help" {...props} />
);

// Security & Privacy Icons
export const LockIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="lock" {...props} />
);
export const LockOpenIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="lock_open" {...props} />
);
export const SecurityIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="security" {...props} />
);
export const ShieldIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="shield" {...props} />
);
export const VerifiedIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="verified" {...props} />
);

// Government & Civic Icons
export const FlagIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="flag" {...props} />
);
export const PublicIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="public" {...props} />
);
export const LocationOnIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="location_on" {...props} />
);
export const LocalPoliceIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="local_police" {...props} />
);
export const LocalHospitalIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="local_hospital" {...props} />
);

// Utilities & Tools Icons
export const SettingsIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="settings" {...props} />
);
export const PrintIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="print" {...props} />
);
export const ShareIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="share" {...props} />
);
export const LinkIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="link" {...props} />
);
export const VisibilityIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="visibility" {...props} />
);
export const VisibilityOffIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="visibility_off" {...props} />
);
export const ApiIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="api" {...props} />
);
export const AssessmentIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="assessment" {...props} />
);
export const BuildIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="build" {...props} />
);
export const BugReportIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="bug_report" {...props} />
);
export const BookmarkIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="bookmark" {...props} />
);

// Lifestyle & Activities Icons
export const BackpackIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="backpack" {...props} />
);
export const BathtubIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="bathtub" {...props} />
);
export const BeddingIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="bedding" {...props} />
);
export const CampaignIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="campaign" {...props} />
);
export const CampingIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="camping" {...props} />
);
export const CheckroomIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="checkroom" {...props} />
);
export const CleanHandsIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="clean_hands" {...props} />
);
export const ClothesIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon="clothes" {...props} />
);

// Legacy aliases for backward compatibility
export const UserIcon = PersonIcon;
export const DocumentIcon = FilePresentIcon;
export const CalendarIcon = CalendarTodayIcon;

export { Icon, iconVariants };