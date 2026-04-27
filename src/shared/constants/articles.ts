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
    title: "Как работать с дублями сделок в amoCRM — 3 кейса на практике",
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

  "amocrm-business-process-implementation": {
    slug: "amocrm-business-process-implementation",
    title: "Внедрение amoCRM под процессы бизнеса - не просто настройка CRM",
    shortName: "Внедрение amoCRM - не просто настройка CRM",
    description:
      "Как внедрить amoCRM под реальные процессы бизнеса: заявки, этапы, задачи, роли, источники, отчеты, автоматизация и контроль продаж.",
    link: "/articles/amocrm-business-process-implementation",
    publishedTime: "2026-04-27T00:00:00Z",
    modifiedTime: "2026-04-27T00:00:00Z",
    readTime: "14 минут",
    wordCount: 2800,
    articleSection: "Внедрение CRM",
  },

  "amocrm-remove-manual-work": {
    slug: "amocrm-remove-manual-work",
    title: "Автоматизация отдела продаж в amoCRM - убрать ручную работу",
    shortName: "Автоматизация отдела продаж в amoCRM",
    description:
      "Автоматизация отдела продаж в amoCRM: заявки, задачи, недозвоны, распределение, уведомления, документы, счета, дубли, отчеты и контроль менеджеров.",
    link: "/articles/amocrm-remove-manual-work",
    publishedTime: "2026-04-27T00:00:00Z",
    modifiedTime: "2026-04-27T00:00:00Z",
    readTime: "15 минут",
    wordCount: 3300,
    articleSection: "Автоматизация CRM",
  },

  "amocrm-standard-solutions": {
    slug: "amocrm-standard-solutions",
    title: "Виджеты для amoCRM: когда стандартных функций уже не хватает",
    shortName: "Виджеты для amoCRM",
    description:
      "Разбираем, когда бизнесу нужны виджеты для amoCRM, какие задачи они закрывают и как понять, что пора дорабатывать CRM.",
    link: "/articles/amocrm-standard-solutions",
    publishedTime: "2026-04-27T00:00:00Z",
    modifiedTime: "2026-04-27T00:00:00Z",
    readTime: "13 минут",
    wordCount: 3000,
    articleSection: "Виджеты amoCRM",
  },

  "amocrm-ruined-sales": {
    slug: "amocrm-ruined-sales",
    title: "Дубли в amoCRM: почему портят продажи и как их убрать",
    shortName: "Дубли в amoCRM",
    description:
      "Разбираем, чем опасны дубли контактов и сделок в amoCRM, почему они появляются и как навести порядок в базе без ручной чистки.",
    link: "/articles/amocrm-ruined-sales",
    publishedTime: "2026-04-27T00:00:00Z",
    modifiedTime: "2026-04-27T00:00:00Z",
    readTime: "14 минут",
    wordCount: 3000,
    articleSection: "Дубли в amoCRM",
  },

  "amocrm-working-crm": {
    slug: "amocrm-working-crm",
    title: "Настройка amoCRM: что нужно сделать, чтобы CRM работала",
    shortName: "Настройка amoCRM",
    description:
      "Разбираем, что входит в настройку amoCRM: воронки, поля, задачи, источники, права, уведомления, аналитику и контроль менеджеров.",
    link: "/articles/amocrm-working-crm",
    publishedTime: "2026-04-27T00:00:00Z",
    modifiedTime: "2026-04-27T00:00:00Z",
    readTime: "14 минут",
    wordCount: 3200,
    articleSection: "Настройка amoCRM",
  },

  "amocrm-lead-control": {
    slug: "amocrm-lead-control",
    title: "Как не терять заявки в amoCRM - настройка контроля лидов",
    shortName: "Контроль заявок в amoCRM",
    description:
      "Разбираем, почему заявки теряются в amoCRM и что настроить: источники, задачи, уведомления, этапы, контроль менеджеров и аналитику.",
    link: "/articles/amocrm-lead-control",
    publishedTime: "2026-04-27T00:00:00Z",
    modifiedTime: "2026-04-27T00:00:00Z",
    readTime: "14 минут",
    wordCount: 3200,
    articleSection: "Контроль лидов",
  },

  "amocrm-cost-dependence": {
    slug: "amocrm-cost-dependence",
    title: "Настройка amoCRM цена - от чего зависит стоимость работ",
    shortName: "Цена настройки amoCRM",
    description:
      "Сколько стоит настройка amoCRM: что входит в работу, от чего зависит цена, какие бывают уровни настройки и почему дешевый запуск часто приходится переделывать.",
    link: "/articles/amocrm-cost-dependence",
    publishedTime: "2026-04-27T00:00:00Z",
    modifiedTime: "2026-04-27T00:00:00Z",
    readTime: "14 минут",
    wordCount: 3300,
    articleSection: "Стоимость настройки amoCRM",
  },

  "amocrm-check-settings": {
    slug: "amocrm-check-settings",
    title: "CRM-аудит amoCRM: что показывает проверка настроек",
    shortName: "CRM-аудит amoCRM",
    description:
      "Разбираем, зачем нужен CRM-аудит amoCRM, какие проблемы он находит и как понять, что текущая настройка мешает продажам.",
    link: "/articles/amocrm-check-settings",
    publishedTime: "2026-04-27T00:00:00Z",
    modifiedTime: "2026-04-27T00:00:00Z",
    readTime: "14 минут",
    wordCount: 3200,
    articleSection: "CRM-аудит",
  },

  "amocrm-incorrect-settings": {
    slug: "amocrm-incorrect-settings",
    title: "Как понять, что amoCRM настроена неправильно",
    shortName: "Неправильная настройка amoCRM",
    description:
      "Разбираем признаки неправильной настройки amoCRM: потерянные заявки, просрочки, дубли, слабый контроль менеджеров и неточная аналитика.",
    link: "/articles/amocrm-incorrect-settings",
    publishedTime: "2026-04-27T00:00:00Z",
    modifiedTime: "2026-04-27T00:00:00Z",
    readTime: "14 минут",
    wordCount: 3300,
    articleSection: "Ошибки настройки amoCRM",
  },

  "amocrm-real-help": {
    slug: "amocrm-real-help",
    title: "Автоматические задачи в amoCRM: где они реально помогают",
    shortName: "Автоматические задачи в amoCRM",
    description:
      "Разбираем, как автоматические задачи в amoCRM помогают не терять заявки, контролировать менеджеров, обрабатывать недозвоны и снижать ручную работу.",
    link: "/articles/amocrm-real-help",
    publishedTime: "2026-04-27T00:00:00Z",
    modifiedTime: "2026-04-27T00:00:00Z",
    readTime: "14 минут",
    wordCount: 3300,
    articleSection: "Задачи в amoCRM",
  },

  "amocrm-notice-in-tg": {
    slug: "amocrm-notice-in-tg",
    title: "Уведомления из amoCRM в Telegram: когда они нужны бизнесу",
    shortName: "Уведомления из amoCRM в Telegram",
    description:
      "Разбираем, зачем нужны Telegram-уведомления из amoCRM, какие события стоит выводить в чат и как не превратить уведомления в шум.",
    link: "/articles/amocrm-notice-in-tg",
    publishedTime: "2026-04-27T00:00:00Z",
    modifiedTime: "2026-04-27T00:00:00Z",
    readTime: "14 минут",
    wordCount: 3300,
    articleSection: "Уведомления в amoCRM",
  },

  "amocrm-reports-manager": {
    slug: "amocrm-reports-manager",
    title: "Какие отчеты нужны руководителю отдела продаж в amoCRM",
    shortName: "Отчеты руководителю продаж в amoCRM",
    description:
      "Разбираем, какие отчеты в amoCRM нужны руководителю продаж: заявки, источники, задачи, менеджеры, конверсия, причины отказов и потери.",
    link: "/articles/amocrm-reports-manager",
    publishedTime: "2026-04-27T00:00:00Z",
    modifiedTime: "2026-04-27T00:00:00Z",
    readTime: "14 минут",
    wordCount: 3400,
    articleSection: "Отчеты в amoCRM",
  },
};

export const ARTICLES_LIST = Object.values(ARTICLES_DATA);
