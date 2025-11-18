"use client";

import { memo, CSSProperties } from "react";

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
      "«Технолог Академия» — наш давний клиент, обучает и сертифицирует кадров в крупном бизнесе. За год выросли показатели на 37% на сотрудника. Построили систему расчёта зарплат и KPI, отчёты и интеграции — команда успевает продавать больше.",
    author: "Руководитель проекта - Дмитрий Марченко",
    avatar: "/widgets/Cases/pm-1.png",
  },
  {
    tag: "НЕДВИЖИМОСТЬ",
    title: "Получили лиды по 65₽ для аренды премиум-недвижимости в Сочи",
    text:
      "Внедрили WhatsApp-рассылки и сквозную аналитику. Снизили стоимость лида с 2000–3000 ₽ до 65 ₽, заполнили объекты на сезон. Запустили автоворонки, лид-формы и целевые рассылки.",
    author: "Руководитель проекта - Виолетта Полушина",
    avatar: "/widgets/Cases/pm-2.png",
  },
  {
    tag: "УСЛУГИ",
    title: "Перенесли базу из Битрикс24 в amoCRM",
    text:
      "Интекс — занимается оформлением ипотечных кредитов. Другая CRM была неудобной. Мигрировали базу, интегрировали ключевые сервисы и автоматизировали процессы.",
    author: "Руководитель проекта - Ренат Голиц",
    avatar: "/widgets/Cases/pm-3.png",
  },
  {
    tag: "СТРОИТЕЛЬСТВО",
    title:
      "Внедрение amoCRM в компанию по строительству и обслуживанию бассейнов и саун",
    text:
      "Настроили этапы воронок, регламенты, документы и интеграции. Систематизировали продажи, сократили сроки отгрузок и вывели ключевые метрики руководителю.",
    author: "Руководитель проекта - Ярослав Черный",
    avatar: "/widgets/Cases/pm-4.png",
  },
  {
    tag: "УСЛУГИ",
    title: "Как перейти с гугл-таблиц в amoCRM?",
    text:
      "Оцифровали процессы в CRM, настроили автозадачи и уведомления, обучили менеджеров. Организовали ежедневную рутину и контроль качества.",
    author: "Руководитель проекта - Ренат Голиц",
    avatar: "/widgets/Cases/pm-5.png",
  },
  {
    tag: "МЕДИЦИНА",
    title: "Уберизация выездных бригад в amoCRM с трекингом на карте",
    text:
      "«Медиклиник» сократили время записи и число ошибок. Подключили виджеты и интеграции, внедрили сквозную аналитику, уведомления и отчёты.",
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
      className="rounded-full border border-white/60 flex-shrink-0"
      style={{
        width: size,
        height: size,
        backgroundImage: src
          ? `url(${src})`
          : "radial-gradient(circle at 50% 40%, #fff 0%, #e3ecff 60%, #c7d6ff 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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

  return (
    <article
      className={["case-card relative text-white", className]
        .filter(Boolean)
        .join(" ")}
      style={{
        width,
        maxWidth: 360,
        height,
        background: "#3760E7",
        borderRadius,
        padding,
        paddingTop,
        boxShadow: "0 32px 48px rgba(55, 96, 231, 0.25)",
        ...style,
      }}
      aria-label={`Кейс: ${item.title}`}
    >
      <div
        className="case-badge font-extrabold select-none"
        style={{
          position: "absolute",
          top: paddingTop - 52,
          left: padding,
          background: "#0F1427",
          color: "#fff",
          padding: "1px 10px",
          fontSize: 18,
          letterSpacing: ".02em",
          border: "2px solid #0F1427",
          lineHeight: 1.1,
          whiteSpace: "nowrap",
          zIndex: 3,
        }}
      >
        {item.tag}
      </div>

      <h3
        className="case-title font-semibold"
        style={{ marginTop: 12, fontSize: 22, lineHeight: 1.25 }}
      >
        {item.title}
      </h3>

      <p
        className="case-text"
        style={{ marginTop: 10, fontSize: 16, lineHeight: 1.6, opacity: 0.98 }}
      >
        {item.text}
      </p>

      <div
        className="case-footer"
        style={{
          position: "absolute",
          left: padding,
          right: padding,
          bottom: 36,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Avatar src={item.avatar} size={avatarSize} />
        <div className="flex flex-col">
          <span
            className="case-role"
            style={{
              fontSize: 16,
              lineHeight: 1.2,
              opacity: 0.9,
              marginBottom: 6,
            }}
          >
            {role}
          </span>
          <span
            className="case-name font-semibold"
            style={{ fontSize: 18, lineHeight: 1.2 }}
          >
            {name}
          </span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .case-card {
            max-width: 100% !important;
          }
        }
        @media (max-width: 768px) {
          .case-card {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            border-radius: 32px !important;
            padding: 24px !important;
            padding-top: 64px !important;
          }
          .case-badge {
            top: 16px !important;
            left: 24px !important;
            font-size: 12px !important;
          }
          .case-title {
            font-size: 18px !important;
            line-height: 1.3 !important;
          }
          .case-text {
            font-size: 14px !important;
            line-height: 1.55 !important;
          }
          .case-footer {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            margin-top: 16px !important;
          }
          .case-role {
            font-size: 14px !important;
          }
          .case-name {
            font-size: 16px !important;
          }
        }
      `}</style>
    </article>
  );
});

export function CasesGrid() {
  const [case1, case2, case3, case4, case5, case6] = CASES;

  return (
    <section className="cases-grid">
      {/* ВЕРХНИЙ РЯД — стрелка вправо */}
      <div className="cases-row cases-row--right">
        <div className="cases-row__grid">
          <CasesCard item={case1} className="case-card--under" />
          {/* 2-я карточка: z-index 2 */}
          <CasesCard
            item={case2}
            className="case-card--on-top"
            style={{ zIndex: 2 }}
          />
          <CasesCard item={case3} className="case-card--under" />
        </div>
      </div>

      {/* НИЖНИЙ РЯД — стрелка влево */}
      <div className="cases-row cases-row--left">
        <div className="cases-row__grid">
          <CasesCard item={case4} className="case-card--under" />
          {/* 5-я карточка: z-index 2 */}
          <CasesCard
            item={case5}
            className="case-card--on-top"
            style={{ zIndex: 2 }}
          />
          <CasesCard item={case6} className="case-card--under" />
        </div>
      </div>

      <style jsx>{`
        .cases-grid {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .cases-row {
          position: relative;
        }

        .cases-row__grid {
          display: grid;
          grid-template-columns: repeat(3, 360px);
          column-gap: 40px;
          row-gap: 40px;
          justify-content: space-between;
          align-items: flex-start;
        }

        /* Линия — top не меняем */
        .cases-row::before {
          content: "";
          position: absolute;
          top: 50px;
          height: 3px;
          background: #000;
          z-index: 1;
        }

        .cases-row--right::before {
          left: 16px;
          right: 40px;
        }

        .cases-row--left::before {
          left: 20px;
          right: 16px;
        }

        /* Стрелка вправо */
        .cases-row--right::after {
          content: "";
          position: absolute;
          top: 51px;
          right: 40px;
          width: 22px;
          height: 22px;
          border-top: 3px solid #000;
          border-right: 3px solid #000;
          transform: translateY(-50%) rotate(45deg);
          z-index: 1;
        }

        /* Стрелка влево */
        .cases-row--left::after {
          content: "";
          position: absolute;
          top: 51px;
          left: 20px;
          width: 22px;
          height: 22px;
          border-top: 3px solid #000;
          border-left: 3px solid #000;
          transform: translateY(-50%) rotate(-45deg);
          z-index: 1;
        }

        /* Крайние карточки под линией, центральные — над линией */
        .case-card--under {
          position: relative;
          z-index: 0;
        }

        .case-card--on-top {
          position: relative;
          /* z-index ставим только инлайном у 2 и 5 карточки */
        }

        @media (max-width: 1200px) {
          .cases-row__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 24px;
            row-gap: 24px;
            justify-content: stretch;
          }
        }

        @media (max-width: 768px) {
          .cases-grid {
            gap: 16px;
          }

          .cases-row__grid {
            grid-template-columns: 1fr;
            column-gap: 16px;
            row-gap: 16px;
          }

          .cases-row::before,
          .cases-row::after {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
