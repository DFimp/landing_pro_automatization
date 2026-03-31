import Image from "next/image";
import HeroActions from "./HeroActions";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import { Container } from "@/shared/ui/layout";

const HomeHero = () => {
  return (
    <Container as="section" className="sm:flex justify-between items-center">
      <div className="space-y-9">
        <ScrollReveal as="h1" variant="wipe" yFrom={8} durationMs={650}>
          <span className="sm:text-h3 text-2xl font-semibold">
            Ваш эксперт по amoCRM
          </span>
        </ScrollReveal>

        <ScrollReveal
          as="h3"
          variant="wipe"
          yFrom={10}
          durationMs={700}
          delayMs={80}
        >
          <span className="sm:text-h4 text-lg font-normal max-w-[506px] -mb-0 sm:mb-9 block">
            от консультации в решении простых задач до полной автоматизации
            бизнес-процессов.
          </span>
        </ScrollReveal>

        <ScrollReveal
          as="div"
          className="w-90 hidden sm:block"
          yFrom={22}
          scaleFrom={0.98}
          blurPx={0}
          durationMs={650}
          delayMs={140}
        >
          <HeroActions />
        </ScrollReveal>
      </div>

      <ScrollReveal
        as="div"
        className="ml-auto"
        variant="tilt"
        xFrom={36}
        yFrom={0}
        scaleFrom={0.98}
        blurPx={12}
        durationMs={800}
        delayMs={120}
      >
        <Image
          className="w-[240px] h-[210px] sm:w-[580px] sm:h-[464px]"
          src="/decor/laptop.jpeg"
          alt="ноутбук"
          width={580}
          height={464}
          priority
        />
      </ScrollReveal>
    </Container>
  );
};

export default HomeHero;
