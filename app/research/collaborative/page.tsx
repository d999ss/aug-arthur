import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building2, GraduationCap, Globe } from 'lucide-react'
import Link from "next/link"

export default function CollaborativeResearchPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 mx-auto text-blue-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Collaborative Research</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Partnerships with universities, institutions, and industry leaders
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore Partnerships
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Partnerships</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our collaborative research program brings together leading institutions and industry partners to accelerate agricultural innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>University Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Collaborative research with leading agricultural universities and research institutions.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Building2 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Industry Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Strategic partnerships with agricultural companies and technology providers.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>International Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Global research initiatives addressing worldwide agricultural challenges.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Consortium Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Multi-partner research consortiums tackling complex agricultural problems.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Active Partnerships */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Partnerships</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">North Dakota State University</h3>
                <p className="text-gray-600 mb-4">
                  Long-term partnership focusing on crop breeding, soil health research, and precision agriculture technology development.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Joint breeding programs</li>
                  <li>• Graduate student research projects</li>
                  <li>• Shared research facilities</li>
                  <li>• Technology transfer initiatives</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">USDA Agricultural Research Service</h3>
                <p className="text-gray-600 mb-4">
                  Collaborative research on sustainable agriculture practices, climate adaptation, and food security initiatives.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Climate change adaptation research</li>
                  <li>• Sustainable farming practice development</li>
                  <li>• Food security studies</li>
                  <li>• Policy research and development</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">International Maize and Wheat Improvement Center</h3>
                <p className="text-gray-600 mb-4">
                  Global partnership developing improved crop varieties for developing countries and climate-resilient agriculture.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• International breeding programs</li>
                  <li>• Germplasm exchange</li>
                  <li>• Capacity building initiatives</li>
                  <li>• Technology dissemination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our collaborative approach accelerates innovation and creates value for all partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Shared Resources</h3>
                <p className="text-gray-600 text-sm">Access to specialized equipment, facilities, and expertise across partner organizations.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Accelerated Innovation</h3>
                <p className="text-gray-600 text-sm">Faster development and deployment of new technologies through collaborative efforts.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Sharing</h3>
                <p className="text-gray-600 text-sm">Distributed risk and shared investment in high-impact research projects.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Knowledge Exchange</h3>
                <p className="text-gray-600 text-sm">Cross-pollination of ideas and expertise from diverse research backgrounds.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Impact</h3>
                <p className="text-gray-600 text-sm">Broader reach and impact through international partnerships and networks.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Talent Development</h3>
                <p className="text-gray-600 text-sm">Training and development opportunities for researchers and students.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Research Network</h2>
          <p className="text-xl mb-8">
            Partner with Arthur Companies to advance agricultural research through collaborative innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Partnership Inquiry
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
