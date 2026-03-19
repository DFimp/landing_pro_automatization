"use client";

import Image from "next/image";
import { useState } from "react";
import { services } from "@/views/managed/components/ManagedHelpSection/ui/lib";
import * as motion from "motion/react-client";
import { detectMobile } from "@/shared/utils/detectMobile";

export default function HelpServices() {
  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    Array(services.length).fill(false)
  );
  const { isMobileView } = detectMobile();
  const [autoFlipped, setAutoFlipped] = useState(true);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      scale: 0.975,
      filter: "blur(10px)",
    },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        delay: Math.min(i * 0.07, 0.28),
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  } as const;

  const frontVariants = {
    closed: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    open: {
      opacity: 0,
      x: -42,
      scale: 0.985,
      filter: "blur(10px)",
    },
  } as const;

  const backVariants = {
    closed: {
      opacity: 0,
      x: 28,
      scale: 0.99,
      filter: "blur(12px)",
      clipPath: "circle(0% at 72% 30%)",
    },
    open: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      clipPath: "circle(150% at 50% 50%)",
    },
  } as const;

  const listVariants = {
    closed: {
      transition: { staggerChildren: 0.02, staggerDirection: -1 },
    },
    open: {
      transition: { delayChildren: 0.12, staggerChildren: 0.06 },
    },
  } as const;

  const listItemVariants = {
    closed: { opacity: 0, y: 10, filter: "blur(6px)" },
    open: { opacity: 1, y: 0, filter: "blur(0px)" },
  } as const;

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
    <div className="flex flex-wrap gap-12 mb-20 mx-auto w-full max-w-[1200px] px-4">
      {services.map((service, index) => {
        const isFlipped = flippedStates[index];
        const state = isFlipped ? "open" : "closed";

        return (
          <ul
            key={index}
            onClick={() => handleClick(index)}
            className="relative w-[550px] sm:h-[515px] h-[302px] perspective cursor-pointer"
          >
            <motion.li
              className="relative w-full h-full rounded-[60px] sm:rounded-3xl overflow-hidden"
              style={{ background: "rgba(0, 0, 0, 0.3)" }}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              custom={index}
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
                animate={{ opacity: isFlipped ? 0.95 : 0.45 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background:
                    "radial-gradient(420px 300px at 75% 25%, rgba(55, 96, 231, 0.32), transparent 55%)",
                }}
              />

              <motion.div
                aria-hidden
                className="absolute -inset-10 pointer-events-none"
                animate={{
                  backgroundPositionX: isFlipped ? "140%" : "-40%",
                  opacity: isFlipped ? 0.28 : 0.12,
                }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  backgroundImage:
                    "radial-gradient(520px 420px at 78% 26%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 30%, rgba(255,255,255,0.00) 62%), linear-gradient(115deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.00) 40%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.00) 62%, rgba(255,255,255,0.00) 100%)",
                  backgroundSize: "220% 100%",
                  backgroundPositionY: "0%",
                  filter: "blur(14px)",
                  mixBlendMode: "screen",
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
                variants={frontVariants}
                animate={state}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 28,
                  mass: 0.85,
                }}
              >
                <motion.div
                  animate={{
                    scale: isFlipped ? 0.96 : 1,
                    rotate: isFlipped ? -4 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 18,
                    mass: 0.7,
                  }}
                >
                  <Image
                    src={service.image}
                    alt="помощь"
                    width={isMobileView ? 115 : 230}
                    height={isMobileView ? 115 : 230}
                  />
                </motion.div>
                <h4 className="text-h4 font-bold text-white">{service.title}</h4>
              </motion.div>

              {/* Back */}
              <motion.div
                style={{ boxShadow: "0 0 15px rgba(55, 96, 231, 0.5)" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center bg-transparent sm:rounded-3xl rounded-[60px] sm:px-20 px-10 py-15 space-y-3"
                variants={backVariants}
                animate={state}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  animate={{
                    scale: isFlipped ? 1 : 0.96,
                    rotate: isFlipped ? 0 : 6,
                    filter: isFlipped
                      ? "drop-shadow(0 14px 32px rgba(55, 96, 231, 0.28))"
                      : "drop-shadow(0 0 0 rgba(0,0,0,0))",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 210,
                    damping: 22,
                    mass: 0.8,
                  }}
                >
                  <Image
                    src={service.backside.image}
                    alt="назад"
                    width={isMobileView ? 70 : 140}
                    height={isMobileView ? 70 : 140}
                  />
                </motion.div>
                <h4 className="sm:text-h5 sm:font-normal font-semibold text-white sm:mb-10">
                  {service.backside.title}
                </h4>
                <motion.ul
                  className="text-white text-[12px] sm:text-base list-disc text-left"
                  variants={listVariants}
                  animate={state}
                  initial={false}
                >
                  {service.backside.fixes.map((fix: string, i: number) => (
                    <motion.li
                      key={i}
                      variants={listItemVariants}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {fix}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.li>
          </ul>
        );
      })}
    </div>
  );
}
