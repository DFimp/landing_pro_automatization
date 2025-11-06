import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";

export function HeroSection() {
  return (
    <section className="flex flex-col sm:gap-20 gap-5">
      <h1 className="sm:text-h2 text-2xl font-semibold container sm:font-bold sm:max-w-4xl">
        Аудит и предпроектная подготовка
      </h1>

      <StickyInfo
        className="max-w-[355px] sm:max-w-[760px]"
        text="Начнём проект с надёжного фундамента"
      />

      <div className="container">
        <h2 className=" font-normal sm:text-h5 max-w-135">
          Мы анализируем текущее состояние вашего бизнеса, выявляем проблемы и
          разрабатываем решения, чтобы ваш проект начался без рисков и лишних
          затрат.
        </h2>
      </div>

      <div className="container sm:grid sm:grid-cols-[auto_800px]">
        <div className="col-start-2">
          <h5 className="sm:text-h1 text-[64px] font-bold text-blue text-left leading-[1.0] sm:leading-[1.5] mt-5">
            Почему это важно?
          </h5>
        </div>
      </div>
    </section>
  );
}
