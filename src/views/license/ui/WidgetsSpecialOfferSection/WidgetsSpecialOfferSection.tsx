import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import SpecialOfferCalculator from "./ui/SpecialOfferCalculator";

export function WidgetsSpecialOfferSection() {
  return (
    <>
      <ScrollReveal
        as="section"
        className="mx-auto w-full max-w-[1200px] px-4 mt-[50px] sm:mt-[90px]"
        staggerChildren
        variant="bubble"
        durationMs={750}
        delayMs={80}
        staggerMs={90}
        amount={0.25}
      >
        <h2
          data-sr-item
          style={{ ["--i" as any]: 0 }}
          className="sm:text-[32px] text-[20px] font-semibold sm:mb-[56px] mb-[23px]"
        >
          Условия продления лицензий
        </h2>

        <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[40px] justify-between mb-[42px]">
          <div
            data-sr-item
            style={{ ["--i" as any]: 1 }}
            className="sm:max-w-[49%] grow border border-[#3760E7] pr-[19px] pl-[28px] py-[35px] font-[400] sm:text-[20px] text-[14px] leading-[1] rounded-[20px]"
          >
            Продлевая лицензии через{" "}
            <span className="text-[#3760E7]">«Про Автоматизацию»</span>, вы
            получаете сопровождение по продлению и помощь в выборе тарифа.
          </div>

          <div
            data-sr-item
            style={{ ["--i" as any]: 2 }}
            className="flex items-center sm:max-w-[49%] grow border border-[#3760E7] pr-[19px] pl-[28px] py-[35px] font-[400] sm:text-[20px] text-[14px] leading-[1] rounded-[20px]"
          >
            Рассчитайте стоимость продления для вашего тарифа и количества
            пользователей.
          </div>
        </div>

        <p
          data-sr-item
          style={{ ["--i" as any]: 3 }}
          className="block sm:hidden text-[20px] font-semibold text-center mb-[50px]"
        >
          Посчитаем?
        </p>

        <div
          data-sr-item
          style={{
            ["--i" as any]: 4,
            scrollMarginTop: "calc(40vh + 100px)",
          }}
          id="special_offer_block"
          className="flex justify-center mb-[31px] sm:mb-[68px]"
        >
          <SpecialOfferCalculator />
        </div>
      </ScrollReveal>

      <aside className="block sm:hidden mt-0 mb-[31px]">
        <ConsultCard />
      </aside>
    </>
  );
}

