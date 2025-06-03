'use client'

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { steps } from "@/widgets/accompaniment/AccompanimentScrumSection/ui/lib";

export default function StepTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleStep, setVisibleStep] = useState(0);

    // Точки в пространстве (top / left по макету)
    const numPositions = [
        { top: -20, left: 260 },
        { top: 140, left: 0 },
        { top: 270, left: -240 },
    ];

    // Длина линии до каждой точки (по x, если линия наклонена под 21°)
    const lineStops = [750, 1200, 2500]; // ← заменишь на реальные пиксели от левого края

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const viewHeight = window.innerHeight || document.documentElement.clientHeight;
            const progress = 1 - Math.max(0, Math.min(1, rect.bottom / (viewHeight + rect.height)));

            if (progress >= 0.55) setVisibleStep(3);
            else if (progress >= 0.3) setVisibleStep(2);
            else if (progress >= 0.05) setVisibleStep(1);
            else setVisibleStep(0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-[650px] text-white overflow-hidden mb-20">
            {/* Линия – расширяется до нужной ширины в пикселях */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: lineStops[visibleStep - 1] || 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 h-1 bg-blue-500 origin-left rotate-[21deg]"
            />

            {/* Steps */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-start px-16 py-10 pointer-events-none">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: visibleStep > index ? 1 : 0,
                            scale: visibleStep > index ? 1 : 0.8
                        }}
                        transition={{ duration: 0.5 }}
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
