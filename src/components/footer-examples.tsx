"use client"

import { Footer } from "@/components/ui/footer"

export function FooterExamples() {
  // Sample footer data
  const sampleNavigation = {
    topics: [
      {
        title: "Services",
        links: [
          { label: "Web Design", href: "#" },
          { label: "Development", href: "#" },
          { label: "Consulting", href: "#" },
          { label: "Support", href: "#" }
        ]
      },
      {
        title: "About",
        links: [
          { label: "Our Story", href: "#" },
          { label: "Team", href: "#" },
          { label: "Careers", href: "#" },
          { label: "News", href: "#" }
        ]
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", href: "#" },
          { label: "Tutorials", href: "#" },
          { label: "Blog", href: "#" },
          { label: "FAQ", href: "#" }
        ]
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Accessibility", href: "#" },
          { label: "FOIA", href: "#" }
        ]
      }
    ],
    primaryLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Accessibility", href: "#" },
      { label: "Contact Us", href: "#" }
    ],
    socialLinks: [
      {
        platform: "facebook",
        href: "#",
        icon: "icon-[fa6-brands--facebook]",
        label: "Facebook"
      },
      {
        platform: "twitter",
        href: "#",
        icon: "icon-[fa6-brands--twitter]",
        label: "Twitter"
      },
      {
        platform: "youtube",
        href: "#",
        icon: "icon-[fa6-brands--youtube]",
        label: "YouTube"
      },
      {
        platform: "instagram",
        href: "#",
        icon: "icon-[fa6-brands--instagram]",
        label: "Instagram"
      },
      {
        platform: "rss",
        href: "#",
        icon: "icon-[material-symbols--rss-feed]",
        label: "RSS"
      }
    ]
  }

  const sampleAgencyInfo = {
    name: "USWDS Demo Agency",
    logo: "https://via.placeholder.com/80x80/f0f0f0/333333?text=LOGO",
    logoAlt: "Agency Logo"
  }

  const sampleContactInfo = {
    phone: "(800) 555-GOVT",
    email: "info@agency.gov"
  }

  const handleNewsletterSignup = (email: string) => {
    console.log("Newsletter signup:", email)
  }

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-6 font-merriweather">Footer Examples</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Default Footer</h3>
            <div className="border border-gray-20 rounded overflow-hidden">
              <Footer
                navigation={sampleNavigation}
                agencyInfo={sampleAgencyInfo}
                contactInfo={sampleContactInfo}
                showNewsletter={true}
                onNewsletterSignup={handleNewsletterSignup}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Slim Footer</h3>
            <div className="border border-gray-20 rounded overflow-hidden">
              <Footer
                variant="slim"
                navigation={{
                  primaryLinks: sampleNavigation.primaryLinks
                }}
                agencyInfo={{
                  name: "Agency Contact Center",
                  logo: "https://via.placeholder.com/48x48/f0f0f0/333333?text=LOGO"
                }}
                contactInfo={sampleContactInfo}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Footer without Newsletter</h3>
            <div className="border border-gray-20 rounded overflow-hidden">
              <Footer
                navigation={{
                  topics: sampleNavigation.topics.slice(0, 2),
                  primaryLinks: sampleNavigation.primaryLinks,
                  socialLinks: sampleNavigation.socialLinks.slice(0, 3)
                }}
                agencyInfo={sampleAgencyInfo}
                contactInfo={sampleContactInfo}
                showNewsletter={false}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-5 rounded">
          <h4 className="font-bold mb-2">Usage Example:</h4>
          <pre className="text-sm text-gray-70 overflow-x-auto">
{`import { Footer } from "@/components/ui/footer"

const navigation = {
  topics: [
    {
      title: "Services",
      links: [
        { label: "Web Design", href: "/services/web-design" },
        { label: "Development", href: "/services/development" }
      ]
    }
  ],
  primaryLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact Us", href: "/contact" }
  ],
  socialLinks: [
    {
      platform: "facebook",
      href: "https://facebook.com/agency",
      icon: "icon-[fa6-brands--facebook]",
      label: "Facebook"
    }
  ]
}

<Footer
  navigation={navigation}
  agencyInfo={{ name: "My Agency" }}
  contactInfo={{ phone: "(800) 555-0123", email: "info@agency.gov" }}
  showNewsletter={true}
  onNewsletterSignup={(email) => console.log("Signup:", email)}
/>`}
          </pre>
        </div>
      </section>
    </div>
  )
}