import Image from "next/image";
import AnimatedListItem from "@/enteties/process/ui/AnimatedListItem";
import React, { ReactNode } from "react";

interface ProcessItemProps {
    direction: "left" | "right";
    imageSrc?: string;
    alt?: string;
    title?: string;
    description: ReactNode;
    offset?: string;
    style?: React.CSSProperties;
    className?: string;
}

export const ProcessItem = ({
                                direction,
                                imageSrc,
                                alt = "Этап процесса",
                                title,
                                description,
                                offset = "",
                                style,
                                className = "",
                            }: ProcessItemProps) => {
    return (
        <AnimatedListItem
            direction={direction}
            className={`flex items-center gap-10 ${offset} ${className}`}
            style={style}
        >
            {imageSrc && <Image src={imageSrc} alt={alt} width={150} height={150} />}
            <div className='content max-w-[600px] space-y-4'>
                {title && <h3 className='text-h5 font-semibold'>{title}</h3>}
                {description}
            </div>
        </AnimatedListItem>
    );
};
