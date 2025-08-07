"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Users, Building2, Sprout, Factory, Beaker, Truck, ChevronRight } from 'lucide-react'

export default function ProductsServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Height with Lighting */}
      <section className="relative min-h-screen flex items-center justify-center -mt-16 lg:-mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
        
        {/* Enhanced lighting effects */}
        <div 
          className="absolute top-1/2 left-1/4 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-float"
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, 
              hsla(45, 85%, 55%, 0.3) 0%, 
              hsla(45, 85%, 60%, 0.18) 25%, 
              hsla(45, 85%, 65%, 0.1) 50%, 
              hsla(45, 85%, 70%, 0.05) 75%, 
              transparent 100%)`,
            filter: 'blur(60px)',
            animationDelay: '0s'
          }}
        />
        
        <div 
          className="absolute top-1/3 right-1/4 w-[800px] h-[800px] -translate-y-1/2 pointer-events-none animate-float"
          style={{
            background: `radial-gradient(circle at center, 
              hsla(45, 85%, 60%, 0.2) 0%, 
              hsla(45, 85%, 65%, 0.1) 40%, 
              transparent 70%)`,
            filter: 'blur(80px)',
            animationDelay: '3s'
          }}
        />
        
        <div className="relative z-10 container">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="text-display mb-8 text-balance">
                Products & Services: Complete Agricultural Solutions
              </h1>
              <p className="text-body-large mb-8" style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: 'clamp(1.125rem, 1.087rem + 0.163vw, 1.25rem)',
                fontWeight: '400',
                lineHeight: '1.6',
                color: '#6b7280'
              }}>
                From field to market, we deliver solutions that drive success. Arthur Companies provides comprehensive agricultural services that support farmers, processors, and partners across the supply chain.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#on-farm" className="btn-primary">
                  On the Farm
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="#off-farm" className="btn-secondary">
                  Off the Farm
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
              className="flex justify-center lg:justify-end items-center"
            >
              <Image 
                src="/Aug 6, 2025, 02_25_19 PM.png"
                alt="Arthur Companies products and services"
                width={600}
                height={400}
                priority
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards - Light Section */}
      <section className="section-y-large">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Complete Agricultural Solutions</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Whether you're growing crops or processing them, we provide the expertise and services you need to succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 card-refined"
              style={{
                background: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border) / 0.2)',
                boxShadow: '0 20px 40px hsl(0 0% 0% / 0.05)'
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-title mb-4">For Growers</h3>
              <p className="text-body mb-6" style={{ color: 'hsl(var(--foreground))' }}>
                Complete agricultural solutions to help you grow more, manage risk, and maximize profitability. From precision agronomy to market access.
              </p>
              <Link href="#on-farm" className="btn-primary">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 card-refined"
              style={{
                background: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border) / 0.2)',
                boxShadow: '0 20px 40px hsl(0 0% 0% / 0.05)'
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mb-6 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-title mb-4">For Partners</h3>
              <p className="text-body mb-6" style={{ color: 'hsl(var(--foreground))' }}>
                Value-added processing, manufacturing, and trading services that connect quality crops to global markets and premium opportunities.
              </p>
              <Link href="#off-farm" className="btn-primary">
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* On the Farm Section - Dark Background */}
      <section 
        id="on-farm" 
        className="section-y-large relative" 
        style={{ 
          background: 'hsl(0 0% 4%)',
          color: 'hsl(var(--background))'
        }}
      >
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-20 animate-noise"
          style={{
            background: `radial-gradient(circle at 20% 50%, rgba(230, 184, 0, 0.03) 0%, transparent 30%), 
                        radial-gradient(circle at 80% 80%, rgba(230, 184, 0, 0.02) 0%, transparent 40%),
                        repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,255,255,0.01) 1px, rgba(255,255,255,0.01) 2px)`
          }}
        />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-headline mb-6" style={{ color: 'hsl(var(--background))' }}>On the Farm</h2>
            <p className="text-body-large max-w-3xl mx-auto" style={{ color: 'hsl(var(--background) / 0.9)' }}>
              Complete agricultural solutions for your operation. From precision agronomy to custom application, we provide the tools and expertise to maximize your yield potential and profitability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sprout,
                title: "Agronomy",
                description: "Local expertise and crop inputs to maximize your yield potential.",
                link: "/services/agronomy"
              },
              {
                icon: Beaker,
                title: "Soil Health",
                description: "Advanced soil testing and nutrient management programs.",
                link: "/services/soil-health"
              },
              {
                icon: Factory,
                title: "Precision Agriculture", 
                description: "Technology-driven farming solutions for optimal efficiency.",
                link: "/services/precision-agriculture"
              },
              {
                icon: Truck,
                title: "Crop Inputs",
                description: "Premium seeds, fertilizers, and crop protection products.",
                link: "/services/crop-inputs"
              }
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link 
                    href={service.link}
                    className="group block p-6 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'hsl(0 0% 8%)',
                      border: '1px solid hsl(var(--background) / 0.15)',
                      boxShadow: '0 4px 12px hsl(0 0% 0% / 0.3)'
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-title mb-3 group-hover:text-primary transition-colors" style={{ color: 'hsl(var(--background))' }}>
                      {service.title}
                    </h3>
                    <p className="text-body mb-4" style={{ color: 'hsl(var(--background) / 0.8)' }}>
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary text-small font-medium">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Off the Farm Section - Light */}
      <section id="off-farm" className="section-y-large">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-headline mb-6">Off the Farm</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Value-added processing and manufacturing. From grain processing to specialty ingredients, we add value at every step of the supply chain to deliver premium products to global markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Factory,
                title: "Premium Ingredients",
                description: "High-quality ingredients for food and feed manufacturers.",
                link: "/services/premium-ingredients"
              },
              {
                icon: Truck,
                title: "Pet Food Manufacturing",
                description: "Contract manufacturing for premium pet food brands.",
                link: "/services/pet-food-manufacturing"
              },
              {
                icon: Sprout,
                title: "Specialty Crops",
                description: "Identity-preserved grains and specialty crop programs.",
                link: "/services/specialty-crops"
              },
              {
                icon: Beaker,
                title: "Trading",
                description: "Global commodity trading and risk management.",
                link: "/services/trading"
              }
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link 
                    href={service.link}
                    className="group block p-6 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border) / 0.2)',
                      boxShadow: '0 4px 12px hsl(0 0% 0% / 0.05)'
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-title mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body mb-4" style={{ color: 'hsl(var(--foreground) / 0.7)' }}>
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary text-small font-medium">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section 
        className="section-y-large relative" 
        style={{ 
          background: 'hsl(0 0% 3%)',
          color: 'hsl(var(--background))'
        }}
      >        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-headline mb-6" style={{ color: 'hsl(var(--background))' }}>
                Ready to Partner with Arthur?
              </h2>
              <p className="text-body-large mb-12" style={{ color: 'hsl(var(--background) / 0.9)' }}>
                Whether you're looking to market grain, source inputs, or explore value-added opportunities, our team is ready to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-background text-foreground hover:bg-background/90 transition-all duration-200 text-sm font-medium"
                >
                  Contact Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/grain"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-background/20 text-background hover:bg-background/10 transition-all duration-200 text-sm font-medium"
                >
                  View Cash Bids
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}