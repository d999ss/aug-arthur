"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sprout, Users, BarChart3, MapPin, ChevronRight } from 'lucide-react'

export default function AgronomyPage() {
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
                <Sprout className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-hero mb-lg text-balance">
                Agronomy Excellence
              </h1>
              <p className="text-body mb-xl max-w-2xl mx-auto">
                Local expertise, proven results. Our certified crop advisors combine local knowledge with cutting-edge technology to help you make informed decisions that maximize productivity and profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn btn-primary">
                  Contact Our Agronomists
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/locations" className="btn btn-secondary">
                  Find Your Local Expert
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-md">Comprehensive agronomy solutions</h2>
            <p className="text-body max-w-3xl mx-auto">
              Our certified agronomists combine decades of local experience with cutting-edge 
              technology to help you make informed decisions that maximize your farm's 
              productivity and profitability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Crop Planning",
                description: "Strategic crop planning and rotation recommendations based on your specific fields and goals."
              },
              {
                icon: BarChart3,
                title: "Soil Testing", 
                description: "Comprehensive soil analysis and nutrient recommendations for optimal crop performance."
              },
              {
                icon: Sprout,
                title: "Pest Management",
                description: "Integrated pest management solutions to protect your crops while minimizing environmental impact."
              },
              {
                icon: MapPin,
                title: "Yield Monitoring",
                description: "Season-long crop monitoring and yield optimization strategies."
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

      {/* Detailed Services */}
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
              <h2 className="text-headline mb-md">Our agronomy services</h2>
              <div className="text-serif text-body text-muted">
                "Precision in every decision, excellence in every field."
              </div>
            </motion.div>
            
            <div className="space-y-8">
              {[
                {
                  title: "Crop Planning & Management",
                  description: "Work with our certified agronomists to develop comprehensive crop plans tailored to your operation. We consider soil conditions, weather patterns, market outlook, and your specific goals to create strategies that maximize both yield and profitability.",
                  features: [
                    "Crop rotation planning",
                    "Planting date optimization", 
                    "Population and spacing recommendations",
                    "Harvest timing guidance"
                  ]
                },
                {
                  title: "Nutrient Management",
                  description: "Optimize your fertilizer program with soil testing, tissue analysis, and precision application recommendations. Our agronomists help you apply the right nutrients at the right time and rate for maximum efficiency.",
                  features: [
                    "Soil sampling and analysis",
                    "Fertilizer recommendations",
                    "Variable rate application mapping",
                    "Micronutrient programs"
                  ]
                },
                {
                  title: "Pest & Disease Management", 
                  description: "Protect your crops with integrated pest management strategies. Our team provides regular scouting, threshold monitoring, and treatment recommendations to minimize losses while optimizing input costs.",
                  features: [
                    "Regular field scouting",
                    "Pest identification and monitoring",
                    "Treatment threshold recommendations", 
                    "Resistance management strategies"
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
                  <ul className="text-body space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
                Ready to maximize your yield?
              </h2>
              <p className="text-body mb-xl" style={{ color: 'hsl(var(--color-background) / 0.9)' }}>
                Connect with our agronomy team to develop a customized crop management 
                plan for your operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="/contact"
                  className="btn btn-primary"
                  style={{ backgroundColor: 'hsl(var(--color-background))', color: 'hsl(var(--color-foreground))' }}
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/locations"
                  className="btn btn-secondary"
                  style={{ backgroundColor: 'transparent', color: 'hsl(var(--color-background))', borderColor: 'hsl(var(--color-background) / 0.3)' }}
                >
                  Find Your Local Agronomist
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
