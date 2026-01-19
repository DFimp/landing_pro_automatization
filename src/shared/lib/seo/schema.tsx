import React from 'react';
import { SITE_URL, phone } from '@/shared/constants';

// Типы для Schema.org

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
  provider: {
    name: string;
  };
  areaServed: {
    name: string;
  };
}

export interface ArticleSchema {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
  };
  publisher: {
    name: string;
    logo: {
      url: string;
    };
  };
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Компоненты для встраивания Schema.org

export function OrganizationSchemaTag({ data }: { data: OrganizationSchema }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    ...(data.alternateName && { alternateName: data.alternateName }),
    url: data.url,
    logo: data.logo,
    description: data.description,
    ...(data.address && {
      address: {
        '@type': 'PostalAddress',
        ...data.address,
      },
    }),
    ...(data.contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        ...data.contactPoint,
      },
    }),
    ...(data.sameAs && { sameAs: data.sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchemaTag({ data }: { data: ServiceSchema }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: data.serviceType,
    name: data.name,
    description: data.description,
    provider: {
      '@type': 'Organization',
      name: data.provider.name,
    },
    areaServed: {
      '@type': 'Country',
      name: data.areaServed.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

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
      name: data.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: data.publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: data.publisher.logo.url,
      },
    },
    ...(data.image && {
      image: data.image,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

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

// Готовые константы для сайта

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
    // Добавьте ссылки на социальные сети
    // 'https://t.me/...',
    // 'https://vk.com/...',
  ],
};
