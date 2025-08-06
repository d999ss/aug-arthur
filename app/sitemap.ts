import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arthurcompanies.com'
  
  // Main pages
  const mainPages = [
    '',
    '/about',
    '/about/history',
    '/about/leadership',
    '/about/newsroom',
    '/grain',
    '/products-services',
    '/research-development',
    '/careers',
    '/contact',
    '/locations',
    '/grower-insights',
    '/style-guide',
  ]
  
  // Service pages
  const servicePages = [
    '/services/agronomy',
    '/services/precision-agriculture',
    '/services/specialty-crops',
    '/services/wholesale-fertilizer',
    '/services/soil-health',
    '/services/premium-ingredients',
  ]
  
  // Research pages
  const researchPages = [
    '/research/crop-genetics',
    '/research/soil-science',
    '/research/precision-agriculture',
    '/research/data-science',
    '/research/sustainability',
    '/research/collaborative',
  ]
  
  // Venture pages
  const venturePages = [
    '/venture/startup-investment',
    '/venture/corporate-ventures',
    '/venture/innovation-incubator',
    '/venture/global-partnerships',
    '/venture/technology-acceleration',
    '/venture/portfolio-management',
  ]
  
  // Legal pages
  const legalPages = [
    '/legal/privacy',
    '/legal/terms',
    '/legal/accessibility',
  ]
  
  const allPages = [
    ...mainPages,
    ...servicePages,
    ...researchPages,
    ...venturePages,
    ...legalPages,
  ]
  
  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1 : page.startsWith('/services') || page === '/grain' ? 0.9 : 0.8,
  }))
}