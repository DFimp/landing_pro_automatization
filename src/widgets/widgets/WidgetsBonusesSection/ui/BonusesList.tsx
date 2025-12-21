"use client";

import { useEffect } from "react";
import { BonusesListItem } from "./BonusesListItem";
import { BonusesListCircle } from "./BonusesListCircle";
import { detectMobile } from "@/shared/utils/detectMobile";

export function BonusesList() {
  const { isMobileView } = detectMobile();

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const circle = document.getElementById("bonus_center");
    const bonuses = document.querySelectorAll(".bonus");
    const container = document.getElementById("bonuses_list");

    if (canvas && circle && bonuses && container) {
      const containerRect = container.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      const circleRect = circle.getBoundingClientRect();

      canvas.width = containerRect.width;
      canvas.height = containerRect.height;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        bonuses.forEach((bonus, index) => {
          const bonusRect = bonus.getBoundingClientRect();
          ctx.beginPath();
          ctx.strokeStyle = "white";

          const heightOffset = index < 2 ? bonusRect.height / 2 : 0;
          let widhtOffset = 0;

          switch (index) {
            case 0:
              widhtOffset = bonusRect.width;
              break;
            case 1:
              widhtOffset = 0;
              break;
            case 2:
              widhtOffset = bonusRect.width / 1.25;
              break;
            case 3:
              widhtOffset = bonusRect.width / 3;
              break;
          }

          ctx.moveTo(
            circleRect.width / 2 + circleRect.x - canvasRect.x,
            circleRect.height / 2 + circleRect.y - canvasRect.y
          );
          ctx.lineTo(
            widhtOffset + bonusRect.x - canvasRect.x,
            heightOffset + bonusRect.y - canvasRect.y
          );
          ctx.stroke();
        });
      }
    }
  }, [isMobileView]);

  const handleAnchorClick = () => {
    // ✅ ВАЖНО: поставь сюда нужный id цели
    // Если раньше у тебя был special_offer_calculator — оставь его
    const TARGET_ID = "special_offer_calculator";

    const el = document.getElementById(TARGET_ID);
    if (!el) return;

    // Скроллим к элементу, затем делаем отступ ~200px вверх
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - 200;

    window.scrollTo({
      top: Math.max(0, y),
      behavior: "smooth",
    });
  };

  return (
    <div
      id="bonuses_list"
      className="relative sm:h-[600px] flex flex-col gap-[20px] justify-center items-center"
    >
      <BonusesListCircle />

      {isMobileView ? (
        <>
          <BonusesListItem
            className="-mt-[200px] text-center"
            text="Все наши виджеты бесплатно"
          />
          <BonusesListItem className="text-center" text="Персональный менеджер" />
          <BonusesListItem
            className="text-center"
            text="Дополнительные месяцы использования"
          />
          <BonusesListItem
            className="text-center"
            text="Диагностика по проверенному чек-листу "
          />
          <BonusesListItem
            className="text-center"
            text="Специальный чат для решения проблем"
          />
        </>
      ) : (
        <>
          <canvas className="w-full h-full absolute" />
          <BonusesListItem
            className="bonus sm:absolute left-0 top-[58px]"
            text="Все наши виджеты бесплатно"
          />
          <BonusesListItem
            className="bonus sm:absolute right-0 top-[100px]"
            text="Дополнительные месяцы использования"
          />
          <BonusesListItem
            className="bonus sm:absolute left-0 bottom-[98px]"
            text="Диагностика по проверенному чек-листу "
          />
          <BonusesListItem
            className="bonus sm:absolute right-0 bottom-0"
            text="Персональный менеджер, поддержка и диагностика проблем<br/>в выделенном чате"
          />
        </>
      )}

      {/* ✅ КНОПКА (опущена ниже) + рабочее якорение */}
      <div className="mt-40 sm:mt-52 relative z-10 flex justify-center">
        <button
          type="button"
          onClick={handleAnchorClick}
          className="
            inline-flex items-center justify-center
            px-8 py-4
            rounded-full
            bg-[#3F5FEA]
            text-white
            text-[16px] sm:text-[18px]
            font-semibold
            leading-none
            hover:bg-[#3554D6]
            transition-colors
          "
        >
          Ознакомиться с тарифом
        </button>
      </div>
    </div>
  );
}
