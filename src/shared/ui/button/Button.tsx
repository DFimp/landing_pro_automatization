import React from "react";
import clsx from "clsx";

type ButtonProps = {
    text: string | React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
};

const Button = ({
                    text,
                    disabled = false,
                    onClick,
                    variant = "primary",
                    className = "",
                }: ButtonProps) => {
    const variantClasses = {
        primary: "bg-blue text-white text-h8 font-medium hover:bg-white hover:text-blue hover:border-blue",
        secondary: "bg-blue2 text-white text-h5 font-semibold hover:bg-white hover:text-blue2 hover:border-blue2",
        outline: "bg-white text-black text-h4 font-bold border-transparent hover:border-black hover:text-black active:bg-blue2 active:text-white",
    };

    const baseClass = "w-full px-4 py-2 rounded-4xl transition-colors duration-300 border-1 cursor-pointer";

    const disabledClasses = "bg-gray text-white opacity-50 cursor-not-allowed";

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                baseClass,
                disabled ? disabledClasses : variantClasses[variant],
                className
            )}
        >
            {text}
        </button>
    );
};

export default Button;
