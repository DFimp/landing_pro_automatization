import React from 'react';
import { SITE_URL, phone } from '@/shared/constants';

// ==================== ТИПЫ ====================

export interface OrganizationSchema {
  name: string;
  alternateName?: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    addressCountry: string;
    addressLocality?: string;
    streetAddress?: string;
    postalCode?: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    availableLanguage: string;
  };
  sameAs?: string[];
}

export interface ServiceSchema {
  serviceType: string;
  name: string;
  description: string;
  url?: string;
}

export interface ArticleSchema {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  url?: string;
  wordCount?: number;
  articleSection?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SiteNavigationItem {
  name: string;
  url: string;
}

export interface ProductSchema {
  name: string;
  description: string;
  brand?: {
    name: string;
  };
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}

export interface CollectionPageSchema {
  name: string;
  description: string;
  url: string;
}

export interface ItemListItem {
  name: string;
  url: string;
  description?: string;
  image?: string;
}

// ==================== КОМПОНЕНТЫ СХЕМ ====================

/**
 * Схема организации - используется на главной странице
 */
export function OrganizationSchemaTag({ data }: { data: OrganizationSchema }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${data.url}/#organization`,
    name: data.name,
    ...(data.alternateName && { alternateName: data.alternateName }),
    url: data.url,
    logo: {
      '@type': 'ImageObject',
      url: data.logo,
    },
    description: data.description,
    ...(data.address && {
      address: {
        '@type': 'PostalAddress',
        addressCountry: data.address.addressCountry,
        ...(data.address.addressLocality && { addressLocality: data.address.addressLocality }),
        ...(data.address.streetAddress && { streetAddress: data.address.streetAddress }),
        ...(data.address.postalCode && { postalCode: data.address.postalCode }),
      },
    }),
    ...(data.contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: data.contactPoint.telephone,
        contactType: data.contactPoint.contactType,
        availableLanguage: data.contactPoint.availableLanguage,
      },
    }),
    ...(data.sameAs && data.sameAs.length > 0 && { sameAs: data.sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Схема услуги - используется на страницах услуг (аудит, сопровождение и т.д.)
 */
export function ServiceSchemaTag({ data }: { data: ServiceSchema }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: data.serviceType,
    name: data.name,
    description: data.description,
    ...(data.url && { url: data.url }),
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: ORGANIZATION_DATA.name,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Россия',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Схема статьи - используется на страницах статей
 */
export function ArticleSchemaTag({ data }: { data: ArticleSchema }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: ORGANIZATION_DATA.name,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: ORGANIZATION_DATA.name,
      logo: {
        '@type': 'ImageObject',
        url: ORGANIZATION_DATA.logo,
      },
    },
    ...(data.image && {
      image: data.image,
    }),
    ...(data.wordCount && { wordCount: data.wordCount }),
    articleSection: data.articleSection || 'CRM автоматизация',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.article-intro'],
    },
    inLanguage: 'ru-RU',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Схема FAQ - используется на страницах с часто задаваемыми вопросами
 */
export function FAQSchemaTag({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Схема навигации сайта - используется в layout для sitelinks
 */
export function SiteNavigationSchemaTag({ items }: { items: SiteNavigationItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'SiteNavigationElement',
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Схема веб-сайта - используется в layout
 */
export function WebSiteSchemaTag() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: ORGANIZATION_DATA.name,
    url: SITE_URL,
    description: ORGANIZATION_DATA.description,
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Схема продукта - используется на странице лицензий
 */
export function ProductSchemaTag({ data }: { data: ProductSchema }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: data.description,
    ...(data.brand && {
      brand: {
        '@type': 'Organization',
        name: data.brand.name,
      },
    }),
    ...(data.offers && {
      offers: {
        '@type': 'Offer',
        ...data.offers,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Схема коллекции - используется на страницах списков (статьи, кейсы)
 */
export function CollectionPageSchemaTag({ data, items }: { data: CollectionPageSchema; items: ItemListItem[] }) {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: data.name,
    description: data.description,
    url: data.url,
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: item.name,
        url: item.url,
        ...(item.description && { description: item.description }),
        ...(item.image && { image: item.image }),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}

// ==================== КОНСТАНТЫ ====================

export const ORGANIZATION_DATA: OrganizationSchema = {
  name: 'Про Автоматизацию',
  alternateName: 'pro-automatization.ru',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'Разработка виджетов, автоматизация и интеграция amoCRM. Эксперт по amoCRM: настройка, интеграции, автоматизация бизнес-процессов.',
  address: {
    addressCountry: 'RU',
    addressLocality: 'Москва',
  },
  contactPoint: {
    telephone: phone.schema,
    contactType: 'sales',
    availableLanguage: 'Russian',
  },
  sameAs: [
    'https://t.me/proavtomatization_support_bot',
  ],
};

/**
 * Основные страницы для навигационной схемы (sitelinks)
 * Используется в layout.tsx
 */
export const SITE_NAVIGATION: SiteNavigationItem[] = [
  { name: 'Виджеты amoCRM', url: `${SITE_URL}/widgets` },
  { name: 'Аудит amoCRM', url: `${SITE_URL}/audit` },
  { name: 'Сопровождение', url: `${SITE_URL}/accompaniment` },
  { name: 'Статьи', url: `${SITE_URL}/articles` },
  { name: 'Кейсы', url: `${SITE_URL}/cases` },
  { name: 'Лицензии amoCRM', url: `${SITE_URL}/license` },
];
