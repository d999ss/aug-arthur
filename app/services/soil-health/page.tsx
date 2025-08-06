import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Beaker, TrendingUp, Leaf, BarChart3 } from 'lucide-react'
import Link from "next/link"

export default function SoilHealthPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Beaker className="h-16 w-16 mx-auto text-amber-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Soil Health & Nutrition</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Advanced soil health monitoring and nutrition management programs
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Start Soil Testing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Soil Management</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Healthy soil is the foundation of productive agriculture. Our soil health programs combine advanced testing, biological monitoring, and precision nutrition to optimize your soil's potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Beaker className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Soil Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive soil analysis including pH, nutrients, organic matter, and biological activity.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Nutrient Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Customized fertilizer recommendations based on soil test results and crop requirements.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Leaf className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Biological Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Soil biology assessment and recommendations to enhance microbial activity.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Long-term soil health tracking to measure improvement over time.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Soil Health Programs</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Soil Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Our advanced soil testing goes beyond basic nutrient levels to provide a complete picture of your soil's health and productivity potential.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Chemical Analysis</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• pH and buffer pH</li>
                      <li>• Macro and micronutrients</li>
                      <li>• Cation exchange capacity</li>
                      <li>• Organic matter content</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Physical Properties</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Soil texture analysis</li>
                      <li>• Bulk density measurement</li>
                      <li>• Water infiltration rates</li>
                      <li>• Compaction assessment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Precision Nutrition Management</h3>
                <p className="text-gray-600 mb-4">
                  Optimize your fertilizer investment with precision nutrition programs tailored to your specific soil conditions and crop goals.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Variable rate fertilizer mapping</li>
                  <li>• Timing optimization for maximum uptake</li>
                  <li>• Micronutrient deficiency correction</li>
                  <li>• Organic matter enhancement strategies</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Soil Biology Enhancement</h3>
                <p className="text-gray-600 mb-4">
                  Improve soil biological activity to enhance nutrient cycling, water retention, and overall soil health through targeted biological programs.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Microbial diversity assessment</li>
                  <li>• Biological inoculant recommendations</li>
                  <li>• Cover crop integration strategies</li>
                  <li>• Organic amendment programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Invest in Your Soil's Future</h2>
          <p className="text-xl mb-8">
            Start building healthier, more productive soils with our comprehensive soil health programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-amber-600">
                Schedule Soil Testing
              </Button>
            </Link>
            <Link href="/locations">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-amber-600">
                Find Local Office
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
