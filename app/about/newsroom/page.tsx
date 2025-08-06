'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

import { trpc } from '@/lib/trpc/client';

export default function NewsroomPage() {
  const { data: newsData, isLoading, error } = trpc.data.getNews.useQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Newsroom</h1>
              <p className="text-xl md:text-2xl text-gray-600">Loading latest news...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Error Loading News</h1>
              <p className="text-xl text-red-600 mb-4">{error.message}</p>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const news = newsData?.data || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Newsroom</h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Latest news and updates from Arthur Companies
            </p>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent News</h2>
            <p className="text-lg text-gray-600">Stay updated with our latest developments</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {news.map((article, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{article.headline}</CardTitle>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{article.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
