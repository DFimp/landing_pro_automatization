"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { animate, useMotionValue, useMotionValueEvent, useScroll } from "motion/react";
import * as motion from "motion/react-client";
import { Card } from "@/shared/ui/Card/Card";

type Step = {
  content: React.ReactNode;
  description?: string[];
  result?: string;
};

type Props = {
  steps: Step[];
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function WorkStepsScrollStory({ steps }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  const [xStops, setXStops] = useState<number[]>(() => steps.map(() => 0));
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  const sectionHeightVh = useMemo(() => {
    return clamp(steps.length * 12 + 80, 190, 320);
  }, [steps.length]);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 0.22", "end 0.22"],
  });

  const x = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const n = Math.max(1, steps.length);

    const leadIn = 0.28;
    const leadOut = 0.12;
    const middleSpan = Math.max(0.01, 1 - leadIn - leadOut);
    const p = clamp((v - leadIn) / middleSpan, 0, 1);

    const switchBias = 0.25;
    const idx =
      v < leadIn
        ? 0
        : v > 1 - leadOut
          ? n - 1
          : clamp(Math.floor(p * n - switchBias), 0, n - 1);
    if (idx !== activeIndexRef.current) {
      activeIndexRef.current = idx;
      setActiveIndex(idx);
    }
  });

  useEffect(() => {
    const target = xStops[activeIndex] ?? 0;
    const controls = animate(x, target, {
      type: "spring",
      stiffness: 240,
      damping: 34,
      mass: 0.8,
    });
    return () => controls.stop();
  }, [activeIndex, x, xStops]);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;

      const children = Array.from(track.children) as HTMLElement[];
      const liItems = children.filter((el) => el.tagName === "LI") as HTMLLIElement[];
      const n = Math.max(1, steps.length);
      const items = liItems.slice(0, n);

      if (items.length === 0) return;

      const baseLeft = items[0].offsetLeft;
      const maxTranslate = Math.max(0, track.scrollWidth - viewport.clientWidth);

      const stops = items.map((el) => {
        const desired = -(el.offsetLeft - baseLeft);
        return clamp(desired, -maxTranslate, 0);
      });

      while (stops.length < n) stops.push(stops[stops.length - 1] ?? 0);

      setXStops(stops);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [steps.length]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ height: `${sectionHeightVh}vh` }}
    >
      <div className="sticky top-[clamp(70px,10vh,140px)]">
        <div ref={viewportRef} className="overflow-hidden">
          <motion.ul
            ref={trackRef}
            style={{ x }}
            className="flex gap-4 will-change-transform"
          >
            {steps.map((step, index) => (
              <Card
                variant="expandable"
                key={index}
                index={index}
                content={step.content}
                description={step.description}
                result={step.result}
                isFirst={index === 0}
                isLast={index === steps.length - 1}
                isActive={index === activeIndex}
              />
            ))}
            <div className="shrink-0 min-w-[175px]" />
          </motion.ul>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 select-none">
          {Array.from({ length: Math.max(1, steps.length) }).map((_, i) => (
            <div
              key={i}
              className={[
                "h-2 rounded-full transition-all duration-300",
                i === activeIndex ? "w-7 bg-blue" : "w-2 bg-light-blue",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
