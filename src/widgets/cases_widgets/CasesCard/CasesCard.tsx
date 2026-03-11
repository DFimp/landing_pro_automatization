import { memo, CSSProperties } from "react";
import clsx from "clsx";

export type CasesItem = {
  tag: string;
  title: string;
  text: string;
  author: string;
  avatar?: string;
};

export const CASES: CasesItem[] = [
  {
    tag: "ОБРАЗОВАНИЕ",
    title: "Разработали уникальную систему расчёта зарплаты",
    text:
      "«Технопроф Академия» — наш давний клиент, обучает и сертифицирует персонал в крупном бизнесе. За 5 лет отдел продаж разросся до 37 человек. Для них решили сделать прозрачную систему расчета зарплат и кастомный дашборд с рейтингами, чтобы был стимул продавать больше.",
    author: "Руководитель проекта - Дмитрий Марченко",
    avatar: "/widgets/Cases/pm-1.jpeg",
  },
  {
    tag: "НЕДВИЖИМОСТЬ",
    title: "Получили лиды по 65₽ для аренды премиум-недвижимости в Сочи",
    text:
      "Внедрили WhatsApp-рассылку, которая снизила стоимость лида с 2000-3000₽ до 65₽ при среднем чеке 35 000₽ на аренду. Заполнили объекты в несезон и оптимизировали маркетинг, переключив бюджет с дорогих каналов на работу с базой и целевые рассылки.",
    author: "Руководитель проекта - Виолетта Полушина",
    avatar: "/widgets/Cases/pm-2.jpeg",
  },
  {
    tag: "УСЛУГИ",
    title: "Перенесли базу из Битрикс24 в amoCRM",
    text:
      "Ипотека + занимается одобрением ипотечных кредитов под ключ. Другая CRM-система не подходила: была перегруженной и неудобной. Мигрировали базу клиентов и партнеров, оцифровали 4 бизнес-процесса и автоматизировали их.",
    author: "Руководитель проекта - Ренат Голиц",
    avatar: "/widgets/Cases/pm-3.jpeg",
  },
  {
    tag: "СТРОИТЕЛЬСТВО",
    title:
      "Внедрение amoCRM в компанию по строительству и обслуживанию бассейнов и саун",
    text:
      "Компания «Оазис» строит сауны и бассейны под ключ - от котлована до сдачи объекта точно в срок. В продаже дорогого и качественного продукта важно выстроить коммуникацию с каждым клиентом. В этом помогает amoCRM.",
    author: "Руководитель проекта - Ярослав Черный",
    avatar: "/widgets/Cases/pm-4.jpeg",
  },
  {
    tag: "УСЛУГИ",
    title: "Как перейти с гугл-таблиц в amoCRM?",
    text:
      "Фиксировать все сделки в гугл-таблицах со временем стало неудобно, это отнимало много времени. Не было возможности видеть аналитику, успешные и неуспешные сделки, активные задачи. Рассказываем, как правильная настройка amoCRM упростила работу в Российском Центре Родословия.",
    author: "Руководитель проекта - Ренат Голиц",
    avatar: "/widgets/Cases/pm-5.jpeg",
  },
  {
    tag: "МЕДИЦИНА",
    title: "Уберизация выездных бригад в amoCRM с трекингом на карте",
    text:
      "Для медицинского центра «Алкоклиник» сократили время поиска бригады в 16 раз. Приложение на Android отсылает координаты диспетчеру в amoCRM и показывает актуальные статусы по заявкам. Функционал автоматически подбирает машину по геолокации.",
    author: "Руководитель проекта - Андрей Семёнов",
    avatar: "/widgets/Cases/pm-6.jpeg",
  },
];

export const DEFAULT_CASE: CasesItem = CASES[0];

const avatarClass =
  "shrink-0 rounded-full border border-white/60 bg-cover bg-center bg-no-repeat";
const caseCardClass =
  "relative overflow-visible text-white bg-[#3760e7] shadow-[0_32px_48px_rgba(55,96,231,0.25)] " +
  "w-[var(--case-width)] max-w-[var(--case-max-width)] h-[var(--case-height)] " +
  "rounded-[var(--case-radius)] p-[var(--case-padding)] pt-[var(--case-padding-top)] " +
  "max-[1024px]:max-w-full max-[768px]:w-full max-[768px]:max-w-full max-[768px]:h-auto max-[768px]:rounded-[32px] max-[768px]:p-6 max-[768px]:pt-16";
const caseBadgeClass =
  "absolute top-[calc(var(--case-padding-top)-52px)] left-[var(--case-padding)] bg-[#0f1427] text-white " +
  "px-[10px] py-[1px] text-[18px] tracking-[0.02em] border-2 border-[#0f1427] leading-[1.1] whitespace-nowrap font-medium z-[10] " +
  "max-[768px]:top-4 max-[768px]:left-6 max-[768px]:text-[12px]";
const caseTitleClass =
  "mt-3 text-[22px] leading-[1.25] font-normal max-[768px]:text-[18px] max-[768px]:leading-[1.3]";
const caseTextClass =
  "mt-[10px] text-[16px] leading-[1.6] opacity-[0.98] max-[768px]:text-[14px] max-[768px]:leading-[1.55]";
