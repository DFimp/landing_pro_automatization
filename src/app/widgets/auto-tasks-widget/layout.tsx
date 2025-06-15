// app/auto-tasks-widget/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Автозадачи в сделках AmoCRM - Никогда не забывайте о сделках",
  description:
    "Автоматически создавайте задачи для сделок без активности. Настраиваемые статусы, типы задач и ответственные. Увеличьте конверсию на 35% благодаря своевременному контакту с клиентами.",
};

export default function AutoTasksWidget({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
