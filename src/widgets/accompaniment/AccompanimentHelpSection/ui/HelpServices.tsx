"use client";

import Image from "next/image";
import { useState } from "react";
import { services } from "@/widgets/accompaniment/AccompanimentHelpSection/ui/lib";
import * as motion from "motion/react-client";
import { detectMobile } from "@/shared/utils/detectMobile";

export default function HelpServices() {
  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    Array(services.length).fill(false)
  );
  const { isMobileView } = detectMobile();
  const [autoFlipped, setAutoFlipped] = useState(true);

  const handleClick = (index: number) => {
    setFlippedStates((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });

    if (index === 0) {
      setAutoFlipped(false);
    }
  };

  return (
    <div className="flex flex-wrap gap-12 mb-20 container">
      {services.map((service, index) => {
        const isFlipped = flippedStates[index];

        return (
          <ul
            key={index}
            onClick={() => handleClick(index)}
            className="relative w-[550px] sm:h-[515px] h-[302px] perspective cursor-pointer"
          >
            <motion.li
              className="relative w-full h-full rounded-[60px] sm:rounded-3xl overflow-hidden"
              style={{ background: "rgba(0, 0, 0, 0.3)" }}
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onViewportEnter={() => {
                if (index === 0 && autoFlipped) {
                  setFlippedStates((prev) => {
                    const newState = [...prev];
                    newState[0] = true;
                    return newState;
                  });
                }
              }}
              viewport={{ once: true, amount: 0.55 }} 
            >
              <motion.div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: isFlipped ? 0.9 : 0.45 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background:
                    "radial-gradient(420px 300px at 75% 25%, rgba(55, 96, 231, 0.32), transparent 55%)",
                }}
              />

              {/* Front */}
              <motion.div
                style={{
                  boxShadow: isMobileView
                    ? "0 4px 4px #3760E780"
                    : "0 0 15px rgba(55, 96, 231, 0.5)",
                }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center bg-transparent sm:rounded-3xl rounded-[60px] px-20 py-15 space-y-3"
                animate={{
                  opacity: isFlipped ? 0 : 1,
                  x: isFlipped ? -34 : 0,
                  scale: isFlipped ? 0.985 : 1,
                  filter: isFlipped ? "blur(8px)" : "blur(0px)",
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={service.image}
                  alt="помощь"
                  width={isMobileView ? 115 : 230}
                  height={isMobileView ? 115 : 230}
                />
                <h4 className="text-h4 font-bold text-white">{service.title}</h4>
              </motion.div>

              {/* Back */}
              <motion.div
                style={{ boxShadow: "0 0 15px rgba(55, 96, 231, 0.5)" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center bg-transparent sm:rounded-3xl rounded-[60px] sm:px-20 px-10 py-15 space-y-3"
                animate={
                  isFlipped
                    ? {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        clipPath: "circle(150% at 50% 50%)",
                      }
                    : {
                        opacity: 0,
                        x: 26,
                        scale: 0.99,
                        filter: "blur(10px)",
                        clipPath: "circle(0% at 72% 30%)",
                      }
                }
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={service.backside.image}
                  alt="назад"
                  width={isMobileView ? 70 : 140}
                  height={isMobileView ? 70 : 140}
                />
                <h4 className="sm:text-h5 sm:font-normal font-semibold text-white sm:mb-10">
                  {service.backside.title}
                </h4>
                <ul className="text-white text-[12px] sm:text-base list-disc text-left">
                  {service.backside.fixes.map((fix: string, i: number) => (
                    <li key={i}>{fix}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.li>
          </ul>
        );
      })}
    </div>
  );
}
