'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, DollarSign, GraduationCap, Clock, Award, Users, AlertCircle } from 'lucide-react';

import { trpc } from '@/lib/trpc/client';

export default function CareersPage() {
  const { data: careersData, isLoading, error } = trpc.data.getCareers.useQuery();

  const renderJobsSection = () => {
    if (isLoading) {
      return (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">Loading current openings...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-8">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-lg text-red-600 mb-4">{error.message}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      );
    }

    const jobs = careersData?.data || [];

    return (
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {jobs.map((job) => (
          <Card key={job.title} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                  <p className="text-green-600 font-medium">{job.department}</p>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <p>{job.location}</p>
                  <p className="font-medium">{job.salary}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Careers</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Join our team of agricultural professionals
            </p>
            <p className="text-lg text-gray-600">
              We offer competitive benefits, professional development opportunities, and a collaborative work environment.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We embrace new ideas and technologies to advance agriculture and improve farmer outcomes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We conduct business with honesty, transparency, and ethical practices in all our relationships.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                We work together as a team, valuing diverse perspectives and shared success.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for excellence in everything we do, continuously improving our services and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-lg text-gray-600">We invest in our people</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Heart className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive health insurance, dental, vision, and wellness programs for you and your family.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <DollarSign className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Retirement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">401(k) with company matching, pension plans, and financial planning resources.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Professional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Continuing education opportunities, conference attendance, and skill development programs.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Clock className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Flexible work arrangements, generous PTO, and family-friendly policies.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Award className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Performance Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Competitive salaries, performance bonuses, and recognition programs.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Volunteer time off and company-sponsored community service opportunities.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600">Join our growing team</p>
          </div>

          {renderJobsSection()}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Career?</h2>
          <p className="text-xl mb-8">
            Don't see the perfect role? We're always looking for talented individuals to join our team.
          </p>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600">
            Send Us Your Resume
          </Button>
        </div>
      </section>
    </div>
  );
}
