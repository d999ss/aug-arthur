import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Factory, Award, Truck, BarChart3 } from 'lucide-react'
import Link from "next/link"

export default function PremiumIngredientsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Factory className="h-16 w-16 mx-auto text-orange-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Premium Ingredients</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              High-quality ingredients for food and feed manufacturers
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Quality Ingredients</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Arthur Companies processes and supplies premium agricultural ingredients to food and feed manufacturers worldwide. Our commitment to quality and traceability ensures your products meet the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Award className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Rigorous quality control and testing throughout the processing chain.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Traceability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Complete supply chain traceability from farm to final product.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Factory className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">State-of-the-art processing facilities with food safety certifications.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Truck className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Reliable supply chain and distribution network for timely delivery.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Ingredient Portfolio</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Food Grade Ingredients</h3>
                <p className="text-gray-600 mb-4">
                  Premium food-grade ingredients for human consumption, meeting strict food safety and quality standards for manufacturers of baked goods, snacks, and processed foods.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Grain Products</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Food-grade wheat flour</li>
                      <li>• Specialty corn products</li>
                      <li>• Organic grain ingredients</li>
                      <li>• Ancient grain varieties</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Protein Sources</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Plant-based protein concentrates</li>
                      <li>• Soybean meal and isolates</li>
                      <li>• Specialty protein blends</li>
                      <li>• Non-GMO protein options</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Feed Grade Ingredients</h3>
                <p className="text-gray-600 mb-4">
                  High-quality feed ingredients for livestock, poultry, and aquaculture operations, formulated to meet specific nutritional requirements and performance goals.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• High-protein soybean meal</li>
                  <li>• Corn gluten meal and feed</li>
                  <li>• Distillers dried grains (DDGS)</li>
                  <li>• Custom feed ingredient blends</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialty Ingredients</h3>
                <p className="text-gray-600 mb-4">
                  Specialized ingredients for niche markets and specific applications, including organic, non-GMO, and identity-preserved products with complete documentation.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Organic certified ingredients</li>
                  <li>• Non-GMO verified products</li>
                  <li>• Identity-preserved varieties</li>
                  <li>• Custom specification ingredients</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with Arthur for Premium Ingredients</h2>
          <p className="text-xl mb-8">
            Discover how our premium ingredients can enhance your products and supply chain reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600">
                Request Samples
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
