import Button from "@/shared/ui/button/Button";

interface SpecialOfferConfirmProps {
    months: string,
    finalCost: number
}

export default function SpecialOfferConfirm({ months, finalCost }: SpecialOfferConfirmProps) {
    
    return (
        <div className="w-full flex flex-col">
        <div className="sm:ml-auto sm:mr-[58px] mb-[23px]">
            <p className="sm:text-[20px] text-[16px]">Итого к оплате:</p>
            <p className="sm:text-[32px] text-[20px]">{finalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} р</p>
        </div>
        <Button text="Оформить" className="sm:py-[16px] py-[10px] sm:text-[20px]! text-[16px]!" fullWidth></Button>
        </div>
    )
}