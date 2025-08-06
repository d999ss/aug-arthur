import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/20">
      <div className="container py-12 lg:py-16">
        {/* Main Footer Grid - Anthropic Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                About
              </Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Careers
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Contact
              </Link>
              <Link href="/about/newsroom" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Newsroom
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Services</h3>
            <div className="space-y-2">
              <Link href="/grain" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Grain Marketing
              </Link>
              <Link href="/services/agronomy" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Agronomy
              </Link>
              <Link href="/services/precision-agriculture" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Precision Ag
              </Link>
              <Link href="/services/specialty-crops" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Specialty Crops
              </Link>
            </div>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Research</h3>
            <div className="space-y-2">
              <Link href="/research-development" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                R&D Overview
              </Link>
              <Link href="/research/crop-genetics" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Crop Genetics
              </Link>
              <Link href="/research/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Sustainability
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Resources</h3>
            <div className="space-y-2">
              <Link href="/grain" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Cash Bids
              </Link>
              <Link href="/grower-insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Grower Insights
              </Link>
              <Link href="/portal" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Producer Portal
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-medium text-foreground mb-3">Legal</h3>
            <div className="space-y-2">
              <Link href="/legal/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Terms
              </Link>
              <Link href="/legal/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Privacy
              </Link>
              <Link href="/legal/accessibility" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Brand Section */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <span className="text-base font-medium text-foreground">Arthur Companies</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Since 1906
            </p>
            <p className="text-xs text-muted-foreground">
              Northern Plains Agriculture
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border/20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Arthur Companies. All rights reserved.
            </p>
            <Link href="/style-guide" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Style Guide
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}