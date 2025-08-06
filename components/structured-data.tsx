import Script from 'next/script'

interface StructuredDataProps {
  data: any
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
      strategy="afterInteractive"
    />
  )
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Arthur Companies",
  "description": "Agricultural services and grain marketing since 1906",
  "url": "https://arthurcompanies.com",
  "logo": "https://arthurcompanies.com/logo.png",
  "foundingDate": "1906",
  "areaServed": {
    "@type": "Place",
    "name": "Northern Plains, USA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-701-XXX-XXXX",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/arthurcompanies",
    "https://www.linkedin.com/company/arthur-companies",
    "https://twitter.com/arthurcompanies"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Agricultural Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Grain Marketing",
          "description": "Real-time cash bids and strategic grain marketing services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Agronomy Services",
          "description": "Expert crop nutrition and soil health guidance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Precision Agriculture",
          "description": "Data-driven technology solutions for modern farming"
        }
      }
    ]
  }
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arthur Companies",
  "image": "https://arthurcompanies.com/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "104 SE 1st Street",
    "addressLocality": "Arthur",
    "addressRegion": "ND",
    "postalCode": "58006",
    "addressCountry": "US"
  },
  "priceRange": "$$",
  "telephone": "+1-701-XXX-XXXX",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ]
}

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})