import { steps } from "@/views/audit/components/StepsSection/ui/lib";
import AnalyticsStepMotion from "./AnalyticsStepMotion.client";

export default function AnalyticsSteps() {
  return (
    <ul className="my-[40px]">
      {steps.map((step, index) => (
        <AnalyticsStepMotion key={index} index={index}>
          <div className="flex items-center sm:gap-5 gap-3">
            <h2 className="text-blue font-semibold sm:text-[64px] text-[24px]">
              {index + 1}
            </h2>

            <div className="w-full">
              <h4 className="sm:font-medium font-semibold sm:text-h4 mb-1">
                {step.title}
              </h4>
              <p className="font-normal sm:text-h5 leading-[1.0] sm:leading-[1.5]">
                {step.text}
              </p>
            </div>
          </div>
        </AnalyticsStepMotion>
      ))}
    </ul>
  );
}
