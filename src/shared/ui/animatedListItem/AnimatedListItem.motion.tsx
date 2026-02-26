"use client";

import React from "react";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

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
        <ScrollReveal
            as="li"
            key={index}
            className={className}
            variant="tilt"
            xFrom={initialX}
            xTo={targetX}
            yFrom={0}
            yTo={0}
            scaleFrom={0.99}
            blurPx={0}
            durationMs={650}
            delayMs={index * 90}
        >
            {children}
        </ScrollReveal>
    );
};
