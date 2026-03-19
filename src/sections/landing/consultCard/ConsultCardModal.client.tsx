"use client";

import { useState } from "react";
import Button from "@/shared/ui/button/Button";
import ConsultationModal from "@/features/consultation/ConsultationModal";

type Props = {
    text: string;
    className?: string;
    fullWidth?: boolean;
    variant?: "primary" | "secondary" | "outline";
};

export default function ConsultCardModalClient({
    text,
    className,
    fullWidth,
    variant,
}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                text={text}
                variant={variant}
                onClick={() => setIsOpen(true)}
                className={className}
                fullWidth={fullWidth}
            />
            <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
