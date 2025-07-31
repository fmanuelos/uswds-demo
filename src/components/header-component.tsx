"use client"

import { Header } from "@/components/ui/header"

export function HeaderComponent() {
  const handleSearch = (value: string) => {
    console.log("Header search:", value)
  }

  return (
    <Header
      projectTitle="USWDS Demo Site"
      navigation={{
        primary: [
          {
            label: "Services",
            href: "#",
            children: [
              { label: "Web Design", href: "#" },
              { label: "Development", href: "#" },
              { label: "Consulting", href: "#" }
            ]
          },
          { label: "About", href: "#", isActive: true },
          { label: "Contact", href: "#" }
        ],
        secondary: [
          { label: "Help", href: "#" },
          { label: "Login", href: "#" }
        ]
      }}
      onSearch={handleSearch}
    />
  )
}