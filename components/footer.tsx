import Link from "next/link"

export function Footer() {
  return (
    <footer style={{ background: 'hsl(0 0% 3%)', color: 'hsl(var(--color-background))' }} className="border-t border-border/20">
      <div className="container" style={{ paddingTop: '12rem', paddingBottom: '12rem' }}>
        {/* Main Footer Grid - Anthropic Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          {/* Company */}
          <div>
            <h3 className="text-small font-medium mb-md">Company</h3>
            <div className="space-y-3">
              <Link href="/about" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                About
              </Link>
              <Link href="/careers" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Careers
              </Link>
              <Link href="/contact" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Contact
              </Link>
              <Link href="/about/newsroom" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Newsroom
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-small font-medium mb-md">Services</h3>
            <div className="space-y-3">
              <Link href="/grain" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Grain Marketing
              </Link>
              <Link href="/services/agronomy" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Agronomy
              </Link>
              <Link href="/services/precision-agriculture" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Precision Ag
              </Link>
              <Link href="/services/specialty-crops" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Specialty Crops
              </Link>
            </div>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-small font-medium mb-md">Research</h3>
            <div className="space-y-3">
              <Link href="/research-development" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                R&D Overview
              </Link>
              <Link href="/research/crop-genetics" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Crop Genetics
              </Link>
              <Link href="/research/sustainability" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Sustainability
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-small font-medium mb-md">Resources</h3>
            <div className="space-y-3">
              <Link href="/grain" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Cash Bids
              </Link>
              <Link href="/grower-insights" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Grower Insights
              </Link>
              <Link href="/portal" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Producer Portal
              </Link>
              <Link href="/style-guide" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Style Guide
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-small font-medium mb-md">Legal</h3>
            <div className="space-y-3">
              <Link href="/legal/terms" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Terms
              </Link>
              <Link href="/legal/privacy" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Privacy
              </Link>
              <Link href="/legal/accessibility" className="text-small hover:opacity-100 opacity-70 transition-colors block">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Brand Section */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <span className="text-base font-medium text-background">Arthur Companies</span>
            </Link>
            <p className="text-xs text-background/70 leading-relaxed mb-3">
              Since 1906
            </p>
            <p className="text-xs text-background/70">
              Northern Plains Agriculture
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 mt-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs text-background/70">
              © {new Date().getFullYear()} Arthur Companies. All rights reserved.
            </p>
            <Link href="/style-guide" className="text-xs text-background/70 hover:text-background transition-colors">
              Style Guide
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}