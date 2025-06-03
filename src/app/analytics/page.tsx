import {
    AnalyticsStepsSection,
    AnalyticsFinalSection,
    AnalyticsHeroSection,
    AnalyticsResultSection,
    AnalyticsDeliverablesSection
} from "@/widgets/analytic";


export default function Analytics() {

    return (
        <main className='analytics py-20 space-y-20'>
            <AnalyticsHeroSection />
            <AnalyticsStepsSection />
            <AnalyticsResultSection />
            <AnalyticsDeliverablesSection />
            <AnalyticsFinalSection />
        </main>
    );
}
