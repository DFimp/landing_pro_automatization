import ConsultCardModalClient from "./ConsultCardModal.client";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import styles from "./ConsultCard.module.css";

interface ConsultCardProps {
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
}

const DEFAULT_TITLE =
  "Освободим ваше время, за счет автоматизации процессов и аналитики";
const DEFAULT_DESCRIPTION =
  "Возьмем на себя рутину, проконтролируем менеджеров и предоставим отчеты для стратегических решений";
const DEFAULT_BUTTON_TEXT =
  "КОНСУЛЬТАЦИЯ";

export default function ConsultCard({
  className,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  buttonText = DEFAULT_BUTTON_TEXT,
}: ConsultCardProps) {
  return (
    <section id="card">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-0">
        <ScrollReveal
          as="div"
          className={`${styles.showcase} relative overflow-hidden rounded-[30px] border border-[#D9E4FF] bg-[linear-gradient(135deg,#132544_0%,#2143C8_42%,#3760E7_74%,#F3F7FF_160%)] px-5 py-6 shadow-[0_30px_80px_rgba(26,57,181,0.22)] sm:rounded-[40px] sm:px-8 sm:py-8 lg:px-10 lg:py-10 ${className || ""}`}
          yFrom={26}
          scaleFrom={0.97}
          blurPx={6}
          durationMs={920}
          amount={0.18}
        >
          <div
            className={`${styles.orb} ${styles.orbLeft} pointer-events-none absolute -left-14 bottom-[-110px] h-[190px] w-[190px] rounded-full bg-white/10 blur-3xl sm:h-[240px] sm:w-[240px]`}
            aria-hidden
          />
          <div
            className={`${styles.orb} ${styles.orbRight} pointer-events-none absolute -right-16 top-[-72px] h-[220px] w-[220px] rounded-full border border-white/12 sm:h-[320px] sm:w-[320px]`}
            aria-hidden
          />
          <div className={styles.beam} aria-hidden />

          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.58fr)] lg:items-end lg:gap-10">
            <div className={`${styles.left} max-w-[760px]`}>
              <h2 className={`${styles.title} max-w-[13ch] text-[28px] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:max-w-[15ch] sm:text-[46px] lg:text-[58px]`}>
                {title}
              </h2>

              <div className={`${styles.divider} mt-5 h-px w-16 bg-[linear-gradient(90deg,rgba(255,255,255,0.9),rgba(255,255,255,0))] sm:mt-7 sm:w-28`} />

              <p className={`${styles.body} mt-5 block max-w-[20rem] text-[15px] leading-[1.7] text-white/82 sm:mt-7 sm:max-w-[42rem] sm:text-[20px] sm:leading-[1.65]`}>
                {description}
              </p>

              <div className={`${styles.cta} mt-7 sm:mt-10`}>
                <ConsultCardModalClient
                  text={buttonText}
                  variant="outline"
                  className="!min-h-[52px] !w-full !justify-center !rounded-full !border-white !bg-white !px-4 !py-3 !text-center !text-[13px] !font-extrabold !leading-[1.15] !tracking-[0.01em] !text-[#1B46D4] !whitespace-normal shadow-[0_18px_38px_rgba(12,28,90,0.2)] hover:!border-white hover:!bg-[#F4F7FF] hover:!text-[#163AB8] min-[390px]:!text-[14px] sm:!min-h-[56px] sm:!w-auto sm:!px-8 sm:!text-[16px] sm:!leading-none sm:!whitespace-nowrap"
                />
              </div>
            </div>

            <div className={`${styles.panel} relative hidden min-h-[360px] lg:block`}>
              <div className="absolute right-[18px] top-[4px] h-[240px] w-[240px] rounded-[38px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] rotate-[8deg]" />
              <div className="absolute right-[120px] top-[72px] h-[220px] w-[220px] rounded-[34px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] -rotate-[10deg]" />

              <div className="absolute bottom-[112px] right-[42px] w-[252px] rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] px-6 py-6 shadow-[0_20px_50px_rgba(7,18,60,0.18),inset_0_1px_0_rgba(255,255,255,0.12)]">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-white/90" />
                  <span className="h-3 w-3 rounded-full bg-white/58" />
                  <span className="h-3 w-3 rounded-full bg-white/28" />
                </div>

                <div className={`${styles.chip} mt-5 inline-flex rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/90`}>
                  Мы вас ценим
                </div>

                <div className={`${styles.innerDivider} mt-5 h-[2px] w-28 rounded-full bg-white/78`} />

                <div className="mt-5 space-y-3">
                  <div className="h-[10px] w-full rounded-full bg-white/18" />
                  <div className="h-[10px] w-[78%] rounded-full bg-white/18" />
                  <div className="h-[10px] w-[56%] rounded-full bg-white/18" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-[22px] border border-white/10 bg-white/8 p-4">
                    <div className="h-8 w-8 rounded-full bg-white/88" />
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/8 p-4">
                    <div className="h-8 w-full rounded-full bg-white/14" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
