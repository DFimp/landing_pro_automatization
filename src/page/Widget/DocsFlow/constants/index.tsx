import React from "react";
import type { ProblemItem } from "@/shared/ui/ProblemsCard/ProblemsCard";

const Img = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div className={["df-step-media", className].filter(Boolean).join(" ")}>
    <img className="df-step-img" src={src} alt={alt} loading="lazy" />
  </div>
);

export const PROBLEMS: ProblemItem[] = [
  {
    title: "Формирование документов из сделки",
    text: (
      <>
        Генерируйте договоры, счета и акты прямо в карточке сделки — без ручного
        копирования данных. Документ сразу появляется во вкладке{" "}
        <span className="at-mark">«Документы(Google)»</span>.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_web.jpeg",
  },
  {
    title: "Автоматизация воронки",
    text: (
      <>
        Настройте триггер: выберите шаблон, поле для ссылки и момент запуска.
        Виджет сформирует документ и сохранит ссылку в нужное поле.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_watch.jpeg",
  },
  {
    title: "Шаблоны и ключи для подстановки",
    text: (
      <>
        Создавайте шаблоны Google Docs и вставляйте ключи полей amoCRM
        (сделка/контакт/компания/списки и д.т.). При необходимости применяйте функции:
        прописью, склонение и т.д.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_chart.jpeg",
  },
  {
    title: "Контроль доступа",
    text: (
      <>
        Настройте права доступа:{" "}
        кто может <span className="at-mark">формировать</span> документы и шаблоны, а кто — только{" "}
        <span className="at-mark">просматривать</span>
      </>
    ),
    bgUrl: "/widgets/BackAll/back_basket.jpeg",
  },
];

export const STEPS = [
  {
    title: "Подключите Google аккаунт",
    content: (
      <div>
        <p>
          Откройте настройки виджета и выполните авторизацию Google. После
          подключения:
        </p>
        <ul className="sc-list">
          <li>на Google Диске автоматически создастся папка для документов</li>
          <li>все сгенерированные документы будут сохраняться в эту папку</li>
          <li>ссылку на эту папку можно найти в разделе настроек</li>
        </ul>
        <div className="df-step-grid">
          <Img
            src="/widgets/DocsFlow/settings_google_authorize_banner.jpeg"
            alt="Авторизация Google в настройках виджета"
            className="df-step-media--md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Настройте доступ",
    content: (
      <div>
        <p>
          Управляйте доступом к вкладке «Документы (Google)» в карточке сделки — 
          определите, кто может формировать документы, а кто только просматривать их.
        </p>
        <p className="sc-note sc-note--green">
          По умолчанию оба списка пусты — доступ закрыт для всех, включая администратора. Чтобы начать работу, добавьте себя в нужный список.
        </p>
        <div className="df-step-grid">
          <Img
            src="/widgets/DocsFlow/access_settings_permissions.jpeg"
            alt="Настройки доступа: кто может формировать и кто может просматривать"
            className="df-step-media--md"
          />
          <Img
            src="/widgets/DocsFlow/lead_card_no_access.jpeg"
            alt="Настройки доступа: кто может формировать и кто может просматривать"
            className="df-step-media--md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Создайте шаблон",
    content: (
      <div>
        <p>
          В настройках перейдите в блок создания шаблонов, затем:
        </p>
        <ul className="sc-list">
          <li>
            выберите тип: <strong>Документ / Таблица / Презентация</strong>
          </li>
          <li>введите название</li>
          <li>нажмите «Создать»</li>
        </ul>
        <div className="df-step-grid">
          <Img
            src="/widgets/DocsFlow/placeholder_key_selector.jpeg"
            alt="Выбор сущности для формирования ключа"
            className="df-step-media--md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Настройте ключи для подстановки данных",
    content: (
      <div>
        <p>
          Чтобы шаблон заполнялся данными из amoCRM, добавьте в него ключи полей.
          Это могут быть данные сделки, контакта, компании, списков, товаров и т.д.
        </p>
        <ul className="sc-list">
          <li>
            В настройках выберите сущность: <strong>Сделка / Контакт / Компания / Списки</strong>
          </li>
          <li>
            Выберите поле (поддерживаются системные и дополнительные)
          </li>
          <li>
            При необходимости задайте функцию (прописью, инициалы, склонение и т.д.)
          </li>
          <li>
            Виджет сформирует ключ (например: <code>{"{{contact_info.Email}}"}</code>)
          </li>
          <li>
            Скопируйте ключ и вставьте его в шаблон Google Docs в нужное место
          </li>
        </ul>
        <div className="df-step-grid df-step-grid--tiles">
          <Img
            src="/widgets/DocsFlow/placeholder_key_contacts_list.jpeg"
            alt="Выбор поля для формирования ключа"
            className="df-step-media--tile"
          />
          <Img
            src="/widgets/DocsFlow/placeholder_function_selector_2.jpeg"
            alt="Выбор функции для ключа"
            className="df-step-media--tile"
          />
          <Img
            src="/widgets/DocsFlow/placeholder_example_with_function.jpeg"
            alt="Пример сформированного ключа с функцией"
            className="df-step-media--tile"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Сформируйте документ вручную из сделки",
    content: (
      <div>
        <ul className="sc-list">
          <li>
            Откройте сделку → вкладка <strong>Документы(Google)</strong>
          </li>
          <li>Выберите шаблон</li>
          <li>Введите название файла и запустите генерацию</li>
          <li>Сформированный документ появится в списке</li>
        </ul>
        <p style={{ marginTop: 10 }}>
          Доступные действия зависят от настроек: открыть документ, скачать, получить ссылку,
          удалить
        </p>
        <div className="df-step-grid">
          <Img
            src="/widgets/DocsFlow/lead_card_generate_template.jpeg"
            alt="Формирование документа во вкладке «Документы» в карточке сделки"
            className="df-step-media--sm"
          />
          <Img
            src="/widgets/DocsFlow/lead_card_with_generate_template.jpeg"
            alt="Формирование документа во вкладке «Документы» в карточке сделки"
            className="df-step-media--sm"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Настройте автоматическую генерацию",
    content: (
      <div>
        <ul className="sc-list">
          <li>Откройте в воронке «Настроить»</li>
          <li>Добавьте триггер «Документы(Google)»</li>
        </ul>
        <p style={{ marginTop: 10 }}>Укажите:</p>
        <ul className="sc-list">
          <li>момент запуска</li>
          <li>шаблон</li>
          <li>поле для записи ссылки</li>
          <li>этап, куда переводить сделку после генерации (если нужно)</li>
        </ul>
        <p style={{ marginTop: 10 }}>
          Сохраните изменения — после этого документы будут формироваться автоматически
          по выбранному событию
        </p>
        <div className="df-step-grid">
          <Img
            src="/widgets/DocsFlow/digital_pipeline_step_settings.jpeg"
            alt="Настройка шага для генерации документа"
            className="df-step-media--md"
          />
        </div>
        <p style={{ marginTop: 20 }}>
          *Генерацию документов можно настроить и через Salesbot
        </p>
      </div>
    ),
  },
];
