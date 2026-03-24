import { steps } from "@/views/home/components/homeStepsSection/ui/lib";
import WorkStepsCarousel from "./WorkStepsCarousel.client";

export default function WorkSteps() {
  return (
    <div className="w-full mb-20 sm:mt-20 mt-10">
      <WorkStepsCarousel steps={steps} />
    </div>
  );
}
