import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { Container } from "@/shared/ui/layout";
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
    return variant === "outline" ? { width: 1323, height: 30 } : { width: 114, height: 30 };
  };

  const isOutline = variant === "outline";
  const arrowSrc = getArrowSrc();
  const arrowDimensions = getArrowDimensions();

  const titleClassName = clsx(
    "sm:text-h4 text-[14px] text-base",
    bold && "font-semibold",
    variant === "secondary" && "text-white"
  );

  if (isOutline) {
    return (
      <div className={className}>
        <div className="tittleArrow">
          <div className="tittleArrow__container relative flex items-center justify-between">
            <Container as="h2" className={titleClassName}>
              {text}
            </Container>

            <div className="absolute left-0 top-15">
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
  }

  return (
    <Container className={clsx("tittleArrow", className)}>
      <div className="tittleArrow__container flex items-center justify-between">
        <h2 className={titleClassName}>{text}</h2>

        <div>
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
    </Container>
  );
};

