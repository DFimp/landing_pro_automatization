"use client";

type Testimonial = {
  tag: string;
  text: string;
  author: string;
  overshoot?: "left" | "right" | "none";
};

const ITEMS: Testimonial[] = [
  {
    tag: "СТРОИТЕЛЬСТВО",
    text:
      "Раньше управление проектами в нашей строительной компании занимало огромное количество времени: отслеживание этапов, согласование с клиентами и подрядчиками — всё было разрозненно. После внедрения amoCRM и автоматизации процессов мы смогли сократить время на рутинные задачи на 40%. Теперь все этапы строительства, от заключения договора до сдачи объекта, отслеживаются в единой системе.",
    author: "Алексей, руководитель проектов",
    overshoot: "left",
  },
  {
    tag: "IT-БИЗНЕС",
    text:
      "Как IT-компания, мы всегда стремимся оптимизировать процессы. С внедрением amoCRM мы смогли автоматизировать работу с заявками на техподдержку, настроить интеграции с облачными сервисами и отслеживать KPI каждого сотрудника. Теперь наши специалисты тратят меньше времени на рутину и больше на решение сложных задач. Производительность команды выросла на 30%.",
    author: "Дмитрий, технический директор",
    overshoot: "right",
  },
  {
    tag: "ФИТНЕС-КЛУБ",
    text:
      "Напоминания о тренировках и персональные предложения в amoCRM помогли снизить отток клиентов на 15% и увеличить средний чек.",
    author: "Екатерина, администратор клуба",
    overshoot: "none",
  },
  {
    tag: "ОБРАЗОВАНИЕ",
    text:
      "Автоматизация в amoCRM увеличила количество записей на курсы на 35%. Менеджеры теперь сосредоточены на клиентах, а не на рутине.",
    author: "Мария, менеджер по развитию",
    overshoot: "none",
  },
];

function TagBadge({ children, left = "18px" }: { children: string; left?: string }) {
  return (
    <div
      className="badge font-extrabold select-none"
      style={{
        position: "absolute",
        top: -14,
        left,
        background: "#0F1427",
        color: "#fff",
        padding: "6px 12px",
        fontSize: 12,
        letterSpacing: ".02em",
        whiteSpace: "nowrap",
        borderRadius: 8,
      }}
    >
      {children}
    </div>
  );
}

function Pill({
  text,
  tag,
  shape,
  padY = 18,
  padX = 24,
  contentAlign = "left",
  badgeLeft,
  className,
}: {
  text: string;
  tag: string;
  shape:
    | { type: "left"; amount: number }
    | { type: "right"; amount: number }
    | { type: "full" };
  padY?: number;
  padX?: number;
  contentAlign?: "left" | "right";
  badgeLeft?: string;
  className?: string;
}) {
  const radius =
    shape.type === "left"
      ? "0 75px 75px 0"
      : shape.type === "right"
      ? "75px 0 0 75px"
      : "75px";

  const ml = shape.type === "left" ? `-${shape.amount}vw` : "0px";
  const mr = shape.type === "right" ? `-${shape.amount}vw` : "0px";

  const contentWrapStyle: React.CSSProperties = {
    maxWidth: 1150,
    marginLeft: contentAlign === "right" ? "auto" : 0,
    marginRight: contentAlign === "left" ? "auto" : 0,
    textAlign: contentAlign,
  };

  return (
    <div
      className={`pill relative ${className ?? ""}`}
      style={{
        background: "#eef3ff",
        borderRadius: radius,
        padding: `${padY}px ${padX}px`,
        marginLeft: ml,
        marginRight: mr,
      }}
    >
      <TagBadge left={badgeLeft}>{tag}</TagBadge>

      <div className="content-wrap" style={contentWrapStyle}>
        <p
          className="pill-text"
          style={{
            color: "#0f1427",
            fontSize: 16,
            lineHeight: 1.6,
            margin: 0,
            textAlign: "left",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const overshoot = 40;

  return (
    <section style={{ paddingTop: 16, paddingBottom: 8, marginTop: 32, marginBottom: 32 }}>
      <div
        className="at-container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <h2
          style={{
            fontSize: 32,
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 12,
            color: "#0f1427",
          }}
        >
          Отзывы наших клиентов
        </h2>

        <div className="relative mb-6" style={{ height: 28 }}>
          <span
            className="absolute left-0 right-0"
            style={{ top: 14, height: 2, background: "#0F1427" }}
          />
          <span
            className="absolute"
            style={{
              right: 0,
              top: 7,
              width: 14,
              height: 14,
              borderTop: "2px solid #0F1427",
              borderRight: "2px solid #0F1427",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      </div>

      <div
        className="at-container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <Pill
          tag={ITEMS[0].tag}
          text={ITEMS[0].text}
          shape={{ type: "left", amount: overshoot }}
          contentAlign="right"
          badgeLeft="40vw"
          className="pill--left"
        />
        <div className="author" style={{ marginTop: 10, textAlign: "right", color: "#0f1427", opacity: 0.8, fontSize: 14 }}>
          — {ITEMS[0].author}
        </div>
      </div>

      <div
        className="at-container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "24px auto 0",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <Pill
          tag={ITEMS[1].tag}
          text={ITEMS[1].text}
          shape={{ type: "right", amount: overshoot }}
          contentAlign="left"
          badgeLeft="30vw"
          className="pill--right"
        />
        <div className="author" style={{ marginTop: 10, textAlign: "right", color: "#0f1427", opacity: 0.8, fontSize: 14 }}>
          — {ITEMS[1].author}
        </div>
      </div>

      <div
        className="at-container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "24px auto 0",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <div className="pair" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[ITEMS[2], ITEMS[3]].map((it, i) => (
            <div key={it.tag + i}>
              <Pill tag={it.tag} text={it.text} shape={{ type: "full" }} />
              <div className="author" style={{ marginTop: 10, textAlign: "right", color: "#0f1427", opacity: 0.8, fontSize: 14 }}>
                — {it.author}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          /* базово: все плашки — без уводов */
          .pill {
            margin-left: 0 !important;
            margin-right: 0 !important;
            border-radius: 24px !important;
            padding: 16px !important;
            width: 100% !important;
            max-width: 100% !important;
          }

          .badge {
            left: 16px !important;
            top: -12px !important;
            font-size: 11px !important;
          }

          .pill-text {
            font-size: 14px !important;
            line-height: 1.55 !important;
            text-align: left !important;
          }

          .author {
            text-align: left !important;
            font-size: 13px !important;
          }

          .pair {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          /* уводим только первые две на мобильных */
          .pill.pill--left {
            margin-left: -5vw !important;
          }
          .pill.pill--right {
            margin-right: -5vw !important;
          }
        }
      `}</style>
    </section>
  );
}
