import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import AnalyticsResult from "@/widgets/analytic/analyticsResultSection/ui/AnalyticsResult";

export function AnalyticsResultSection() {
    return (
        <>
            <div className="container mb-10">
                <TitleArrow text="Что входит в наши услуги?" link="/" />
            </div>
            <AnalyticsResult />
        </>
    );
}
