import WidgetTariffs from "./WidgetTariffs";
import styles from "./WidgetTariffsSection.module.css";

type WidgetTariffsSectionProps = {
  widgetId: string;
};

export default function WidgetTariffsSection({
  widgetId,
}: WidgetTariffsSectionProps) {
  return (
    <section className="bg-white mb-10 mt-8 max-[768px]:mb-8 max-[768px]:mt-6">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="mx-auto w-full max-w-[960px]">
          <div
            className={`${styles.tariffsCard} relative overflow-hidden rounded-[30px] border border-[#D9E4FF] px-5 py-6 text-white shadow-[0_26px_62px_rgba(21,51,168,0.24)] sm:px-8 sm:py-8`}
            style={{
              background:
                "linear-gradient(132deg,#132544 0%,#2242bc 42%,#3760e7 74%,#8aa8ff 132%)",
              backgroundColor: "#132544",
            }}
          >
            <div
              className={`${styles.glowLeft} pointer-events-none absolute -left-10 -bottom-14 h-[190px] w-[190px] rounded-full bg-white/14 blur-3xl sm:h-[230px] sm:w-[230px]`}
              aria-hidden
            />
            <div
              className={`${styles.glowRight} pointer-events-none absolute -right-14 -top-16 h-[220px] w-[220px] rounded-full border border-white/20`}
              aria-hidden
            />
            <div className={styles.beam} aria-hidden />

            <div className="relative">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/72 sm:text-[13px]">
                Тарифы
              </p>
              <h3 className="mt-2 text-[clamp(22px,3vw,34px)] font-semibold leading-[1.08]">
                Стоимость подписки на виджет
              </h3>

              <WidgetTariffs
                widgetId={widgetId}
                className="mt-5 !w-full !rounded-[18px] !border !border-white/18 !bg-white/[0.08] !px-4 !pb-3.5 !pt-4 sm:mt-6 sm:!px-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
