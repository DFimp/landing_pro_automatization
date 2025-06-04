import {
    HomeConsultSection,
    HomeHeroSection,
    HomeServicesSection
} from "@/widgets/home";

export default function Home() {
    return (
        <main id="home" className="pb-20 pt-20 space-y-10">
            <HomeHeroSection />
            <HomeServicesSection />
            <HomeConsultSection />
        </main>
    );
}
