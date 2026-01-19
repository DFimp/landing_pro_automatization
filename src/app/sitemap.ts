import { MetadataRoute } from 'next';
import { SITE_URL, ROUTES, ARTICLES_ROUTES, WIDGET_ROUTES } from '@/shared/constants/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Основные страницы с их приоритетами
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}${ROUTES.HOME}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}${ROUTES.WIDGETS}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}${ROUTES.AUDIT}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}${ROUTES.ACCOMPANIMENT}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}${ROUTES.ARTICLES}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}${ROUTES.LICENSE}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}${ROUTES.CASES}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Страницы виджетов
  const widgetPages: MetadataRoute.Sitemap = WIDGET_ROUTES.map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })
  );

  // Статьи
  const articlesPages: MetadataRoute.Sitemap = Object.values(ARTICLES_ROUTES).map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  );

  return [...mainPages, ...widgetPages, ...articlesPages];
}