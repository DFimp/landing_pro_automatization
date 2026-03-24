import type { Metadata } from "next";
import { createSEOMetadata } from "@/shared/lib/seo/metadata";

export const metadata: Metadata = createSEOMetadata({
  title:
    "Сопровождение amoCRM — техподдержка и консультации | Про Автоматизацию",
  description:
    "Профессиональное сопровождение amoCRM: техподдержка, консультации, доработки. Быстрое решение проблем. От 10 000₽/мес.",
  canonical: "/managed",
  ogType: "website",
});
