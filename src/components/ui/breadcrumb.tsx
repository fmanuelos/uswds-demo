import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

const breadcrumbVariants = cva(
  "",
  {
    variants: {
      wrap: {
        true: "leading-snug",
        false: "",
      },
    },
    defaultVariants: {
      wrap: false,
    },
  }
)

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof breadcrumbVariants> {
  items: BreadcrumbItem[]
  ariaLabel?: string
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, items, ariaLabel = "Breadcrumbs", wrap = false, ...props }, ref) => {
    if (!items || items.length === 0) return null

    const wrapValue = wrap ?? false

    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cn(breadcrumbVariants({ wrap: wrapValue }), className)}
        {...props}
      >
        <BreadcrumbList wrap={wrapValue}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            const isSecondToLast = index === items.length - 2

            if (isLast) {
              // Current page - not clickable
              return (
                <BreadcrumbItem
                  key={index}
                  className="inline sr-only sm:not-sr-only"
                  wrap={wrapValue}
                >
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                </BreadcrumbItem>
              )
            }

            if (isSecondToLast) {
              // Second to last item - visible on mobile with back arrow
              return (
                <BreadcrumbItem
                  key={index}
                  className="inline-flex"
                  wrap={wrapValue}
                >
                  <span aria-hidden="true" className="sm:hidden">
                    <Icon icon="navigate_before" className="align-middle text-gray-50 size-4" />
                  </span>
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                  <BreadcrumbSeparator />
                </BreadcrumbItem>
              )
            }

            // Earlier items - hidden on mobile
            return (
              <BreadcrumbItem
                key={index}
                className="inline-flex sr-only sm:not-sr-only"
                wrap={wrapValue}
              >
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                <BreadcrumbSeparator />
              </BreadcrumbItem>
            )
          })}
        </BreadcrumbList>
      </nav>
    )
  }
)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.OlHTMLAttributes<HTMLOListElement> & { wrap?: boolean }
>(({ className, wrap, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "list-none p-2 -mx-1 block",
      wrap ? "" : "truncate",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement> & { wrap?: boolean }
>(({ className, wrap, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      wrap ? "" : "sm:whitespace-nowrap",
      className
    )}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "text-blue-60v visited:text-violet-70v hover:text-blue-70v",
      "focus:outline focus:outline-4 focus:outline-blue-40v underline",
      className
    )}
    {...props}
  >
    <span>{children}</span>
  </a>
))
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={className}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    aria-hidden="true"
    className={cn("hidden sm:inline", className)}
    {...props}
  >
    <Icon icon="navigate_next" className="align-middle text-gray-50 size-4" />
  </span>
))
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
}   

