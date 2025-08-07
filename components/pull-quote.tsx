'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface PullQuoteProps {
  quote: string
  author: string
  title?: string
  company?: string
  variant?: 'default' | 'large' | 'centered'
  className?: string
}

export function PullQuote({ 
  quote, 
  author, 
  title, 
  company, 
  variant = 'default',
  className = '' 
}: PullQuoteProps) {
  const baseClasses = variant === 'large' 
    ? 'py-16 px-10 lg:py-20 lg:px-16'
    : variant === 'centered'
    ? 'py-8 px-6 text-center'
    : 'py-6 px-6'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`pull-quote ${className}`}
    >
      {/* Quote Text - Design System Style */}
      <blockquote className={`
        pull-quote-text
        ${variant === 'centered' ? 'text-center' : ''}
      `}>
        "{quote}"
      </blockquote>

      {/* Attribution - Anthropic Style */}
      <div className={`
        ${variant === 'centered' ? 'text-center' : ''}
      `}>
        <p className="pull-quote-attribution">
          {author}{title && `, ${title}`}{company && `, ${company}`}
        </p>
      </div>
    </motion.div>
  )
}

// Testimonial Grid Component
export function TestimonialGrid({ testimonials }: { 
  testimonials: Array<{
    quote: string
    author: string
    title?: string
    company?: string
  }>
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <PullQuote
            quote={testimonial.quote}
            author={testimonial.author}
            title={testimonial.title}
            company={testimonial.company}
          />
        </motion.div>
      ))}
    </div>
  )
}