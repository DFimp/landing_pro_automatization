import { Card } from "@/shared/ui/Card/Card";
import { steps } from "@/widgets/home/homeStepsSection/ui/lib";
import WorkStepsDrag from "./WorkStepsDrag.client";

export default function WorkSteps() {
  return (
    <div className="w-full overflow-hidden mb-20 sm:mt-20 mt-10">
      <WorkStepsDrag>
        <ul className="flex sm:flex-row flex-col gap-4 snap-x snap-mandatory select-none">
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
          <div className="shrink-0 min-w-[175px]" />
        </ul>
      </WorkStepsDrag>
    </div>
  );
}
