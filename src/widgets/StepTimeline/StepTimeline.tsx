'use client'

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { steps } from "@/widgets/StepTimeline/lib";

export default function StepTimeline() {
    const stepControls = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);
    const hasAnimatedRef = useRef(false); // для предотвращения повторной анимации
    const [hasAnimated, setHasAnimated] = useState(false); // для обновления React-дерева

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimatedRef.current) {
                    hasAnimatedRef.current = true;
                    setHasAnimated(true); // триггерим анимацию линии

                    const sequence = async () => {
                        // Первая карточка сразу видима
                        await stepControls.start((index) =>
                            index === 0 ? { opacity: 1, scale: 1 } : {}
                        );

                        // Анимируем остальные карточки с задержкой
                        for (let i = 1; i < steps.length; i++) {
                            await new Promise((res) => setTimeout(res, 675));
                            await stepControls.start((index) =>
                                index === i ? {
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 0.4 }
                                } : {}
                            );
                        }
                    };
                    sequence();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const numPositions = [
        { top: -20, left: 260 },
        { top: 140, left: 0 },
        { top: 270, left: -240 },
    ];

    return (
        <div ref={containerRef} className="relative w-full h-[650px] text-white overflow-x-hidden mb-20">
            {/* Диагональная линия */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={hasAnimated ? { scaleX: 1 } : {}}
                transition={{ duration: 5 }}
                className="absolute top-0 left-0 w-[110%] h-1 bg-blue-500 origin-left rotate-[21deg]"
            />

            {/* Steps */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-start px-16 py-10 pointer-events-none">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        animate={stepControls}
                        initial={{ opacity: 0, scale: 0.8 }}
                        className="relative max-w-xs text-left"
                        style={{
                            top: `${numPositions[index].top}px`,
                            left: `${numPositions[index].left}px`
                        }}
                    >
                        <h4 className="font-semibold text-lg mb-10 max-w-50 whitespace-pre-line">
                            {step.title}
                        </h4>
                        <div className="flex items-center justify-center mb-10 w-25 h-25 border-2 text-blue border-blue-500 rounded-full text-4xl font-bold bg-black z-10 mx-auto">
                            {index + 1}
                        </div>
                        <p className="text-sm text-gray-300 max-w-[200px]">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}