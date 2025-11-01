'use client';

import React from 'react';
import './SettingsCard.css';

type Step = {
  title: string;
  content: React.ReactNode;
};

type SettingsCardProps = {
  id?: string;
  title: string;
  subtitle?: string;
  steps: Step[];
  showVideo?: boolean;
  videoId?: string;
  className?: string;
};

export default function SettingsCard({
  id,
  title,
  subtitle,
  steps,
  showVideo = true,
  videoId,
  className = '',
}: SettingsCardProps) {
  return (
    <section id={id} className={`sc ${className}`}>
      <div className="sc__inner sc-container">
        <h3 className="sc__title">{title}</h3>

        {showVideo && videoId && (
          <iframe
            src={`https://rutube.ru/play/embed/${videoId}`}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
            loading="lazy"
            allowFullScreen
            className='sc__video'
          />
        )}

        {subtitle ? <div className="sc__subtitle">{subtitle}</div> : null}

        <div className="sc__acc-list">
          {steps.map((step, i) => (
            <AccordionItem key={i} index={i + 1} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ index, step }: { index: number; step: Step }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={`sc__acc-item ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="sc__acc-btn"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span className="sc__num">{index}</span>
        <span className="sc__acc-title">{step.title}</span>
        <span className="sc__plus" aria-hidden />
      </button>

      <div className="sc__acc-content">{step.content}</div>
    </div>
  );
}
