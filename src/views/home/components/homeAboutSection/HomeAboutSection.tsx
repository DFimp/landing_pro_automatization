import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import { Container } from "@/shared/ui/layout";
import { HOME_PAGE_COPY } from "@/views/home/content";
import HomeCertificateCard from "./HomeCertificateCard.client";

export function HomeAboutSection() {
  const { about } = HOME_PAGE_COPY;

  return (
    <Container
      as="section"
      className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-start"
    >
      <ScrollReveal
        as="article"
        className="rounded-[40px] border border-[#D9E4FF] bg-white px-6 py-7 shadow-[0_24px_64px_rgba(55,96,231,0.08)] sm:px-10 sm:py-10"
        yFrom={18}
        durationMs={700}
      >
        <span className="inline-flex rounded-full bg-[#EEF4FF] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#1B46D4]">
          О компании
        </span>

        <h2 className="mt-4 max-w-[780px] text-2xl font-semibold leading-tight sm:text-h2">
          {about.title}
        </h2>

        <div className="mt-6 space-y-4 text-[15px] leading-7 text-black/72 sm:text-base">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {about.facts.map((fact) => (
            <div
              key={fact}
              className="rounded-[28px] border border-[#DCE5FF] bg-[#F7FAFF] px-5 py-5"
            >
              <p className="max-w-[18rem] text-[18px] font-semibold leading-7 text-[#1B46D4] sm:text-[22px]">
                {fact}
              </p>
              <div className="mt-4 h-[2px] w-12 rounded-full bg-[#9EB2FF]" aria-hidden />
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="aside"
        className="overflow-hidden rounded-[40px] bg-[linear-gradient(180deg,#132544_0%,#0B1220_100%)] px-6 py-7 text-white shadow-[0_28px_70px_rgba(11,18,32,0.28)] sm:px-8 sm:py-8"
        yFrom={22}
        durationMs={760}
        delayMs={80}
      >
        <div className="space-y-4">
          <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/88">
            amoCRM
          </span>

          <h3 className="text-[24px] font-semibold leading-tight sm:text-h4">
            {about.certificateTitle}
          </h3>

          <p className="text-[15px] leading-7 text-white/72">
            {about.certificateDescription}
          </p>
        </div>

        <HomeCertificateCard
          title={about.certificateTitle}
          description="Сертификат официального партнёра amoCRM"
          buttonText={about.certificateButton}
        />
      </ScrollReveal>
    </Container>
  );
}
