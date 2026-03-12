import React from "react";
import clsx from "clsx";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

export type ProblemItem = {
  title: string;
  text: React.ReactNode;
  bgUrl: string;
  className?: string;
};

export interface ProblemsCardProps {
  id?: string;
  className?: string;
  title: string;
  subtitle?: string;
  items: ProblemItem[];
}

const ProblemsCard: React.FC<ProblemsCardProps> = ({
  id,
  className,
  title,
  subtitle,
  items,
}) => {
  return (
    <section id={id} className={clsx("prb-section bg-white py-[36px] pb-[16px] [&_.at-mark]:inline-block [&_.at-mark]:rounded-[5px] [&_.at-mark]:bg-[#4a6dff] [&_.at-mark]:text-white [&_.at-mark]:px-[5px] [&_.at-mark]:py-[1px] [&_.at-mark]:leading-[1.1] [&_.prb-mark]:inline-block [&_.prb-mark]:rounded-[5px] [&_.prb-mark]:bg-[#4a6dff] [&_.prb-mark]:text-white [&_.prb-mark]:px-[5px] [&_.prb-mark]:py-[1px] [&_.prb-mark]:leading-[1.1]", className)}>
      <ScrollReveal
        as="div"
        className="at-container mx-auto w-full max-w-[1200px] px-4"
        variant="prb"
        staggerChildren
        amount={0.3}
        delayMs={60}
        durationMs={900}
        staggerMs={120}
      >
        <h2
          className="prb-title at-section-title text-[clamp(22px,3.2vw,32px)] font-bold text-[#0f1427] mb-2"
          data-sr-item
          style={{ ["--i" as any]: 0, ["--x" as any]: "-18px", ["--rz" as any]: "-0.6deg" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="prb-subtitle text-[#5a6180] text-[16px] leading-[1.6] mt-1 mb-[18px]"
            data-sr-item
            style={{ ["--i" as any]: 1, ["--x" as any]: "18px", ["--rz" as any]: "0.4deg" }}
          >
            {subtitle}
          </p>
        )}

        <div className="prb-grid grid grid-cols-1 gap-[22px] mt-5 min-[900px]:grid-cols-2 min-[900px]:gap-6">
          {items.map((item, i) => (
            <article
              key={i}
              data-sr-item
              style={{
                ["--i" as any]: i + 2,
                ["--x" as any]: i % 2 === 0 ? "-34px" : "34px",
                ["--rz" as any]: i % 2 === 0 ? "-1.2deg" : "1.2deg",
                backgroundImage: `url("${item.bgUrl}")`,
              }}
              className={clsx("prb-card relative bg-white border border-[#5f78ff] rounded-[40px] p-10 shadow-[0_6px_18px_rgba(15,20,39,0.05)] overflow-hidden bg-no-repeat bg-left bg-[length:572px_auto] max-[640px]:rounded-[24px] max-[640px]:p-6 max-[640px]:bg-right max-[640px]:bg-[length:auto_208px]", item.className)}
              aria-label={item.title}
            >
              <h3 className="prb-card-title text-[18px] font-bold text-[#0f1427] mb-2">{item.title}</h3>
              <p className="prb-card-text text-[#3c4460] text-[15px] leading-[1.6]">{item.text}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProblemsCard;
