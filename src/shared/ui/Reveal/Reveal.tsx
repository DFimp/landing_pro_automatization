"use client";

import type { ElementType, ReactNode } from "react";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

type RevealProps = {
  children: ReactNode;
  className?: string; // legacy: kept for compatibility
  shownClassName?: string; // legacy: kept for compatibility
  delayMs?: number;
  once?: boolean;
  amount?: number;
  variant?: Parameters<typeof ScrollReveal>[0]["variant"];
  as?: ElementType;
};

export default function Reveal({
  children,
  className = "",
  shownClassName = "",
  delayMs = 0,
  once = true,
  amount,
  variant = "typeFast",
  as,
}: RevealProps) {
  return (
    <ScrollReveal
      as={(as ?? "div") as ElementType}
      variant={variant}
      delayMs={delayMs}
      once={once}
      amount={amount}
      className={[className, shownClassName].filter(Boolean).join(" ")}
    >
      {children}
    </ScrollReveal>
  );
}
