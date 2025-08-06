import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Factory, Beaker, Truck, Globe, ArrowRight, Users, Building2 } from 'lucide-react'
import Link from "next/link"

export default function ProductsServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Products & Services</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Comprehensive agricultural solutions from field to market
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Arthur Companies provides integrated services across the entire agricultural value chain. Whether you're farming the land or processing the harvest, we deliver solutions that drive success.
            </p>
            
            {/* Quick Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#on-farm">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 min-w-[200px]">
                  <Users className="mr-2 h-5 w-5" />
                  On the Farm
                </Button>
              </a>
              <a href="#off-farm">
                <Button size="lg" variant="outline" className="min-w-[200px]">
                  <Building2 className="mr-2 h-5 w-5" />
                  Off the Farm
                </Button>
              </a>
            </div>
            
            {/* Value Proposition */}
            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                <Users className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">For Growers</h3>
                <p className="text-gray-600 text-sm">
                  Complete on-farm solutions including agronomy, precision agriculture, soil health, and crop inputs to maximize your operation's potential.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                <Building2 className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">For Partners</h3>
                <p className="text-gray-600 text-sm">
                  Value-added processing, manufacturing, and trading services that connect quality crops to global markets and premium end-users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On the Farm Section */}
      <section id="on-farm" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">On the Farm</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Complete agricultural solutions to help you grow more, manage risk, and maximize profitability. Our on-farm services are designed to support every aspect of your farming operation.
            </p>
            
            {/* Service Categories Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Crop Management</h4>
                <p className="text-sm text-gray-600">Expert agronomy services and precision agriculture tools</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Soil & Nutrition</h4>
                <p className="text-sm text-gray-600">Advanced soil health monitoring and nutrition programs</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Technology & Inputs</h4>
                <p className="text-sm text-gray-600">Premium inputs and cutting-edge farming technology</p>
              </div>
            </div>
          </div>

          {/* On Farm Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <Sprout className="h-8 w-8 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-green-600 transition-colors">Agronomy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Local expertise and crop inputs to maximize your yield potential through personalized crop consulting and management.</p>
                <Link href="/services/agronomy">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <Beaker className="h-8 w-8 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-green-600 transition-colors">Soil Health & Nutrition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Advanced soil health monitoring and nutrition management programs to build long-term soil productivity.</p>
                <Link href="/services/soil-health">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <Globe className="h-8 w-8 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-green-600 transition-colors">Precision Agriculture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">GPS-guided equipment, variable rate application, and precision farming tools for maximum efficiency.</p>
                <Link href="/services/precision-agriculture">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Sprout className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Crop Inputs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Premium seeds, fertilizers, and crop protection products sourced from leading manufacturers.</p>
                <Button variant="outline" size="sm" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Truck className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Custom Application</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Precision application services and reliable transportation for timely field operations.</p>
                <Button variant="outline" size="sm" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Beaker className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Field Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Field trials and data-driven insights for better farming decisions and improved outcomes.</p>
                <Link href="/research-development">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Off the Farm Section */}
      <section id="off-farm" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Off the Farm</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Value-added processing, manufacturing, and trading services that connect quality crops to global markets. Our off-farm services create additional value throughout the supply chain.
            </p>
            
            {/* Service Categories Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Processing & Manufacturing</h4>
                <p className="text-sm text-gray-600">Premium ingredients and contract manufacturing services</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Specialty Programs</h4>
                <p className="text-sm text-gray-600">Identity-preserved crops and premium market access</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Global Markets</h4>
                <p className="text-sm text-gray-600">Trading and distribution across international markets</p>
              </div>
            </div>
          </div>

          {/* Off Farm Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
              <CardHeader>
                <Factory className="h-8 w-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-blue-600 transition-colors">Premium Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">High-quality ingredients for food and feed manufacturers with complete traceability and quality assurance.</p>
                <Link href="/services/premium-ingredients">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
              <CardHeader>
                <Factory className="h-8 w-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-blue-600 transition-colors">Pet Food Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Contract manufacturing for premium pet food brands with state-of-the-art facilities and quality systems.</p>
                <Link href="/services/pet-food-manufacturing">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
              <CardHeader>
                <Sprout className="h-8 w-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-blue-600 transition-colors">Specialty Crops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Identity-preserved grains and specialty crop programs connecting growers to premium markets.</p>
                <Link href="/services/specialty-crops">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
              <CardHeader>
                <Truck className="h-8 w-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-blue-600 transition-colors">Wholesale Fertilizer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Bulk fertilizer distribution and supply chain management for retailers and large operations.</p>
                <Link href="/services/wholesale-fertilizer">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
              <CardHeader>
                <Globe className="h-8 w-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-blue-600 transition-colors">Global Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Global commodity trading and risk management services with comprehensive market expertise.</p>
                <Link href="/services/trading">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cross-Section Navigation */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Integrated Solutions Across the Value Chain</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Arthur Companies bridges the gap between farm and market, providing seamless integration across all aspects of agricultural production and processing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">From Field to Elevator</h3>
              <p className="opacity-90 mb-4">Our on-farm services ensure optimal crop production, while our grain marketing connects you to the best markets.</p>
              <Link href="/grain">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600">
                  View Grain Services
                </Button>
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">From Grain to Global Markets</h3>
              <p className="opacity-90 mb-4">Our processing and trading services add value to your crops and connect them to premium end-users worldwide.</p>
              <Link href="/research-development">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                  Explore Innovation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Partner with Arthur?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're looking to optimize your farming operation or explore value-added opportunities, our comprehensive service portfolio is designed to support your success at every stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 min-w-[200px]">
                Contact Our Team
              </Button>
            </Link>
            <Link href="/grain">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                View Cash Bids
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
