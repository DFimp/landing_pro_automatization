import type { Metadata } from "next";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo/metadata";

export const HOME_PAGE_METADATA: Metadata = createSEOMetadata({
  title: "Про Автоматизацию — интеграция и автоматизация amoCRM",
  description:
    "Ваш эксперт по amoCRM: настройка, интеграции, автоматизация бизнес-процессов. Консультации по amoCRM, воронки продаж, CRM-системы. Полная автоматизация вашего бизнеса с amoCRM.",
  keywords: [
    ...CORE_KEYWORDS.brand,
    ...CORE_KEYWORDS.widgets.slice(0, 3),
    ...CORE_KEYWORDS.automation.slice(0, 2),
  ],
  canonical: "/",
  ogType: "website",
});

export const ACCOMPANIMENT_PAGE_METADATA: Metadata = createSEOMetadata({
  title:
    "Сопровождение amoCRM — техподдержка и консультации | Про Автоматизацию",
  description:
    "Профессиональное сопровождение amoCRM: техподдержка, консультации, доработки. Быстрое решение проблем. От 10 000₽/мес.",
  keywords: [
    "сопровождение amocrm",
    "техподдержка amocrm",
    "консультации amocrm",
    ...CORE_KEYWORDS.setup,
  ],
  canonical: "/accompaniment",
  ogType: "website",
});

export const AUDIT_PAGE_METADATA: Metadata = createSEOMetadata({
  title:
    "Аудит amoCRM — профессиональная проверка настройки | Про Автоматизацию",
  description:
    "Полный аудит настройки amoCRM: воронки, интеграции, автоматизация. Выявим ошибки и дадим рекомендации. От 15 000₽.",
  keywords: [
    "аудит amocrm",
    "проверка настройки amocrm",
    "оптимизация amocrm",
    ...CORE_KEYWORDS.setup,
  ],
  canonical: "/audit",
  ogType: "website",
});

export const CASES_PAGE_METADATA: Metadata = createSEOMetadata({
  title: "Кейсы внедрения amoCRM — реальные проекты | Про Автоматизацию",
  description:
    "Кейсы внедрения и автоматизации amoCRM для разных бизнесов. Реальные результаты, сроки, решения.",
  keywords: [
    "кейсы amocrm",
    "примеры внедрения amocrm",
    "проекты amocrm",
    ...CORE_KEYWORDS.automation,
  ],
  canonical: "/cases",
  ogType: "website",
});

export const LICENSE_PAGE_METADATA: Metadata = createSEOMetadata({
  title: "Лицензия amoCRM — покупка и продление | Про Автоматизацию",
  description:
    "Покупка и продление лицензий amoCRM. Официальный партнер. Помощь в выборе тарифа. Скидки для клиентов.",
  keywords: [
    "лицензия amocrm",
    "купить amocrm",
    "тарифы amocrm",
    ...CORE_KEYWORDS.setup,
  ],
  canonical: "/license",
  ogType: "website",
});

export const ARTICLES_PAGE_METADATA: Metadata = createSEOMetadata({
  title: "Статьи про amoCRM — база знаний | Про Автоматизацию",
  description:
    "Полезные статьи про amoCRM: настройка, автоматизация, интеграции, лайфхаки. Практические кейсы и инструкции.",
  keywords: [
    "статьи amocrm",
    "база знаний amocrm",
    "инструкции amocrm",
    ...CORE_KEYWORDS.automation,
  ],
  canonical: "/articles",
  ogType: "website",
});

export const WIDGETS_PAGE_METADATA: Metadata = createSEOMetadata({
  title: "Виджеты для amoCRM — готовые решения | Про Автоматизацию",
  description:
    "Готовые виджеты для amoCRM: Telegram уведомления, распределение лидов, объединение дублей, автозадачи, часовые пояса. От 490₽.",
  keywords: [
    ...CORE_KEYWORDS.widgets,
    "каталог виджетов amocrm",
    "готовые виджеты amocrm",
  ],
  canonical: "/widgets",
  ogType: "website",
});
