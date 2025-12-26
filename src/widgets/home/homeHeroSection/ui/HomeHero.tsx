import Image from "next/image";
import HeroActions from "./HeroActions";

const HomeHero = () => {
  return (
    <section className="container sm:flex justify-between items-center">
      <div className="space-y-9">
        <h1 className="sm:text-h3 text-2xl font-semibold">
          Ваш эксперт по amoCRM
        </h1>

        <h3 className="sm:text-h4 text-lg font-normal max-w-[506px] -mb-0 sm:mb-9">
          от консультации в решении простых задач до полной автоматизации
          бизнес-процессов.
        </h3>

        <div className="w-90 hidden sm:block">
          <HeroActions />
        </div>
      </div>

      <Image
        className="ml-auto w-[240px] h-[210px] sm:w-[580px] sm:h-[464px]"
        src="/laptop.webp"
        alt="Laptop"
        width={580}
        height={464}
        priority
      />
    </section>
  );
};

export default HomeHero;
