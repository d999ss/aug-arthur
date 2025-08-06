'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, AlertCircle } from 'lucide-react';
import Link from "next/link";

import { trpc } from '@/lib/trpc/client';

export default function LocationsPage() {
  const { data: locationsData, isLoading, error } = trpc.data.getLocations.useQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Locations</h1>
              <p className="text-xl md:text-2xl text-gray-600">Loading locations...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Error Loading Locations</h1>
              <p className="text-xl text-red-600 mb-4">{error.message}</p>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const locations = locationsData?.data || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Locations</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Serving North Dakota communities since 1906
            </p>
            <p className="text-lg text-gray-600">
              Arthur Companies operates grain elevators and agronomy centers across North Dakota. Our strategically positioned facilities ensure we can efficiently serve farmers throughout the region with convenient access to our full range of services.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.name} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{location.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <p className="text-gray-600 text-sm">{location.address}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <p className="text-gray-600 text-sm">{location.phone}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <p className="text-gray-600 text-sm">{location.hours}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service) => (
                        <span key={service} className="px-3 py-1 bg-secondary/20 text-primary text-xs rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Finding Us?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our main office for assistance or to schedule an appointment at any of our locations.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
