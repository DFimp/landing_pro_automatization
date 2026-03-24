import Button from "@/shared/ui/button/Button";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import SupportChips from "./ui/SupportChips";
import Image from "next/image";
import LicenseBonusComparison from "@/views/license/components/WidgetsSpecialOfferSection/ui/LicenseBonusComparison";

export function WidgetsSupportSection() {
  return (
    <>
      <ScrollReveal
        as="div"
        className="mx-auto w-full max-w-[1200px] px-4 sm:!mt-[86px] !mt-[40px]"
        variant="wipe"
        yFrom={10}
        durationMs={650}
      >
        <h2 className="sm:text-[32px] text-[20px] font-semibold mb-[24px]">
          Поддержка всегда на связи
        </h2>
        <p className="sm:text-[20px] text-[14px] font-normal mb-[35px]">
          Мы предоставляем персональную поддержку по всем вопросам, связанным с
          amoCRM: от технических неполадок до оптимизации процессов. Отвечаем
          сотрудникам, помогаем улучшать работу и решаем любые задачи.
          <br />
          <br />В тариф включено 2 часа сопровождения в месяц, при необходимости
          объём можно увеличить.
        </p>

        <div className="block sm:hidden border border-[#3760E7] rounded-[20px] py-[21px] px-[16px] font-semibold">
          <div className="flex gap-[10px] mb-[6px]">
            Разберём в
            <Image
              src="/licenses/zoom_icon.svg"
              alt="иконка зума"
              width={62}
              height={14}
            />
          </div>
          <div className="flex gap-[10px] mb-[6px]">
            Подключимся по
            <Image
              src="/licenses/anydesc_icon.svg"
              alt="иконка решений"
              width={30}
              height={25}
            />
            AnyDesk
          </div>
          <div>Напишем и позвоним по телефону</div>
        </div>

        <div className="hidden sm:flex gap-[44px] font-semibold text-[32px] mb-[48px]">
          <SupportChips>
            <Image
              src="/licenses/anydesc_icon.svg"
              alt="иконка решений"
              width={60}
              height={50}
            />
            AnyDesk
          </SupportChips>
          <SupportChips>
            Разберём в
            <Image
              src="/licenses/zoom_icon.svg"
              alt="иконка зума"
              width={131}
              height={50}
            />
          </SupportChips>
          <SupportChips>
            <Image
              src="/licenses/messanger_icon.svg"
              alt="иконка мессенджера"
              width={45}
              height={45}
            />
            Напишем и позвоним
          </SupportChips>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="div"
        className="mx-auto w-full max-w-[1200px] px-4 sm:bg-transparent bg-[#AFC1FF80]"
        yFrom={18}
        scaleFrom={0.99}
        durationMs={750}
        delayMs={80}
      >
        <div className="text-center  sm:pt-0 pt-[35px] sm:px-0 px-[22px] sm:pb-0 pb-[48px] sm:mt-0 mt-[59px]">
          <LicenseBonusComparison />
          <h5 className="sm:text-[32px] text-[20px] font-semibold text-[#3760E7] sm:mb-[38px] mb-[19px]">
            2 часа сопровождения <span className="sm:inline block"></span>в
            месяц включено
          </h5>
        </div>
      </ScrollReveal>
    </>
  );
}

