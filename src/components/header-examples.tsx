"use client"

import { Header, HeaderNavigation } from "@/components/ui/header"

export function HeaderExamples() {
  // Sample navigation data
  const sampleNavigation: HeaderNavigation = {
    primary: [
      {
        label: "Dropdown",
        href: "#",
        children: [
          { label: "Action", href: "#" },
          { label: "Another action", href: "#" },
          { label: "Something else", href: "#" }
        ]
      },
      {
        label: "Dropdown",
        href: "#",
        isActive: true,
        children: [
          { label: "Action", href: "#" },
          { label: "Another action", href: "#" },
          { label: "Something else", href: "#" }
        ]
      },
      {
        label: "Link",
        href: "#"
      }
    ],
    secondary: [
      { label: "Secondary Link", href: "#" },
      { label: "Another Link", href: "#" },
      { label: "Contact", href: "#" }
    ]
  }

  const handleSearch = (value: string) => {
    console.log("Header search:", value)
  }

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-6 font-merriweather">Header Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Default Header</h3>
            <div className="border border-gray-20 rounded">
              <Header
                projectTitle="Project Title"
                navigation={sampleNavigation}
                onSearch={handleSearch}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Extended Header</h3>
            <div className="border border-gray-20 rounded">
              <Header
                variant="extended"
                projectTitle="Project Title"
                navigation={sampleNavigation}
                onSearch={handleSearch}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-5 rounded">
          <h4 className="font-bold mb-2">Usage Example:</h4>
          <pre className="text-sm text-gray-70 overflow-x-auto">
{`import { Header } from "@/components/ui/header"

const navigation = {
  primary: [
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Web Design", href: "/services/web-design" },
        { label: "Development", href: "/services/development" }
      ]
    },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  secondary: [
    { label: "Help", href: "/help" },
    { label: "Login", href: "/login" }
  ]
}

<Header
  projectTitle="My Project"
  navigation={navigation}
  onSearch={(value) => console.log("Search:", value)}
/>`}
          </pre>
        </div>
      </section>
    </div>
  )
}