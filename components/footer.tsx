import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

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
        { href: "/about/history", label: "History" },
        { href: "/about/leadership", label: "Leadership" },
        { href: "/about/newsroom", label: "Newsroom" },
        { href: "/careers", label: "Careers" },
        { href: "/locations", label: "Locations" },
      ]
    },
    {
      title: "Services",
      links: [
        { href: "/products-services#on-farm", label: "On the Farm" },
        { href: "/products-services#off-farm", label: "Off the Farm" },
        { href: "/research-development", label: "Research & Development" },
        { href: "/grain", label: "Cash Bids" },
      ]
    },
    {
      title: "Resources",
      links: [
        { href: "/grower-insights", label: "Grower Insights" },
        { href: "/research-development", label: "Innovation" },
        { href: "/about/newsroom", label: "Newsroom" },
        { href: "/contact", label: "Contact Us" },
      ]
    }
  ]

  const legalLinks: FooterLink[] = [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Use" },
    { href: "/legal/accessibility", label: "Accessibility" },
  ]

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-brand-primary rounded" aria-hidden="true"></div>
              <span className="text-lg font-bold">Arthur Companies</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">Family owned since 1906</p>
            <p className="text-gray-400 text-sm">
              Delivering performance you can measure and people you can trust across North Dakota and beyond.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row gap-4 mb-4 md:mb-0">
              <Link href="/grower-insights">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent hover:border-brand-primary hover:text-brand-primary transition-colors duration-200"
                >
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  Download Bushel App
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <span>© 2024 Arthur Companies. All rights reserved.</span>
              <div className="flex gap-4">
                {legalLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
