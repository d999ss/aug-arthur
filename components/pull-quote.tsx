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
    ? 'py-12 px-8 lg:py-16 lg:px-12'
    : variant === 'centered'
    ? 'py-8 px-6 text-center'
    : 'py-6 px-6'

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
      {/* Quote Text - Exact Anthropic Style */}
      <blockquote className={`
        font-normal text-card-foreground leading-relaxed mb-6
        ${variant === 'large' 
          ? 'text-2xl lg:text-3xl' 
          : 'text-xl lg:text-2xl'
        }
        ${variant === 'centered' ? 'text-center' : ''}
      `}>
        "{quote}"
      </blockquote>

      {/* Attribution - Anthropic Style */}
      <div className={`
        ${variant === 'centered' ? 'text-center' : ''}
      `}>
        <p className="text-sm text-muted-foreground">
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