import type { Metadata } from "next";
import Accompaniment from "@/page/Accompaniment";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Сопровождение amoCRM — техподдержка и консультации | Про Автоматизацию",
  description: "Профессиональное сопровождение amoCRM: техподдержка, консультации, доработки. Быстрое решение проблем. От 10 000₽/мес.",
  keywords: ["сопровождение amocrm", "техподдержка amocrm", "консультации amocrm", ...CORE_KEYWORDS.setup],
  canonical: "/accompaniment",
  ogType: "website",
});

export const revalidate = 86400;

export default function Page() {
    return <Accompaniment />;
}