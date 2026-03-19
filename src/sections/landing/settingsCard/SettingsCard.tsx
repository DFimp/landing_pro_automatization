import React from "react";
import clsx from "clsx";
import AccordionItem from "./AccordionItem";

type Step = {
  title: string;
  content: React.ReactNode;
};

type SettingsCardProps = {
  id?: string;
  title: string;
  subtitle?: string;
  steps: Step[];
  showVideo?: boolean;
  videoId?: string;
  className?: string;
};

export default function SettingsCard({
  id,
  title,
  subtitle,
  steps,
  showVideo = true,
  videoId,
  className = '',
}: SettingsCardProps) {
  const sectionClass = clsx(
    "rounded-[28px] text-white pt-10 pb-14 bg-[#0f1427]",
    className
  );

  const containerClass = "w-full max-w-[1200px] mx-auto px-4";
  const titleClass =
    "text-[clamp(20px,2.8vw,28px)] font-semibold mb-[30px]";
  const subtitleClass = "text-[20px] font-semibold my-[30px] text-[#e9edff]";
  const videoClass = "w-full rounded-[28px] h-[40vh] max-[640px]:h-[50vh]";
  const listClass = "grid gap-[12px] mt-[8px]";

  return (
    <section
      id={id}
      className={sectionClass}
      style={{
        background:
          "radial-gradient(1200px 600px at 0% 100%, rgba(108,0,255,0.25), transparent 60%)," +
          "radial-gradient(1000px 500px at 100% 0%, rgba(0,102,255,0.25), transparent 60%)," +
          "linear-gradient(180deg, #13162b 0%, #0f1427 100%)",
      }}
    >
      <div className={containerClass}>
        <h3 className={titleClass}>{title}</h3>

        {showVideo && videoId && (
          <iframe
            src={`https://rutube.ru/play/embed/${videoId}`}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
            loading="lazy"
            allowFullScreen
            className={videoClass}
          />
        )}

        {subtitle ? <div className={subtitleClass}>{subtitle}</div> : null}

        <div className={listClass}>
          {steps.map((step, i) => (
            <AccordionItem key={i} index={i + 1} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
