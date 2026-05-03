import { WidgetsListShort } from "./ui/WidgetsListShort";
import Image from "next/image";

type WidgetsWidgetsSectionProps = {
  priceLabelsByKey?: Record<string, string>;
};

export function WidgetsWidgetsSection({ priceLabelsByKey }: WidgetsWidgetsSectionProps) {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 !-mt-[80px] sm:!-mt-[140px]">
      <div className="flex justify-between items-center mb-[30px]">
        <h2 className="text-white sm:text-[32px] text-[16px] font-semibold">
          Получите виджеты бесплатно. Настроим тоже мы
        </h2>

        <Image
          src="/arrow_white.svg"
          alt="белая стрелка вправо"
          width={113}
          height={30}
          className="w-[42px] h-auto sm:w-[113px]"
          priority
        />
      </div>

      <WidgetsListShort priceLabelsByKey={priceLabelsByKey} />
    </div>
  );
}
