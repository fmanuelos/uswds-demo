"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

const bannerVariants = cva(
  "bg-gray-5",
  {
    variants: {
      variant: {
        gov: "",
        mil: "",
      },
    },
    defaultVariants: {
      variant: "gov",
    },
  }
)

type BannerContextValue = {
  isOpen: boolean
  toggleOpen: () => void
  variant: "gov" | "mil"
}

const BannerContext = React.createContext<BannerContextValue | null>(null)

const useBanner = () => {
  const context = React.useContext(BannerContext)
  if (!context) {
    throw new Error("Banner components must be used within a Banner")
  }
  return context
}

type BannerProps = React.HTMLAttributes<HTMLElement> & 
  VariantProps<typeof bannerVariants> & {
    defaultOpen?: boolean
  }

const Banner = React.forwardRef<HTMLElement, BannerProps>(
  ({ variant = "gov", className, children, defaultOpen = false, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen)

    const toggleOpen = React.useCallback(() => {
      setIsOpen((prev) => !prev)
    }, [])

    return (
      <BannerContext.Provider value={{ isOpen, toggleOpen, variant: variant || "gov" }}>
        <section
          ref={ref}
          aria-label="Official website of the United States government"
          data-open={isOpen || undefined}
          className={cn(bannerVariants({ variant }), "group", className)}
          {...props}
        >
          {children}
        </section>
      </BannerContext.Provider>
    )
  }
)
Banner.displayName = "Banner"

type BannerHeaderProps = React.HTMLAttributes<HTMLElement>

const BannerHeader = React.forwardRef<HTMLElement, BannerHeaderProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen } = useBanner()

    return (
      <header
        ref={ref}
        className={cn(
          "flex text-xs gap-2 md:items-center pl-4 pr-12 md:pr-4 md:px-8 py-2 md:py-1 mx-auto max-w-5xl min-h-12 md:min-h-0 leading-tight md:leading-none relative",
          className
        )}
        {...props}
      >
        <div className="hidden group-data-[open]:flex md:group-data-[open]:hidden items-center justify-center absolute right-0 inset-y-0 bg-gray-10 size-12">
          <Icon icon="close" className="text-blue-60v size-6" />
        </div>
        {children}
      </header>
    )
  }
)
BannerHeader.displayName = "BannerHeader"

const BannerFlag = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("pt-0.5 md:pt-0 shrink-0 w-4", className)} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
        <path fill="#DB3E1F" d="M32 10h32v4H32zM32 18h32v4H32zM32 26h32v4H32zM32 34h32v4H32zM0 42h64v4H0zM0 50h64v4H0z"/>
        <path fill="#fff" d="M32 14h32v4H32zM32 22h32v4H32zM32 30h32v4H32z"/>
        <path fill="#fff" d="M32 30h32v4H32zM0 46h64v4H0zM0 38h64v4H0z"/>
        <path fill="#fff" d="M0 38h64v4H0z"/>
        <path fill="#1D33B1" d="M0 10h32v28H0z"/>
        <path fill="#fff" d="M4 14h4v4H4zM8 22h4v4H8zM4 30h4v4H4zM12 14h4v4h-4zM16 22h4v4h-4zM12 30h4v4h-4zM20 14h4v4h-4zM24 22h4v4h-4zM20 30h4v4h-4z"/>
      </svg>
    </div>
  )
)
BannerFlag.displayName = "BannerFlag"

type BannerTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const BannerTrigger = React.forwardRef<HTMLButtonElement, BannerTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, toggleOpen } = useBanner()

    return (
      <div className="md:flex gap-2 items-center">
        <div>
          <p>An official website of the United States government</p>
        </div>
        <button
          ref={ref}
          type="button"
          aria-expanded={isOpen}
          onClick={toggleOpen}
          className={cn(
            "text-blue-60v group-data-[open]:block focus:outline-none md:focus:outline md:focus:outline-4 md:focus:outline-blue-40v cursor-pointer group after:absolute md:after:relative after:inset-0 md:inset-auto focus:after:outline md:focus:after:outline-none focus:after:outline-4 focus:after:outline-blue-40v",
            className
          )}
          {...props}
        >
          <div className="inline-flex items-center underline group-data-[open]:hidden md:group-data-[open]:inline-flex">
            <span>{children || "Here's how you know"}</span>
            <Icon 
              icon="expand_more"
              className={cn(
                "size-4 align-middle transition-transform",
                isOpen && "rotate-180"
              )}
            />
          </div>
        </button>
      </div>
    )
  }
)
BannerTrigger.displayName = "BannerTrigger"

type BannerContentProps = React.HTMLAttributes<HTMLDivElement>

const BannerContent = React.forwardRef<HTMLDivElement, BannerContentProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, variant } = useBanner()

    const domainText = variant === "mil" ? ".mil" : ".gov"
    const domainDescription = variant === "mil" 
      ? "website belongs to an official U.S. Department of Defense organization."
      : "website belongs to an official government organization in the United States."

    return (
      <div
        ref={ref}
        hidden={!isOpen}
        className={cn(
          "py-6 px-6 grid md:grid-cols-2 gap-6 mx-auto max-w-5xl",
          className
        )}
        {...props}
      >
        <div className="flex gap-2">
          <div 
            aria-hidden="true" 
            className="rounded-full border border-blue-50 text-blue-50 size-10 shrink-0 justify-center items-center flex"
          >
            <Icon icon="account_balance" className="size-5 align-middle" />
          </div>
          <div>
            <p>
              <span className="font-bold">Official websites use {domainText}</span>
            </p>
            <p>
              A <span className="font-bold">{domainText}</span> {domainDescription}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div 
            aria-hidden="true" 
            className="rounded-full border border-green-40v text-green-40v size-10 shrink-0 justify-center items-center flex"
          >
            <Icon icon="lock" className="size-5 align-middle" />
          </div>
          <div>
            <p>
              <span className="font-bold">Secure {domainText} websites use HTTPS</span>
            </p>
            <p>
              A <span className="font-bold">lock</span>{" "}
              (<Icon icon="lock" className="size-4 align-middle" />) or{" "}
              <span className="font-bold">https://</span> means you've safely connected to 
              the {domainText} website. Share sensitive information only on official, secure websites.
            </p>
          </div>
        </div>
      </div>
    )
  }
)
BannerContent.displayName = "BannerContent"

export { 
  Banner, 
  BannerHeader, 
  BannerFlag, 
  BannerTrigger, 
  BannerContent 
}
export type { BannerProps }

