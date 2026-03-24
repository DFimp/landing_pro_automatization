import { type ProblemItem } from "@/sections/landing/problemsCard/ProblemsCard";
import { type FeatureItem } from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["auto-tasks"];

export const STEPS = [
    {
      title: "Установка виджета в amoCRM",
      content: (
        <div>
          <p>Установите виджет «Автозадачи в сделках» в вашу amoCRM:</p>
          <ul className="sc-list">
            <li>amoCRM → Настройки → Виджеты</li>
            <li>Найдите «Автозадачи в сделках»</li>
            <li>Нажмите «Установить» и подтвердите</li>
            <li>Поле «Не проверять на задачи» будет создано автоматически</li>
          </ul>
          <div className="sc-note sc-note--blue">
            <div className="sc-note-title">Подсказка</div>
            Если нет прав на установку — обратитесь к администратору аккаунта.
          </div>
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
      title: "Выбор воронок и статусов",
      content: (
        <div>
          <p>Укажите, где необходим контроль «спящих» сделок:</p>
          <ul className="sc-list">
            <li>Откройте настройки виджета</li>
            <li>В поле «Статусы» выберите воронку или конкретные этапы</li>
            <li>
              Повторите для всех ключевых этапов (например, «Переговоры»,
              «Принятие решения»)
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Параметры создаваемых задач",
      content: (
        <div>
          <p>Настройте тип, текст и ответственного:</p>
          <ul className="sc-list">
            <li>Тип задачи (Звонок, Встреча, свой тип)</li>
            <li>Текст задачи с чётким действием</li>
            <li>
              Кому назначать: ответственному за сделку или конкретному
              пользователю
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Сохранение и запуск",
      content: (
        <div>
          <p>Проверьте параметры и сохраните:</p>
          <ul className="sc-list">
            <li>Убедитесь, что выбраны нужные этапы</li>
            <li>Нажмите «Сохранить настройки»</li>
            <li>Виджет начнёт работать в фоновом режиме</li>
          </ul>
          <div className="sc-note sc-note--green">
            <div className="sc-note-title">Готово</div>
            Проверка выполняется каждые 5 минут — «спящие» сделки не останутся
            без внимания.
          </div>
        </div>
      ),
    },
    {
      title: "Тест и мониторинг",
      content: (
        <div>
          <p>Проверьте, что задачи создаются корректно:</p>
          <ul className="sc-list">
            <li>Найдите сделки на отслеживаемых этапах без активности</li>
            <li>Подождите 5–10 минут и проверьте создание задач</li>
            <li>Исключайте отдельные сделки флагом «Не проверять на задачи»</li>
          </ul>
          <div className="sc-note sc-note--red">
            <div className="sc-note-title">Если задачи не создаются</div>
            Проверьте выбранные этапы, наличие подходящих сделок и интервал
            запуска.
          </div>
        </div>
      ),
    },
  ];

export const PROBLEMS: ProblemItem[] = [
    {
      title: "Сделки «висят» без движения",
      text: (
        <>
          Менеджеры <span className="inline-block px-[5px] py-[2px] rounded-[5px] bg-[#4A6DFF] text-white leading-[1.1]">забывают</span> связаться с
          клиентами, сделки теряются, а вы теряете деньги. Особенно критично для
          дорогих продуктов.
        </>
      ),
      bgUrl: "/widgets/AutoTask/back_dollars.jpeg",
    },
    {
      title: "Менеджеры «забывают» работать",
      text: (
        <>
          Без напоминаний сотрудники могут неделями{" "}
          <span className="inline-block px-[5px] py-[2px] rounded-[5px] bg-[#4A6DFF] text-white leading-[1.1]">не&nbsp;контактировать</span> с
          потенциальными клиентами. Результат — потерянная прибыль.
        </>
      ),
      bgUrl: "/widgets/AutoTask/back_message.jpeg",
    },
    {
      title: "Низкая конверсия воронки",
      text: (
        <>
          Без системного подхода к работе со сделками ваша конверсия остаётся на
          уровне 3–5% вместо возможных
          <span className="inline-block px-[5px] py-[2px] rounded-[5px] bg-[#4A6DFF] text-white leading-[1.1]"> 15–20%</span>.
        </>
      ),
      bgUrl: "/widgets/AutoTask/back_analitic.jpeg",
    },
    {
      title: "Ручной контроль отнимает время",
      text: (
        <>
          Руководители тратят часы на проверку активности менеджеров{" "}
          <span className="inline-block px-[5px] py-[2px] rounded-[5px] bg-[#4A6DFF] text-white leading-[1.1]">вместо развития</span> бизнеса.
        </>
      ),
      bgUrl: "/widgets/AutoTask/back_yeys.jpeg",
    },
  ];

export const FEATURES: FeatureItem[] = [
    {
      iconUrl: "/widgets/AutoTask/deployment.jpeg",
      title: "Умное отслеживание",
      text: (
        <>
          Виджет мониторит все сделки на выбранных этапах каждые 5 минут. Если
          сделка долго без движения — автоматически создаётся задача.
        </>
      ),
    },
    {
      iconUrl: "/widgets/AutoTask/letter_star.jpeg",
      title: "Гибкая настройка",
      text: (
        <>
          Выберите статусы для отслеживания, тип задачи, ответственного и текст.
          Разные настройки для разных воронок и этапов.
        </>
      ),
    },
    {
      iconUrl: "/widgets/AutoTask/lamp.jpeg",
      title: "Исключение системных сделок",
      text: (
        <>
          Специальное поле «Не проверять на задачи» позволяет исключить
          определённые сделки из автоматического контроля.
        </>
      ),
    },
    {
      iconUrl: "/widgets/AutoTask/control.jpeg",
      title: "Контроль ответственности",
      text: (
        <>
          Задачи создаются для ответственного за сделку или назначаются
          конкретному менеджеру по вашему выбору.
        </>
      ),
    },
    {
      iconUrl: "/widgets/AutoTask/deadline.jpeg",
      title: "Постоянная работа",
      text: (
        <>
          Виджет работает 24/7 в фоновом режиме. Проверка каждые 5 минут
          гарантирует, что ни одна сделка не останется без внимания.
        </>
      ),
    },
    {
      iconUrl: "/widgets/AutoTask/analytic.jpeg",
      title: "Рост продаж",
      text: (
        <>
          Своевременная работа с клиентами повышает конверсию. Клиенты получают
          внимание в нужный момент и чаще покупают.
        </>
      ),
    },
  ];
