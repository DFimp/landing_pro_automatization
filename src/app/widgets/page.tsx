import IndustryCards from "@/widgets/industry/IndustryCards";
import FeaturesList from "@/widgets/feature/FeatureList";
import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";
import WorkSteps from "@/widgets/workSteps/WorkSteps";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";


export default function Widgets() {
    const title = "Управление продажами с нуля: комплексное внедрение amoCRM";

    return (
        <main className="widgets py-20">
            <div className="widgets__container container space-y-20">
                <h2 className="text-h2 font-bold max-w-4xl">
                    {title}
                </h2>
                <StickyInfo
                    text="amoCRM предлагает широкий спектр функций, которые помогают управлять продажами,
                    автоматизировать процессы и улучшать взаимодействие с клиентами."
                />
                <FeaturesList />
                <IndustryCards />
            </div>

            <WorkSteps />
            <div className="container">
                <ConsultCard />
            </div>
        </main>
    );
}
