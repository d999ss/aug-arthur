"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
    { href: "/", label: "Home" },
    { href: "/grain", label: "Grain" },
    { href: "/products-services", label: "Products & Services" },
    { href: "/research-development", label: "Research & Development" },
    { href: "/grower-insights", label: "Grower Insights" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
    { href: "/locations", label: "Locations" },
  ] as const

  return (
    <header className={`bg-white shadow-sm border-b ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2" aria-label="Arthur Companies Home">
            <div className="w-8 h-8 bg-brand-primary rounded" aria-hidden="true"></div>
            <span className="text-xl font-bold text-gray-900">Arthur Companies</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigationLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-700 hover:text-brand-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 rounded-sm px-2 py-1"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/grain">
              <Button 
                variant="outline" 
                size="sm"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-200"
              >
                Cash Bids
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden py-4 border-t animate-fade-in"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-700 hover:text-brand-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 rounded-sm px-2 py-1"
                  onClick={handleLinkClick}
                >
                  {label}
                </Link>
              ))}
              <Link href="/grain" onClick={handleLinkClick}>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-fit bg-transparent border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-200"
                >
                  Cash Bids
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
