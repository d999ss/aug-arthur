"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Minimal like Anthropic */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <span className="text-lg lg:text-xl font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
              Arthur Companies
            </span>
          </Link>

          {/* Desktop Navigation - Minimal */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              About
            </Link>
            <Link href="/products-services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Services
            </Link>
            <Link href="/research-development" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Research
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Contact
            </Link>
            <Link 
              href="/grain" 
              className="ml-4 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all duration-200"
            >
              Cash Bids
            </Link>
          </nav>

          {/* Mobile Menu Button - Minimal */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-6 h-6 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex flex-col justify-center">
              <span 
                className={`block h-0.5 w-full bg-foreground transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0.5' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-full bg-foreground mt-1.5 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Anthropic Style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-t border-border/10 bg-background/95 backdrop-blur-md"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              <Link 
                href="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                href="/products-services" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                Products & Services
              </Link>
              <Link 
                href="/research-development" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                Research & Development
              </Link>
              <Link 
                href="/grower-insights" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                Grower Insights
              </Link>
              <Link 
                href="/careers" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                Careers
              </Link>
              <Link 
                href="/locations" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                Locations
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </Link>
              <Link 
                href="/grain" 
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4 px-4 py-3 rounded-lg bg-foreground text-background text-center text-base font-medium hover:bg-foreground/90 transition-all duration-200"
              >
                View Cash Bids
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}