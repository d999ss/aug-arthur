"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Brain, Database, TrendingUp, ChevronRight, Users, Target } from 'lucide-react'

export default function DataSciencePage() {
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
                <BarChart3 className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-display mb-8 text-balance">
                Data Science & Analytics
              </h1>
              <p className="text-body-large mb-12 max-w-2xl mx-auto">
                Advanced data modeling and machine learning for agricultural insights. Transforming complex agricultural data into actionable intelligence for smarter farming decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary">
                  Explore Data Solutions
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

      {/* Data Science Applications */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Data Science Applications</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our data science team develops advanced analytics and machine learning solutions to transform agricultural data into actionable insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Machine Learning",
                description: "AI algorithms for predictive modeling and automated decision-making in agricultural systems."
              },
              {
                icon: Database,
                title: "Big Data Processing",
                description: "Large-scale data processing and analysis for complex agricultural applications."
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "Forecasting models for yield optimization, weather patterns, and market predictions."
              },
              {
                icon: BarChart3,
                title: "Data Visualization",
                description: "Interactive dashboards and visualization tools for comprehensive data insights."
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
            <h2 className="text-headline mb-6">Active Data Science Projects</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Comprehensive data science initiatives that are revolutionizing agricultural decision-making through advanced analytics.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                title: "Agricultural AI Platform",
                description: "Development of comprehensive AI platform integrating multiple data sources for intelligent farm management decisions and automated insights.",
                features: [
                  "Multi-source data integration",
                  "Real-time analytics engine", 
                  "Automated recommendation systems",
                  "Mobile and web applications"
                ]
              },
              {
                title: "Yield Prediction Models",
                description: "Advanced machine learning models for accurate crop yield forecasting using weather, soil, and management data with precision analytics.",
                features: [
                  "Deep learning neural networks",
                  "Ensemble modeling techniques",
                  "Real-time model updating",
                  "Uncertainty quantification"
                ]
              },
              {
                title: "Market Intelligence System",
                description: "Data-driven market analysis and price forecasting system for agricultural commodities with comprehensive decision support tools.",
                features: [
                  "Price trend analysis",
                  "Supply and demand modeling",
                  "Risk assessment algorithms",
                  "Trading strategy optimization"
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
            <h2 className="text-headline mb-6">Data Science Impact</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our data science solutions are delivering measurable improvements in agricultural efficiency and decision-making accuracy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                metric: "40%",
                label: "Prediction Accuracy",
                description: "Improvement in crop yield forecasting precision"
              },
              {
                icon: Users,
                metric: "300+",
                label: "Farmers Using AI",
                description: "Growers leveraging our data science solutions"
              },
              {
                icon: Target,
                metric: "15M+",
                label: "Data Points Analyzed",
                description: "Agricultural data points processed annually"
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
              <h2 className="text-headline mb-6 text-background">Transform Agriculture with Data Science</h2>
              <p className="text-body-large mb-8 text-background/80">
                Partner with our data science team to unlock the power of agricultural data and analytics for smarter, more profitable farming decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground text-body-medium font-medium rounded-lg hover:bg-background/90 transition-colors"
                >
                  Start Data Partnership
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
