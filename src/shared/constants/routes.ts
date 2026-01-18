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

export const widgetRoute = (slug: string) => `/widgets/${slug}`;

export const ARTICLES_ROUTES = {
  DUPLICATE_CONTACTS: '/articles/duplicate-leads',
}

// Все статьи одним списком (на будущее)
export const ALL_ARTICLES_ROUTES = Object.values(ARTICLES_ROUTES);

// Все пути одним списком
export const ALL_ROUTES = {
  ...ROUTES,
  ...ARTICLES_ROUTES,
} as const;