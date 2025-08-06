import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, Users, BarChart3 } from 'lucide-react'
import Link from "next/link"

export default function PortfolioManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="h-16 w-16 mx-auto text-emerald-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Portfolio Management</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Active portfolio management and strategic guidance for venture investments
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Learn About Our Approach
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Management Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Management Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our active portfolio management approach maximizes value creation and growth potential for all investments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Target className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Strategic Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Strategic advisory services and board-level guidance for portfolio companies.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Operational Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Hands-on operational support and expertise sharing across portfolio.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Performance Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive performance tracking and KPI monitoring systems.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Growth Acceleration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Value-add services to accelerate growth and market expansion.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Management Approach */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Management Approach</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Active Value Creation</h3>
                <p className="text-gray-600 mb-4">
                  Hands-on approach to value creation through strategic guidance, operational improvements, and growth initiatives.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Strategic planning and execution</li>
                  <li>• Business model optimization</li>
                  <li>• Market expansion strategies</li>
                  <li>• Operational efficiency improvements</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Network Leverage</h3>
                <p className="text-gray-600 mb-4">
                  Leveraging our extensive network of industry contacts, partners, and resources to benefit portfolio companies.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Customer introductions and partnerships</li>
                  <li>• Supplier and vendor connections</li>
                  <li>• Talent acquisition support</li>
                  <li>• Follow-on funding facilitation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Management</h3>
                <p className="text-gray-600 mb-4">
                  Proactive risk identification and mitigation strategies to protect and enhance portfolio value.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Regular performance reviews</li>
                  <li>• Risk assessment and mitigation</li>
                  <li>• Crisis management support</li>
                  <li>• Exit strategy planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Maximize Your Investment Potential</h2>
          <p className="text-xl mb-8">
            Partner with Arthur Companies for active portfolio management and strategic value creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600">
                Portfolio Discussion
              </Button>
            </Link>
            <Link href="/research-development">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600">
                Back to R&D Hub
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
