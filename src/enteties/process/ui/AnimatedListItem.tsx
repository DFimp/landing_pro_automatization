'use client'

import { motion, useAnimation } from "framer-motion";
import React, {CSSProperties, useEffect} from "react";
import { useInView } from "react-intersection-observer";

type Props = {
    children: React.ReactNode;
    direction?: "left" | "right";
    className?: string;
    style?: CSSProperties;
};

const AnimatedListItem = ({
                              children,
                              direction = "left",
                              className = "",
                              style,
}: Props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: {
            x: direction === "left" ? -400 : 800,
        },
        visible: {
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
            style={style}
        >
            {children}
        </motion.li>
    );
};

export default AnimatedListItem;
