import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface WidgetsListItemProps {
  title: string;
  variant: number;
  text: string;
  link: string;
  tariff?: string;
  className?: string;
}

export function WidgetsListItem({
  text,
  variant,
  title,
  className,
  link,
  tariff,
}: WidgetsListItemProps) {
  let cardClassName = "";
  let upperDecorationPath = "";
  let bottomDecorationPath = "";

  switch (variant) {
    case 1:
      cardClassName = "bg-white";
      break;
    case 2:
      cardClassName = "bg-white";
      upperDecorationPath = "/decor/widgets_list_decoration_1.svg";
      bottomDecorationPath = "/decor/widgets_list_decoration_2.svg";
      break;
    case 3:
      cardClassName = "bg-[#3760E7] text-white";
      upperDecorationPath = "/decor/widgets_list_decoration_3.svg";
      break;
    case 4:
      cardClassName = "bg-[#3760E7] text-white";
      bottomDecorationPath = "/decor/widgets_list_decoration_4.svg";
      break;
  }

  return (
    <Link href={link} className="block h-full">
      <div
        className={clsx(
          "widget-card h-full rounded-[40px] border border-[#3760E7] relative",
          className
        )}
      >
        <div
          className={clsx(
            "widget-card__inner h-full sm:px-[61px] sm:py-[52px] py-[40px] px-[35px] rounded-[40px] relative overflow-hidden",
            cardClassName
          )}
        >
          {[2, 3].includes(variant) && (
            <Image
              className="absolute left-0 top-0"
              src={upperDecorationPath}
              alt="Декоративный элемент"
              width={variant === 3 ? 9999 : 310}
              height={9999}
            />
          )}

          <h3 className="relative z-10 sm:font-[20px] font-[16px] font-semibold sm:pb-[20px] pb-[10px]">
            {title}
          </h3>
          {tariff && (
            <p
              className={clsx(
                "relative z-10 pb-[12px] text-[14px] font-medium",
                [3, 4].includes(variant) ? "text-white/80" : "text-[#3760E7]"
              )}
            >
              Тариф: {tariff}
            </p>
          )}
          <p className="relative z-10 sm:font-[16px] font-[14px] leading-[1.5]">
            {text}
          </p>

          {[2, 4].includes(variant) && (
            <Image
              className="absolute right-0 bottom-0"
              src={bottomDecorationPath}
              alt="Декоративный элемент"
              width={310}
              height={9999}
            />
          )}
        </div>
      </div>
    </Link>
  );
}

