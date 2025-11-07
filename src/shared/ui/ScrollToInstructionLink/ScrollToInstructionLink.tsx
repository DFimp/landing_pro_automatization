"use client";
import "./style.css";
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
      className="at-btn-link"
    >
      Смотреть инструкцию →
    </a>
  );
}