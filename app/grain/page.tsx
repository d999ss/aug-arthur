import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Truck, Award } from 'lucide-react'

export default function GrainPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-yellow-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Grain Marketing, Grounded in Trust
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              At Arthur, we deliver grain marketing services that combine local knowledge with market insight.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our facilities are built for speed, our team is built for service, and our approach is built around your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                View Local Bids
              </Button>
              <Button size="lg" variant="outline">
                Contact Our Merchandisers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Grain Services</h2>
            <p className="text-lg text-gray-600">Comprehensive grain marketing solutions for modern agriculture</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cash Bids and Hedge Tools</h3>
                <p className="text-gray-600">
                  Live board basis, forward contracts, and a clear view of carry create margin where others see noise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Truck className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">On Farm Pickup and Logistics</h3>
                <p className="text-gray-600">
                  Our fleet and rail network move grain on schedule, cutting wait times and shrink.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialty Contract Programs</h3>
                <p className="text-gray-600">
                  Earn premiums through identity preserved corn, food grade soybeans, and sustainable barley programs verified at every step.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Market Your Grain?</h2>
          <p className="text-xl mb-8">Get competitive bids and expert guidance from our grain marketing team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-amber-600">
              View Current Bids
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-amber-600">
              Contact Merchandiser
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
