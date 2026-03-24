/**
 * Единый источник данных для всех статей
 * Используется для:
 * - Списка статей
 * - SEO метаданных (page.tsx)
 * - Schema.org разметки (ArticleSchemaTag)
 * - Breadcrumbs навигации
 */

export interface ArticleData {
  slug: string;
  title: string;
  shortName: string; // Для breadcrumbs
  description: string;
  link: string;
  publishedTime: string;
  modifiedTime: string;
  readTime: string; // "7 минут", "10 минут" и т.д.
  wordCount?: number;
  articleSection?: string;
}

export const ARTICLES_DATA: Record<string, ArticleData> = {
  "duplicate-leads": {
    slug: "duplicate-leads",
    title: "Как работать с дублями сделок в amoCRM - 3 кейса на практике",
    shortName: "Как работать с дублями сделок",
    description:
      "Разбираем на реальных кейсах, как правильно объединять дубли сделок в amoCRM. Узнайте, как не потерять клиентов, сэкономить время менеджеров и навести порядок в базе CRM.",
    link: "/articles/duplicate-leads",
    publishedTime: "2025-10-01T00:00:00Z",
    modifiedTime: "2026-01-15T00:00:00Z",
    readTime: "7 минут",
    wordCount: 1250,
    articleSection: "Автоматизация CRM",
  },

  "amocrm-helps-sell": {
    slug: "amocrm-helps-sell",
    title: "amoCRM: почему эта CRM реально помогает бизнесу продавать больше",
    shortName: "Почему amoCRM помогает продавать",
    description:
      "Разбираем, чем amoCRM действительно помогает бизнесу продавать больше: воронка продаж, автоматизация, интеграции, ошибки внедрения и роль интегратора.",
    link: "/articles/amocrm-helps-sell",
    publishedTime: "2025-11-15T00:00:00Z",
    modifiedTime: "2026-01-15T00:00:00Z",
    readTime: "10 минут",
    wordCount: 1800,
    articleSection: "CRM для бизнеса",
  },

  "amocrm-quick-setup": {
    slug: "amocrm-quick-setup",
    title: "Быстрая настройка amoCRM: чеклист для новичков за 1 день",
    shortName: "Быстрая настройка amoCRM",
    description:
      "Пошаговый чеклист быстрой настройки amoCRM для новичков: воронка продаж, источники заявок, автоматизация, задачи и аналитика без лишних ошибок.",
    link: "/articles/amocrm-quick-setup",
    publishedTime: "2025-12-01T00:00:00Z",
    modifiedTime: "2026-01-15T00:00:00Z",
    readTime: "12 минут",
    wordCount: 2100,
    articleSection: "Настройка CRM",
  },
};

export const ARTICLES_LIST = Object.values(ARTICLES_DATA);
