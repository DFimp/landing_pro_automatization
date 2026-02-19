import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import { AnimatedResultsList } from "@/widgets/audit/DeliverablesSection/ui/AnimatedResultList";

export function DeliverablesSection() {
  return (
    <section className="my-10 sm:my-20">
      <div className="mb-10">
        <TitleArrow text="Что вы получите в результате?" />
      </div>
      <div className="container">
        <AnimatedResultsList />
      </div>
    </section>
  );
}
