"use client";

import { useEffect, useRef } from "react";

export default function WorkStepsDrag({ children }: { children: React.ReactNode }) {
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
        <div ref={scrollRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
            {children}
        </div>
    );
}
