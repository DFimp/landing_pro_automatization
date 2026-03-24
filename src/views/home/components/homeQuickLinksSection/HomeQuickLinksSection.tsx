import Link from "next/link";
import clsx from "clsx";
import type { CSSProperties } from "react";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import { Container } from "@/shared/ui/layout";
import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import { HOME_PAGE_QUICK_LINKS } from "@/views/home/content";

export function HomeQuickLinksSection() {
  return (
    <Container as="section" padding="none" className="px-4 sm:px-0 space-y-5 sm:space-y-10">
      <ScrollReveal as="div" variant="wipe" yFrom={10} durationMs={650}>
        <h2 className="block sm:hidden text-2xl font-semibold">
          Чем мы можем помочь вашему бизнесу
        </h2>

        <div className="hidden sm:block">
          <TitleArrow text="Чем мы можем помочь вашему бизнесу" />
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="ul"
        className="grid gap-4 sm:grid-cols-2 sm:gap-6"
        staggerChildren
        variant="bubbleSoft"
        durationMs={700}
        delayMs={60}
        staggerMs={90}
      >
        {HOME_PAGE_QUICK_LINKS.map((item, index) => (
          <li
            key={item.title}
            data-sr-item
            style={{ "--i": index } as CSSProperties}
            className={clsx(
              "rounded-[32px] border p-6 sm:min-h-[320px] sm:p-8",
              "flex flex-col gap-5 sm:gap-6",
              item.accentClassName
            )}
          >
            <div className="space-y-3">
              <span
                className={clsx(
                  "inline-flex rounded-full border px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em]",
                  index === 0 ? "border-white/20 bg-white/10" : "border-[#C9D8FF] bg-[#EEF4FF]"
                )}
              >
                {item.eyebrow}
              </span>

              <h3 className="text-[24px] font-semibold leading-tight sm:text-h4">
                {item.title}
              </h3>
            </div>

            <p
              className={clsx(
                "max-w-[34rem] text-[15px] leading-7 sm:text-base",
                index === 0 ? "text-white/88" : "text-black/70"
              )}
            >
              {item.description}
            </p>

            <Link
              href={item.href}
              className={clsx(
                "mt-auto inline-flex w-fit rounded-full px-5 py-3 text-[13px] font-semibold tracking-[0.04em] transition-transform duration-200 hover:-translate-y-[1px]",
                index === 0
                  ? "bg-white text-[#1B46D4]"
                  : "bg-[#1B46D4] text-white shadow-[0_12px_30px_rgba(27,70,212,0.24)]"
              )}
            >
              {item.action}
            </Link>
          </li>
        ))}
      </ScrollReveal>
    </Container>
  );
}
