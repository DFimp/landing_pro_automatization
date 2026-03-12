import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerSize = "default" | "wide" | "narrow" | "full";
type ContainerPadding = "default" | "none";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  size?: ContainerSize;
  padding?: ContainerPadding;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

const sizeClasses: Record<ContainerSize, string> = {
  default: "max-w-[1200px]",
  wide: "max-w-[1250px]",
  narrow: "max-w-[900px]",
  full: "max-w-none",
};

const paddingClasses: Record<ContainerPadding, string> = {
  default: "px-4",
  none: "px-0",
};

export function Container<T extends ElementType = "div">({
  as,
  className,
  size = "default",
  padding = "default",
  ...props
}: ContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={clsx("mx-auto w-full", sizeClasses[size], paddingClasses[padding], className)}
      {...props}
    />
  );
}

