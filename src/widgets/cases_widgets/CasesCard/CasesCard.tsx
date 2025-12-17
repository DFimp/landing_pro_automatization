import { memo, CSSProperties } from "react";
import styles from "./index.module.css";

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
    avatar: "/widgets/Cases/pm-1.png",
  },
  {
    tag: "НЕДВИЖИМОСТЬ",
    title: "Получили лиды по 65₽ для аренды премиум-недвижимости в Сочи",
    text:
      "Внедрили WhatsApp-рассылку, которая снизила стоимость лида с 2000-3000₽ до 65₽ при среднем чеке 35 000₽ на аренду. Заполнили объекты в несезон и оптимизировали маркетинг, переключив бюджет с дорогих каналов на работу с базой и целевые рассылки.",
    author: "Руководитель проекта - Виолетта Полушина",
    avatar: "/widgets/Cases/pm-2.png",
  },
  {
    tag: "УСЛУГИ",
    title: "Перенесли базу из Битрикс24 в amoCRM",
    text:
      "Ипотека + занимается одобрением ипотечных кредитов под ключ. Другая CRM-система не подходила: была перегруженной и неудобной. Мигрировали базу клиентов и партнеров, оцифровали 4 бизнес-процесса и автоматизировали их.",
    author: "Руководитель проекта - Ренат Голиц",
    avatar: "/widgets/Cases/pm-3.png",
  },
  {
    tag: "СТРОИТЕЛЬСТВО",
    title:
      "Внедрение amoCRM в компанию по строительству и обслуживанию бассейнов и саун",
    text:
      "Компания «Оазис» строит сауны и бассейны под ключ - от котлована до сдачи объекта точно в срок. В продаже дорогого и качественного продукта важно выстроить коммуникацию с каждым клиентом. В этом помогает amoCRM.",
    author: "Руководитель проекта - Ярослав Черный",
    avatar: "/widgets/Cases/pm-4.png",
  },
  {
    tag: "УСЛУГИ",
    title: "Как перейти с гугл-таблиц в amoCRM?",
    text:
      "Фиксировать все сделки в гугл-таблицах со временем стало неудобно, это отнимало много времени. Не было возможности видеть аналитику, успешные и неуспешные сделки, активные задачи. Рассказываем, как правильная настройка amoCRM упростила работу в Российском Центре Родословия.",
    author: "Руководитель проекта - Ренат Голиц",
    avatar: "/widgets/Cases/pm-5.png",
  },
  {
    tag: "МЕДИЦИНА",
    title: "Уберизация выездных бригад в amoCRM с трекингом на карте",
    text:
      "Для медицинского центра «Алкоклиник» сократили время поиска бригады в 16 раз. Приложение на Android отсылает координаты диспетчеру в amoCRM и показывает актуальные статусы по заявкам. Функционал автоматически подбирает машину по геолокации.",
    author: "Руководитель проекта - Андрей Семёнов",
    avatar: "/widgets/Cases/pm-6.png",
  },
];

export const DEFAULT_CASE: CasesItem = CASES[0];

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
      className={styles.avatar}
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
      className={[styles.caseCard, className].filter(Boolean).join(" ")}
      style={{ ...cssVars, ...style }}
      aria-label={`Кейс: ${item.title}`}
    >
      <div className={styles.caseBadge}>{item.tag}</div>

      <h3 className={styles.caseTitle}>{item.title}</h3>

      <p className={styles.caseText}>{item.text}</p>

      <div className={styles.caseFooter}>
        <Avatar src={item.avatar} size={avatarSize} />
        <div className={styles.authorInfo}>
          <span className={styles.caseRole}>{role}</span>
          <span className={styles.caseName}>{name}</span>
        </div>
      </div>
    </article>
  );
});

export function CasesGrid() {
  const [case1, case2, case3, case4, case5, case6] = CASES;

  return (
    <section className={styles.casesGrid}>
      <div className={[styles.casesRow, styles.casesRowRight].join(" ")}>
        <div className={styles.casesRowGrid}>
          <CasesCard item={case1} className={styles.caseUnderLine} />
          <CasesCard item={case2} className={styles.caseAboveLine} />
          <CasesCard item={case3} className={styles.caseUnderLine} />
        </div>
      </div>

      <div className={[styles.casesRow, styles.casesRowLeft].join(" ")}>
        <div className={styles.casesRowGrid}>
          <CasesCard item={case4} className={styles.caseUnderLine} />
          <CasesCard item={case5} className={styles.caseAboveLine} />
          <CasesCard item={case6} className={styles.caseUnderLine} />
        </div>
      </div>
    </section>
  );
}
