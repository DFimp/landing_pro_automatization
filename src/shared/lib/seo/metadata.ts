import { Metadata } from 'next';
import { SITE_URL } from '@/shared/constants/routes';

interface CreateMetadataParams {
  title: string;
  description: string;
  keywords?: string[];
  canonical: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Создает оптимизированные метаданные для страницы
 * Следует требованиям SEO для Яндекс и Google
 */
export function createSEOMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = `${SITE_URL}/og-image.png`,
  ogType = 'website',
  publishedTime,
  modifiedTime,
}: CreateMetadataParams): Metadata {
  const metadata: Metadata = {
    title,
    description,
    ...(keywords.length > 0 && { keywords }),

    alternates: {
      canonical: `${SITE_URL}${canonical}`,
    },

    openGraph: {
      type: ogType,
      locale: 'ru_RU',
      url: `${SITE_URL}${canonical}`,
      title,
      description,
      siteName: 'Про Автоматизацию',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(ogType === 'article' && publishedTime && { publishedTime }),
      ...(ogType === 'article' && modifiedTime && { modifiedTime }),
      ...(ogType === 'article' && { authors: ['Про Автоматизацию'] }),
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };

  return metadata;
}

/**
 * Шаблоны заголовков для разных типов страниц
 */
export const SEO_TEMPLATES = {
  widget: (name: string) =>
    `${name} для amoCRM — кастомный виджет | Про Автоматизацию`,
  article: (topic: string) => `${topic} — практическое руководство`,
  service: (service: string, benefit: string) =>
    `${service} — ${benefit} | Про Автоматизацию`,
};
