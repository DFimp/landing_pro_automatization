import type { Metadata } from "next";
import AuditPage from "./AuditPage";
import { FAQSchemaTag } from "@/shared/lib/seo";
import { AUDIT_PAGE_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = AUDIT_PAGE_METADATA;

const AUDIT_FAQ = [
  {
    question: "Сколько времени занимает аудит amoCRM?",
    answer: "Стандартный аудит занимает 3-5 рабочих дней. Это включает анализ текущих настроек, проверку автоматизации, оценку интеграций и подготовку подробного отчёта с рекомендациями."
  },
  {
    question: "Что входит в аудит amoCRM?",
    answer: "Аудит включает: проверку настройки воронок продаж, анализ автоматизации и роботов, оценку интеграций, проверку прав доступа пользователей, анализ качества данных и рекомендации по оптимизации работы системы."
  },
  {
    question: "Сколько стоит аудит amoCRM?",
    answer: "Стоимость аудита зависит от сложности настроек и количества пользователей. Базовый аудит для малого бизнеса начинается от 15 000 рублей."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchemaTag items={AUDIT_FAQ} />
      <AuditPage />
    </>
  );
}
