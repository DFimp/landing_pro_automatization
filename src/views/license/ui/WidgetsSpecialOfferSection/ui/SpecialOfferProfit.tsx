type MonthsOption = 6 | 9 | 12 | 24;

interface SpecialOfferProfitProps {
  months: MonthsOption;
  profit: number;
}

export default function SpecialOfferProfit({ months, profit }: SpecialOfferProfitProps) {
  return (
    <div>
      <p className="mb-[6px] text-[14px] font-medium sm:mb-[18px] sm:text-[18px]">
        Срок продления:
      </p>
      <p className="mb-[12px] text-[10px] font-medium text-[#3760E7] sm:mb-[24px] sm:text-[18px]">
        {months} мес.
      </p>
      <p className="mb-[4px] text-[14px] font-medium sm:mb-[12px] sm:text-[18px]">
        Экономия:
      </p>
      <p className="text-[24px] font-medium sm:text-[30px]">
        {profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} р
      </p>
    </div>
  );
}
