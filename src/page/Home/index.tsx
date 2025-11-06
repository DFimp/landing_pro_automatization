import {
  HomeHeroSection,
  HomeServicesSection,
  HomeContainerSection,
  HomeFeaturesSection,
  HomeStepsSection,
} from "@/widgets/home";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";

export default function Home() {
  return (
    <main className="sm:pb-20 sm:pt-20 space-y-10">
      <HomeHeroSection />
      <HomeServicesSection />
      <HomeContainerSection />
      <HomeFeaturesSection />
      <HomeStepsSection />
      <ConsultCard />
    </main>
  );
}
