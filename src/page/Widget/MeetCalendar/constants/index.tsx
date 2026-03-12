import type { CaseItem } from "@/widgets/landing/caseCard/CaseCard";
import type { ProblemItem } from "@/widgets/landing/problemsCard/ProblemsCard";
import type { FeatureItem } from "@/widgets/landing/featuresCard/FeaturesCard";

export const STEPS = [
  {
    title: "Установка виджета",
    content: (
      <div>
        <p>Установите виджет в amoCRM:</p>
        <ul className="sc-list">
          <li>amoCRM -&gt; Настройки -&gt; Виджеты</li>
          <li>Найдите "Календарь записей/встреч"</li>
          <li>Нажмите "Установить"</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Создание встреч по триггеру",
    content: (
      <div>
        <p>Добавьте триггер на нужном этапе воронки:</p>
        <ul className="sc-list">
          <li>Перейдите в воронку, где нужен триггер</li>
          <li>Откройте "Настроить воронку"</li>
          <li>На нужном этапе добавьте триггер</li>
          <li>Выберите "Календарь записей/встреч от Про Автоматизацию"</li>
          <li>Выберите ответственного за встречу (можно выбрать ответственного за сделку)</li>
          <li>Укажите поле с датой и временем встречи</li>
          <li>Укажите поле с описанием встречи</li>
          <li>Укажите продолжительность встречи в минутах</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Создание встреч вручную",
    content: (
      <div>
        <p>Создайте встречу вручную из виджета:</p>
        <ul className="sc-list">
          <li>В левом меню amoCRM выберите виджет "Календарь"</li>
          <li>На странице графика нажмите кнопку "Создать встречу"</li>
          <li>Заполните нужные данные</li>
        </ul>
      </div>
    ),
  },
];

export const PROBLEMS: ProblemItem[] = [
  {
    title: "Срываются встречи и договоренности",
    text: (
      <>
        Без единого календаря встречи теряются, а детали переговоров остаются
        в заметках и чатах.
      </>
    ),
    bgUrl: "/widgets/Distribution/back_question.webp",
  },
  {
    title: "Нет контроля ответственных",
    text: (
      <>
        Сложно быстро понять, кто отвечает за встречу и когда она должна
        состояться.
      </>
    ),
    bgUrl: "/widgets/Distribution/back_settings.webp",
  },
  {
    title: "Ручное планирование замедляет",
    text: (
      <>
        Ручное создание встреч занимает время и повышает риск ошибок в датах и
        описании.
      </>
    ),
    bgUrl: "/widgets/Distribution/back_basket.webp",
  },
  {
    title: "Встречи не попадают в общий график",
    text: (
      <>
        Команда не видит полной картины по встречам, сложно планировать нагрузку
        и контролировать расписание.
      </>
    ),
    bgUrl: "/widgets/Distribution/back_lightning.webp",
  },
];

export const CASE_ITEMS: CaseItem[] = [
  {
    type: "stripe",
    side: "left",
    white: true,
    text: "AMO CRM AMO CRM AMO CRM",
  },
  {
    type: "card",
    title: "Стабильный процесс встреч",
    text: (
      <>
        Встречи создаются автоматически по триггеру этапа. Все ключевые данные
        фиксируются в одном месте.
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo.svg",
  },
  {
    type: "card",
    title: "Прозрачность по этапам",
    text: (
      <>
        Видно, на каком этапе и у кого назначена встреча, без пересылки
        сообщений и ручных напоминаний.
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo (1).svg",
  },
  { type: "stripe", side: "right", text: "AMO CRM AMO CRM AMO CRM" },
  { type: "stripe", side: "left", text: "AMO CRM AMO CRM AMO CRM" },
  {
    type: "card",
    title: "Меньше рутины, больше фокуса",
    text: (
      <>
        Менеджер заполняет только необходимые поля, остальное подтягивается из
        карточки сделки.
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo (2).svg",
  },
  {
    type: "stripe",
    side: "right",
    white: true,
    text: "AMO CRM AMO CRM AMO CRM",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    iconUrl: "/widgets/TelegramButton/deadline.jpeg",
    title: "Триггеры по этапам",
    text: (
      <>
        Создавайте встречи автоматически при переходе сделки на нужный этап.
      </>
    ),
  },
  {
    iconUrl: "/widgets/TelegramButton/sort.jpeg",
    title: "Гибкие поля",
    text: (
      <>
        Указывайте поля для даты, времени, описания и продолжительности встречи.
      </>
    ),
  },
  {
    iconUrl: "/widgets/TelegramButton/lamp.jpeg",
    title: "Создание в один клик",
    text: (
      <>
        Запускайте встречу вручную из календаря в левом меню amoCRM.
      </>
    ),
  },
  {
    iconUrl: "/widgets/TelegramButton/target.jpeg",
    title: "Ответственный и контроль",
    text: (
      <>
        Назначайте ответственного за встречу или используйте ответственного по
        сделке.
      </>
    ),
  },
  {
    iconUrl: "/widgets/TelegramButton/group.jpeg",
    title: "Фильтр по менеджерам",
    text: (
      <>
        Смотрите календарь по выбранному менеджеру или по всей команде.
      </>
    ),
  },
  {
    iconUrl: "/widgets/TelegramButton/free.jpeg",
    title: "Меньше ошибок",
    text: (
      <>
        Автоматизация снижает риск пропущенных встреч и неверных дат.
      </>
    ),
  },
];
