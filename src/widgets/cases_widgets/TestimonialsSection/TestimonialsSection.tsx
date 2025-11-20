import { CSSProperties } from "react";
import styles from "./index.module.css";

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
      "Раньше управление проектами в нашей строительной компании занимало огромное количество времени: отслеживание этапов, согласование с клиентами и подрядчиками — все было разрозненно. После внедрения amoCRM и автоматизации процессов мы смогли сократить время на рутинные задачи на 40%. Теперь все этапы строительства, от заключения договора до сдачи объекта, отслеживаются в единой системе.",
    author: "Алексей, руководитель проектов",
    overshoot: "left",
  },
  {
    tag: "IT-БИЗНЕС",
    text:
      "Как IT-компания, мы всегда стремимся оптимизировать процессы. С внедрением amoCRM мы смогли автоматизировать работу с заявками на техподдержку, настроить интеграцию с облачными сервисами и отслеживать KPI каждого сотрудника. Теперь наши специалисты тратят меньше времени на рутину и больше на решение сложных задач. Производительность команды выросла на 30%.",
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

function TagBadge({ children, left = "50px" }: { children: string; left?: string }) {
  return (
    <div
      className={styles.badge}
      style={{ left }}
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
    shape.type === "left" ? "0 75px 75px 0" : shape.type === "right" ? "75px 0 0 75px" : "75px";

  const ml = shape.type === "left" ? `-${shape.amount}vw` : "0px";
  const mr = shape.type === "right" ? `-${shape.amount}vw` : "0px";

  const contentWrapStyle: CSSProperties = {
    maxWidth: 1150,
    marginLeft: contentAlign === "right" ? "auto" : 0,
    marginRight: contentAlign === "left" ? "auto" : 0,
    textAlign: contentAlign,
  };

  return (
    <div
      className={`${styles.pill} ${className ? styles[className] : ""}`}
      style={{
        borderRadius: radius,
        padding: `${padY}px ${padX}px`,
        marginLeft: ml,
        marginRight: mr,
      }}
    >
      <TagBadge left={badgeLeft}>{tag}</TagBadge>

      <div className={styles.contentWrap} style={contentWrapStyle}>
        <p className={styles.pillText}>
          {text}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const overshoot = 40;

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Отзывы наших клиентов
        </h2>

        <div className={styles.decorLine}>
          <span className={styles.decorLineBar} />
          <span className={styles.decorLineArrow} />
        </div>
      </div>

      <div className={styles.container}>
        <Pill
          tag={ITEMS[0].tag}
          text={ITEMS[0].text}
          shape={{ type: "left", amount: overshoot }}
          contentAlign="right"
          badgeLeft="40vw"
          className="pillLeft"
        />
        <div className={`${styles.author} ${styles.authorRight}`}>
          — {ITEMS[0].author}
        </div>
      </div>

      <div className={`${styles.container} ${styles.containerSpaced}`}>
        <Pill
          tag={ITEMS[1].tag}
          text={ITEMS[1].text}
          shape={{ type: "right", amount: overshoot }}
          contentAlign="left"
          badgeLeft="30vw"
          className="pillRight"
        />
        <div className={`${styles.author} ${styles.authorRight}`}>
          — {ITEMS[1].author}
        </div>
      </div>

      <div className={`${styles.container} ${styles.containerSpaced}`}>
        <div className={styles.pair}>
          {[ITEMS[2], ITEMS[3]].map((it, i) => (
            <div key={it.tag + i}>
              <Pill tag={it.tag} text={it.text} shape={{ type: "full" }} />
              <div className={`${styles.author} ${styles.authorRight}`}>
                — {it.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
