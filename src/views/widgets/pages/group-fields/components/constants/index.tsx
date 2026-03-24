import {
  caseCard,
  caseStripe,
  createCaseItems,
  createProblems,
  createSteps,
  stepAction,
  stepList,
  stepNote,
  stepParagraph,
} from "@/features/widget-page";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["group-fields"];

export const STEPS = createSteps([
  {
    title: "Установка виджета",
    blocks: [
      stepParagraph(
        "Нажмите кнопку «Установить виджет» на лендинге и следуйте стандартной инструкции amoCRM для подключения.",
      ),
      stepAction(getWidgetInstallUrl(widget.clientId!), "Установить виджет сейчас", {
        wrapperClassName: "mt-[18px]",
        className:
          "inline-flex items-center justify-center h-11 px-5 rounded-full bg-[#386bff] text-white font-bold shadow-[0_12px_28px_rgba(56,107,255,0.35)]",
      }),
    ],
  },
  {
    title: "Подготовка полей в amoCRM",
    blocks: [
      stepParagraph("Создайте служебные поля-маркеры, которые будут задавать структуру:"),
      stepList([
        <><strong>--- Группа ---</strong> — начало блока</>,
        <><strong>-- Подгруппа --</strong> — начало подгруппы внутри группы</>,
        <><strong>-- END --</strong> — конец подгруппы</>,
        <><strong>--- END ---</strong> — конец группы</>,
      ]),
      stepParagraph(
        "Эти поля можно оставить в самом низу списка. Виджет скроет их и они не будут мешать менеджерам.",
        { style: { marginTop: 8 } },
      ),
    ],
  },
  {
    title: "Настройка структуры карточки",
    blocks: [
      stepParagraph(
        "Откройте карточку сделки и расставьте маркеры в нужном порядке, чтобы задать структуру:",
      ),
      stepList([
        "Сгруппируйте логически связанные поля в одну группу",
        "Используйте подгруппы для сложных блоков, например «Адрес» или «Оплата»",
        "Для нескольких групп повторите набор маркеров",
      ]),
      stepNote(
        "Совет:",
        "Сначала спланируйте структуру на бумаге, а затем перенесите её в поля.",
        { tone: "blue", style: { marginTop: 12 } },
      ),
    ],
  },
  {
    title: "Автоматическая группировка",
    blocks: [
      stepParagraph(
        "После установки и расстановки маркеров откройте карточку сделки заново — виджет автоматически:",
      ),
      stepList([
        "Соберёт поля в группы и подгруппы",
        "Скроет служебные маркеры из интерфейса",
        "Сделает группы сворачиваемыми",
      ]),
    ],
  },
  {
    title: "Работа с группами и подгруппами",
    blocks: [
      stepParagraph("Используйте возможности сгруппированной карточки:"),
      stepList([
        "Разворачивайте только нужные блоки во время работы",
        "Скрывайте второстепенные подгруппы, чтобы не перегружать экран",
        "Быстро переходите к нужному разделу без долгой прокрутки",
      ]),
    ],
  },
  {
    title: "Изменение структуры",
    blocks: [
      stepParagraph(
        "Хотите изменить расположение блоков или добавить новые группы? Просто обновите порядок и подписи маркеров в списке полей.",
      ),
      stepParagraph(
        "Виджет автоматически подстроится под новую структуру при следующем открытии карточки.",
      ),
    ],
  },
]);

export const PROBLEMS = createProblems([
  {
    title: "Слишком много полей в карточке",
    text: (
      <>
        Менеджерам приходится <span className="at-mark">долго прокручивать</span>{" "}
        карточку сделки, чтобы найти нужное поле. Это замедляет работу и
        раздражает сотрудников.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_web.jpeg",
  },
  {
    title: "Хаос в расположении информации",
    text: (
      <>
        Важно помнить, где лежит нужное поле: вверху, внизу или посередине.
        Новым сотрудникам <span className="at-mark">сложно разобраться</span> в
        карточке без понятной структуры.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_watch.jpeg",
  },
  {
    title: "Скрытые и технические поля мешают работе",
    text: (
      <>
        Технические поля, созданные для интеграций и автоматизаций, постоянно
        <span className="at-mark">мозолят глаза</span> менеджерам и мешают
        фокусироваться на важном.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_chart.jpeg",
  },
  {
    title: "Потеря времени и концентрации",
    text: (
      <>
        Чем больше полей, тем выше шанс <span className="at-mark">ошибиться</span>,
        забыть что-то заполнить или пропустить ключевую информацию о клиенте.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_basket.jpeg",
  },
]);

export const CASE_ITEMS = createCaseItems([
  caseStripe("left", { white: true, text: "AMO CRM AMO CRM AMO CRM" }),
  caseCard(
    "Автоматический порядок в полях",
    <>
      Все поля в карточке сделки автоматически группируются в аккуратные блоки:
      общая информация, финансы, контакты, детали услуги и т.д.
    </>,
    { mobileDecorUrl: "/widgets/BackAll/amo.svg" },
  ),
  caseCard(
    "Скрытие служебных маркеров",
    <>
      Поля-маркеры остаются в системе, но <span className="at-mark">не мешают</span>{" "}
      менеджерам. Виджет использует их только для построения структуры.
    </>,
    { mobileDecorUrl: "/widgets/BackAll/amo (1).svg" },
  ),
  caseStripe("right", { text: "AMO CRM AMO CRM AMO CRM" }),
  caseStripe("left", { text: "AMO CRM AMO CRM AMO CRM" }),
  caseCard(
    "Свертываемые группы и подгруппы",
    <>
      Менеджеры видят только те блоки, которые нужны им прямо сейчас. Остальные
      можно свернуть одним кликом, чтобы <span className="at-mark">не перегружать</span>{" "}
      экран.
    </>,
    { mobileDecorUrl: "/widgets/BackAll/amo (2).svg" },
  ),
  caseCard(
    "Удобство для новичков и опытных",
    <>
      Новым сотрудникам проще разобраться в карточке, а опытные менеджеры
      работают быстрее: вся информация лежит по полочкам.
    </>,
    { mobileDecorUrl: "/widgets/BackAll/amo (3).svg" },
  ),
  caseStripe("right", { white: true, text: "AMO CRM AMO CRM AMO CRM" }),
]);
