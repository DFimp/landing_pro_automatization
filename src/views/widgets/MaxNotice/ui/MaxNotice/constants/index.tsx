import type { CaseItem } from "@/sections/landing/caseCard/CaseCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["max-notice"];
const installHref = widget.clientId ? getWidgetInstallUrl(widget.clientId) : undefined;

export const STEPS = [
  {
    title: "Установите виджет в amoCRM",
    content: (
      <div>
        <p>Откройте интеграции в аккаунте и установите MaxNotice.</p>
        <ul className="sc-list">
          <li>amoCRM → Настройки → Интеграции / Виджеты</li>
          <li>Найдите «Уведомления MAX»</li>
          <li>Нажмите «Установить» и откройте настройки виджета</li>
        </ul>
        {installHref ? (
          <a
            href={installHref}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-[#386bff] text-white font-bold shadow-[0_12px_28px_rgba(56,107,255,0.35)] mt-[18px]"
            style={{ marginTop: 12 }}
          >
            Установить виджет сейчас
          </a>
        ) : null}
      </div>
    ),
  },
  {
    title: "Подключите получателей уведомлений",
    content: (
      <div>
        <p>Добавьте менеджеров и чаты, которые должны получать сообщения.</p>
        <ul className="sc-list">
          <li>Укажите сотрудника amoCRM</li>
          <li>Заполните идентификатор получателя в MAX</li>
          <li>Сохраните список получателей в виджете</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Создайте триггер в воронке",
    content: (
      <div>
        <p>Настройте, при каких действиях в CRM нужно отправлять уведомление.</p>
        <ul className="sc-list">
          <li>Откройте Digital Pipeline</li>
          <li>Добавьте действие виджета «Уведомления MAX»</li>
          <li>Выберите этап, условия и получателя</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Сформируйте текст сообщения",
    content: (
      <div>
        <p>Используйте данные из сделки для информативного уведомления.</p>
        <ul className="sc-list">
          <li>Добавьте сумму, клиента, ответственного и ссылку на сделку</li>
          <li>При необходимости настройте кнопки запуска SalesBot</li>
          <li>Проверьте расписание отправки (дни и часы)</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Запустите тест и проверьте доставку",
    content: (
      <div>
        <p>Сделайте тестовый переход сделки по этапу и проверьте сообщение в MAX.</p>
        <ul className="sc-list">
          <li>Убедитесь, что уведомление пришло нужному получателю</li>
          <li>Проверьте корректность подстановки данных</li>
          <li>Проверьте работу кнопок и запуск SalesBot</li>
        </ul>
      </div>
    ),
  },
];

export const CASE_ITEMS: CaseItem[] = [
  {
    type: "stripe",
    side: "left",
    text: "MAX CRM MAX CRM MAX CRM",
  },
  {
    type: "card",
    title: "Быстрая реакция на новые сделки",
    text: (
      <>
        Менеджер получает уведомление сразу после создания или изменения сделки и быстрее
        связывается с клиентом.
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo.svg",
  },
  {
    type: "card",
    title: "Контроль этапов воронки",
    text: (
      <>
        Руководитель видит ключевые перемещения по этапам и вовремя подключается к сложным
        переговорам.
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo (1).svg",
  },
  {
    type: "stripe",
    side: "right",
    text: "MAX CRM MAX CRM MAX CRM",
  },
  {
    type: "stripe",
    side: "left",
    text: "MAX CRM MAX CRM MAX CRM",
  },
  {
    type: "card",
    title: "Меньше пропущенных задач",
    text: (
      <>
        Уведомления о важных действиях приходят в рабочий мессенджер, поэтому команда
        не теряет критичные события.
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo (2).svg",
  },
  {
    type: "card",
    title: "Автоматизация действий в один клик",
    text: (
      <>
        Через кнопки в уведомлении сотрудники запускают нужный SalesBot без переходов
        по интерфейсу CRM.
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo (3).svg",
  },
  {
    type: "stripe",
    side: "right",
    text: "MAX CRM MAX CRM MAX CRM",
  },
];
