import type { CSSProperties, ReactNode } from "react";
import type { CaseCardItem, CaseItem, CaseStripeItem } from "@/sections/landing/caseCard/CaseCard";
import type { FeatureItem } from "@/sections/landing/featuresCard/FeaturesCard";
import type { ProblemItem } from "@/sections/landing/problemsCard/ProblemsCard";
import WidgetInstallButton from "./WidgetInstallButton";

export type WidgetStep = {
  title: string;
  content: ReactNode;
};

type StepTone = "blue" | "green" | "red" | "yellow";

type StepParagraphBlock = {
  type: "paragraph";
  text: ReactNode;
  className?: string;
  style?: CSSProperties;
};

type StepListBlock = {
  type: "list";
  items: ReactNode[];
  ordered?: boolean;
  className?: string;
  style?: CSSProperties;
};

type StepNoteBlock = {
  type: "note";
  title?: ReactNode;
  content: ReactNode;
  tone?: StepTone;
  className?: string;
  style?: CSSProperties;
};

type StepImageBlock = {
  type: "image";
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
};

type StepActionBlock = {
  type: "action";
  href: string;
  label: ReactNode;
  className?: string;
  wrapperClassName?: string;
  style?: CSSProperties;
};

type StepCustomBlock = {
  type: "custom";
  content: ReactNode;
};

export type WidgetStepBlock =
  | StepParagraphBlock
  | StepListBlock
  | StepNoteBlock
  | StepImageBlock
  | StepActionBlock
  | StepCustomBlock;

export type WidgetStepDefinition = {
  title: string;
  blocks: WidgetStepBlock[];
};

export type WidgetProblemDefinition = ProblemItem;
export type WidgetFeatureDefinition = FeatureItem;
export type WidgetCaseStripeDefinition = Omit<CaseStripeItem, "type">;
export type WidgetCaseCardDefinition = Omit<CaseCardItem, "type">;
export type WidgetCaseDefinition =
  | ({ type: "stripe" } & WidgetCaseStripeDefinition)
  | ({ type: "card" } & WidgetCaseCardDefinition);

const DEFAULT_LIST_CLASS = "sc-list";
const DEFAULT_ACTION_WRAPPER_CLASS = "mt-4";

function renderStepBlock(block: WidgetStepBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className={block.className} style={block.style}>
          {block.text}
        </p>
      );

    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";

      return (
        <ListTag
          key={index}
          className={block.className ?? DEFAULT_LIST_CLASS}
          style={block.style}
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ListTag>
      );
    }

    case "note":
      return (
        <div
          key={index}
          className={[
            "sc-note",
            block.tone ? `sc-note--${block.tone}` : undefined,
            block.className,
          ]
            .filter(Boolean)
            .join(" ")}
          style={block.style}
        >
          {block.title ? (
            <div className="sc-note-title">{block.title}</div>
          ) : null}
          <div>{block.content}</div>
        </div>
      );

    case "image":
      return (
        <img
          key={index}
          src={block.src}
          alt={block.alt}
          className={block.className}
          style={block.style}
        />
      );

    case "action":
      return (
        <div
          key={index}
          className={block.wrapperClassName ?? DEFAULT_ACTION_WRAPPER_CLASS}
          style={block.style}
        >
          <WidgetInstallButton href={block.href} className={block.className}>
            {block.label}
          </WidgetInstallButton>
        </div>
      );

    case "custom":
      return <div key={index}>{block.content}</div>;
  }
}

export function createSteps(definitions: WidgetStepDefinition[]): WidgetStep[] {
  return definitions.map((definition) => ({
    title: definition.title,
    content: <div>{definition.blocks.map(renderStepBlock)}</div>,
  }));
}

export function stepParagraph(
  text: ReactNode,
  options: Omit<StepParagraphBlock, "type" | "text"> = {},
): StepParagraphBlock {
  return { type: "paragraph", text, ...options };
}

export function stepList(
  items: ReactNode[],
  options: Omit<StepListBlock, "type" | "items"> = {},
): StepListBlock {
  return { type: "list", items, ...options };
}

export function stepNote(
  title: ReactNode,
  content: ReactNode,
  options: Omit<StepNoteBlock, "type" | "title" | "content"> = {},
): StepNoteBlock {
  return { type: "note", title, content, ...options };
}

export function stepImage(
  src: string,
  alt: string,
  options: Omit<StepImageBlock, "type" | "src" | "alt"> = {},
): StepImageBlock {
  return { type: "image", src, alt, ...options };
}

export function stepAction(
  href: string,
  label: ReactNode,
  options: Omit<StepActionBlock, "type" | "href" | "label"> = {},
): StepActionBlock {
  return { type: "action", href, label, ...options };
}

export function stepCustom(content: ReactNode): StepCustomBlock {
  return { type: "custom", content };
}

export function createProblems<T extends WidgetProblemDefinition[]>(
  items: T,
): T {
  return items;
}

export function createFeatures<T extends WidgetFeatureDefinition[]>(
  items: T,
): T {
  return items;
}

export function caseStripe(
  side: WidgetCaseStripeDefinition["side"],
  options: Omit<WidgetCaseStripeDefinition, "side"> = {},
): WidgetCaseDefinition {
  return {
    type: "stripe",
    side,
    ...options,
  };
}

export function caseCard(
  title: string,
  text: ReactNode,
  options: Omit<WidgetCaseCardDefinition, "title" | "text"> = {},
): WidgetCaseDefinition {
  return {
    type: "card",
    title,
    text,
    ...options,
  };
}

export function createCaseItems<T extends WidgetCaseDefinition[]>(
  items: T,
): CaseItem[] {
  return items;
}
