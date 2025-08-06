import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Smartphone, Download, TrendingUp, Users, MapPin, Award, CheckCircle2, Leaf, Target } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Family Owned Since 1906
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Arthur: Where Innovation Grows, From the Ground Up.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              100 years in the field and we're just getting started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/grain">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  View Cash Bids
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  About Arthur
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Growers & Partners - Enhanced with Tabs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Modern Agriculture</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're growing crops or growing your business, we're your partner in success.
            </p>
          </div>
          
          <Tabs defaultValue="growers" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="growers" className="flex items-center gap-2">
                <Leaf className="w-4 h-4" />
                For Growers
              </TabsTrigger>
              <TabsTrigger value="partners" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                For Partners
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="growers" className="mt-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Acres, Our Expertise</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        You know your acres. We know the market. Our team shows up, answers the phone, and competes to earn
                        your business whether you're hauling to an Arthur elevator, planning for next year with our agronomy
                        experts, or growing under contract for specialty end-users.
                      </p>
                      <div className="flex gap-3">
                        <Link href="/grain">
                          <Button variant="outline" size="sm">
                            Grain
                          </Button>
                        </Link>
                        <Link href="/products-services">
                          <Button variant="outline" size="sm">
                            Products & Services
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <Target className="w-5 h-5 text-green-600" />
                          <span className="font-semibold">Precision Agriculture</span>
                        </div>
                        <Progress value={95} className="mb-2" />
                        <p className="text-sm text-gray-600">Advanced technology for optimal yields</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                          <span className="font-semibold">Market Intelligence</span>
                        </div>
                        <Progress value={90} className="mb-2" />
                        <p className="text-sm text-gray-600">Real-time pricing and market insights</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="partners" className="mt-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Growing Together</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Arthur is a growing agribusiness platform trusted by processors, suppliers, and our industry-leading
                        peers. Our businesses span grain origination, crop inputs, research, logistics, and specialty
                        ingredients—all supported by a culture of integrity and execution.
                      </p>
                      <div className="flex gap-3">
                        <Link href="/products-services">
                          <Button variant="outline" size="sm">
                            Products & Services
                          </Button>
                        </Link>
                        <Link href="/research-development">
                          <Button variant="outline" size="sm">
                            Innovation
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <MapPin className="w-5 h-5 text-purple-600" />
                          <span className="font-semibold">Multi-State Network</span>
                        </div>
                        <Progress value={80} className="mb-2" />
                        <p className="text-sm text-gray-600">Strategic locations across the Northern Plains</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <Award className="w-5 h-5 text-orange-600" />
                          <span className="font-semibold">Industry Leadership</span>
                        </div>
                        <Progress value={88} className="mb-2" />
                        <p className="text-sm text-gray-600">Trusted by leading agricultural companies</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every day, farmers across the Northern Plains rely on Arthur for more than just market access and inputs.
              They count on us for straight answers, honest service, and solutions that work. From local agronomy
              centers to leading-edge research, Arthur combines the grit of a century-long legacy with a vision for what
              agriculture can be. Since 1906, we've built relationships that last—from a single elevator in Arthur, ND,
              to a multi-state operation supporting thousands of acres.
            </p>
            <Link href="/about">
              <Button className="bg-green-600 hover:bg-green-700">
                About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values & Stats */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on a foundation of integrity and innovation, guiding everything we do.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Integrity</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm">
                  We do what we say we'll do—no excuses. We do the right thing and treat others the way we would like to
                  be treated.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Service</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm">
                  We care for the land, our communities, and your trust. We serve with a positive attitude and adapt to
                  meet needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Pioneering</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm">
                  From new genetics to digital tools, we're on the leading edge and committed to creating new
                  opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Excellence</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm">
                  We invest in people, platforms, and partnerships for the long haul. If it's worth doing, we do it right
                  the first time.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Stats */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">117+</div>
                <p className="text-gray-600 mb-3">Years of Experience</p>
                <Progress value={100} className="mt-2" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500K+</div>
                <p className="text-gray-600 mb-3">Acres Served</p>
                <Progress value={85} className="mt-2" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <p className="text-gray-600 mb-3">Locations</p>
                <Progress value={75} className="mt-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 lg:py-24 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <blockquote className="text-2xl font-medium mb-6">
              "Arthur is the kind of company that shows up when it matters. We count on them every year, and every year
              they deliver."
            </blockquote>
            <Separator className="my-6 bg-green-400" />
            <div>
              <p className="font-semibold">Mike Johnson</p>
              <p className="text-green-100">Wheat & Soybean Farmer, Cass County</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Arthur Co. Cash Bids</h2>
            <p className="text-lg text-gray-600 mb-8">
              Free Real-time harvest information for growers, by Arthur Companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/grower-insights">
                <Button className="bg-gray-900 hover:bg-gray-800" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download for iOS
                </Button>
              </Link>
              <Link href="/grower-insights">
                <Button className="bg-gray-900 hover:bg-gray-800" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download for Android
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">Arthur delivers performance you can measure and people you can trust.</h2>
        </div>
      </section>
    </div>
  )
}