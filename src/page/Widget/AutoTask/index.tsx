'use client';
import './style.css';
import React, { useRef } from 'react';
import Image from 'next/image';
import ConsultCard from '@/shared/ui/ConsultCard/ConsultCard';
import SettingsCard from '@/shared/ui/settings/SettingsCard';
import { hiddenInIframe } from '@/shared/utils/hiddenInIframe';
import ProblemsCard, { type ProblemItem } from '@/shared/ui/ProblemsCard/ProblemsCard';
import FeaturesCard, { type FeatureItem } from '@/shared/ui/FeaturesCard/FeaturesCard';

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
          <a
            href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=ffb5b225-672a-4016-b868-6a98db446851"
            target="_blank"
            rel="noopener"
            className="sc-btn"
            style={{ marginTop: 12 }}
          >
            Установить виджет сейчас
          </a>
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

  const problems: ProblemItem[] = [
    {
      title: 'Сделки «висят» без движения',
      text: (
        <>
          Менеджеры <span className="at-mark">забывают</span> связаться с клиентами, сделки теряются, а вы теряете
          деньги. Особенно критично для дорогих продуктов.
        </>
      ),
      bgUrl: '/widgets/AutoTask/back_dollars.png',
    },
    {
      title: 'Менеджеры «забывают» работать',
      text: (
        <>
          Без напоминаний сотрудники могут неделями{' '}
          <span className="at-mark">не&nbsp;контактировать</span> с потенциальными клиентами. Результат — потерянная
          прибыль.
        </>
      ),
      bgUrl: '/widgets/AutoTask/back_message.png',
    },
    {
      title: 'Низкая конверсия воронки',
      text: (
        <>
          Без системного подхода к работе со сделками ваша конверсия остаётся на уровне 3–5% вместо возможных
          <span className="at-mark"> 15–20%</span>.
        </>
      ),
      bgUrl: '/widgets/AutoTask/back_analitic.png',
    },
    {
      title: 'Ручной контроль отнимает время',
      text: (
        <>
          Руководители тратят часы на проверку активности менеджеров <span className="at-mark">вместо развития</span>{' '}
          бизнеса.
        </>
      ),
      bgUrl: '/widgets/AutoTask/back_yeys.png',
    },
  ];


  const features: FeatureItem[] = [
    {
      iconUrl: '/widgets/AutoTask/deployment.png',
      title: 'Умное отслеживание',
      text: (
        <>
          Виджет мониторит все сделки на выбранных этапах каждые 5 минут.
          Если сделка долго без движения — автоматически создаётся задача.
        </>
      ),
    },
    {
      iconUrl: '/widgets/AutoTask/letter_star.png',
      title: 'Гибкая настройка',
      text: (
        <>
          Выберите статусы для отслеживания, тип задачи, ответственного и текст.
          Разные настройки для разных воронок и этапов.
        </>
      ),
    },
    {
      iconUrl: '/widgets/AutoTask/lamp.png',
      title: 'Исключение системных сделок',
      text: (
        <>
          Специальное поле «Не проверять на задачи» позволяет исключить определённые
          сделки из автоматического контроля.
        </>
      ),
    },
    {
      iconUrl: '/widgets/AutoTask/control.png',
      title: 'Контроль ответственности',
      text: (
        <>
          Задачи создаются для ответственного за сделку или назначаются конкретному
          менеджеру по вашему выбору.
        </>
      ),
    },
    {
      iconUrl: '/widgets/AutoTask/deadline.png',
      title: 'Постоянная работа',
      text: (
        <>
          Виджет работает 24/7 в фоновом режиме. Проверка каждые 5 минут гарантирует,
          что ни одна сделка не останется без внимания.
        </>
      ),
    },
    {
      iconUrl: '/widgets/AutoTask/analytic.png',
      title: 'Рост продаж',
      text: (
        <>
          Своевременная работа с клиентами повышает конверсию. Клиенты получают
          внимание в нужный момент и чаще покупают.
        </>
      ),
    },
  ];

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
    el.classList.add('dragging');
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
    el.classList.remove('dragging');
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

      <ProblemsCard
        title="Проблемы традиционного способа"
        subtitle="Почему менеджеры теряют время и клиентов при работе с WhatsApp"
        items={problems}
      />

      <section className="at-solution">
        <FeaturesCard
          title="Решение: Автозадачи в сделках"
          subtitle="Виджет автоматически следит за всеми сделками и создаёт задачи для «спящих» клиентов"
          items={features}
        />
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
        subtitle="Следуйте простым шагам для быстрой настройки:"
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
