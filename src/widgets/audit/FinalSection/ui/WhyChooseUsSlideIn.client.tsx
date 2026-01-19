"use client";

import React, { useMemo, useRef } from "react";
import { useInView } from "motion/react";

type Props = {
    direction: "left" | "right";
    children: React.ReactNode;
};

export default function WhyChooseUsSlideIn({ direction, children }: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { amount: 0.3 });

    const hiddenClass = useMemo(() => {
        return direction === "right"
            ? "translate-x-[clamp(210px,20vw,420px)]"
            : "translate-x-[clamp(-600px,-30vw,-300px)]";
    }, [direction]);

    return (
        <div
            ref={ref}
            className={`h-full w-full transition-transform duration-700 will-change-transform ${inView ? "translate-x-0" : hiddenClass
                }`}
        >
            {children}
        </div>
    );
}
