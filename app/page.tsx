"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { WeatherDashboard } from '@/components/weather-dashboard'
import { GrainPricing } from '@/components/grain-pricing'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Refined Anthropic Style */}
      <section className="relative min-h-screen flex items-center -mt-16 lg:-mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
        
        <div className="relative z-10 container py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-display mb-8 text-balance">
              Arthur: Where Innovation Grows,{" "}
              <span className="text-serif-large text-primary italic">From the Ground Up.</span>
            </h1>
            <p className="text-body-large mb-12 max-w-2xl">
              100 years in the field and we're just getting started.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/grain" className="btn-primary">
                View Cash Bids
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/about" className="btn-secondary">
                About Arthur
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
          >
            <div className="text-center">
              <div className="text-5xl font-medium text-primary mb-3">117</div>
              <div className="text-small">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-medium text-primary mb-3">500K</div>
              <div className="text-small">Acres Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-medium text-primary mb-3">15</div>
              <div className="text-small">Locations</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* For Growers Section */}
      <section className="section-y-large">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-headline mb-8">For Growers</h2>
              <p className="text-body mb-8">
                You know your acres. We know the market. Our team shows up, answers the phone, and competes to earn your business whether you're hauling to an Arthur elevator, planning for next year with our agronomy experts, or growing under contract for specialty end-users.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/grain" className="btn-primary">
                  Grain
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/products-services" className="btn-secondary">
                  Products & Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/8 via-accent/5 to-primary/8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-serif text-6xl lg:text-7xl font-normal text-primary/70 mb-4">🌾</div>
                  <div className="text-small text-muted-foreground">Grain Marketing Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Partners Section */}
      <section className="section-y-large bg-secondary/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:order-2"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/8 via-accent/5 to-primary/8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-serif text-6xl lg:text-7xl font-normal text-primary/70 mb-4">🤝</div>
                  <div className="text-small text-muted-foreground">Partnership & Trust</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-1"
            >
              <h2 className="text-headline mb-8">For Partners</h2>
              <p className="text-body mb-8">
                Arthur is a growing agribusiness platform trusted by processors, suppliers, and our industry-leading peers. Our businesses span grain origination, crop inputs, research, logistics, and specialty ingredients—all supported by a culture of integrity and execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/products-services" className="btn-primary">
                  Products & Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/research-development" className="btn-secondary">
                  Innovation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-y-large">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-headline mb-8">Who We Are</h2>
              <p className="text-body mb-8">
                Every day, farmers across the Northern Plains rely on Arthur for more than just market access and inputs. They count on us for straight answers, honest service, and solutions that work. From local agronomy centers to leading-edge research, Arthur combines the grit of a century-long legacy with a vision for what agriculture can be. Since 1906, we've built relationships that last—from a single elevator in Arthur, ND, to a multi-state operation supporting thousands of acres.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
              >
                <span className="text-body-medium">About Us</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/8 via-accent/5 to-primary/8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-serif text-6xl lg:text-7xl font-normal text-primary/70 mb-4">1906</div>
                  <div className="text-small text-muted-foreground">Founded in North Dakota</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-y-large">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Company Values</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              The principles that have guided our work for over a century.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { 
                title: "Integrity", 
                description: "We do what we say we'll do—no excuses. We do the right thing. We do what we say we will do. We treat others the way we would like to be treated. We embody trust and teamwork."
              },
              { 
                title: "Service", 
                description: "We care for the land, our communities, and your trust. Provide value in every interaction with producers, partners, and the communities we serve and live in. We serve with a positive attitude and adapt to meet needs and exceed expectations."
              },
              { 
                title: "Pioneering", 
                description: "From new genetics to digital tools, we're on the leading edge. We are not satisfied with the status quo and are committed to creating new opportunities and higher levels of service."
              },
              { 
                title: "Excellence", 
                description: "We invest in people, platforms, and partnerships for the long haul. If it is worth doing, we do it right the first time and strive for excellence in all we do. We have an ownership mindset and take accountability in our words and actions."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 card-refined"
              >
                <h3 className="text-title mb-3">{value.title}</h3>
                <p className="text-body">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-y-large bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="text-serif text-display text-center mb-8">
                "Arthur is the kind of company that shows up when it matters. We count on them every year, and every year they deliver."
              </blockquote>
              <div className="text-center">
                <div className="text-body-medium font-medium mb-1">Mike Johnson</div>
                <div className="text-small text-muted-foreground">Wheat & Soybean Farmer</div>
                <div className="text-small text-muted-foreground">Cass County</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Weather & Market Dashboard */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-headline mb-4">Real-Time Agricultural Intelligence</h2>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground">
              Make informed decisions with live market data and precision weather forecasting
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Weather Dashboard */}
            <div>
              <WeatherDashboard />
            </div>
            
            {/* Grain Pricing */}
            <div>
              <h3 className="text-headline mb-6">Market Prices</h3>
              <GrainPricing />
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="section-y-large">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-headline mb-6">Arthur Co. Cash Bids</h2>
              <p className="text-body-large mb-12">
                Free Real-time harvest information for growers, by Arthur Companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="#"
                  className="btn-primary"
                >
                  Download for iOS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="#"
                  className="btn-secondary"
                >
                  Download for Android
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-y-large bg-foreground text-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-serif text-display text-center text-background">
                Arthur delivers performance you can measure and people you can trust.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}