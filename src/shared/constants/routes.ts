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

// Страницы виджетов
export const WIDGET_ROUTES = {
  AUTO_TASKS: '/widgets/auto-tasks',
  DUPLICATE_CONTACTS: '/widgets/duplicate-contacts',
  DUPLICATE_LEADS: '/widgets/duplicate-leads',
  LEAD_DISTRIBUTION: '/widgets/lead-distribution',
  MASSIVE_LEADS: '/widgets/massive-leads',
  TELEGRAM_BUTTON: '/widgets/telegram-button',
  TELEGRAM_NOTIFY: '/widgets/telegram-notify',
  TIME_ZONE: '/widgets/time-zone',
  WHATSAPP_BUTTON: '/widgets/whatsapp-button',
  CLOSING_BAN: '/widgets/closing-ban',
  DELETE_TASKS_BAN: '/widgets/delete-tasks-ban',
  SHIFT_SELECT: '/widgets/shift-select',
  GROUP_FIELDS: '/widgets/group-fields',
  TRANSFER_FIELDS: '/widgets/transfer-fields',
  DELETE_NOTES_BAN: '/widgets/delete-notes-ban',
  GOOGLE_SHEETS: '/widgets/google-sheets',
} as const;

export const ARTICLES_ROUTES = {
  DUPLICATE_CONTACTS: '/articles/duplicate-leads',
}

// Все виджеты одним списком (для удобства)
export const ALL_WIDGET_ROUTES = Object.values(WIDGET_ROUTES);

// Все статьи одним списком (на будущее)
export const ALL_ARTICLES_ROUTES = Object.values(ARTICLES_ROUTES);

// Все пути одним списком
export const ALL_ROUTES = {
  ...ROUTES,
  ...WIDGET_ROUTES,
  ...ARTICLES_ROUTES,
} as const;