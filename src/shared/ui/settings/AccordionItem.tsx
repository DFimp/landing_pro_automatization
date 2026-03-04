'use client';

import React from 'react';
import clsx from 'clsx';
import styles from "./AccordionItem.module.css";

type Step = {
  title: string;
  content: React.ReactNode;
};

export default function AccordionItem({ index, step }: { index: number; step: Step }) {
  const [open, setOpen] = React.useState(false);

  const itemClass = clsx(
    "max-w-full mb-[30px] rounded-[20px] border border-white/45 bg-white/[0.04] transition-[border-color,box-shadow,background] duration-[250ms]",
    open
      ? "border-white shadow-[0_20px_60px_rgba(79,92,255,0.25),inset_0_0_0_1px_rgba(255,255,255,0.15)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]"
      : styles.borderPulse
  );

  const buttonClass =
    "w-full flex items-center px-[18px] py-[16px] text-left text-[#e8ecff] min-w-0 cursor-pointer max-[640px]:px-4 max-[640px]:py-[14px]";

  const numClass = clsx(
    "grid place-items-center w-[28px] h-[28px] rounded-full text-[#e8ecff] font-extrabold text-[14px] transition-all duration-[250ms] ease-in-out shrink-0 mr-[14px] max-[640px]:mr-[12px]",
    open
      ? "bg-[#3a63ff] shadow-[0_8px_18px_rgba(58,99,255,0.45)] text-white"
      : ""
  );

  const titleClass =
    "text-[14px] text-white min-w-0 break-words flex-1 pr-[14px] max-[640px]:pr-[12px]";

  const plusClass = clsx(
    "relative w-[22px] h-[22px] grid place-items-center transition-transform duration-[200ms] shrink-0 ml-auto",
    open ? "rotate-45" : ""
  );
  const plusLineClass = "absolute bg-white rounded-[1px]";
  const plusLineHClass = `${plusLineClass} w-[16px] h-[2px]`;
  const plusLineVClass = `${plusLineClass} w-[2px] h-[16px]`;

  const contentClass = clsx(
    "text-[#e7ecff] text-[14px] leading-[1.65] break-words px-[18px] pb-[18px] pl-[60px]",
    "max-[640px]:px-[14px] max-[640px]:pb-[14px] max-[640px]:pl-[44px] max-[640px]:[&_a]:break-words max-[640px]:[&_a]:hyphens-auto",
    open ? "block" : "hidden",
    "[&_.sc-list]:grid [&_.sc-list]:gap-[6px] [&_.sc-list]:mt-[10px]",
    "[&_.sc-list>li]:list-none [&_.sc-list>li]:relative [&_.sc-list>li]:pl-[14px]",
    "[&_.sc-list>li:before]:content-['\\2022'] [&_.sc-list>li:before]:absolute [&_.sc-list>li:before]:left-0 [&_.sc-list>li:before]:top-0 [&_.sc-list>li:before]:text-[#9eb2ff]",
    "[&_.sc-note]:bg-white/[0.06] [&_.sc-note]:border [&_.sc-note]:border-white/[0.22] [&_.sc-note]:rounded-[12px] [&_.sc-note]:p-3 [&_.sc-note]:mt-3 [&_.sc-note]:text-white",
    "[&_.sc-note-title]:mb-[6px] [&_.sc-note-title]:text-white",
    "[&_.sc-note--blue]:bg-[rgba(58,99,255,0.08)] [&_.sc-note--blue]:border-white",
    "[&_.sc-note--green]:bg-[rgba(0,255,153,0.06)] [&_.sc-note--green]:border-white",
    "[&_.sc-note--red]:bg-[rgba(255,0,72,0.06)] [&_.sc-note--red]:border-white",
    "[&_.sc-note--yellow]:bg-[rgba(255,214,0,0.08)] [&_.sc-note--yellow]:border-white",
    "[&_.sc-note--purple]:bg-[rgba(122,89,255,0.1)] [&_.sc-note--purple]:border-white"
  );

  return (
    <div className={itemClass}>
      <button
        type="button"
        className={buttonClass}
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span className={numClass}>{index}</span>
        <span className={titleClass}>{step.title}</span>
        <span className={plusClass} aria-hidden>
          <span className={plusLineHClass} />
          <span className={plusLineVClass} />
        </span>
      </button>

      <div className={contentClass}>{step.content}</div>
    </div>
  );
}
