"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Dna, Microscope, Sprout, BarChart3, ChevronRight, Users, Award } from 'lucide-react'

export default function CropGeneticsPage() {
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
                <Dna className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-display mb-8 text-balance">
                Crop Genetics & Breeding
              </h1>
              <p className="text-body-large mb-12 max-w-2xl mx-auto">
                Advanced research in plant genetics, breeding, and biotechnology to develop superior crop varieties that meet the challenges of modern agriculture.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary">
                  Partner With Our Research Team
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
            <h2 className="text-headline mb-6">Genetics Research Areas</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our crop genetics research focuses on developing varieties with improved yield, disease resistance, and environmental adaptation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Dna,
                title: "Molecular Breeding",
                description: "DNA marker-assisted selection to accelerate variety development and improve breeding precision."
              },
              {
                icon: Microscope,
                title: "Genomic Selection",
                description: "Advanced genomic tools to predict breeding values and optimize genetic gain across traits."
              },
              {
                icon: Sprout,
                title: "Trait Development",
                description: "Development of superior traits for yield, quality, disease resistance, and stress tolerance."
              },
              {
                icon: BarChart3,
                title: "Field Testing",
                description: "Multi-location trials to evaluate performance and stability of new genetic materials."
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

      {/* Active Research Programs */}
      <section className="section-y">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Active Breeding Programs</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our breeding programs target key crops with emphasis on traits that matter most to Northern Plains growers.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                title: "Corn Breeding Program",
                description: "Development of high-yielding corn varieties adapted to Northern Plains growing conditions with enhanced disease resistance.",
                features: [
                  "Drought tolerance improvement",
                  "Northern corn leaf blight resistance",
                  "Cold germination enhancement",
                  "Nutritional quality optimization"
                ]
              },
              {
                title: "Soybean Genetics Research",
                description: "Advanced soybean breeding focusing on yield potential, protein content, and adaptation to diverse environments.",
                features: [
                  "High protein and oil content",
                  "Disease resistance breeding",
                  "Maturity group optimization",
                  "Herbicide tolerance development"
                ]
              },
              {
                title: "Wheat Improvement Initiative",
                description: "Comprehensive wheat breeding program developing varieties for food and feed applications with superior agronomic traits.",
                features: [
                  "Hard red spring wheat varieties",
                  "Fusarium head blight resistance",
                  "Milling and baking quality",
                  "Winter hardiness improvement"
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

      {/* Research Achievements */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Research Achievements</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our genetics research has delivered measurable improvements in crop performance and farmer profitability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                metric: "50+",
                label: "Varieties Released",
                description: "Commercial varieties developed and released to growers"
              },
              {
                icon: Users,
                metric: "15%",
                label: "Yield Improvement",
                description: "Average yield gain over check varieties in trials"
              },
              {
                icon: BarChart3,
                metric: "200+",
                label: "Research Plots",
                description: "Active breeding nurseries and evaluation sites"
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

      {/* Collaboration Opportunities */}
      <section className="section-y">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-headline mb-8">Research Partnerships</h2>
              <p className="text-body mb-8 text-muted-foreground">
                We collaborate with leading universities, research institutions, and industry partners to accelerate genetic improvement and deliver innovative solutions to agriculture.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span className="text-body">University breeding programs</span>
                </div>
                <div className="flex items-center gap-4">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span className="text-body">International research consortiums</span>
                </div>
                <div className="flex items-center gap-4">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span className="text-body">Biotechnology companies</span>
                </div>
                <div className="flex items-center gap-4">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span className="text-body">Government research initiatives</span>
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
              <h3 className="text-title mb-6">Join Our Research Network</h3>
              <p className="text-body mb-8 text-muted-foreground">
                Partner with Arthur's genetics team to access cutting-edge breeding technologies and contribute to the development of next-generation crop varieties.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <span className="text-body-medium">Research collaboration</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <span className="text-body-medium">Germplasm exchange</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <span className="text-body-medium">Technology licensing</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-body-medium">Joint funding opportunities</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary w-full">
                  Explore Partnership
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
              <h2 className="text-headline mb-6 text-background">Advance Crop Genetics Research</h2>
              <p className="text-body-large mb-8 text-background/80">
                Join our genetics research program and help develop the crop varieties that will feed the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground text-body-medium font-medium rounded-lg hover:bg-background/90 transition-colors"
                >
                  Start Research Partnership
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