import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An accessible accordion component built with Radix UI, following USWDS design guidelines.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const SingleItem: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: () => (
    <Accordion type="single" collapsible className="w-[600px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is the U.S. Web Design System?</AccordionTrigger>
        <AccordionContent>
          The U.S. Web Design System (USWDS) is a toolkit of principles, guidance, 
          and code to help government teams design and build accessible, mobile-friendly 
          government websites backed by user research and modern best practices.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A single accordion item that can be expanded and collapsed.',
      },
    },
  },
}

export const MultipleItems: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: () => (
    <Accordion type="single" collapsible className="w-[600px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. This accordion adheres to WAI-ARIA design patterns and includes 
          proper keyboard navigation, focus management, and screen reader support.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I customize the styling?</AccordionTrigger>
        <AccordionContent>
          Yes. The component uses Tailwind CSS classes and follows USWDS design tokens, 
          making it easy to customize colors, spacing, and typography while maintaining 
          government design standards.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Does it support keyboard navigation?</AccordionTrigger>
        <AccordionContent>
          Absolutely. Use Tab to focus, Enter or Space to toggle, and Arrow keys to 
          navigate between accordion items. All interactions follow accessibility best practices.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple accordion items where only one can be open at a time.',
      },
    },
  },
}
