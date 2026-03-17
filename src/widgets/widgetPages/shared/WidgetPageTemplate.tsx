import type { ReactNode } from "react";
import SettingsCard from "@/widgets/landing/settingsCard/SettingsCard";
import ConsultCard from "@/widgets/landing/consultCard/ConsultCard";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import type { Widget } from "@/shared/constants/widgets";

type WidgetPageTemplateProps = {
  widget: Pick<Widget, "seoTitle" | "description">;
  searchParams: { embed?: string };
  hero?: ReactNode;
  preInstruction?: ReactNode;
  instruction: React.ComponentProps<typeof SettingsCard>;
  postInstruction?: ReactNode;
  consult?: ReactNode | false;
  mainClassName?: string;
};

const DEFAULT_CONSULT_STYLE = { paddingTop: 24, paddingBottom: 72 } as const;

export default function WidgetPageTemplate({
  widget,
  searchParams,
  hero,
  preInstruction,
  instruction,
  postInstruction,
  consult,
  mainClassName = "bg-transparent",
}: WidgetPageTemplateProps) {
  const isIframe = searchParams.embed === "true";

  return (
    <>
      <ServiceSchemaTag
        data={{
          serviceType: "Разработка виджетов amoCRM",
          name: widget.seoTitle,
          description: widget.description,
        }}
      />
      <main className={mainClassName}>
        {!isIframe && hero}
        {!isIframe && preInstruction}

        <SettingsCard {...instruction} />

        {!isIframe && postInstruction}
        {!isIframe &&
          (consult === false ? null : (
            consult ?? (
              <section className="bg-white" style={DEFAULT_CONSULT_STYLE}>
                <div className="mx-auto w-full max-w-[1200px] px-4">
                  <ConsultCard />
                </div>
              </section>
            )
          ))}
      </main>
    </>
  );
}

