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
    el.classList.add("dragging");
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
    el.classList.remove("dragging");
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
    <section className="at-how">
      <div className="at-container">
        <h2 className="at-how-title">Как это работает</h2>
        <p className="at-how-sub">
          Простой алгоритм, который работает без вашего участия
        </p>

        <div
          ref={scrollerRef}
          className="at-steps-scroll at-bleed-right"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {steps.map((s) => (
            <div key={s.n} className="at-step-card at-snap">
              <div className="at-step-num">{s.n}</div>
              <div className="at-step-body">
                <h3 className="at-step-title">{s.title}</h3>
                <p className="at-step-text">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}