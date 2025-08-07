"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Globe, Satellite, MapPin, BarChart3, ChevronRight } from 'lucide-react'

export default function PrecisionAgriculturePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mx-auto mb-8 flex items-center justify-center">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-hero mb-lg text-balance">
                Precision Agriculture
              </h1>
              <p className="text-body mb-xl max-w-2xl mx-auto">
                Technology-driven farming solutions. Harness the power of precision agriculture technology to optimize inputs, maximize yields, and improve profitability across every acre.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn btn-primary">
                  Explore Precision Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/locations" className="btn btn-secondary">
                  Find Local Expert
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="section bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-md">Advanced precision technology</h2>
            <p className="text-body max-w-3xl mx-auto">
              Harness the power of GPS, satellite imagery, and data analytics to optimize 
              every aspect of your farming operation with precision agriculture technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Satellite,
                title: "GPS Guidance",
                description: "GPS-guided equipment for precise planting, application, and harvesting operations."
              },
              {
                icon: MapPin,
                title: "Variable Rate",
                description: "Variable rate application technology to optimize seed, fertilizer, and chemical inputs."
              },
              {
                icon: Globe,
                title: "Remote Sensing",
                description: "Satellite and drone imagery for crop monitoring and field mapping."
              },
              {
                icon: BarChart3,
                title: "Data Analytics",
                description: "Advanced data analytics to turn field data into actionable insights."
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
                  className="p-6 card"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-headline mb-3">{service.title}</h3>
                  <p className="text-body text-muted">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-headline mb-md">Precision agriculture services</h2>
              <div className="text-serif text-body text-muted">
                "Technology that transforms farming from art to science."
              </div>
            </motion.div>
            
            <div className="space-y-8">
              {[
                {
                  title: "GPS-Guided Equipment",
                  description: "Maximize efficiency and reduce input costs with GPS-guided tractors, sprayers, and application equipment. Our precision guidance systems ensure accurate field operations with minimal overlap.",
                  sections: [
                    {
                      title: "Equipment Integration",
                      items: [
                        "Tractor auto-steer systems",
                        "Sprayer boom control",
                        "Planter section control",
                        "Combine guidance systems"
                      ]
                    },
                    {
                      title: "Benefits",
                      items: [
                        "Reduced operator fatigue",
                        "Minimized input waste",
                        "Improved field efficiency",
                        "Consistent application quality"
                      ]
                    }
                  ]
                },
                {
                  title: "Variable Rate Technology",
                  description: "Apply inputs precisely where needed with variable rate technology. Our systems adjust seed, fertilizer, and chemical rates based on soil conditions and yield potential.",
                  features: [
                    "Variable rate seeding for optimal plant populations",
                    "Precision fertilizer application based on soil tests",
                    "Targeted chemical applications for pest management",
                    "Custom prescription mapping services"
                  ]
                },
                {
                  title: "Data Management & Analytics",
                  description: "Turn your field data into actionable insights with our comprehensive data management and analytics platform. Track performance, identify trends, and make data-driven decisions.",
                  features: [
                    "Yield data collection and analysis",
                    "Field performance benchmarking",
                    "Multi-year trend analysis",
                    "ROI calculations for precision investments"
                  ]
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 card"
                >
                  <h3 className="text-headline mb-md">{service.title}</h3>
                  <p className="text-body mb-md text-muted">
                    {service.description}
                  </p>
                  {service.sections ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 className="text-body-medium font-semibold mb-2">{section.title}</h4>
                          <ul className="text-body space-y-2">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="text-body space-y-2">
                      {service.features?.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
                Ready to farm with precision?
              </h2>
              <p className="text-body mb-xl" style={{ color: 'hsl(var(--color-background) / 0.9)' }}>
                Discover how precision agriculture technology can improve your farm's 
                efficiency and profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="/contact"
                  className="btn btn-primary"
                  style={{ backgroundColor: 'hsl(var(--color-background))', color: 'hsl(var(--color-foreground))' }}
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/locations"
                  className="btn btn-secondary"
                  style={{ backgroundColor: 'transparent', color: 'hsl(var(--color-background))', borderColor: 'hsl(var(--color-background) / 0.3)' }}
                >
                  Find Local Expert
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
