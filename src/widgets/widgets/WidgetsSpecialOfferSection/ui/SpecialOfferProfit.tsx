interface SpecialOfferProfitProps {
    months: 6 | 9 | 12 | 24,
    profit: number
}

export default function SpecialOfferProfit({ months, profit }: SpecialOfferProfitProps) {
    const bonusMonths = {
        6: "+ 1 месяц",
        9: "+ 2 месяца",
        12: "+ 3 месяца",
        24: "+ 7 месяцев"
    }
    return (
        <div className="">
            <p className="sm:mb-[26px] mb-[10px] sm:text-[20px] text-[16px] font-medium">Бонусных месяцев:</p>
            <p className="sm:mb-[33px] mb-[13px] sm:text-[20px] text-[14px] font-medium text-[#3760E7]">{ bonusMonths[months] }</p>
            <p className="sm:mb-[19px] mb-[6px] tsm:ext-[20px] text-[16px]  font-medium">Экономия:</p>
            <p className="sm:text-[32px] text-[14px] font-medium">{profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} р</p>
        </div>
    )
}