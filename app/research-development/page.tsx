"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Lightbulb, Dna, FlaskConical, TrendingUp, Cpu, BarChart3, Building2, Users, Rocket, Target, Globe, Zap, ChevronRight } from 'lucide-react'

export default function ResearchDevelopmentPage() {
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
              <h1 className="text-display mb-8 text-balance">
                Research & Development
              </h1>
              <p className="text-body-large mb-8 max-w-2xl mx-auto">
                Advancing agriculture through innovation
              </p>
              <p className="text-body mb-12 max-w-3xl mx-auto text-muted-foreground">
                Our R&D initiatives focus on solving agriculture's most pressing challenges through scientific innovation, technology development, and strategic partnerships.
              </p>
              
              {/* Quick Navigation */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
                <a href="#research" className="btn-primary">
                  <FlaskConical className="mr-2 h-4 w-4" />
                  Research
                </a>
                <a href="#venture" className="btn-secondary">
                  <Rocket className="mr-2 h-4 w-4" />
                  Venture
                </a>
              </div>
              
              {/* Value Proposition */}
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="p-6 card-refined">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center">
                    <FlaskConical className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-title mb-3">Research Excellence</h3>
                  <p className="text-body text-muted-foreground">
                    Leading-edge agricultural research in crop genetics, soil science, 
                    precision agriculture, and sustainable farming practices.
                  </p>
                </div>
                <div className="p-6 card-refined">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-title mb-3">Strategic Investment</h3>
                  <p className="text-body text-muted-foreground">
                    Venture capital and strategic partnerships with innovative agtech 
                    companies transforming the agricultural landscape.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="section-y-large bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <FlaskConical className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-headline mb-6">Research</h2>
            <p className="text-body-large max-w-3xl mx-auto mb-12">
              Our research division conducts cutting-edge agricultural science to solve 
              industry challenges and unlock new opportunities for sustainable farming.
            </p>
            
            {/* Research Categories Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: "Crop Science",
                  description: "Advanced research in plant genetics, breeding, and biotechnology to develop next-generation crop varieties"
                },
                {
                  title: "Digital Agriculture", 
                  description: "Development of digital tools and platforms to enhance farm management and decision-making processes"
                },
                {
                  title: "Sustainable Systems",
                  description: "Research into sustainable farming practices and technologies that balance productivity with environmental stewardship"
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-4 bg-background rounded-xl"
                >
                  <h4 className="text-body-medium font-semibold mb-2">{category.title}</h4>
                  <p className="text-small text-muted-foreground">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-refined">
            {[
              {
                icon: Dna,
                title: "Crop Genetics & Breeding",
                description: "Advanced research in plant genetics, breeding programs, and biotechnology to develop next-generation crop varieties.",
                link: "/research/crop-genetics"
              },
              {
                icon: FlaskConical,
                title: "Soil Science Research",
                description: "Comprehensive soil health studies, nutrient cycling research, and microbiome analysis for sustainable agriculture.",
                link: "/research/soil-science"
              },
              {
                icon: Cpu,
                title: "Precision Agriculture",
                description: "Development of precision farming technologies, sensor systems, and data analytics for optimized crop management.",
                link: "/research/precision-agriculture"
              },
              {
                icon: BarChart3,
                title: "Data Science & Analytics",
                description: "Advanced data modeling, machine learning applications, and predictive analytics for agricultural decision-making.",
                link: "/research/data-science"
              },
              {
                icon: Lightbulb,
                title: "Sustainability Research",
                description: "Environmental impact studies, carbon sequestration research, and sustainable farming practice development.",
                link: "/research/sustainability"
              },
              {
                icon: Users,
                title: "Collaborative Research",
                description: "Partnerships with universities, research institutions, and industry leaders for collaborative innovation projects.",
                link: "/research/collaborative"
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
                >
                  <Link 
                    href={service.link as any}
                    className="group block p-6 card-refined hover-lift"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-title mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body mb-4 text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary text-small font-medium">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Venture Section */}
      <section id="venture" className="section-y-large">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-headline mb-6">Venture</h2>
            <p className="text-body-large max-w-3xl mx-auto mb-12">
              Our venture platform invests in and partners with innovative agtech companies 
              that are transforming agriculture through breakthrough technologies and business models.
            </p>
            
            {/* Venture Categories Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: "Early Stage Investment",
                  description: "Seed and Series A funding for promising agtech startups"
                },
                {
                  title: "Strategic Partnerships",
                  description: "Collaborative ventures with established industry players"
                },
                {
                  title: "Innovation Acceleration",
                  description: "Incubation and acceleration programs for breakthrough technologies"
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-4 bg-secondary/20 rounded-xl"
                >
                  <h4 className="text-body-medium font-semibold mb-2">{category.title}</h4>
                  <p className="text-small text-muted-foreground">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Venture Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-refined">
            {[
              {
                icon: Rocket,
                title: "Startup Investment",
                description: "Direct equity investments in early-stage agtech companies with disruptive technologies and strong growth potential.",
                link: "/venture/startup-investment"
              },
              {
                icon: Building2,
                title: "Corporate Ventures",
                description: "Strategic partnerships and joint ventures with established companies to accelerate innovation and market adoption.",
                link: "/venture/corporate-ventures"
              },
              {
                icon: Target,
                title: "Innovation Incubator",
                description: "Comprehensive incubation program providing funding, mentorship, and resources to promising agricultural innovations.",
                link: "/venture/innovation-incubator"
              },
              {
                icon: Globe,
                title: "Global Partnerships",
                description: "International venture partnerships and cross-border investments in agricultural technology and innovation.",
                link: "/venture/global-partnerships"
              },
              {
                icon: Zap,
                title: "Technology Acceleration",
                description: "Fast-track development programs for breakthrough agricultural technologies with commercial potential.",
                link: "/venture/technology-acceleration"
              },
              {
                icon: TrendingUp,
                title: "Portfolio Management",
                description: "Active portfolio management and strategic guidance for venture investments to maximize growth and impact.",
                link: "/venture/portfolio-management"
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
                >
                  <Link 
                    href={service.link as any}
                    className="group block p-6 card-refined hover-lift"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-title mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body mb-4 text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary text-small font-medium">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Current portfolio companies</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our diverse portfolio of innovative companies is transforming agriculture 
              across the value chain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-refined max-w-6xl mx-auto">
            {[
              {
                name: "SeedZ",
                description: "Digital marketplace connecting seed developers with farmers seeking specific traits",
                stage: "Seed A",
                stageColor: "bg-secondary/20 text-primary"
              },
              {
                name: "Balcão",
                description: "Brazilian agtech platform streamlining the supply chain between farmers and processors",
                stage: "Series A",
                stageColor: "bg-blue-100 text-blue-800"
              },
              {
                name: "EpiCrop Technologies",
                description: "Developing epigenetic solutions to improve crop resilience without genetic modification",
                stage: "Seed",
                stageColor: "bg-primary/10 text-primary"
              },
              {
                name: "AgStartUp Engine",
                description: "Early-stage investment fund and accelerator for promising agricultural innovations",
                stage: "Fund",
                stageColor: "bg-orange-100 text-orange-800"
              },
              {
                name: "Levridge",
                description: "Comprehensive ERP solution designed specifically for agricultural businesses",
                stage: "Series B",
                stageColor: "bg-indigo-100 text-indigo-800"
              },
              {
                name: "CropTech Analytics",
                description: "AI-powered crop monitoring and yield prediction platform using satellite imagery",
                stage: "Seed A",
                stageColor: "bg-secondary/20 text-primary"
              }
            ].map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 card-refined"
              >
                <h3 className="text-title mb-2">{company.name}</h3>
                <p className="text-body text-muted-foreground mb-3">{company.description}</p>
                <span className={`px-3 py-1 text-xs rounded-full ${company.stageColor}`}>
                  {company.stage}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Section Integration */}
      <section className="section-y-large bg-foreground text-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-headline mb-6 text-background">Research-driven investment strategy</h2>
            <p className="text-body-large max-w-3xl mx-auto opacity-90">
              Our unique approach combines scientific research with strategic investment 
              to accelerate agricultural innovation and create lasting impact.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-background/10 backdrop-blur-sm rounded-xl"
            >
              <h3 className="text-title mb-3 text-background">From Lab to Market</h3>
              <p className="text-body opacity-90 mb-6">
                Our research discoveries inform our investment decisions, ensuring we back 
                technologies with proven scientific foundations.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-4 py-2 rounded-lg border border-background/20 text-background hover:bg-background/10 transition-all duration-200 text-sm font-medium"
              >
                Explore Research
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-background/10 backdrop-blur-sm rounded-xl"
            >
              <h3 className="text-title mb-3 text-background">Investment to Innovation</h3>
              <p className="text-body opacity-90 mb-6">
                Our portfolio companies gain access to our research capabilities, 
                accelerating their development and market success.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-4 py-2 rounded-lg border border-background/20 text-background hover:bg-background/10 transition-all duration-200 text-sm font-medium"
              >
                Partner With Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-y-large">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-headline mb-6">Shape the future of agriculture</h2>
              <p className="text-body-large mb-12 text-muted-foreground">
                Whether you're a researcher, entrepreneur, or investor, join us in advancing 
                agricultural innovation through cutting-edge research and strategic partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Submit Proposal
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}