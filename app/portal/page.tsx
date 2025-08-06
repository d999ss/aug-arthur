'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff,
  LogIn,
  FileText,
  TrendingUp,
  Package,
  Calendar,
  CreditCard,
  Download,
  Bell
} from 'lucide-react'

export default function ProducerPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login
    if (email && password) {
      setIsLoggedIn(true)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/20 to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 card-refined"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-headline mb-2">Producer Portal</h1>
            <p className="text-body text-muted-foreground">
              Access your account, contracts, and statements
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="john@farm.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 pr-12 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <LogIn className="h-4 w-4" />
              Sign In
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <a href="/contact" className="text-primary hover:underline">
                Contact us to get started
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  // Producer Dashboard
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-y bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-display mb-4">Welcome back, John</h1>
              <p className="text-body-large text-muted-foreground">
                Smith Family Farms • Account #12345
              </p>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="btn-secondary"
            >
              Sign Out
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-y">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Active Contracts', value: '12', icon: FileText, color: 'text-blue-600' },
              { label: 'YTD Deliveries', value: '45,230 bu', icon: Package, color: 'text-green-600' },
              { label: 'Avg Price', value: '$7.82/bu', icon: TrendingUp, color: 'text-primary' },
              { label: 'Pending Settlements', value: '$124,500', icon: CreditCard, color: 'text-purple-600' },
            ].map((stat) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 card-refined"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                    <span className="text-xs text-muted-foreground">+12% MTD</span>
                  </div>
                  <p className="text-2xl font-semibold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 card-refined"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-title">Recent Activity</h2>
                  <a href="#" className="text-sm text-primary hover:underline">View all</a>
                </div>
                
                <div className="space-y-4">
                  {[
                    { date: 'Nov 15', type: 'Delivery', details: 'Corn - 2,500 bu @ Arthur', status: 'Completed' },
                    { date: 'Nov 14', type: 'Contract', details: 'Spring Wheat Forward - 5,000 bu', status: 'Active' },
                    { date: 'Nov 12', type: 'Settlement', details: 'Payment received - $18,750', status: 'Completed' },
                    { date: 'Nov 10', type: 'Delivery', details: 'Soybeans - 1,800 bu @ Page', status: 'Completed' },
                    { date: 'Nov 8', type: 'Price Alert', details: 'Corn reached target price $7.00', status: 'Triggered' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="text-xs text-muted-foreground w-16 flex-shrink-0">{activity.date}</div>
                      <div className="flex-1">
                        <p className="text-sm font-medium mb-1">{activity.type}</p>
                        <p className="text-sm text-muted-foreground">{activity.details}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activity.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        activity.status === 'Active' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 card-refined mb-6"
              >
                <h2 className="text-title mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full btn-primary flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Delivery
                  </button>
                  <button className="w-full btn-secondary flex items-center justify-center gap-2">
                    <FileText className="h-4 w-4" />
                    View Contracts
                  </button>
                  <button className="w-full btn-secondary flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Statements
                  </button>
                  <button className="w-full btn-secondary flex items-center justify-center gap-2">
                    <Bell className="h-4 w-4" />
                    Price Alerts
                  </button>
                </div>
              </motion.div>

              {/* Market Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 card-refined"
              >
                <h2 className="text-title mb-4">Today's Markets</h2>
                <div className="space-y-3">
                  {[
                    { commodity: 'Corn', price: '$6.85', change: '+0.12' },
                    { commodity: 'Soybeans', price: '$14.32', change: '-0.08' },
                    { commodity: 'Spring Wheat', price: '$8.95', change: '+0.05' },
                  ].map((item) => (
                    <div key={item.commodity} className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.commodity}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{item.price}</span>
                        <span className={`text-xs ${
                          item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="/grain" className="block mt-4 text-sm text-primary hover:underline text-center">
                  View full market data →
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}