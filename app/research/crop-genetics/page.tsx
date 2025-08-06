import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dna, Microscope, Sprout, BarChart3 } from 'lucide-react'
import Link from "next/link"

export default function CropGeneticsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Dna className="h-16 w-16 mx-auto text-primary mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Crop Genetics & Breeding</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Advanced research in plant genetics, breeding, and biotechnology
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Partner With Our Research Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our crop genetics research program develops next-generation varieties with improved yield, disease resistance, and environmental adaptation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Dna className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Genetic Mapping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advanced genomic analysis and trait mapping for crop improvement programs.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Microscope className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Molecular Breeding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Marker-assisted selection and genomic breeding technologies.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Sprout className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Trait Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Development of improved traits for yield, quality, and stress tolerance.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Field Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive field trials and performance evaluation programs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Programs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Research Programs</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Yield Enhancement Program</h3>
                <p className="text-gray-600 mb-4">
                  Developing high-yielding crop varieties through advanced breeding techniques and genetic analysis to maximize farmer profitability.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Quantitative trait loci (QTL) mapping for yield components</li>
                  <li>• Genomic selection for complex yield traits</li>
                  <li>• Multi-environment testing and stability analysis</li>
                  <li>• Hybrid development and heterosis utilization</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Disease Resistance Research</h3>
                <p className="text-gray-600 mb-4">
                  Creating crop varieties with enhanced resistance to major diseases, reducing the need for chemical inputs and improving sustainability.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Pathogen screening and resistance gene identification</li>
                  <li>• Durable resistance breeding strategies</li>
                  <li>• Gene pyramiding for multiple disease resistance</li>
                  <li>• Host-pathogen interaction studies</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Climate Adaptation Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Developing climate-resilient varieties that can thrive under changing environmental conditions and extreme weather events.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Drought tolerance breeding and testing</li>
                  <li>• Heat stress adaptation research</li>
                  <li>• Cold tolerance improvement programs</li>
                  <li>• Water use efficiency optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Collaborate on Crop Genetics Research</h2>
          <p className="text-xl mb-8">
            Partner with our genetics team to develop the next generation of high-performing crop varieties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Research Partnership
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
