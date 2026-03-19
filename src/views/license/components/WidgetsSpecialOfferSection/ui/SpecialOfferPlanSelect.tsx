"use client";

import { useEffect, useMemo, useState } from "react";

export type TariffIndex = 0 | 1 | 2 | 3;

interface SpecialOfferPlanProps {
  setValue: (v: TariffIndex) => void;
  value: TariffIndex;
}

export default function SpecialOfferPlanSelect({ value, setValue }: SpecialOfferPlanProps) {
  const tariffs = useMemo(
    () => ["Базовый", "Расширенный", "Профессиональный", "Архивный"],
    []
  );

  const clampIndex = (v: number): TariffIndex => {
    const safe = Math.min(Math.max(0, v), tariffs.length - 1);
    return safe as TariffIndex;
  };

  const [selectedTariff, setSelectedTariff] = useState<TariffIndex>(() => clampIndex(value));
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectTariff = (idx: number) => {
    setSelectedTariff(clampIndex(idx));
    setIsOpen(false);
  };

  useEffect(() => {
    setValue(selectedTariff);
  }, [selectedTariff, setValue]);

  useEffect(() => {
    setSelectedTariff(clampIndex(value));
  }, [value]);

  return (
    <div className="flex flex-col">
      <label className="sm:text-[20px] text-[16px] font-medium mb-[16px]">Тариф</label>

      <div className="relative">
        <div
          className="relative cursor-pointer h-[44px] w-full px-4 py-2 bg-white border border-gray-300 rounded-lg flex items-center"
          onClick={() => setIsOpen((v) => !v)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setIsOpen((v) => !v);
            if (e.key === "Escape") setIsOpen(false);
          }}
        >
          <span className="select-none">{tariffs[selectedTariff]}</span>

          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        {isOpen && (
          <div className="z-20 w-full absolute top-[48px] left-0 bg-white border border-gray-300 rounded-lg overflow-hidden">
            {tariffs.map((tariff, index) => (
              <button
                key={tariff}
                type="button"
                className="w-full text-left py-2 px-4 hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectTariff(index);
                }}
              >
                {tariff}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
