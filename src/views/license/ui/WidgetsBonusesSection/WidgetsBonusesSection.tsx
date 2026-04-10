import Image from "next/image";
import { BonusesList } from "./ui/BonusesList";

export function WidgetsBonusesSection() {
  return (
    <div className="relative sm:h-[1106px] h-auto pb-0 overflow-visible sm:overflow-hidden">
      <Image
        src="/widgets_background.png"
        alt="фон секции бонусов"
        fill
        priority
        className="object-cover"
        quality={90}
      />
      
      <div className="relative z-10 sm:!pt-[40px] !pt-[18px] mx-auto w-full max-w-[1200px] px-4">
        <h1 className="text-white sm:text-[48px] text-[20px] font-bold sm:mb-[40px] mb-[20px]">
          Лицензии amoCRM c <span className="sm:inline block">бонусами</span>
        </h1>
        <h2 className="text-white sm:text-[20px] text-[14px] font-normal">
          Выбирая "Про Автоматизацию"{" "}
          <span className="sm:inline block">
            для продления лицензий, вы получаете
          </span>{" "}
          не только продукт, но и особые{" "}
          <span className="inline sm:block">
            бонусы для{" "}
            <span className="sm:inline block">вашего бизнеса:</span>
          </span>
        </h2>
        <BonusesList />
      </div>
    </div>
  );
}
