"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { WeatherDashboard } from '@/components/weather-dashboard'
import { FuturesPricing } from '@/components/futures-pricing'
import { PullQuote, TestimonialGrid } from '@/components/pull-quote'
import { PlaceholderMedia, RoundedImage } from '@/components/rounded-media'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Refined Anthropic Style with Image */}
      <section className="relative min-h-screen flex items-center -mt-16 lg:-mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
        
        <div className="relative z-10 container py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-display mb-2 text-balance">
                Arthur: Where Innovation Grows,{" "}
                <span className="text-serif-display text-primary italic">From the Ground Up.</span>
              </h1>
              <p className="text-subheading mb-10 max-w-3xl">
                Over one hundred years in the field.
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
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex justify-center lg:justify-end"
              style={{ transform: 'translateY(-10%)' }}
            >
              <Image 
                src="/2025, 02_08_11 PM.png"
                alt="Arthur Companies agricultural operations"
                width={600}
                height={400}
                priority
              />
            </motion.div>
          </div>
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
              className="flex justify-center"
            >
              <Image 
                src="/Aug 6, 2025, 02_25_19 PM.png"
                alt="Arthur Companies serving growers"
                width={600}
                height={400}
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Partners Section */}
      <section className="section-y-large bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:order-2"
            >
              <Image 
                src="/Aug 6, 2025, 02_31_51 PM.png"
                alt="Arthur Companies partnering with industry leaders"
                width={600}
                height={400}
                priority
              />
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

      {/* Quote Section */}
      <section className="section-y-large">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <PullQuote
                variant="large"
                quote="Arthur is the kind of company that shows up when it matters. We count on them every year, and every year they deliver."
                author="Mike Johnson"
                title="Wheat & Soybean Farmer"
                company="Cass County"
              />
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


      {/* Weather & Market Dashboard */}
      <section className="section-y bg-muted/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-headline mb-4">Real-Time Agricultural Intelligence</h2>
            <p className="text-body-large max-w-4xl mx-auto text-muted-foreground">
              Make informed decisions with live market data and precision weather forecasting
            </p>
          </div>
          
          {/* Weather Dashboard - Full Width */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-card rounded-2xl shadow-lg"
            >
              <WeatherDashboard />
            </motion.div>
          </div>
          
          {/* Market Prices - Focused Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-card rounded-2xl shadow-lg"
            >
              <div className="text-center mb-8">
                <h3 className="text-title mb-3">Futures Market Data</h3>
                <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                  Live futures pricing for corn, soybeans, and wheat contracts
                </p>
              </div>
              <FuturesPricing />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Producer Testimonials */}
      <section className="section-y-large">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-4">What Our Growers Say</h2>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground">
              Hear from the farmers who trust Arthur Companies with their livelihood
            </p>
          </motion.div>

          {/* Single testimonial from actual copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <PullQuote
              variant="large"
              quote="Arthur is the kind of company that shows up when it matters. We count on them every year, and every year they deliver."
              author="Mike Johnson"
              title="Wheat & Soybean Farmer"
              company="Cass County"
            />
          </motion.div>
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