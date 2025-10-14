import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";

export function ArticleConclusionSection() {
    return (
        <div className="">
            <div className="container">
            <h2 className="sm:text-[32px] text-[20px] font-semibold text-[#3760E7] sm:mb-[20px] mb-[14px]">Хотите внедрить такую систему в своём бизнесе?</h2>
            <p className="sm:text-[20px] text-[14px] font-[400] sm:mb-[37px] mb-[23px]">Мы поможем настроить CRM так, чтобы она работала на рост продаж, а не против него.</p>
            </div>
            <StickyInfo
                text="Запишитесь на бесплатную консультацию — разберём ваш кейс и предложим лучшее решение под ваш бизнес."
                className="sm:text-[20px]! text-[14px]! font-[400]!"
            ></StickyInfo>
            <div className="sm:mt-[53px] mt-[31px] sm:mb-[200px]">
            <ConsultCard></ConsultCard>
            </div>
        </div>
    )
}