"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Refined Anthropic Style */}
      <section className="relative min-h-screen flex items-center -mt-16 lg:-mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
        
        <div className="relative z-10 container py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-display mb-8 text-balance">
              Agricultural excellence{" "}
              <span className="text-serif-large text-primary italic">since 1906.</span>
            </h1>
            <p className="text-body-large mb-12 max-w-2xl">
              For over a century, Arthur Companies has cultivated prosperity across the 
              Northern Plains, combining time-honored wisdom with innovative solutions 
              for modern agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/grain" className="btn-primary">
                View Cash Bids
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
          >
            <div className="text-center">
              <div className="text-5xl font-medium text-primary mb-3">117</div>
              <div className="text-small">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-medium text-primary mb-3">500K</div>
              <div className="text-small">Acres Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-medium text-primary mb-3">15</div>
              <div className="text-small">Locations</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-y-large">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-headline mb-6">Our Services</h2>
            <p className="text-body-large max-w-3xl">
              Comprehensive agricultural solutions that bridge traditional farming 
              wisdom with cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-refined">
            {[
              {
                title: "Grain Marketing",
                description: "Real-time cash bids and strategic marketing solutions for optimal returns on your harvest.",
                link: "/grain"
              },
              {
                title: "Agronomy Services", 
                description: "Expert guidance on crop nutrition, soil health, and sustainable farming practices.",
                link: "/services/agronomy"
              },
              {
                title: "Research & Development",
                description: "Pioneering agricultural research that drives tomorrow's farming innovations.",
                link: "/research-development"
              },
              {
                title: "Specialty Crops",
                description: "Premium contracts and specialized handling for identity-preserved grains.",
                link: "/services/specialty-crops"
              },
              {
                title: "Precision Agriculture",
                description: "Data-driven insights and technology solutions for maximum field efficiency.",
                link: "/services/precision-agriculture"
              },
              {
                title: "Wholesale Fertilizer",
                description: "Comprehensive nutrient programs backed by agronomic expertise.",
                link: "/services/wholesale-fertilizer"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  href={service.link}
                  className="group block p-6 card-refined hover-lift"
                >
                  <h3 className="text-title mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-body mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary text-small font-medium">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section with Serif */}
      <section className="section-y-large bg-secondary/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-headline mb-8">
                Building the future of agriculture
              </h2>
              <div className="text-serif text-body-large mb-6 text-muted-foreground italic">
                "Success in farming comes not from fighting nature, 
                but from understanding and working with it."
              </div>
              <p className="text-body mb-6">
                At Arthur Companies, we believe in the power of partnership. Our century-long 
                journey has taught us that true agricultural success grows from understanding—
                understanding the land, the seasons, and most importantly, the people we serve.
              </p>
              <p className="text-body mb-8">
                From grain marketing to precision agriculture, we combine generational wisdom 
                with innovative technology to help our partners thrive in an ever-evolving 
                agricultural landscape.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
              >
                <span className="text-body-medium">Discover our story</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/8 via-accent/5 to-primary/8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-serif text-6xl lg:text-7xl font-normal text-primary/70 mb-4">1906</div>
                  <div className="text-small text-muted-foreground">Founded in North Dakota</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-y-large">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Our Values</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              The principles that have guided our work for over a century.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { 
                title: "Integrity", 
                description: "Doing what's right, even when no one is watching."
              },
              { 
                title: "Service", 
                description: "Putting our farmers and communities first, always."
              },
              { 
                title: "Innovation", 
                description: "Embracing new ideas while honoring tradition."
              },
              { 
                title: "Excellence", 
                description: "Pursuing quality in everything we do."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-title mb-3">{value.title}</h3>
                <p className="text-body">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-y-large bg-foreground text-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-headline mb-6 text-background">
                Ready to grow with Arthur?
              </h2>
              <p className="text-body-large mb-12 opacity-90">
                Join thousands of farmers who trust us with their success.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-background text-foreground hover:bg-background/90 transition-all duration-200 text-sm font-medium"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/grower-insights"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-background/20 text-background hover:bg-background/10 transition-all duration-200 text-sm font-medium"
                >
                  Download App
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}