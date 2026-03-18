import type { Metadata } from "next";
import { FAQSchemaTag, ServiceSchemaTag } from "@/shared/lib/seo";
import { MANAGED_PAGE_METADATA } from "@/shared/constants/metadata";
import {
  ManagedHeroSection,
  ManagedScrumSection,
  ManagedHelpSection,
  ManagedProblemsSection,
  ManagedTariffsSection,
} from "@/widgets/managed";

export const metadata: Metadata = MANAGED_PAGE_METADATA;

export const revalidate = 86400;

const MANAGED_FAQ = [
  {
    question: "Что включает сопровождение amoCRM?",
    answer: "Сопровождение включает: техническую поддержку по всем вопросам работы с amoCRM, консультации по настройке и оптимизации, доработку автоматизаций и интеграций, обучение сотрудников и помощь в решении нестандартных задач."
  },
  {
    question: "Как быстро вы отвечаете на обращения?",
    answer: "Среднее время ответа на обращение — до 2 часов в рабочее время. Критичные проблемы решаем в приоритетном порядке. Для клиентов на сопровождении доступна связь через Telegram для оперативной коммуникации."
  },
  {
    question: "Сколько стоит сопровождение amoCRM?",
    answer: "Стоимость сопровождения зависит от объёма задач и количества пользователей. Базовый тариф начинается от 10 000 рублей в месяц и включает до 10 часов работы специалиста."
  },
  {
    question: "Можно ли заказать разовую консультацию?",
    answer: "Да, мы проводим разовые консультации по amoCRM. Это удобно, если вам нужна помощь с конкретным вопросом или задачей без оформления постоянного сопровождения."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchemaTag items={MANAGED_FAQ} />
      <ManagedPageContent />
    </>
  );
}

function ManagedPageContent() {
  return (
    <>
      <ServiceSchemaTag
        data={{
          serviceType: "Техподдержка и сопровождение amoCRM",
          name: "Сопровождение amoCRM",
          description:
            "Профессиональное сопровождение amoCRM: техподдержка, консультации, доработки. Быстрое решение проблем.",
        }}
      />
      <main
        id="managed"
        className="sm:pb-20 pb-10 sm:pt-20 overflow-hidden bg-[linear-gradient(135deg,#000000_0%,#1a0a2e_25%,#16213e_50%,#0f3460_75%,#533483_100%)]"
      >
        <ManagedHeroSection />
        <ManagedProblemsSection />
        <ManagedHelpSection />
        <ManagedScrumSection />
        <ManagedTariffsSection />
      </main>
    </>
  );
}
