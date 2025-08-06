import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Dna, FlaskConical, TrendingUp, Cpu, BarChart3, Building2, Users, Rocket, Target, Globe, Zap, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function ResearchDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Research & Development</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Advancing agriculture through innovation and strategic investment
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Arthur Companies drives agricultural innovation through cutting-edge research and strategic venture investments. Our dual approach combines scientific discovery with entrepreneurial vision to shape the future of farming.
            </p>
            
            {/* Quick Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#research">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 min-w-[200px]">
                  <FlaskConical className="mr-2 h-5 w-5" />
                  Research
                </Button>
              </a>
              <a href="#venture">
                <Button size="lg" variant="outline" className="min-w-[200px]">
                  <Rocket className="mr-2 h-5 w-5" />
                  Venture
                </Button>
              </a>
            </div>
            
            {/* Value Proposition */}
            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                <FlaskConical className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Research Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Leading-edge agricultural research in crop genetics, soil science, precision agriculture, and sustainable farming practices.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                <Rocket className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Investment</h3>
                <p className="text-gray-600 text-sm">
                  Venture capital and strategic partnerships with innovative agtech companies transforming the agricultural landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <FlaskConical className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our research division conducts cutting-edge agricultural science to solve industry challenges and unlock new opportunities for sustainable farming.
            </p>
            
            {/* Research Categories Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Crop Science</h4>
                <p className="text-sm text-gray-600">Advanced genetics, breeding, and biotechnology research</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Technology Innovation</h4>
                <p className="text-sm text-gray-600">Precision agriculture and digital farming solutions</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Sustainability</h4>
                <p className="text-sm text-gray-600">Environmental stewardship and sustainable practices</p>
              </div>
            </div>
          </div>

          {/* Research Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <Dna className="h-8 w-8 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-purple-600 transition-colors">Crop Genetics & Breeding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Advanced research in plant genetics, breeding programs, and biotechnology to develop next-generation crop varieties.</p>
                <Link href="/research/crop-genetics">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <FlaskConical className="h-8 w-8 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-purple-600 transition-colors">Soil Science Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Comprehensive soil health studies, nutrient cycling research, and microbiome analysis for sustainable agriculture.</p>
                <Link href="/research/soil-science">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <Cpu className="h-8 w-8 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-purple-600 transition-colors">Precision Agriculture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Development of precision farming technologies, sensor systems, and data analytics for optimized crop management.</p>
                <Link href="/research/precision-agriculture">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-purple-600 transition-colors">Data Science & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Advanced data modeling, machine learning applications, and predictive analytics for agricultural decision-making.</p>
                <Link href="/research/data-science">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-purple-600 transition-colors">Sustainability Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Environmental impact studies, carbon sequestration research, and sustainable farming practice development.</p>
                <Link href="/research/sustainability">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <Users className="h-8 w-8 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-purple-600 transition-colors">Collaborative Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Partnerships with universities, research institutions, and industry leaders for collaborative innovation projects.</p>
                <Link href="/research/collaborative">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Venture Section */}
      <section id="venture" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <Rocket className="h-8 w-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Venture</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our venture platform invests in and partners with innovative agtech companies that are transforming agriculture through breakthrough technologies and business models.
            </p>
            
            {/* Venture Categories Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Early Stage Investment</h4>
                <p className="text-sm text-gray-600">Seed and Series A funding for promising agtech startups</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Strategic Partnerships</h4>
                <p className="text-sm text-gray-600">Collaborative ventures with established industry players</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Innovation Acceleration</h4>
                <p className="text-sm text-gray-600">Incubation and acceleration programs for breakthrough technologies</p>
              </div>
            </div>
          </div>

          {/* Venture Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
              <CardHeader>
                <Rocket className="h-8 w-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-indigo-600 transition-colors">Startup Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Direct equity investments in early-stage agtech companies with disruptive technologies and strong growth potential.</p>
                <Link href="/venture/startup-investment">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
              <CardHeader>
                <Building2 className="h-8 w-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-indigo-600 transition-colors">Corporate Ventures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Strategic partnerships and joint ventures with established companies to accelerate innovation and market adoption.</p>
                <Link href="/venture/corporate-ventures">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
              <CardHeader>
                <Target className="h-8 w-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-indigo-600 transition-colors">Innovation Incubator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Comprehensive incubation program providing funding, mentorship, and resources to promising agricultural innovations.</p>
                <Link href="/venture/innovation-incubator">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
              <CardHeader>
                <Globe className="h-8 w-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-indigo-600 transition-colors">Global Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">International venture partnerships and cross-border investments in agricultural technology and innovation.</p>
                <Link href="/venture/global-partnerships">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
              <CardHeader>
                <Zap className="h-8 w-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-indigo-600 transition-colors">Technology Acceleration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Fast-track development programs for breakthrough agricultural technologies with commercial potential.</p>
                <Link href="/venture/technology-acceleration">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="group-hover:text-indigo-600 transition-colors">Portfolio Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Active portfolio management and strategic guidance for venture investments to maximize growth and impact.</p>
                <Link href="/venture/portfolio-management">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Portfolio Companies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse portfolio of innovative companies is transforming agriculture across the value chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">SeedZ</h3>
                <p className="text-gray-600 text-sm mb-3">Digital marketplace connecting seed developers with farmers seeking specific traits</p>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Seed A</span>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Balcão</h3>
                <p className="text-gray-600 text-sm mb-3">Brazilian agtech platform streamlining the supply chain between farmers and processors</p>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Series A</span>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">EpiCrop Technologies</h3>
                <p className="text-gray-600 text-sm mb-3">Developing epigenetic solutions to improve crop resilience without genetic modification</p>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Seed</span>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">AgStartUp Engine</h3>
                <p className="text-gray-600 text-sm mb-3">Early-stage investment fund and accelerator for promising agricultural innovations</p>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Fund</span>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Levridge</h3>
                <p className="text-gray-600 text-sm mb-3">Comprehensive ERP solution designed specifically for agricultural businesses</p>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Series B</span>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">CropTech Analytics</h3>
                <p className="text-gray-600 text-sm mb-3">AI-powered crop monitoring and yield prediction platform using satellite imagery</p>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs rounded-full">Seed A</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cross-Section Integration */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Research-Driven Investment Strategy</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our unique approach combines scientific research with strategic investment to accelerate agricultural innovation and create lasting impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">From Lab to Market</h3>
              <p className="opacity-90 mb-4">Our research discoveries inform our investment decisions, ensuring we back technologies with proven scientific foundations.</p>
              <Link href="/contact">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                  Explore Research
                </Button>
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Investment to Innovation</h3>
              <p className="opacity-90 mb-4">Our portfolio companies gain access to our research capabilities, accelerating their development and market success.</p>
              <Link href="/contact">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-600">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shape the Future of Agriculture</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're a researcher, entrepreneur, or investor, join us in advancing agricultural innovation through cutting-edge research and strategic partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 min-w-[200px]">
                Partner With Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Submit Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
