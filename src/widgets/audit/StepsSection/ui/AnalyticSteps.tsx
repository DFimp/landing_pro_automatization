"use client"

import { steps } from "@/widgets/audit/StepsSection/ui/lib";
import * as motion from "motion/react-client";
import { isMobile } from "@/shared/utils/isMobile";

export default function AnalyticsSteps() {
  return (
    <ul className="my-[40px]">
      {steps.map((step, index) => (
        <motion.li
          key={index}
          initial={{ x: isMobile() ? 0 : -250, opacity:  isMobile() ? 1 : 0 }}
          whileInView={{ x: isMobile() ? 0 : 40 + 200 * index, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="mb-5"
        >
          <div className="flex items-center sm:gap-5 gap-3" >
            <h2
              className="text-blue font-semibold sm:text-[64px] text-[24px]"
            >
              {index + 1}
            </h2>
            <div className="w-full">
              <h4 className="sm:font-medium font-semibold sm:text-h4 mb-1">{step.title}</h4>
              <p className="font-normal sm:text-h5 leading-[1.0] sm:leading-[1.5]">{step.text}</p>
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
