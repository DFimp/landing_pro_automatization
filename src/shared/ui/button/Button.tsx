import React from "react";
import clsx from "clsx";

type ButtonProps = {
  text: string | React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  fullWidth?: boolean;
};

const Button = ({
  text,
  disabled = false,
  onClick,
  variant = "primary",
  className = "",
  fullWidth = false,
}: ButtonProps) => {
  const variantClasses = {
    primary:
      "bg-blue text-white text-h8 font-medium hover:bg-white hover:text-blue hover:border-blue " +
      "active:bg-blue active:text-white",
    secondary:
      "bg-blue2 text-white text-h5 font-semibold hover:bg-white hover:text-blue2 hover:border-blue2 " +
      "active:bg-blue2 active:text-white",
    outline:
      "bg-white text-blue border-blue text-h4 font-bold  hover:text-white hover:bg-blue2 " +
      "active:bg-blue2 active:text-white",
  };

  const baseClass = clsx(
    "px-4 py-2 rounded-4xl transition-colors duration-300 border-1 border-transparent cursor-pointer",
    "inline-flex items-center justify-center whitespace-nowrap",
    fullWidth ? "w-full" : "w-auto"
  );

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
