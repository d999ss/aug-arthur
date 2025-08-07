"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { WeatherDashboard } from '@/components/weather-dashboard'
import { FuturesPricing } from '@/components/futures-pricing'
import { PullQuote, TestimonialGrid } from '@/components/pull-quote'
import { PlaceholderMedia, RoundedImage } from '@/components/rounded-media'
import { styreneB } from '@/lib/fonts'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Refined Anthropic Style with Image */}
      <section className="relative min-h-screen flex items-center justify-center -mt-16 lg:-mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
        
        {/* Enhanced Robinhood-style lighting effect with subtle animation */}
        <div 
          className="absolute top-1/2 left-1/4 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-float"
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, 
              hsla(45, 85%, 55%, 0.3) 0%, 
              hsla(45, 85%, 60%, 0.18) 25%, 
              hsla(45, 85%, 65%, 0.1) 50%, 
              hsla(45, 85%, 70%, 0.05) 75%, 
              transparent 100%)`,
            filter: 'blur(60px)',
            animationDelay: '0s'
          }}
        />
        
        {/* Additional ambient glow with offset animation */}
        <div 
          className="absolute top-1/3 right-1/4 w-[800px] h-[800px] -translate-y-1/2 pointer-events-none animate-float"
          style={{
            background: `radial-gradient(circle at center, 
              hsla(45, 85%, 60%, 0.2) 0%, 
              hsla(45, 85%, 65%, 0.1) 40%, 
              transparent 70%)`,
            filter: 'blur(80px)',
            animationDelay: '3s'
          }}
        />
        
        <div className="relative z-10 container">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="text-hero mb-lg text-balance">
                Arthur: Where Innovation Grows, From the Ground Up.
              </h1>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/grain" className="btn btn-primary">
                  View Cash Bids
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/about" className="btn btn-secondary">
                  About Arthur
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
              className="flex justify-center lg:justify-end items-center"
            >
              <Image 
                src="/2025, 02_08_11 PM.png"
                alt="Arthur Companies agricultural operations"
                width={600}
                height={400}
                priority
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* For Growers Section - Light */}
      <section className="section relative">
        {/* Lighting effect at section transition */}
        <div 
          className="absolute -top-32 left-1/2 w-[1000px] h-[400px] -translate-x-1/2 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, 
              hsla(45, 85%, 55%, 0.08) 0%, 
              hsla(45, 85%, 60%, 0.04) 40%, 
              transparent 70%)`,
            filter: 'blur(60px)',
          }}
        />
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-headline mb-md">For Growers</h2>
              <p className="mb-lg" style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: 'clamp(1.125rem, 1.087rem + 0.163vw, 1.25rem)',
                fontWeight: '400',
                lineHeight: '1.6',
                color: '#171717'
              }}>
                You know your acres. We know the market. Our team shows up, answers the phone, and competes to earn your business whether you're hauling to an Arthur elevator, planning for next year with our agronomy experts, or growing under contract for specialty end-users.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/grain" className="btn btn-primary">
                  Grain
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/products-services" className="btn btn-secondary">
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

      {/* For Partners Section - Dark Background */}
      <section 
        className="section relative" 
        style={{ 
          background: 'hsl(0 0% 4%)',
          color: 'hsl(var(--color-background))'
        }}
      >
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-20 animate-noise"
          style={{
            background: `radial-gradient(circle at 20% 50%, rgba(230, 184, 0, 0.03) 0%, transparent 30%), 
                        radial-gradient(circle at 80% 80%, rgba(230, 184, 0, 0.02) 0%, transparent 40%),
                        repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,255,255,0.01) 1px, rgba(255,255,255,0.01) 2px)`
          }}
        />
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
              <h2 className="text-headline mb-md" style={{ color: 'hsl(var(--color-background))' }}>For Partners</h2>
              <p className="text-body mb-lg" style={{ color: 'hsl(var(--color-background))' }}>
                Arthur is a growing agribusiness platform trusted by processors, suppliers, and our industry-leading peers. Our businesses span grain origination, crop inputs, research, logistics, and specialty ingredients—all supported by a culture of integrity and execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/products-services" className="btn btn-primary" style={{ backgroundColor: 'hsl(var(--color-background))', color: 'hsl(var(--color-foreground))' }}>
                  Products & Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/research-development" className="btn btn-secondary" style={{ backgroundColor: 'transparent', color: 'hsl(var(--color-background))', borderColor: 'hsl(var(--color-background) / 0.3)' }}>
                  Innovation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section - Light */}
      <section className="section relative overflow-hidden">
        {/* Ambient glow effect */}
        <div 
          className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/4 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, 
              hsla(45, 85%, 55%, 0.12) 0%, 
              hsla(45, 85%, 60%, 0.06) 35%, 
              transparent 70%)`,
            filter: 'blur(80px)',
          }}
        />
        <div className="container">
          <div className="max-w-5xl mx-auto">
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

      {/* Values Section - Dark */}
      <section 
        className="section relative" 
        style={{ 
          background: 'hsl(0 0% 3%)',
          color: 'hsl(var(--color-background))'
        }}
      >
        {/* Sophisticated noise overlay */}
        <div 
          className="absolute inset-0 opacity-15 animate-noise"
          style={{
            background: `radial-gradient(circle at 30% 20%, rgba(230, 184, 0, 0.04) 0%, transparent 40%), 
                        radial-gradient(circle at 70% 90%, rgba(230, 184, 0, 0.03) 0%, transparent 50%),
                        repeating-linear-gradient(30deg, transparent, transparent 1px, rgba(255,255,255,0.008) 1px, rgba(255,255,255,0.008) 2px)`
          }}
        />
        {/* Dual lighting effects for depth */}
        <div 
          className="absolute top-20 left-0 w-[500px] h-[500px] -translate-x-1/2 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, 
              hsla(45, 85%, 55%, 0.1) 0%, 
              hsla(45, 85%, 65%, 0.05) 40%, 
              transparent 70%)`,
            filter: 'blur(100px)',
          }}
        />
        <div 
          className="absolute bottom-20 right-0 w-[500px] h-[500px] translate-x-1/2 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, 
              hsla(45, 85%, 55%, 0.1) 0%, 
              hsla(45, 85%, 65%, 0.05) 40%, 
              transparent 70%)`,
            filter: 'blur(100px)',
          }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-md" style={{ color: 'hsl(var(--color-background))' }}>Company Values</h2>
            <p className="text-body content-width mx-auto" style={{ color: 'hsl(var(--color-background))' }}>
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
                className="p-6 card"
              >
                <h3 className="text-headline mb-md" style={{ color: 'hsl(var(--color-background))' }}>{value.title}</h3>
                <p className="text-body" style={{ color: 'hsl(var(--color-background))' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Weather & Market Dashboard - Dark */}
      <section 
        className="section relative" 
        style={{ 
          background: 'hsl(0 0% 4%)',
          color: 'hsl(var(--color-background))'
        }}
      >
        {/* Market-themed texture overlay */}
        <div 
          className="absolute inset-0 opacity-20 animate-noise"
          style={{
            background: `radial-gradient(circle at 25% 60%, rgba(230, 184, 0, 0.06) 0%, transparent 40%), 
                        radial-gradient(circle at 75% 20%, rgba(230, 184, 0, 0.04) 0%, transparent 50%),
                        repeating-linear-gradient(75deg, transparent, transparent 1px, rgba(255,255,255,0.012) 1px, rgba(255,255,255,0.012) 2px)`
          }}
        />
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-headline mb-md" style={{ color: 'hsl(var(--color-background))' }}>Real-Time Agricultural Intelligence</h2>
            <p className="text-body content-width mx-auto" style={{ color: 'hsl(var(--color-background) / 0.8)' }}>
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
                <h3 className="text-headline mb-md" style={{ color: 'hsl(var(--color-background))' }}>Futures Market Data</h3>
                <p className="text-body content-width mx-auto" style={{ color: 'hsl(var(--color-background) / 0.8)' }}>
                  Live futures pricing for corn, soybeans, and wheat contracts
                </p>
              </div>
              <FuturesPricing />
            </motion.div>
          </div>
        </div>
      </section>


      {/* App Download Section - Dark */}
      <section 
        className="section relative" 
        style={{ 
          background: 'hsl(0 0% 2%)',
          color: 'hsl(var(--color-background))'
        }}
      >
        {/* Texture overlay */}
        <div 
          className="absolute inset-0 opacity-25 animate-noise"
          style={{
            background: `radial-gradient(circle at 50% 30%, rgba(230, 184, 0, 0.05) 0%, transparent 35%), 
                        repeating-linear-gradient(60deg, transparent, transparent 1px, rgba(255,255,255,0.01) 1px, rgba(255,255,255,0.01) 2px)`
          }}
        />
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-headline mb-md" style={{ color: 'hsl(var(--color-background))' }}>Arthur Co. Cash Bids</h2>
              <p className="text-body mb-xl" style={{ color: 'hsl(var(--color-background))' }}>
                Free Real-time harvest information for growers, by Arthur Companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="#"
                  className="btn btn-primary"
                  style={{ backgroundColor: 'hsl(var(--color-background))', color: 'hsl(var(--color-foreground))' }}
                >
                  Download for iOS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="#"
                  className="btn btn-secondary"
                  style={{ backgroundColor: 'transparent', color: 'hsl(var(--color-background))', borderColor: 'hsl(var(--color-background) / 0.3)' }}
                >
                  Download for Android
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement - Light */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-headline text-center">
                Arthur delivers performance you can measure and people you can trust.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}