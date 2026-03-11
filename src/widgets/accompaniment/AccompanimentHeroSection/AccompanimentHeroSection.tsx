import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

export const AccompanimentHeroSection = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-[1200px] px-4 flex flex-col gap-5 sm:gap-20">
        <h1 className="mt-4 sm:mt-0 sm:text-h2 text-white sm:font-bold text-2xl font-semibold">
          Сопровождение
        </h1>

        <p className="sm:text-h4 text-[14px] text-white font-normal sm:mb-20 mb-7">
          <span className="font-bold">Позаботимся</span> о том, чтобы amoCRM{" "}
          <span className="sm:font-bold">работала как часы</span>: возьмем на себя
          доработку и полное техническое сопровождение.
        </p>
      </div>

      <ScrollReveal
        as="div"
        variant="slideInRight"
        xFrom={260}
        yFrom={0}
        blurPx={0}
        durationMs={800}
        amount={0.35}
      >
        <StickyInfo
          text="<b>CRM</b> — это основа вашего бизнеса. Любые сбои в её работе напрямую влияют на его эффективность."
          left={false}
          className="ml-auto max-w-[355px] sm:max-w-9999"
        />
      </ScrollReveal>
    </section>
  );
};
