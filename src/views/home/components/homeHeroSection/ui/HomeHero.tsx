import Image from "next/image";
import HeroActions from "./HeroActions";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import { Container } from "@/shared/ui/layout";
import { HOME_PAGE_COPY } from "@/views/home/content";
import styles from "./HomeHero.module.css";

const HomeHero = () => {
  const { hero } = HOME_PAGE_COPY;

  return (
    <>
      <Container as="section" padding="none" className="mb-6 sm:mb-10">
        <ScrollReveal
          as="div"
          className={`${styles.introCard} max-w-[760px] overflow-hidden rounded-[28px] border border-[#D9E4FF] bg-[linear-gradient(180deg,#F8FBFF_0%,#EEF4FF_100%)] px-5 py-4 shadow-[0_18px_48px_rgba(55,96,231,0.08)] sm:px-6 sm:py-5`}
          variant="wipe"
          yFrom={12}
          scaleFrom={0.985}
          blurPx={0}
          durationMs={620}
          amount={0.18}
        >
          <h2 className={`${styles.title} max-w-[520px] text-[15px] font-semibold leading-6 sm:text-[18px]`}>
            {hero.introTitle}
          </h2>

          <div className={`${styles.line} mt-3 h-px w-full max-w-[240px] bg-[linear-gradient(90deg,rgba(55,96,231,0.55)_0%,rgba(55,96,231,0)_100%)]`} />

          <p className={`${styles.body} mt-3 max-w-[680px] text-[14px] leading-6 text-[#3760E7] sm:text-[15px]`}>
            {hero.introDescription}
          </p>
        </ScrollReveal>
      </Container>

      <Container
        as="section"
        padding="none"
        className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="space-y-8">
          <ScrollReveal as="h1" variant="wipe" yFrom={8} durationMs={650}>
            <span className="block max-w-[640px] text-2xl font-semibold leading-tight sm:text-h3">
              {hero.title}
            </span>
          </ScrollReveal>

          <ScrollReveal
            as="p"
            variant="wipe"
            yFrom={10}
            durationMs={700}
            delayMs={80}
          >
            <span className="block max-w-[560px] text-lg leading-8 font-normal sm:text-h4">
              {hero.description}
            </span>
          </ScrollReveal>

          <ScrollReveal
            as="div"
            className="w-full sm:w-[360px]"
            yFrom={22}
            scaleFrom={0.98}
            blurPx={0}
            durationMs={650}
            delayMs={140}
          >
            <HeroActions text={hero.cta} className="!w-full sm:!w-auto" />
          </ScrollReveal>
        </div>

        <ScrollReveal
          as="div"
          className="ml-auto flex justify-end"
          variant="tilt"
          xFrom={36}
          yFrom={0}
          scaleFrom={0.98}
          blurPx={12}
          durationMs={800}
          delayMs={120}
        >
          <Image
            className="h-auto w-[280px] sm:w-[580px]"
            src="/decor/laptop.jpeg"
            alt="Интерфейс amoCRM на ноутбуке"
            width={580}
            height={464}
            priority
          />
        </ScrollReveal>
      </Container>
    </>
  );
};

export default HomeHero;
