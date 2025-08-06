'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface FuturesContract {
  contract: string
  last: number
  change: number
  open: number
  high: number
  low: number
  updated: string
}

interface FuturesData {
  corn: FuturesContract[]
  soybeans: FuturesContract[]
  wheat: FuturesContract[]
}

// Mock futures data - in production this would come from a real API
const generateMockFuturesData = (): FuturesData => {
  const months = ['Dec 25', 'Mar 26', 'May 26', 'Jul 26', 'Sep 26', 'Dec 26']
  
  const generateContracts = (basePrice: number, symbol: string): FuturesContract[] => {
    return months.map((month, index) => {
      const variance = (Math.random() - 0.5) * 0.5
      const last = basePrice + variance + (index * 0.05)
      const change = (Math.random() - 0.5) * 0.15
      const open = last - (Math.random() - 0.5) * 0.05
      
      return {
        contract: `${symbol} ${month}`,
        last: Number(last.toFixed(4)),
        change: Number(change.toFixed(2)),
        open: Number(open.toFixed(4)),
        high: Number((last + Math.random() * 0.05).toFixed(4)),
        low: Number((last - Math.random() * 0.05).toFixed(4)),
        updated: new Date(Date.now() - Math.random() * 3600000).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      }
    })
  }

  return {
    corn: generateContracts(4.19, 'Corn'),
    soybeans: generateContracts(10.25, 'Soybeans'),
    wheat: generateContracts(5.84, 'Wheat')
  }
}

export function FuturesPricing() {
  const [futuresData, setFuturesData] = useState<FuturesData | null>(null)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    const updateData = () => {
      setFuturesData(generateMockFuturesData())
      setLastUpdated(new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      }))
    }

    // Initial load
    updateData()

    // Update every 30 seconds
    const interval = setInterval(updateData, 30000)

    return () => clearInterval(interval)
  }, [])

  if (!futuresData) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-muted rounded mb-4"></div>
        <div className="space-y-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-12 bg-muted rounded"></div>
          ))}
        </div>
      </div>
    )
  }

  const formatChange = (change: number) => {
    const formatted = Math.abs(change).toFixed(2)
    return change >= 0 ? `+${formatted}` : `-${formatted}`
  }

  const ChangeIndicator = ({ change }: { change: number }) => (
    <span className={change >= 0 ? 'text-green-600' : 'text-red-600'}>
      {formatChange(change)}
    </span>
  )

  const ContractTable = ({ title, contracts }: { title: string, contracts: FuturesContract[] }) => (
    <div className="mb-8">
      <h4 className="text-lg font-medium text-foreground mb-4">{title}</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/20">
              <th className="text-left py-2 px-3 font-medium text-muted-foreground">Contract</th>
              <th className="text-right py-2 px-3 font-medium text-muted-foreground">Last</th>
              <th className="text-right py-2 px-3 font-medium text-muted-foreground">Change</th>
              <th className="text-right py-2 px-3 font-medium text-muted-foreground">Open</th>
              <th className="text-right py-2 px-3 font-medium text-muted-foreground">High</th>
              <th className="text-right py-2 px-3 font-medium text-muted-foreground">Low</th>
              <th className="text-right py-2 px-3 font-medium text-muted-foreground">Updated</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract, index) => (
              <motion.tr 
                key={contract.contract}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-border/10 hover:bg-muted/20 transition-colors"
              >
                <td className="py-3 px-3 font-medium text-foreground">{contract.contract}</td>
                <td className="py-3 px-3 text-right font-mono text-foreground">{contract.last}</td>
                <td className="py-3 px-3 text-right font-mono">
                  <ChangeIndicator change={contract.change} />
                </td>
                <td className="py-3 px-3 text-right font-mono text-muted-foreground">{contract.open}</td>
                <td className="py-3 px-3 text-right font-mono text-muted-foreground">{contract.high}</td>
                <td className="py-3 px-3 text-right font-mono text-muted-foreground">{contract.low}</td>
                <td className="py-3 px-3 text-right text-xs text-muted-foreground">{contract.updated}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Market data updated periodically. Last updated: {lastUpdated}
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-muted-foreground">Live</span>
        </div>
      </div>

      <ContractTable title="Corn" contracts={futuresData.corn} />
      <ContractTable title="Soybeans" contracts={futuresData.soybeans} />
      <ContractTable title="Wheat" contracts={futuresData.wheat} />

      <div className="pt-4 border-t border-border/20">
        <p className="text-xs text-muted-foreground">
          Market data provided for informational purposes only. Information is provided 'as is' and solely for informational purposes, not for trading purposes or advice.
        </p>
      </div>
    </div>
  )
}