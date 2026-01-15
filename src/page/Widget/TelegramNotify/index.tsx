import "./style.css";
import React from "react";
import Image from "next/image";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import CaseCard from "@/shared/ui/Case/CaseCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { STEPS, CASE_ITEMS } from "./constants";

export default function TelegramNotify({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  const isIframe = searchParams.embed === "true";

  return (
    <>
      <ServiceSchemaTag
        data={{
          serviceType: "Разработка виджетов amoCRM",
          name: "Telegram уведомления для amoCRM",
          description: "Виджет для мгновенных уведомлений о событиях amoCRM в Telegram с запуском SalesBot одним кликом",
          provider: { name: "Про Автоматизацию" },
          areaServed: { name: "Россия" },
        }}
      />
      <main className="bg-transparent">
        {!isIframe && (
          <>
            <section className="at-hero">
              <div className="at-container">
                <Breadcrumbs
                  items={[
                    { name: "Главная", href: "/" },
                    { name: "Виджеты", href: "/widgets" },
                    { name: "Telegram уведомления", href: "/widgets/telegram-notify" },
                  ]}
                />
                <h1 className="at-pill at-bleed-left">
                  Телеграм уведомления для amoCRM
                </h1>

              <h2 className="at-hero-title">Готовы быть в курсе событий?</h2>

              <p className="at-hero-sub">
                Получайте мгновенные уведомления в Telegram и запускайте
                SalesBot
                <br /> одним нажатием. Полная автоматизация коммуникаций с
                клиентами
                <br /> прямо в мессенджере.
              </p>

              <div className="at-cta">
                <a
                  className="at-btn-primary"
                  href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=c31be896-9148-4ec1-9d7a-2aba7b16906e"
                  target="_blank"
                  rel="noopener"
                >
                  Установить виджет
                </a>
                <ScrollToInstructionLink />
              </div>
            </div>
          </section>

          <section className="at-container">
            <div className="at-features-grid">
              <div className="at-feature-card">
                <div className="at-feature-ico">
                  <Image
                    src="/widgets/TelegramNotify/bell.png"
                    alt="Иконка колокольчика"
                    width={40}
                    height={40}
                    priority
                  />
                </div>
                <h3 className="at-feature-title">Мгновенные уведомления</h3>
                <p className="at-feature-text">
                  Получайте информацию о важных событиях сразу же, как только
                  они происходят. Никаких задержек!
                </p>
              </div>

              <div className="at-feature-card">
                <div className="at-feature-ico">
                  <Image
                    src="/widgets/TelegramNotify/letter_star.png"
                    alt="Иконка письма"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="at-feature-title">Умные триггеры</h3>
                <p className="at-feature-text">
                  Отправляйте сообщения только при переходе в нужную воронку или
                  этап. Никакого спама!
                </p>
              </div>

              <div className="at-feature-card">
                <div className="at-feature-ico">
                  <Image
                    src="/widgets/TelegramNotify/cursor.png"
                    alt="Иконка курсора"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="at-feature-title">
                  Запуск SalesBot одним кликом
                </h3>
                <p className="at-feature-text">
                  Запускайте любую автоматизацию amoCRM прямо из Telegram и
                  экономьте время на рутине.
                </p>
              </div>

              <div className="at-feature-card">
                <div className="at-feature-ico">
                  <Image
                    src="/widgets/TelegramNotify/clock.png"
                    alt="Иконка часов"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="at-feature-title">Контроль времени отправки</h3>
                <p className="at-feature-text">
                  Настройте дни недели и часы для отправки. Не беспокойте
                  клиентов в неподходящее время!
                </p>
              </div>

              <div className="at-feature-card">
                <div className="at-feature-ico">
                  <Image
                    src="/widgets/TelegramNotify/letter_cist.png"
                    alt="Иконка письма с кистью"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="at-feature-title">Автоочистка сообщений</h3>
                <p className="at-feature-text">
                  Сообщения могут автоматически удаляться после активации
                  SalesBot. Никакого мусора в чате!
                </p>
              </div>

              <div className="at-feature-card">
                <div className="at-feature-ico">
                  <Image
                    src="/widgets/TelegramNotify/pyramid.png"
                    alt="Иконка пирамидки со стрелкой"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="at-feature-title">Полная информация о сделке</h3>
                <p className="at-feature-text">
                  В сообщении отображается ключевая информация: клиент, сумма,
                  ответственный, товары и многое другое!
                </p>
              </div>
            </div>
          </section>

          <section className="at-preview">
            <div className="at-preview-grid">
              <div className="at-preview-left">
                <h2 className="at-h2">Как выглядят уведомления</h2>
                <p className="at-preview-sub">
                  Наглядный пример <br />
                  сообщений в Telegram
                </p>
              </div>

              <div className="at-preview-right">
                <div className="at-phone-wrap">
                  <div className="at-phone-blob" aria-hidden />
                  <Image
                    src="/widgets/TelegramNotify/telephone.png"
                    alt="Макет телефона"
                    width={540}
                    height={760}
                    className="at-phone"
                    priority
                  />
                  <div className="at-bubble">
                    <div className="at-bubble-inner">
                      <div className="at-bubble-msg">
                        Оплачена сделка: Разработка сайта
                        <br />
                        Сумма: 850 000₽
                        <br />
                        Клиент: Максим Технологов
                        <br />
                        Телефон:{" "}
                        <a href="tel:+79994567890">+7(999) 456-78-90</a>
                      </div>
                      <button type="button" className="at-bubble-btn">
                        Подтвердить
                      </button>
                      <button
                        type="button"
                        className="at-bubble-btn at-bubble-btn--ghost"
                      >
                        Назначить встречу
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <SettingsCard
        id="instruction"
        title="Пошаговая настройка виджета"
        subtitle="Следуйте простым шагам для быстрой настройки:"
        steps={STEPS}
        showVideo
        videoId="4098b9cd2b565c4cd067a39b67350e26"
      />

      {!isIframe && (
        <>
          <CaseCard
            title="Сценарии использования"
            subtitle="Реальные примеры того, как виджет поможет вашему бизнесу"
            items={CASE_ITEMS}
          />

          <section className="at-prefooter">
            <div className="at-container">
              <ConsultCard />
            </div>
          </section>
        </>
      )}
      </main>
    </>
  );
}
