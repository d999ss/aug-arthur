"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Cpu, Satellite, MapPin, BarChart3, ChevronRight, Users, Zap } from 'lucide-react'

export default function PrecisionAgricultureResearchPage() {
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
                <Cpu className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-display mb-8 text-balance">
                Precision Agriculture Research
              </h1>
              <p className="text-body-large mb-12 max-w-2xl mx-auto">
                Development of precision farming technologies and data analytics. Creating smart agricultural solutions that optimize resources and maximize yields through cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary">
                  Join Research Program
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

      {/* Technology Focus Areas */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Technology Development</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our precision agriculture research develops cutting-edge technologies for optimized crop management and resource efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Satellite,
                title: "Remote Sensing",
                description: "Advanced satellite and drone imaging for comprehensive crop monitoring and analysis."
              },
              {
                icon: MapPin,
                title: "GPS Technology",
                description: "High-precision GPS systems for accurate field operations and precise mapping."
              },
              {
                icon: BarChart3,
                title: "Data Analytics",
                description: "Advanced algorithms for agricultural data processing and intelligent decision support."
              },
              {
                icon: Cpu,
                title: "IoT Sensors",
                description: "Internet of Things sensors for real-time field monitoring and automation systems."
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

      {/* Research Initiatives */}
      <section className="section-y">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Active Research Initiatives</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Comprehensive precision agriculture projects that are pioneering the future of smart farming technology.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                title: "Smart Sensor Networks",
                description: "Development of wireless sensor networks for continuous monitoring of soil conditions, weather patterns, and crop health with real-time analytics.",
                features: [
                  "Soil moisture and temperature sensors",
                  "Weather station integration", 
                  "Plant health monitoring devices",
                  "Automated irrigation control systems"
                ]
              },
              {
                title: "Machine Learning Applications",
                description: "Advanced AI and machine learning algorithms for predictive analytics and automated decision-making in precision agriculture systems.",
                features: [
                  "Yield prediction models",
                  "Disease detection algorithms",
                  "Optimal planting recommendations",
                  "Resource optimization systems"
                ]
              },
              {
                title: "Autonomous Systems",
                description: "Research and development of autonomous agricultural machinery and robotic systems for precision farming operations and efficiency.",
                features: [
                  "Autonomous tractor navigation",
                  "Robotic crop monitoring",
                  "Precision application systems",
                  "Automated harvesting technology"
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

      {/* Technology Impact */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Technology Impact</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our precision agriculture technologies are delivering significant improvements in farming efficiency and resource utilization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                metric: "35%",
                label: "Efficiency Increase",
                description: "Average improvement in farming operation efficiency"
              },
              {
                icon: Users,
                metric: "200+",
                label: "Technology Adopters",
                description: "Farmers using our precision agriculture solutions"
              },
              {
                icon: Satellite,
                metric: "50,000+",
                label: "Acres Monitored",
                description: "Agricultural land under precision monitoring"
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
              <h2 className="text-headline mb-6 text-background">Pioneer Precision Agriculture Technology</h2>
              <p className="text-body-large mb-8 text-background/80">
                Collaborate with our research team to develop the next generation of precision farming solutions that revolutionize agricultural operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground text-body-medium font-medium rounded-lg hover:bg-background/90 transition-colors"
                >
                  Technology Partnership
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
