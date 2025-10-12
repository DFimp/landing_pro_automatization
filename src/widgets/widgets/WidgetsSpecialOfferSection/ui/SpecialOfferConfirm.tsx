import Button from "@/shared/ui/button/Button";

export default function SpecialOfferConfirm() {
    return (
        <div className="w-full flex flex-col">
        <div className="sm:ml-auto sm:mr-[58px] mb-[23px]">
            <p className="sm:text-[20px] text-[16px]">Итого к оплате:</p>
            <p className="sm:text-[32px] text-[20px]">50 000 р</p>
        </div>
        <Button text="Оформить" className="sm:py-[16px] py-[10px] sm:text-[20px]! text-[16px]!" fullWidth></Button>
        </div>
    )
}