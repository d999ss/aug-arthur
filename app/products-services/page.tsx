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
              <h1 className="text-hero mb-lg text-balance">
                Products & Services: Complete Agricultural Solutions
              </h1>
              <p className="text-body mb-lg" style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: 'clamp(1.125rem, 1.087rem + 0.163vw, 1.25rem)',
                fontWeight: '400',
                lineHeight: '1.6',
                color: '#171717'
              }}>
                From field to market, we deliver solutions that drive success. Arthur Companies provides comprehensive agricultural services that support farmers, processors, and partners across the supply chain.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#on-farm" className="btn btn-primary">
                  On the Farm
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="#off-farm" className="btn btn-secondary">
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
      <section className="section relative">
        {/* Lighting effect at section transition */}
        <div 
          className="absolute -top-32 left-1/2 w-[1000px] h-[400px] -translate-x-1/2 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, 
              hsla(45, 85%, 55%, 0.08) 0%, 
              hsla(45, 85%, 60%, 0.04) 40%, 
              transparent 70%)`,
            filter: 'blur(60px)',
          }}
        />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-md">Complete Agricultural Solutions</h2>
            <p className="text-body max-w-3xl mx-auto">
              Whether you're growing crops or processing them, we provide the expertise and services you need to succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 card"
              style={{
                background: 'hsl(var(--color-card))',
                border: '1px solid hsl(var(--color-border) / 0.2)',
                boxShadow: '0 20px 40px hsl(0 0% 0% / 0.05)'
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-headline mb-md">For Growers</h3>
              <p className="text-body mb-lg" style={{ color: 'hsl(var(--color-foreground))' }}>
                Complete agricultural solutions to help you grow more, manage risk, and maximize profitability. From precision agronomy to market access.
              </p>
              <Link href="#on-farm" className="btn btn-primary">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 card"
              style={{
                background: 'hsl(var(--color-card))',
                border: '1px solid hsl(var(--color-border) / 0.2)',
                boxShadow: '0 20px 40px hsl(0 0% 0% / 0.05)'
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mb-6 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-headline mb-md">For Partners</h3>
              <p className="text-body mb-lg" style={{ color: 'hsl(var(--color-foreground))' }}>
                Value-added processing, manufacturing, and trading services that connect quality crops to global markets and premium opportunities.
              </p>
              <Link href="#off-farm" className="btn btn-primary">
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
        className="section relative" 
        style={{ 
          background: 'hsl(0 0% 4%)',
          color: 'hsl(var(--color-background))'
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
            <h2 className="text-headline mb-md" style={{ color: 'hsl(var(--color-background))' }}>On the Farm</h2>
            <p className="text-body max-w-3xl mx-auto" style={{ color: 'hsl(var(--color-background) / 0.9)' }}>
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
                      border: '1px solid hsl(var(--color-background) / 0.15)',
                      boxShadow: '0 4px 12px hsl(0 0% 0% / 0.3)'
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-headline mb-3 group-hover:text-primary transition-colors" style={{ color: 'hsl(var(--color-background))' }}>
                      {service.title}
                    </h3>
                    <p className="text-body mb-4" style={{ color: 'hsl(var(--color-background) / 0.8)' }}>
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
      <section id="off-farm" className="section relative">
        {/* Lighting effect */}
        <div 
          className="absolute -top-32 left-1/2 w-[1000px] h-[400px] -translate-x-1/2 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, 
              hsla(45, 85%, 55%, 0.08) 0%, 
              hsla(45, 85%, 60%, 0.04) 40%, 
              transparent 70%)`,
            filter: 'blur(60px)',
          }}
        />
        
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
            <h2 className="text-headline mb-md">Off the Farm</h2>
            <p className="text-body max-w-3xl mx-auto">
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
                      background: 'hsl(var(--color-card))',
                      border: '1px solid hsl(var(--color-border) / 0.2)',
                      boxShadow: '0 4px 12px hsl(0 0% 0% / 0.05)'
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-headline mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body mb-4" style={{ color: 'hsl(var(--color-foreground) / 0.7)' }}>
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
        className="section relative" 
        style={{ 
          background: 'hsl(0 0% 3%)',
          color: 'hsl(var(--color-background))'
        }}
      >
        {/* Sophisticated noise overlay */}
        <div 
          className="absolute inset-0 opacity-15 animate-noise"
          style={{
            background: `radial-gradient(circle at 30% 20%, rgba(230, 184, 0, 0.04) 0%, transparent 40%), 
                        radial-gradient(circle at 70% 90%, rgba(230, 184, 0, 0.03) 0%, transparent 50%),
                        repeating-linear-gradient(30deg, transparent, transparent 1px, rgba(255,255,255,0.008) 1px, rgba(255,255,255,0.008) 2px)`
          }}
        />
        
        {/* Dual lighting effects */}
        <div 
          className="absolute top-20 left-0 w-[500px] h-[500px] -translate-x-1/2 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, 
              hsla(45, 85%, 55%, 0.1) 0%, 
              hsla(45, 85%, 65%, 0.05) 40%, 
              transparent 70%)`,
            filter: 'blur(100px)',
          }}
        />
        <div 
          className="absolute bottom-20 right-0 w-[500px] h-[500px] translate-x-1/2 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, 
              hsla(45, 85%, 55%, 0.1) 0%, 
              hsla(45, 85%, 65%, 0.05) 40%, 
              transparent 70%)`,
            filter: 'blur(100px)',
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-headline mb-md" style={{ color: 'hsl(var(--color-background))' }}>
                Ready to Partner with Arthur?
              </h2>
              <p className="text-body mb-xl" style={{ color: 'hsl(var(--color-background) / 0.9)' }}>
                Whether you're looking to market grain, source inputs, or explore value-added opportunities, our team is ready to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="/contact"
                  className="btn btn-primary"
                  style={{ backgroundColor: 'hsl(var(--color-background))', color: 'hsl(var(--color-foreground))' }}
                >
                  Contact Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/grain"
                  className="btn btn-secondary"
                  style={{ backgroundColor: 'transparent', color: 'hsl(var(--color-background))', borderColor: 'hsl(var(--color-background) / 0.3)' }}
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