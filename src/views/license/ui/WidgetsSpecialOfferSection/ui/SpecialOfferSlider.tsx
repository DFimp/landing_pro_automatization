"use client";

import { useEffect, useRef, useState } from "react";
import { detectMobile } from "@/shared/utils/detectMobile";

type MonthsOption = 6 | 9 | 12 | 24;

interface SpecialOfferSliderProps {
  setValue: (v: MonthsOption) => void;
  value: MonthsOption;
}

export default function SpecialOfferSlider({ setValue, value }: SpecialOfferSliderProps) {
  const { isMobileView } = detectMobile();

  const availableValues = [6, 9, 12, 24] as const;
  const availableValuesLabels = ["6 месяцев", "9 месяцев", "12 месяцев", "24 месяца"] as const;

  const [currentValue, setCurrentValue] = useState<MonthsOption>(value);
  const [currentValueIndex, setValueIndex] = useState(() =>
    Math.max(0, availableValues.indexOf(value))
  );
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const STEP = 100 / (availableValues.length - 1);

  const getClosestValue = (percentage: number): MonthsOption => {
    const idx = Math.round(percentage / STEP);
    const safeIdx = Math.max(0, Math.min(idx, availableValues.length - 1));
    return availableValues[safeIdx];
  };

  const updateValue = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    let clickX = e.clientX - rect.left;

    clickX = Math.max(0, Math.min(clickX, rect.width));
    const percentage = (clickX / rect.width) * 100;

    const targetValue = getClosestValue(percentage);
    setCurrentValue(targetValue);
    setValueIndex(availableValues.indexOf(targetValue));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateValue(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) updateValue(e);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    setIsDragging(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) updateValue(e);
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
          className="absolute top-0 left-0 z-2 h-full rounded-full bg-[#3760E7] transition-all duration-150 ease-out"
          style={{ width: fillWidth }}
        />

        <div
          draggable="false"
          className="absolute top-1/2 z-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-3 border-[#3760E7] bg-[#3760E7] shadow-lg transition-all duration-150 ease-out hover:scale-105 active:cursor-grabbing sm:h-6 sm:w-6"
          style={{ left: knobLeft }}
        />

        {availableValues.map((val, index) => {
          const labelTransform =
            index === 0
              ? "translateX(0%)"
              : index === availableValues.length - 1
                ? "translateX(-100%)"
                : "translateX(-50%)";

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

              {isMobileView ? (
                currentValue === val && (
                  <div
                    className="absolute top-[38px] select-none text-nowrap text-[10px] text-[#3760E7] sm:top-[58px] sm:text-[12px]"
                    style={{ left: "50%", transform: labelTransform }}
                  >
                    {availableValuesLabels[index]}
                  </div>
                )
              ) : (
                <div
                  className="absolute top-[38px] select-none text-nowrap text-[10px] text-[#3760E7] sm:top-[58px] sm:text-[13px]"
                  style={{ left: "50%", transform: labelTransform }}
                >
                  {availableValuesLabels[index]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
