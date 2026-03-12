import ConsultCard from "@/widgets/landing/consultCard/ConsultCard";
import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

export function ArticleConclusionSection() {
  return (
    <div className="pt-6 pb-6 sm:pt-10 sm:pb-8">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <ScrollReveal
          as="h2"
          variant="typeFast"
          className="sm:text-[32px] text-[20px] font-semibold text-[#3760E7] sm:mb-[20px] mb-[14px]"
        >
          Хотите внедрить такую систему в своём бизнесе?
        </ScrollReveal>
        <ScrollReveal
          as="p"
          variant="typeFast"
          className="sm:text-[20px] text-[14px] font-[400] sm:mb-[37px] mb-[23px]"
        >
          Мы поможем настроить CRM так, чтобы она работала на рост продаж, а не
          против него.
        </ScrollReveal>
      </div>
      <StickyInfo
        text="Запишитесь на бесплатную консультацию — разберём ваш кейс и предложим лучшее решение под ваш бизнес."
        className="sm:!text-[20px] !text-[14px] !font-[400]"
      ></StickyInfo>
      <div className="sm:mt-[53px] mt-[31px] sm:pb-20">
        <ConsultCard></ConsultCard>
      </div>
    </div>
  );
}