const caseFooterClass =
  "absolute left-[var(--case-padding)] right-[var(--case-padding)] bottom-[36px] flex items-center gap-4 " +
  "max-[768px]:relative max-[768px]:left-auto max-[768px]:right-auto max-[768px]:bottom-auto max-[768px]:mt-4";
const authorInfoClass = "flex flex-col";
const caseRoleClass =
  "text-[16px] leading-[1.2] opacity-90 mb-[6px] max-[768px]:text-[14px]";
const caseNameClass = "text-[16px] leading-[1.2] font-normal";
const casesGridClass =
  "w-full max-w-[1200px] mx-auto p-4 flex flex-col gap-10 max-[768px]:gap-4";
const casesRowBaseClass =
  "relative before:content-[''] before:absolute before:top-[50px] before:h-[3px] before:bg-black before:z-[2] " +
  "max-[768px]:before:hidden max-[768px]:after:hidden";
const casesRowRightClass =
  "before:left-[60px] before:right-[-40px] after:content-[''] after:absolute after:top-[51px] after:right-[-40px] " +
  "after:w-[22px] after:h-[22px] after:border-t-[3px] after:border-r-[3px] after:border-black after:translate-y-[-50%] after:rotate-45 after:z-[2]";
const casesRowLeftClass =
  "before:left-[-40px] before:right-[180px] after:content-[''] after:absolute after:top-[51px] after:left-[-40px] " +
  "after:w-[22px] after:h-[22px] after:border-t-[3px] after:border-l-[3px] after:border-black after:translate-y-[-50%] after:-rotate-45 after:z-[2]";
const casesRowGridClass =
  "grid grid-cols-[repeat(3,360px)] gap-x-10 gap-y-10 justify-between items-start " +
  "max-[1200px]:grid-cols-[repeat(2,minmax(0,1fr))] max-[1200px]:gap-x-6 max-[1200px]:gap-y-6 max-[1200px]:justify-stretch " +
  "max-[768px]:grid-cols-1 max-[768px]:gap-x-4 max-[768px]:gap-y-4";
const caseAboveLineClass = "relative z-[5]";

type CasesCardProps = {
  item?: CasesItem;
  className?: string;
  style?: CSSProperties;
  width?: number | string;
  height?: number;
  borderRadius?: number;
  padding?: number;
  paddingTop?: number;
  avatarSize?: number;
};

function splitAuthor(author: string) {
  const m = author.match(/^(.*?)\s*[-—–]\s*(.*)$/);
  if (!m) return { role: "Руководитель проекта", name: author };
  return { role: m[1] || "Руководитель проекта", name: m[2] || "" };
}

function Avatar({ src, size = 64 }: { src?: string; size?: number }) {
  return (
    <div
      className={avatarClass}
      style={{
        width: size,
        height: size,
        backgroundImage: src
          ? `url(${src})`
          : "radial-gradient(circle at 50% 40%, #fff 0%, #e3ecff 60%, #c7d6ff 100%)",
      }}
      aria-hidden
    />
  );
}

export const CasesCard = memo(function CasesCard({
  item = DEFAULT_CASE,
  className,
  style,
  width = 360,
  height = 675,
  borderRadius = 60,
  padding = 44,
  paddingTop = 90,
  avatarSize = 64,
}: CasesCardProps) {
  const { role, name } = splitAuthor(item.author);

  const cssVars = {
    ["--case-width" as any]: typeof width === "number" ? `${width}px` : width,
    ["--case-max-width" as any]: "360px",
    ["--case-height" as any]: `${height}px`,
    ["--case-radius" as any]: `${borderRadius}px`,
    ["--case-padding" as any]: `${padding}px`,
    ["--case-padding-top" as any]: `${paddingTop}px`,
  } as CSSProperties;

  return (
    <article
      className={clsx(caseCardClass, className)}
      style={{ ...cssVars, ...style }}
      aria-label={`Кейс: ${item.title}`}
    >
      <div className={caseBadgeClass}>{item.tag}</div>

      <h3 className={caseTitleClass}>{item.title}</h3>

      <p className={caseTextClass}>{item.text}</p>

      <div className={caseFooterClass}>
        <Avatar src={item.avatar} size={avatarSize} />
        <div className={authorInfoClass}>
          <span className={caseRoleClass}>{role}</span>
          <span className={caseNameClass}>{name}</span>
        </div>
      </div>
    </article>
  );
});

export function CasesGrid() {
  const [case1, case2, case3, case4, case5, case6] = CASES;

  return (
    <section className={casesGridClass}>
      <div className={clsx(casesRowBaseClass, casesRowRightClass)}>
        <div className={casesRowGridClass}>
          <CasesCard item={case1}  />
          <CasesCard item={case2} className={caseAboveLineClass} />
          <CasesCard item={case3}  />
        </div>
      </div>

      <div className={clsx(casesRowBaseClass, casesRowLeftClass)}>
        <div className={casesRowGridClass}>
          <CasesCard item={case4}  />
          <CasesCard item={case5} className={caseAboveLineClass} />
          <CasesCard item={case6}  />
        </div>
      </div>
    </section>
  );
}

