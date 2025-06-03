import {
    AnalyticsStepsSection,
    AnalyticsFinalSection,
    AnalyticsHeroSection,
    AnalyticsResultSection,
    AnalyticsDeliverablesSection
} from "@/widgets/analytic";
import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";


export default function Analytics() {

    return (
        <main className='analytics py-20 space-y-20'>
            <AnalyticsHeroSection />
            <StickyInfo text="Начнём проект с надёжного фундамента" />
            <AnalyticsStepsSection />
            <AnalyticsResultSection />
            <AnalyticsDeliverablesSection />
            <AnalyticsFinalSection />
        </main>
    );
}
