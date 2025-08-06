import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Satellite, MapPin, BarChart3 } from 'lucide-react'
import Link from "next/link"

export default function PrecisionAgriculturePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-16 w-16 mx-auto text-blue-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Precision Agriculture</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              GPS-guided equipment, variable rate application, and precision farming tools
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore Precision Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Precision Technology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Harness the power of GPS, satellite imagery, and data analytics to optimize every aspect of your farming operation with precision agriculture technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Satellite className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>GPS Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Sub-inch accuracy GPS systems for precise field operations and reduced overlap.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <MapPin className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Variable Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Customized application rates based on soil conditions and yield potential.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Yield Mapping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Detailed harvest data collection and analysis for informed decision making.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Remote Sensing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Satellite and drone imagery for crop monitoring and problem identification.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Precision Agriculture Services</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">GPS-Guided Equipment</h3>
                <p className="text-gray-600 mb-4">
                  Maximize efficiency and reduce input costs with GPS-guided tractors, sprayers, and application equipment. Our precision guidance systems ensure accurate field operations with minimal overlap.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Equipment Integration</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Tractor auto-steer systems</li>
                      <li>• Sprayer boom control</li>
                      <li>• Planter section control</li>
                      <li>• Combine guidance systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Reduced operator fatigue</li>
                      <li>• Minimized input waste</li>
                      <li>• Improved field efficiency</li>
                      <li>• Consistent application quality</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Variable Rate Technology</h3>
                <p className="text-gray-600 mb-4">
                  Apply inputs precisely where needed with variable rate technology. Our systems adjust seed, fertilizer, and chemical rates based on soil conditions and yield potential.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Variable rate seeding for optimal plant populations</li>
                  <li>• Precision fertilizer application based on soil tests</li>
                  <li>• Targeted chemical applications for pest management</li>
                  <li>• Custom prescription mapping services</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Management & Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Turn your field data into actionable insights with our comprehensive data management and analytics platform. Track performance, identify trends, and make data-driven decisions.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Yield data collection and analysis</li>
                  <li>• Field performance benchmarking</li>
                  <li>• Multi-year trend analysis</li>
                  <li>• ROI calculations for precision investments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Farm with Precision?</h2>
          <p className="text-xl mb-8">
            Discover how precision agriculture technology can improve your farm's efficiency and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Demo
              </Button>
            </Link>
            <Link href="/locations">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Find Local Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
