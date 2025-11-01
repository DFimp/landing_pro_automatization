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
        <section id={id} className={clsx('feat-section', className)}>
            <div className="at-container">
                <h2 className="feat-title at-section-title">{title}</h2>
                {subtitle && <p className="feat-subtitle">{subtitle}</p>}

                <div className="feat-grid">
                    {items.map((item, i) => (
                        <article key={i} className={clsx('feat-card', item.className)}>
                            <div className="feat-ico" aria-hidden>
                                <img src={item.iconUrl} alt="" />
                            </div>
                            <h3 className="feat-card-title">{item.title}</h3>
                            <p className="feat-card-text">{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesCard;
