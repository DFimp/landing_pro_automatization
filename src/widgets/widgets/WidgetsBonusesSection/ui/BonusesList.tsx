import { BonusesListItem } from "./BonusesListItem";
import { BonusesListCircle } from "./BonusesListCircle";
import BonusesScrollButton from "./BonusesScrollButton.client";
import BonusesListDesktopInteractive from "./BonusesListDesktopInteractive.client";

export function BonusesList() {
  return (
    <div
      id="bonuses_list"
      className="relative sm:h-[600px] mt-0 flex flex-col sm:gap-[20px] gap-0 justify-center items-center"
    >
      <BonusesListCircle />

      <div className="sm:hidden flex flex-col gap-[20px] justify-center items-center w-full">
        <a href="#license-bonus-amo" className="w-full">
          <BonusesListItem className="text-center" text="Все наши виджеты бесплатно" />
        </a>
        <a href="#special_offer_block" className="w-full">
          <BonusesListItem className="text-center" text="Персональный менеджер" />
        </a>
        <BonusesListItem
          className="text-center"
          text="Дополнительные месяцы использования"
        />
        <a
          href="https://t.me/proavtomatization_support_bot"
          target="_blank"
          rel="noreferrer"
          className="w-full"
        >
          <BonusesListItem
            className="text-center"
            text="Диагностика по проверенному чек-листу"
          />
        </a>
        <a
          href="https://t.me/proavtomatization_support_bot"
          target="_blank"
          rel="noreferrer"
          className="w-full"
        >
          <BonusesListItem
            className="text-center"
            text="Специальный чат для решения проблем"
          />
        </a>
      </div>

      <BonusesListDesktopInteractive />

      <div className="mt-10 sm:mt-52 mb-[50px] sm:mb-0 relative z-10 flex justify-center">
        <BonusesScrollButton />
      </div>
    </div>
  );
}
