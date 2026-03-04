"use client";

import { useState } from "react";
import styles from "./BonusesListDesktopInteractive.module.css";
import { BonusesListItem } from "./BonusesListItem";
import BonusesCanvas from "./BonusesCanvas.client";

const items = [
  {
    pos: "sm:absolute left-0 top-[58px]",
    text: "Все наши виджеты бесплатно",
  },
  {
    pos: "sm:absolute right-0 top-[100px]",
    text: "Дополнительные месяцы использования",
  },
  {
    pos: "sm:absolute left-0 bottom-[98px]",
    text: "Диагностика по проверенному чек-листу",
  },
  {
    pos: "sm:absolute right-0 bottom-0",
    text:
      "Персональный менеджер, поддержка и диагностика проблем<br/>в выделенном чате",
  },
] as const;

export default function BonusesListDesktopInteractive() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="hidden sm:block w-full h-full">
      <canvas className="w-full h-full absolute left-0 top-0" />

      {items.map((item, i) => (
        i === 0 ? (
          <a
            key={i}
            href="#license-bonus-amo"
            className={[
              "bonus",
              item.pos,
              styles.jellyHover,
              "will-change-transform",
              "transition-transform duration-200",
              activeIndex === i ? "scale-[1.03]" : "",
            ].join(" ")}
            tabIndex={0}
            role="button"
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(i)}
            onBlur={() => setActiveIndex(null)}
          >
            <BonusesListItem className="text-center" text={item.text} />
          </a>
        ) : i === 1 ? (
          <a
            key={i}
            href="#special_offer_block"
            className={[
              "bonus",
              item.pos,
              styles.jellyHover,
              "will-change-transform",
              "transition-transform duration-200",
              activeIndex === i ? "scale-[1.03]" : "",
            ].join(" ")}
            tabIndex={0}
            role="button"
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(i)}
            onBlur={() => setActiveIndex(null)}
          >
            <BonusesListItem className="text-center" text={item.text} />
          </a>
        ) : i === 2 || i === 3 ? (
          <a
            key={i}
            href="https://t.me/proavtomatization_support_bot"
            target="_blank"
            rel="noreferrer"
            className={[
              "bonus",
              item.pos,
              styles.jellyHover,
              "will-change-transform",
              "transition-transform duration-200",
              activeIndex === i ? "scale-[1.03]" : "",
            ].join(" ")}
            tabIndex={0}
            role="button"
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(i)}
            onBlur={() => setActiveIndex(null)}
          >
            <BonusesListItem className="text-center" text={item.text} />
          </a>
        ) : (
          <div
            key={i}
            className={[
              "bonus",
              item.pos,
              styles.jellyHover,
              "will-change-transform",
              "transition-transform duration-200",
              activeIndex === i ? "scale-[1.03]" : "",
            ].join(" ")}
            tabIndex={0}
            role="button"
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(i)}
            onBlur={() => setActiveIndex(null)}
          >
            <BonusesListItem className="text-center" text={item.text} />
          </div>
        )
      ))}

      <BonusesCanvas activeIndex={activeIndex} />
    </div>
  );
}

