import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";

export function AnalyticsHeroSection() {
    return (
        <section className="flex flex-col gap-20">
            <h2 className="container text-h2 font-bold max-w-4xl">
                Аудит и предпроектная подготовка
            </h2>

            <StickyInfo text="Начнём проект с надёжного фундамента" />

            <div className='container'>
                <h4 className=" font-normal text-h5 max-w-135">
                    Мы анализируем текущее состояние вашего бизнеса, выявляем проблемы и разрабатываем решения,
                    чтобы ваш проект начался без рисков и лишних затрат.
                </h4>
            </div>

            <div className="container grid grid-cols-[auto_800px]"> {/* Правая колонка 600px */}
                <div className="col-start-2">
                    <h1 className="text-h1 font-bold text-blue text-left">
                        Почему это важно?
                    </h1>
                </div>
            </div>
        </section>
    );
}
