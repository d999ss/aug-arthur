import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/10 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-medium text-foreground">Arthur</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cultivating prosperity across the Northern Plains since 1906.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/grain" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Grain Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/agronomy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Agronomy
                </Link>
              </li>
              <li>
                <Link href="/research-development" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/grower-insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Grower Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/grain" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Cash Bids
                </Link>
              </li>
              <li>
                <Link href="/about/newsroom" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Arthur Companies. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/style-guide" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Style Guide
              </Link>
              <Link href="/legal/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Privacy
              </Link>
              <Link href="/legal/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Terms
              </Link>
              <Link href="/legal/accessibility" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}