import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Factory, Shield, Award, Truck } from 'lucide-react'
import Link from "next/link"

export default function PetFoodManufacturingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Factory className="h-16 w-16 mx-auto text-purple-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Pet Food Manufacturing</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Contract manufacturing for premium pet food brands
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Pet Food Manufacturing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Arthur Companies provides comprehensive contract manufacturing services for premium pet food brands. Our state-of-the-art facilities and quality systems ensure your products meet the highest standards for pet nutrition and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Factory className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Modern production lines for dry, wet, and specialty pet food products.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Food Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">HACCP certified facilities with comprehensive food safety protocols.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Award className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Quality Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Rigorous testing and quality assurance throughout the production process.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Truck className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Packaging & Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Complete packaging solutions and distribution network management.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Manufacturing Capabilities</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dry Pet Food Production</h3>
                <p className="text-gray-600 mb-4">
                  Complete dry pet food manufacturing from ingredient receiving through packaging, with capacity for both standard and premium formulations.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Production Capabilities</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Extruded kibble production</li>
                      <li>• Baked treat manufacturing</li>
                      <li>• Custom shapes and sizes</li>
                      <li>• Coating and flavoring systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quality Features</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Nutritional analysis verification</li>
                      <li>• Pathogen testing protocols</li>
                      <li>• Shelf-life validation</li>
                      <li>• Palatability testing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialty Products</h3>
                <p className="text-gray-600 mb-4">
                  Specialized manufacturing capabilities for premium and therapeutic pet food products, including grain-free, organic, and prescription diet formulations.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Grain-free and limited ingredient diets</li>
                  <li>• Organic certified production lines</li>
                  <li>• Therapeutic and prescription diets</li>
                  <li>• Raw and freeze-dried products</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Private Label Services</h3>
                <p className="text-gray-600 mb-4">
                  Complete private label solutions from product development through market launch, including formulation, packaging design, and regulatory compliance support.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Custom formulation development</li>
                  <li>• Packaging design and sourcing</li>
                  <li>• Regulatory compliance assistance</li>
                  <li>• Market launch support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bring Your Pet Food Vision to Life</h2>
          <p className="text-xl mb-8">
            Partner with Arthur Companies for reliable, high-quality pet food manufacturing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                Schedule Facility Tour
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                Request Capabilities Brochure
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
