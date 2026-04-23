import React from "react";
import Image from "next/image";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import CaseCard from "@/sections/landing/caseCard/CaseCard";
import { WIDGETS_DATA, getWidgetInstallUrl, phone } from "@/shared/constants";
import { STEPS, CASE_ITEMS } from "./constants";
import {
  WidgetHeroActions,
  WidgetHeroSection,
  WidgetPageTemplate,
  WidgetTariffsSection,
} from "@/features/widget-page";

const widget = WIDGETS_DATA["max-notice"];
const installHref = widget.clientId ? getWidgetInstallUrl(widget.clientId) : undefined;

export default function MaxNotice({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      tariffs={widget.clientId ? <WidgetTariffsSection widgetId={widget.clientId} /> : undefined}
      preInstruction={(
        <>
          <WidgetHeroSection className="pb-[120px]">
            <h1 className="at-pill at-bleed-left inline-flex items-center gap-2 bg-[#2847ff] text-[#dfe7ff] rounded-full px-[18px] py-[10px] text-[14px] leading-none rounded-l-none ml-[calc(50%-50vw)] pl-[calc(49.5vw-50%+16px)] max-[480px]:px-[16px] max-[480px]:py-[12px] max-[480px]:text-[12px] max-[480px]:justify-center max-[480px]:box-border">
              МАКС(MAX) уведомления для amoCRM
            </h1>

            <h2 className="mt-10 text-white font-semibold text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
              Держите команду в курсе важных событий
            </h2>

            <div className="mt-[18px] flex flex-col gap-6 min-[901px]:flex-row min-[901px]:items-start min-[901px]:justify-between min-[901px]:gap-8 max-[480px]:mt-[14px]">
              <div className="min-[901px]:min-w-0 min-[901px]:flex-1">
                <p className="max-w-[920px] min-[901px]:max-w-none text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Получайте уведомления из amoCRM в MAX, запускайте SalesBot в один клик
                  и ускоряйте реакцию на новые сделки, оплаты и изменения этапов.
                  Все ключевые действия команды остаются под контролем в одном канале.
                </p>
                <WidgetHeroActions
                  className="mb-10"
                  installHref={installHref}
                  installButtonClassName="inline-flex items-center justify-center h-11 px-8 bg-[#386bff] text-white rounded-full font-semibold text-[16px] shadow-[0_8px_24px_rgba(56,107,255,0.35)] transition-[transform,box-shadow,background] duration-150 hover:bg-[#2f5cf0] hover:-translate-y-[1px] hover:shadow-[0_12px_28px_rgba(56,107,255,0.4)] max-[480px]:w-full max-[480px]:text-[15px]"
                  widgetId={widget.clientId}
                />
              </div>
            </div>
          </WidgetHeroSection>

          <section className="relative z-10 mx-auto w-full max-w-[1200px] px-4">
            <div className="grid grid-cols-1 gap-[24px] mt-5 px-[24px] -mx-[24px] min-[768px]:gap-[32px] min-[768px]:grid-cols-2 min-[768px]:mt-[-96px] min-[1200px]:grid-cols-3">
              <div className="bg-white rounded-[40px] p-10 min-h-[240px] w-full shadow-[0_8px_28px_rgba(15,20,39,0.08),inset_0_0_0_1px_#5f78ff] max-[768px]:rounded-[28px] max-[768px]:min-h-[200px]">
                <div className="w-10 h-10 mb-[10px]">
                  <Image src="/widgets/TelegramNotify/bell.jpeg" alt="Иконка уведомлений" width={40} height={40} />
                </div>
                <h3 className="text-[18px] font-semibold text-[#0f1427] mb-[10px]">Мгновенные уведомления</h3>
                <p className="text-[#3c4460] text-[15px] leading-[1.6]">
                  События по сделкам приходят в MAX сразу после срабатывания триггера.
                </p>
              </div>

              <div className="bg-white rounded-[40px] p-10 min-h-[240px] w-full shadow-[0_8px_28px_rgba(15,20,39,0.08),inset_0_0_0_1px_#5f78ff] max-[768px]:rounded-[28px] max-[768px]:min-h-[200px]">
                <div className="w-10 h-10 mb-[10px]">
                  <Image src="/widgets/TelegramNotify/letter_star.jpeg" alt="Иконка правил" width={40} height={40} />
                </div>
                <h3 className="text-[18px] font-semibold text-[#0f1427] mb-[10px]">Гибкие условия</h3>
                <p className="text-[#3c4460] text-[15px] leading-[1.6]">
                  Настраивайте отправку по этапам воронки, статусам и нужным сценариям.
                </p>
              </div>

              <div className="bg-white rounded-[40px] p-10 min-h-[240px] w-full shadow-[0_8px_28px_rgba(15,20,39,0.08),inset_0_0_0_1px_#5f78ff] max-[768px]:rounded-[28px] max-[768px]:min-h-[200px]">
                <div className="w-10 h-10 mb-[10px]">
                  <Image src="/widgets/TelegramNotify/cursor.jpeg" alt="Иконка запуска" width={40} height={40} />
                </div>
                <h3 className="text-[18px] font-semibold text-[#0f1427] mb-[10px]">Запуск SalesBot</h3>
                <p className="text-[#3c4460] text-[15px] leading-[1.6]">
                  Запускайте автоматизации прямо из сообщения и сокращайте ручные действия.
                </p>
              </div>

              <div className="bg-white rounded-[40px] p-10 min-h-[240px] w-full shadow-[0_8px_28px_rgba(15,20,39,0.08),inset_0_0_0_1px_#5f78ff] max-[768px]:rounded-[28px] max-[768px]:min-h-[200px]">
                <div className="w-10 h-10 mb-[10px]">
                  <Image src="/widgets/TelegramNotify/clock.jpeg" alt="Иконка времени" width={40} height={40} />
                </div>
                <h3 className="text-[18px] font-semibold text-[#0f1427] mb-[10px]">Расписание отправки</h3>
                <p className="text-[#3c4460] text-[15px] leading-[1.6]">
                  Ограничивайте дни и часы уведомлений, чтобы сообщения приходили вовремя.
                </p>
              </div>

              <div className="bg-white rounded-[40px] p-10 min-h-[240px] w-full shadow-[0_8px_28px_rgba(15,20,39,0.08),inset_0_0_0_1px_#5f78ff] max-[768px]:rounded-[28px] max-[768px]:min-h-[200px]">
                <div className="w-10 h-10 mb-[10px]">
                  <Image src="/widgets/TelegramNotify/letter_cist.jpeg" alt="Иконка очистки" width={40} height={40} />
                </div>
                <h3 className="text-[18px] font-semibold text-[#0f1427] mb-[10px]">Чистый чат</h3>
                <p className="text-[#3c4460] text-[15px] leading-[1.6]">
                  При необходимости сообщения автоматически удаляются после обработки.
                </p>
              </div>

              <div className="bg-white rounded-[40px] p-10 min-h-[240px] w-full shadow-[0_8px_28px_rgba(15,20,39,0.08),inset_0_0_0_1px_#5f78ff] max-[768px]:rounded-[28px] max-[768px]:min-h-[200px]">
                <div className="w-10 h-10 mb-[10px]">
                  <Image src="/widgets/TelegramNotify/pyramid.jpeg" alt="Иконка данных" width={40} height={40} />
                </div>
                <h3 className="text-[18px] font-semibold text-[#0f1427] mb-[10px]">Полные данные сделки</h3>
                <p className="text-[#3c4460] text-[15px] leading-[1.6]">
                  В сообщении доступны сумма, клиент, ссылка на сделку и другие важные поля.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-[72px] pb-[40px] max-[768px]:pt-[56px] max-[768px]:pb-[24px] max-[768px]:mb-[60px]">
            <div className="grid grid-cols-1 gap-[32px] items-center justify-items-center max-w-[1200px] mx-auto px-4 min-[1024px]:grid-cols-2 min-[1024px]:gap-[48px] max-[768px]:gap-[24px]">
              <div className="w-full">
                <h2 className="text-[clamp(24px,3vw,30px)] font-semibold text-[#0f1427] mb-3 max-[640px]:text-[clamp(22px,6.2vw,18px)] max-[640px]:leading-[1.2]">
                  Как выглядят уведомления
                </h2>
                <p className="text-[#3c4460] leading-[1.6] max-w-[520px] mx-auto max-[640px]:text-[13.5px] max-[640px]:leading-[1.55]">
                  Пример карточки уведомления в MAX
                </p>
              </div>

              <div className="flex justify-center w-full">
                <div className="relative max-w-[560px] w-full min-[1024px]:translate-x-[6%] min-[1024px]:mb-[-32px] max-[640px]:min-h-[450px] max-[640px]:overflow-visible max-[768px]:max-w-[520px]">
                  <div
                    className="absolute right-[-250px] top-[-25%] w-[1020px] h-[820px] z-0 blur-[70px] bg-[radial-gradient(closest-side,rgba(60,14,224,1),transparent_70%),radial-gradient(closest-side,rgba(169,112,255,0.911),transparent_72%)]"
                    aria-hidden
                  />
                  <Image
                    src="/widgets/TelegramNotify/telephone.png"
                    alt="Макет телефона"
                    width={540}
                    height={760}
                    className="relative z-[1] w-full h-auto max-[640px]:absolute max-[640px]:top-[-50px] max-[640px]:right-[-240px] max-[640px]:left-auto max-[640px]:h-[600px] max-[640px]:w-auto max-[640px]:max-w-none max-[640px]:pointer-events-none"
                  />
                  <div className="absolute left-[30%] top-[28%] -translate-x-1/2 -translate-y-[10%] w-[min(520px,70%)] z-[2] rounded-[62px] bg-[linear-gradient(180deg,rgba(249,251,255,0.3)_0%,#f0f5ff_50%)] shadow-[0_28px_80px_rgba(79,92,255,0.25),inset_0_0_0_1px_rgba(255,255,255,0.7)] p-[18px] max-[640px]:left-1/2 max-[640px]:top-[20%] max-[640px]:-translate-y-[6%] max-[640px]:w-full max-[640px]:rounded-[24px] max-[640px]:bg-[linear-gradient(180deg,#f9fbff_0%,#f1f5ff_100%)]">
                    <div className="rounded-[48px] bg-white p-[18px] shadow-[0_1px_0_rgba(9,17,43,0.04),inset_0_0_0_1px_#e6ebff] max-[640px]:bg-transparent max-[640px]:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]">
                      <div className="text-[18px] leading-[1.55] text-[#1e2340] bg-white rounded-[32px] p-[24px] shadow-[inset_0_0_0_1px_#edf1ff] mb-[24px] max-[640px]:text-[14px] max-[640px]:rounded-[24px]">
                        Оплачена сделка: Разработка сайта
                        <br />
                        Сумма: 850 000 ₽
                        <br />
                        Клиент: Максим Технологов
                        <br />
                        Телефон:{" "}
                        <a href={`tel:${phone.href}`} className="text-[#2f5cf0] no-underline">
                          {phone.display}
                        </a>
                      </div>
                      <button
                        type="button"
                        className="w-full h-10 rounded-[12px] text-[16px] text-white bg-[#4166ff] shadow-[0_10px_22px_rgba(65,102,255,0.35)] border-0"
                      >
                        Подтвердить
                      </button>
                      <button
                        type="button"
                        className="w-full h-10 rounded-[12px] text-[16px] text-white bg-[#4166ff] shadow-[0_10px_22px_rgba(65,102,255,0.35)] border-0 mt-[10px]"
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
      instruction={(
        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Следуйте простым шагам для быстрой настройки интеграции с MAX:"
          steps={STEPS}
          showVideo
          videoId="4098b9cd2b565c4cd067a39b67350e26"
        />
      )}
      postInstruction={(
        <>
          <CaseCard
            title="Сценарии использования"
            subtitle="Примеры того, как MaxNotice ускоряет работу отдела продаж"
            items={CASE_ITEMS}
          />

          <section className="py-[24px] pb-[72px] max-[768px]:py-[16px] max-[768px]:pb-[56px]">
            <div className="mx-auto w-full max-w-[1200px] px-4">
              <ConsultCard />
            </div>
          </section>
        </>
      )}
      consult={false}
    />
  );
}
