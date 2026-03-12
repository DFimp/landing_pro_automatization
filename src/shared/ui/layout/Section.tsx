import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Container } from "./Container";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  className?: string;
  containerClassName?: string;
  withContainer?: boolean;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Section<T extends ElementType = "section">({
  as,
  className,
  containerClassName,
  withContainer = true,
  children,
  ...props
}: SectionProps<T>) {
  const Component = (as ?? "section") as ElementType;

  return (
    <Component className={className} {...props}>
      {withContainer ? <Container className={containerClassName}>{children}</Container> : children}
    </Component>
  );
}

