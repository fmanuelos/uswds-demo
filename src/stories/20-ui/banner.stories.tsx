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
    languageToggle: {
      control: 'object',
      description: 'Optional language toggle link',
    },
  },
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithLanguageToggle: Story = {
  args: {
    languageToggle: {
      href: '#',
      label: 'English',
    },
  },
}

export const Spanish: Story = {
  args: {
    languageToggle: {
      href: '#',
      label: 'Español',
    },
  },
}

// export const   : Story = {
//   args: {
//     languageToggle: {
//       href: '#',
//       label: 'English',
//     },
//   },
//   render: (args) => (
//     <Banner {...args}>
//       <header className="py-2 px-4 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex items-center justify-between gap-4">
//             <div className="flex items-center gap-2">
//               <svg 
//                 className="w-4 h-3 shrink-0" 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 64 42"
//                 aria-hidden="true"
//               >
//                 <path fill="#DB3E1F" d="M32 10h32v4H32zM32 18h32v4H32zM32 26h32v4H32zM32 34h32v4H32zM0 42h64v4H0zM0 50h64v4H0z"/>
//                 <path fill="#fff" d="M32 14h32v4H32zM32 22h32v4H32zM32 30h32v4H32zM0 46h64v4H0zM0 38h64v4H0z"/>
//                 <path fill="#1D33B1" d="M0 10h32v28H0z"/>
//                 <path fill="#fff" d="M4 14h4v4H4zM8 22h4v4H8zM4 30h4v4H4zM12 14h4v4h-4zM16 22h4v4h-4zM12 30h4v4h-4zM20 14h4v4h-4zM24 22h4v4h-4zM20 30h4v4h-4z"/>
//               </svg>
//               <span className="text-sm text-gray-90">
//                 Un sitio oficial del Gobierno de Estados Unidos
//               </span>
//             </div>
//             {args.languageToggle && (
//               <a
//                 href={args.languageToggle.href}
//                 className="text-sm text-blue-60v hover:text-blue-warm-70v underline focus:outline focus:outline-4 focus:outline-blue-40v"
//               >
//                 {args.languageToggle.label}
//               </a>
//             )}
//           </div>
//         </div>
//       </header>
//     </Banner>
//   ),
// }