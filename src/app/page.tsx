import {
    HomeConsultSection,
    HomeHeroSection,
    HomeServicesSection
} from "@/widgets/home";

export default function Home() {
    return (
        <main className="home mb-25 pt-15">
            <div className="home__container container space-y-20">
                <HomeHeroSection />
                <HomeServicesSection />
                <HomeConsultSection />
            </div>
        </main>
    );
}
