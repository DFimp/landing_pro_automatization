import {
    AnalyticsStepsSection,
    AnalyticsFinalSection,
    AnalyticsHeroSection,
    AnalyticsResultSection,
    AnalyticsDeliverablesSection
} from "@/widgets/analytic";


export default function Audit() {

    return (
        <main id="analytics" className='pb-20 pt-20'>
            <AnalyticsHeroSection />
            <AnalyticsStepsSection />
            <AnalyticsResultSection />
            <AnalyticsDeliverablesSection />
            <AnalyticsFinalSection />
        </main>
    );
}
