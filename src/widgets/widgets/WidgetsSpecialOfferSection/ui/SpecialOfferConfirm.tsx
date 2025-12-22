import Button from "@/shared/ui/button/Button";

interface SpecialOfferConfirmProps {
  finalCost: number;
  fullCost: number;
  onOpenModal: () => void;
}

function formatRub(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function SpecialOfferConfirm({
  finalCost,
  fullCost,
  onOpenModal,
}: SpecialOfferConfirmProps) {
  return (
    <div className="w-full flex flex-col">
      {/* ✅ слева полная (зачёркнута), справа итог */}
      <div className="w-full flex items-end justify-between gap-6 mb-[18px]">
        <div className="text-left">
          <p className="sm:text-[20px] text-[16px] text-black/70">Полная цена:</p>
          <p className="sm:text-[32px] text-[20px] font-medium text-black/50 line-through">
            {formatRub(fullCost)} р
          </p>
        </div>

        <div className="text-right sm:mr-[58px]">
          <p className="sm:text-[20px] text-[16px]">Итого к оплате:</p>
          <p className="sm:text-[32px] text-[20px] font-medium">
            {formatRub(finalCost)} р
          </p>
        </div>
      </div>

      <Button
        text="Оформить"
        onClick={onOpenModal}
        className="sm:py-[16px] py-[10px] sm:text-[20px]! text-[16px]!"
        fullWidth
      />
    </div>
  );
}
