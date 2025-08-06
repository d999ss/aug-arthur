import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Handshake, Network, Target } from 'lucide-react'
import Link from "next/link"

export default function CorporateVenturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Building2 className="h-16 w-16 mx-auto text-blue-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Corporate Ventures</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Strategic partnerships and joint ventures with established companies
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore Partnership Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Models</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We create strategic partnerships with established companies to accelerate innovation and market adoption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Handshake className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Joint Ventures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Collaborative ventures combining resources and expertise for mutual benefit.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Network className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Strategic Alliances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Long-term partnerships for technology development and market expansion.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Innovation Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Collaborative innovation centers for breakthrough technology development.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Building2 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Corporate Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Strategic partnerships with industry leaders and Fortune 500 companies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Active Ventures */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Corporate Ventures</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AgTech Innovation Center</h3>
                <p className="text-gray-600 mb-4">
                  Joint innovation center with leading agricultural equipment manufacturer focusing on precision agriculture solutions.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Shared R&D facilities</li>
                  <li>• Joint product development</li>
                  <li>• Technology licensing agreements</li>
                  <li>• Market co-development</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Agriculture Platform</h3>
                <p className="text-gray-600 mb-4">
                  Strategic partnership with technology company to develop comprehensive digital agriculture platform.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Data integration and analytics</li>
                  <li>• Cloud-based solutions</li>
                  <li>• Mobile applications</li>
                  <li>• AI and machine learning</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Agriculture Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Multi-partner venture focused on developing sustainable farming practices and carbon credit programs.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Carbon sequestration projects</li>
                  <li>• Sustainable certification programs</li>
                  <li>• Environmental impact measurement</li>
                  <li>• Farmer incentive programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Create Strategic Value Together</h2>
          <p className="text-xl mb-8">
            Partner with Arthur Companies to accelerate innovation and market success through strategic collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Partnership Discussion
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