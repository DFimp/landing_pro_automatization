import React from "react";
import clsx from "clsx";

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
      <div className="at-container">
        <h2 className="prb-title at-section-title">{title}</h2>
        {subtitle && <p className="prb-subtitle">{subtitle}</p>}

        <div className="prb-grid">
          {items.map((item, i) => (
            <article
              key={i}
              className={clsx("prb-card", item.className)}
              style={{ backgroundImage: `url("${item.bgUrl}")` }}
              aria-label={item.title}
            >
              <h3 className="prb-card-title">{item.title}</h3>
              <p className="prb-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsCard;
