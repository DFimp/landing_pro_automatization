import type { CaseItem } from "@/sections/landing/caseCard/CaseCard";
import type { ProblemItem } from "@/sections/landing/problemsCard/ProblemsCard";
import type { FeatureItem } from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["duplicate-leads"];

export const STEPS = [
  {
    title: "Установка виджета",
    content: (
      <div>
        <p>
          Нажмите кнопку «Установить виджет» и следуйте инструкциям amoCRM для
          подключения.
        </p>
        <a
          href={getWidgetInstallUrl(widget.clientId!)}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-[#386bff] text-white font-bold shadow-[0_12px_28px_rgba(56,107,255,0.35)] mt-[18px]"
        >
          Установить виджет сейчас
        </a>
      </div>
    ),
  },
  {
    title: "Основные настройки",
    content: (
      <div>
        <p>Выберите сущность объединения:</p>
        <ul className="sc-list">
          <li>
            <strong>Основной контакт</strong> — объединение по первому
            контакту в сделке
          </li>
          <li>
            <strong>Контакт</strong> — поиск дублей по всем контактам
          </li>
          <li>
            <strong>Компания</strong> — объединение по компании
          </li>
          <li>
            <strong>Компания или Основной контакт</strong> — универсальный
            режим
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Приоритет объединения",
    content: (
      <div>
        <p>Выберите стратегию объединения:</p>
        <ul className="sc-list">
          <li>
            <strong>В сторону старшей сделки</strong> — сохраняется самая
            старая сделка
          </li>
          <li>
            <strong>По приоритету в блоке</strong> — учитывается настроенный
            приоритет этапов
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Дополнительная проверка",
    content: (
      <div>
        <p>
          Укажите дополнительное поле для точной проверки дублей. Например, по
          номеру телефона или email.
        </p>

        <div className="sc-note sc-note--blue" style={{ marginTop: 12 }}>
          <div className="sc-note-title">Совет:</div>
          <div>
            Это поможет избежать ошибочного объединения разных клиентов с
            одинаковыми именами.
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Приоритетные поля",
    content: (
      <div>
        <p>
          Выберите поля, значения которых нужно брать из самой новой сделки
          при объединении.
        </p>
        <p>
          Например: "Ответственный", "Цена", "Название" и любые кастомные
          поля.
        </p>
      </div>
    ),
  },
  {
    title: "Настройка блоков",
    content: (
      <div>
        <p>Создайте блоки воронок с этапами. В каждом блоке можно:</p>
        <ul className="sc-list">
          <li>
             Первый в блоке имеет самый низкий приоритет, а последний — самый высокий
          </li>
          <li>Включить/выключить объединение внутри блока</li>
          <li>Настроить несколько воронок в одном блоке</li>
        </ul>

        <div className="sc-note sc-note--red" style={{ marginTop: 12 }}>
          <div className="sc-note-title">Внимание:</div>
          <p>
            Если включена опция "Не склеивать внутри блока", дубли в этом
            блоке объединяться не будут.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Настройка задач",
    content: (
      <div>
        <p>Включите автоматическое создание задач после объединения:</p>
        <ul className="sc-list">
          <li>Выберите тип задачи</li>
          <li>Укажите текст задачи</li>
          <li>Задача будет создана для основной сделки</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Запуск объединения",
    content: (
      <div>
        <p>
          После настройки нажмите{" "}
          <strong>«Применить к существующим сделкам»</strong>, чтобы
          обработать уже созданные сделки.
        </p>
        <p>
          Новые сделки будут автоматически проверяться на дубли при создании.
        </p>
      </div>
    ),
  },
];

export const FEATURES: FeatureItem[] = [
  {
    iconUrl: "/widgets/BackAll/gear.jpeg",
    title: "Умное объединение данных",
    text: (
      <>
        При склеивании сохраняются все контакты, теги, компании и кастомные
        поля из всех дубликатов. Приоритетные поля берутся из самой новой
        сделки.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/burger.jpeg",
    title: "Гибкая настройка приоритетов",
    text: (
      <>
        Настройте приоритеты этапов в каждой воронке. Сделка с более высоким
        приоритетом станет основной при объединении.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/shield.jpeg",
    title: "Безопасность данных",
    text: (
      <>
        Виджет не удаляет данные, а корректно объединяет их. Все связанные
        контакты и компании сохраняются в основной сделке.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/tag.jpeg",
    title: "Автоматические теги",
    text: (
      <>
        После объединения к основной сделке автоматически добавляется
        специальный тег для отслеживания выполненных операций.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/boxes.jpeg",
    title: "Работа с блоками",
    text: (
      <>
        Создавайте блоки воронок и настраивайте разные правила объединения для
        разных типов сделок.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/magnifier.jpeg",
    title: "Точное обнаружение дублей",
    text: (
      <>
        Многоуровневый алгоритм поиска учитывает контакты, компании и
        дополнительные поля, исключая ложные совпадения.
      </>
    ),
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
        Мгновенно получайте уведомления о новых заявках и сразу связывайтесь с
        клиентом.
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo.svg",
  },

  {
    type: "card",
    title: "Гибкие настройки",
    text: (
      <>
        Отслеживайте движение сделок по этапам. Автоматически отправляйте
        уведомления при переходе на новый этап.
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
        Уведомляйте руководителей о крупных сделках, а коллег — о
        необходимости позвонить клиенту.
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo (2).svg",
  },

  {
    type: "card",
    title: "Сохранение истории",
    text: (
      <>
        При объединении сохраняются все контакты, теги, компании и важные
        данные из всех сделок.
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
