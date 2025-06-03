import AnalyticsSteps from "@/widgets/analytic/analyticsStepsSection/ui/AnalyticSteps";

export function AnalyticsStepsSection() {
    return (
        <section className='container'>
            <h4 className="font-normal text-h5 max-w-135">
                Мы анализируем текущее состояние вашего бизнеса, выявляем проблемы и разрабатываем решения,
                чтобы ваш проект начался без рисков и лишних затрат.
            </h4>

            <h1 className="text-h1 font-bold text-blue text-right">
                Почему это важно?
            </h1>

            <AnalyticsSteps />
        </section>
    );
}
