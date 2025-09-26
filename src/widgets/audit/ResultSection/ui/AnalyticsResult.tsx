"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { services } from "@/widgets/audit/ResultSection/ui/lib";
import { detectMobile } from "@/shared/utils/detectMobile";

export default function AnalyticsResult() {
  const { isMobileView } = detectMobile()
  return (
    <div className="bg-black sm:rounded-4xl rounded-[60px] sm:py-20 py-10 sm:px-53">
      <ul className="sm:container flex flex-col sm:grid sm:grid-cols-2 sm:gap-20 gap-8 px-5">
        {services.map((service, index) => (
          <motion.li
            key={index}
            className="flex sm:items-start items-center sm:gap-12 gap-4 sm:min-h-[200px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <div className="flex-shrink-0">
              <Image
                src={service.img}
                alt={service.title}
                width={isMobileView ? 42 :80}
                height={isMobileView ? 42 :80}
                className="object-contain"
              />
            </div>
            <div className="sm:space-y-5 space-y-2 text-[14px]">
              <h4 className="font-semibold sm:text-h5 text-white">
                {service.title}
              </h4>
              <ul className="list-disc text-white pl-4 sm:space-y-2">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
