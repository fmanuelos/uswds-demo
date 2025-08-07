import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded font-bold leading-none transition-colors focus-visible:outline focus:outline focus:outline-4 focus:outline-offset-4 focus-visible:outline-4 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "text-white bg-blue-60 hover:bg-blue-warm-70 active:bg-blue-warm-80 focus:outline-blue-40 focus-visible:outline-blue-40",
        secondary: "text-blue-60 bg-transparent border-2 border-blue-60 hover:bg-blue-60 hover:text-white active:bg-blue-warm-70 focus:outline-blue-40 focus-visible:outline-blue-40",
        outline: "text-gray-80 bg-transparent border border-gray-60 hover:bg-gray-5 active:bg-gray-10 focus:outline-gray-60 focus-visible:outline-gray-60",
        success: "text-white bg-green-60 hover:bg-green-70 active:bg-green-80 focus:outline-green-40 focus-visible:outline-green-40",
        warning: "text-white bg-orange-60 hover:bg-orange-70 active:bg-orange-80 focus:outline-orange-40 focus-visible:outline-orange-40",
        danger: "text-white bg-red-60 hover:bg-red-warm-70 active:bg-red-warm-80 focus:outline-red-40 focus-visible:outline-red-40",
        ghost: "text-gray-80 hover:bg-gray-5 active:bg-gray-10 focus:outline-gray-60 focus-visible:outline-gray-60",
        link: "text-blue-60 underline-offset-4 hover:underline hover:text-blue-warm-70 focus:outline-blue-40 focus-visible:outline-blue-40"
      },
      size: {
        sm: "px-3 py-2 text-sm",
        default: "px-5 py-3",
        lg: "px-6 py-4 text-lg",
        xl: "px-8 py-5 text-xl"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean  
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 