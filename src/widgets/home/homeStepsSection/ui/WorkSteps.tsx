import { Card } from "@/shared/ui/Card/Card";
import { steps } from "@/widgets/home/homeStepsSection/ui/lib";
import WorkStepsScrollStory from "./WorkStepsScrollStory.client";

export default function WorkSteps() {
  return (
    <div className="w-full mb-20 sm:mt-20 mt-10">
      <div className="hidden sm:block">
        <WorkStepsScrollStory steps={steps} />
      </div>

      <div className="sm:hidden">
        <ul className="flex flex-col gap-4 select-none">
          {steps.map((step, index) => (
            <Card
              variant="expandable"
              key={index}
              index={index}
              content={step.content}
              description={step.description}
              result={step.result}
              isFirst={index === 0}
              isLast={index === steps.length - 1}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
