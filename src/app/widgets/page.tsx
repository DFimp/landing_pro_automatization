import {
    WidgetsFeaturesSection,
    WidgetsFinalSection,
    WidgetsHeroSection,
    WidgetsStepsSection
} from "@/widgets/widgets";


export default function Widgets() {
    return (
        <main id="widgets" className="pb-20 pt-20">
            <WidgetsHeroSection />
            <WidgetsFeaturesSection />
            <WidgetsStepsSection />
            <WidgetsFinalSection />
        </main>
    );
}
