import clsx from "clsx";
import type { CSSProperties, ElementType, ReactNode } from "react";

type ScrollRevealVariant =
  | "lift"
  | "tilt"
  | "wipe"
  | "wipeX"
  | "typeFast"
  | "dropZ"
  | "bubble"
  | "bubbleSoft"
  | "prb"
  | "slideInLeft"
  | "slideInRight"
  | "slideInLeftPulse";

type ScrollRevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: ScrollRevealVariant;
  staggerChildren?: boolean;
  staggerMs?: number;
  once?: boolean;
  amount?: number;
  xFrom?: number;
  yFrom?: number;
  xTo?: number;
  yTo?: number;
  scaleFrom?: number;
  blurPx?: number;
  durationMs?: number;
  delayMs?: number;
};

export default function ScrollReveal<T extends ElementType = "div">({
  as,
  children,
  className,
  style,
  variant = "lift",
  staggerChildren = false,
  staggerMs,
  once = true,
  amount = 0.25,
  xFrom,
  yFrom,
  xTo,
  yTo,
  scaleFrom,
  blurPx,
  durationMs,
  delayMs,
}: ScrollRevealProps<T>) {
  const Component = (as ?? "div") as ElementType;

  const revealVars = (() => {
    const vars: Record<string, string> = {};
    if (typeof durationMs === "number") vars["--sr-duration"] = `${durationMs}ms`;
    if (typeof delayMs === "number") vars["--sr-delay"] = `${delayMs}ms`;
    if (typeof xFrom === "number") vars["--sr-x-from"] = `${xFrom}px`;
    if (typeof yFrom === "number") vars["--sr-y-from"] = `${yFrom}px`;
    if (typeof xTo === "number") vars["--sr-x-to"] = `${xTo}px`;
    if (typeof yTo === "number") vars["--sr-y-to"] = `${yTo}px`;
    if (typeof scaleFrom === "number") vars["--sr-scale-from"] = `${scaleFrom}`;
    if (typeof blurPx === "number") vars["--sr-blur"] = `${blurPx}px`;
    if (typeof staggerMs === "number") vars["--sr-stagger"] = `${staggerMs}ms`;
    return vars as unknown as CSSProperties;
  })();

  return (
    <Component
      className={clsx(
        staggerChildren ? "sr-stagger" : "sr-reveal",
        variant === "tilt" && "sr-tilt",
        variant === "wipe" && "sr-wipe",
        variant === "wipeX" && "sr-wipe-x",
        variant === "typeFast" && "sr-type-fast",
        variant === "dropZ" && "sr-drop-z",
        variant === "bubble" && "sr-bubble",
        variant === "bubbleSoft" && "sr-bubble-soft",
        variant === "prb" && "sr-prb",
        variant === "slideInLeft" && "sr-slide-in-left",
        variant === "slideInRight" && "sr-slide-in-right",
        variant === "slideInLeftPulse" && "sr-slide-in-left-pulse",
        className
      )}
      style={{ ...revealVars, ...style }}
      data-sr="true"
      data-sr-once={once ? "true" : "false"}
      data-sr-amount={`${amount}`}
      data-sr-revealed="false"
    >
      {children}
    </Component>
  );
}
