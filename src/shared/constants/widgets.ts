// ============================================
// WIDGETS - единый источник данных для всех виджетов
// ============================================

/**
 * Единый источник данных для всех виджетов
 * Используется для:
 * - Навигации, footer, search (title, aliases)
 * - SEO метаданных (seoTitle, description)
 * - Schema.org разметки (ServiceSchemaTag)
 * - Списка виджетов (WidgetsList) - tags
 * - Breadcrumbs навигации (title)
 */

export interface Widget {
  key: string;
  title: string; // Короткое название для навигации/footer/breadcrumbs
  seoTitle: string; // SEO-название с "для amoCRM"
  description: string;
  route: string;

  tags: string[];
  aliases: readonly string[];
  showInFooter: boolean;
  showInSearch: boolean;
  hidden?: boolean; // Скрыт из публичного списка (google-sheets, google-docs)
  clientId?: string; // OAuth client_id для установки виджета
}

// Генерация OAuth URL для установки виджета
export const getWidgetInstallUrl = (clientId: string) =>
  `https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=${clientId}`;

const widgetRoute = (slug: string) => `/widgets/${slug}`;

export const WIDGETS: Widget[] = [
  {
    key: "telegram-notify",
    title: "Уведомления Telegram",
    seoTitle: "Телеграм уведомления для amoCRM",
    description:
      "Получайте мгновенные уведомления в Telegram и запускайте SalesBot одним нажатием. Полная автоматизация коммуникаций с клиентами прямо в мессенджере.",
    route: widgetRoute("telegram-notify"),
    tags: ["Соц сети", "Telegram", "тг", "телеграм", "Уведомления"],
    aliases: [
      "telegram",
      "телеграм",
      "тг",
      "tg",
      "уведомления",
      "бот",
      "оповещения",
      "notify",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "c31be896-9148-4ec1-9d7a-2aba7b16906e",
  },
  {
    key: "max-notice",
    title: "МАКС(MAX) уведомления",
    seoTitle: "МАКС(MAX) уведомления для amoCRM",
    description:
      "Получайте уведомления из amoCRM в MAX и запускайте нужные действия по сделке в один клик. Поддержка сценариев по этапам воронки и расписанию отправки.",
    route: widgetRoute("max-notice"),
    tags: ["Соц сети", "MAX", "Уведомления", "Автоматизация"],
    aliases: [
      "max",
      "max notice",
      "max-notice",
      "уведомления max",
      "мессенджер max",
      "оповещения",
      "notify",
    ],
    showInFooter: true,
    showInSearch: true,
  },
  {
    key: "lead-distribution",
    title: "Распределение лидов",
    seoTitle: "Распределение сделок для amoCRM",
    description:
      "Автоматическое распределение новых сделок между менеджерами по процентам, максимальному количеству или равными долями. Учет контактов, компаний и активности менеджеров.",
    route: widgetRoute("lead-distribution"),
    tags: ["Продажи", "Распределение"],
    aliases: [
      "распределение",
      "лиды",
      "сделки",
      "менеджеры",
      "очередь",
      "назначение",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "9bd50964-9b79-40a5-b786-59c079f7edc8",
  },
  {
    key: "duplicate-leads",
    title: "Дубликаты лидов",
    seoTitle: "Дубли сделок (объединение дублей сделок) для amoCRM",
    description:
      "Автоматическое склеивание дублированных сделок с сохранением всех важных данных. Экономьте время менеджеров и улучшайте качество вашей базы данных.",
    route: widgetRoute("duplicate-leads"),
    tags: ["База", "Дубли", "Качество данных"],
    aliases: [
      "дубли",
      "лиды",
      "сделки",
      "объединение",
      "склейка",
      "duplicate leads",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "9036b829-2690-470d-9248-e7c4bb3f6699",
  },
  {
    key: "duplicate-contacts",
    title: "Дубликаты контактов",
    seoTitle: "Дубли контактов (объединение дублей контактов) для amoCRM",
    description:
      "Автоматическое склеивание дублированных контактов с умными алгоритмами поиска. Экономьте время менеджеров и улучшайте качество вашей базы контактов.",
    route: widgetRoute("duplicate-contacts"),
    tags: ["База", "Дубли", "Контакты", "Качество данных"],
    aliases: [
      "дубли",
      "контакты",
      "объединение",
      "склейка",
      "duplicate contacts",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "e6a1837c-6178-4a0c-9fc0-3e5768595fa2",
  },
  {
    key: "docs-flow",
    title: "Документы(Google)",
    seoTitle: "Документы(Google) для amoCRM",
    description:
      "Автоматически создавайте документы из шаблонов Google Docs на основе данных из amoCRM. Генерация в карточке сделки, по триггерам Digital Pipeline и из Salesbot.",
    route: widgetRoute("docs-flow"),
    tags: ["Интеграции", "Google", "Документы"],
    aliases: [
      "docs-flow",
      "doc flow",
      "документооборот",
      "google docs",
      "документы",
      "шаблоны",
      "договор",
      "кп",
      "счет",
      "акт",
    ],
    showInFooter: true,
    showInSearch: true,
    hidden: false,
    clientId: "e27fe468-e09b-4b17-8786-48e01614e951",
  },
  {
    key: "t-bank",
    title: "Т‑Банк(Тинькофф). Счета",
    seoTitle: "Т‑Банк(Тинькофф). Счета для amoCRM",
    description:
      "Выставляйте счёт в amoCRM и получайте ссылку на оплату в Т‑Банке в поле сделки. Поддержка нескольких организаций и выбора расчетного счета.",
    route: widgetRoute("t-bank"),
    tags: ["Оплата", "Счета", "Т‑Банк", "Тинькофф"],
    aliases: [
      "tbank",
      "t-bank",
      "t bank",
      "тинькофф",
      "т-банк",
      "эквайринг",
      "оплата",
      "счет",
      "счёт",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "be8e6006-98ec-4a0f-80c5-9170ba2b675c",
  },
  {
    key: "tbank-check-pay",
    title: "Проверка оплат",
    seoTitle: "Проверка оплат и автозапуск Salesbot для amoCRM",
    description:
      "Автоматически сопоставляйте входящие платежи со сделками по паттерну назначения платежа. После совпадения запускайте нужный Salesbot и стандартизируйте обработку оплат в amoCRM.",
    route: widgetRoute("tbank-check-pay"),
    tags: ["Оплата", "Финансы", "Salesbot", "Автоматизация"],
    aliases: [
      "payment checker",
      "payment-checker",
      "tbank-check-pay",
      "tbank_check_pay",
      "проверка оплат",
      "сопоставление платежей",
      "паттерн оплаты",
      "назначение платежа",
      "автозапуск salesbot",
      "t-bank платежи",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "27692bfa-2bfa-4694-be90-b9cda639fcde",
  },
  {
    key: "meet-calendar",
    title: "Календарь встреч",
    seoTitle: "Календарь встреч для amoCRM",
    description:
      "Создавайте встречи по триггерам и вручную. Назначайте ответственных, дату и время.",
    route: widgetRoute("meet-calendar"),
    tags: ["Календарь", "Встречи", "Автоматизация"],
    aliases: ["календарь", "встречи", "meet", "calendar", "записи"],
    showInFooter: true,
    showInSearch: true,
    hidden: false,
    clientId: "6292aa61-5947-4291-a0f0-6819fccb07c0",
  },
  {
    key: "time-zone",
    title: "Часовые пояса",
    seoTitle: "Регион по телефону для amoCRM",
    description:
      "Автоматически определяйте регион и текущее время клиента по номеру телефона. Никогда больше не разбудите клиента в 6 утра или не позвоните в полночь!",
    route: widgetRoute("time-zone"),
    tags: ["Телефония", "Продажи"],
    aliases: [
      "время",
      "часовой пояс",
      "таймзона",
      "регион",
      "телефон",
      "timezone",
      "utc",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "25f94eb8-f182-4296-b86f-da4e26854b47",
  },
  {
    key: "auto-tasks",
    title: "Автозадачи",
    seoTitle: "Автозадачи в сделках для amoCRM",
    description:
      "Автоматически создавайте задачи для сделок без активности. Настраиваемые статусы, типы задач и ответственные. Увеличьте конверсию на 35% благодаря своевременному контакту с клиентами.",
    route: widgetRoute("auto-tasks"),
    tags: ["Задачи", "Контроль", "Продажи"],
    aliases: [
      "задачи",
      "авто",
      "автоматизация",
      "сделки",
      "робот",
      "autotasks",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "ffb5b225-672a-4016-b868-6a98db446851",
  },
  {
    key: "massive-leads",
    title: "Массовые лиды",
    seoTitle: "Массовое создание сделок для amoCRM",
    description:
      "Автоматизируйте создание сделок для всех ваших контактов одним нажатием. Забудьте о рутинной работе - виджет сделает всё за вас быстро и без ошибок.",
    route: widgetRoute("massive-leads"),
    tags: ["Продажи", "Автоматизация"],
    aliases: ["массовое", "создание", "пакетно", "импорт", "лиды", "сделки"],
    showInFooter: true,
    showInSearch: true,
    clientId: "48c94f76-e88e-4cb5-ad9c-a8a8c53e5a64",
  },
  {
    key: "closing-ban",
    title: "Запрет закрытия",
    seoTitle: "Запрет закрытия задач без результата для amoCRM",
    description:
      "Виджет не даст закрыть задачу без описания результата. Полная прозрачность работы команды и контроль качества выполнения.",
    route: widgetRoute("closing-ban"),
    tags: ["Задачи", "Контроль"],
    aliases: [
      "запрет",
      "закрытие",
      "задачи",
      "результат",
      "обязательное поле",
      "контроль",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "05248753-81ac-40a2-94fb-e0b7c6d05092",
  },
  {
    key: "telegram-button",
    title: "Кнопка Telegram",
    seoTitle: "Мгновенный переход в Telegram из amoCRM",
    description:
      "Превратите каждый номер телефона в прямую ссылку на чат с клиентом в Telegram. Больше никакого копирования номеров и поиска контактов!",
    route: widgetRoute("telegram-button"),
    tags: ["Соц сети", "Telegram", "тг", "телеграм"],
    aliases: ["telegram", "телеграм", "тг", "tg", "кнопка", "переход", "чат"],
    showInFooter: true,
    showInSearch: true,
    clientId: "26e34407-779d-4b47-bb48-b1ffaed3cc78",
  },
  {
    key: "whatsapp-button",
    title: "Кнопка WhatsApp",
    seoTitle: "Мгновенный переход в WhatsApp из amoCRM",
    description:
      "Превратите каждый номер телефона в прямую ссылку на чат с клиентом в WhatsApp. Мгновенное общение с клиентами прямо из карточки сделки!",
    route: widgetRoute("whatsapp-button"),
    tags: ["Соц сети", "WhatsApp", "Ватсап", "Продажи"],
    aliases: [
      "whatsapp",
      "ватсап",
      "вацап",
      "wa",
      "wapp",
      "кнопка",
      "переход",
      "чат",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "667e5134-9be1-4ee1-8e02-42eb25230f37",
  },
  {
    key: "delete-tasks-ban",
    title: "Запрет удаления задач",
    seoTitle: "Запрет удаления задач для amoCRM",
    description:
      "Полный контроль над удалением задач в amoCRM. Ограничьте удаление для менеджеров, настраивайте исключения по типам задач и защитите вашу воронку от случайных и намеренных потерь активности.",
    route: widgetRoute("delete-tasks-ban"),
    tags: ["Задачи", "Контроль"],
    aliases: ["запрет", "удаление", "задачи", "контроль", "защита"],
    showInFooter: true,
    showInSearch: true,
    clientId: "2a208537-35b9-4b8c-805c-e698198f00e9",
  },
  {
    key: "shift-select",
    title: "Выбор смены",
    seoTitle: "Групповое выделение (Shift-выбор) для amoCRM",
    description:
      "Мгновенно выделяйте группы сделок, контактов и компаний: обычный клик запоминает опорный чекбокс, Shift+клик выделяет диапазон, а зажатие и протягивание ЛКМ помогает быстро выбирать подряд идущие строки. Ускорьте массовое изменение ответственных, статусов, запуск автоматизаций и другие групповые действия в amoCRM.",
    route: widgetRoute("shift-select"),
    tags: ["Интерфейс", "Ускорение работы"],
    aliases: [
      "shift",
      "выделение",
      "групповое",
      "множественный выбор",
      "выбор строк",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "d466e907-bb7e-468b-8420-b9f165221627",
  },
  {
    key: "group-fields",
    title: "Группировка полей",
    seoTitle: "Группировка полей для amoCRM",
    description:
      "Автоматически группируйте поля в карточке сделки по логической структуре. Удобная навигация, свертываемые группы и аккуратный внешний вид, даже при большом числе полей.",
    route: widgetRoute("group-fields"),
    tags: ["Интерфейс", "Карточка сделки"],
    aliases: ["группировка", "поля", "карточка", "интерфейс", "структура"],
    showInFooter: true,
    showInSearch: true,
    clientId: "b54cc436-b04d-438c-b80f-e8ca06f9265b",
  },
  {
    key: "transfer-fields",
    title: "Перенос полей",
    seoTitle: "Перенос длинных названий полей для amoCRM",
    description:
      "Автоматически переносит длинные названия пользовательских полей в карточках amoCRM. Убирает многоточия, предотвращает наложения и делает интерфейс аккуратным и читаемым.",
    route: widgetRoute("transfer-fields"),
    tags: ["Интерфейс", "Карточка сделки"],
    aliases: [
      "перенос",
      "копирование",
      "поля",
      "миграция",
      "передача значений",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "d56233ed-70ac-4f3c-bc18-ddd2ebe3ae6c",
  },
  {
    key: "copying-fields",
    title: "Копирование полей",
    seoTitle:
      "Копирование полей между аккаунтами и удаление полей списком для amoCRM",
    description:
      "Быстро копируйте и вставляйте пользовательские поля между сделками, контактами и компаниями. Сохраняйте структуру и порядок без ручной настройки.",
    route: widgetRoute("copying-fields"),
    tags: ["Интерфейс", "Поля"],
    aliases: [
      "копирование",
      "поля",
      "копирование полей",
      "копирование полей между аккаунтами",
      "перенос полей",
      "миграция полей",
      "удаление полей",
      "удаление полей списком",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "29fb59ab-297e-4a2e-a441-e6dda149240f",
  },
  {
    key: "delete-notes-ban",
    title: "Запрет удаления заметок",
    seoTitle: "Запрет удаления и редактирования примечаний для amoCRM",
    description:
      "Полный контроль над удалением и редактированием примечаний в amoCRM. Ограничивайте действия менеджеров, защищайте историю коммуникаций и предотвращайте случайные или намеренные потери важных комментариев.",
    route: widgetRoute("delete-notes-ban"),
    tags: ["Интерфейс", "Карточка сделки"],
    aliases: [
      "запрет",
      "удаление",
      "заметки",
      "комментарии",
      "история",
      "контроль",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "0be96111-a8e0-4e5c-9a7b-554336deec05",
  },
  {
    key: "setting-feed",
    title: "Настройка ленты",
    seoTitle: "Фильтр ленты событий в сделке для amoCRM",
    description:
      "Фильтруйте ленту событий в карточке сделки по типам: задачи, примечания, письма, звонки и чаты. Быстро находите нужную активность без прокрутки и хаоса, даже в длинной истории сделки.",
    route: widgetRoute("setting-feed"),
    tags: ["Интерфейс", "Карточка сделки"],
    aliases: ["лента", "события", "фильтр", "активности", "timeline", "feed"],
    showInFooter: true,
    showInSearch: true,
    clientId: "6738863c-0c64-46c6-81fb-d2403c5a60b7",
  },
  {
    key: "hiding-data",
    title: "Скрытие данных",
    seoTitle: "Скрытие данных в amoCRM",
    description:
      "Скрывайте пункты меню, воронки и этапы, поля в карточках и блоки по тегам. Гибкие режимы (без ограничений, белый и чёрный список), настройки для каждого пользователя и быстрые изменения без ручной правки интерфейса.",
    route: widgetRoute("hiding-data"),
    tags: ["Интерфейс", "Доступ", "Безопасность"],
    aliases: [
      "скрытие",
      "данные",
      "поля",
      "воронки",
      "этапы",
      "теги",
      "доступ",
      "ограничение",
      "visibility",
      "hide data",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "05b6ae88-d0fb-4fce-b17a-6a38cfaeb4a8",
  },
  {
    key: "color-leads",
    title: "Подкрашивание сделок (цветные сделки)",
    seoTitle: "Подкрашивание сделок (цветные сделки) для amoCRM",
    description:
      "Автоматически выделяйте сделки цветом по правилам: бюджет, этап, теги, пользовательские поля и другие условия.",
    route: widgetRoute("color-leads"),
    tags: ["Продажи", "Сделки", "Воронка", "Автоматизация"],
    aliases: [
      "окраска сделок",
      "раскраска сделок",
      "цвет сделок",
      "lead coloring",
      "leads coloring",
      "color deals",
      "color leads",
    ],
    showInFooter: true,
    showInSearch: true,
    hidden: false,
    clientId: "689bf620-dffb-40c5-9f3f-7b87359fde27",
  },
  {
    key: "search-fields",
    title: "Поиск по списку",
    seoTitle: "Поиск по списку для amoCRM",
    description:
      "Поиск по полям, спискам и multisuggest в карточках amoCRM. Меньше прокрутки, меньше ошибок, быстрее работа менеджеров.",
    route: widgetRoute("search-fields"),
    tags: ["Интерфейс", "Карточка сделки", "Поиск"],
    aliases: [
      "поиск по полям",
      "поиск в карточке",
      "поиск полей",
      "поиск по карточке",
      "search fields",
      "multisuggest",
      "select",
      "dropdown",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "7032bce0-3630-4c73-b3c8-14f438f673e0",
  },
  {
    key: "other-leads",
    title: "Другие сделки",
    seoTitle: "Другие сделки контакта и компании для amoCRM",
    description:
      "Показывайте все связанные сделки контакта и компании прямо в карточке текущей сделки. Полная история клиента, статусы, суммы, ответственные и дополнительные поля без лишних переходов.",
    route: widgetRoute("other-leads"),
    tags: ["Сделки", "Карточка сделки", "История клиента"],
    aliases: [
      "другие сделки",
      "связанные сделки",
      "история сделок",
      "контакт",
      "компания",
      "other leads",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "f1a51313-36cf-43a9-ba06-0c949466112d",
  },
  {
    key: "color-fields",
    title: "Подсветка полей",
    seoTitle: "Подсветка полей в карточке для amoCRM",
    description:
      "Автоматически выделяйте ключевые поля и их значения цветом в карточках сделок по выбранным воронкам. Отдельные цвета для названия, значения, списочных вариантов и числовых условий.",
    route: widgetRoute("color-fields"),
    tags: ["Интерфейс", "Карточка сделки", "Поля", "Воронка"],
    aliases: [
      "подсветка полей",
      "окраска полей",
      "цветные поля",
      "выделение полей",
      "field coloring",
      "color fields",
      "карточка сделки",
    ],
    showInFooter: true,
    showInSearch: true,
    hidden: false,
    clientId: "694ac2e0-60d6-4839-a525-2ea6c52ea744",
  },
  {
    key: "color-tags",
    title: "Раскраска тегов",
    seoTitle: "Раскраска тегов в сделках для amoCRM",
    description:
      "Автоматически раскрашивайте выбранные теги в нужные цвета. Подсветка работает в списке сделок, на доске канбан и внутри карточки сделки.",
    route: widgetRoute("color-tags"),
    tags: ["Сделки", "Теги", "Приоритет", "Интерфейс"],
    aliases: [
      "раскраска тегов",
      "цветные теги",
      "подсветка тегов",
      "tags coloring",
      "color tags",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "f871e5bb-6b67-40ae-94a5-82277fb248b0"
  },
  {
    key: "field-hints",
    title: "Подсказки для полей и этапов",
    seoTitle: "Подсказки для полей и этапов в amoCRM",
    description:
      "Добавляйте контекстные подсказки к этапам воронки и полям в карточке сделки. Менеджеры сразу видят правила заполнения и перехода по этапам, что снижает ошибки и ускоряет адаптацию команды.",
    route: widgetRoute("field-hints"),
    tags: ["Интерфейс", "Карточка сделки", "Воронка", "Поля"],
    aliases: [
      "подсказки",
      "подсказки полей",
      "подсказки этапов",
      "этапы воронки",
      "field hints",
      "hints",
      "карточка сделки",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "7e1f2761-7a5b-4adc-bb33-ec828ff4c448"
  },
  {
    key: "text-rewrite",
    title: "TextRewrite AI",
    seoTitle: "TextRewrite AI: переписывание текста для amoCRM",
    description:
      "AI-виджет для переписывания сообщений прямо в карточке сделки amoCRM. Управляйте стилем ответа, добавляйте свои инструкции и ускоряйте коммуникацию с клиентами.",
    route: widgetRoute("text-rewrite"),
    tags: ["AI", "Текст", "Коммуникации", "Автоматизация"],
    aliases: [
      "text rewrite",
      "text-rewrite",
      "переписать текст",
      "перефразировать",
      "ai текст",
      "тон общения",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "7c40a411-00f8-473a-bc0c-be5cca21f372"
  },
  {
    key: "ltv-client",
    title: "LTV клиента",
    seoTitle: "LTV клиента в карточке сделки для amoCRM",
    description:
      "Показывайте LTV клиента прямо в карточке и канбане: сумма успешных сделок, количество выигранных и проигранных сделок, отдельная плашка «Новый клиент» и гибкие цветовые правила по порогам.",
    route: widgetRoute("ltv-client"),
    tags: ["Сделки", "LTV", "Канбан", "Карточка сделки"],
    aliases: [
      "ltv",
      "ltv клиента",
      "ltv клиент",
      "ценность клиента",
      "новый клиент",
      "ltv badge",
    ],
    showInFooter: true,
    showInSearch: true,
    clientId: "bd254886-6487-4fe6-9c0e-3357f815bfaf"
  },

  {
    key: "google-sheets",
    title: "Google Sheets",
    seoTitle: "Google Таблицы для amoCRM",
    description:
      "Экспортируйте данные из amoCRM в Google Таблицы. Автообновление, гибкие настройки, отчеты в реальном времени.",
    route: widgetRoute("google-sheets"),
    tags: ["Интеграции", "Google"],
    aliases: [
      "гугл таблицы",
      "google",
      "sheets",
      "таблицы",
      "экспорт",
      "импорт",
      "csv",
    ],
    showInFooter: true,
    showInSearch: true,
    hidden: true,
  },
  {
    key: "google-docs",
    title: "Google Документы",
    seoTitle: "Google Документы для amoCRM",
    description:
      "Автоматически создавайте документы из шаблонов Google Docs. Договоры, счета, акты за секунду.",
    route: widgetRoute("google-docs"),
    tags: ["Интеграции", "Google"],
    aliases: [
      "гугл документы",
      "google",
      "docs",
      "документы",
      "шаблоны",
      "договоры",
    ],
    showInFooter: true,
    showInSearch: true,
    hidden: true,
  },
];

// ============================================
// Производные экспорты для обратной совместимости
// ============================================

export type WidgetKey = Widget["key"];

export const FOOTER_WIDGETS = WIDGETS.filter((w) => w.showInFooter);
export const SEARCH_WIDGETS = WIDGETS.filter((w) => w.showInSearch);

export const POPULAR_WIDGET_KEYS = [
  "telegram-notify",
  "lead-distribution",
  "duplicate-leads",
  "duplicate-contacts",
] as const satisfies readonly WidgetKey[];

// WIDGETS_DATA - Record для быстрого доступа по ключу (обратная совместимость)
export const WIDGETS_DATA: Record<string, Widget> = Object.fromEntries(
  WIDGETS.map((w) => [w.key, w]),
);

// WIDGETS_LIST - список видимых виджетов для публичного отображения
export const WIDGETS_LIST = WIDGETS.filter((w) => !w.hidden);

// Для обратной совместимости со старым интерфейсом WidgetData
export type WidgetData = Widget;

