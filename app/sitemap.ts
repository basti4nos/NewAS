import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://asknights.com'
  // The showcase is a private draft and must not be listed here.
  const routes = ['', '/#curation', '/#tokenization', '/#awards']

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.5,
  }))
}
