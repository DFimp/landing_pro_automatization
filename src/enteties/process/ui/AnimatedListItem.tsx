'use client'

import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
    children: React.ReactNode;
    direction?: "left" | "right";
    className?: string;
};

const AnimatedListItem = ({ children, direction = "left", className = "" }: Props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: {
            opacity: 1,
            x: direction === "left" ? -400 : 600,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.li
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={className}
        >
            {children}
        </motion.li>
    );
};

export default AnimatedListItem;
