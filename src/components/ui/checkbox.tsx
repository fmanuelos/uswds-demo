"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer size-5 shrink-0 rounded-sm border-2 border-gray-90 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-60 data-[state=checked]:text-white data-[state=checked]:border-blue-60 focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-blue-40 disabled:border-gray-50 disabled:data-[state=checked]:bg-gray-50",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <svg 
        className="size-3" 
        xmlns="http://www.w3.org/2000/svg" 
        width="65" 
        height="50" 
        viewBox="0 0 65 50"
      >
        <path 
          fill="currentColor" 
          fillRule="evenodd" 
          d="M63.268 7.063l-5.616-5.61C56.882.685 55.946.3 54.845.3s-2.038.385-2.808 1.155L24.951 28.552 12.81 16.385c-.77-.77-1.707-1.155-2.808-1.155-1.1 0-2.037.385-2.807 1.154l-5.616 5.61C.81 22.764.425 23.7.425 24.8s.385 2.035 1.155 2.805l14.947 14.93 5.616 5.61c.77.77 1.706 1.154 2.807 1.154s2.038-.384 2.808-1.154l5.616-5.61 29.894-29.86c.77-.77 1.157-1.707 1.157-2.805 0-1.101-.385-2.036-1.156-2.805l-.001-.002z"
        />
      </svg>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox } 