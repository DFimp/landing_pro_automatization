import Image from "next/image";
import HeroActions from "./HeroActions";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import { Container } from "@/shared/ui/layout";
import { HOME_PAGE_COPY } from "@/views/home/content";

const HomeHero = () => {
  const { hero } = HOME_PAGE_COPY;

  return (
    <Container
      as="section"
      padding="none"
      className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
    >
      <div className="space-y-6 px-1 sm:space-y-8 sm:px-0">
        <ScrollReveal as="h1" variant="wipe" yFrom={8} durationMs={650}>
          <span className="block max-w-[11ch] text-[34px] font-semibold leading-[1.04] tracking-[-0.03em] sm:max-w-[640px] sm:text-h3 sm:leading-tight sm:tracking-normal">
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
          <span className="block max-w-[21rem] text-[17px] font-normal leading-7 text-black/76 sm:max-w-[560px] sm:text-h4 sm:leading-8 sm:text-black">
            {hero.description}
          </span>
        </ScrollReveal>

        <ScrollReveal
          as="div"
          className="w-full max-w-[360px] sm:w-[360px]"
          yFrom={22}
          scaleFrom={0.98}
          blurPx={0}
          durationMs={650}
          delayMs={140}
        >
          <HeroActions
            text={hero.cta}
            className="!w-full !justify-center !rounded-full !px-6 !py-4 !text-[16px] !leading-none sm:!w-auto sm:!px-7 sm:!py-2"
          />
        </ScrollReveal>
      </div>

      <ScrollReveal
        as="div"
        className="relative mx-auto flex w-full max-w-[380px] justify-center overflow-hidden rounded-[30px] border border-[#DCE6FF] bg-[radial-gradient(130%_110%_at_50%_0%,#F3F7FF_0%,#FFFFFF_68%)] px-3 py-4 shadow-[0_18px_50px_rgba(55,96,231,0.12)] sm:ml-auto sm:block sm:w-auto sm:max-w-none sm:overflow-visible sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none"
        variant="tilt"
        xFrom={36}
        yFrom={0}
        scaleFrom={0.98}
        blurPx={12}
        durationMs={800}
        delayMs={120}
      >
        <span
          className="absolute inset-x-10 bottom-2 h-10 rounded-full bg-[#D7E5FF] blur-2xl sm:hidden"
          aria-hidden
        />

        <Image
          className="relative z-[1] h-auto w-full max-w-[320px] sm:w-[580px] sm:max-w-none"
          src="/decor/laptop.jpeg"
          alt="Интерфейс amoCRM на ноутбуке"
          width={580}
          height={464}
          priority
        />
      </ScrollReveal>
    </Container>
  );
};

export default HomeHero;
