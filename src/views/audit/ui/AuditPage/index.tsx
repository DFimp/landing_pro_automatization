import { FAQSchemaTag, ServiceSchemaTag } from "@/shared/lib/seo";
import {
  StepsSection,
  FinalSection,
  HeroSection,
  ResultSection,
  DeliverablesSection,
} from "@/views/audit/components";

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
      <AuditPageContent />
    </>
  );
}

function AuditPageContent() {
  return (
    <>
      <ServiceSchemaTag
        data={{
          serviceType: "Консалтинг и аудит amoCRM",
          name: "Аудит amoCRM",
          description: "Полный аудит настройки amoCRM: воронки, интеграции, автоматизация. Выявим ошибки и дадим рекомендации.",
        }}
      />
      <main className="sm:pb-20 sm:pt-20 w-full overflow-x-hidden">
        <HeroSection />
        <StepsSection />
        <ResultSection />
        <DeliverablesSection />
        <FinalSection />
      </main>
    </>
  );
}
