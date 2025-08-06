import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Arthur Companies. Contact our team for agricultural services, partnerships, or career opportunities.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Get in touch with our team</p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a farmer looking for services, a partner exploring opportunities, or someone interested in
              joining our team, we're here to help. Reach out to us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Corporate Contact */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Corporate Headquarters</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Arthur Companies</p>
                        <p className="text-gray-600">100 Innovation Drive, Arthur, ND 58006</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <p className="text-gray-600">(701) 967-8200</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <p className="text-gray-600">info@arthurcompanies.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <p className="text-gray-600">Mon-Fri: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Locations */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Locations</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Arthur Elevator</h4>
                      <p className="text-sm text-gray-600">100 Innovation Drive, Arthur, ND 58006</p>
                      <p className="text-sm text-gray-600">(701) 967-8200</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Carrington Facility</h4>
                      <p className="text-sm text-gray-600">1010 Hwy 281 N, Carrington, ND 58421</p>
                      <p className="text-sm text-gray-600">(701) 652-2232</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Harvey Terminal</h4>
                      <p className="text-sm text-gray-600">600 Lincoln Ave, Harvey, ND 58341</p>
                      <p className="text-sm text-gray-600">(701) 324-4633</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
