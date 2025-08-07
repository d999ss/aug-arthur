"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Leaf, Recycle, Wind, Lightbulb, ChevronRight, BarChart3, Users } from 'lucide-react'

export default function SustainabilityResearchPage() {
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
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-display mb-8 text-balance">
                Sustainability Research
              </h1>
              <p className="text-body-large mb-12 max-w-2xl mx-auto">
                Environmental stewardship and sustainable farming practice development. Building the future of regenerative agriculture through science-based research and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary">
                  Join Sustainability Initiative
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/research-development" className="btn-secondary">
                  Back to R&D Hub
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Sustainability Focus Areas</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our sustainability research develops environmentally responsible farming practices that protect natural resources while maintaining productivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "Carbon Sequestration",
                description: "Research on soil carbon storage and climate change mitigation strategies for agricultural systems."
              },
              {
                icon: Recycle,
                title: "Resource Efficiency",
                description: "Optimization of water, nutrient, and energy use to maximize efficiency and minimize environmental impact."
              },
              {
                icon: Wind,
                title: "Emission Reduction",
                description: "Strategies to reduce greenhouse gas emissions from farming operations through innovative practices."
              },
              {
                icon: Lightbulb,
                title: "Regenerative Practices",
                description: "Development of regenerative agriculture techniques that improve soil health and ecosystem resilience."
              }
            ].map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 card-refined hover-lift"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-6 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-body-medium font-semibold mb-3">{area.title}</h3>
                  <p className="text-body text-muted-foreground">
                    {area.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Programs */}
      <section className="section-y">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Active Research Programs</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Comprehensive sustainability projects that are shaping the future of environmentally responsible agriculture.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                title: "Climate-Smart Agriculture Initiative",
                description: "Comprehensive research program developing farming practices that adapt to climate change while reducing environmental impact.",
                features: [
                  "Carbon footprint assessment and reduction",
                  "Climate adaptation strategies", 
                  "Resilient cropping systems",
                  "Weather risk management"
                ]
              },
              {
                title: "Water Conservation Research",
                description: "Advanced research on water-efficient farming practices and technologies to optimize water use and protect water resources.",
                features: [
                  "Precision irrigation systems",
                  "Drought-resistant crop varieties",
                  "Water quality monitoring",
                  "Watershed management practices"
                ]
              },
              {
                title: "Biodiversity Enhancement Program",
                description: "Research on promoting biodiversity in agricultural landscapes through habitat creation and sustainable farming practices.",
                features: [
                  "Pollinator habitat development",
                  "Beneficial insect conservation",
                  "Crop rotation optimization",
                  "Integrated pest management"
                ]
              }
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 card-refined"
              >
                <h3 className="text-title mb-4">{program.title}</h3>
                <p className="text-body mb-6 text-muted-foreground">
                  {program.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-body">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Research Impact</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our sustainability research is making measurable improvements to environmental stewardship across agricultural operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                metric: "25%",
                label: "Carbon Footprint Reduction",
                description: "Average reduction achieved through climate-smart practices"
              },
              {
                icon: Users,
                metric: "500+",
                label: "Farmers Participating",
                description: "Growers actively implementing sustainable practices"
              },
              {
                icon: Leaf,
                metric: "10,000+",
                label: "Acres Under Study",
                description: "Research plots testing regenerative agriculture methods"
              }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 card-refined"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-6 mx-auto flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-display-small text-primary mb-2">{stat.metric}</div>
                  <h3 className="text-body-medium font-semibold mb-2">{stat.label}</h3>
                  <p className="text-small text-muted-foreground">{stat.description}</p>
                </motion.div>
              )
            })}
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
              <h2 className="text-headline mb-6 text-background">Lead Sustainable Agriculture Research</h2>
              <p className="text-body-large mb-8 text-background/80">
                Collaborate with our sustainability team to develop environmentally responsible farming solutions that benefit both your operation and the planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground text-body-medium font-medium rounded-lg hover:bg-background/90 transition-colors"
                >
                  Join Research Partnership
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/research-development"
                  className="inline-flex items-center justify-center px-6 py-3 border border-background/20 text-background text-body-medium font-medium rounded-lg hover:bg-background/10 transition-colors"
                >
                  Explore Other Research
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}