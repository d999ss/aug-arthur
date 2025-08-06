import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Brain, Database, TrendingUp } from 'lucide-react'
import Link from "next/link"

export default function DataSciencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BarChart3 className="h-16 w-16 mx-auto text-indigo-600 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Data Science & Analytics</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Advanced data modeling and machine learning for agricultural insights
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Explore Data Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Science Applications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our data science team develops advanced analytics and machine learning solutions to transform agricultural data into actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Brain className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">AI algorithms for predictive modeling and automated decision-making.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Database className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Big Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Large-scale data processing and analysis for agricultural applications.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Predictive Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Forecasting models for yield, weather, and market predictions.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Data Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Interactive dashboards and visualization tools for data insights.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Programs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Science Projects</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Agricultural AI Platform</h3>
                <p className="text-gray-600 mb-4">
                  Development of comprehensive AI platform integrating multiple data sources for intelligent farm management decisions.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Multi-source data integration</li>
                  <li>• Real-time analytics engine</li>
                  <li>• Automated recommendation systems</li>
                  <li>• Mobile and web applications</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Yield Prediction Models</h3>
                <p className="text-gray-600 mb-4">
                  Advanced machine learning models for accurate crop yield forecasting using weather, soil, and management data.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Deep learning neural networks</li>
                  <li>• Ensemble modeling techniques</li>
                  <li>• Real-time model updating</li>
                  <li>• Uncertainty quantification</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Intelligence System</h3>
                <p className="text-gray-600 mb-4">
                  Data-driven market analysis and price forecasting system for agricultural commodities and decision support.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Price trend analysis</li>
                  <li>• Supply and demand modeling</li>
                  <li>• Risk assessment algorithms</li>
                  <li>• Trading strategy optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Agriculture with Data Science</h2>
          <p className="text-xl mb-8">
            Partner with our data science team to unlock the power of agricultural data and analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-600">
                Data Partnership
              </Button>
            </Link>
            <Link href="/research-development">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-600">
                Back to R&D Hub
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
