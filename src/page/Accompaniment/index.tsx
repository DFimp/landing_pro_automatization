import {
  AccompanimentHeroSection,
  AccompanimentScrumSection,
  AccompanimentHelpSection,
  AccompanimentProblemsSection,
  AccompanimentTariffsSection,
} from "@/widgets/accompaniment";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import "./style.css";

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
        className="sm:pb-20 pb-10 sm:pt-20 overflow-hidden"
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
