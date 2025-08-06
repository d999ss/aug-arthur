"use client"

import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from "framer-motion";

import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
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
                Contact Us
              </h1>
              <p className="text-body-large mb-6 max-w-2xl mx-auto">
                Get in touch with our team
              </p>
              <p className="text-body mb-12 max-w-2xl mx-auto">
                Whether you're a farmer looking for services, a partner exploring opportunities, or someone interested in joining our team, we're here to help. Reach out to us today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-y-large bg-secondary/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Corporate Contact */}
              <div className="p-8 card-refined">
                <h3 className="text-title mb-6">Corporate Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-body-medium">Arthur Companies</p>
                      <p className="text-body text-muted-foreground">100 Innovation Drive, Arthur, ND 58006</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-body">(701) 967-8200</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-body">info@arthurcompanies.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-body">Mon-Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Key Locations */}
              <div className="p-8 card-refined">
                <h3 className="text-title mb-6">Key locations</h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "Arthur Elevator",
                      address: "100 Innovation Drive, Arthur, ND 58006",
                      phone: "(701) 967-8200"
                    },
                    {
                      name: "Carrington Facility", 
                      address: "1010 Hwy 281 N, Carrington, ND 58421",
                      phone: "(701) 652-2232"
                    },
                    {
                      name: "Harvey Terminal",
                      address: "600 Lincoln Ave, Harvey, ND 58341", 
                      phone: "(701) 324-4633"
                    }
                  ].map((location, index) => (
                    <div key={location.name} className="pb-4 border-b border-border/30 last:border-0 last:pb-0">
                      <h4 className="text-body-medium mb-2">{location.name}</h4>
                      <p className="text-small text-muted-foreground mb-1">{location.address}</p>
                      <p className="text-small text-muted-foreground">{location.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
