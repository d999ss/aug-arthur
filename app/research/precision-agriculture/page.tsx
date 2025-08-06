import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Satellite, MapPin, BarChart3 } from 'lucide-react'
import Link from "next/link"

export default function PrecisionAgricultureResearchPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Cpu className="h-16 w-16 mx-auto text-blue-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Precision Agriculture Research</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Development of precision farming technologies and data analytics
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Join Our Research Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Development</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our precision agriculture research develops cutting-edge technologies for optimized crop management and resource efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Satellite className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Remote Sensing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advanced satellite and drone imaging for crop monitoring and analysis.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <MapPin className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>GPS Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">High-precision GPS systems for accurate field operations and mapping.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Data Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advanced algorithms for agricultural data processing and decision support.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Cpu className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>IoT Sensors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Internet of Things sensors for real-time field monitoring and automation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Programs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Initiatives</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Sensor Networks</h3>
                <p className="text-gray-600 mb-4">
                  Development of wireless sensor networks for continuous monitoring of soil conditions, weather, and crop health.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Soil moisture and temperature sensors</li>
                  <li>• Weather station integration</li>
                  <li>• Plant health monitoring devices</li>
                  <li>• Automated irrigation control systems</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning Applications</h3>
                <p className="text-gray-600 mb-4">
                  Advanced AI and machine learning algorithms for predictive analytics and automated decision-making in agriculture.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Yield prediction models</li>
                  <li>• Disease detection algorithms</li>
                  <li>• Optimal planting recommendations</li>
                  <li>• Resource optimization systems</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Autonomous Systems</h3>
                <p className="text-gray-600 mb-4">
                  Research and development of autonomous agricultural machinery and robotic systems for precision farming operations.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Autonomous tractor navigation</li>
                  <li>• Robotic crop monitoring</li>
                  <li>• Precision application systems</li>
                  <li>• Automated harvesting technology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pioneer Precision Agriculture Technology</h2>
          <p className="text-xl mb-8">
            Collaborate with our research team to develop the next generation of precision farming solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Technology Partnership
              </Button>
            </Link>
            <Link href="/research-development">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Back to R&D Hub
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
