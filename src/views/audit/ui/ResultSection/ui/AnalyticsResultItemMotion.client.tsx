"use client";

import * as motion from "motion/react-client";
import React from "react";

export default function AnalyticsResultItemMotion({
    index,
    children,
}: {
    index: number;
    children: React.ReactNode;
}) {
    return (
        <motion.li
            className="flex"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
        >
            {children}
        </motion.li>
    );
}
