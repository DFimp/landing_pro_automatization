import HeroActions from "./HeroActions";
import HeroMacbookScene from "./HeroMacbookScene";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import { Container } from "@/shared/ui/layout";
import { HOME_PAGE_COPY } from "@/views/home/content";

const HomeHero = () => {
  const { hero } = HOME_PAGE_COPY;

  return (
    <Container
      as="section"
      padding="none"
      className="flex flex-col gap-6 px-4 sm:flex-row sm:items-start sm:justify-between sm:gap-0 sm:px-0"
    >
      <div className="space-y-5 sm:max-w-[620px] sm:flex-1 sm:space-y-8">
        <ScrollReveal as="h1" variant="wipe" yFrom={8} durationMs={650}>
          <span className="block max-w-none text-[31px] font-semibold leading-[1.06] tracking-[-0.03em] sm:max-w-[620px] sm:text-h3 sm:leading-tight sm:tracking-normal">
            {hero.title}
          </span>
        </ScrollReveal>

        <ScrollReveal as="p" variant="wipe" yFrom={10} durationMs={700} delayMs={80}>
          <span className="block max-w-none text-[17px] font-normal leading-7 text-black/76 sm:max-w-[560px] sm:text-h4 sm:leading-8 sm:text-black">
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
          <HeroActions
            text={hero.cta}
            className="!w-full !justify-center !rounded-full !px-6 !py-4 !text-[16px] !leading-none sm:!w-auto sm:!px-7 sm:!py-2"
          />
        </ScrollReveal>
      </div>

      <ScrollReveal
        as="div"
        className="relative mx-auto flex w-full max-w-[400px] justify-center sm:ml-auto sm:max-w-[560px] sm:flex-[0_0_560px] sm:-mt-1"
        variant="lift"
        xFrom={36}
        yFrom={10}
        scaleFrom={0.98}
        blurPx={0}
        durationMs={800}
        delayMs={120}
      >
        <HeroMacbookScene />
      </ScrollReveal>
    </Container>
  );
};

export default HomeHero;
