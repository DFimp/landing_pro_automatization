import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import { AnimatedResultsList } from "@/widgets/audit/DeliverablesSection/ui/AnimatedResultList";

export function DeliverablesSection() {
  return (
    <section>
      <div className="sm:container my-10">
        <TitleArrow text="Что вы получите в результате?" />
      </div>
      <AnimatedResultsList />
    </section>
  );
}
