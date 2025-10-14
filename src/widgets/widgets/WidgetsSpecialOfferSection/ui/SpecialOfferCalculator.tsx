'use client'
import SpecialOfferSlider from "./SpecialOfferSlider";
import SpecialOfferPlanSelect from "./SpecialOfferPlanSelect";
import SpecialOfferUsersCounter from "./SpecialOfferUsersCounter";
import SpecialOfferConfirm from "./SpecialOfferConfirm";
import SpecialOfferProfit from "./SpecialOfferProfit";
import { useState, useEffect } from "react";

export default function SpecialOfferCalculator() {

  const [monthsCount, setMonthsCount] = useState<6 | 9 | 12 | 24>(9)
  const [tariff, setTariff] = useState(0)
  const [usersCount, setUsersCount] = useState(10)

  const tariffsCosts = [599, 1199, 1699]
  const bonusMonths = {
        6: 1,
        9: 2,
        12: 3,
        24: 7 
    }

  const [profit, setProfit] = useState(0)
  const [finalCost, setFinalCost] = useState(0)

  useEffect(() => {
    setProfit(tariffsCosts[tariff] * usersCount * bonusMonths[monthsCount])
    setFinalCost(tariffsCosts[tariff] * usersCount * (monthsCount - bonusMonths[monthsCount]))
  }, [monthsCount, tariff, usersCount])
  return (
    <div id="special_offer_calculator" className="border border-[#3760E7] rounded-[20px] max-w-[580px] w-full overflow-hidden">
      <div className="sm:border-b sm:border-[#D9D9D9] flex flex-col justify-center items-center p-[47px] pb-[27px]">
        <SpecialOfferSlider value={monthsCount} setValue={setMonthsCount}></SpecialOfferSlider>
        <p className="mt-[85px] text-[#969696] text-center">Чем длинее срок - тем больше месяцев в подарок</p>
      </div>
      <div className="flex sm:flex-row flex-col">
        <div className="sm:border-r sm:border-[#D9D9D9] flex-grow-1 flex flex-col gap-[23px] sm:pl-[47px] pl-[26px] pt-[15px] sm:pr-[27px] pr-[26px] pb-[24px] sm:max-w-[50%]">
          <SpecialOfferPlanSelect value={tariff} setValue={setTariff}></SpecialOfferPlanSelect>
          <SpecialOfferUsersCounter value={usersCount} setValue={setUsersCount}></SpecialOfferUsersCounter>
        </div>
        <div className="flex-grow-1 sm:pr-[47px] pr-[26px] pt-[15px] sm:pl-[27px] pl-[26px] sm:pb-[24px] sm:max-w-[50%]">
          <SpecialOfferProfit profit={profit} months={monthsCount}></SpecialOfferProfit>
        </div>
      </div>
      <div className="sm:px-[44px] px-[26px] pb-[27px] pt-[11px] sm:border-t sm:border-[#D9D9D9]">
        <SpecialOfferConfirm finalCost={finalCost}></SpecialOfferConfirm>
      </div>
    </div>
  );
}