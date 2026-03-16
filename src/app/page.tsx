import type { Metadata } from "next";
import { HOME_PAGE_METADATA } from "@/shared/constants/metadata";
import {
  HomeHeroSection,
  HomeServicesSection,
  HomeContainerSection,
  HomeFeaturesSection,
  HomeStepsSection,
} from "@/widgets/home";
import ConsultCard from "@/widgets/landing/consultCard/ConsultCard";
import { OrganizationSchemaTag, ORGANIZATION_DATA } from "@/shared/lib/seo";

export const metadata: Metadata = HOME_PAGE_METADATA;

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
