"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronRight } from 'lucide-react'

// Anthropic-style minimal animations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Anthropic-style Hero - Minimal and Clean */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight text-foreground mb-6">
              Agricultural excellence,
              <span className="text-primary block">redefined.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              For over a century, Arthur Companies has been pioneering sustainable farming solutions across the Northern Plains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/grain">
                <Button 
                  size="lg" 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base font-medium"
                >
                  View Cash Bids
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-foreground hover:bg-muted rounded-full px-8 py-6 text-base font-medium"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics - Anthropic Style */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { value: "117", label: "Years of Excellence", suffix: "+" },
              { value: "500", label: "Thousand Acres Served", suffix: "K+" },
              { value: "15", label: "Locations", suffix: "+" }
            ].map((stat) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                variants={fadeIn}
              >
                <div className="text-5xl md:text-6xl font-medium text-primary mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Clean Anthropic Layout */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive agricultural solutions tailored to modern farming needs.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "Grain Marketing",
                description: "Real-time cash bids and strategic marketing solutions for optimal returns.",
                link: "/grain"
              },
              {
                title: "Agronomy Services",
                description: "Expert guidance on crop nutrition, soil health, and precision agriculture.",
                link: "/services/agronomy"
              },
              {
                title: "Research & Development",
                description: "Cutting-edge agricultural research driving tomorrow's farming innovations.",
                link: "/research-development"
              },
              {
                title: "Specialty Crops",
                description: "Premium contracts and specialized handling for identity-preserved grains.",
                link: "/services/specialty-crops"
              },
              {
                title: "Precision Agriculture",
                description: "Data-driven insights and technology solutions for maximum efficiency.",
                link: "/services/precision-agriculture"
              },
              {
                title: "Wholesale Fertilizer",
                description: "Comprehensive nutrient programs backed by agronomic expertise.",
                link: "/services/wholesale-fertilizer"
              }
            ].map((service) => (
              <motion.div key={service.title} variants={fadeIn}>
                <Link href={service.link}>
                  <Card className="h-full border-0 shadow-none hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary">
                        <span className="text-sm font-medium">Learn more</span>
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Content - Anthropic Style */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Building the future of agriculture
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Arthur Companies, we combine century-old wisdom with cutting-edge technology to deliver 
                solutions that help farmers thrive in an ever-changing world.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our commitment to innovation, sustainability, and community partnership drives everything 
                we do, from grain marketing to precision agriculture services.
              </p>
              <Link href="/about">
                <Button 
                  variant="outline" 
                  className="rounded-full border-foreground/20 hover:border-foreground/40"
                >
                  Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/30 rounded-3xl flex items-center justify-center">
                <div className="text-6xl font-medium text-primary/60">
                  Since 1906
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Minimal */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and relationships.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: "Integrity", description: "Doing what's right, always" },
              { title: "Service", description: "Putting customers first" },
              { title: "Innovation", description: "Embracing new solutions" },
              { title: "Excellence", description: "Quality in everything" }
            ].map((value) => (
              <motion.div 
                key={value.title}
                className="text-center"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Anthropic Style */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Ready to grow with Arthur?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of farmers who trust us with their success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 py-6"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/grower-insights">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-background/20 text-background hover:bg-background/10 rounded-full px-8 py-6"
              >
                Download App
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}