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
    <main id="home" className="sm:pb-20 sm:pt-20 space-y-10">
      <HomeHeroSection />
      <HomeServicesSection />
      <HomeContainerSection />
      <HomeFeaturesSection />
      <HomeStepsSection />
      <HomeConsultSection />
    </main>
  );
}
