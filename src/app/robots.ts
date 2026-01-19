import { MetadataRoute } from 'next';
import { SITE_URL } from '@/shared/constants/routes';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}