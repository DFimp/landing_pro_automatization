import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";
import FeaturesList from "@/widgets/widgets/widgetsFeaturesSection/ui/FeatureList";
import IndustryCards from "@/widgets/widgets/widgetsFeaturesSection/ui/IndustryCards";

export function WidgetsFeaturesSection() {
    return (
        <section className="space-y-20">
            <StickyInfo
                className="max-w-[1250px]"
                text="amoCRM предлагает широкий спектр функций, которые помогают управлять продажами,
                    автоматизировать процессы и улучшать взаимодействие с клиентами."
            />
            <div className="container">
                <FeaturesList />
                <IndustryCards />
            </div>
        </section>
    );
}
