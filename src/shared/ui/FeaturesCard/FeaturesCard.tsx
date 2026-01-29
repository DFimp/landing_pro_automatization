'use client';

import React from 'react';
import clsx from 'clsx';

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
        <h2 className="at-section-title">{title}</h2>
        {subtitle && <p className="at-subtitle">{subtitle}</p>}

        <div className="at-more-grid">
          {items.map((item, i) => (
            <article key={i} className={clsx('at-more-card', item.className)}>
              <div className="at-more-ico" aria-hidden>
                <img src={item.iconUrl} alt={item.title || "Иконка функции"} />
              </div>
              <h3 className="at-more-title">{item.title}</h3>
              <p className="at-more-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;
