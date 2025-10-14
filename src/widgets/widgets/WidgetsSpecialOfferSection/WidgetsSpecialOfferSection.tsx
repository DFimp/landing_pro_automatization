import SpecialOfferCalculator from "./ui/SpecialOfferCalculator";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";

export function WidgetsSpecialOfferSection() {
    return (
        <>
        <div className=' sm:mt-[90px]! mt-[50px]! container'>
            <h2 className="sm:text-[32px] text-[20px] font-semibold sm:mb-[56px] mb-[23px]">
            Дополнительные бесплатные месяцы использования
            </h2>
            <div className="sm:flex-row flex flex-col gap-[20px] sm:gap-[40px] justify-between mb-[42px]">
                <div className="sm:max-w-[49%] flex-grow-1 border border-[#3760E7] pr-[19px] pl-[28px] py-[35px] font-[400] sm:text-[20px] text-[14px] leading-[1] rounded-[20px]">
                    Продлевая лицензии через <span className="text-[#3760E7]">«Про Автоматизацию»</span>, вы получаете бонусные месяцы использования amoCRM.
                </div>
                <div className="flex items-center sm:max-w-[49%] flex-grow-1 border border-[#3760E7] pr-[19px] pl-[28px] py-[35px] font-[400] sm:text-[20px] text-[14px] leading-[1] rounded-[20px]">
                    За ту же стоимость вы сможете дольше работать
                    в системе и сэкономить на продлении.
                </div>
            </div>
            <div className="block sm:hidden text-[20px] font-semibold text-center mb-[50px]">
                Посчитаем?
            </div>
            <div className="flex justify-center mb-[68px]">
            <SpecialOfferCalculator></SpecialOfferCalculator>
            </div>
            
        </div>
        <div className="block sm:hidden sm:mt-[53px] mt-[31px] sm:mb-[53px]">
        <ConsultCard></ConsultCard>
        </div>
        </>
    );
}