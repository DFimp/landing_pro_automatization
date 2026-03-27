"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
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

export default function WorkStepsCarousel({ steps }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartTranslateRef = useRef(0);
  const dragMovedRef = useRef(false);

  const [xStops, setXStops] = useState<number[]>(() => steps.map(() => 0));
  const [dragTranslate, setDragTranslate] = useState<number | null>(null);
  const [settledTranslate, setSettledTranslate] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;

      const items = Array.from(track.children) as HTMLElement[];
      if (items.length === 0) return;

      const maxTranslate = Math.max(0, track.scrollWidth - viewport.clientWidth);
      const baseLeft = items[0].offsetLeft;

      const nextStops = items.map((el) => {
        const desired = -(el.offsetLeft - baseLeft);
        return clamp(desired, -maxTranslate, 0);
      });

      setXStops(nextStops);
      const minStop = Math.min(...nextStops);
      setSettledTranslate((prev) => clamp(prev, minStop, 0));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxIndex = useMemo(() => {
    if (xStops.length === 0) return 0;
    const minStop = Math.min(...xStops);
    return Math.max(0, xStops.findIndex((stop) => stop === minStop));
  }, [xStops]);

  const currentTranslate = useMemo(() => {
    if (dragTranslate !== null) return dragTranslate;
    return settledTranslate;
  }, [dragTranslate, settledTranslate]);

  const minTranslate = xStops[maxIndex] ?? 0;
  const canGoPrev = currentTranslate < -1;
  const canGoNext = currentTranslate > minTranslate + 1;

  const transform = useMemo(() => {
    return `translate3d(${currentTranslate}px, 0, 0)`;
  }, [currentTranslate]);

  const findNearestIndex = (translate: number) => {
    if (xStops.length === 0) return 0;

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    for (let i = 0; i <= maxIndex; i += 1) {
      const distance = Math.abs((xStops[i] ?? 0) - translate);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = i;
      }
    }

    return nearestIndex;
  };

  const finishDrag = (shouldSnap: boolean) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    if (!shouldSnap) {
      setDragTranslate(null);
      return;
    }

    const translateAtRelease = dragTranslate ?? currentTranslate;
    const clampedTranslate = clamp(translateAtRelease, minTranslate, 0);
    setDragTranslate(null);
    setSettledTranslate(clampedTranslate);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (xStops.length === 0) return;

    isDraggingRef.current = true;
    dragMovedRef.current = false;
    dragStartXRef.current = event.clientX;
    dragStartTranslateRef.current = currentTranslate;

    setDragTranslate(null);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const delta = event.clientX - dragStartXRef.current;
    if (!dragMovedRef.current && Math.abs(delta) > 5) {
      dragMovedRef.current = true;
      setDragTranslate(dragStartTranslateRef.current);
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    if (!dragMovedRef.current) return;

    const nextTranslate = clamp(dragStartTranslateRef.current + delta, minTranslate, 0);
    setDragTranslate(nextTranslate);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const wasDragged = dragMovedRef.current;
    finishDrag(wasDragged);

    if (wasDragged && event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    dragMovedRef.current = false;
  };

  const handlePointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const wasDragged = dragMovedRef.current;
    finishDrag(wasDragged);

    if (wasDragged && event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    dragMovedRef.current = false;
  };

  const handleTrackClickCapture = (event: React.MouseEvent<HTMLUListElement>) => {
    if (!dragMovedRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    dragMovedRef.current = false;
  };

  return (
    <>
      <div className="relative">
        <TitleArrow text="Как мы работаем?" variant="outline" />

        <div className="hidden sm:flex absolute right-0 top-0 gap-3 z-10">
          <button
            type="button"
            aria-label="Previous step"
            onClick={() => {
              const fromIndex = findNearestIndex(currentTranslate);
              const nextIndex = clamp(fromIndex - 1, 0, maxIndex);
              setSettledTranslate(xStops[nextIndex] ?? 0);
            }}
            disabled={!canGoPrev}
            className="h-12 w-12 rounded-xl border border-blue/40 bg-white text-blue text-[28px] font-light leading-none pb-[3px] shadow-[0_8px_20px_rgba(55,96,231,0.14)] transition-all duration-200 hover:-translate-y-[1px] hover:border-blue hover:bg-[#f4f7ff] hover:shadow-[0_10px_22px_rgba(55,96,231,0.2)] active:translate-y-0 active:scale-[0.98] disabled:opacity-45 disabled:border-gray disabled:text-gray disabled:bg-white disabled:shadow-none"
          >
            {"<"}
          </button>
          <button
            type="button"
            aria-label="Next step"
            onClick={() => {
              const fromIndex = findNearestIndex(currentTranslate);
              const nextIndex = clamp(fromIndex + 1, 0, maxIndex);
              setSettledTranslate(xStops[nextIndex] ?? 0);
            }}
            disabled={!canGoNext}
            className="h-12 w-12 rounded-xl border border-blue bg-blue text-white text-[28px] font-light leading-none pb-[3px] shadow-[0_10px_24px_rgba(55,96,231,0.32)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#2d54d0] hover:shadow-[0_12px_28px_rgba(55,96,231,0.4)] active:translate-y-0 active:scale-[0.98] disabled:opacity-45 disabled:border-gray disabled:text-gray disabled:bg-white disabled:shadow-none"
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="hidden sm:block mt-20 animate-[stepsAppear_900ms_cubic-bezier(0.16,1,0.3,1)_both]">
        <div
          ref={viewportRef}
          className={isDraggingRef.current ? "overflow-visible select-none" : "overflow-visible"}
          style={{ touchAction: "pan-y" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          <ul
            ref={trackRef}
            style={{ transform }}
            onClickCapture={handleTrackClickCapture}
            className={
              isDraggingRef.current
                ? "flex gap-4 will-change-transform cursor-grabbing"
                : "flex gap-4 transition-transform duration-500 ease-in-out will-change-transform cursor-grab"
            }
          >
            {steps.map((step, index) => (
              <Card
                variant="expandable"
                key={index}
                index={index}
                content={step.content}
                description={step.description}
                result={step.result}
                isActive
                className="sm:!ml-0 sm:!mr-0"
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="sm:hidden mt-10 animate-[stepsAppearMobile_760ms_cubic-bezier(0.16,1,0.3,1)_both]">
        <ul className="flex flex-col gap-4 select-none">
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
            />
          ))}
        </ul>
      </div>

      <style jsx>{`
        @keyframes stepsAppear {
          from {
            opacity: 0;
            transform: translate3d(0, 42px, 0) scale(0.94);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes stepsAppearMobile {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0) scale(0.95);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </>
  );
}
