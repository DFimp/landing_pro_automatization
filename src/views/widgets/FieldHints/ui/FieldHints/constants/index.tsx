import type { CaseItem } from "@/sections/landing/caseCard/CaseCard";
import type { ProblemItem } from "@/sections/landing/problemsCard/ProblemsCard";
import type { FeatureItem } from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["field-hints"];
const installHref = widget.clientId ? getWidgetInstallUrl(widget.clientId) : undefined;

export const STEPS = [
  {
    title: "Установите виджет и откройте расширенные настройки",
    content: (
      <div>
        <p>Сначала установите виджет в аккаунт amoCRM и перейдите в его расширенные настройки:</p>
        <ul className="sc-list">
          <li>amoCRM → Настройки → Интеграции/Виджеты</li>
          <li>Найдите виджет «Подсказки для полей и этапов»</li>
          <li>Откройте вкладку с настройками подсказок</li>
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
    title: "Выберите воронку и создайте первую подсказку",
    content: (
      <div>
        <p>
          В настройках выберите нужную воронку. Дальше можно добавить подсказку для этапа или для поля.
        </p>
        <ul className="sc-list">
          <li>Нажмите «Новая подсказка»</li>
          <li>Укажите название и текст пояснения</li>
          <li>Выберите тип подсказки: «Этап» или «Поле»</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Настройте подсказки для этапов",
    content: (
      <div>
        <p>
          Для этапов подсказки помогают менеджеру быстро понять критерий перехода сделки.
        </p>
        <ul className="sc-list">
          <li>Выберите воронку и нужный этап</li>
          <li>Опишите правила входа/выхода из этапа</li>
          <li>Сохраните подсказку и проверьте колонку воронки</li>
        </ul>
        <div className="sc-note sc-note--blue" style={{ marginTop: 12 }}>
          <div className="sc-note-title">Совет:</div>
          <div>
            В тексте этапа фиксируйте конкретные условия, а не общие формулировки. Это снижает разночтения между менеджерами.
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Настройте подсказки для полей в карточке сделки",
    content: (
      <div>
        <p>
          Для полей можно задавать подсказки с привязкой к воронке. При необходимости подсказка работает как общая для поля.
        </p>
        <ul className="sc-list">
          <li>Выберите группу полей и конкретное поле</li>
          <li>Добавьте короткое пояснение: что и в каком формате вводить</li>
          <li>Сохраните и откройте карточку сделки для проверки</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Проверьте результат и масштабируйте правила",
    content: (
      <div>
        <p>
          После сохранения подсказки применяются сразу. Обновите воронки и карточки, затем соберите обратную связь команды.
        </p>
        <ul className="sc-list">
          <li>Проверьте подсказки в воронке и в карточке сделки</li>
          <li>Отредактируйте формулировки по итогам первой недели</li>
          <li>Добавьте подсказки в остальные воронки по тому же шаблону</li>
        </ul>
        <div className="sc-note sc-note--green" style={{ marginTop: 12 }}>
          <div className="sc-note-title">Результат:</div>
          <div>
            Единые правила работы становятся видимыми прямо в интерфейсе, а адаптация новых менеджеров проходит быстрее.
          </div>
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
    title: "Единые трактовки этапов",
    text: (
      <>
        Для каждого этапа команда видит одинаковое пояснение. Снижается число «субъективных» переводов сделок по воронке.
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo.svg",
  },
  {
    type: "card",
    title: "Меньше ошибок при заполнении полей",
    text: (
      <>
        Подсказки возле полей помогают менеджерам сразу вносить данные в нужном формате и с нужной детализацией.
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo (1).svg",
  },
  { type: "stripe", side: "right", text: "AMO CRM AMO CRM AMO CRM" },
  { type: "stripe", side: "left", text: "AMO CRM AMO CRM AMO CRM" },
  {
    type: "card",
    title: "Быстрая адаптация новичков",
    text: (
      <>
        Новые сотрудники не ищут инструкции в чатах и документах. Основные правила работы доступны прямо в карточке и воронке.
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo (2).svg",
  },
  {
    type: "card",
    title: "Управляемый стандарт продаж",
    text: (
      <>
        Руководитель фиксирует единый подход через подсказки и может оперативно обновлять формулировки при изменении процессов.
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
    title: "Этапы понимаются по-разному",
    text: (
      <>
        Один менеджер переносит сделку на этап раньше срока, другой держит её слишком долго.
        Без явных правил в интерфейсе появляются <span className="at-mark">разночтения в воронке</span>.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_web.jpeg",
  },
  {
    title: "Поля заполняются с ошибками",
    text: (
      <>
        Если неясно, что писать в поле и в каком формате, данные становятся несопоставимыми.
        Это ухудшает <span className="at-mark">аналитику и автоматизации</span>.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_watch.jpeg",
  },
  {
    title: "Новые сотрудники долго входят в работу",
    text: (
      <>
        Важные правила разбросаны по инструкциям и чатам. Менеджер тратит время на поиск контекста вместо работы со сделкой.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_chart.jpeg",
  },
  {
    title: "Руководителю сложно закрепить единый стандарт",
    text: (
      <>
        Без подсказок в интерфейсе правила быстро забываются, и команда возвращается к
        <span className="at-mark"> разным сценариям работы</span>.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_basket.jpeg",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    iconUrl: "/widgets/BackAll/gear.jpeg",
    title: "Подсказки для этапов воронки",
    text: (
      <>
        Добавляйте пояснения к этапам, чтобы менеджеры понимали, когда переводить сделку дальше и какие условия должны быть выполнены.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/tag.jpeg",
    title: "Подсказки для полей в карточке",
    text: (
      <>
        Настраивайте инструкции для конкретных полей, чтобы избежать ошибок при вводе данных и сократить повторные уточнения.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/boxes.jpeg",
    title: "Привязка к воронке и общий режим",
    text: (
      <>
        Можно делать подсказки как для конкретной воронки, так и общие для поля. Это удобно при разных процессах продаж.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/magnifier.jpeg",
    title: "Показ прямо в интерфейсе",
    text: (
      <>
        Подсказка открывается при наведении на значок «?». Сотрудник получает контекст в момент работы, без переходов в базу знаний.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/burger.jpeg",
    title: "Удобное редактирование в настройках",
    text: (
      <>
        Подсказки можно быстро добавлять, изменять и удалять через расширенные настройки виджета без сложной технической настройки.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/shield.jpeg",
    title: "Мгновенное применение изменений",
    text: (
      <>
        После сохранения подсказки применяются сразу. Команда начинает работать по обновлённым правилам без ручного обновления данных.
      </>
    ),
  },
];
