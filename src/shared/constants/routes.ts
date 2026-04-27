import { WIDGETS } from "./widgets";

export const SITE_URL = "https://pro-automatization.ru";

// Основные страницы
export const ROUTES = {
  HOME: { path: "/", name: "Главная" },
  AUDIT: { path: "/audit", name: "Аудит amoCRM" },
  MANAGED: { path: "/managed", name: "Сопровождение" },
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
  BUSINESS_PROCESS_IMPLEMENTATION: {
    path: "/articles/amocrm-business-process-implementation",
    name: "Внедрение amoCRM - не просто настройка CRM",
  },
  REMOVE_MANUAL_WORK: {
    path: "/articles/amocrm-remove-manual-work",
    name: "Автоматизация отдела продаж в amoCRM",
  },
  STANDARD_SOLUTIONS: {
    path: "/articles/amocrm-standard-solutions",
    name: "Виджеты для amoCRM",
  },
  RUINED_SALES: {
    path: "/articles/amocrm-ruined-sales",
    name: "Дубли в amoCRM",
  },
  WORKING_CRM: {
    path: "/articles/amocrm-working-crm",
    name: "Настройка amoCRM",
  },
  LEAD_CONTROL: {
    path: "/articles/amocrm-lead-control",
    name: "Контроль заявок в amoCRM",
  },
  COST_DEPENDENCE: {
    path: "/articles/amocrm-cost-dependence",
    name: "Цена настройки amoCRM",
  },
  CHECK_SETTINGS: {
    path: "/articles/amocrm-check-settings",
    name: "CRM-аудит amoCRM",
  },
  INCORRECT_SETTINGS: {
    path: "/articles/amocrm-incorrect-settings",
    name: "Неправильная настройка amoCRM",
  },
  REAL_HELP: {
    path: "/articles/amocrm-real-help",
    name: "Автоматические задачи в amoCRM",
  },
  NOTICE_IN_TG: {
    path: "/articles/amocrm-notice-in-tg",
    name: "Уведомления из amoCRM в Telegram",
  },
  REPORTS_MANAGER: {
    path: "/articles/amocrm-reports-manager",
    name: "Отчеты руководителю отдела продаж в amoCRM",
  },
  SETTING_ITSELF: {
    path: "/articles/amocrm-setting-itself",
    name: "Почему CRM не работает сама по себе",
  },
  APPLICATION_RULES: {
    path: "/articles/amocrm-application-rules",
    name: "Регламент обработки заявок в amoCRM",
  },
  IMPLEMENT_ERRORS: {
    path: "/articles/amocrm-implement-errors",
    name: "Ошибки внедрения amoCRM",
  },
  SALES_DEPARTMENT: {
    path: "/articles/amocrm-sales-department",
    name: "До и после автоматизации amoCRM",
  },
  WHAT_CHOOSE: {
    path: "/articles/amocrm-what-choose",
    name: "Виджет или разработка для amoCRM",
  },
  CHOOSE_CONTRACTOR: {
    path: "/articles/amocrm-choose-contractor",
    name: "Как выбрать подрядчика по amoCRM",
  },
  FUNNELS_TASKS_CONTROL: {
    path: "/articles/amocrm-funnels-tasks-control",
    name: "Настройка amoCRM для отдела продаж",
  },
  SUPPORT: {
    path: "/articles/amocrm-support",
    name: "Сопровождение amoCRM после внедрения",
  },
} as const;

// Все пути одним списком
export const ALL_ROUTES = {
  ...ROUTES,
  ...ARTICLES_ROUTES,
  ...Object.fromEntries(WIDGETS.map((w) => [w.key.toUpperCase(), w.route])),
} as const;
