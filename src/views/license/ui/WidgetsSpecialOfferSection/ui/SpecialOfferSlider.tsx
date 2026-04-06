"use client";

import { useEffect, useRef, useState } from "react";

type MonthsOption = 6 | 9 | 12 | 24;

interface SpecialOfferSliderProps {
  setValue: (v: MonthsOption) => void;
  value: MonthsOption;
}

export default function SpecialOfferSlider({ setValue, value }: SpecialOfferSliderProps) {
  const availableValues = [6, 9, 12, 24] as const;

  const [currentValue, setCurrentValue] = useState<MonthsOption>(value);
  const [currentValueIndex, setValueIndex] = useState(() =>
    Math.max(0, availableValues.indexOf(value))
  );
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderRectRef = useRef<DOMRect | null>(null);
  const currentValueIndexRef = useRef(currentValueIndex);

  const STEP = 100 / (availableValues.length - 1);

  const getClosestValue = (percentage: number): MonthsOption => {
    const idx = Math.round(percentage / STEP);
    const safeIdx = Math.max(0, Math.min(idx, availableValues.length - 1));
    return availableValues[safeIdx];
  };

  const updateValueByClientX = (clientX: number) => {
    const rect = sliderRectRef.current ?? sliderRef.current?.getBoundingClientRect();
    if (!rect) return;
    sliderRectRef.current = rect;

    let clickX = clientX - rect.left;

    clickX = Math.max(0, Math.min(clickX, rect.width));
    const percentage = (clickX / rect.width) * 100;

    const targetValue = getClosestValue(percentage);
    const nextIndex = availableValues.indexOf(targetValue);
    if (nextIndex === currentValueIndexRef.current) return;

    setCurrentValue(targetValue);
    setValueIndex(nextIndex);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    sliderRectRef.current = sliderRef.current?.getBoundingClientRect() ?? null;
    setIsDragging(true);
    updateValueByClientX(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) updateValueByClientX(e.clientX);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    sliderRectRef.current = null;
    setIsDragging(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      sliderRectRef.current = sliderRef.current?.getBoundingClientRect() ?? null;
      updateValueByClientX(e.clientX);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    setValue(currentValue);
  }, [currentValue, setValue]);

  useEffect(() => {
    setCurrentValue(value);
    setValueIndex(Math.max(0, availableValues.indexOf(value)));
  }, [value]);

  useEffect(() => {
    currentValueIndexRef.current = currentValueIndex;
  }, [currentValueIndex]);

  useEffect(() => {
    const el = document.getElementById("slider");
    el?.addEventListener("mouseleave", handleMouseUp);
    return () => el?.removeEventListener("mouseleave", handleMouseUp);
  }, []);

  const fillWidth = `${STEP * currentValueIndex}%`;
  const knobLeft = `${STEP * currentValueIndex}%`;

  return (
    <div id="slider" draggable="false" className="h-[12px] w-full sm:h-[16px]">
      <div
        ref={sliderRef}
        className="relative h-[5px] cursor-pointer rounded-full bg-[#AFC1FF]"
        onMouseDown={handleMouseDown}
        onClick={handleClick}
      >
        <div
          className="absolute top-0 left-0 z-2 h-full rounded-full bg-[#3760E7] transition-[width,background-color] duration-150 ease-out"
          style={{ width: fillWidth }}
        />

        <div
          draggable="false"
          className="absolute top-1/2 z-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-3 border-[#3760E7] bg-[#3760E7] shadow-lg transition-[left,transform,background-color] duration-150 ease-out hover:scale-105 active:cursor-grabbing sm:h-6 sm:w-6"
          style={{ left: knobLeft }}
        />

        {availableValues.map((val, index) => {
          return (
            <div
              key={val}
              draggable="false"
              className="absolute top-1/2 flex flex-col items-center"
              style={{
                left: `${STEP * index}%`,
                transform: "translateX(-50%) translateY(-50%)",
              }}
            >
              <div
                className={`h-[18px] w-[3px] select-none transition-colors duration-150 ${
                  currentValueIndex >= index ? "bg-[#3760E7]" : "bg-[#AFC1FF]"
                }`}
              />

              <div
                className="absolute top-[6px] mt-[12px] mb-[2px] select-none text-[12px] leading-[1] sm:top-[8px] sm:mt-[20px] sm:text-[16px]"
                style={{ left: "50%", transform: "translateX(-50%)" }}
              >
                {val}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
