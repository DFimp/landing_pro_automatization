import clsx from "clsx";
import type { CSSProperties, ElementType, ReactNode } from "react";
import styles from "./ScrollReveal.module.scss";

type ScrollRevealVariant = "lift" | "tilt" | "wipe" | "wipeX" | "bubble";

type ScrollRevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: ScrollRevealVariant;
  staggerChildren?: boolean;
  staggerMs?: number;
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
        staggerChildren ? styles.stagger : styles.reveal,
        variant === "tilt" && styles.tilt,
        variant === "wipe" && styles.wipe,
        variant === "wipeX" && styles.wipeX,
        variant === "bubble" && styles.bubble,
        className
      )}
      style={{ ...revealVars, ...style }}
    >
      {children}
    </Component>
  );
}
