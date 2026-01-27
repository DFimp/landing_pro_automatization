import type { CaseItem } from "@/shared/ui/Case/CaseCard";
import type { FeatureItem } from "@/shared/ui/FeaturesCard/FeaturesCard";

export const STEPS = [
  {
    title: "Установка виджета в amoCRM",
    content: (
      <div>
        <p>Установите виджет в вашу amoCRM:</p>
        <ul className="sc-list">
          <li>amoCRM → Настройки → Виджеты</li>
          <li>Найдите «Telegram уведомления»</li>
          <li>Нажмите «Установить»</li>
        </ul>
        <div className="sc-note sc-note--blue">
          <div className="sc-note-title">Подсказка</div>
          Если у вас нет прав на установку — обратитесь к администратору
          аккаунта.
        </div>
        <a
          href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=c31be896-9148-4ec1-9d7a-2aba7b16906e"
          target="_blank"
          rel="noopener"
          className="sc-btn"
          style={{ marginTop: 12 }}
        >
          Установить виджет сейчас
        </a>
      </div>
    ),
  },
  {
    title: "Получение Telegram ID",
    content: (
      <div>
        <p>Каждому сотруднику нужен свой Telegram ID:</p>
        <ul className="sc-list">
          <li>
            Откройте бота{" "}
            <a
              href="https://t.me/pro_automatization_telegram_bot"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pro_automatization_telegram_bot
            </a>
          </li>
          <li>Нажмите «Запустить» или отправьте /start</li>
          <li>Скопируйте выданный ID</li>
        </ul>
        <div className="sc-note">
          <div className="sc-note-title">Пример</div>
          Ваш ID: <strong>123456789</strong>
        </div>
      </div>
    ),
  },
  {
    title: "Настройка пользователей",
    content: (
      <div>
        <p>Добавьте сотрудников в настройках виджета:</p>
        <ul className="sc-list">
          <li>Выберите пользователя amoCRM</li>
          <li>Укажите отображаемое ФИО</li>
          <li>Вставьте Telegram ID из шага выше</li>
          <li>Нажмите «Добавить», затем «Сохранить»</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Настройка цифровой воронки",
    content: (
      <div>
        <p>Создайте правила отправки:</p>
        <ul className="sc-list">
          <li>Откройте «Настроить воронку»</li>
          <li>На нужном этапе добавьте триггер</li>
          <li>Выберите «Уведомления в Telegram от Про Автоматизацию»</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Настройка параметров уведомления",
    content: (
      <div>
        <p>Определите текст и получателя:</p>
        <ul className="sc-list">
          <li>
            Текст поддерживает подстановки: <code>{"{name}"}</code>,{" "}
            <code>{"{price}"}</code>, <code>{"{responsableUserName}"}</code>,{" "}
            <code>{"{link}"}</code> и др.
          </li>
          <li>В поле «Кому» выберите сотрудника из списка</li>
          <li>Задайте дни/часы, когда можно отправлять сообщения</li>
        </ul>
        <div className="sc-note sc-note--green">
          <div className="sc-note-title">Идеи для кнопок SalesBot</div>
          «Отправить КП», «Назначить встречу», «Создать задачу», «Перевести
          этап».
        </div>
      </div>
    ),
  },
  {
    title: "Тестирование настроек",
    content: (
      <div>
        <p>Проверьте, что всё работает:</p>
        <ul className="sc-list">
          <li>Создайте тестовую сделку/переведите на нужный этап</li>
          <li>Убедитесь, что уведомление пришло в Telegram</li>
          <li>Нажмите кнопку SalesBot и проверьте автоматизацию</li>
        </ul>
        <div className="sc-note sc-note--red">
          <div className="sc-note-title">Если уведомления не приходят</div>
          Проверьте Telegram ID, запуск бота (/start), расписание времени и
          условие срабатывания.
        </div>
      </div>
    ),
  },
  {
    title: "Масштабирование на команду",
    content: (
      <div>
        <p>Настройте правила для всех ролей:</p>
        <ul className="sc-list">
          <li>Менеджеры — новые лиды и смены этапов</li>
          <li>Руководители — крупные сделки, потери</li>
          <li>Поддержка — возвраты и жалобы</li>
        </ul>
      </div>
    ),
  },
];

export const FEATURES: FeatureItem[] = [
  {
    iconUrl: "/widgets/TelegramNotify/bell.jpeg",
    title: "Мгновенные уведомления",
    text: (
      <>
        Получайте информацию о важных событиях сразу же, как только они
        происходят. Никаких задержек!
      </>
    ),
  },
  {
    iconUrl: "/widgets/TelegramNotify/letter_star.jpeg",
    title: "Умные триггеры",
    text: (
      <>
        Отправляйте сообщения только при переходе в нужную воронку или этап.
        Никакого спама!
      </>
    ),
  },
  {
    iconUrl: "/widgets/TelegramNotify/cursor.jpeg",
    title: "Запуск SalesBot одним кликом",
    text: (
      <>
        Запускайте любую автоматизацию amoCRM прямо из Telegram и экономьте
        время на рутине.
      </>
    ),
  },
  {
    iconUrl: "/widgets/TelegramNotify/clock.jpeg",
    title: "Контроль времени отправки",
    text: (
      <>
        Настройте дни недели и часы для отправки. Не беспокойте клиентов в
        неподходящее время!
      </>
    ),
  },
  {
    iconUrl: "/widgets/TelegramNotify/letter_cist.jpeg",
    title: "Автоочистка сообщений",
    text: (
      <>
        Сообщения могут автоматически удаляться после активации SalesBot.
        Никакого мусора в чате!
      </>
    ),
  },
  {
    iconUrl: "/widgets/TelegramNotify/pyramid.jpeg",
    title: "Полная информация о сделке",
    text: (
      <>
        В сообщении отображается ключевая информация: клиент, сумма,
        ответственный, товары и многое другое!
      </>
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
    title: "Быстрое реагирование на горячие лиды",
    text: (
      <>
        Мгновенно получайте уведомления о новых заявках и сразу связывайтесь с
        клиентом.
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo.svg",
  },

  {
    type: "card",
    title: "Контроль воронки продаж",
    text: (
      <>
        Отслеживайте движение сделок по этапам. Автоматически отправляйте
        уведомления при переходе на новый этап.
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo (1).svg",
  },

  { type: "stripe", side: "right", text: "AMO CRM AMO CRM AMO CRM" },

  { type: "stripe", side: "left", text: "AMO CRM AMO CRM AMO CRM" },

  {
    type: "card",
    title: "Командная работа",
    text: (
      <>
        Уведомляйте руководителя о крупных сделках, а коллег — о необходимости
        позвонить клиенту.
      </>
    ),
    mobileDecorUrl: "/widgets/CaseCard/amo (2).svg",
  },

  {
    type: "card",
    title: "Предотвращение потерь",
    text: (
      <>
        Получайте уведомления своевременно, когда клиент ещё находится на пути
        к покупке.
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
