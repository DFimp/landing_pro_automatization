import type { CaseItem } from "@/shared/ui/Case/CaseCard";
import type { ProblemItem } from "@/shared/ui/ProblemsCard/ProblemsCard";
import type { FeatureItem } from "@/shared/ui/FeaturesCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["duplicate-contacts"];

export const STEPS = [
  {
    title: "Установка виджета",
    content: (
      <div>
        <p>Установите виджет в вашу amoCRM:</p>
        <ul className="sc-list">
          <li>amoCRM → Настройки → Интеграции/Виджеты</li>
          <li>Найдите «Объединение дублей контактов»</li>
          <li>Нажмите «Установить» и подтвердите доступы</li>
        </ul>
        <a
          href={getWidgetInstallUrl(widget.clientId!)}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-[#386bff] text-white font-bold shadow-[0_12px_28px_rgba(56,107,255,0.35)] mt-[18px]"
          style={{ marginTop: 12 }}
        >
          Установить виджет сейчас
        </a>
      </div>
    ),
  },
  {
    title: "Выбор основного поля",
    content: (
      <div>
        <p>
          В разделе «Настройка блока» выберите поле, по которому будут
          искаться дубли:
        </p>
        <ul className="sc-list">
          <li>
            <strong>Телефон</strong> — объединение контактов с одинаковыми
            номерами
          </li>
          <li>
            <strong>Email</strong> — поиск дублей по одинаковой электронной
            почте
          </li>
          <li>
            <strong>Имя</strong> — объединение контактов с одинаковыми именами
          </li>
          <li>
            <strong>Другие поля</strong> — любое другое поле из вашей CRM
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Добавление дополнительных условий",
    content: (
      <div>
        <p>
          Нажмите "+ Добавить поле" чтобы добавить дополнительные условия:
        </p>
        <ul className="sc-list">
          <li>Выберите поле из списка</li>
          <li>
            Контакты объединятся только если совпадают все указанные поля
          </li>
          <li>
            Например: "Телефон" + "Компания" = объединение только при
            совпадении и телефона, и компании
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Настройка исключений",
    content: (
      <div>
        <p>Исключения помогают избежать нежелательных объединений:</p>
        <ul className="sc-list">
          <li>Нажмите "+ Исключение" под любым полем</li>
          <li>Введите значение, которое должно остановить объединение</li>
          <li>
            Пример: под "Должность" напишите "Директор" — тогда контакты с
            этой должностью никогда не объединятся
          </li>
        </ul>

        <div className="sc-note sc-note--yellow" style={{ marginTop: 12 }}>
          <div className="sc-note-title">Зачем это нужно:</div>
          <div>
            Если у вас несколько директоров с одинаковыми телефонами компании,
            они не должны объединяться в одного контакта.
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Создание альтернативных условий",
    content: (
      <div>
        <p>Можете создать несколько наборов условий для объединения:</p>
        <ul className="sc-list">
          <li>Добавьте второй блок в настройках</li>
          <li>
            Контакты объединятся, если подходят под любой из ваших наборов
            условий
          </li>
        </ul>

        <div className="sc-note" style={{ marginTop: 12 }}>
          <div className="sc-note-title">Пример:</div>
          <div className="sc-list">
            <div>Набор 1: Телефон + Должность</div>
            <div>Набор 2: Email + Компания</div>
            <div className="text-sm">
              Контакты объединятся, если совпадают (телефон и должность) или
              (email и компания).
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Настройка сохранения данных",
    content: (
      <div>
        <p>
          По умолчанию при объединении сохраняются данные из более старого
          контакта. В правом блоке "Настройка приоритетности полей разных
          контактов" вы можете изменить это:
        </p>
        <ul className="sc-list">
          <li>Выберите поле из списка</li>
          <li>
            Для выбранных полей будут сохраняться данные из более нового
            контакта
          </li>
          <li>
            Пример: Выберите "Телефон" — тогда при объединении сохранится
            телефон из нового контакта
          </li>
        </ul>

        <div className="sc-note sc-note--blue" style={{ marginTop: 12 }}>
          <div className="sc-note-title">Практический совет:</div>
          <div>
            Выбирайте поля, которые чаще обновляются — телефоны, должности,
            адреса. Так у вас будет самая актуальная информация.
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Сохранение и применение",
    content: (
      <div>
        <p>После настройки всех параметров:</p>
        <ul className="sc-list">
          <li>
            Сначала нажмите кнопку "Сохранить" - это сохранит ваши настройки
          </li>
          <li>
            Затем нажмите "Применить к существующим контактам" - это запустит
            поиск и объединение уже созданных контактов
          </li>
          <li>Все новые контакты будут автоматически проверяться на дубли</li>
        </ul>
      </div>
    ),
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
    title: "Автоматическое объединение",
    text: (
      <>
        Виджет самостоятельно находит и склеивает дубли контактов по
        настраиваемым правилам, сохраняя всю важную информацию
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo.svg",
  },

  {
    type: "card",
    title: "Гибкие настройки",
    text: (
      <>
        Настройте поиск дублей по телефону, email, имени или любым другим
        полям с возможностью создания исключений
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo (1).svg",
  },

  { type: "stripe", side: "right", text: "AMO CRM AMO CRM AMO CRM" },
  { type: "stripe", side: "left", text: "AMO CRM AMO CRM AMO CRM" },

  {
    type: "card",
    title: "Умные алгоритмы",
    text: (
      <>
        Многоуровневый поиск дублей создания альтернативных условий
        объединения
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo (2).svg",
  },

  {
    type: "card",
    title: "Сохранение истории",
    text: (
      <>
        При объединении сохраняются все связанные сделки, задачи, теги и
        важные данные из всех контактов
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo (3).svg",
  },

  {
    type: "stripe",
    side: "right",
    white: true,
    text: "AMO CRM AMO CRM AMO CRM",
  },
];

export const PROBLEMS: ProblemItem[] = [
  {
    title: "Хаос в системе",
    text: (
      <>
        Одинаковые клиенты создают <span className="at-mark">несколько</span>{" "}
        сделок, что приводит к путанице и потере важной информации.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_web.jpeg",
  },
  {
    title: "Потеря времени",
    text: (
      <>
        Менеджеры тратят драгоценное время на поиск и ручное объединение
        дублированных сделок.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_watch.jpeg",
  },
  {
    title: "Неточная статистика",
    text: (
      <>
        Дубли искажают отчёты и аналитику,{" "}
        <span className="at-mark">мешая</span> принятию правильных
        управленческих решений.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_chart.jpeg",
  },
  {
    title: "Упущенные продажи",
    text: (
      <>
        Из-за дублей можно <span className="at-mark">потерять</span> клиента
        или дважды обработать одну заявку, что снижает эффективность.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_basket.jpeg",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    iconUrl: "/widgets/BackAll/gear.jpeg",
    title: "Умное объединение данных",
    text: (
      <>
        При склеивании сохраняются все сделки, задачи, теги и кастомные поля
        из всех дублированных контактов. Приоритетные поля берутся из более
        нового контакта.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/burger.jpeg",
    title: "Гибкая настройка приоритетов",
    text: (
      <>
        Выберите, какие поля должны сохраняться из более нового контакта, а
        какие — из более старого.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/shield.jpeg",
    title: "Безопасность данных",
    text: (
      <>
        Виджет не удаляет данные, а корректно объединяет их. Все связанные
        сделки и компании сохраняются в основном контакте.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/tag.jpeg",
    title: "Система исключений",
    text: (
      <>
        Настройте исключения по конкретным значениям полей, чтобы избежать
        ошибочного объединения разных людей.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/boxes.jpeg",
    title: "Альтернативные условия",
    text: (
      <>
        Создавайте несколько наборов условий для поиска дублей — контакты
        объединятся, если подходят под любой из них.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/magnifier.jpeg",
    title: "Точное обнаружение дублей",
    text: (
      <>
        Многоуровневый алгоритм поиска по телефонам, email, именам и
        дополнительным полям с исключением ложных совпадений.
      </>
    ),
  },
];
