import {
  HomeHeroSection,
  HomeServicesSection,
  HomeContainerSection,
  HomeFeaturesSection,
  HomeStepsSection,
} from "@/views/home/components";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import { OrganizationSchemaTag, ORGANIZATION_DATA } from "@/shared/lib/seo";

export default HomePageContent;

function HomePageContent() {
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
