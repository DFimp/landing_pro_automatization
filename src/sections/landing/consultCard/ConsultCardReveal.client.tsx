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
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
            });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 14 }}
            animate={controls}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
