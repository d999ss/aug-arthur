"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users, Building2, GraduationCap, Globe, ChevronRight, Network, Target } from 'lucide-react'

export default function CollaborativeResearchPage() {
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
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-display mb-8 text-balance">
                Collaborative Research
              </h1>
              <p className="text-body-large mb-12 max-w-2xl mx-auto">
                Partnerships with universities, institutions, and industry leaders. Building bridges between academia and agriculture to accelerate innovation and knowledge transfer.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary">
                  Explore Partnerships
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

      {/* Partnership Types */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Research Partnerships</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our collaborative research program brings together leading institutions and industry partners to accelerate agricultural innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "University Partners",
                description: "Collaborative research with leading agricultural universities and research institutions."
              },
              {
                icon: Building2,
                title: "Industry Collaboration",
                description: "Strategic partnerships with agricultural companies and technology providers."
              },
              {
                icon: Globe,
                title: "International Projects",
                description: "Global research initiatives addressing worldwide agricultural challenges."
              },
              {
                icon: Users,
                title: "Consortium Research",
                description: "Multi-partner research consortiums tackling complex agricultural problems."
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

      {/* Current Partnerships */}
      <section className="section-y">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Current Partnerships</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Strategic collaborations that are driving innovation and advancing agricultural research across multiple domains.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                title: "North Dakota State University",
                description: "Long-term partnership focusing on crop breeding, soil health research, and precision agriculture technology development with shared expertise.",
                features: [
                  "Joint breeding programs",
                  "Graduate student research projects", 
                  "Shared research facilities",
                  "Technology transfer initiatives"
                ]
              },
              {
                title: "USDA Agricultural Research Service",
                description: "Collaborative research on sustainable agriculture practices, climate adaptation, and food security initiatives with federal support.",
                features: [
                  "Climate change adaptation research",
                  "Sustainable farming practice development",
                  "Food security studies",
                  "Policy research and development"
                ]
              },
              {
                title: "International Maize and Wheat Improvement Center",
                description: "Global partnership developing improved crop varieties for developing countries and climate-resilient agriculture worldwide.",
                features: [
                  "International breeding programs",
                  "Germplasm exchange",
                  "Capacity building initiatives",
                  "Technology dissemination"
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

      {/* Partnership Benefits */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Partnership Benefits</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our collaborative approach accelerates innovation and creates value for all partners in the agricultural research ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Shared Resources",
                description: "Access to specialized equipment, facilities, and expertise across partner organizations."
              },
              {
                title: "Accelerated Innovation",
                description: "Faster development and deployment of new technologies through collaborative efforts."
              },
              {
                title: "Risk Sharing",
                description: "Distributed risk and shared investment in high-impact research projects."
              },
              {
                title: "Knowledge Exchange",
                description: "Cross-pollination of ideas and expertise from diverse research backgrounds."
              },
              {
                title: "Global Impact",
                description: "Broader reach and impact through international partnerships and networks."
              },
              {
                title: "Talent Development",
                description: "Training and development opportunities for researchers and students."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 card-refined text-center"
              >
                <h3 className="text-body-medium font-semibold mb-3">{benefit.title}</h3>
                <p className="text-body text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Impact */}
      <section className="section-y">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Collaboration Impact</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our collaborative research efforts are producing significant advances in agricultural science and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                metric: "25+",
                label: "Active Partnerships",
                description: "Research collaborations with institutions worldwide"
              },
              {
                icon: Users,
                metric: "100+",
                label: "Researchers Involved",
                description: "Scientists collaborating across multiple disciplines"
              },
              {
                icon: Target,
                metric: "50+",
                label: "Joint Publications",
                description: "Peer-reviewed research papers published annually"
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
              <h2 className="text-headline mb-6 text-background">Join Our Research Network</h2>
              <p className="text-body-large mb-8 text-background/80">
                Partner with Arthur Companies to advance agricultural research through collaborative innovation and shared expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground text-body-medium font-medium rounded-lg hover:bg-background/90 transition-colors"
                >
                  Partnership Inquiry
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
