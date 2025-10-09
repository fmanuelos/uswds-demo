import * as React from 'react'
import type { Meta, StoryObj } from "@storybook/react"
import { ArrowLeftIcon, ArchiveIcon, MailCheckIcon, ClockIcon, TrashIcon, PlusIcon, MinusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

const meta = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Archive</Button>
      <Button variant="outline">Report</Button>
      <Button variant="outline">Snooze</Button>
    </ButtonGroup>
  ),
}


export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical" className="h-fit">
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <MinusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <TrashIcon />
      </Button>
    </ButtonGroup>
  ),
}


export const MixedVariants: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonGroup>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Continue</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="secondary">Delete</Button>
        <Button variant="secondary">Archive</Button>
        <Button variant="secondary">Remove</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="info">Info</Button>
        <Button variant="info">Help</Button>
        <Button variant="info">About</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="success">Approve</Button>
        <Button variant="success">Accept</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="warning">Warning</Button>
        <Button variant="warning">Caution</Button>
      </ButtonGroup>
    </div>
  ),
}

// export const MailActions: Story = {
//   name: "Email Actions Example",
//   render: () => (
//     <ButtonGroup>
//       <ButtonGroup>
//         <Button variant="outline" size="icon" aria-label="Go Back">
//           <ArrowLeftIcon />
//         </Button>
//       </ButtonGroup>
//       <ButtonGroup>
//         <Button variant="outline">
//           <ArchiveIcon /> Archive
//         </Button>
//         <Button variant="outline">Report</Button>
//       </ButtonGroup>
//       <ButtonGroup>
//         <Button variant="outline">
//           <ClockIcon /> Snooze
//         </Button>
//         <Button variant="outline">
//           <MailCheckIcon /> Mark as Read
//         </Button>
//       </ButtonGroup>
//       <ButtonGroup>
//         <Button variant="secondary" size="icon">
//           <TrashIcon />
//         </Button>
//       </ButtonGroup>
//     </ButtonGroup>
//   ),
// }