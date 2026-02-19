import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import AnalyticsResult from "@/widgets/audit/ResultSection/ui/AnalyticsResult";

export function ResultSection() {
  return (
    <section className="sm:mt-20 sm:mb-20 flex flex-col gap-20">
      <div className="mb-10">
        <TitleArrow text="Что входит в наши услуги?" />
      </div>
      <div className="container">
        <AnalyticsResult />
      </div>
    </section>
  );
}
