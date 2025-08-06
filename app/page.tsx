"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Anthropic Style */}
      <section className="relative min-h-screen flex items-center -mt-16 lg:-mt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-display mb-8">
              Agricultural innovation
              <span className="block text-primary">since 1906.</span>
            </h1>
            <p className="text-body-large text-muted-foreground mb-12 max-w-2xl">
              For over a century, Arthur Companies has been at the forefront of sustainable 
              agriculture, partnering with farmers across the Northern Plains to cultivate 
              prosperity and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/grain"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 text-sm font-medium"
              >
                View Cash Bids
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border hover:bg-muted transition-all duration-200 text-sm font-medium"
              >
                Learn Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Clean Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
          >
            <div>
              <div className="text-5xl lg:text-6xl font-medium text-primary mb-2">117+</div>
              <div className="text-base text-muted-foreground">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-medium text-primary mb-2">500K+</div>
              <div className="text-base text-muted-foreground">Acres Served</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-medium text-primary mb-2">15+</div>
              <div className="text-base text-muted-foreground">Locations</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Anthropic Style */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-headline mb-6">Our Services</h2>
            <p className="text-body-large text-muted-foreground max-w-3xl">
              Comprehensive agricultural solutions that combine traditional wisdom with 
              cutting-edge technology to help farmers thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Grain Marketing",
                description: "Real-time cash bids and strategic marketing solutions for optimal grain returns.",
                link: "/grain"
              },
              {
                title: "Agronomy Services",
                description: "Expert guidance on crop nutrition, soil health, and sustainable farming practices.",
                link: "/services/agronomy"
              },
              {
                title: "Research & Development",
                description: "Pioneering agricultural research driving tomorrow's farming innovations.",
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
                description: "Comprehensive nutrient programs backed by decades of agronomic expertise.",
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
                  className="group block p-8 rounded-xl border border-border/50 hover:border-border hover:shadow-lg transition-all duration-200"
                >
                  <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section - Anthropic Style */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
              <p className="text-body-large text-muted-foreground mb-6">
                At Arthur Companies, we believe in the power of partnership. Our century-long 
                commitment to farmers has taught us that success grows from understanding—understanding 
                the land, the seasons, and most importantly, the people we serve.
              </p>
              <p className="text-body text-muted-foreground mb-8">
                From grain marketing to precision agriculture, we combine time-tested wisdom 
                with innovative solutions to help our partners navigate an ever-changing 
                agricultural landscape.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-200"
              >
                Discover our story
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
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl lg:text-7xl font-medium text-primary/60 mb-4">1906</div>
                  <div className="text-lg text-muted-foreground">Founded in North Dakota</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Minimal Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Our Values</h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
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
                description: "Striving for quality in everything we do." 
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
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Anthropic Style */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-background text-foreground hover:bg-background/90 transition-all duration-200 text-sm font-medium"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/grower-insights"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-background/20 text-background hover:bg-background/10 transition-all duration-200 text-sm font-medium"
              >
                Download App
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}