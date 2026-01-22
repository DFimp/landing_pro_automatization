import Image from "next/image";

export function BonusesListCircle() {
  return (
    <Image
      id="bonus_center"
      className="z-3 max-w-none sm:-mt-0 -mt-[200px]
                 w-[1000px] h-[800px] sm:w-[582px] sm:h-[582px]"
      src="/licenses/BonusesListCircle.jpeg"
      alt="круг про автоматизацию"
      width={1000}
      height={800}
      priority
    />
  );
}

