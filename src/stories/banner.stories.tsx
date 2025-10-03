import type { Meta, StoryObj } from '@storybook/react'
import { Banner } from '@/components/ui/banner'

const meta = {
  title: 'UI/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['gov', 'mil'],
      description: 'The type of government website',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the banner content is open by default',
    },
  },
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'gov',
    defaultOpen: false,
  },
}

export const Gov: Story = {
  args: {
    variant: 'gov',
    defaultOpen: false,
  },
}

export const Mil: Story = {
  args: {
    variant: 'mil',
    defaultOpen: false,
  },
}

export const DefaultOpen: Story = {
  args: {
    variant: 'gov',
    defaultOpen: true,
  },
}