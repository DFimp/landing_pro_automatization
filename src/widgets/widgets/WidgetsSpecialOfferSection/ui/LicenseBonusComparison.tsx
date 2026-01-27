import Image from "next/image";

export default function LicenseBonusComparison() {
  return (
    <div className="mt-[50px] sm:mt-[70px] mb-[68px]">
      <h3 className="text-center sm:text-[32px] text-[22px] font-semibold mb-[28px]">
        Лицензии amoCRM с бонусами
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] sm:gap-[30px]">
        <div className="rounded-[20px] bg-[#3760E7] text-white p-[24px] sm:p-[32px]">
          <div className="flex items-center justify-center mb-6 min-h-[72px] sm:min-h-[80px]">
            <div className="flex items-center gap-3 rounded-[12px] border border-white/20 bg-white/10 px-3 py-2">
              <Image
                src="/vector_logo.svg"
                alt="Логотип Про Автоматизацию"
                width={36}
                height={48}
                className="h-[48px] w-[36px]"
              />
              <div className="uppercase font-medium leading-[1.05] text-[14px] sm:text-[16px] text-center">
                <span className="block">ПРО</span>
                <span className="block">АВТОМАТИЗАЦИЮ</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-[14px] sm:text-[16px]">
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
              <span>Цена amoCRM</span>
              <span className="font-semibold">Одинаковая</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
              <div>
                <span className="block">Особые бонусы</span>
                <span className="block">при продлении</span>
              </div>
              <span className="text-[20px] sm:text-[22px]">&#10003;</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
              <div>
                <span className="block">Консультации</span>
                <span className="block">и рекомендации</span>
              </div>
              <span className="text-[20px] sm:text-[22px]">&#10003;</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="block">Все виджеты</span>
              </div>
              <span className="font-semibold">Бесплатно</span>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] border border-[#3760E7] text-black p-[24px] sm:p-[32px]">
          <div className="flex items-center justify-center mb-6 min-h-[72px] sm:min-h-[80px]">
            <div className="text-center">
              <p className="text-[16px] sm:text-[18px] font-semibold">Покупка лицензий</p>
              <p className="text-[14px] sm:text-[16px] text-black/60">
                не через «Про Автоматизацию»
              </p>
            </div>
          </div>

          <div className="space-y-4 text-[14px] sm:text-[16px]">
            <div className="flex items-center justify-between border-b border-[#E6E6E6] pb-3">
              <span>Цена amoCRM</span>
              <span className="font-semibold">Одинаковая</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#E6E6E6] pb-3">
              <div>
                <span className="block">Особые бонусы</span>
                <span className="block">при продлении</span>
              </div>
              <span className="text-[#F04438] text-[20px] sm:text-[22px]">&#10005;</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#E6E6E6] pb-3">
              <div>
                <span className="block">Консультации</span>
                <span className="block">и рекомендации</span>
              </div>
              <span className="text-[#F04438] text-[20px] sm:text-[22px]">&#10005;</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="block">Все виджеты</span>
              </div>
              <div className="text-right">
                <span className="block font-semibold">от 10 000 ₽</span>
                <span className="block text-[12px] text-black/60">в год за каждый</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
