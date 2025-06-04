import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import AnalyticsResult from "@/widgets/analytic/analyticsResultSection/ui/AnalyticsResult";

export function AnalyticsResultSection() {
    return (
        <section className='mt-20 mb-20 flex flex-col gap-20'>
            <div className="container mb-10">
                <TitleArrow text="Что входит в наши услуги?" link="/" />
            </div>
            <AnalyticsResult />
        </section>
    );
}
