"use client";

import * as motion from "motion/react-client";
import React from "react";

type Props = {
    index: number;
    isLeft: boolean;
    oneLevel: boolean;
    className?: string;
    children: React.ReactNode;
};

export const AnimatedListItemMotion = ({
    index,
    isLeft,
    oneLevel,
    className,
    children,
}: Props) => {
    const initialX = isLeft ? -100 : 160;
    const targetX = oneLevel ? 0 : isLeft ? 0 : 150;

    return (
        <motion.li
            key={index}
            initial={{ x: initialX, opacity: 0 }}
            whileInView={{ x: targetX, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true, amount: oneLevel ? 0.8 : 1 }}
            className={className}
        >
            {children}
        </motion.li>
    );
};
