import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react'
import Link from "next/link"

export default function InnovationIncubatorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-16 w-16 mx-auto text-purple-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Innovation Incubator</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Comprehensive incubation program for agricultural innovations
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Apply to Incubator
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Incubator Program</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive incubation program provides funding, mentorship, and resources to promising agricultural innovations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Idea Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Support for early-stage concept development and validation.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Access to experienced mentors and industry experts.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Funding Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Seed funding and investment readiness preparation.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Target className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Market Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Connections to customers, partners, and distribution channels.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Program Structure</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">12-Month Accelerated Program</h3>
                <p className="text-gray-600 mb-4">
                  Intensive 12-month program designed to accelerate agricultural innovations from concept to market-ready solutions.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Structured curriculum and milestones</li>
                  <li>• Weekly mentorship sessions</li>
                  <li>• Access to research facilities</li>
                  <li>• Investor pitch preparation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Resources and Support</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive support including funding, facilities, expertise, and network access to maximize success potential.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Up to $250K in seed funding</li>
                  <li>• Dedicated workspace and labs</li>
                  <li>• Legal and IP support</li>
                  <li>• Marketing and business development</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Metrics</h3>
                <p className="text-gray-600 mb-4">
                  Clear success metrics and graduation criteria to ensure program effectiveness and startup readiness.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Product development milestones</li>
                  <li>• Customer validation metrics</li>
                  <li>• Revenue and growth targets</li>
                  <li>• Investment readiness assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Accelerate Your Agricultural Innovation</h2>
          <p className="text-xl mb-8">
            Join our incubator program to transform your agricultural innovation into a successful business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                Apply Now
              </Button>
            </Link>
            <Link href="/research-development">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                Back to R&D Hub
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
