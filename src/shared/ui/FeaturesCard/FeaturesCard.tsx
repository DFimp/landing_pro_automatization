'use client';

import React from 'react';
import clsx from 'clsx';
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

export type FeatureItem = {
  iconUrl: string;
  title: string;
  text: React.ReactNode;
  className?: string;
};

export interface FeaturesCardProps {
  id?: string;
  className?: string;
  title: string;
  subtitle?: string;
  items: FeatureItem[];
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({
  id,
  className,
  title,
  subtitle,
  items,
}) => {
  return (
    <section id={id} className={clsx('at-more bg-white pt-6 pb-14', className)}>
      <div className="at-container mx-auto w-full max-w-[1200px] px-4">
        <ScrollReveal
          as="h2"
          className="at-section-title text-[clamp(22px,3.2vw,32px)] font-bold text-[#0f1427] mb-2"
          variant="wipeX"
          yFrom={0}
        >
          {title}
        </ScrollReveal>
        {subtitle ? (
          <ScrollReveal
            as="p"
            className="at-subtitle text-[#5a6180] text-[16px] leading-[1.6] mb-[30px]"
            variant="lift"
            delayMs={90}
          >
            {subtitle}
          </ScrollReveal>
        ) : null}

        <div className="at-more-grid grid grid-cols-1 gap-[20px] min-[900px]:grid-cols-3 min-[900px]:gap-6">
          {items.map((item, i) => (
            <ScrollReveal
              key={i}
              as="article"
              className={clsx('at-more-card bg-white border border-[#5f78ff] rounded-[60px] p-10 shadow-[0_6px_18px_rgba(15,20,39,0.05)] h-[280px] max-[640px]:rounded-[22px]', item.className)}
              variant="dropZ"
              amount={0.22}
              delayMs={140 + i * 120}
            >
              <div className="at-more-ico w-10 h-10 grid place-items-center mb-2.5" aria-hidden>
                <img src={item.iconUrl} alt={item.title || "Иконка функции"} />
              </div>
              <h3 className="at-more-title text-[16px] font-bold text-[#0f1427] mb-2">{item.title}</h3>
              <p className="at-more-text text-[#3c4460] text-[14px] leading-[1.6]">{item.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;
