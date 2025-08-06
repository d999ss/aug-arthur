import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Users, BarChart3, MapPin } from 'lucide-react'
import Link from "next/link"

export default function AgronomyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sprout className="h-16 w-16 mx-auto text-green-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Agronomy Services</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Local expertise and crop inputs to maximize your yield potential
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Contact Our Agronomists
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Agronomy Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our certified agronomists combine decades of local experience with cutting-edge technology to help you make informed decisions that maximize your farm's productivity and profitability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Crop Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Personalized crop management recommendations based on your specific fields and goals.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Yield Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Detailed yield mapping and analysis to identify opportunities for improvement.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Sprout className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Seed Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Expert guidance on variety selection based on local conditions and market demands.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <MapPin className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Field Scouting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Regular field monitoring for pests, diseases, and nutrient deficiencies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Agronomy Services</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Crop Planning & Management</h3>
                <p className="text-gray-600 mb-4">
                  Work with our certified agronomists to develop comprehensive crop plans tailored to your operation. We consider soil conditions, weather patterns, market outlook, and your specific goals to create strategies that maximize both yield and profitability.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Crop rotation planning</li>
                  <li>• Planting date optimization</li>
                  <li>• Population and spacing recommendations</li>
                  <li>• Harvest timing guidance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nutrient Management</h3>
                <p className="text-gray-600 mb-4">
                  Optimize your fertilizer program with soil testing, tissue analysis, and precision application recommendations. Our agronomists help you apply the right nutrients at the right time and rate for maximum efficiency.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Soil sampling and analysis</li>
                  <li>• Fertilizer recommendations</li>
                  <li>• Variable rate application mapping</li>
                  <li>• Micronutrient programs</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pest & Disease Management</h3>
                <p className="text-gray-600 mb-4">
                  Protect your crops with integrated pest management strategies. Our team provides regular scouting, threshold monitoring, and treatment recommendations to minimize losses while optimizing input costs.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Regular field scouting</li>
                  <li>• Pest identification and monitoring</li>
                  <li>• Treatment threshold recommendations</li>
                  <li>• Resistance management strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Maximize Your Yield?</h2>
          <p className="text-xl mb-8">
            Connect with our agronomy team to develop a customized crop management plan for your operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/locations">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600">
                Find Your Local Agronomist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
