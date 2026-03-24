import type { CaseItem } from "@/sections/landing/caseCard/CaseCard";
import type { ProblemItem } from "@/sections/landing/problemsCard/ProblemsCard";
import type { FeatureItem } from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["whatsapp-button"];

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

        <div className="mt-4">
          <a
            href={getWidgetInstallUrl(widget.clientId!)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center h-11 px-8 rounded-full bg-[#386bff] text-white font-bold text-[16px] shadow-[0_8px_24px_rgba(56,107,255,0.35)] transition-[transform,box-shadow,background] duration-150 mt-[18px] hover:bg-[#2f5cf0] hover:-translate-y-[1px] hover:shadow-[0_12px_28px_rgba(56,107,255,0.4)]"
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
    bgUrl: "/widgets/WhatsappButton/back_timer.jpeg",
  },
  {
    title: "Постоянные переключения",
    text: (
      <>
        Туда-сюда между amoCRM и WhatsApp сбивает концентрацию и замедляет
        работу менеджеров
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_switch.jpeg",
  },
  {
    title: "Ошибки при вводе",
    text: (
      <>
        Опечатки в номере приводят к тому, что сообщения идут не тому человеку
        или вообще не доходят
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_cross.jpeg",
  },
  {
    title: "Упущенные продажи",
    text: (
      <>
        <span className="at-mark">Клиенты не ждут</span> - пока вы ищете их в
        WhatsApp, они могут уйти к более быстрым конкурентам.
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_basket.jpeg",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    iconUrl: "/widgets/WhatsappButton/group.jpeg",
    title: "Поддержка всех номеров",
    text: (
      <>
        Работает с российскими и международными номерами в любом формате
        записи
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/sort.jpeg",
    title: "Автоматическое форматирование",
    text: (
      <>
        Виджет сам приводит номер к нужному формату для WhatsApp, исключая
        ошибки
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/deadline.jpeg",
    title: "Мгновенная работа",
    text: (
      <>
        Никаких задержек - кнопка работает сразу после клика по номеру
        телефона
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/mobile.jpeg",
    title: "Веб и мобильные версии",
    text: (
      <>
        Корректно открывает WhatsApp Web в браузере или мобильное приложение
        на устройстве
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/target.jpeg",
    title: "Точное попадание",
    text: (
      <>
        Всегда открывает чат именно с нужным контактом, даже если номер
        записан в нестандартном формате
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/free.jpeg",
    title: "Полностью бесплатно",
    text: (
      <>
        Никаких подписок, ограничений по количеству использований или скрытых
        платежей
      </>
    ),
  },
];
