import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import { AnimatedResultsList } from "@/widgets/audit/DeliverablesSection/ui/AnimatedResultList";

export function DeliverablesSection() {
  return (
    <section>
      <div className="container">
        <TitleArrow text="Что вы получите в результате?" link="/" />
      </div>
      <AnimatedResultsList />
    </section>
  );
}
