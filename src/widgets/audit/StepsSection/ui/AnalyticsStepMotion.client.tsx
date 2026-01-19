"use client";

import * as motion from "motion/react-client";
import React from "react";

export default function AnalyticsStepMotion({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <motion.li
      initial={{ x: -250, opacity: 0 }}
      whileInView={{
        x: 40 + 200 * index,
        opacity: 1,
      }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="mb-5"
    >
      {children}
    </motion.li>
  );
}
