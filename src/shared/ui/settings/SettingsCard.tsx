import React from 'react';
import './SettingsCard.css';
import AccordionItem from './AccordionItem';

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