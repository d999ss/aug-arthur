'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import Image from 'next/image'

interface RoundedImageProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

interface RoundedVideoProps {
  src: string
  poster?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  autoPlay?: boolean
}

const sizeClasses = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'w-64 h-64',
  xl: 'w-80 h-80'
}

export function RoundedImage({ src, alt, size = 'md', className = '' }: RoundedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${sizeClasses[size]} rounded-3xl overflow-hidden shadow-lg ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={320}
        height={320}
        className="w-full h-full object-cover"
      />
    </motion.div>
  )
}

export function RoundedVideo({ src, poster, size = 'md', className = '', autoPlay = false }: RoundedVideoProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [showControls, setShowControls] = useState(false)

  const togglePlay = () => {
    const video = document.getElementById('rounded-video') as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative ${sizeClasses[size]} rounded-3xl overflow-hidden shadow-lg ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        id="rounded-video"
        className="w-full h-full object-cover"
        poster={poster}
        muted
        loop
        playsInline
        autoPlay={autoPlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play/Pause Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showControls ? 1 : 0 }}
        className="absolute inset-0 bg-black/20 flex items-center justify-center"
      >
        <button
          onClick={togglePlay}
          className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6 text-gray-800" />
          ) : (
            <Play className="h-6 w-6 text-gray-800 ml-1" />
          )}
        </button>
      </motion.div>
    </motion.div>
  )
}

// Placeholder component for demo videos/images
export function PlaceholderMedia({ type, size = 'md', className = '' }: { 
  type: 'image' | 'video'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string 
}) {
  if (type === 'video') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`${sizeClasses[size]} rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center ${className}`}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-2">
            <Play className="h-6 w-6 text-gray-800 ml-1" />
          </div>
          <p className="text-sm text-white/90">Agricultural Video</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${sizeClasses[size]} rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-muted to-muted/70 flex items-center justify-center ${className}`}
    >
      <div className="text-center text-muted-foreground">
        <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
          <span className="text-lg">🌾</span>
        </div>
        <p className="text-sm">Farm Image</p>
      </div>
    </motion.div>
  )
}