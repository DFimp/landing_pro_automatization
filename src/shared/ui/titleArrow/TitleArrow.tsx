"use client"

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { TittleArrowProps } from "@/shared/ui/titleArrow/models";
import { detectMobile } from "@/shared/utils/detectMobile";

export const TitleArrow: FC<TittleArrowProps> = ({
  text,
  variant = "primary",
  link,
  className = "",
  bold = true
}) => {
  // Определяем путь к изображению в зависимости от варианта
  const getArrowSrc = () => {
    switch (variant) {
      case "primary":
        return "/arrow.svg";
      case "secondary":
        return "/arrow_white.svg";
      case "outline":
        return "/big arrow.svg";
      default:
        return "/arrow.svg";
    }
  };

  // Определяем размеры изображения в зависимости от варианта
  const getArrowDimensions = () => {
    return variant === "outline"
      ? { width: 1323, height: 30 }
      : { width: 114, height: 30 };
  };

  const arrowSrc = getArrowSrc();
  const arrowDimensions = getArrowDimensions();
  const { isMobileView } = detectMobile()

  return (
    <div className={`${className}`}>
      <div
        className={`tittleArrow ${
          variant !== "outline" && "container"
        } ${className}`}
      >
        <div
          className={`tittleArrow__container flex justify-between items-center ${
            variant === "outline" ? "relative" : ""
          }`}
        >
          <h2
            className={`sm:text-h4 text-[14px] ${bold ? 'font-semibold' : ''} text-base
                    ${variant === "outline" && "container"} 
                    ${variant === "secondary" ? "text-white" : ""}`}
          >
            {text}
          </h2>

          <Link
            href={link}
            passHref
            className={variant === "outline" ? "absolute left-0 top-15" : ""}
          >
            <Image
              src={arrowSrc}
              alt="Стрелочка перехода"
              width={isMobileView ? 42 : arrowDimensions.width}
              height={isMobileView ? 10 : arrowDimensions.height}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
