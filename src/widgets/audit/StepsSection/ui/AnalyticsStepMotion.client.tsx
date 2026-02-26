"use client";

import * as motion from "motion/react-client";
import React, { useEffect, useMemo, useState } from "react";

export default function AnalyticsStepMotion({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(media.matches);

    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  const motionConfig = useMemo(() => {
    if (isMobile) {
      return {
        initialX: 0,
        targetX: 0,
        initialY: 16,
        targetY: 0,
        duration: 0.55,
        delay: index * 0.08,
        amount: 0.3,
      };
    }

    return {
      initialX: -250,
      targetX: 40 + 200 * index,
      initialY: 0,
      targetY: 0,
      duration: 0.8,
      delay: index * 0.2,
      amount: 0.8,
    };
  }, [index, isMobile]);

  return (
    <motion.li
      initial={{ x: motionConfig.initialX, y: motionConfig.initialY, opacity: 0 }}
      whileInView={{
        x: motionConfig.targetX,
        y: motionConfig.targetY,
        opacity: 1,
      }}
      viewport={{ once: true, amount: motionConfig.amount }}
      transition={{ duration: motionConfig.duration, delay: motionConfig.delay }}
      className="mb-5"
    >
      {children}
    </motion.li>
  );
}
