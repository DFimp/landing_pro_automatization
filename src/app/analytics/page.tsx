import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";
import {TitleArrow} from "@/shared/ui/titleArrow/TitleArrow";
import AnalyticsResult from "@/widgets/AnalyticResult/AnalyticsResult";
import AnalyticsSteps from "@/widgets/analyticSteps/AnalyticSteps";
import {AnimatedResultsList} from "@/widgets/resultList/AnimatedResultList";
import WhyChooseUs from "@/widgets/whyChooseUs/WhyChooseUs";

export default  function Analytics() {
    const title: string = "Аудит и предпроектная подготовка";
    const stickyInfo: string = "Начнём проект с надёжного фундамента"

    return(
        <main className='analytics py-20 space-y-20'>
            <div className='analytics__container container space-y-20'>
                <h2 className="text-h2 font-bold max-w-4xl">
                    {title}
                </h2>

                <StickyInfo text={stickyInfo} />
                <h4 className='font-normal text-h5 max-w-135'>
                    Мы анализируем текущее состояние вашего бизнеса, выявляем проблемы и разрабатываем решения,
                    чтобы ваш проект начался без рисков и лишних затрат.
                </h4>

                <h1 className='text-h1 font-bold text-blue text-right'>
                    Почему это важно?
                </h1>


                <AnalyticsSteps />

                <div className='mb-10'>
                    <TitleArrow text="Что входит в наши услуги?" link='/'/>
                </div>
            </div>

            <AnalyticsResult />

            <div className='container'>
                <TitleArrow text="Что вы получите в результате?" link='/' />
            </div>


            <AnimatedResultsList />

            <WhyChooseUs />

            <div className='container space-y-20'>
                <ConsultCard />
            </div>
        </main>
    )
}