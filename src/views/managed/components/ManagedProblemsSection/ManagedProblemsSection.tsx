import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import ProblemsGrid from "@/views/managed/components/ManagedProblemsSection/ui/ProblemsGrid";

export function ManagedProblemsSection() {
  return (
    <section className="flex flex-col sm:gap-20 gap-10">
      <TitleArrow
        className="sm:mt-40 mt-10 sm:text-2xl text-[14px]"
        text="Вот часть распространенных проблем, которые влияют на качество работы с клиентами"
        variant="secondary"
        bold={false}
      />
      <ProblemsGrid />
    </section>
  );
}
