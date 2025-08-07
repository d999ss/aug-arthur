"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, FlaskConical, Leaf, BarChart3, Microscope, ChevronRight, Users, Target } from 'lucide-react'

export default function SoilSciencePage() {
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
                <FlaskConical className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-display mb-8 text-balance">
                Soil Science Research
              </h1>
              <p className="text-body-large mb-12 max-w-2xl mx-auto">
                Comprehensive soil health studies and sustainable agriculture research. Understanding the foundation of agriculture through advanced soil science and innovative research methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary">
                  Explore Research Opportunities
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

      {/* Soil Research Focus */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Soil Research Programs</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our soil science research focuses on understanding and improving soil health, nutrient cycling, and sustainable farming practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Microscope,
                title: "Microbiome Analysis",
                description: "Advanced study of soil microbial communities and their crucial impact on plant health."
              },
              {
                icon: FlaskConical,
                title: "Nutrient Cycling",
                description: "Research on nutrient availability, uptake, and cycling in sustainable agricultural systems."
              },
              {
                icon: Leaf,
                title: "Carbon Sequestration",
                description: "Studies on soil carbon storage and climate change mitigation strategies."
              },
              {
                icon: BarChart3,
                title: "Health Monitoring",
                description: "Development of comprehensive soil health indicators and monitoring systems."
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

      {/* Active Research Projects */}
      <section className="section-y">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Active Research Projects</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Comprehensive soil science initiatives that are advancing our understanding of soil health and sustainable agriculture practices.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                title: "Soil Microbiome Initiative",
                description: "Comprehensive analysis of soil microbial communities to understand their role in plant nutrition, disease suppression, and overall soil health.",
                features: [
                  "Metagenomic sequencing of soil samples",
                  "Functional analysis of microbial communities", 
                  "Beneficial microbe isolation and characterization",
                  "Microbiome-plant interaction studies"
                ]
              },
              {
                title: "Sustainable Nutrient Management",
                description: "Research on optimizing nutrient use efficiency and developing sustainable fertilizer strategies for long-term soil health and productivity.",
                features: [
                  "Precision nutrient application research",
                  "Organic matter decomposition studies",
                  "Nutrient loss mitigation strategies",
                  "Biological nitrogen fixation enhancement"
                ]
              },
              {
                title: "Climate-Smart Agriculture",
                description: "Developing soil management practices that enhance carbon sequestration and improve resilience to climate change impacts.",
                features: [
                  "Cover crop impact assessment",
                  "No-till system optimization",
                  "Soil carbon measurement protocols",
                  "Water retention improvement strategies"
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

      {/* Research Impact */}
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
              Our soil science research is creating measurable improvements in soil health and agricultural sustainability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                metric: "30%",
                label: "Soil Health Improvement",
                description: "Average enhancement in soil quality metrics"
              },
              {
                icon: Users,
                metric: "150+",
                label: "Research Participants",
                description: "Farmers collaborating in soil health studies"
              },
              {
                icon: Target,
                metric: "25,000+",
                label: "Soil Samples Analyzed",
                description: "Comprehensive soil analyses conducted annually"
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
              <h2 className="text-headline mb-6 text-background">Advance Soil Science Research</h2>
              <p className="text-body-large mb-8 text-background/80">
                Join our soil science research initiatives to develop sustainable agricultural practices that improve soil health and farming productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground text-body-medium font-medium rounded-lg hover:bg-background/90 transition-colors"
                >
                  Research Collaboration
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
