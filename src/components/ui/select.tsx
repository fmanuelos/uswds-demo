"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const selectVariants = cva(
  cn(
    // Base styling
    "flex w-full max-w-lg appearance-none items-center",
    "font-public-sans text-base leading-tight",
    // Size and spacing
    "h-10 px-3 py-2",
    // Background and border
    "bg-white border border-gray-60 rounded-none",
    // Focus states
    "focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-blue-40",
    // Disabled states
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-20 disabled:text-gray-70",
  ),
  {
    variants: {
      size: {
        default: "h-10 px-3 py-2",
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
)

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <select
        className={cn(selectVariants({ size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Select.displayName = "Select"

export { Select, selectVariants }