"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  className?: string
}

export function Header({ className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const navigationLinks = [
    { href: "/grain", label: "Grain" },
    { href: "/products-services", label: "Products & Services" },
    { href: "/research-development", label: "Research & Development" },
    { href: "/grower-insights", label: "Grower Insights" },
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/locations", label: "Locations" },
    { href: "/contact", label: "Contact" },
  ] as const

  return (
    <header className={`bg-background border-b border-border/20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-200" aria-label="Arthur Companies Home">
            Arthur Companies
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigationLinks.slice(0, 5).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm">
              Contact
            </Link>
            <Link href="/grain" className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium text-sm">
              Cash Bids
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden py-6 animate-fade-in"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-1"
                  onClick={handleLinkClick}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
EOF < /dev/null