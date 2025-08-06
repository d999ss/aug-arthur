import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Built on Trust, Driven by Innovation</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Three generations of agricultural leadership in the Northern Plains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about/history">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Our Story
                </Button>
              </Link>
              <Link href="/about/leadership">
                <Button size="lg" variant="outline">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">118+</h3>
              <p className="text-gray-600">Years in Business</p>
              <p className="text-sm text-gray-500 mt-1">Serving farmers since 1906</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">6</h3>
              <p className="text-gray-600">Locations</p>
              <p className="text-sm text-gray-500 mt-1">Strategic locations across North Dakota</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">200+</h3>
              <p className="text-gray-600">Employees</p>
              <p className="text-sm text-gray-500 mt-1">Dedicated agricultural professionals</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">$500M+</h3>
              <p className="text-gray-600">Annual Revenue</p>
              <p className="text-sm text-gray-500 mt-1">Supporting local agricultural economy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Company</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Arthur Companies is a family-owned agricultural business that has been serving the Northern Plains since
              1906. We combine traditional agricultural expertise with modern technology and innovation to provide
              comprehensive solutions for farmers, processors, and partners across the agricultural value chain.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the leaders driving Arthur Companies forward</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">John Arthur</h3>
                <p className="text-green-600 font-medium mb-3">CEO</p>
                <p className="text-gray-600 text-sm">
                  Fourth-generation leader with over 25 years of experience in agricultural business and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Mitchell</h3>
                <p className="text-green-600 font-medium mb-3">COO</p>
                <p className="text-gray-600 text-sm">
                  Oversees daily operations with 18 years at Arthur and deep expertise in supply chain optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Michael Chen</h3>
                <p className="text-green-600 font-medium mb-3">CTO</p>
                <p className="text-gray-600 text-sm">
                  Leads innovation and technology development with expertise in agricultural engineering and data
                  science.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/about/leadership">
              <Button className="bg-green-600 hover:bg-green-700">View Full Leadership Team</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
