'use client';

import {useEffect, useRef } from "react";
import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import {Card} from "@/shared/ui/Card/Card";
import {steps} from "@/widgets/widgets/widgetsStepsSection/ui/ui";


export default function WorkSteps() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <>
            <TitleArrow text="Как мы работаем?" link="/" variant='outline' />

            <div className="w-full overflow-hidden mb-20 mt-20">
                <div
                    ref={scrollRef}
                    className="overflow-hidden scrollbar-none"
                >
                    <ul className="flex gap-4 snap-x snap-mandatory pr-4">
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
        </>
    );
}