'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus, RefreshCw, MapPin } from 'lucide-react'

interface GrainPrice {
  commodity: string
  price: number
  change: number
  changePercent: number
  unit: string
  location: string
  lastUpdated: Date
}

const mockPrices: GrainPrice[] = [
  {
    commodity: 'Corn',
    price: 6.85,
    change: 0.12,
    changePercent: 1.78,
    unit: 'bu',
    location: 'Arthur, ND',
    lastUpdated: new Date(),
  },
  {
    commodity: 'Soybeans',
    price: 14.32,
    change: -0.08,
    changePercent: -0.56,
    unit: 'bu',
    location: 'Arthur, ND',
    lastUpdated: new Date(),
  },
  {
    commodity: 'Spring Wheat',
    price: 8.95,
    change: 0.05,
    changePercent: 0.56,
    unit: 'bu',
    location: 'Arthur, ND',
    lastUpdated: new Date(),
  },
  {
    commodity: 'Winter Wheat',
    price: 7.42,
    change: 0.00,
    changePercent: 0.00,
    unit: 'bu',
    location: 'Arthur, ND',
    lastUpdated: new Date(),
  },
  {
    commodity: 'Barley',
    price: 5.25,
    change: -0.15,
    changePercent: -2.78,
    unit: 'bu',
    location: 'Arthur, ND',
    lastUpdated: new Date(),
  },
]

export function GrainPricing() {
  const [prices, setPrices] = useState<GrainPrice[]>(mockPrices)
  const [selectedLocation, setSelectedLocation] = useState('Arthur, ND')
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastRefresh, setLastRefresh] = useState(new Date())

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prevPrices =>
        prevPrices.map(price => ({
          ...price,
          price: price.price + (Math.random() - 0.5) * 0.1,
          change: (Math.random() - 0.5) * 0.2,
          changePercent: (Math.random() - 0.5) * 3,
          lastUpdated: new Date(),
        }))
      )
      setLastRefresh(new Date())
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const handleRefresh = () => {
    setIsRefreshing(true)
    // Simulate API call
    setTimeout(() => {
      setPrices(prevPrices =>
        prevPrices.map(price => ({
          ...price,
          price: price.price + (Math.random() - 0.5) * 0.1,
          change: (Math.random() - 0.5) * 0.2,
          changePercent: (Math.random() - 0.5) * 3,
          lastUpdated: new Date(),
        }))
      )
      setLastRefresh(new Date())
      setIsRefreshing(false)
    }, 1000)
  }

  const getPriceIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4" />
    if (change < 0) return <TrendingDown className="h-4 w-4" />
    return <Minus className="h-4 w-4" />
  }

  const getPriceColor = (change: number) => {
    if (change > 0) return 'text-green-600'
    if (change < 0) return 'text-red-600'
    return 'text-gray-600'
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-headline mb-2">Cash Grain Bids</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{selectedLocation}</span>
            <span className="text-xs">
              • Updated {lastRefresh.toLocaleTimeString()}
            </span>
          </div>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="btn-secondary flex items-center gap-2"
        >
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh Prices
        </button>
      </div>

      {/* Price Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="wait">
          {prices.map((price, index) => (
            <motion.div
              key={price.commodity}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-6 card-refined hover-lift"
            >
              {/* Commodity Name */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-title">{price.commodity}</h3>
                <div className={`flex items-center gap-1 ${getPriceColor(price.change)}`}>
                  {getPriceIcon(price.change)}
                </div>
              </div>

              {/* Price Display */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-foreground">
                    ${price.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-muted-foreground">/{price.unit}</span>
                </div>
              </div>

              {/* Change Indicators */}
              <div className="flex items-center gap-4 text-sm">
                <div className={`flex items-center gap-1 ${getPriceColor(price.change)}`}>
                  <span>{price.change >= 0 ? '+' : ''}{price.change.toFixed(2)}</span>
                </div>
                <div className={`flex items-center gap-1 ${getPriceColor(price.change)}`}>
                  <span>{price.changePercent >= 0 ? '+' : ''}{price.changePercent.toFixed(2)}%</span>
                </div>
              </div>

              {/* Spark Line (Placeholder for actual chart) */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="h-12 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg flex items-end px-2 py-1">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 mx-0.5"
                      style={{
                        height: `${20 + Math.random() * 80}%`,
                        backgroundColor: `hsl(var(--primary) / ${0.3 + Math.random() * 0.4})`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Market Commentary */}
      <div className="mt-8 p-6 bg-secondary/20 rounded-xl">
        <h3 className="text-title mb-3">Market Commentary</h3>
        <p className="text-body text-muted-foreground">
          Grain markets showed mixed movements today with corn gaining on export demand while soybeans 
          retreated slightly on favorable weather reports. Spring wheat continues to show strength amid 
          quality concerns in competing regions.
        </p>
      </div>
    </div>
  )
}