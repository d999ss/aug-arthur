import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, MapPin, Network, Handshake } from 'lucide-react'
import Link from "next/link"

export default function GlobalPartnershipsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-16 w-16 mx-auto text-primary mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Global Partnerships</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              International venture partnerships and cross-border investments
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Global Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">International Presence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our global partnership network spans multiple continents, connecting agricultural innovations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>North America</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Strategic partnerships across the United States and Canada.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>South America</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Growing presence in Brazil, Argentina, and other key markets.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Network className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Europe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Partnerships with European agtech companies and research institutions.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Handshake className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Asia-Pacific</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Emerging partnerships in Australia, India, and Southeast Asia.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">International Partnership Models</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-Border Investments</h3>
                <p className="text-gray-600 mb-4">
                  Direct investments in international agricultural technology companies with global market potential.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• International venture capital investments</li>
                  <li>• Cross-border joint ventures</li>
                  <li>• Technology licensing agreements</li>
                  <li>• Market entry partnerships</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Innovation Networks</h3>
                <p className="text-gray-600 mb-4">
                  Collaborative networks connecting agricultural innovators, researchers, and entrepreneurs worldwide.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• International research collaborations</li>
                  <li>• Global startup accelerator programs</li>
                  <li>• Cross-cultural innovation exchanges</li>
                  <li>• Multinational project consortiums</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Development Partnerships</h3>
                <p className="text-gray-600 mb-4">
                  Strategic partnerships to help portfolio companies expand into new international markets.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Local market expertise and connections</li>
                  <li>• Regulatory and compliance support</li>
                  <li>• Distribution channel development</li>
                  <li>• Cultural adaptation strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Expand Your Global Reach</h2>
          <p className="text-xl mb-8">
            Partner with Arthur Companies to access international markets and global innovation networks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Global Partnership Inquiry
              </Button>
            </Link>
            <Link href="/research-development">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Back to R&D Hub
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
