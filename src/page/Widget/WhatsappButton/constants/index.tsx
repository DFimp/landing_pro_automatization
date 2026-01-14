import type { CaseItem } from "@/shared/ui/Case/CaseCard";
import type { ProblemItem } from "@/shared/ui/ProblemsCard/ProblemsCard";
import type { FeatureItem } from "@/shared/ui/FeaturesCard/FeaturesCard";

export const STEPS = [
  {
    title: "Установка виджета",
    content: (
      <div>
        <p>Установите виджет в вашу amoCRM одним кликом:</p>
        <ul className="sc-list">
          <li>Нажмите кнопку «Установить виджет»</li>
          <li>Авторизуйтесь в amoCRM, если потребуется</li>
          <li>Подтвердите установку виджета</li>
          <li>
            Виджет сразу начнёт работать во всех разделах amoCRM, где есть
            номера телефонов
          </li>
        </ul>

        <div className="sc-note sc-note--green">
          <div className="sc-note-title">Важно</div>
          Виджет абсолютно бесплатный и не требует никаких дополнительных
          настроек.
        </div>

        <div className="sc-cta" style={{ marginTop: 16 }}>
          <a
            href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=667e5134-9be1-4ee1-8e02-42eb25230f37"
            target="_blank"
            rel="noopener"
            className="dist-btn-primary"
          >
            Установить виджет сейчас
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Готово! Пользуйтесь",
    content: (
      <div>
        <p>Теперь рядом с каждым номером телефона будет кнопка WhatsApp:</p>
        <ul className="sc-list">
          <li>Кликните по номеру телефона в любой карточке</li>
          <li>Выберите кнопку «Написать в WhatsApp»</li>
          <li>WhatsApp откроется с чатом для этого номера</li>
        </ul>

        <div className="sc-note sc-note--purple">
          <div className="sc-note-title">Результат</div>
          Ваши менеджеры будут связываться с клиентами мгновенно и закрывать
          больше сделок!
        </div>
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
        Мгновенно получайте уведомления о новых заявках и сразу связывайтесь с
        клиентом
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo.svg",
  },

  {
    type: "card",
    title: "Гибкие настройки",
    text: (
      <>
        Отслеживайте движение сделок по этапам. Автоматически отправляйте
        уведомления при переходе на новый этап
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo (1).svg",
  },

  { type: "stripe", side: "right", text: "AMO CRM AMO CRM AMO CRM" },

  { type: "stripe", side: "left", text: "AMO CRM AMO CRM AMO CRM" },

  {
    type: "card",
    title: "Умные алгоритмы",
    text: (
      <>
        Уведомляйте руководителей о крупных сделках, а коллег - о
        необходимости позвонить клиенту
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo (2).svg",
  },

  {
    type: "card",
    title: "Сохранение истории",
    text: (
      <>
        При объединении сохраняются все контакты, теги, компании и важные
        данные из всех сделок
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo (3).svg",
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
    title: "Долгий процесс",
    text: (
      <>
        Копировать номер → Открыть WhatsApp → Найти контакт → Начать чат. До
        минуты на каждого клиента
        <span className="at-mark">вместо 1 секунды</span>
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_timer.webp",
  },
  {
    title: "Постоянные переключения",
    text: (
      <>
        Туда-сюда между amoCRM и WhatsApp сбивает концентрацию и замедляет
        работу менеджеров
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_switch.webp",
  },
  {
    title: "Ошибки при вводе",
    text: (
      <>
        Опечатки в номере приводят к тому, что сообщения идут не тому человеку
        или вообще не доходят
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_cross.webp",
  },
  {
    title: "Упущенные продажи",
    text: (
      <>
        <span className="at-mark">Клиенты не ждут</span> - пока вы ищете их в
        WhatsApp, они могут уйти к более быстрым конкурентам.
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_basket.webp",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    iconUrl: "/widgets/WhatsappButton/group.webp",
    title: "Поддержка всех номеров",
    text: (
      <>
        Работает с российскими и международными номерами в любом формате
        записи
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/sort.webp",
    title: "Автоматическое форматирование",
    text: (
      <>
        Виджет сам приводит номер к нужному формату для WhatsApp, исключая
        ошибки
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/deadline.webp",
    title: "Мгновенная работа",
    text: (
      <>
        Никаких задержек - кнопка работает сразу после клика по номеру
        телефона
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/mobile.webp",
    title: "Веб и мобильные версии",
    text: (
      <>
        Корректно открывает WhatsApp Web в браузере или мобильное приложение
        на устройстве
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/target.webp",
    title: "Точное попадание",
    text: (
      <>
        Всегда открывает чат именно с нужным контактом, даже если номер
        записан в нестандартном формате
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/free.webp",
    title: "Полностью бесплатно",
    text: (
      <>
        Никаких подписок, ограничений по количеству использований или скрытых
        платежей
      </>
    ),
  },
];