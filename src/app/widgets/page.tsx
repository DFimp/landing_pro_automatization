import {
    WidgetsFeaturesSection,
    WidgetsFinalSection,
    WidgetsHeroSection,
    WidgetsStepsSection
} from "@/widgets/widgets";


export default function Widgets() {
    return (
        <main className="widgets py-20 space-y-20">
            <WidgetsHeroSection />
            <WidgetsFeaturesSection />
            <WidgetsStepsSection />
            <WidgetsFinalSection />
        </main>
    );
}
