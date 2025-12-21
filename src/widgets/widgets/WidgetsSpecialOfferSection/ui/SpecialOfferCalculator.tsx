"use client";

import { useEffect, useMemo, useState } from "react";
import ConsultationModal from "@/features/consultation/ConsultationModal";

import SpecialOfferSlider from "./SpecialOfferSlider";
import SpecialOfferPlanSelect, { TariffIndex } from "./SpecialOfferPlanSelect";
import SpecialOfferUsersCounter from "./SpecialOfferUsersCounter";
import SpecialOfferProfit from "./SpecialOfferProfit";
import SpecialOfferConfirm from "./SpecialOfferConfirm";

type MonthsOption = 5 | 7 | 9 | 17;

export default function SpecialOfferCalculator() {
  const [monthsCount, setMonthsCount] = useState<MonthsOption>(7);
  const [tariff, setTariff] = useState<TariffIndex>(0);
  const [usersCount, setUsersCount] = useState(10);

  const tariffsCosts = [599, 1199, 1699] as const;
  const tariffsNames = ["Базовый", "Расширенный", "Профессиональный", "Архивный"] as const;

  const bonusMonths: Record<MonthsOption, number> = {
    5: 1,
    7: 2,
    9: 3,
    17: 7,
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

    const full = safePrice * safeUsers * monthsCount;
    const pay = safePrice * safeUsers * (monthsCount - bonus);
    const save = safePrice * safeUsers * bonus;

    setFullCost(Math.max(0, Math.round(full)));
    setFinalCost(Math.max(0, Math.round(pay)));
    setProfit(Math.max(0, Math.round(save)));
  }, [monthsCount, usersCount, pricePerUser]);

  return (
    <>
      <div
        id="special_offer_calculator"
        className="
          border border-[#3760E7] rounded-[20px]
          w-full
          max-w-[820px]  /* ✅ было 580, делаем уже/аккуратнее */
          overflow-hidden
          bg-white
        "
      >
        <div className="sm:border-b sm:border-[#D9D9D9] flex flex-col justify-center items-center p-[36px] sm:p-[47px] pb-[27px]">
          <SpecialOfferSlider value={monthsCount} setValue={setMonthsCount} />
          <p className="mt-[85px] text-[#969696] text-center">
            Чем длинее срок - тем больше месяцев в подарок
          </p>
        </div>

        {/* ✅ делаем 2 равные колонки и чтобы занимали всю ширину */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 sm:border-r sm:border-[#D9D9D9] flex flex-col gap-[23px] pl-[26px] pr-[26px] sm:pl-[44px] sm:pr-[32px] pt-[15px] pb-[24px]">
            <SpecialOfferPlanSelect value={tariff} setValue={setTariff} />

            {tariff === 3 && (
              <div className="flex flex-col gap-2">
                <label className="sm:text-[18px] text-[16px] font-medium">
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
                  className="w-full h-[44px] rounded-[12px] border border-[#D9D9D9] px-4 outline-none focus:border-[#3760E7] transition"
                />

                <p className="text-[13px] text-[#969696] leading-snug">
                  Введите цену за пользовтаеля по вашему тарифу в amoCRM
                </p>
              </div>
            )}

            <SpecialOfferUsersCounter value={usersCount} setValue={setUsersCount} />
          </div>

          <div className="sm:w-1/2 pl-[26px] pr-[26px] sm:pl-[32px] sm:pr-[44px] pt-[15px] pb-[24px]">
            <SpecialOfferProfit profit={profit} months={monthsCount} />
          </div>
        </div>

        <div className="sm:px-[44px] px-[26px] pb-[27px] pt-[14px] sm:border-t sm:border-[#D9D9D9]">
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
