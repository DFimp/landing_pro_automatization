import type { ReactNode } from "react";

type WidgetHeroSectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

const DEFAULT_SECTION_CLASS =
  "relative pt-[72px] pb-[70px] text-white rounded-b-[28px] bg-[radial-gradient(1200px_600px_at_0%_100%,rgba(108,0,255,0.25),transparent_60%),radial-gradient(1000px_500px_at_100%_20%,rgba(0,102,255,0.25),transparent_60%),linear-gradient(180deg,#0f1427_0%,#151b33_60%,#0f1427_100%)] max-[768px]:pt-[56px] max-[768px]:pb-[96px] max-[480px]:pt-[28px] max-[480px]:pb-[36px] max-[480px]:rounded-b-[24px]";
const DEFAULT_CONTAINER_CLASS = "mx-auto w-full max-w-[1200px] px-4";

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export default function WidgetHeroSection({
  children,
  className,
  containerClassName,
}: WidgetHeroSectionProps) {
  return (
    <section className={cn(DEFAULT_SECTION_CLASS, className)}>
      <div className={cn(DEFAULT_CONTAINER_CLASS, containerClassName)}>{children}</div>
    </section>
  );
}

