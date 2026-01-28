import { BonusesListItem } from "./BonusesListItem";
import { BonusesListCircle } from "./BonusesListCircle";
import BonusesCanvas from "./BonusesCanvas.client";
import BonusesScrollButton from "./BonusesScrollButton.client";

export function BonusesList() {
  return (
    <div
      id="bonuses_list"
      className="relative sm:h-[600px] mt-0 flex flex-col sm:gap-[20px] gap-0 justify-center items-center"
    >
      <BonusesListCircle />

      <div className="sm:hidden flex flex-col gap-[20px] justify-center items-center w-full">
        <BonusesListItem className="text-center" text="Все наши виджеты бесплатно" />
        <BonusesListItem className="text-center" text="Персональный менеджер" />
        <BonusesListItem className="text-center" text="Дополнительные месяцы использования" />
        <BonusesListItem className="text-center" text="Диагностика по проверенному чек-листу " />
        <BonusesListItem className="text-center" text="Специальный чат для решения проблем" />
      </div>

      <div className="hidden sm:block w-full h-full">
        <canvas className="w-full h-full absolute left-0 top-0" />
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

        <BonusesCanvas />
      </div>

      <div className="mt-10 sm:mt-52 mb-[50px] sm:mb-0 relative z-10 flex justify-center">
        <BonusesScrollButton />
      </div>
    </div>
  );
}
