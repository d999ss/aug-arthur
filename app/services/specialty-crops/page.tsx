import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Award, BarChart3, Shield } from 'lucide-react'
import Link from "next/link"

export default function SpecialtyCropsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sprout className="h-16 w-16 mx-auto text-emerald-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Specialty Crops</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Identity-preserved grains and specialty crop programs
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Specialty Crop Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Arthur Companies connects growers with premium markets through identity-preserved and specialty crop programs. Earn higher returns by growing crops that meet specific end-user requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Award className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Premium Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Direct connections to premium end-users paying above-market prices.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Identity Preservation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Complete traceability and segregation from field to final destination.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Quality Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive testing to verify quality specifications and standards.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Sprout className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Agronomic Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Expert guidance to help you successfully grow specialty varieties.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Crop Programs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Specialty Programs</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Identity-Preserved Corn</h3>
                <p className="text-gray-600 mb-4">
                  Grow specific corn varieties for food manufacturers requiring particular traits, colors, or characteristics. Our IP corn programs offer premium pricing for qualified production.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Program Types</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• White food-grade corn</li>
                      <li>• High-oil corn varieties</li>
                      <li>• Waxy corn for starch</li>
                      <li>• Non-GMO corn programs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Premium pricing above #2 yellow</li>
                      <li>• Contracted production agreements</li>
                      <li>• Seed and input support</li>
                      <li>• Harvest logistics coordination</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Food-Grade Soybeans</h3>
                <p className="text-gray-600 mb-4">
                  Specialty soybean programs for food manufacturers producing tofu, soymilk, and other soy-based products requiring specific protein and quality characteristics.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• High-protein food-grade varieties</li>
                  <li>• Large hilum soybeans for natto</li>
                  <li>• Clear hilum varieties for tofu</li>
                  <li>• Organic soybean programs</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Barley Programs</h3>
                <p className="text-gray-600 mb-4">
                  Partner with leading brewers and maltsters through our sustainable barley programs, featuring environmentally responsible production practices and premium quality standards.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Malting barley for craft brewers</li>
                  <li>• Sustainable production protocols</li>
                  <li>• Quality testing and certification</li>
                  <li>• Direct brewery partnerships</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Organic Certification Programs</h3>
                <p className="text-gray-600 mb-4">
                  Complete support for organic crop production, from certification assistance through marketing, connecting you with premium organic markets.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Organic certification guidance</li>
                  <li>• Transition period support</li>
                  <li>• Organic input sourcing</li>
                  <li>• Premium organic marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Unlock Premium Crop Values</h2>
          <p className="text-xl mb-8">
            Discover how specialty crop programs can increase your farm's profitability and market opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600">
                Join a Program
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
