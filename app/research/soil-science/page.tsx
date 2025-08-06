import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FlaskConical, Leaf, BarChart3, Microscope } from 'lucide-react'
import Link from "next/link"

export default function SoilSciencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FlaskConical className="h-16 w-16 mx-auto text-amber-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Soil Science Research</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Comprehensive soil health studies and sustainable agriculture research
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Explore Research Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Soil Research Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our soil science research focuses on understanding and improving soil health, nutrient cycling, and sustainable farming practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Microscope className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Microbiome Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advanced study of soil microbial communities and their impact on plant health.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <FlaskConical className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Nutrient Cycling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Research on nutrient availability, uptake, and cycling in agricultural systems.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Leaf className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Carbon Sequestration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Studies on soil carbon storage and climate change mitigation strategies.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Health Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Development of soil health indicators and monitoring systems.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Programs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Active Research Projects</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Soil Microbiome Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis of soil microbial communities to understand their role in plant nutrition, disease suppression, and soil health.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Metagenomic sequencing of soil samples</li>
                  <li>• Functional analysis of microbial communities</li>
                  <li>• Beneficial microbe isolation and characterization</li>
                  <li>• Microbiome-plant interaction studies</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Nutrient Management</h3>
                <p className="text-gray-600 mb-4">
                  Research on optimizing nutrient use efficiency and developing sustainable fertilizer strategies for long-term soil health.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Precision nutrient application research</li>
                  <li>• Organic matter decomposition studies</li>
                  <li>• Nutrient loss mitigation strategies</li>
                  <li>• Biological nitrogen fixation enhancement</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Climate-Smart Agriculture</h3>
                <p className="text-gray-600 mb-4">
                  Developing soil management practices that enhance carbon sequestration and improve resilience to climate change.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Cover crop impact assessment</li>
                  <li>• No-till system optimization</li>
                  <li>• Soil carbon measurement protocols</li>
                  <li>• Water retention improvement strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Advance Soil Science Research</h2>
          <p className="text-xl mb-8">
            Join our soil science research initiatives to develop sustainable agricultural practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-amber-600">
                Research Collaboration
              </Button>
            </Link>
            <Link href="/research-development">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-amber-600">
                Back to R&D Hub
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
