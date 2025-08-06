"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Palette, Type, Layout, Camera } from 'lucide-react'

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-y-large">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mx-auto mb-8 flex items-center justify-center">
                <Palette className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-display mb-8 text-balance">
                Arthur Companies{" "}
                <span className="text-serif-large text-primary italic">Style Guide.</span>
              </h1>
              <p className="text-body-large mb-12 max-w-2xl mx-auto">
                A comprehensive guide to our design system, inspired by Anthropic's refined aesthetic 
                and adapted for agricultural excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="section-y-large bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-headline mb-6">Color Palette</h2>
            <p className="text-body-large max-w-3xl mb-12">
              Our colors are directly inspired by Anthropic's sophisticated palette, 
              creating a clean, trustworthy, and professional aesthetic.
            </p>
          </motion.div>

          {/* Primary Colors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 card-refined"
            >
              <div className="w-full h-24 bg-primary rounded-lg mb-4"></div>
              <h3 className="text-title mb-2">Primary</h3>
              <p className="text-body mb-2">Dark yellow</p>
              <code className="text-small bg-muted px-2 py-1 rounded">#d4aa00</code>
              <p className="text-small text-muted-foreground mt-2">
                Used for buttons, links, icons, and emphasis
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 card-refined"
            >
              <div className="w-full h-24 bg-background border rounded-lg mb-4"></div>
              <h3 className="text-title mb-2">Background</h3>
              <p className="text-body mb-2">Pure white</p>
              <code className="text-small bg-muted px-2 py-1 rounded">#ffffff</code>
              <p className="text-small text-muted-foreground mt-2">
                Main background color, clean and minimal
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 card-refined"
            >
              <div className="w-full h-24 bg-foreground rounded-lg mb-4"></div>
              <h3 className="text-title mb-2">Foreground</h3>
              <p className="text-body mb-2">Deep charcoal</p>
              <code className="text-small bg-muted px-2 py-1 rounded">#171717</code>
              <p className="text-small text-muted-foreground mt-2">
                Primary text color for headings and content
              </p>
            </motion.div>
          </div>

          {/* Neutral Colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 card-refined"
            >
              <div className="w-full h-24 bg-secondary rounded-lg mb-4"></div>
              <h3 className="text-title mb-2">Secondary</h3>
              <p className="text-body mb-2">Light slate</p>
              <code className="text-small bg-muted px-2 py-1 rounded">#f8f9fa</code>
              <p className="text-small text-muted-foreground mt-2">
                Alternate section backgrounds
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 card-refined"
            >
              <div className="w-full h-24 bg-muted rounded-lg mb-4"></div>
              <h3 className="text-title mb-2">Muted</h3>
              <p className="text-body mb-2">Subtle cloud</p>
              <code className="text-small bg-muted px-2 py-1 rounded">#eef0f2</code>
              <p className="text-small text-muted-foreground mt-2">
                Cards and subtle backgrounds
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 card-refined"
            >
              <div className="w-full h-24 border-2 border-border rounded-lg mb-4"></div>
              <h3 className="text-title mb-2">Border</h3>
              <p className="text-body mb-2">Subtle slate</p>
              <code className="text-small bg-muted px-2 py-1 rounded">#e2e5e8</code>
              <p className="text-small text-muted-foreground mt-2">
                Card borders and dividers
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="section-y-large">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-headline mb-6">Typography</h2>
            <p className="text-body-large max-w-3xl mb-12">
              Our typography system uses Styrene A for headings, Styrene B for body text, 
              and Tiempos Text for serif emphasis and quotes.
            </p>
          </motion.div>

          {/* Font Families */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 card-refined"
            >
              <h3 className="text-title mb-4" style={{fontFamily: 'Styrene A, sans-serif'}}>Styrene A</h3>
              <p className="text-body mb-4">Used for all headings and display text. Medium weight (500) with tight letter spacing for impact.</p>
              <div className="text-small text-muted-foreground">
                <p>Font-weight: 500</p>
                <p>Letter-spacing: -0.025em</p>
                <p>Line-height: 1.1</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 card-refined"
            >
              <h3 className="text-title mb-4" style={{fontFamily: 'Styrene B, sans-serif'}}>Styrene B</h3>
              <p className="text-body mb-4">Used for body text, buttons, and interface elements. Regular weight (400) with excellent readability.</p>
              <div className="text-small text-muted-foreground">
                <p>Font-weight: 400</p>
                <p>Letter-spacing: -0.008em</p>
                <p>Line-height: 1.6</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 card-refined"
            >
              <h3 className="text-title mb-4" style={{fontFamily: 'Tiempos Text, serif'}}>Tiempos Text</h3>
              <p className="text-body mb-4">Used for quotes, emphasis, and special moments. Adds warmth and sophistication to key messages.</p>
              <div className="text-small text-muted-foreground">
                <p>Font-weight: 400</p>
                <p>Letter-spacing: 0</p>
                <p>Line-height: 1.6</p>
              </div>
            </motion.div>
          </div>

          {/* Typography Scale */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 card-refined"
            >
              <h3 className="text-title mb-6">Typography Scale</h3>
              
              <div className="space-y-6">
                <div className="border-b border-border pb-6">
                  <h1 className="text-display mb-2">Display Heading</h1>
                  <p className="text-small text-muted-foreground">
                    .text-display • Used for hero headlines • 3rem-4.5rem responsive • Styrene A Medium
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h2 className="text-headline mb-2">Section Headline</h2>
                  <p className="text-small text-muted-foreground">
                    .text-headline • Used for section headings • 2rem-2.75rem responsive • Styrene A Medium
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-title mb-2">Content Title</h3>
                  <p className="text-small text-muted-foreground">
                    .text-title • Used for subsections • 1.25rem-1.75rem responsive • Styrene A Medium
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <p className="text-body-large mb-2">Large Body Text</p>
                  <p className="text-small text-muted-foreground">
                    .text-body-large • Used for important paragraphs • 1.125rem-1.25rem responsive • Styrene B Regular
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <p className="text-body mb-2">Regular Body Text</p>
                  <p className="text-small text-muted-foreground">
                    .text-body • Used for standard content • 1rem • Styrene B Regular
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <p className="text-small mb-2">Small Text</p>
                  <p className="text-small text-muted-foreground">
                    .text-small • Used for captions and metadata • 0.875rem • Styrene B Regular
                  </p>
                </div>

                <div>
                  <p className="text-serif-large text-primary italic mb-2">Serif Emphasis</p>
                  <p className="text-small text-muted-foreground">
                    .text-serif-large • Used for quotes and special emphasis • Tiempos Text Regular
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="section-y-large bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-headline mb-6">Components</h2>
            <p className="text-body-large max-w-3xl mb-12">
              Reusable components built with our design tokens for consistency across all pages.
            </p>
          </motion.div>

          {/* Buttons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 card-refined"
            >
              <h3 className="text-title mb-6">Buttons</h3>
              <div className="space-y-4">
                <div>
                  <button className="btn-primary mb-2">Primary Button</button>
                  <p className="text-small text-muted-foreground">
                    .btn-primary • Dark background, white text • Used for main actions
                  </p>
                </div>
                <div>
                  <button className="btn-secondary mb-2">Secondary Button</button>
                  <p className="text-small text-muted-foreground">
                    .btn-secondary • Transparent with border • Used for secondary actions
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 card-refined"
            >
              <h3 className="text-title mb-6">Cards</h3>
              <div className="p-6 card-refined hover-lift">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                  <Type className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-title mb-2">Card Example</h4>
                <p className="text-body mb-4">
                  Cards use .card-refined class with subtle borders, rounded corners, and hover effects.
                </p>
                <div className="flex items-center text-primary text-small font-medium">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 card-refined"
          >
            <h3 className="text-title mb-6">Layout System</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-body-medium mb-3">Spacing</h4>
                <ul className="space-y-2 text-small text-muted-foreground">
                  <li><code>.section-y</code> - 4rem top/bottom padding</li>
                  <li><code>.section-y-large</code> - 5rem top/bottom padding</li>
                  <li><code>.container</code> - Max width with responsive padding</li>
                  <li><code>.grid-refined</code> - Consistent grid gap spacing</li>
                </ul>
              </div>
              <div>
                <h4 className="text-body-medium mb-3">Animations</h4>
                <ul className="space-y-2 text-small text-muted-foreground">
                  <li><code>.hover-lift</code> - Subtle hover elevation</li>
                  <li><code>.transition-smooth</code> - 300ms ease-out</li>
                  <li>Framer Motion for page transitions</li>
                  <li>Staggered animations for lists</li>
                </ul>
              </div>
              <div>
                <h4 className="text-body-medium mb-3">Responsive</h4>
                <ul className="space-y-2 text-small text-muted-foreground">
                  <li>Mobile-first approach</li>
                  <li>Fluid typography scaling</li>
                  <li>Adaptive grid layouts</li>
                  <li>Touch-friendly interfaces</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Imagery Guidelines */}
      <section className="section-y-large">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-headline mb-6">Imagery & Graphics</h2>
            <p className="text-body-large max-w-3xl mb-12">
              Visual elements that complement our clean aesthetic while representing agricultural excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 card-refined"
            >
              <Camera className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-title mb-4">Photography Style</h3>
              <ul className="space-y-3 text-body text-muted-foreground">
                <li>• Clean, uncluttered compositions</li>
                <li>• Natural lighting preferred</li>
                <li>• Agricultural subjects in context</li>
                <li>• Professional, authentic imagery</li>
                <li>• Consistent color grading</li>
                <li>• High contrast, sharp focus</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 card-refined"
            >
              <Layout className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-title mb-4">Icon Usage</h3>
              <ul className="space-y-3 text-body text-muted-foreground">
                <li>• Lucide React icon library</li>
                <li>• Agricultural emojis for navigation (🌾 🧪 🛰️)</li>
                <li>• Consistent sizing: 4w 4h, 5w 5h, 6w 6h</li>
                <li>• Primary color for accent icons</li>
                <li>• Gradient backgrounds for featured icons</li>
                <li>• Subtle opacity (80%) for decorative icons</li>
              </ul>
            </motion.div>
          </div>

          {/* Example Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 p-8 card-refined"
          >
            <h3 className="text-title mb-6">Icon Examples</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {[
                { emoji: "🌾", label: "Grain" },
                { emoji: "🧪", label: "Agronomy" },
                { emoji: "🛰️", label: "Precision Ag" },
                { emoji: "🌿", label: "Specialty Crops" },
                { emoji: "⚗️", label: "Fertilizer" },
                { emoji: "🌱", label: "Soil Health" },
                { emoji: "🔬", label: "Research" },
                { emoji: "🧬", label: "Genetics" }
              ].map((icon, index) => (
                <div key={icon.label} className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-2xl mb-2">{icon.emoji}</div>
                  <p className="text-small text-muted-foreground">{icon.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation */}
      <section className="section-y-large bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-headline mb-6">Implementation Notes</h2>
            <div className="text-serif text-body-large mb-8 text-muted-foreground italic">
              "Consistency is the hallmark of great design systems."
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-6 card-refined">
                <h3 className="text-title mb-4">Design Tokens</h3>
                <p className="text-body mb-4">
                  All colors, typography, and spacing use CSS custom properties for easy theme management and consistency.
                </p>
                <code className="text-small bg-foreground text-background px-2 py-1 rounded">
                  hsl(var(--primary))
                </code>
              </div>

              <div className="p-6 card-refined">
                <h3 className="text-title mb-4">Anthropic Inspiration</h3>
                <p className="text-body mb-4">
                  Our design system draws directly from Anthropic's sophisticated aesthetic, adapted for agricultural content.
                </p>
                <Link href="https://www.anthropic.com" target="_blank" className="text-primary hover:text-primary/80 text-small">
                  View Anthropic's Design →
                </Link>
              </div>
            </div>

            <div className="mt-12">
              <Link href="/" className="btn-primary">
                View Live Site
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}