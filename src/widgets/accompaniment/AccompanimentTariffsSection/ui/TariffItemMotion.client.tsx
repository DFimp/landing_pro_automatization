"use client";

import * as motion from "motion/react-client";
import React from "react";

export default function TariffItemMotion({
    index,
    children,
}: {
    index: number;
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            {children}
        </motion.div>
    );
}
