import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Leaf, Recycle, Wind } from 'lucide-react'
import Link from "next/link"

export default function SustainabilityResearchPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Lightbulb className="h-16 w-16 mx-auto text-primary mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Sustainability Research</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Environmental stewardship and sustainable farming practice development
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join Sustainability Initiative
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sustainability Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our sustainability research develops environmentally responsible farming practices that protect natural resources while maintaining productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Leaf className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Carbon Sequestration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Research on soil carbon storage and climate change mitigation strategies.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Recycle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Resource Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Optimization of water, nutrient, and energy use in agricultural systems.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Wind className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Emission Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Strategies to reduce greenhouse gas emissions from farming operations.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Regenerative Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Development of regenerative agriculture techniques and systems.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Programs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sustainability Projects</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Climate-Smart Agriculture Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive research program developing farming practices that adapt to climate change while reducing environmental impact.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Carbon footprint assessment and reduction</li>
                  <li>• Climate adaptation strategies</li>
                  <li>• Resilient cropping systems</li>
                  <li>• Weather risk management</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Water Conservation Research</h3>
                <p className="text-gray-600 mb-4">
                  Advanced research on water-efficient farming practices and technologies to optimize water use and protect water resources.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Precision irrigation systems</li>
                  <li>• Drought-resistant crop varieties</li>
                  <li>• Water quality monitoring</li>
                  <li>• Watershed management practices</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Biodiversity Enhancement Program</h3>
                <p className="text-gray-600 mb-4">
                  Research on promoting biodiversity in agricultural landscapes through habitat creation and sustainable farming practices.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Pollinator habitat development</li>
                  <li>• Beneficial insect conservation</li>
                  <li>• Crop rotation optimization</li>
                  <li>• Integrated pest management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Lead Sustainable Agriculture Research</h2>
          <p className="text-xl mb-8">
            Collaborate with our sustainability team to develop environmentally responsible farming solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Sustainability Partnership
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
