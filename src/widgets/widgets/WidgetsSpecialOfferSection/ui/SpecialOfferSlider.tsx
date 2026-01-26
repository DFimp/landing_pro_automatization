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
  const availableValuesLabels = ["+ 1 месяц", "+ 2 месяца", "+ 3 месяца", "+ 7 месяцев"] as const;

  const [currentValue, setCurrentValue] = useState<MonthsOption>(value);
  const [currentValueIndex, setValueIndex] = useState(() =>
    Math.max(0, availableValues.indexOf(value))
  );
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  // 0%, 33.33%, 66.66%, 100%
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
  const knobLeft = `calc(${STEP * currentValueIndex}% - ${isMobileView ? "4px" : "10px"})`;

  return (
    <div id="slider" draggable="false" className="mb-8 h-[20px] w-full">
      <div
        ref={sliderRef}
        className="relative h-[5px] bg-[#AFC1FF] rounded-full cursor-pointer"
        onMouseDown={handleMouseDown}
        onClick={handleClick}
      >
        {/* fill */}
        <div
          className="z-2 absolute top-0 left-0 h-full bg-[#3760E7] rounded-full transition-all duration-150 ease-out"
          style={{ width: fillWidth }}
        />

        {/* knob */}
        <div
          draggable="false"
          className="z-3 absolute top-1/2 -translate-y-1/2 sm:w-6 sm:h-6 w-3 h-3 bg-[#3760E7] border-3 border-[#3760E7] rounded-full shadow-lg cursor-grab active:cursor-grabbing transition-all duration-150 ease-out hover:scale-105"
          style={{ left: knobLeft }}
        />

        {availableValues.map((val, index) => {
          // чтобы крайние подписи не обрезались
          const edgeTransform =
            index === 0
              ? "translateX(0%) translateY(-50%)"
              : index === availableValues.length - 1
              ? "translateX(-100%) translateY(-50%)"
              : "translateX(-50%) translateY(-50%)";

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
                transform: edgeTransform,
              }}
            >
              {/* tick */}
              <div
                className={`select-none w-[3px] h-[18px] transition-colors duration-150 ${
                  currentValueIndex >= index ? "bg-[#3760E7]" : "bg-[#AFC1FF]"
                }`}
              />

              {/* number */}
              <div
                className="select-none mt-[13px] mb-[8px] leading-[1] absolute top-[8px]"
                style={{ left: "50%", transform: "translateX(-50%)" }}
              >
                {val}
              </div>

              {/* label */}
              {isMobileView ? (
                currentValue === val && (
                  <div
                    className="select-none absolute text-[#3760E7] text-[12px] text-nowrap top-[56px]"
                    style={{ left: "50%", transform: labelTransform }}
                  >
                    {availableValuesLabels[index]}
                  </div>
                )
              ) : (
                <div
                  className="select-none absolute text-[#3760E7] text-nowrap top-[56px]"
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
