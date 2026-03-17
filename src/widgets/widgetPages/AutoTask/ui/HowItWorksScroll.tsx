"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function HowItWorksScroll() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartTranslateRef = useRef(0);
  const dragMovedRef = useRef(false);

  const [xStops, setXStops] = useState<number[]>([]);
  const [dragTranslate, setDragTranslate] = useState<number | null>(null);
  const [settledTranslate, setSettledTranslate] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const steps = [
    {
      n: "1",
      title: "Настройка отслеживания",
      text: "Вы выбираете воронки и статусы, которые нужно контролировать. Например: «Переговоры», «Принятие решения».",
    },
    {
      n: "2",
      title: "Автоматический мониторинг",
      text: "Каждые 5 минут виджет проверяет все сделки на выбранных этапах и ищет те, в которых давно не было активности.",
    },
    {
      n: "3",
      title: "Создание задач",
      text: "Для «спящих» сделок автоматически создаётся задача с настроенным текстом и назначается ответственному менеджеру.",
    },
    {
      n: "4",
      title: "Менеджер получает уведомление",
      text: "Ответственный видит задачу в amoCRM и связывается с клиентом. Сделка возвращается в работу.",
    },
  ];

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

  const currentTranslate = dragTranslate ?? settledTranslate;
  const minTranslate = xStops[maxIndex] ?? 0;
  const canGoPrev = currentTranslate < -1;
  const canGoNext = currentTranslate > minTranslate + 1;
  const transform = `translate3d(${currentTranslate}px, 0, 0)`;

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

  const finishDrag = (shouldSnap: boolean, translateAtRelease: number) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    if (!shouldSnap) {
      setDragTranslate(null);
      return;
    }

    const clampedTranslate = clamp(translateAtRelease, minTranslate, 0);
    const snapIndex = findNearestIndex(clampedTranslate);
    setDragTranslate(null);
    setSettledTranslate(xStops[snapIndex] ?? clampedTranslate);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (xStops.length === 0) return;

    isDraggingRef.current = true;
    setIsDragging(true);
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
    const releaseTranslate = dragTranslate ?? currentTranslate;
    finishDrag(wasDragged, releaseTranslate);

    if (wasDragged && event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    dragMovedRef.current = false;
  };

  const handlePointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const wasDragged = dragMovedRef.current;
    const releaseTranslate = dragTranslate ?? currentTranslate;
    finishDrag(wasDragged, releaseTranslate);

    if (wasDragged && event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    dragMovedRef.current = false;
  };

  const handleTrackClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!dragMovedRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    dragMovedRef.current = false;
  };

  return (
    <section className="py-[28px] pb-2 bg-white mb-[30px] max-[640px]:py-5">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <h2 className="text-[clamp(24px,3.6vw,40px)] font-extrabold text-[#0f1427] mb-2">Как это работает</h2>
        <p className="text-[#3c4460] leading-[1.6] mb-[18px]">
          Простой алгоритм, который работает без вашего участия
        </p>

        <div className="mb-4 hidden min-[641px]:flex justify-end gap-3">
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

        <div className="hidden min-[641px]:block">
          <div
            ref={viewportRef}
            className={isDragging ? "overflow-visible select-none" : "overflow-visible"}
            style={{ touchAction: "pan-y" }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
          >
            <div
              ref={trackRef}
              style={{ transform }}
              onClickCapture={handleTrackClickCapture}
              className={
                isDragging
                  ? "flex gap-5 will-change-transform cursor-grabbing"
                  : "flex gap-5 transition-transform duration-500 ease-in-out will-change-transform cursor-grab"
              }
            >
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="shrink-0 w-[510px] min-w-[510px] grid grid-cols-[96px_1fr] items-stretch bg-white border border-[#5f78ff] rounded-[20px] overflow-hidden min-h-[230px] min-[1200px]:grid-cols-[112px_1fr]"
                >
                  <div className="grid place-items-center w-[96px] bg-[#3d5df6] text-white font-normal text-[56px] leading-none min-[1200px]:text-[128px] min-[1200px]:w-[103px] min-[1200px]:text-center">
                    {s.n}
                  </div>
                  <div className="py-10 px-5">
                    <h3 className="text-[18px] font-bold text-[#0f1427] mb-[10px]">{s.title}</h3>
                    <p className="text-[#3c4460] text-[15px] leading-[1.6]">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="min-[641px]:hidden flex flex-col gap-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="w-full grid grid-cols-[72px_1fr] items-stretch bg-white border-[1.5px] border-[#5f78ff] rounded-[16px] overflow-hidden shadow-[0_6px_16px_rgba(15,20,39,0.06)]"
            >
              <div className="grid place-items-center w-[72px] bg-[#3d5df6] text-white font-extrabold text-[44px] leading-none py-[12px]">
                {s.n}
              </div>
              <div className="pt-[14px] px-[14px] pb-[16px]">
                <h3 className="text-[16px] font-bold text-[#0f1427] mb-[6px]">{s.title}</h3>
                <p className="text-[#3c4460] text-[13.5px] leading-[1.5]">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
