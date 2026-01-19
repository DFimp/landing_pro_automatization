import { WIDGETS } from "./widgets";

export const SITE_URL = 'https://pro-automatization.ru';

// Основные страницы
export const ROUTES = {
  HOME: '/',
  AUDIT: '/audit',
  ACCOMPANIMENT: '/accompaniment',
  WIDGETS: '/widgets',
  ARTICLES: '/articles',
  LICENSE: '/license',
  CASES: '/cases',
} as const;

export const WIDGET_ROUTES = WIDGETS.map((w) => w.route);

export const ARTICLES_ROUTES = {
  DUPLICATE_CONTACTS: '/articles/duplicate-leads',
  HELPS_SELL: '/articles/helps-sell',
  QUICK_SETUP: '/articles/quick-setup',
}

// Все пути одним списком
export const ALL_ROUTES = {
  ...ROUTES,
  ...ARTICLES_ROUTES,
  ...Object.fromEntries(WIDGETS.map(w => [w.key.toUpperCase(), w.route]))
} as const;