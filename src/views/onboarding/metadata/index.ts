import type { Metadata } from "next";
import { createSEOMetadata } from "@/shared/lib/seo/metadata";

export const metadata: Metadata = createSEOMetadata({
  title: "Внедрение с нуля — Про Автоматизацию",
  description:
    "Ваш эксперт по amoCRM. От консультации до полной автоматизации бизнес-процессов.",
  canonical: "/onboarding",
  ogType: "website",
});
