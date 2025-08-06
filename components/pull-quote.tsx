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
    ? 'py-16 px-8 lg:px-16'
    : variant === 'centered'
    ? 'py-12 px-6 text-center'
    : 'py-8 px-6'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        relative bg-card rounded-3xl border border-border/10
        ${baseClasses} ${className}
      `}
    >
      {/* Quote Text - Anthropic Style */}
      <blockquote className={`
        text-serif-large text-card-foreground leading-relaxed mb-8
        ${variant === 'large' 
          ? 'text-3xl lg:text-4xl font-light' 
          : 'text-2xl lg:text-3xl font-light'
        }
        ${variant === 'centered' ? 'text-center' : ''}
      `}>
        "{quote}"
      </blockquote>

      {/* Attribution - Simple & Clean */}
      <div className={`
        ${variant === 'centered' ? 'text-center' : ''}
      `}>
        <p className="text-body font-medium text-card-foreground mb-1">
          {author}
        </p>
        {(title || company) && (
          <p className="text-body text-muted-foreground">
            {title && title}
            {title && company && ', '}
            {company && company}
          </p>
        )}
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