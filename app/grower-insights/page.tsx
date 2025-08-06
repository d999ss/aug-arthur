import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Database, CloudRain, Sprout, DollarSign } from 'lucide-react'

export default function GrowerInsightsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Grower Insights</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Data-driven decision tools for modern agriculture
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Access market data, agronomic insights, and powerful analytics to optimize your farming operation.
            </p>
          </div>
        </div>
      </section>

      {/* Bushel Balance Platform */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bushel Balance Platform</h2>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive grain marketing and portfolio management platform designed specifically for modern agricultural operations.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <BarChart3 className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Portfolio Management</h3>
                    <p className="text-gray-600 text-sm">Track and manage your grain marketing positions across multiple commodities and locations.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <TrendingUp className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Price Alerts</h3>
                    <p className="text-gray-600 text-sm">Set custom price alerts and receive notifications when target prices are reached.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <BarChart3 className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Market Analysis</h3>
                    <p className="text-gray-600 text-sm">Access detailed market analysis and forecasting tools to inform your marketing decisions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Database className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Contract Management</h3>
                    <p className="text-gray-600 text-sm">Manage all your grain contracts in one centralized platform with automated tracking.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="w-full h-64 bg-white rounded-lg shadow-inner flex items-center justify-center">
                <BarChart3 className="h-24 w-24 text-emerald-600" />
              </div>
              <p className="text-gray-600 mt-4">Bushel Balance Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Data */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open-Source Agricultural Data</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Free access to comprehensive agricultural datasets to support research, analysis, and decision-making across the farming community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <DollarSign className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Market Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive commodity pricing, futures data, and market analysis</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CloudRain className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Weather</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Historical and current weather data with agricultural impact analysis</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Sprout className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Crop Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Yield data, variety performance, and agronomic insights</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Database className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Soil Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Soil testing results, nutrient levels, and health indicators</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Insights & Trial Results */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle className="text-2xl">Market Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">Real-time market analysis and forecasting tools</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Price trends and analysis</li>
                  <li>• Supply and demand analysis</li>
                  <li>• Weather impact assessment</li>
                  <li>• Global market factors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle className="text-2xl">Trial Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">Data from field trials and research studies</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Variety performance data</li>
                  <li>• Input effectiveness studies</li>
                  <li>• Technology validation results</li>
                  <li>• Best practices recommendations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Grain Marketing?</h2>
          <p className="text-xl mb-8">
            Join thousands of farmers who trust Bushel Balance to manage their grain marketing and maximize their profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
