import type { Metadata } from "next";
import Accompaniment from "@/page/Accompaniment";
import { createSEOMetadata, CORE_KEYWORDS, FAQSchemaTag } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Сопровождение amoCRM — техподдержка и консультации | Про Автоматизацию",
  description: "Профессиональное сопровождение amoCRM: техподдержка, консультации, доработки. Быстрое решение проблем. От 10 000₽/мес.",
  keywords: ["сопровождение amocrm", "техподдержка amocrm", "консультации amocrm", ...CORE_KEYWORDS.setup],
  canonical: "/accompaniment",
  ogType: "website",
});

export const revalidate = 86400;

const ACCOMPANIMENT_FAQ = [
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
      <FAQSchemaTag items={ACCOMPANIMENT_FAQ} />
      <Accompaniment />
    </>
  );
}