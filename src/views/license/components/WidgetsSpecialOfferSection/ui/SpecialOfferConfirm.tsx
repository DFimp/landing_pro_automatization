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
    <div className="flex w-full flex-col">
      <div className="mb-[10px] flex w-full items-end justify-between gap-4 sm:mb-[14px] sm:gap-6">
        <div className="text-left">
          <p className="text-[12px] text-black/70 sm:text-[18px]">Полная цена:</p>
          <p className="text-[14px] font-medium text-black/50 line-through sm:text-[28px]">
            {formatRub(fullCost)} р
          </p>
        </div>

        <div className="text-right sm:mr-[36px]">
          <p className="text-[12px] sm:text-[18px]">Итого к оплате:</p>
          <p className="text-[14px] font-medium sm:text-[28px]">
            {formatRub(finalCost)} р
          </p>
        </div>
      </div>

      <Button
        text="Оформить"
        onClick={onOpenModal}
        className="py-[8px] !text-[14px] sm:py-[13px] sm:!text-[18px]"
        fullWidth
      />
    </div>
  );
}
