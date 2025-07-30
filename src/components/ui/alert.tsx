import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full py-4 pl-12 pr-4 @desktop:px-16 max-w-5xl mx-auto @container",
  {
    variants: {
      variant: {
        default: "bg-cyan-5 border-l-8 border-l-cyan-30 text-gray-90",
        success: "bg-green-cool-5 border-l-8 border-l-green-cool-40 text-gray-90",
        warning: "bg-yellow-5 border-l-8 border-l-gold-20 text-gray-90",
        danger: "bg-red-warm-10 border-l-8 border-l-red-warm-50 text-gray-90",
        info: "bg-cyan-5 border-l-8 border-l-cyan-30 text-gray-90",
        emergency: "bg-red-warm-60v border-l-8 border-l-red-warm-60 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants> & {
    role?: "alert" | "status"
    showIcon?: boolean
  }
>(({ className, variant, role = "alert", showIcon = true, ...props }, ref) => {
  const getIcon = () => {
    switch (variant) {
      case 'success':
        return 'icon-[material-symbols--check-circle]'
      case 'warning':
        return 'icon-[material-symbols--warning]'
      case 'danger':
      case 'emergency':
        return 'icon-[material-symbols--error]'
      default:
        return 'icon-[material-symbols--info]'
    }
  }

  return (
    <div
      ref={ref}
      role={role}
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {showIcon && (
        <div className="absolute left-2 @desktop:left-6 top-3">
          <div className={cn(getIcon(), "size-8")} />
        </div>
      )}
      {props.children}
    </div>
  )
})
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("text-2xl font-bold mb-2 leading-none font-public-sans", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("leading-normal font-public-sans [&_a]:text-blue-60v [&_a]:underline", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }