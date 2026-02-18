import React from "react";
import clsx from "clsx";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

import "./ProblemsCard.css";

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
    <section id={id} className={clsx("prb-section", className)}>
      <ScrollReveal
        as="div"
        className="at-container"
        variant="prb"
        staggerChildren
        amount={0.3}
        delayMs={60}
        durationMs={900}
        staggerMs={120}
      >
        <h2
          className="prb-title at-section-title"
          data-sr-item
          style={{ ["--i" as any]: 0, ["--x" as any]: "-18px", ["--rz" as any]: "-0.6deg" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="prb-subtitle"
            data-sr-item
            style={{ ["--i" as any]: 1, ["--x" as any]: "18px", ["--rz" as any]: "0.4deg" }}
          >
            {subtitle}
          </p>
        )}

        <div className="prb-grid">
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
              className={clsx("prb-card", item.className)}
              aria-label={item.title}
            >
              <h3 className="prb-card-title">{item.title}</h3>
              <p className="prb-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProblemsCard;
