import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import AnalyticsResult from "@/views/audit/components/ResultSection/ui/AnalyticsResult";

export function ResultSection() {
  return (
    <section className="sm:mt-20 sm:mb-20 flex flex-col gap-20">
      <div className="mb-10">
        <TitleArrow text="Что входит в наши услуги?" />
      </div>
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <AnalyticsResult />
      </div>
    </section>
  );
}
