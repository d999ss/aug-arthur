"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { TrendingUp, Truck, Award, ArrowRight } from 'lucide-react'
import { GrainPricing } from '@/components/grain-pricing'

export default function GrainPage() {
  return (
    <div className="min-h-screen">
      {/* Real-Time Grain Pricing */}
      <section className="section bg-muted" id="bids">
        <div className="container">
          <GrainPricing />
        </div>
      </section>

      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-hero mb-lg text-balance">
                Grain Marketing, Grounded in{" "}
                <span className="text-serif text-primary">Trust</span>
              </h1>
              <p className="text-body mb-md max-w-3xl mx-auto">
                At Arthur, we deliver grain marketing services that combine local knowledge with market insight.
              </p>
              <p className="text-body mb-xl max-w-2xl mx-auto">
                Our facilities are built for speed, our team is built for service, and our approach is built around your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="#bids" className="btn btn-primary">
                  View Local Bids
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Contact Our Merchandisers
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-md">Our Grain Services</h2>
            <p className="text-body max-w-2xl mx-auto">
              Comprehensive grain marketing solutions that maximize your returns 
              through local expertise and market intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: TrendingUp,
                title: "Cash Bids and Hedge Tools",
                description: "Live board basis, forward contracts, and a clear view of carry create margin where others see noise."
              },
              {
                icon: Truck,
                title: "On Farm Pickup and Logistics", 
                description: "Our fleet and rail network move grain on schedule, cutting wait times and shrink."
              },
              {
                icon: Award,
                title: "Specialty Contract Programs",
                description: "Earn premiums through identity preserved corn, food grade soybeans, and sustainable barley programs verified at every step."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 card"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-headline mb-md">{service.title}</h3>
                <p className="text-body text-muted">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'hsl(var(--color-foreground))', color: 'hsl(var(--color-background))' }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-headline mb-md" style={{ color: 'hsl(var(--color-background))' }}>
                Ready to market your grain?
              </h2>
              <div className="text-serif text-body mb-md" style={{ color: 'hsl(var(--color-background) / 0.9)' }}>
                "The best time to market grain is when you have a plan—and a partner you trust."
              </div>
              <p className="text-body mb-xl" style={{ color: 'hsl(var(--color-background) / 0.9)' }}>
                Get competitive bids and expert guidance from our grain marketing team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="#current-bids"
                  className="btn btn-primary"
                  style={{ backgroundColor: 'hsl(var(--color-background))', color: 'hsl(var(--color-foreground))' }}
                >
                  View Current Bids
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/contact"
                  className="btn btn-secondary"
                  style={{ backgroundColor: 'transparent', color: 'hsl(var(--color-background))', borderColor: 'hsl(var(--color-background) / 0.3)' }}
                >
                  Contact Merchandiser
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
