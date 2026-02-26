import "./CaseCard.css";

import React from "react";
import clsx from "clsx";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

export type CaseStripeItem = {
  type: "stripe";
  side: "left" | "right";
  white?: boolean;
  text?: string;
  hiddenDesktop?: boolean;
};

export type CaseCardItem = {
  type: "card";
  title: string;
  text: React.ReactNode;
  mobileDecorUrl?: string;
  mobileDecorLayer?: "under" | "over";
};

export type CaseItem = CaseStripeItem | CaseCardItem;

export interface CaseCardProps {
  id?: string;
  className?: string;
  title: string;
  subtitle?: string;
  items: CaseItem[];
  defaultStripeText?: string;
}

const CaseCard: React.FC<CaseCardProps> = ({
  id,
  className,
  title,
  subtitle,
  items,
  defaultStripeText = "AMO CRM AMO CRM AMO CRM",
}) => {
  return (
    <section className={clsx("at-cases", className)} id={id}>
      <div className="at-container">
        <ScrollReveal
          as="div"
          variant="tilt"
          amount={0.2}
          durationMs={1100}
          delayMs={40}
          yFrom={14}
          scaleFrom={0.985}
          blurPx={8}
        >
          <ScrollReveal
            as="h3"
            className="at-cases-title"
            variant="wipeX"
            durationMs={860}
            delayMs={80}
            yFrom={0}
          >
            {title}
          </ScrollReveal>
          {subtitle ? (
            <ScrollReveal
              as="p"
              className="at-cases-sub"
              variant="lift"
              durationMs={860}
              delayMs={170}
              yFrom={10}
              blurPx={2}
            >
              {subtitle}
            </ScrollReveal>
          ) : null}

          <div className="at-cases-grid">
            {items.map((item, idx) => {
              if (item.type === "stripe") {
                return (
                  <div
                    key={`stripe-${idx}`}
                    className={clsx(
                      "at-case-amo",
                      item.side === "left"
                        ? "at-case-amo--left"
                        : "at-case-amo--right",
                      item.white && "at-case-amo--white",
                      item.hiddenDesktop && "at-case-amo--hidden-desktop"
                    )}
                    aria-hidden={true}
                  >
                    <span className="at-case-amo__text">
                      {item.text || defaultStripeText}
                    </span>
                  </div>
                );
              }

              const layer = item.mobileDecorLayer || "under";
              const hasDecor = Boolean(item.mobileDecorUrl);

              return (
                <div
                  key={`card-${idx}`}
                  className={clsx("at-case", layer === "over" && "at-case--over")}
                >
                  {hasDecor && (
                    <div
                      className="at-case-decor"
                      aria-hidden={true}
                      style={{
                        backgroundImage: `url("${item.mobileDecorUrl}")`,
                      }}
                      data-layer={layer}
                    />
                  )}

                  <div className="at-case-card">
                    <h4 className="at-case-title">{item.title}</h4>
                    <p className="at-case-text">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CaseCard;
