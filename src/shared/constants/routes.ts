import { WIDGETS } from "./widgets";

export const SITE_URL = "https://pro-automatization.ru";

// Основные страницы
export const ROUTES = {
  HOME: { path: "/", name: "Главная" },
  AUDIT: { path: "/audit", name: "Аудит amoCRM" },
  ACCOMPANIMENT: { path: "/accompaniment", name: "Сопровождение" },
  WIDGETS: { path: "/widgets", name: "Виджеты amoCRM" },
  ARTICLES: { path: "/articles", name: "Статьи" },
  LICENSE: { path: "/license", name: "Лицензии amoCRM" },
  CASES: { path: "/cases", name: "Кейсы" },
} as const;

export const WIDGET_ROUTES = WIDGETS.map((w) => w.route);

export const ARTICLES_ROUTES = {
  DUPLICATE_CONTACTS: {
    path: "/articles/duplicate-leads",
    name: "Дубликаты контактов",
  },
  HELPS_SELL: {
    path: "/articles/amocrm-helps-sell",
    name: "Как CRM помогает продавать",
  },
  QUICK_SETUP: {
    path: "/articles/amocrm-quick-setup",
    name: "Быстрая настройка amoCRM",
  },
} as const;

// Все пути одним списком
export const ALL_ROUTES = {
  ...ROUTES,
  ...ARTICLES_ROUTES,
  ...Object.fromEntries(WIDGETS.map((w) => [w.key.toUpperCase(), w.route])),
} as const;
