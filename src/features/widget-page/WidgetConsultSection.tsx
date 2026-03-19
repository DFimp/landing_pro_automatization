import type { CSSProperties } from "react";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";

type WidgetConsultSectionProps = {
  surfaceClassName?: string | false;
  className?: string;
  containerClassName?: string;
  style?: CSSProperties;
};

const DEFAULT_STYLE = { paddingTop: 24, paddingBottom: 72 } as const;
const DEFAULT_SECTION_CLASS = "bg-white";
const DEFAULT_CONTAINER_CLASS = "mx-auto w-full max-w-[1200px] px-4";

function cn(...values: Array<string | false | undefined>) {
  return values.filter(Boolean).join(" ");
}

export default function WidgetConsultSection({
  surfaceClassName = DEFAULT_SECTION_CLASS,
  className,
  containerClassName,
  style,
}: WidgetConsultSectionProps) {
  return (
    <section
      className={cn(surfaceClassName, className)}
      style={style ?? DEFAULT_STYLE}
    >
      <div className={cn(DEFAULT_CONTAINER_CLASS, containerClassName)}>
        <ConsultCard />
      </div>
    </section>
  );
}
