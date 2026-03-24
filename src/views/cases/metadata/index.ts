import type { Metadata } from "next";
import { createSEOMetadata } from "@/shared/lib/seo/metadata";

export const metadata: Metadata = createSEOMetadata({
  title: "Кейсы внедрения amoCRM — реальные проекты | Про Автоматизацию",
  description:
    "Кейсы внедрения и автоматизации amoCRM для разных бизнесов. Реальные результаты, сроки, решения.",
  canonical: "/cases",
  ogType: "website",
});
