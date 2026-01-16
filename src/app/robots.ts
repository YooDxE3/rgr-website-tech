import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Exemplo: se tivesse área privada
    },
    sitemap: 'https://rgrsaude.com/sitemap.xml',
  }
}