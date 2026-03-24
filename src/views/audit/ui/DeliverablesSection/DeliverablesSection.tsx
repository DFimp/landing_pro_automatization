import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import { AnimatedResultsList } from "@/views/audit/ui/DeliverablesSection/ui/AnimatedResultList";

export function DeliverablesSection() {
  return (
    <section className="my-10 sm:my-20">
      <div className="mb-10">
        <TitleArrow text="Что вы получите в результате?" />
      </div>
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <AnimatedResultsList />
      </div>
    </section>
  );
}
