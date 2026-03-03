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
    <section
      className={clsx(
        "relative bg-white py-10 pb-7 overflow-hidden min-[1200px]:overflow-visible",
        className
      )}
      id={id}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4">
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
            className="text-[clamp(26px,4vw,64px)] font-semibold text-[#3667ff] mb-2"
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
              className="text-[#5a6180] leading-[1.6] mb-5"
              variant="lift"
              durationMs={860}
              delayMs={170}
              yFrom={10}
              blurPx={2}
            >
              {subtitle}
            </ScrollReveal>
          ) : null}

          <div className="relative z-[1] grid grid-cols-1 gap-[24px] justify-items-stretch items-stretch min-[900px]:grid-cols-[repeat(2,minmax(410px,1fr))] min-[900px]:justify-center min-[1200px]:grid-cols-[repeat(4,minmax(410px,1fr))] min-[1200px]:w-[calc(100%+365px)] min-[1200px]:translate-x-[-348px] min-[1200px]:[&>*:nth-child(n+5)]:translate-x-[150px] max-[640px]:gap-[28px]">
            {items.map((item, idx) => {
              if (item.type === "stripe") {
                return (
                  <div
                    key={`stripe-${idx}`}
                    className={clsx(
                      "relative overflow-hidden rounded-[22px] bg-[#4a63ff] shadow-[0_10px_26px_rgba(15,20,39,0.06),inset_0_0_0_1px_#5f78ff] min-h-[200px] hidden min-[900px]:block min-[900px]:w-[min(2000px,calc(100vw+360px))] min-[900px]:min-h-[230px]",
                      item.side === "left" ? "min-[900px]:justify-self-end" : "min-[900px]:justify-self-start",
                      item.white && "bg-white",
                      item.hiddenDesktop && "min-[900px]:hidden"
                    )}
                    aria-hidden={true}
                  >
                    <span
                      className={clsx(
                        "absolute font-extrabold leading-none tracking-[.06em] text-[clamp(140px,18vw,320px)] whitespace-nowrap select-none pointer-events-none top-1/2 left-[80px] -translate-y-1/2 min-[900px]:text-[200px]",
                        item.white ? "text-[#4a63ff]" : "text-white"
                      )}
                    >
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
                  className={clsx("max-[640px]:relative")}
                >
                  {hasDecor && (
                    <div
                      className={clsx(
                        "max-[640px]:absolute max-[640px]:left-1/2 max-[640px]:-translate-x-1/2 max-[640px]:bottom-[-50px] max-[640px]:w-[100vw] max-[640px]:h-[100px] max-[640px]:bg-no-repeat max-[640px]:bg-center max-[640px]:bg-cover max-[640px]:pointer-events-none",
                        layer === "over" ? "max-[640px]:z-[20]" : "max-[640px]:z-0"
                      )}
                      aria-hidden={true}
                      style={{
                        backgroundImage: `url("${item.mobileDecorUrl}")`,
                      }}
                      data-layer={layer}
                    />
                  )}

                  <div className={clsx("bg-white border border-[#5f78ff] rounded-[22px] p-[35px] shadow-[0_8px_24px_rgba(15,20,39,0.06)] min-h-[230px] w-[410px] max-w-full h-full max-[640px]:min-h-[200px] max-[640px]:w-full max-[640px]:h-[230px] max-[640px]:rounded-[18px] max-[640px]:p-5 max-[640px]:relative max-[640px]:z-10")}>
                    <h4 className="font-bold text-[#0f1427] text-[18px] leading-[1.35] mb-[30px] max-[640px]:mb-[10px]">
                      {item.title}
                    </h4>
                    <p className="text-[#3c4460] text-[16px] leading-[1.6]">
                      {item.text}
                    </p>
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
