"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

// Main Accordion variants
const accordionVariants = cva("m-0 mt-4 p-0 w-full text-md leading-4 list-none text-black font-source-sans", {
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
const accordionItemVariants = cva("mt-2", {
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

// AccordionTrigger variants
const accordionTriggerVariants = cva(
  "relative w-full xs:w-full py-4 pl-5 pr-14 text-black text-left font-bold font-source-sans bg-gray-5 hover:bg-gray-10 active:bg-gray-10 focus:outline focus:outline-4 focus:outline-blue-40v cursor-pointer",
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

// AccordionContent variants
const accordionContentVariants = cva("mb-4 p-4 overflow-hidden", {
  variants: {
    variant: {
      borderless: "border-none",
      bordered: "border-l-[0.25rem] border-l-gray-5 border-b-[0.25rem] border-b-gray-5 border-r-[0.25rem] border-r-gray-5",
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
      <h4 className="m-0">
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
          <span className="absolute top-3 right-4 w-6 h-6">
            {isOpen ? (
              <Icon icon="remove" size="sm" className="size-6" />
            ) : (
              <Icon icon="add" size="sm" className="size-6" />
            )}
          </span>
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
