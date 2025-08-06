import Link from "next/link"

interface FooterProps {
  className?: string
}

interface FooterLink {
  href: string
  label: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

export function Footer({ className = "" }: FooterProps) {
  const footerSections: FooterSection[] = [
    {
      title: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/careers", label: "Careers" },
        { href: "/locations", label: "Locations" },
        { href: "/about/newsroom", label: "Newsroom" },
      ]
    },
    {
      title: "Services",
      links: [
        { href: "/grain", label: "Grain" },
        { href: "/products-services", label: "Products & Services" },
        { href: "/research-development", label: "Research & Development" },
        { href: "/grower-insights", label: "Grower Insights" },
      ]
    },
    {
      title: "Resources",
      links: [
        { href: "/contact", label: "Contact" },
        { href: "/legal/privacy", label: "Privacy" },
        { href: "/legal/terms", label: "Terms" },
        { href: "/legal/accessibility", label: "Accessibility" },
      ]
    }
  ]

  return (
    <footer className={`bg-background border-t border-border/20 ${className}`}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-semibold text-foreground">
              Arthur Companies
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Family owned since 1906. Delivering performance you can measure and people you can trust across North Dakota and beyond.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-medium text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Arthur Companies. All rights reserved.
            </p>
            <Link 
              href="/grain" 
              className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
            >
              View Cash Bids
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}