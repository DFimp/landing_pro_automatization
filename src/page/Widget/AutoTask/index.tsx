'use client';
import './style.css';
import React, { useRef } from 'react';
import Image from 'next/image';
import ConsultCard from '@/shared/ui/ConsultCard/ConsultCard';
import SettingsCard from '@/shared/ui/settings/SettingsCard';
import { hiddenInIframe } from '@/shared/utils/hiddenInIframe';

export default function AutoTask() {
  const { isIframe } = hiddenInIframe();

  const handleScrollToInstruction = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#instruction')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      title: 'Установка виджета в amoCRM',
      content: (
        <div>
          <p>Установите виджет «Автозадачи в сделках» в вашу amoCRM:</p>
          <ul className="sc-list">
            <li>amoCRM → Настройки → Виджеты</li>
            <li>Найдите «Автозадачи в сделках»</li>
            <li>Нажмите «Установить» и подтвердите</li>
            <li>Поле «Не проверять на задачи» будет создано автоматически</li>
          </ul>
          <div className="sc-note sc-note--blue">
            <div className="sc-note-title">Подсказка</div>
            Если нет прав на установку — обратитесь к администратору аккаунта.
          </div>
        </div>
      ),
    },
    {
      title: 'Выбор воронок и статусов',
      content: (
        <div>
          <p>Укажите, где необходим контроль «спящих» сделок:</p>
          <ul className="sc-list">
            <li>Откройте настройки виджета</li>
            <li>В поле «Статусы» выберите воронку или конкретные этапы</li>
            <li>Повторите для всех ключевых этапов (например, «Переговоры», «Принятие решения»)</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Параметры создаваемых задач',
      content: (
        <div>
          <p>Настройте тип, текст и ответственного:</p>
          <ul className="sc-list">
            <li>Тип задачи (Звонок, Встреча, свой тип)</li>
            <li>Текст задачи с чётким действием</li>
            <li>Кому назначать: ответственному за сделку или конкретному пользователю</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Сохранение и запуск',
      content: (
        <div>
          <p>Проверьте параметры и сохраните:</p>
          <ul className="sc-list">
            <li>Убедитесь, что выбраны нужные этапы</li>
            <li>Нажмите «Сохранить настройки»</li>
            <li>Виджет начнёт работать в фоновом режиме</li>
          </ul>
          <div className="sc-note sc-note--green">
            <div className="sc-note-title">Готово</div>
            Проверка выполняется каждые 5 минут — «спящие» сделки не останутся без внимания.
          </div>
        </div>
      ),
    },
    {
      title: 'Тест и мониторинг',
      content: (
        <div>
          <p>Проверьте, что задачи создаются корректно:</p>
          <ul className="sc-list">
            <li>Найдите сделки на отслеживаемых этапах без активности</li>
            <li>Подождите 5–10 минут и проверьте создание задач</li>
            <li>Исключайте отдельные сделки флагом «Не проверять на задачи»</li>
          </ul>
          <div className="sc-note sc-note--red">
            <div className="sc-note-title">Если задачи не создаются</div>
            Проверьте выбранные этапы, наличие подходящих сделок и интервал запуска.
          </div>
        </div>
      ),
    },
  ];

  const scrollerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0 });
  const vel = useRef({ lastT: 0, lastLeft: 0, v: 0 });
  const STEP = 470;

  const isMobile = () =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches;

  const onPointerDown = (e: React.PointerEvent) => {
    if (isMobile()) return;
    const el = scrollerRef.current;
    if (!el) return;
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    drag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft };
    vel.current = { lastT: performance.now(), lastLeft: el.scrollLeft, v: 0 };
    el.classList.add('dragging');
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (isMobile()) return;
    const el = scrollerRef.current;
    if (!el || !drag.current.down) return;
    e.preventDefault();
    const dx = e.clientX - drag.current.startX;
    el.scrollLeft = drag.current.startLeft - dx;

    const now = performance.now();
    const dt = now - vel.current.lastT || 16;
    const dl = el.scrollLeft - vel.current.lastLeft;
    vel.current.v = dl / dt;
    vel.current.lastT = now;
    vel.current.lastLeft = el.scrollLeft;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (isMobile()) return;
    const el = scrollerRef.current;
    if (!el) return;
    if (!drag.current.down) return;
    drag.current.down = false;
    el.classList.remove('dragging');

    const max = el.scrollWidth - el.clientWidth;
    const momentumPx = vel.current.v * 520;
    const projected = el.scrollLeft + momentumPx;
    const target = Math.max(0, Math.min(Math.round(projected / STEP) * STEP, max));
    el.scrollTo({ left: target, behavior: 'smooth' });
    (e.currentTarget as Element).releasePointerCapture?.(e.pointerId);
  };

  return (
    <main className="bg-white">
      <section className="at-hero" id={isIframe ? 'hidden-in-iframe' : ''}>
        <div className="at-container">
          <div className="at-pill at-bleed-left">Автозадачи для amoCRM</div>

          <h1 className="at-hero-title">Никогда не забывайте о сделках!</h1>

          <p className="at-hero-sub">
            Автоматически создавайте задачи для сделок без активности.<br />
            Настраиваемые статусы, типы задач и ответственные.<br />
            Увеличьте конверсию на <span className="at-badge">35%</span> благодаря своевременному контакту
            <br />
            с клиентами.
          </p>

          <div className="at-cta">
            <a
              className="at-btn-primary"
              href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=ffb5b225-672a-4016-b868-6a98db446851"
              target="_blank"
              rel="noopener"
            >
              Установить виджет
            </a>
            <a href="#instruction" onClick={handleScrollToInstruction} className="at-btn-link">
              Смотреть инструкцию →
            </a>
          </div>

          <div className="at-stats">
            <div className="at-stat">
              <div className="at-stat-value">+35%</div>
              <div className="at-stat-label">Рост конверсии</div>
            </div>
            <div className="at-stat">
              <div className="at-stat-value">0</div>
              <div className="at-stat-label">Забытых сделок</div>
            </div>
            <div className="at-stat">
              <div className="at-stat-value">5 мин</div>
              <div className="at-stat-label">На настройку</div>
            </div>
          </div>
        </div>
      </section>

      <section className="at-problems" id={isIframe ? 'hidden-in-iframe' : ''}>
        <div className="at-container">
          <h2 className="at-section-title">Знакомые проблемы?</h2>
          <div className="at-problems-grid">
            <div className="at-problem-card at-problem--money">
              <h3 className="at-problem-title">Сделки «висят» без движения</h3>
              <p className="at-problem-text">
                Менеджеры <span className="at-mark">забывают</span> связаться с клиентами, сделки теряются, а вы теряете
                деньги. Особенно критично для дорогих продуктов.
              </p>
            </div>
            <div className="at-problem-card at-problem--sleep">
              <h3 className="at-problem-title">Менеджеры «забывают» работать</h3>
              <p className="at-problem-text">
                Без напоминаний сотрудники могут неделями{' '}
                <span className="at-mark">не&nbsp;контактировать</span> с потенциальными клиентами. Результат —
                потерянная прибыль.
              </p>
            </div>
            <div className="at-problem-card at-problem--chart">
              <h3 className="at-problem-title">Низкая конверсия воронки</h3>
              <p className="at-problem-text">
                Без системного подхода к работе со сделками ваша конверсия остаётся на уровне 3–5% вместо возможных
                <span className="at-mark"> 15–20%</span>.
              </p>
            </div>
            <div className="at-problem-card at-problem--time">
              <h3 className="at-problem-title">Ручной контроль отнимает время</h3>
              <p className="at-problem-text">
                Руководители тратят часы на проверку активности менеджеров <span className="at-mark">вместо развития</span>{' '}
                бизнеса.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="at-solution" id={isIframe ? 'hidden-in-iframe' : ''}>
        <div className="at-container">
          <h2 className="at-section-title">Решение: Автозадачи в сделках</h2>
          <p style={{ color: '#3c4460', marginBottom: 20 }}>
            Виджет автоматически следит за всеми сделками и создаёт задачи<br /> для «спящих» клиентов
          </p>

          <div className="at-features-grid">
            <div className="at-feature-card">
              <div className="at-feature-ico" aria-hidden>
                <Image src="/widgets/AutoTask/deployment.png" alt="" width={40} height={40} />
              </div>
              <h3 className="at-feature-title">Умное отслеживание</h3>
              <p className="at-feature-text">
                Виджет мониторит все сделки на<br />
                выбранных этапах каждые 5 минут. Если<br />
                сделка долго без движения — автоматически<br />
                создаётся задача.
              </p>
            </div>

            <div className="at-feature-card">
              <div className="at-feature-ico" aria-hidden>
                <Image src="/widgets/AutoTask/letter_star.png" alt="" width={40} height={40} />
              </div>
              <h3 className="at-feature-title">Гибкая настройка</h3>
              <p className="at-feature-text">
                Выберите статусы для отслеживания,<br />
                тип задачи, ответственного и текст.<br />
                Разные настройки для разных воронок<br />
                и этапов.
              </p>
            </div>

            <div className="at-feature-card">
              <div className="at-feature-ico" aria-hidden>
                <Image src="/widgets/AutoTask/lamp.png" alt="" width={40} height={40} />
              </div>
              <h3 className="at-feature-title">Исключение системных сделок</h3>
              <p className="at-feature-text">
                Специальное поле «Не проверять на задачи»<br />
                позволяет исключить определённые сделки<br />
                из автоматического контроля.
              </p>
            </div>

            <div className="at-feature-card">
              <div className="at-feature-ico" aria-hidden>
                <Image src="/widgets/AutoTask/control.png" alt="" width={40} height={40} />
              </div>
              <h3 className="at-feature-title">Контроль ответственности</h3>
              <p className="at-feature-text">
                Задачи создаются для ответственного за<br />
                сделку или назначаются конкретному<br />
                менеджеру по вашему выбору.
              </p>
            </div>

            <div className="at-feature-card">
              <div className="at-feature-ico" aria-hidden>
                <Image src="/widgets/AutoTask/deadline.png" alt="" width={40} height={40} />
              </div>
              <h3 className="at-feature-title">Постоянная работа</h3>
              <p className="at-feature-text">
                Виджет работает 24/7 в фоновом режиме.<br />
                Проверка каждые 5 минут гарантирует, что ни<br />
                одна сделка не останется без внимания.
              </p>
            </div>

            <div className="at-feature-card">
              <div className="at-feature-ico" aria-hidden>
                <Image src="/widgets/AutoTask/analytic.png" alt="" width={40} height={40} />
              </div>
              <h3 className="at-feature-title">Рост продаж</h3>
              <p className="at-feature-text">
                Своевременная работа с клиентами<br />
                повышает конверсию. Клиенты получают<br />
                внимание в нужный момент и чаще покупают.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="at-how" id={isIframe ? 'hidden-in-iframe' : ''}>
        <div className="at-container">
          <h2 className="at-how-title">Как это работает</h2>
          <p className="at-how-sub">Простой алгоритм, который работает без вашего участия</p>

          <div
            ref={scrollerRef}
            className="at-steps-scroll at-bleed-right"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            {[
              {
                n: '1',
                title: 'Настройка отслеживания',
                text: 'Вы выбираете воронки и статусы, которые нужно контролировать. Например: «Переговоры», «Принятие решения».',
              },
              {
                n: '2',
                title: 'Автоматический мониторинг',
                text: 'Каждые 5 минут виджет проверяет все сделки на выбранных этапах и ищет те, в которых давно не было активности.',
              },
              {
                n: '3',
                title: 'Создание задач',
                text: 'Для «спящих» сделок автоматически создаётся задача с настроенным текстом и назначается ответственному менеджеру.',
              },
              {
                n: '4',
                title: 'Менеджер получает уведомление',
                text: 'Ответственный видит задачу в amoCRM и связывается с клиентом. Сделка возвращается в работу.',
              },
            ].map((s) => (
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

      <SettingsCard
        id="instruction"
        title="Пошаговая настройка виджета"
        subtitle="5 простых шагов — и процесс под контролем"
        steps={steps}
        showVideo
      />

      <section className="at-prefooter" id={isIframe ? 'hidden-in-iframe' : ''}>
        <div className="at-container">
          <ConsultCard />
        </div>
      </section>
    </main>
  );
}
