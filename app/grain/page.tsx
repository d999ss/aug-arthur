"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { TrendingUp, Truck, Award, ArrowRight } from 'lucide-react'
import { GrainPricing } from '@/components/grain-pricing'

export default function GrainPage() {
  return (
    <div className="min-h-screen">
      {/* Real-Time Grain Pricing */}
      <section className="section-y bg-secondary/20" id="bids">
        <div className="container">
          <GrainPricing />
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-y-large">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-display mb-8 text-balance">
                Grain Marketing, Grounded in{" "}
                <span className="text-serif-large text-primary italic">Trust</span>
              </h1>
              <p className="text-body-large mb-6 max-w-3xl mx-auto">
                At Arthur, we deliver grain marketing services that combine local knowledge with market insight.
              </p>
              <p className="text-body mb-12 max-w-2xl mx-auto">
                Our facilities are built for speed, our team is built for service, and our approach is built around your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="#bids" className="btn-primary">
                  View Local Bids
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Our Merchandisers
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-y-large bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Our Grain Services</h2>
            <p className="text-body-large max-w-2xl mx-auto">
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
                className="text-center p-8 card-refined hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-title mb-4">{service.title}</h3>
                <p className="text-body text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-y-large bg-foreground text-background" id="bids">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-headline mb-6 text-background">
                Ready to market your grain?
              </h2>
              <div className="text-serif text-body-large mb-6 opacity-90 italic">
                "The best time to market grain is when you have a plan—and a partner you trust."
              </div>
              <p className="text-body-large mb-12 opacity-90">
                Get competitive bids and expert guidance from our grain marketing team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="#current-bids"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-background text-foreground hover:bg-background/90 transition-all duration-200 text-sm font-medium"
                >
                  View Current Bids
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-background/20 text-background hover:bg-background/10 transition-all duration-200 text-sm font-medium"
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
