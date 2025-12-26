export function HeroSection() {
  return (
    <section
      className="
        container
        grid grid-cols-1 items-start gap-6
        sm:grid-cols-[1fr_auto] sm:gap-8
        px-4
      "
      style={{ marginTop: 48, marginBottom: 48 }}
    >
      <div className="sm:text-left">
        <h1 className="text-blue font-semibold leading-[1.05] text-[36px] sm:text-h1">
          Кейсы
        </h1>

        <div className="mt-1 font-extrabold text-blue text-[18px] sm:text-[43px] leading-[1.15]">
          внедрений amoCRM
        </div>

        <p className="mt-4 mx-auto sm:mx-0 max-w-[560px] text-[14px] sm:text-[18px] leading-[1.6] text-ink/80">
          Как amoCRM и облачные сервисы помогают увеличить показатели компании без
          дополнительных ресурсов. Отзывы и кейсы реальных клиентов.
        </p>
      </div>

      <div
        aria-label="логотипы клиентов"
        className="
          grid justify-items-center items-center
          grid-cols-4 gap-4
          mt-4
          sm:mt-0 sm:auto-cols-max sm:grid-flow-col sm:grid-cols-none sm:gap-7
          sm:self-center
          grayscale opacity-90
        "
      >
        <img
          src="/widgets/Cases/logos/t.png"
          alt="логотип T-банка"
          className="h-[32px] sm:h-[60px] w-auto"
        />
        <img
          src="/widgets/Cases/logos/consulting.png"
          alt="логотип Consulting"
          className="h-[32px] sm:h-[60px] w-auto"
        />
        <img
          src="/widgets/Cases/logos/rzd.png"
          alt="логотип РЖД"
          className="h-[32px] sm:h-[60px] w-auto"
        />
        <img
          src="/widgets/Cases/logos/smp.png"
          alt="логотипСМП"
          className="h-[32px] sm:h-[60px] w-auto"
        />
      </div>
    </section>
  );
}
