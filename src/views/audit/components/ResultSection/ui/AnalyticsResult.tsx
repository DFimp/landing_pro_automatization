import Image from "next/image";
import { services } from "@/views/audit/components/ResultSection/ui/lib";
import AnalyticsResultItemMotion from "./AnalyticsResultItemMotion.client";

export default function AnalyticsResult() {
  return (
    <div className="bg-black sm:rounded-4xl rounded-[60px] sm:py-20 py-10 sm:px-20 px-5">
      <ul className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-20 gap-8">
        {services.map((service, index) => (
          <AnalyticsResultItemMotion key={index} index={index}>
            <div className="flex sm:items-start items-center sm:gap-12 gap-4 sm:min-h-[200px]">
              <div className="flex-shrink-0">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain w-[42px] h-[42px] sm:w-[80px] sm:h-[80px]"
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
            </div>
          </AnalyticsResultItemMotion>
        ))}
      </ul>
    </div>
  );
}
