import Image from "next/image";
import ConsultCardModalClient from "./ConsultCardModal.client";
import ConsultCardReveal from "./ConsultCardReveal.client";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

interface ConsultCardProps {
  className?: string;
}

export default function ConsultCard({ className }: ConsultCardProps) {
  return (
    <>
      {/* Desktop: анимацию оставляем в маленьком клиентском wrapper-е */}
      <ConsultCardReveal className="hidden md:block">
        <section id="card">
          <div
            className={`mx-auto w-full max-w-[1200px] px-4 rounded-4xl relative bg-[url('/card_bg.svg')] bg-cover bg-center bg-no-repeat ${className || ""}`}
          >
            <div className="p-10 space-y-15 rounded-4xl">
              <h2 className="text-h2 font-semibold text-white w-190">
                Освободим ваше время, за счет автоматизации процессов и аналитики
              </h2>

              <p className="text-h5 font-medium text-white max-w-150">
                Возьмем на себя рутину, проконтролируем менеджеров и предоставим
                отчеты для стратегических решений
              </p>

              <div className="btn__container mt-4 w-70">
                <ConsultCardModalClient
                  text="КОНСУЛЬТАЦИЯ"
                  variant="outline"
                  className="px-7"
                />
              </div>
            </div>

            <ScrollReveal
              as="div"
              className="absolute top-[390px] w-[192px] bottom-[0px] right-[250px] z-1"
              variant="dropZ"
              amount={0.35}
              delayMs={650}
            >
              <Image
                src="/decor/phoneSmall.png"
                alt="карточка телефона"
                width={192}
                height={179}
              />
            </ScrollReveal>

            <ScrollReveal
              as="div"
              className="absolute bottom-0 right-[92px] z-2"
              style={{ bottom: "-20px" }}
              variant="dropZ"
              amount={0.35}
              delayMs={820}
            >
              <Image
                src="/decor/phoneMedium.svg"
                alt="карточка телефона"
                width={206}
                height={222}
              />
            </ScrollReveal>

            <ScrollReveal
              as="div"
              className="absolute bottom-[-50px] right-[-45px] z-3"
              variant="dropZ"
              amount={0.35}
              delayMs={1000}
            >
              <Image
                src="/decor/phoneBigbg.svg"
                alt="карточка телефона"
                width={218}
                height={318}
              />
            </ScrollReveal>

            <ScrollReveal
              as="div"
              className="absolute bottom-[-40px] right-[-38px] z-4"
              variant="dropZ"
              amount={0.35}
              delayMs={1000}
            >
              <Image
                src="/decor/phoneBig.svg"
                alt="карточка телефона"
                width={205}
                height={296}
              />
            </ScrollReveal>
          </div>
        </section>
      </ConsultCardReveal>

      {/* Mobile */}
      <section className="md:hidden">
        <div className="relative bg-[#3760E7] rounded-[20px] overflow-hidden px-5 pt-6 pb-[22px] min-h-[540px] grid grid-rows-[auto_auto_1fr_auto] gap-y-[10px] max-[640px]:rounded-none max-[640px]:mx-[calc(50%-50vw)] max-[640px]:w-[100vw] max-[360px]:min-h-[520px]">
          <Image
            className="absolute right-0 top-[-2px] z-[1] pointer-events-none"
            src="/decor/Exclude.svg"
            alt="исключение"
            width={133}
            height={201}
            priority
          />

          <h3 className="z-[2] text-white font-bold text-[16px] leading-[1.25] max-w-[246px] m-0 mb-1">
            Освободим ваше время,
            <br /> за счет автоматизации процессов и аналитики
          </h3>

          <p className="z-[2] text-white text-[14px] leading-[1.25] m-0">
            Возьмем на себя рутину, проконтролируем менеджеров и предоставим
            отчеты для стратегических решений
          </p>

          <div className="relative h-[130px] z-[2] max-[360px]:pt-[40px]" aria-hidden>
            <Image
              className="absolute w-[138px] h-[200px] left-1/2 translate-x-[-112%] translate-y-[18px] z-[1] max-[360px]:w-[132px] max-[360px]:h-[192px] max-[360px]:translate-x-[-110%] max-[360px]:translate-y-[14px]"
              src="/decor/phoneMobile_1.svg"
              alt="мобильный телефон 1"
              width={123}
              height={178}
            />
            <Image
              className="absolute w-[138px] h-[200px] left-1/2 translate-x-[-50%] translate-y-[-2px] z-[2] max-[360px]:w-[132px] max-[360px]:h-[192px]"
              src="/decor/phoneMobile_2.svg"
              alt="мобильный телефон 2"
              width={123}
              height={178}
            />
            <Image
              className="absolute w-[138px] h-[200px] left-1/2 translate-x-[8%] translate-y-[-12px] z-[3] max-[360px]:w-[132px] max-[360px]:h-[192px] max-[360px]:translate-x-[6%] max-[360px]:translate-y-[-10px]"
              src="/decor/phoneMobile_3.svg"
              alt="мобильный телефон 3"
              width={123}
              height={178}
            />
          </div>

          <ConsultCardModalClient
            text="КОНСУЛЬТАЦИЯ"
            className="!w-full !h-[52px] !rounded-full !bg-white !text-[#2F4EEA] !border-0 font-extrabold tracking-[0.02em] shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
            fullWidth
          />
        </div>
      </section>
    </>
  );
}

