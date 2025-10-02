import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Banner, BannerHeader, BannerFlag, BannerTrigger, BannerContent } from '@/components/ui/banner'

const meta = {
  title: 'Components/Banner',
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
  render: (args) => (
    <Banner {...args}>
      <BannerHeader>
        <BannerFlag />
        <BannerTrigger />
      </BannerHeader>
      <BannerContent />
    </Banner>
  ),
}

export const Gov: Story = {
  args: {
    variant: 'gov',
    defaultOpen: false,
  },
  render: (args) => (
    <Banner {...args}>
      <BannerHeader>
        <BannerFlag />
        <BannerTrigger />
      </BannerHeader>
      <BannerContent />
    </Banner>
  ),
}

export const Mil: Story = {
  args: {
    variant: 'mil',
    defaultOpen: false,
  },
  render: (args) => (
    <Banner {...args}>
      <BannerHeader>
        <BannerFlag />
        <BannerTrigger />
      </BannerHeader>
      <BannerContent />
    </Banner>
  ),
}

export const DefaultOpen: Story = {
  args: {
    variant: 'gov',
    defaultOpen: true,
  },
  render: (args) => (
    <Banner {...args}>
      <BannerHeader>
        <BannerFlag />
        <BannerTrigger />
      </BannerHeader>
      <BannerContent />
    </Banner>
  ),
}

export const CustomTriggerText: Story = {
  args: {
    variant: 'gov',
    defaultOpen: false,
  },
  render: (args) => (
    <Banner {...args}>
      <BannerHeader>
        <BannerFlag />
        <BannerTrigger>Click to learn more</BannerTrigger>
      </BannerHeader>
      <BannerContent />
    </Banner>
  ),
}