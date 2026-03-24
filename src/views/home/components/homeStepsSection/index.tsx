import type { CSSProperties } from "react";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import { Container } from "@/shared/ui/layout";
import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import { HOME_PAGE_COPY } from "@/views/home/content";

export function HomeStepsSection() {
  const { steps } = HOME_PAGE_COPY;

  return (
    <Container as="section" className="space-y-5 sm:space-y-10">
      <ScrollReveal as="div" variant="wipe" yFrom={10} durationMs={650}>
        <div className="hidden sm:block">
          <TitleArrow text={steps.title} variant="outline" />
        </div>

        <h2 className="block text-2xl font-semibold sm:hidden">{steps.title}</h2>
      </ScrollReveal>

      <ScrollReveal
        as="ul"
        className="grid gap-4 sm:grid-cols-2"
        staggerChildren
        variant="bubbleSoft"
        durationMs={700}
        delayMs={40}
        staggerMs={100}
      >
        {steps.items.map((item, index) => (
          <li
            key={item.title}
            data-sr-item
            style={{ "--i": index } as CSSProperties}
            className="rounded-[34px] bg-[#111111] px-6 py-6 text-white shadow-[0_20px_54px_rgba(0,0,0,0.22)] sm:min-h-[320px] sm:px-8 sm:py-8"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[12px] font-semibold text-white/82 sm:text-[13px]">
                {item.step}
              </span>
              <span
                className="h-3 w-3 rounded-full bg-[#3760E7] shadow-[0_0_16px_rgba(55,96,231,0.9)]"
                aria-hidden
              />
            </div>

            <h3 className="mt-5 max-w-[28rem] text-[24px] font-semibold leading-tight sm:text-h4">
              {item.title}
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-white/72 sm:text-base">
              {item.description}
            </p>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-white/6 px-4 py-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#9EB2FF]">
                Результат
              </p>
              <p className="mt-2 text-[15px] leading-6 text-white/88">{item.result}</p>
            </div>
          </li>
        ))}
      </ScrollReveal>
    </Container>
  );
}
