import Image from "next/image";
import { FC } from "react";
import { TittleArrowProps } from "@/shared/ui/titleArrow/models";

export const TitleArrow: FC<TittleArrowProps> = ({
  text,
  variant = "primary",
  className = "",
  bold = true,
}) => {
  const getArrowSrc = () => {
    switch (variant) {
      case "primary":
        return "/services/Audit/arrow.svg";
      case "secondary":
        return "/services/Audit/arrow_white.svg";
      case "outline":
        return "/services/Audit/big arrow.svg";
      default:
        return "/services/Audit/arrow.svg";
    }
  };

  const getArrowDimensions = () => {
    return variant === "outline"
      ? { width: 1323, height: 30 }
      : { width: 114, height: 30 };
  };

  const arrowSrc = getArrowSrc();
  const arrowDimensions = getArrowDimensions();

  return (
    <div className={`${className}`}>
      <div
        className={`tittleArrow ${
          variant !== "outline" && "mx-auto w-full max-w-[1200px] px-4"
        } ${className}`}
      >
        <div
          className={`tittleArrow__container flex justify-between items-center ${
            variant === "outline" ? "relative" : ""
          }`}
        >
          <h2
            className={`sm:text-h4 text-[14px] ${
              bold ? "font-semibold" : ""
            } text-base
            ${variant === "outline" && "mx-auto w-full max-w-[1200px] px-4"} 
            ${variant === "secondary" ? "text-white" : ""}`}
          >
            {text}
          </h2>

          <div
            className={variant === "outline" ? "absolute left-0 top-15" : ""}
          >
            <Image
              className="w-[42px] h-[10px] sm:w-auto sm:h-auto"
              src={arrowSrc}
              alt="стрелка"
              width={arrowDimensions.width}
              height={arrowDimensions.height}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
