import Image from "next/image";

export function BonusesListCircle() {
  return (
    <div
      id="bonus_center"
      className="z-3 max-w-none shrink-0 overflow-hidden
                 w-[582px] h-[482px] sm:w-[582px] sm:h-[582px]"
    >
      <Image
        className="w-[582px] h-[582px] max-w-none -translate-y-[50px] sm:translate-y-0"
        src="/licenses/BonusesListCircle.webp"
        alt="круг про автоматизацию"
        width={582}
        height={582}
        priority
      />
    </div>
  );
}

