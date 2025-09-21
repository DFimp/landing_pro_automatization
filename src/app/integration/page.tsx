import {
    HomeConsultSection,
    HomeContainerSection,
    HomeFeaturesSection,
    HomeStepsSection,
} from "@/widgets/home";

export default function Integration() {
    return (
        <main id="integration" className="sm:pb-20 pt-20 space-y-10">
            <HomeContainerSection />
            <HomeFeaturesSection />
            <HomeStepsSection />
            <HomeConsultSection />
        </main>
    );
}
