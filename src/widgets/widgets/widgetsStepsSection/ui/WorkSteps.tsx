'use client';

import { useEffect, useRef } from "react";
import { Card } from "@/shared/ui/Card/Card";
import { steps } from "@/widgets/widgets/widgetsStepsSection/ui/lib";

export default function WorkSteps() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleMouseDown = (e: MouseEvent) => {
            isDragging.current = true;
            startX.current = e.pageX - container.offsetLeft;
            scrollLeft.current = container.scrollLeft;
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging.current) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX.current) * 1.5; // коэффициент чувствительности
            container.scrollLeft = scrollLeft.current - walk;
        };

        const handleMouseUp = () => {
            isDragging.current = false;
        };

        container.addEventListener("mousedown", handleMouseDown);
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseup", handleMouseUp);
        container.addEventListener("mouseleave", handleMouseUp);

        return () => {
            container.removeEventListener("mousedown", handleMouseDown);
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseup", handleMouseUp);
            container.removeEventListener("mouseleave", handleMouseUp);
        };
    }, []);

    return (
        <div className="w-full overflow-hidden mb-20 mt-20">
            <div
                ref={scrollRef}
                className="overflow-hidden cursor-grab active:cursor-grabbing"
            >
                <ul className="flex gap-4 snap-x snap-mandatory pr-4 select-none">
                    {steps.map((step, index) => (
                        <Card
                            variant='expandable'
                            key={index}
                            index={index}
                            content={step.content}
                            description={step.description}
                            result={step.result}
                            isFirst={index === 0}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
