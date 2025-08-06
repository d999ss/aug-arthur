"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Beaker, TrendingUp, Leaf, BarChart3, ChevronRight } from 'lucide-react'

export default function SoilHealthPage() {
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
                <Beaker className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-display mb-8 text-balance">
                Soil Health & Nutrition
              </h1>
              <p className="text-body-large mb-12 max-w-2xl mx-auto">
                Building healthy soils for sustainable productivity. Healthy soils are the foundation of productive agriculture. Our comprehensive soil health programs help you build and maintain soil fertility for long-term success.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary">
                  Start Soil Testing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/locations" className="btn-secondary">
                  Find Local Office
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Comprehensive soil management</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Healthy soil is the foundation of productive agriculture. Our soil health 
              programs combine advanced testing, biological monitoring, and precision 
              nutrition to optimize your soil's potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-refined">
            {[
              {
                icon: Beaker,
                title: "Soil Testing",
                description: "Advanced soil testing and analysis to understand your soil's unique characteristics and needs."
              },
              {
                icon: TrendingUp,
                title: "Nutrient Management",
                description: "Precision nutrient management plans that optimize fertilizer efficiency and crop uptake."
              },
              {
                icon: Leaf,
                title: "Organic Matter",
                description: "Strategies to build and maintain soil organic matter for improved water retention and nutrient cycling."
              },
              {
                icon: BarChart3,
                title: "Cover Crops",
                description: "Cover crop recommendations and management to enhance soil health and reduce erosion."
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
                  className="p-6 card-refined hover-lift"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-title mb-3">{service.title}</h3>
                  <p className="text-body text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="section-y-large">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-headline mb-6">Our soil health programs</h2>
              <div className="text-serif text-body-large text-muted-foreground italic">
                "The health of soil, plant, animal and man is one and indivisible."
              </div>
            </motion.div>
            
            <div className="space-y-8">
              {[
                {
                  title: "Comprehensive Soil Analysis",
                  description: "Our advanced soil testing goes beyond basic nutrient levels to provide a complete picture of your soil's health and productivity potential.",
                  sections: [
                    {
                      title: "Chemical Analysis",
                      items: [
                        "pH and buffer pH",
                        "Macro and micronutrients",
                        "Cation exchange capacity",
                        "Organic matter content"
                      ]
                    },
                    {
                      title: "Physical Properties",
                      items: [
                        "Soil texture analysis",
                        "Bulk density measurement",
                        "Water infiltration rates",
                        "Compaction assessment"
                      ]
                    }
                  ]
                },
                {
                  title: "Precision Nutrition Management",
                  description: "Optimize your fertilizer investment with precision nutrition programs tailored to your specific soil conditions and crop goals.",
                  features: [
                    "Variable rate fertilizer mapping",
                    "Timing optimization for maximum uptake",
                    "Micronutrient deficiency correction",
                    "Organic matter enhancement strategies"
                  ]
                },
                {
                  title: "Soil Biology Enhancement",
                  description: "Improve soil biological activity to enhance nutrient cycling, water retention, and overall soil health through targeted biological programs.",
                  features: [
                    "Microbial diversity assessment",
                    "Biological inoculant recommendations",
                    "Cover crop integration strategies",
                    "Organic amendment programs"
                  ]
                }
              ].map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 card-refined hover-lift"
                >
                  <h3 className="text-title mb-4">{program.title}</h3>
                  <p className="text-body mb-6 text-muted-foreground">
                    {program.description}
                  </p>
                  {program.sections ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {program.sections.map((section, sectionIndex) => (
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
                      {program.features?.map((feature, featureIndex) => (
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
                Invest in your soil's future
              </h2>
              <p className="text-body-large mb-12 opacity-90">
                Start building healthier, more productive soils with our comprehensive 
                soil health programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-background text-foreground hover:bg-background/90 transition-all duration-200 text-sm font-medium"
                >
                  Schedule Soil Testing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/locations"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-background/20 text-background hover:bg-background/10 transition-all duration-200 text-sm font-medium"
                >
                  Find Local Office
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
