import WorkSteps from "@/widgets/home/homeStepsSection/ui/WorkSteps";
import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";

export function HomeStepsSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4">
      <TitleArrow className="sm:mt-20" text="Как мы работаем?" variant="outline" />
      <WorkSteps />
    </section>
  );
}