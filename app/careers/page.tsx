'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, DollarSign, GraduationCap, Clock, AlertCircle, ArrowRight } from 'lucide-react';

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
          <button onClick={() => window.location.reload()} className="btn-primary">Try Again</button>
        </div>
      );
    }

    const jobs = careersData?.data || [];

    return (
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {jobs.map((job, index) => (
          <motion.div
            key={job.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-8 card-refined hover-lift"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-title mb-2">{job.title}</h3>
                <p className="text-primary text-body-medium">{job.department}</p>
              </div>
              <div className="text-right text-small text-muted-foreground">
                <p>{job.location}</p>
                <p className="font-medium">{job.salary}</p>
              </div>
            </div>
            <p className="text-body text-muted-foreground mb-6">{job.description}</p>
            <Link href="#apply" className="btn-primary w-full justify-center">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-y-large">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-display mb-8 text-balance">
                Careers
              </h1>
              <p className="text-body-large mb-6 max-w-2xl mx-auto">
                Join our team of agricultural professionals. We offer competitive benefits, professional development opportunities, and a collaborative work environment.
              </p>
              <p className="text-body mb-12 max-w-2xl mx-auto">
                We offer competitive benefits, professional development opportunities, and a collaborative work environment 
                where your contributions make a real impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="section-y-large bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Culture Values</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              The principles that guide our work and create our collaborative culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { 
                title: "Innovation", 
                description: "We embrace new ideas and technologies to advance agriculture and improve farmer outcomes."
              },
              { 
                title: "Integrity", 
                description: "We conduct business with honesty, transparency, and ethical practices in all our relationships."
              },
              { 
                title: "Collaboration", 
                description: "We work together as a team, valuing diverse perspectives and shared success."
              },
              { 
                title: "Excellence", 
                description: "We strive for excellence in everything we do, continuously improving our services and solutions."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 card-refined text-center"
              >
                <h3 className="text-title mb-3">{value.title}</h3>
                <p className="text-body text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-y-large">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Benefits</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              We invest in our people with comprehensive benefits and opportunities for growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { 
                icon: Heart,
                title: "Health & Wellness", 
                description: "Comprehensive health insurance, dental, vision, and wellness programs for you and your family."
              },
              { 
                icon: DollarSign,
                title: "Retirement", 
                description: "401(k) with company matching, pension plans, and financial planning resources."
              },
              { 
                icon: GraduationCap,
                title: "Development", 
                description: "Continuing education opportunities, conference attendance, and skill development programs."
              },
              { 
                icon: Clock,
                title: "Work-Life Balance", 
                description: "Flexible work arrangements, generous PTO, and family-friendly policies."
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 card-refined text-center hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-title mb-3">{benefit.title}</h3>
                  <p className="text-body text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
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
      <section className="section-y-large bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Career?</h2>
          <p className="text-xl mb-8">
            Don't see the perfect role? We're always looking for talented individuals to join our team.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-background/20 text-background hover:bg-background/10 transition-all duration-200 text-sm font-medium">
            Send Us Your Resume
          </Link>
        </div>
      </section>
    </div>
  );
}
