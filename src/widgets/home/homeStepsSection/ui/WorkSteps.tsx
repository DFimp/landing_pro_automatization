'use client';

import { useEffect, useRef } from "react";
import { Card } from "@/shared/ui/Card/Card";
import { steps } from "@/widgets/home/homeStepsSection/ui/lib";
import { detectMobile } from "@/shared/utils/detectMobile";

export default function WorkSteps() {
    const { isMobileView } = detectMobile()
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
            const walk = (x - startX.current) * 1.5;
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
        <div className="w-full overflow-hidden mb-20 sm:mt-20 mt-10">
            <div
                ref={scrollRef}
                className="overflow-hidden cursor-grab active:cursor-grabbing"
            >
                <ul className="flex sm:flex-row flex-col gap-4 snap-x snap-mandatory select-none">
                    {steps.map((step, index) => (
                        <Card
                            variant='expandable'
                            key={index + Number(isMobileView) * 100}
                            index={index}
                            content={step.content}
                            description={step.description}
                            result={step.result}
                            isFirst={!isMobileView && index === 0}
                            isLast={!isMobileView && index === steps.length - 1}
                            
                        />
                    ))}
                    {/* Добавляем пустой элемент для отступа справа */}
                    <div className="shrink-0 min-w-[175px]"></div>
                </ul>
            </div>
        </div>
    );
}