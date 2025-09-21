"use client"
import { isMobile } from "@/shared/utils/isMobile";
import {
    HomeConsultSection,
    HomeHeroSection,
    HomeServicesSection,
    HomeContainerSection,
    HomeFeaturesSection,
    HomeStepsSection,
} from "@/widgets/home";

export default function Home() {
    return (
        <main id="home" className="sm:pb-20 pt-20 space-y-10">
            <HomeHeroSection />
            <HomeServicesSection />
            { !isMobile() && <HomeContainerSection />}
            { !isMobile() && <HomeFeaturesSection />}
            { !isMobile() && <HomeStepsSection />}
            <HomeConsultSection />
        </main>
    );
}
