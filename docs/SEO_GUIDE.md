# SEO Оптимизация — Руководство

## Обзор

Проект оптимизирован для поисковых систем Яндекс и Google с приоритетом на Яндекс.

**Целевые запросы:**
- Про автоматизацию
- amoCRM / amocrm / amo crm
- Виджеты amoCRM
- Автоматизация и интеграции amoCRM

## Компоненты SEO

### 1. Breadcrumbs (Хлебные крошки)

Компонент с автоматической Schema.org разметкой.

```tsx
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs';

<Breadcrumbs
  items={[
    { name: 'Главная', href: '/' },
    { name: 'Виджеты', href: '/widgets' },
    { name: 'Дубли сделок', href: '/widgets/duplicate-leads' },
  ]}
/>
```

### 2. Schema.org разметка

Готовые компоненты для структурированных данных:

```tsx
import {
  OrganizationSchemaTag,
  ServiceSchemaTag,
  ArticleSchemaTag,
  FAQSchemaTag,
} from '@/shared/lib/seo';

// На главной странице
<OrganizationSchemaTag data={ORGANIZATION_DATA} />

// На странице услуги
<ServiceSchemaTag
  data={{
    serviceType: 'Разработка виджетов',
    name: 'Дубли сделок для amoCRM',
    description: '...',
    provider: { name: 'Про Автоматизацию' },
    areaServed: { name: 'Россия' },
  }}
/>

// На странице статьи
<ArticleSchemaTag
  data={{
    headline: 'Заголовок статьи',
    description: 'Описание',
    datePublished: '2025-01-14',
    dateModified: '2025-01-14',
    author: { name: 'Про Автоматизацию' },
    publisher: {
      name: 'Про Автоматизацию',
      logo: { url: 'https://pro-automatization.ru/logo.png' },
    },
  }}
/>

// FAQ секция
<FAQSchemaTag
  items={[
    { question: 'Вопрос?', answer: 'Ответ' },
    { question: 'Вопрос 2?', answer: 'Ответ 2' },
  ]}
/>
```

### 3. Метаданные страниц

Используйте утилиту `createSEOMetadata`:

```tsx
import { createSEOMetadata, CORE_KEYWORDS } from '@/shared/lib/seo';

export const metadata = createSEOMetadata({
  title: 'Дубли сделок для amoCRM — автоматическое объединение',
  description: 'Виджет автоматически находит и объединяет дубли сделок...',
  keywords: [
    'дубли сделок amocrm',
    'объединение дублей amocrm',
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: '/widgets/duplicate-leads',
  ogType: 'website',
});
```

Для статей:

```tsx
export const metadata = createSEOMetadata({
  title: 'Как работать с дублями сделок в amoCRM',
  description: 'Практическое руководство...',
  keywords: [...],
  canonical: '/articles/duplicate-leads',
  ogType: 'article',
  publishedTime: '2025-01-14T00:00:00Z',
  modifiedTime: '2025-01-14T00:00:00Z',
});
```

### 4. Google Analytics 4

Уже настроен! Для отслеживания событий:

```tsx
import { trackEvent } from '@/shared/scripts/GoogleAnalytics';

// Клик по кнопке
trackEvent('click', 'CTA', 'Заказать виджет');

// Отправка формы
trackEvent('form_submit', 'Lead', 'Форма обратной связи');
```

**Настройка GA_ID:**
Добавьте в `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Структура контента

### Заголовки страниц

**Виджеты:**
```
[Название виджета] для amoCRM — [выгода] | Про Автоматизацию
```

**Статьи:**
```
[Как/Что/Почему] [тема]: [результат]
```

### Описания

- Длина: 120-160 символов
- Структура: [Что делаем]. [Преимущества]. [CTA/цена].
- Обязательно упоминание amoCRM

### Ключевые слова

До 10 ключевых слов на страницу:
- 3-4 основных из семантического ядра
- 2-3 дополнительных
- 1-2 бренд-запроса

## Требования к контенту

### Структура статей

```markdown
# H1: [Основной ключ] — [результат]

## TL;DR
Краткий ответ без ссылок (120-150 символов)

## Что это
Answer capsule + развёрнутое объяснение

## Как работает
1. Шаг 1
2. Шаг 2
3. Шаг 3

## FAQ
**Вопрос?**
Краткий ответ.

## Заключение
Итог + CTA
```

### Оптимизация изображений

```tsx
import Image from 'next/image';

// Hero (LCP-критичное)
<Image
  src="/hero.jpg"
  alt="Описательный alt с ключевым словом"
  width={1920}
  height={1080}
  priority
  quality={90}
/>

// Остальные
<Image
  src="/image.jpg"
  alt="Описание"
  width={800}
  height={600}
  placeholder="blur"
/>
```

## Технические требования

### Core Web Vitals

- **LCP** ≤ 2.5 сек
- **INP** ≤ 200 мс
- **CLS** ≤ 0.1

### URL структура

- Без trailing slash: `/widgets/duplicate-leads` ✅
- Транслит (латиница)
- Плоская структура

### Рендеринг

- Главная: ISR (revalidate: 300)
- Услуги/виджеты: SSG
- Статьи: SSG + ISR (revalidate: 3600)

## Чек-лист SEO

### Яндекс Вебмастер
- [ ] Загрузить sitemap.xml
- [ ] Привязать Яндекс Метрику (ID: 104625972)
- [ ] Включить рендеринг JavaScript
- [ ] Настроить регион (Москва/Россия)
- [ ] Добавить в Яндекс Бизнес
- [ ] Настроить IndexNow

### Google Search Console
- [ ] Добавить сайт и подтвердить
- [ ] Загрузить sitemap.xml
- [ ] Проверить Core Web Vitals
- [ ] Отслеживать ошибки индексации

### Google Analytics 4
- [ ] Заменить GA_ID в `.env.local`
- [ ] Настроить цели и события
- [ ] Проверить отслеживание переходов

## Полезные ссылки

- [Яндекс Вебмастер](https://webmaster.yandex.ru/)
- [Яндекс Бизнес](https://business.yandex.ru/)
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com/)
- [Schema.org](https://schema.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

## Контакты

По вопросам SEO оптимизации обращайтесь к разработчикам проекта.
