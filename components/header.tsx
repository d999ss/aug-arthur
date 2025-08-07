"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, X, Menu } from "lucide-react"
import { FuturesHeaderBanner } from './futures-ticker'
import { styreneA } from '@/lib/fonts'

const navigationData = {
  services: {
    title: "Services",
    items: [
      {
        category: "Core Services",
        links: [
          { 
            href: "/products-services", 
            label: "Products & Services", 
            description: "Complete agricultural solutions overview",
            icon: "🏭"
          },
          { 
            href: "/grain", 
            label: "Grain Marketing", 
            description: "Real-time cash bids and strategic marketing",
            icon: "🌾"
          },
          { 
            href: "/services/agronomy", 
            label: "Agronomy", 
            description: "Expert crop nutrition and soil health guidance",
            icon: "🧪"
          },
          { 
            href: "/services/precision-agriculture", 
            label: "Precision Agriculture", 
            description: "Data-driven technology solutions",
            icon: "🛰️"
          },
        ]
      },
      {
        category: "Specialized Solutions", 
        links: [
          { 
            href: "/services/specialty-crops", 
            label: "Specialty Crops", 
            description: "Identity-preserved grain handling",
            icon: "🌿"
          },
          { 
            href: "/services/wholesale-fertilizer", 
            label: "Wholesale Fertilizer", 
            description: "Comprehensive nutrient programs",
            icon: "⚗️"
          },
          { 
            href: "/services/soil-health", 
            label: "Soil Health", 
            description: "Sustainable farming practices",
            icon: "🌱"
          },
        ]
      }
    ]
  },
  research: {
    title: "Research",
    items: [
      {
        category: "Innovation",
        links: [
          { 
            href: "/research-development", 
            label: "R&D Overview", 
            description: "Our research initiatives",
            icon: "🔬"
          },
          { 
            href: "/research/crop-genetics", 
            label: "Crop Genetics", 
            description: "Advanced genetic research",
            icon: "🧬"
          },
          { 
            href: "/research/sustainability", 
            label: "Sustainability", 
            description: "Environmental stewardship",
            icon: "🌍"
          },
        ]
      },
      {
        category: "Technology",
        links: [
          { 
            href: "/research/data-science", 
            label: "Data Science", 
            description: "Agricultural data analytics",
            icon: "📊"
          },
          { 
            href: "/research/precision-agriculture", 
            label: "Precision Tech", 
            description: "Cutting-edge farming technology",
            icon: "🤖"
          },
        ]
      }
    ]
  }
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  
  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Futures Banner */}
      <FuturesHeaderBanner />
      
      {/* Main Navigation */}
      <div className="bg-background/80 backdrop-blur-md border-b border-border/10">
        <div className="container h-20">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group"
            >
              <span style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '1.25rem',
                fontWeight: '700',
                letterSpacing: '-0.025em'
              }}>
                Arthur Companies
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Grain Link */}
              <Link href="/grain" className="px-3 py-2 text-small font-medium text-muted hover:text-foreground transition-colors duration-200">
                Grain
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('services')}
                  className="flex items-center px-3 py-2 text-small font-medium text-muted hover:text-foreground transition-colors duration-200"
                >
                  Services
                  <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-[520px] border border-border/20 rounded-xl shadow-lg p-6 mt-1"
                      style={{ backgroundColor: '#f0eee7' }}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="grid grid-cols-2 gap-8">
                        {navigationData.services.items.map((category) => (
                          <div key={category.category}>
                            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                              {category.category}
                            </h3>
                            <div className="space-y-3">
                              {category.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="block group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="text-lg mt-0.5 opacity-80">{link.icon}</div>
                                    <div className="flex-1">
                                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                        {link.label}
                                      </div>
                                      <div className="text-xs text-muted-foreground mt-1">
                                        {link.description}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Research Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('research')}
                  className="flex items-center px-3 py-2 text-small font-medium text-muted hover:text-foreground transition-colors duration-200"
                >
                  Research
                  <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                    activeDropdown === 'research' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'research' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-[480px] border border-border/20 rounded-xl shadow-lg p-6 mt-1"
                      style={{ backgroundColor: '#f0eee7' }}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="grid grid-cols-2 gap-8">
                        {navigationData.research.items.map((category) => (
                          <div key={category.category}>
                            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                              {category.category}
                            </h3>
                            <div className="space-y-3">
                              {category.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="block group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="text-lg mt-0.5 opacity-80">{link.icon}</div>
                                    <div className="flex-1">
                                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                        {link.label}
                                      </div>
                                      <div className="text-xs text-muted-foreground mt-1">
                                        {link.description}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Simple Links */}
              <Link href="/about" className="px-3 py-2 text-small font-medium text-muted hover:text-foreground transition-colors duration-200">
                About
              </Link>
              <Link href="/careers" className="px-3 py-2 text-small font-medium text-muted hover:text-foreground transition-colors duration-200">
                Careers
              </Link>
              <Link href="/contact" className="px-3 py-2 text-small font-medium text-muted hover:text-foreground transition-colors duration-200">
                Contact
              </Link>

              {/* CTA Button */}
              <div className="flex items-center gap-3 ml-4">
                <Link 
                  href="/grain" 
                  className="btn btn-primary"
                >
                  Cash Bids
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay - Anthropic Style */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-sm lg:hidden"
              onClick={toggleMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-24 border border-border/20 rounded-2xl shadow-lg lg:hidden overflow-hidden"
              style={{ backgroundColor: '#f8f9fa' }}
            >
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                <nav className="space-y-6">
                  {/* Grain Link */}
                  <div>
                    <Link 
                      href="/grain" 
                      onClick={toggleMenu}
                      className="block text-body font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Grain
                    </Link>
                  </div>

                  {/* Services Section */}
                  <div>
                    <button
                      onClick={() => handleDropdownToggle('services')}
                      className="flex items-center justify-between w-full text-left text-base font-medium text-foreground mb-3"
                    >
                      Services
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        activeDropdown === 'services' ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === 'services' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4"
                        >
                          {navigationData.services.items.map((category) => (
                            <div key={category.category}>
                              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                                {category.category}
                              </h4>
                              <div className="space-y-2 ml-2">
                                {category.links.map((link) => (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="block"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="text-base mt-0.5 opacity-80">{link.icon}</div>
                                      <div className="flex-1">
                                        <div className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                          {link.label}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          {link.description}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Research Section */}
                  <div>
                    <button
                      onClick={() => handleDropdownToggle('research')}
                      className="flex items-center justify-between w-full text-left text-base font-medium text-foreground mb-3"
                    >
                      Research
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        activeDropdown === 'research' ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === 'research' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4"
                        >
                          {navigationData.research.items.map((category) => (
                            <div key={category.category}>
                              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                                {category.category}
                              </h4>
                              <div className="space-y-2 ml-2">
                                {category.links.map((link) => (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="block"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="text-base mt-0.5 opacity-80">{link.icon}</div>
                                      <div className="flex-1">
                                        <div className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                          {link.label}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          {link.description}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Simple Links */}
                  <div className="space-y-3">
                    <Link 
                      href="/about" 
                      onClick={toggleMenu}
                      className="block text-body font-medium text-foreground hover:text-primary transition-colors"
                    >
                      About
                    </Link>
                    <Link 
                      href="/careers" 
                      onClick={toggleMenu}
                      className="block text-body font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Careers
                    </Link>
                    <Link 
                      href="/contact" 
                      onClick={toggleMenu}
                      className="block text-body font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </div>

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-border/20">
                    <Link 
                      href="/grain" 
                      onClick={toggleMenu}
                      className="btn btn-primary w-full justify-center"
                    >
                      Cash Bids
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}