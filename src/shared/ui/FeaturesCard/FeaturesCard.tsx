'use client';

import React from 'react';
import clsx from 'clsx';
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

import './FeaturesCard.css';

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
    <section id={id} className={clsx('at-more', className)}>
      <div className="at-container">
        <ScrollReveal as="h2" className="at-section-title" variant="wipeX" yFrom={0}>
          {title}
        </ScrollReveal>
        {subtitle ? (
          <ScrollReveal as="p" className="at-subtitle" variant="lift" delayMs={90}>
            {subtitle}
          </ScrollReveal>
        ) : null}

        <div className="at-more-grid">
          {items.map((item, i) => (
            <ScrollReveal
              key={i}
              as="article"
              className={clsx('at-more-card', item.className)}
              variant="dropZ"
              amount={0.22}
              delayMs={140 + i * 120}
            >
              <div className="at-more-ico" aria-hidden>
                <img src={item.iconUrl} alt={item.title || "Иконка функции"} />
              </div>
              <h3 className="at-more-title">{item.title}</h3>
              <p className="at-more-text">{item.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;
