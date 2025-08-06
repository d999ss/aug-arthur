import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Factory, BarChart3, MapPin } from 'lucide-react'
import Link from "next/link"

export default function WholesaleFertilizerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-amber-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Truck className="h-16 w-16 mx-auto text-yellow-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Wholesale Fertilizer</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Bulk fertilizer distribution and supply chain management
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Fertilizer Distribution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Arthur Companies provides wholesale fertilizer distribution services to retailers, cooperatives, and large farming operations across the region. Our extensive network ensures reliable supply and competitive pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Factory className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Bulk Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Large-capacity storage facilities for dry and liquid fertilizers.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Truck className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Transportation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Dedicated fleet and logistics network for timely delivery.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Supply Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Strategic sourcing and inventory management for optimal availability.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <MapPin className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Regional Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Strategic locations throughout the Northern Plains region.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fertilizer Products & Services</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dry Fertilizer Products</h3>
                <p className="text-gray-600 mb-4">
                  Complete line of dry fertilizer products including straight goods, blends, and specialty formulations for various crop and soil requirements.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Straight Goods</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Urea (46-0-0)</li>
                      <li>• DAP (18-46-0)</li>
                      <li>• MAP (11-52-0)</li>
                      <li>• Potash (0-0-60)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Blended Products</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Custom NPK blends</li>
                      <li>• Micronutrient enhanced</li>
                      <li>• Slow-release formulations</li>
                      <li>• Organic-based blends</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Liquid Fertilizer Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Liquid fertilizer products for efficient application and precise nutrient delivery, including starter fertilizers and foliar feeding solutions.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• UAN solutions (28-0-0, 32-0-0)</li>
                  <li>• Liquid starter fertilizers</li>
                  <li>• Foliar feeding solutions</li>
                  <li>• Custom liquid blends</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Distribution Services</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive distribution services including storage, handling, transportation, and delivery coordination to meet your specific timing and volume requirements.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Seasonal storage programs</li>
                  <li>• Just-in-time delivery</li>
                  <li>• Custom blending services</li>
                  <li>• Emergency supply coordination</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Supply Chain Management</h3>
                <p className="text-gray-600 mb-4">
                  Strategic supply chain management services to optimize your fertilizer procurement, including market analysis, contract negotiation, and risk management.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Market price analysis and forecasting</li>
                  <li>• Contract negotiation and management</li>
                  <li>• Risk management strategies</li>
                  <li>• Inventory optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Optimize Your Fertilizer Supply Chain</h2>
          <p className="text-xl mb-8">
            Partner with Arthur Companies for reliable, cost-effective fertilizer distribution solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-yellow-600">
                Get Pricing
              </Button>
            </Link>
            <Link href="/locations">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-yellow-600">
                Find Distribution Center
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
