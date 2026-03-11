"use client";
import React from "react";

export default function ScrollToInstructionLink() {
  const handleScrollToInstruction = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    document
      .querySelector("#instruction")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href="#instruction"
      onClick={handleScrollToInstruction}
      className="text-[#cfd6ea] border-b border-[rgba(207,214,234,0.35)] pb-[2px] text-[16px] transition-[color,border-color] duration-200 hover:text-white hover:border-[rgba(255,255,255,0.6)] max-[480px]:inline-flex max-[480px]:items-center max-[480px]:justify-center max-[480px]:h-11 max-[480px]:w-full max-[480px]:rounded-full max-[480px]:bg-[#386bff] max-[480px]:px-[22px] max-[480px]:text-[15px] max-[480px]:font-semibold max-[480px]:shadow-[0_8px_24px_rgba(56,107,255,0.35)] max-[480px]:border-0 max-[480px]:text-white"
    >
      Смотреть инструкцию →
    </a>
  );
}