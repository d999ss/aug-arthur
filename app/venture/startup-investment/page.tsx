import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, TrendingUp, Target, DollarSign } from 'lucide-react'
import Link from "next/link"

export default function StartupInvestmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Rocket className="h-16 w-16 mx-auto text-orange-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Startup Investment</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Direct equity investments in early-stage agtech companies
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Submit Investment Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We invest in early-stage agricultural technology companies with disruptive innovations and strong growth potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Target className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Seed Stage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Early-stage investments in promising agricultural technology startups.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Series A</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Growth capital for proven agtech companies scaling their operations.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <DollarSign className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Follow-on Rounds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Continued investment in portfolio companies showing strong performance.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Rocket className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Strategic Investments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Investments aligned with Arthur Companies' strategic business objectives.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Investment Criteria</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Innovation</h3>
                <p className="text-gray-600 mb-4">
                  We seek companies developing breakthrough technologies that address significant challenges in agriculture.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Novel technological approaches</li>
                  <li>• Intellectual property protection</li>
                  <li>• Scalable technology platforms</li>
                  <li>• Competitive advantages</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Opportunity</h3>
                <p className="text-gray-600 mb-4">
                  Companies targeting large, growing markets with clear value propositions for agricultural stakeholders.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Significant market size and growth potential</li>
                  <li>• Clear customer pain points</li>
                  <li>• Proven market demand</li>
                  <li>• Scalable business models</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Excellence</h3>
                <p className="text-gray-600 mb-4">
                  Strong founding teams with relevant experience, domain expertise, and the ability to execute their vision.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Experienced leadership team</li>
                  <li>• Agricultural industry knowledge</li>
                  <li>• Technical expertise</li>
                  <li>• Execution track record</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Agtech Startup?</h2>
          <p className="text-xl mb-8">
            Partner with Arthur Companies for strategic investment and industry expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600">
                Submit Proposal
              </Button>
            </Link>
            <Link href="/research-development">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600">
                Back to R&D Hub
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
