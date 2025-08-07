"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Package, Shield, Sprout, BarChart3, ChevronRight, Users, MapPin } from 'lucide-react'

export default function CropInputsPage() {
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
                <Package className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-display mb-8 text-balance">
                Premium Crop Inputs
              </h1>
              <p className="text-body-large mb-12 max-w-2xl mx-auto">
                High-quality seeds, fertilizers, and crop protection products from trusted brands. We supply the inputs you need to maximize yield potential and protect your investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary">
                  Get Product Recommendations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/services/agronomy" className="btn-secondary">
                  Consult Our Agronomists
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Product Categories</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Comprehensive crop input solutions backed by expert recommendations and local support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sprout,
                title: "Premium Seeds",
                description: "High-performing corn, soybean, wheat, and specialty crop varieties selected for your local growing conditions.",
                features: ["GMO and non-GMO options", "Local variety testing", "Trait technology", "Seed treatment"]
              },
              {
                icon: BarChart3,
                title: "Fertilizers & Nutrients",
                description: "Complete fertilizer programs customized to your soil test results and yield goals.",
                features: ["Liquid and dry fertilizers", "Micronutrient packages", "Precision application", "Custom blends"]
              },
              {
                icon: Shield,
                title: "Crop Protection",
                description: "Effective herbicides, fungicides, and insecticides to protect your crop investment.",
                features: ["Selective herbicides", "Disease management", "Insect control", "Application timing"]
              }
            ].map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 card-refined hover-lift"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-6 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-title mb-4">{category.title}</h3>
                  <p className="text-body mb-6 text-muted-foreground">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.features.map((feature) => (
                      <li key={feature} className="text-small flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Arthur Inputs */}
      <section className="section-y">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-headline mb-8">Why Choose Arthur Crop Inputs?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-body-medium font-semibold mb-2">Expert Recommendations</h3>
                    <p className="text-body text-muted-foreground">
                      Our certified crop advisors provide personalized product recommendations based on your specific field conditions and goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-body-medium font-semibold mb-2">Local Knowledge</h3>
                    <p className="text-body text-muted-foreground">
                      Products tested and proven in Northern Plains growing conditions with local delivery and support.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-body-medium font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-body text-muted-foreground">
                      Premium products from trusted manufacturers with proper storage and handling to ensure maximum effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 card-refined"
            >
              <h3 className="text-title mb-6">Get Custom Recommendations</h3>
              <p className="text-body mb-8 text-muted-foreground">
                Let our agronomists create a custom input program tailored to your operation's specific needs and budget.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <span className="text-body-medium">Soil analysis review</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <span className="text-body-medium">Yield goal planning</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <span className="text-body-medium">Product recommendations</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-body-medium">Application timing</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary w-full">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-y bg-foreground text-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-headline mb-6 text-background">Ready to Optimize Your Input Program?</h2>
              <p className="text-body-large mb-8 text-background/80">
                Connect with our crop input specialists to develop a customized program for your operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground text-body-medium font-medium rounded-lg hover:bg-background/90 transition-colors"
                >
                  Contact Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/services/agronomy"
                  className="inline-flex items-center justify-center px-6 py-3 border border-background/20 text-background text-body-medium font-medium rounded-lg hover:bg-background/10 transition-colors"
                >
                  Learn About Agronomy Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}