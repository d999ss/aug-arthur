"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users, Building2, Sprout, Factory, Beaker, Truck, ChevronRight } from 'lucide-react'

export default function ProductsServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-large">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-hero mb-8 text-balance">
                Products & Services
              </h1>
              <p className="text-body mb-6 max-w-2xl mx-auto">
                From field to market, we deliver solutions that drive success.
              </p>
              <p className="text-body mb-12 max-w-3xl mx-auto text-muted-foreground">
                Arthur Companies provides comprehensive agricultural services that support farmers, processors, and partners across the supply chain.
              </p>
              
              {/* Quick Navigation */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
                <a href="#on-farm" className="btn btn-primary">
                  <Users className="mr-2 h-4 w-4" />
                  On the Farm
                </a>
                <a href="#off-farm" className="btn btn-secondary">
                  <Building2 className="mr-2 h-4 w-4" />
                  Off the Farm
                </a>
              </div>
              
              {/* Value Proposition */}
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="p-6 card">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-headline mb-3">For Growers</h3>
                  <p className="text-body text-muted">
                    Complete agricultural solutions to help you grow more, manage risk, and maximize profitability.
                  </p>
                </div>
                <div className="p-6 card">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-headline mb-3">For Partners</h3>
                  <p className="text-body text-muted">
                    Value-added processing, manufacturing, and trading services that connect quality crops to global markets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* On the Farm Section */}
      <section id="on-farm" className="section-large bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-headline mb-6">On the Farm</h2>
            <p className="text-body max-w-3xl mx-auto">
              Complete agricultural solutions for your operation. From precision agronomy to custom application, we provide the tools and expertise to maximize your yield potential and profitability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-refined">
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
                    className="group block p-6 card-refined hover-lift"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-title mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body mb-4 text-muted-foreground">
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

      {/* Off the Farm Section */}
      <section id="off-farm" className="section-large">
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
            <p className="text-body max-w-3xl mx-auto">
              Value-added processing and manufacturing. From grain processing to specialty ingredients, we add value at every step of the supply chain to deliver premium products to global markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-refined">
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
                    className="group block p-6 card-refined hover-lift"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-title mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body mb-4 text-muted-foreground">
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

      {/* CTA Section */}
      <section className="section-large bg-foreground text-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-headline mb-6 text-background">
                Ready to Partner with Arthur?
              </h2>
              <p className="text-body mb-12 opacity-90">
                Whether you're looking to market grain, source inputs, or explore value-added opportunities, our team is ready to help.
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