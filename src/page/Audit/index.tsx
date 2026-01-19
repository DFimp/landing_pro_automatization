import {
  StepsSection,
  FinalSection,
  HeroSection,
  ResultSection,
  DeliverablesSection,
} from "@/widgets/audit";
import { ServiceSchemaTag } from "@/shared/lib/seo";

export default function Audit() {
  return (
    <>
      <ServiceSchemaTag
        data={{
          serviceType: "Консалтинг и аудит amoCRM",
          name: "Аудит amoCRM",
          description: "Полный аудит настройки amoCRM: воронки, интеграции, автоматизация. Выявим ошибки и дадим рекомендации.",
        }}
      />
      <main className="sm:pb-20 sm:pt-20">
        <HeroSection />
        <StepsSection />
        <ResultSection />
        <DeliverablesSection />
        <FinalSection />
      </main>
    </>
  );
}
