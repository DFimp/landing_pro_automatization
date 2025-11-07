'use client';

import React from 'react';

type Step = {
  title: string;
  content: React.ReactNode;
};

export default function AccordionItem({ index, step }: { index: number; step: Step }) {
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