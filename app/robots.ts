import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://moonparet.vercel.app'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/profile/', '/checkout/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
