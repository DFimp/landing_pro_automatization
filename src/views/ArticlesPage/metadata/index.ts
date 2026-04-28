import type { Metadata } from "next";
import { createSEOMetadata } from "@/shared/lib/seo/metadata";

export const metadata: Metadata = createSEOMetadata({
  title: "Статьи про amoCRM — база знаний",
  description:
    "Полезные статьи про amoCRM: настройка, автоматизация, интеграции, лайфхаки. Практические кейсы и инструкции.",
  canonical: "/articles",
  ogType: "website",
});
