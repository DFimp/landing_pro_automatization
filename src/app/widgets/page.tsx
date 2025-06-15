"use client";

import { useRouter } from "next/navigation";

export default function Widgets() {
  const router = useRouter();

  return (
    <main id="widgets" className="container pb-20 pt-20">
      <section className="mt-20 grid grid-cols-2 gap-8">
        <div
          onClick={() => router.push("/widgets/telegram-widget")}
          className="cursor-pointer bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105 animate-fade-in-up"
          style={{
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="flex flex-row">
            <span className="text-2xl">💬</span>
            <h1 className="text-xl font-bold text-gray-900 mb-3">
              Telegram Виджет для AmoCRM
            </h1>
          </div>

          <p>
            Получайте мгновенные уведомления в Telegram и запускайте SalesBot
            одним нажатием. Полная автоматизация коммуникаций с клиентами прямо
            в мессенджере.
          </p>
        </div>
        <div
          onClick={() => router.push("/widgets/auto-tasks-widget")}
          className="cursor-pointer bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105 animate-fade-in-up"
          style={{
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="flex flex-row">
            <span className="text-2xl">⚡</span>
            <h1 className="text-xl font-bold text-gray-900 mb-3">
              Автозадачи для AmoCRM
            </h1>
          </div>

          <p>
            Автоматически создавайте задачи для сделок без активности.
            Настраиваемые статусы, типы задач и ответственные. Увеличьте
            конверсию на 35% благодаря своевременному контакту с клиентами.
          </p>
        </div>
        <div
          onClick={() => router.push("/widgets/duplicate-leads")}
          className="cursor-pointer bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105 animate-fade-in-up"
          style={{
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="flex flex-row">
            <span className="text-2xl">🔗</span>
            <h1 className="text-xl font-bold text-gray-900 mb-3">
              Объединение дублей сделок для AmoCRM
            </h1>
          </div>
          <p>
            Автоматическое склеивание дублированных сделок с сохранением всех важных данных. Экономьте время менеджеров и улучшайте качество вашей базы данных.
          </p>
        </div>
      </section>
    </main>
  );
}
