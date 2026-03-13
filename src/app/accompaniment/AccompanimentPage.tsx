import {
  AccompanimentHeroSection,
  AccompanimentScrumSection,
  AccompanimentHelpSection,
  AccompanimentProblemsSection,
  AccompanimentTariffsSection,
} from "@/widgets/accompaniment";
import { ServiceSchemaTag } from "@/shared/lib/seo";

export default function Accompaniment() {
  return (
    <>
      <ServiceSchemaTag
        data={{
          serviceType: "Техподдержка и сопровождение amoCRM",
          name: "Сопровождение amoCRM",
          description:
            "Профессиональное сопровождение amoCRM: техподдержка, консультации, доработки. Быстрое решение проблем.",
        }}
      />
      <main
        id="accompaniment"
        className="sm:pb-20 pb-10 sm:pt-20 overflow-hidden bg-[linear-gradient(135deg,#000000_0%,#1a0a2e_25%,#16213e_50%,#0f3460_75%,#533483_100%)]"
      >
        <AccompanimentHeroSection />
        <AccompanimentProblemsSection />
        <AccompanimentHelpSection />
        <AccompanimentScrumSection />
        <AccompanimentTariffsSection />
      </main>
    </>
  );
}
