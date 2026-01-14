import { WidgetsListShort } from "./ui/WidgetsListShort";
import Image from "next/image";

export function WidgetsWidgetsSection() {
  return (
    <div className="container -mt-[110px]! sm:-mt-[180px]!">
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

      <WidgetsListShort />
    </div>
  );
}
