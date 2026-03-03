"use client";
import React, { useRef } from "react";

export default function HowItWorksScroll() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = el.scrollLeft;
    el.dataset.dragging = "true";
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el || !isDragging.current) return;
    const dx = e.clientX - startX.current;
    el.scrollLeft = scrollStart.current - dx;
  };

  const onPointerUp = () => {
    const el = scrollerRef.current;
    if (!el) return;
    isDragging.current = false;
    el.dataset.dragging = "false";
  };

  const steps = [
    {
      n: "1",
      title: "Настройка отслеживания",
      text: "Вы выбираете воронки и статусы, которые нужно контролировать. Например: «Переговоры», «Принятие решения».",
    },
    {
      n: "2",
      title: "Автоматический мониторинг",
      text: "Каждые 5 минут виджет проверяет все сделки на выбранных этапах и ищет те, в которых давно не было активности.",
    },
    {
      n: "3",
      title: "Создание задач",
      text: "Для «спящих» сделок автоматически создаётся задача с настроенным текстом и назначается ответственному менеджеру.",
    },
    {
      n: "4",
      title: "Менеджер получает уведомление",
      text: "Ответственный видит задачу в amoCRM и связывается с клиентом. Сделка возвращается в работу.",
    },
  ];

  return (
    <section className="py-[28px] pb-2 bg-white mb-[30px] max-[640px]:py-5">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <h2 className="text-[clamp(24px,3.6vw,40px)] font-extrabold text-[#0f1427] mb-2">Как это работает</h2>
        <p className="text-[#3c4460] leading-[1.6] mb-[18px]">
          Простой алгоритм, который работает без вашего участия
        </p>

        <div
          ref={scrollerRef}
          data-dragging="false"
          className="flex gap-5 overflow-x-auto [-webkit-overflow-scrolling:touch] pb-1 cursor-grab select-none scroll-smooth scroll-pl-4 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] pl-[calc(49vw-50%+16px)] pr-[calc(49vw-50%+16px)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden data-[dragging=true]:cursor-grabbing max-[640px]:flex-col max-[640px]:gap-3 max-[640px]:overflow-visible max-[640px]:cursor-default max-[640px]:snap-none max-[640px]:ml-0 max-[640px]:mr-0 max-[640px]:pr-0 max-[640px]:pl-4"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {steps.map((s) => (
            <div key={s.n} className="flex-none w-[510px] min-w-[510px] grid grid-cols-[96px_1fr] items-stretch bg-white border border-[#5f78ff] rounded-[20px] overflow-hidden min-h-[230px] snap-start min-[1200px]:grid-cols-[112px_1fr] max-[640px]:w-full max-[640px]:min-w-0 max-[640px]:min-h-0 max-[640px]:border-[1.5px] max-[640px]:rounded-[16px] max-[640px]:shadow-[0_6px_16px_rgba(15,20,39,0.06)] max-[640px]:grid-cols-[72px_1fr]">
              <div className="grid place-items-center w-[96px] bg-[#3d5df6] text-white font-normal text-[56px] leading-none min-[1200px]:text-[128px] min-[1200px]:w-[103px] min-[1200px]:text-center max-[640px]:w-[72px] max-[640px]:font-extrabold max-[640px]:text-[44px] max-[640px]:py-[12px]">{s.n}</div>
              <div className="py-10 px-5 max-[640px]:pt-[14px] max-[640px]:px-[14px] max-[640px]:pb-[16px]">
                <h3 className="text-[18px] font-bold text-[#0f1427] mb-[10px] max-[640px]:text-[16px] max-[640px]:mb-[6px]">{s.title}</h3>
                <p className="text-[#3c4460] text-[15px] leading-[1.6] max-[640px]:text-[13.5px] max-[640px]:leading-[1.5]">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}