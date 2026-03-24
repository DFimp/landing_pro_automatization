import React from "react";
import type { CaseItem } from "@/sections/landing/caseCard/CaseCard";
import type { ProblemItem } from "@/sections/landing/problemsCard/ProblemsCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget =
  WIDGETS_DATA["t-bank"] ??
  ({
    clientId: undefined,
  } as const);

export const STEPS = [
  {
    title: "Установка виджета (1–2 минуты)",
    content: (
      <div>
        <p>
          Нажмите кнопку «Установить виджет» и пройдите стандартную установку в
          amoCRM. После установки виджет появится в{" "}
          <strong>Настройки → Интеграции</strong>.
        </p>
        <div style={{ marginTop: 10 }}>
          <a
            href={getWidgetInstallUrl((widget as { clientId?: string }).clientId!)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-[#386bff] text-white font-bold shadow-[0_12px_28px_rgba(56,107,255,0.35)] mt-[18px]"
          >
            Установить виджет
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Откройте расширенные настройки",
    content: (
      <div>
        <p>
          Откройте карточку виджета и перейдите в <strong>Расширенные настройки</strong>.
          Здесь находится всё, что нужно для подключения к Т‑Банку.
        </p>
        <ul className="sc-list">
          <li>активация виджета</li>
          <li>добавление организаций (ИНН/КПП)</li>
          <li>авторизация в Т‑Банке</li>
          <li>выбор счёта для получения оплат</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Активируйте виджет",
    content: (
      <div>
        <p>
          На вкладке <strong>«Активация»</strong> выполните активацию — это
          обязательный шаг, чтобы виджет начал работать в сделке и открыл доступ
          к настройкам интеграции.
        </p>
        <ul className="sc-list">
          <li>заполните данные для активации</li>
          <li>нажмите «Активировать»</li>
          <li>дождитесь подтверждения</li>
        </ul>
        <div className="sc-note sc-note--blue" style={{ marginTop: 12 }}>
          <div className="sc-note-title">Если не получилось с первого раза:</div>
          <div>
            Обновите страницу расширенных настроек и повторите. При необходимости
            напишите в поддержку — поможем быстро.
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Добавьте организацию (название, ИНН, КПП)",
    content: (
      <div>
        <p>
          Во вкладке <strong>«Настройки»</strong> добавьте организацию - от её
          имени будут выставляться счета. Эти данные также используются для
          привязки к Т‑Банку.
        </p>
        <ul className="sc-list">
          <li>
            <strong>Название организации</strong> — отображается в счёте
          </li>
          <li>
            <strong>ИНН</strong> - 10 или 12 цифр
          </li>
          <li>
            <strong>КПП</strong> - 9 цифр; для ИП укажите <strong>0</strong>
          </li>
        </ul>
        <p style={{ marginTop: 8 }}>
          Если у вас несколько юрлиц - добавьте каждое: для каждой организации
          можно выбрать свой расчётный счёт.
        </p>
      </div>
    ),
  },
  {
    title: "Авторизуйтесь в Т‑Банке",
    content: (
      <div>
        <p>
          Нажмите <strong>«Авторизоваться»</strong> напротив организации. Откроется
          страница Т‑Банка - подтвердите подключение в нашем официально
          зарегистрированном приложении.
        </p>
        <p style={{ marginTop: 8 }}>
          После авторизации статус изменится на <strong>«Авторизован»</strong>, а
          ниже появятся доступные счета.
        </p>
        <div className="sc-note sc-note--blue" style={{ marginTop: 12 }}>
          <div className="sc-note-title">Если окно не открывается:</div>
          <div>Проверьте блокировку всплывающих окон в браузере и повторите.</div>
        </div>
      </div>
    ),
  },
  {
    title: "Выберите счёт для получения оплат",
    content: (
      <div>
        <p>
          В карточке организации выберите расчётный счёт, на который должны
          поступать платежи. По умолчанию выбран основной счёт из Т‑Банка (если
          он задан).
        </p>
        <ul className="sc-list">
          <li>выберите счёт в выпадающем списке</li>
          <li>
            при необходимости нажмите <strong>«Сделать основным»</strong>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Создайте счёт в amoCRM и отправьте ссылку на оплату",
    content: (
      <div>
        <p>
          Откройте сделку и создайте счёт в amoCRM как обычно. После сохранения
          виджет сформирует ссылку на оплату в Т‑Банке и запишет её в поле{" "}
          <strong>«Ссылка на оплату Т‑банк счет»</strong>.
        </p>
        <div className="sc-note sc-note--blue" style={{ marginTop: 12 }}>
          <div className="sc-note-title">Автоматически:</div>
          <div>
            Если поля ещё нет - оно создаётся автоматически. Если ссылка не
            появилась сразу, обновите страницу сделки и повторите сохранение
            счёта.
          </div>
        </div>
        <p style={{ marginTop: 8 }}>
          Дальше просто скопируйте ссылку и отправьте клиенту в чат или по
          почте - всё останется в сделке.
        </p>
      </div>
    ),
  },
];

export const PROBLEMS: ProblemItem[] = [
  {
    title: "Ссылка на оплату теряется",
    text: (
      <>
        Когда ссылка отправляется “где-то в переписке”, её сложно быстро найти и
        повторно отправить. В сделке нет единого места, где хранится актуальная
        ссылка.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_web.jpeg",
  },
  {
    title: "Лишние действия = больше ошибок",
    text: (
      <>
        Ручные шаги после выставления счёта повышают риск{" "}
        <span className="at-mark">ошибиться</span>: перепутать организацию,
        выбрать не тот счёт или просто забыть отправить ссылку.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_basket.jpeg",
  },
  {
    title: "Путаница с несколькими юрлицами",
    text: (
      <>
        Когда организаций несколько, важно контролировать, на какой расчётный
        счёт придёт оплата - иначе появляются согласования и возвраты.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_watch.jpeg",
  },
  {
    title: "Оплату сложно ускорить",
    text: (
      <>
        Клиенту удобно платить по ссылке. Если ссылка рядом со счётом в сделке -
        её легко отправить повторно и ускорить оплату.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_chart.jpeg",
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
        title: "Ссылка на оплату - сразу в сделке",
        text: (
            <>
                Создали счёт в amoCRM - виджет сформировал ссылку на оплату в
                Т‑Банке и записал её в поле сделки. Ссылку легко найти и
                отправить клиенту в один клик. Всё фиксируется в карточке, и
                менеджер не тратит время на поиски в переписке.
            </>
        ),
        mobileDecorUrl: "/widgets/BackAll/amo.svg",
    },

    {
        type: "card",
        title: "Организации и счета под контролем",
        text: (
            <>
                Добавляйте несколько организаций, авторизуйте их и выбирайте
                расчётный счёт для оплат. При необходимости меняйте{" "}
                <span className="at-mark">основной</span> счёт. Так вы всегда
                понимаете, куда придёт оплата по каждому счёту.
            </>
        ),
        mobileDecorUrl: "/widgets/BackAll/amo (1).svg",
    },

    { type: "stripe", side: "right", text: "AMO CRM AMO CRM AMO CRM" },
    { type: "stripe", side: "left", text: "AMO CRM AMO CRM AMO CRM" },

    {
        type: "card",
        title: "Удобно повторно отправлять ссылку клиенту",
        text: (
            <>
                Ссылка хранится в сделке - её легко найти и отправить повторно,
                если клиент отвлёкся или не успел оплатить сразу. Это помогает{" "}
                <span className="at-mark">ускорять</span> оплату. Менеджер
                работает в одном окне, без лишних действий и переключений.
            </>
        ),
        mobileDecorUrl: "/widgets/BackAll/amo (2).svg",
    },

    {
        type: "card",
        title: "Быстрый старт и понятная настройка",
        text: (
            <>
                Установка, активация, организация (ИНН/КПП), авторизация, выбор
                счёта - дальше виджет работает в фоне. Менеджеру остаётся
                выставить счёт и отправить ссылку. Настройка занимает пару
                минут.
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
