import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Rocket, Cpu, BarChart3 } from 'lucide-react'
import Link from "next/link"

export default function TechnologyAccelerationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="h-16 w-16 mx-auto text-yellow-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Technology Acceleration</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Fast-track development for breakthrough agricultural technologies
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                Accelerate Your Technology
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Acceleration Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceleration Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our technology acceleration program fast-tracks the development and commercialization of breakthrough agricultural technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Rocket className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Rapid Prototyping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fast-track prototype development and testing capabilities.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Cpu className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Technology Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive testing and validation of agricultural technologies.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Market Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Real-world testing and market validation programs.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Commercialization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Support for bringing technologies to market quickly and effectively.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Acceleration Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Acceleration Process</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive evaluation of technology potential, market fit, and commercialization readiness.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Technical feasibility analysis</li>
                  <li>• Market opportunity assessment</li>
                  <li>• Competitive landscape review</li>
                  <li>• IP and regulatory evaluation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Development Acceleration</h3>
                <p className="text-gray-600 mb-4">
                  Intensive development support to rapidly advance technologies from concept to market-ready solutions.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Dedicated development resources</li>
                  <li>• Expert technical guidance</li>
                  <li>• Access to testing facilities</li>
                  <li>• Iterative development cycles</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Launch Support</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive support for successful market entry and commercial adoption of accelerated technologies.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Go-to-market strategy development</li>
                  <li>• Customer pilot programs</li>
                  <li>• Sales and marketing support</li>
                  <li>• Partnership facilitation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Accelerate Your Agricultural Innovation</h2>
          <p className="text-xl mb-8">
            Fast-track your technology development with our comprehensive acceleration program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-yellow-600">
                Apply for Acceleration
              </Button>
            </Link>
            <Link href="/research-development">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-yellow-600">
                Back to R&D Hub
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
