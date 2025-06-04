import {StaticImageData} from "next/image";
import React from "react";

export type AnimatedListItemProps = {
    index: number;
    left?: boolean;
    imageSrc?: StaticImageData | string;
    title: string;
    description?: string;
    number?: number;
    descriptionClassName?: string;
    className?: string;
    children?: React.ReactNode;
};