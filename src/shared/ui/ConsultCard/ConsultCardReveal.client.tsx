"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ConsultCardReveal({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

    useEffect(() => {
        if (inView) controls.start({ opacity: 1 });
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
