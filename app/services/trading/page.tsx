import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, TrendingUp, BarChart3, Shield } from 'lucide-react'
import Link from "next/link"

export default function TradingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-16 w-16 mx-auto text-indigo-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Global Trading</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Global commodity trading and risk management
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Explore Trading Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trading Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Commodity Trading</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Arthur Companies leverages decades of market expertise and global relationships to provide comprehensive commodity trading and risk management services for agricultural products worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Global Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Access to international markets and trading opportunities worldwide.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Expert market analysis and trading insights for informed decisions.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive risk management strategies and hedging solutions.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Portfolio Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Professional portfolio management and trading execution services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trading Solutions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trading Solutions & Services</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Commodity Trading</h3>
                <p className="text-gray-600 mb-4">
                  Professional commodity trading services across major agricultural markets, leveraging our extensive network and market expertise to optimize trading outcomes.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Traded Commodities</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Corn and corn products</li>
                      <li>• Soybeans and soybean meal</li>
                      <li>• Wheat and wheat products</li>
                      <li>• Specialty grains and oilseeds</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Trading Services</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Spot market transactions</li>
                      <li>• Forward contract execution</li>
                      <li>• Basis trading strategies</li>
                      <li>• Cross-commodity arbitrage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Management Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive risk management services to help protect against price volatility and market uncertainty through strategic hedging and portfolio diversification.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Futures and options hedging strategies</li>
                  <li>• Price risk assessment and modeling</li>
                  <li>• Portfolio optimization and diversification</li>
                  <li>• Custom risk management solutions</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Access to comprehensive market intelligence and analysis to support informed trading decisions and strategic planning across global agricultural markets.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Daily market reports and analysis</li>
                  <li>• Supply and demand forecasting</li>
                  <li>• Weather and crop condition monitoring</li>
                  <li>• Global trade flow analysis</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Logistics & Execution</h3>
                <p className="text-gray-600 mb-4">
                  Complete logistics coordination and trade execution services, ensuring seamless delivery and settlement of commodity transactions worldwide.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Global logistics coordination</li>
                  <li>• Quality inspection and certification</li>
                  <li>• Documentation and compliance</li>
                  <li>• Settlement and payment processing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Navigate Global Markets with Confidence</h2>
          <p className="text-xl mb-8">
            Partner with Arthur Companies for expert commodity trading and risk management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-600">
                Discuss Trading Needs
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-600">
                Request Market Analysis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
