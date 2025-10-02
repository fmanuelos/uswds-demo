"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

// Main Accordion variants - using space-y-2 for spacing between items
const accordionVariants = cva("space-y-2", {
  variants: {
    variant: {
      borderless: "",
      bordered: "",
    },
  },
  defaultVariants: {
    variant: "borderless",
  },
})

// AccordionItem variants
const accordionItemVariants = cva("", {
  variants: {
    variant: {
      borderless: "",
      bordered: "",
    },
  },
  defaultVariants: {
    variant: "borderless",
  },
})

// AccordionTrigger variants - matches USWDS Tailwind reference
const accordionTriggerVariants = cva(
  "group flex items-center w-full py-4 px-5 bg-gray-5 hover:bg-gray-10 font-bold focus:outline focus:outline-4 focus:outline-blue-40v cursor-pointer text-left gap-3",
  {
    variants: {
      variant: {
        borderless: "",
        bordered: "",
      },
    },
    defaultVariants: {
      variant: "borderless",
    },
  }
)

// AccordionContent variants - matches USWDS Tailwind reference
const accordionContentVariants = cva("py-6 px-4 [&[hidden]]:p-0", {
  variants: {
    variant: {
      borderless: "",
      bordered: "border-b-4 border-x-4 border-gray-5",
    },
  },
  defaultVariants: {
    variant: "borderless",
  },
})

type AccordionContextValue = {
  variant: "borderless" | "bordered"
  openItems: string[]
  toggleItem: (id: string) => void
  multiselectable: boolean
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null)

const useAccordion = () => {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion")
  }
  return context
}

// New Context for AccordionItem to pass value to children
type AccordionItemContextValue = {
  value: string
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null)

const useAccordionItem = () => {
  const context = React.useContext(AccordionItemContext)
  if (!context) {
    throw new Error("AccordionTrigger and AccordionContent must be used within an AccordionItem")
  }
  return context
}

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & 
  VariantProps<typeof accordionVariants> & {
    type?: "single" | "multiple"
    defaultValue?: string | string[]
  }

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ variant = "borderless", className, children, type = "single", defaultValue, ...props }, ref) => {
    const multiselectable = type === "multiple"
    
    const [openItems, setOpenItems] = React.useState<string[]>(() => {
      if (defaultValue) {
        return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
      }
      return []
    })

    const toggleItem = React.useCallback((id: string) => {
      setOpenItems((prev) => {
        if (multiselectable) {
          // Multiple mode: toggle item in array
          return prev.includes(id) 
            ? prev.filter((item) => item !== id)
            : [...prev, id]
        } else {
          // Single mode: always collapsible
          return prev.includes(id) ? [] : [id]
        }
      })
    }, [multiselectable])

    return (
      <AccordionContext.Provider value={{ variant: variant || "borderless", openItems, toggleItem, multiselectable }}>
        <div
          ref={ref}
          className={cn(accordionVariants({ variant }), className)}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const { variant } = useAccordion()
    
    return (
      <AccordionItemContext.Provider value={{ value }}>
        <div
          ref={ref}
          className={cn(accordionItemVariants({ variant }), className)}
          data-value={value}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { variant, openItems, toggleItem } = useAccordion()
    const { value } = useAccordionItem()

    const isOpen = openItems.includes(value)

    return (
      <h4 className="relative m-0">
        <button
          ref={ref}
          type="button"
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${value}`}
          className={cn(accordionTriggerVariants({ variant }), className)}
          onClick={() => toggleItem(value)}
          {...props}
        >
          {children}
          <div className="h-full flex items-center ml-auto shrink-0">
            {isOpen ? (
              <Icon icon="remove" size="sm" className="size-6" />
            ) : (
              <Icon icon="add" size="sm" className="size-6" />
            )}
          </div>
        </button>
      </h4>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const { variant, openItems } = useAccordion()
    const { value } = useAccordionItem()

    const isOpen = openItems.includes(value)

    return (
      <div
        ref={ref}
        id={`accordion-content-${value}`}
        hidden={!isOpen}
        className={cn(accordionContentVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
export type { AccordionProps }
