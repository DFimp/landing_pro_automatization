import {
  HomeHeroSection,
  HomeQuickLinksSection,
  HomeAboutSection,
  HomeProblemSection,
  HomeStepsSection,
} from "@/views/home/components";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import { OrganizationSchemaTag, ORGANIZATION_DATA } from "@/shared/lib/seo";
import { HOME_PAGE_COPY } from "@/views/home/content";

export default HomePageContent;

function HomePageContent() {
  return (
    <>
      <OrganizationSchemaTag data={ORGANIZATION_DATA} />
      <main className="space-y-12 pb-14 pt-10 sm:space-y-20 sm:pb-20 sm:pt-20">
        <HomeHeroSection />
        <HomeQuickLinksSection />
        <HomeAboutSection />
        <HomeProblemSection />
        <HomeStepsSection />
        <ConsultCard
          title={HOME_PAGE_COPY.consult.title}
          description={HOME_PAGE_COPY.consult.description}
          buttonText={HOME_PAGE_COPY.consult.cta}
        />
      </main>
    </>
  );
}
