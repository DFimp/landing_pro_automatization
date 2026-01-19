// ============================================
// WIDGETS - для навигации, footer, search
// ============================================

const widgetRoute = (slug: string) => `/widgets/${slug}`;

export const WIDGETS = [
    {
        key: "auto-tasks",
        title: "Автозадачи",
        route: widgetRoute("auto-tasks"),
        aliases: ["задачи", "авто", "автоматизация", "сделки", "робот", "autotasks"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "duplicate-contacts",
        title: "Дубликаты контактов",
        route: widgetRoute("duplicate-contacts"),
        aliases: ["дубли", "контакты", "объединение", "склейка", "duplicate contacts"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "duplicate-leads",
        title: "Дубликаты лидов",
        route: widgetRoute("duplicate-leads"),
        aliases: ["дубли", "лиды", "сделки", "объединение", "склейка", "duplicate leads"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "lead-distribution",
        title: "Распределение лидов",
        route: widgetRoute("lead-distribution"),
        aliases: ["распределение", "лиды", "сделки", "менеджеры", "очередь", "назначение"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "massive-leads",
        title: "Массовые лиды",
        route: widgetRoute("massive-leads"),
        aliases: ["массовое", "создание", "пакетно", "импорт", "лиды", "сделки"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "telegram-button",
        title: "Кнопка Telegram",
        route: widgetRoute("telegram-button"),
        aliases: ["telegram", "телеграм", "тг", "tg", "кнопка", "переход", "чат"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "telegram-notify",
        title: "Уведомления Telegram",
        route: widgetRoute("telegram-notify"),
        aliases: ["telegram", "телеграм", "тг", "tg", "уведомления", "бот", "оповещения", "notify"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "time-zone",
        title: "Часовые пояса",
        route: widgetRoute("time-zone"),
        aliases: ["время", "часовой пояс", "таймзона", "регион", "телефон", "timezone", "utc"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "whatsapp-button",
        title: "Кнопка WhatsApp",
        route: widgetRoute("whatsapp-button"),
        aliases: ["whatsapp", "ватсап", "вацап", "wa", "wapp", "кнопка", "переход", "чат"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "closing-ban",
        title: "Запрет закрытия",
        route: widgetRoute("closing-ban"),
        aliases: ["запрет", "закрытие", "задачи", "результат", "обязательное поле", "контроль"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "delete-tasks-ban",
        title: "Запрет удаления задач",
        route: widgetRoute("delete-tasks-ban"),
        aliases: ["запрет", "удаление", "задачи", "контроль", "защита"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "shift-select",
        title: "Выбор смены",
        route: widgetRoute("shift-select"),
        aliases: ["shift", "выделение", "групповое", "множественный выбор", "выбор строк"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "group-fields",
        title: "Группировка полей",
        route: widgetRoute("group-fields"),
        aliases: ["группировка", "поля", "карточка", "интерфейс", "структура"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "transfer-fields",
        title: "Перенос полей",
        route: widgetRoute("transfer-fields"),
        aliases: ["перенос", "копирование", "поля", "миграция", "передача значений"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "delete-notes-ban",
        title: "Запрет удаления заметок",
        route: widgetRoute("delete-notes-ban"),
        aliases: ["запрет", "удаление", "заметки", "комментарии", "история", "контроль"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "setting-feed",
        title: "Настройка ленты",
        route: widgetRoute("setting-feed"),
        aliases: ["лента", "события", "фильтр", "активности", "timeline", "feed"],
        showInFooter: true,
        showInSearch: true,
    },
    {
        key: "google-sheets",
        title: "Google Sheets",
        route: widgetRoute("google-sheets"),
        aliases: ["гугл таблицы", "google", "sheets", "таблицы", "экспорт", "импорт", "csv"],
        showInFooter: true,
        showInSearch: true,
    },
] as const;

export const FOOTER_WIDGETS = WIDGETS.filter((w) => w.showInFooter);
export const SEARCH_WIDGETS = WIDGETS.filter((w) => w.showInSearch);

export const POPULAR_WIDGET_KEYS = [
  "telegram-notify",
  "lead-distribution",
  "duplicate-leads",
  "duplicate-contacts",
] as const satisfies readonly WidgetKey[];

export type Widget = typeof WIDGETS[number];
export type WidgetKey = Widget["key"];

// ============================================
// WIDGETS_DATA - для SEO, Schema.org, метаданных
// ============================================

/**
 * Единый источник данных для всех виджетов (SEO, Schema.org)
 * Используется для:
 * - Списка виджетов (WidgetsList)
 * - SEO метаданных (page.tsx)
 * - Schema.org разметки (ServiceSchemaTag)
 * - Breadcrumbs навигации
 */

export interface WidgetData {
  slug: string;
  title: string;
  shortName: string; // Для breadcrumbs
  description: string;
  link: string;
  variant: number;
  tags: string[];
  keywords: string[];
}

export const WIDGETS_DATA: Record<string, WidgetData> = {
  'telegram-notify': {
    slug: 'telegram-notify',
    title: 'Телеграм уведомления для amoCRM',
    shortName: 'Telegram уведомления',
    description: 'Получайте мгновенные уведомления в Telegram и запускайте SalesBot одним нажатием. Полная автоматизация коммуникаций с клиентами прямо в мессенджере.',
    link: '/widgets/telegram-notify',
    variant: 2,
    tags: ['Соц сети', 'Telegram', 'тг', 'телеграм', 'Уведомления'],
    keywords: [
      'telegram уведомления amocrm',
      'телеграм интеграция amocrm',
      'уведомления сделок telegram',
      'salesbot amocrm',
    ],
  },

  'lead-distribution': {
    slug: 'lead-distribution',
    title: 'Распределение сделок для amoCRM',
    shortName: 'Распределение сделок',
    description: 'Автоматическое распределение новых сделок между менеджерами по процентам, максимальному количеству или равными долями. Учет контактов, компаний и активности менеджеров.',
    link: '/widgets/lead-distribution',
    variant: 1,
    tags: ['Продажи', 'Распределение'],
    keywords: [
      'распределение сделок amocrm',
      'распределение лидов amocrm',
      'маршрутизация сделок amocrm',
      'автораспределение amocrm',
    ],
  },

  'duplicate-leads': {
    slug: 'duplicate-leads',
    title: 'Дубли сделок (объединение дублей сделок) для amoCRM',
    shortName: 'Дубли сделок',
    description: 'Автоматическое склеивание дублированных сделок с сохранением всех важных данных. Экономьте время менеджеров и улучшайте качество вашей базы данных.',
    link: '/widgets/duplicate-leads',
    variant: 1,
    tags: ['База', 'Дубли', 'Качество данных'],
    keywords: [
      'дубли сделок amocrm',
      'объединение дублей amocrm',
      'склеивание сделок amocrm',
      'поиск дублей amocrm',
    ],
  },

  'duplicate-contacts': {
    slug: 'duplicate-contacts',
    title: 'Дубли контактов (объединение дублей контактов) для amoCRM',
    shortName: 'Дубли контактов',
    description: 'Автоматическое склеивание дублированных контактов с умными алгоритмами поиска. Экономьте время менеджеров и улучшайте качество вашей базы контактов.',
    link: '/widgets/duplicate-contacts',
    variant: 3,
    tags: ['База', 'Дубли', 'Контакты', 'Качество данных'],
    keywords: [
      'дубли контактов amocrm',
      'объединение контактов amocrm',
      'склеивание контактов amocrm',
      'поиск дублей контактов',
    ],
  },

  'time-zone': {
    slug: 'time-zone',
    title: 'Регион по телефону для amoCRM',
    shortName: 'Часовые пояса',
    description: 'Автоматически определяйте регион и текущее время клиента по номеру телефона. Никогда больше не разбудите клиента в 6 утра или не позвоните в полночь!',
    link: '/widgets/time-zone',
    variant: 4,
    tags: ['Телефония', 'Продажи'],
    keywords: [
      'часовые пояса amocrm',
      'время клиента amocrm',
      'учет часовых поясов',
      'планирование звонков amocrm',
    ],
  },

  'auto-tasks': {
    slug: 'auto-tasks',
    title: 'Автозадачи в сделках для amoCRM',
    shortName: 'Автозадачи',
    description: 'Автоматически создавайте задачи для сделок без активности. Настраиваемые статусы, типы задач и ответственные. Увеличьте конверсию на 35% благодаря своевременному контакту с клиентами.',
    link: '/widgets/auto-tasks',
    variant: 1,
    tags: ['Задачи', 'Контроль', 'Продажи'],
    keywords: [
      'автозадачи amocrm',
      'автоматические задачи amocrm',
      'контроль сделок amocrm',
      'напоминания amocrm',
    ],
  },

  'massive-leads': {
    slug: 'massive-leads',
    title: 'Массовое создание сделок для amoCRM',
    shortName: 'Массовое создание',
    description: 'Автоматизируйте создание сделок для всех ваших контактов одним нажатием. Забудьте о рутинной работе - виджет сделает всё за вас быстро и без ошибок.',
    link: '/widgets/massive-leads',
    variant: 2,
    tags: ['Продажи', 'Автоматизация'],
    keywords: [
      'массовое создание сделок amocrm',
      'импорт сделок amocrm',
      'загрузка сделок amocrm',
      'массовые операции amocrm',
    ],
  },

  'closing-ban': {
    slug: 'closing-ban',
    title: 'Запрет закрытия задач без результата для amoCRM',
    shortName: 'Запрет закрытия',
    description: 'Виджет не даст закрыть задачу без описания результата. Полная прозрачность работы команды и контроль качества выполнения.',
    link: '/widgets/closing-ban',
    variant: 1,
    tags: ['Задачи', 'Контроль'],
    keywords: [
      'запрет закрытия сделок amocrm',
      'блокировка закрытия amocrm',
      'контроль сделок amocrm',
      'обязательные поля amocrm',
    ],
  },

  'telegram-button': {
    slug: 'telegram-button',
    title: 'Мгновенный переход в Telegram из amoCRM',
    shortName: 'Кнопка Telegram',
    description: 'Превратите каждый номер телефона в прямую ссылку на чат с клиентом в Telegram. Больше никакого копирования номеров и поиска контактов!',
    link: '/widgets/telegram-button',
    variant: 1,
    tags: ['Соц сети', 'Telegram', 'тг', 'телеграм'],
    keywords: [
      'кнопка telegram amocrm',
      'telegram чат amocrm',
      'быстрый переход telegram',
      'интеграция telegram amocrm',
    ],
  },

  'whatsapp-button': {
    slug: 'whatsapp-button',
    title: 'Мгновенный переход в WhatsApp из amoCRM',
    shortName: 'Кнопка WhatsApp',
    description: 'Превратите каждый номер телефона в прямую ссылку на чат с клиентом в WhatsApp. Мгновенное общение с клиентами прямо из карточки сделки!',
    link: '/widgets/whatsapp-button',
    variant: 3,
    tags: ['Соц сети', 'WhatsApp', 'Ватсап', 'Продажи'],
    keywords: [
      'кнопка whatsapp amocrm',
      'whatsapp чат amocrm',
      'быстрый переход whatsapp',
      'интеграция whatsapp amocrm',
    ],
  },

  'delete-tasks-ban': {
    slug: 'delete-tasks-ban',
    title: 'Запрет удаления задач для amoCRM',
    shortName: 'Запрет удаления задач',
    description: 'Полный контроль над удалением задач в amoCRM. Ограничьте удаление для менеджеров, настраивайте исключения по типам задач и защитите вашу воронку от случайных и намеренных потерь активности.',
    link: '/widgets/delete-tasks-ban',
    variant: 4,
    tags: ['Задачи', 'Контроль'],
    keywords: [
      'запрет удаления задач amocrm',
      'защита задач amocrm',
      'контроль задач amocrm',
      'права доступа задачи amocrm',
    ],
  },

  'shift-select': {
    slug: 'shift-select',
    title: 'Групповое выделение (Shift-выбор) для amoCRM',
    shortName: 'Множественный выбор',
    description: 'Мгновенно выделяйте группы сделок, контактов и компаний с помощью Shift и протягивания мышкой. Ускорьте массовое изменение ответственных, статусов, запуск автоматизаций и другие групповый действия в amoCRM.',
    link: '/widgets/shift-select',
    variant: 1,
    tags: ['Интерфейс', 'Ускорение работы'],
    keywords: [
      'множественный выбор amocrm',
      'массовый выбор amocrm',
      'shift выбор amocrm',
      'быстрые операции amocrm',
    ],
  },

  'group-fields': {
    slug: 'group-fields',
    title: 'Группировка полей для amoCRM',
    shortName: 'Группировка полей',
    description: 'Автоматически группируйте поля в карточке сделки по логической структуре. Удобная навигация, свертываемые группы и аккуратный внешний вид, даже при большом числе полей.',
    link: '/widgets/group-fields',
    variant: 2,
    tags: ['Интерфейс', 'Карточка сделки'],
    keywords: [
      'группировка полей amocrm',
      'организация полей amocrm',
      'настройка карточек amocrm',
      'интерфейс amocrm',
    ],
  },

  'transfer-fields': {
    slug: 'transfer-fields',
    title: 'Перенос длинных названий полей для amoCRM',
    shortName: 'Перенос полей',
    description: 'Автоматически переносит длинные названия пользовательских полей в карточках amoCRM. Убирает многоточия, предотвращает наложения и делает интерфейс аккуратным и читаемым.',
    link: '/widgets/transfer-fields',
    variant: 1,
    tags: ['Интерфейс', 'Карточка сделки'],
    keywords: [
      'перенос полей amocrm',
      'копирование данных amocrm',
      'перенос данных amocrm',
      'автозаполнение amocrm',
    ],
  },

  'setting-feed': {
    slug: 'setting-feed',
    title: 'Фильтр ленты событий в сделке для amoCRM',
    shortName: 'Настройка ленты',
    description: 'Фильтруйте ленту событий в карточке сделки по типам: задачи, примечания, письма, звонки и чаты. Быстро находите нужную активность без прокрутки и хаоса, даже в длинной истории сделки.',
    link: '/widgets/setting-feed',
    variant: 1,
    tags: ['Интерфейс', 'Карточка сделки'],
    keywords: [
      'настройка ленты amocrm',
      'кастомизация ленты amocrm',
      'фильтры событий amocrm',
      'интерфейс ленты amocrm',
    ],
  },

  'delete-notes-ban': {
    slug: 'delete-notes-ban',
    title: 'Запрет удаления и редактирования примечаний для amoCRM',
    shortName: 'Запрет удаления примечаний',
    description: 'Полный контроль над удалением и редактированием примечаний в amoCRM. Ограничивайте действия менеджеров, защищайте историю коммуникаций и предотвращайте случайные или намеренные потери важных комментариев.',
    link: '/widgets/delete-notes-ban',
    variant: 3,
    tags: ['Интерфейс', 'Карточка сделки'],
    keywords: [
      'запрет удаления примечаний amocrm',
      'защита примечаний amocrm',
      'контроль удаления amocrm',
      'права доступа amocrm',
    ],
  },

  'google-sheets': {
    slug: 'google-sheets',
    title: 'Google Таблицы для amoCRM',
    shortName: 'Google Таблицы',
    description: 'Экспортируйте данные из amoCRM в Google Таблицы. Автообновление, гибкие настройки, отчеты в реальном времени.',
    link: '/widgets/google-sheets',
    variant: 2,
    tags: ['Интеграции', 'Google'],
    keywords: [
      'google таблицы amocrm',
      'экспорт amocrm google sheets',
      'синхронизация amocrm google',
      'интеграция google sheets amocrm',
    ],
  },

  'google-docs': {
    slug: 'google-docs',
    title: 'Google Документы для amoCRM',
    shortName: 'Google Документы',
    description: 'Автоматически создавайте документы из шаблонов Google Docs. Договоры, счета, акты за секунду.',
    link: '/widgets/google-docs',
    variant: 1,
    tags: ['Интеграции', 'Google'],
    keywords: [
      'google документы amocrm',
      'автогенерация документов amocrm',
      'шаблоны google docs amocrm',
      'создание договоров amocrm',
    ],
  },
};

const HIDDEN_WIDGETS = ['google-sheets', 'google-docs'] as const;

export const WIDGETS_LIST = Object.values(WIDGETS_DATA).filter(
  (w) => !HIDDEN_WIDGETS.includes(w.slug as any)
);
