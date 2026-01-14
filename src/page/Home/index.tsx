import {
  HomeHeroSection,
  HomeServicesSection,
  HomeContainerSection,
  HomeFeaturesSection,
  HomeStepsSection,
} from "@/widgets/home";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import { OrganizationSchemaTag, ORGANIZATION_DATA } from "@/shared/lib/seo";

export default function Home() {
  return (
    <>
      <OrganizationSchemaTag data={ORGANIZATION_DATA} />
      <main className="sm:pb-20 sm:pt-20 space-y-10">
        <HomeHeroSection />
        <HomeServicesSection />
        <HomeContainerSection />
        <HomeFeaturesSection />
        <HomeStepsSection />
        <ConsultCard />
      </main>
    </>
  );
}
