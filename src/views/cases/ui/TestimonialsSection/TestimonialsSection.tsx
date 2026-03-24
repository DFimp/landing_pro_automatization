import { CSSProperties } from "react";

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
      className="absolute top-[-14px] left-[var(--badge-left)] bg-[#0f1427] text-white px-[2px] text-[18px] tracking-[0.02em] whitespace-nowrap font-medium select-none max-[768px]:!left-4 max-[768px]:!top-[-12px] max-[768px]:!text-[11px]"
      style={{ ["--badge-left" as any]: left }}
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

  const contentWrapClass =
    contentAlign === "right"
      ? "max-w-[1150px] ml-auto text-right"
      : "max-w-[1150px] mr-auto text-left";

  const mobileShiftClass =
    shape.type === "left"
      ? "max-[768px]:!ml-[-5vw] max-[768px]:!mr-0"
      : shape.type === "right"
      ? "max-[768px]:!mr-[-5vw] max-[768px]:!ml-0"
      : "max-[768px]:!ml-0 max-[768px]:!mr-0";

  const pillStyle: CSSProperties = {
    ["--pill-radius" as any]: radius,
    ["--pill-pad-y" as any]: `${padY}px`,
    ["--pill-pad-x" as any]: `${padX}px`,
    ["--pill-ml" as any]: ml,
    ["--pill-mr" as any]: mr,
  };

  return (
    <div
      className={`relative bg-[#eef3ff] overflow-visible rounded-[var(--pill-radius)] py-[var(--pill-pad-y)] px-[var(--pill-pad-x)] ml-[var(--pill-ml)] mr-[var(--pill-mr)] max-[768px]:!rounded-[24px] max-[768px]:!p-4 max-[768px]:!w-full max-[768px]:!max-w-full ${mobileShiftClass} ${className || ""}`}
      style={pillStyle}
    >
      <TagBadge left={badgeLeft}>{tag}</TagBadge>

      <div className={contentWrapClass}>
        <p className="text-[#0f1427] text-[16px] leading-[1.6] m-0 text-left break-words max-[768px]:text-[14px] max-[768px]:leading-[1.55]">
          {text}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const overshoot = 40;

  return (
    <section className="pt-4 pb-2 mt-8 mb-8 overflow-visible">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <h2 className="text-[32px] font-extrabold leading-[1.2] mb-3 text-[#0f1427]">
          Отзывы наших клиентов
        </h2>

        <div className="relative mb-6 h-7">
          <span className="absolute left-0 right-0 top-[14px] h-[2px] bg-[#0f1427]" />
          <span className="absolute right-0 top-[7px] w-[14px] h-[14px] border-t-2 border-r-2 border-[#0f1427] rotate-45" />
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-4">
        <Pill
          tag={ITEMS[0].tag}
          text={ITEMS[0].text}
          shape={{ type: "left", amount: overshoot }}
          contentAlign="right"
          badgeLeft="40vw"
        />
        <div className="mt-[10px] text-[#0f1427] opacity-80 text-[14px] text-right max-[768px]:text-left max-[768px]:text-[13px]">
          — {ITEMS[0].author}
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-4 mt-6">
        <Pill
          tag={ITEMS[1].tag}
          text={ITEMS[1].text}
          shape={{ type: "right", amount: overshoot }}
          contentAlign="left"
          badgeLeft="30vw"
        />
        <div className="mt-[10px] text-[#0f1427] opacity-80 text-[14px] text-right max-[768px]:text-left max-[768px]:text-[13px]">
          — {ITEMS[1].author}
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-4 mt-6">
        <div className="grid grid-cols-2 gap-6 max-[768px]:grid-cols-1 max-[768px]:gap-4">
          {[ITEMS[2], ITEMS[3]].map((it, i) => (
            <div key={it.tag + i}>
              <Pill tag={it.tag} text={it.text} shape={{ type: "full" }} />
              <div className="mt-[10px] text-[#0f1427] opacity-80 text-[14px] text-right max-[768px]:text-left max-[768px]:text-[13px]">
                — {it.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
