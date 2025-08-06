'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FuturesTickerData {
  symbol: string
  price: number
  change: number
  label: string
}

// Mock ticker data generator
const generateTickerData = (): FuturesTickerData[] => {
  const baseData = [
    { symbol: 'ZC', label: 'Corn', basePrice: 4.19 },
    { symbol: 'ZS', label: 'Soybeans', basePrice: 10.25 },
    { symbol: 'ZW', label: 'Wheat', basePrice: 5.84 }
  ]

  return baseData.map(item => {
    const variance = (Math.random() - 0.5) * 0.3
    const price = item.basePrice + variance
    const change = (Math.random() - 0.5) * 0.2
    
    return {
      symbol: item.symbol,
      price: Number(price.toFixed(2)),
      change: Number(change.toFixed(2)),
      label: item.label
    }
  })
}

export function FuturesTicker() {
  const [tickerData, setTickerData] = useState<FuturesTickerData[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const updateData = () => {
      setTickerData(generateTickerData())
    }

    // Initial load
    updateData()

    // Update every 30 seconds
    const dataInterval = setInterval(updateData, 30000)

    // Rotate display every 3 seconds
    const rotateInterval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % 3)
    }, 3000)

    return () => {
      clearInterval(dataInterval)
      clearInterval(rotateInterval)
    }
  }, [])

  if (tickerData.length === 0) return null

  const currentData = tickerData[currentIndex]
  const isPositive = currentData.change >= 0

  return (
    <div className="hidden lg:flex items-center bg-card/50 rounded-lg px-3 py-1.5 min-w-[140px] backdrop-blur-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 w-full"
        >
          {/* Symbol */}
          <div className="text-xs font-mono font-medium text-foreground">
            {currentData.symbol}
          </div>
          
          {/* Price */}
          <div className="text-xs font-mono text-foreground">
            {currentData.price}
          </div>
          
          {/* Change */}
          <div className={`text-xs font-mono ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {isPositive ? '+' : ''}{currentData.change}
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Live indicator */}
      <div className="flex items-center ml-2 pl-2 border-l border-border/30">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}

// Header banner version - animated scrolling ticker
export function FuturesHeaderBanner() {
  const [tickerData, setTickerData] = useState<FuturesTickerData[]>([])

  useEffect(() => {
    const updateData = () => {
      setTickerData(generateTickerData())
    }

    updateData()
    const interval = setInterval(updateData, 30000)
    return () => clearInterval(interval)
  }, [])

  if (tickerData.length === 0) return null

  // Create multiple copies for seamless scrolling
  const tickerItems = [...tickerData, ...tickerData, ...tickerData]

  return (
    <div className="bg-foreground text-background border-b border-background/10 overflow-hidden">
      <div className="h-8 flex items-center">
        <div className="flex items-center animate-ticker whitespace-nowrap">
          {tickerItems.map((data, index) => {
            const isPositive = data.change >= 0
            return (
              <div key={`${data.symbol}-${index}`} className="flex items-center gap-2 mx-8">
                <span className="text-xs font-medium text-background/90">
                  {data.label}
                </span>
                <span className="text-xs font-mono text-background">
                  {data.price}
                </span>
                <span className={`text-xs font-mono ${
                  isPositive ? 'text-green-300' : 'text-red-300'
                }`}>
                  {isPositive ? '+' : ''}{data.change}
                </span>
                <span className="text-xs text-background/50">•</span>
              </div>
            )
          })}
          <div className="flex items-center gap-1 mx-8">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-background/70">LIVE MARKETS</span>
            <span className="text-xs text-background/50">•</span>
          </div>
        </div>
      </div>
    </div>
  )
}