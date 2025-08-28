import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  cn(
    // Base layout and appearance
    "relative rounded font-bold font-source-sans leading-none cursor-pointer",

    // Focus states
    "focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-blue-40v",
    "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-40v",

    // Disabled states
    "aria-disabled:cursor-not-allowed aria-disabled:bg-gray-20 aria-disabled:text-gray-70",
    "disabled:cursor-not-allowed disabled:bg-gray-20 disabled:text-gray-70"
  ),
  {
    variants: {
      variant: {
        primary: "text-white bg-blue-60v hover:bg-blue-warm-70v active:bg-blue-warm-80v",
        base: "text-white bg-gray-50 hover:bg-gray-60 active:bg-gray-80",
        secondary: "text-white bg-red-50 hover:bg-red-60v active:bg-red-70v",
        'accent-cool': "text-black bg-cyan-30v hover:bg-blue-cool-40v active:bg-blue-cool-60v",
        outline: "text-gray-80v bg-transparent border border-gray-60v hover:bg-gray-5v active:bg-gray-10v",
        info: "text-black bg-cyan-30v hover:bg-blue-cool-40v active:bg-blue-cool-60v",
        success: "text-white bg-green-60v hover:bg-green-70v active:bg-green-80v",
        warning: "text-white bg-orange-60v hover:bg-orange-70v active:bg-orange-80v",
        error: "text-white bg-red-60v hover:bg-red-warm-70v active:bg-red-warm-80v",
        danger: "text-white bg-red-60v hover:bg-red-warm-70v active:bg-red-warm-80v",
        ghost: "text-gray-80v hover:bg-gray-5v active:bg-gray-10v",
        link: "text-blue-60v underline-offset-4 hover:underline hover:text-blue-warm-70v"
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