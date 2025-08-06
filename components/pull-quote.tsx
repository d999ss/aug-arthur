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
    ? 'p-8 lg:p-12'
    : variant === 'centered'
    ? 'p-6 text-center'
    : 'p-6'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        relative bg-card rounded-2xl shadow-lg border border-border/20 
        ${baseClasses} ${className}
      `}
    >
      {/* Quote Icon */}
      <div className={`
        w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6
        ${variant === 'centered' ? 'mx-auto' : ''}
      `}>
        <Quote className="h-6 w-6 text-primary" />
      </div>

      {/* Quote Text */}
      <blockquote className={`
        text-serif-large text-card-foreground mb-6 italic leading-relaxed
        ${variant === 'large' ? 'text-2xl lg:text-3xl' : 'text-xl'}
      `}>
        "{quote}"
      </blockquote>

      {/* Attribution */}
      <div className={`
        flex items-center gap-4 
        ${variant === 'centered' ? 'justify-center' : ''}
      `}>
        {/* Avatar placeholder */}
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
          <span className="text-lg font-semibold text-primary">
            {author.charAt(0)}
          </span>
        </div>
        
        <div>
          <p className="text-body-medium font-semibold text-card-foreground">
            {author}
          </p>
          {(title || company) && (
            <p className="text-small text-muted-foreground">
              {title && title}
              {title && company && ', '}
              {company && company}
            </p>
          )}
        </div>
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