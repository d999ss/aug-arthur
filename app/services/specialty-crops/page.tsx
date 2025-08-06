"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sprout, Award, BarChart3, Shield, ChevronRight } from 'lucide-react'

export default function SpecialtyCropsPage() {
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
                <Sprout className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-display mb-8 text-balance">
                Specialty Crops
              </h1>
              <p className="text-body-large mb-12 max-w-2xl mx-auto">
                Identity-preserved and premium programs. Specialized crop programs that deliver premium value through identity preservation, traceability, and quality specifications for discerning end users.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary">
                  Explore Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Premium specialty crop programs</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Arthur Companies connects growers with premium markets through identity-preserved 
              and specialty crop programs. Earn higher returns by growing crops that meet 
              specific end-user requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-refined">
            {[
              {
                icon: Award,
                title: "Identity Preserved",
                description: "Identity preserved corn and soybean programs with full traceability from field to delivery."
              },
              {
                icon: Shield,
                title: "Food Grade",
                description: "Food grade soybeans meeting strict quality specifications for human consumption."
              },
              {
                icon: BarChart3,
                title: "Sustainable Barley",
                description: "Sustainable barley programs for brewing and malting industries."
              },
              {
                icon: Sprout,
                title: "Contract Production",
                description: "Custom contract production programs for specific market requirements."
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

      {/* Crop Programs */}
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
              <h2 className="text-headline mb-6">Available specialty programs</h2>
              <div className="text-serif text-body-large text-muted-foreground italic">
                "Quality is remembered long after price is forgotten."
              </div>
            </motion.div>
            
            <div className="space-y-8">
              {[
                {
                  title: "Identity-Preserved Corn",
                  description: "Grow specific corn varieties for food manufacturers requiring particular traits, colors, or characteristics. Our IP corn programs offer premium pricing for qualified production.",
                  sections: [
                    {
                      title: "Program Types",
                      items: [
                        "White food-grade corn",
                        "High-oil corn varieties",
                        "Waxy corn for starch",
                        "Non-GMO corn programs"
                      ]
                    },
                    {
                      title: "Benefits",
                      items: [
                        "Premium pricing above #2 yellow",
                        "Contracted production agreements",
                        "Seed and input support",
                        "Harvest logistics coordination"
                      ]
                    }
                  ]
                },
                {
                  title: "Food-Grade Soybeans",
                  description: "Specialty soybean programs for food manufacturers producing tofu, soymilk, and other soy-based products requiring specific protein and quality characteristics.",
                  features: [
                    "High-protein food-grade varieties",
                    "Large hilum soybeans for natto",
                    "Clear hilum varieties for tofu",
                    "Organic soybean programs"
                  ]
                },
                {
                  title: "Sustainable Barley Programs",
                  description: "Partner with leading brewers and maltsters through our sustainable barley programs, featuring environmentally responsible production practices and premium quality standards.",
                  features: [
                    "Malting barley for craft brewers",
                    "Sustainable production protocols",
                    "Quality testing and certification",
                    "Direct brewery partnerships"
                  ]
                },
                {
                  title: "Organic Certification Programs",
                  description: "Complete support for organic crop production, from certification assistance through marketing, connecting you with premium organic markets.",
                  features: [
                    "Organic certification guidance",
                    "Transition period support",
                    "Organic input sourcing",
                    "Premium organic marketing"
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
                Unlock premium crop values
              </h2>
              <p className="text-body-large mb-12 opacity-90">
                Discover how specialty crop programs can increase your farm's 
                profitability and market opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-background text-foreground hover:bg-background/90 transition-all duration-200 text-sm font-medium"
                >
                  Join a Program
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-background/20 text-background hover:bg-background/10 transition-all duration-200 text-sm font-medium"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}