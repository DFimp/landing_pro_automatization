"use client";

import { useEffect, useMemo, useState } from "react";
import ConsultationModal from "@/features/consultation/ConsultationModal";

import SpecialOfferSlider from "./SpecialOfferSlider";
import SpecialOfferPlanSelect, { TariffIndex } from "./SpecialOfferPlanSelect";
import SpecialOfferUsersCounter from "./SpecialOfferUsersCounter";
import SpecialOfferProfit from "./SpecialOfferProfit";
import SpecialOfferConfirm from "./SpecialOfferConfirm";

type MonthsOption = 6 | 9 | 12 | 24;

export default function SpecialOfferCalculator() {
  const [monthsCount, setMonthsCount] = useState<MonthsOption>(9);
  const [tariff, setTariff] = useState<TariffIndex>(3);
  const [usersCount, setUsersCount] = useState(10);

  const tariffsCosts = [599, 1199, 1699] as const;
  const tariffsNames = ["Базовый", "Расширенный", "Профессиональный", "Архивный"] as const;

  const bonusMonths: Record<MonthsOption, number> = {
    6: 1,
    9: 2,
    12: 3,
    24: 7,
  };

  const paidMonthsMap: Record<MonthsOption, number> = {
    6: 6,
    9: 8,
    12: 10,
    24: 18,
  };

  const [archivedPrice, setArchivedPrice] = useState<number>(0);

  const pricePerUser = useMemo(() => {
    if (tariff === 3) return archivedPrice;
    return tariffsCosts[tariff];
  }, [tariff, archivedPrice]);

  const [profit, setProfit] = useState(0);
  const [finalCost, setFinalCost] = useState(0);
  const [fullCost, setFullCost] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    const bonus = bonusMonths[monthsCount];

    const safePrice = Number.isFinite(pricePerUser) ? pricePerUser : 0;
    const safeUsers = Number.isFinite(usersCount) ? usersCount : 0;

    const paidMonths = paidMonthsMap[monthsCount];
    const totalMonths = paidMonths + bonus;

    const full = safePrice * safeUsers * totalMonths;
    const pay = safePrice * safeUsers * paidMonths;
    const save = full - pay;

    setFullCost(Math.max(0, Math.round(full)));
    setFinalCost(Math.max(0, Math.round(pay)));
    setProfit(Math.max(0, Math.round(save)));
  }, [monthsCount, usersCount, pricePerUser]);

  return (
    <>
      <div
        id="special_offer_calculator"
        className="mx-auto w-full max-w-[660px] overflow-hidden rounded-[20px] border border-[#3760E7] bg-white"
      >
        <div className="flex flex-col items-center justify-center border-b border-[#D9D9D9] px-[18px] pt-[18px] pb-[12px] sm:px-[32px] sm:pt-[30px] sm:pb-[20px]">
          <SpecialOfferSlider value={monthsCount} setValue={setMonthsCount} />
          <p className="mt-[28px] text-center text-[12px] leading-[1.35] text-[#969696] sm:mt-[52px] sm:text-[15px]">
            Чем длиннее срок — тем больше месяцев в подарок
          </p>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col gap-[14px] border-b border-[#D9D9D9] px-[18px] pt-[14px] pb-[14px] sm:w-1/2 sm:border-r sm:border-b-0 sm:px-[28px] sm:pt-[20px] sm:pb-[20px]">
            <SpecialOfferPlanSelect value={tariff} setValue={setTariff} />

            {tariff === 3 && (
              <div className="flex flex-col gap-[6px]">
                <label className="text-[16px] font-medium sm:text-[17px]">
                  Цена за пользователя
                </label>

                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  value={archivedPrice === 0 ? "" : archivedPrice}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    setArchivedPrice(Number.isFinite(v) ? v : 0);
                  }}
                  placeholder="Например: 599"
                  className="h-[42px] w-full rounded-[12px] border border-[#D9D9D9] px-4 outline-none transition focus:border-[#3760E7]"
                />

                <p className="text-[12px] leading-snug text-[#969696] sm:text-[13px]">
                  Введите цену за пользователя по вашему тарифу в amoCRM
                </p>
              </div>
            )}

            <SpecialOfferUsersCounter value={usersCount} setValue={setUsersCount} />
          </div>

          <div className="px-[18px] pt-[14px] pb-[14px] sm:w-1/2 sm:px-[28px] sm:pt-[20px] sm:pb-[20px]">
            <SpecialOfferProfit profit={profit} months={monthsCount} />
          </div>
        </div>

        <div className="border-t border-[#D9D9D9] px-[18px] pt-[12px] pb-[14px] sm:px-[28px] sm:pt-[16px] sm:pb-[20px]">
          <SpecialOfferConfirm
            finalCost={finalCost}
            fullCost={fullCost}
            onOpenModal={handleOpenModal}
          />
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        prefilledMonths={monthsCount}
        prefilledAmoTariff={tariffsNames[tariff]}
        prefilledUsers={usersCount}
      />
    </>
  );
}
