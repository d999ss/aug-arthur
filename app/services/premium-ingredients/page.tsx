"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Factory, Award, BarChart3, Wheat, ChevronRight } from 'lucide-react'

export default function PremiumIngredientsPage() {
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
                <Factory className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-display mb-8 text-balance">
                Premium Ingredients
              </h1>
              <p className="text-body-large mb-12 max-w-2xl mx-auto">
                Quality ingredients for food and feed. We process and supply premium ingredients to food and feed manufacturers worldwide, maintaining the highest standards of quality and safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Request Samples
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Lines Overview */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Premium ingredient portfolio</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              From specialized grain fractions to high-quality protein ingredients, 
              we deliver premium products that meet the most demanding specifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-refined">
            {[
              {
                icon: Wheat,
                title: "Grain Fractions",
                description: "Specialized grain fractions and refined products for food manufacturing applications."
              },
              {
                icon: Award,
                title: "Protein Ingredients",
                description: "High-quality protein ingredients for food and feed applications."
              },
              {
                icon: Factory,
                title: "Specialty Flours",
                description: "Custom milled specialty flours for bakery and food service industries."
              },
              {
                icon: BarChart3,
                title: "Feed Ingredients",
                description: "Nutritious feed ingredients for livestock and pet food applications."
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

      {/* Detailed Product Lines */}
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
              <h2 className="text-headline mb-6">Our ingredient solutions</h2>
              <div className="text-serif text-body-large text-muted-foreground italic">
                "Quality ingredients are the foundation of exceptional products."
              </div>
            </motion.div>
            
            <div className="space-y-8">
              {[
                {
                  title: "Food Grade Ingredients",
                  description: "Premium food-grade ingredients for human consumption, meeting strict food safety and quality standards for manufacturers of baked goods, snacks, and processed foods.",
                  features: [
                    "Specialized grain fractions and refined products",
                    "Food-grade wheat flour and specialty grains", 
                    "Organic grain ingredients and ancient varieties",
                    "Complete traceability and documentation"
                  ]
                },
                {
                  title: "High-Quality Protein Ingredients",
                  description: "Premium protein ingredients designed for both food and feed applications, delivering consistent quality and nutritional performance.",
                  features: [
                    "Plant-based protein concentrates and isolates",
                    "Soybean meal and specialty protein blends",
                    "Non-GMO and organic protein options",
                    "Custom formulations for specific applications"
                  ]
                },
                {
                  title: "Custom Milled Specialty Flours", 
                  description: "Precision-milled specialty flours tailored to the specific requirements of bakery and food service industries.",
                  features: [
                    "Custom milling specifications",
                    "Consistent quality and performance",
                    "Food safety certified facilities",
                    "Flexible packaging and delivery options"
                  ]
                },
                {
                  title: "Premium Feed Ingredients",
                  description: "Nutritious feed ingredients for livestock, poultry, and pet food applications, formulated to meet specific nutritional requirements.",
                  features: [
                    "High-protein feed ingredients",
                    "Nutritionally balanced formulations",
                    "Quality testing and certification",
                    "Reliable supply and delivery"
                  ]
                }
              ].map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 card-refined hover-lift"
                >
                  <h3 className="text-title mb-4">{product.title}</h3>
                  <p className="text-body mb-6 text-muted-foreground">
                    {product.description}
                  </p>
                  <ul className="text-body space-y-2">
                    {product.features.map((feature, featureIndex) => (
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
                Partner with Arthur for premium ingredients
              </h2>
              <p className="text-body-large mb-12 opacity-90">
                Discover how our premium ingredients can enhance your products 
                and supply chain reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-background text-foreground hover:bg-background/90 transition-all duration-200 text-sm font-medium"
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-background/20 text-background hover:bg-background/10 transition-all duration-200 text-sm font-medium"
                >
                  Request Samples
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}