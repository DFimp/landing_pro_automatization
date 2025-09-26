"use client"

import {
    HomeConsultSection,
    HomeHeroSection,
    HomeServicesSection,
    HomeContainerSection,
    HomeFeaturesSection,
    HomeStepsSection,
} from "@/widgets/home";
import { detectMobile } from "@/shared/utils/detectMobile";

export default function Home() {
    const { isMobileView } = detectMobile()
    return (
        <main id="home" className="sm:pb-20 sm:pt-20 space-y-10">
            <HomeHeroSection />
            <HomeServicesSection />
            { !isMobileView && <HomeContainerSection />}
            { !isMobileView && <HomeFeaturesSection />}
            { !isMobileView && <HomeStepsSection />}
            <HomeConsultSection />
        </main>
    );
}
