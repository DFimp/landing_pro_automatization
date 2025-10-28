'use client';
import './style.css';
import React from 'react';
import ConsultCard from '@/shared/ui/ConsultCard/ConsultCard';
import SettingsCard from '@/shared/ui/settings/SettingsCard';
import { hiddenInIframe } from '@/shared/utils/hiddenInIframe';
import Image from 'next/image';

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
                    <p>Укажите, где необходимо контроль «спящих» сделок:</p>
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

    return (
        <main className="bg-white">
            <section className="at-hero" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="at-container">
                    <div className="at-pill at-bleed-left">Автозадачи для amoCRM</div>

                    <h1 className="at-hero-title">Никогда не забывайте о сделках!</h1>

                    <p className="at-hero-sub">
                        Автоматически создавайте задачи для сделок без активности.<br />
                        Настраиваемые статусы, типы задач и ответственные.<br />
                        Увеличьте конверсию на <span className="at-badge">35%</span> благодаря своевременному контакту<br />
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
                                Менеджеры <span className="at-mark">забывают</span> связаться с клиентами, сделки теряются, а вы теряете деньги.
                                Особенно критично для дорогих продуктов.
                            </p>
                        </div>
                        <div className="at-problem-card at-problem--sleep">
                            <h3 className="at-problem-title">Менеджеры «забывают» работать</h3>
                            <p className="at-problem-text">
                                Без напоминаний сотрудники могут неделями <span className="at-mark">не&nbsp;контактировать</span> с потенциальными клиентами.
                                Результат — потерянная прибыль.
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
                                Руководители тратят часы на проверку активности менеджеров <span className="at-mark">вместо развития</span> бизнеса.
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
                                Виджет мониторит все сделки на<br />выбранных этапах каждые 5<br /> минут. Если сделка долго без<br /> движения — автоматически<br /> создаётся задача.
                            </p>
                        </div>

                        <div className="at-feature-card">
                            <div className="at-feature-ico" aria-hidden>
                                <Image src="/widgets/AutoTask/letter_star.png" alt="" width={40} height={40} />
                            </div>
                            <h3 className="at-feature-title">Гибкая настройка</h3>
                            <p className="at-feature-text">
                                Выберите статусы для<br /> отслеживания, тип задачи,<br /> ответственного и текст. Разные<br /> настройки для разных воронок<br /> и этапов.
                            </p>
                        </div>

                        <div className="at-feature-card">
                            <div className="at-feature-ico" aria-hidden>
                                <Image src="/widgets/AutoTask/lamp.png" alt="" width={40} height={40} />
                            </div>
                            <h3 className="at-feature-title">Исключение системных сделок</h3>
                            <p className="at-feature-text">
                                Специальное поле «Не проверять<br /> на задачи» позволяет исключить<br /> определённые сделки из<br /> автоматического контроля.
                            </p>
                        </div>

                        <div className="at-feature-card">
                            <div className="at-feature-ico" aria-hidden>
                                <Image src="/widgets/AutoTask/control.png" alt="" width={40} height={40} />
                            </div>
                            <h3 className="at-feature-title">Контроль ответственности</h3>
                            <p className="at-feature-text">
                                Задачи создаются для<br /> ответственного за сделку или<br /> назначаются конкретному<br /> менеджеру по вашему выбору.
                            </p>
                        </div>

                        <div className="at-feature-card">
                            <div className="at-feature-ico" aria-hidden>
                                <Image src="/widgets/AutoTask/deadline.png" alt="" width={40} height={40} />
                            </div>
                            <h3 className="at-feature-title">Постоянная работа</h3>
                            <p className="at-feature-text">
                                Виджет работает 24/7 в фоновом<br /> режиме. Проверка каждые 5<br /> минут гарантирует, что ни одна<br />сделка не останется без<br /> внимания.
                            </p>
                        </div>

                        <div className="at-feature-card">
                            <div className="at-feature-ico" aria-hidden>
                                <Image src="/widgets/AutoTask/analytic.png" alt="" width={40} height={40} />
                            </div>
                            <h3 className="at-feature-title">Рост продаж</h3>
                            <p className="at-feature-text">
                                Своевременная работа с<br /> клиентами повышает конверсию.<br /> Клиенты получают внимание в<br /> нужный момент и чаще покупают.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="at-how" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="at-container">
                    <h2 className="at-how-title">Как это работает</h2>
                    <p className="at-how-sub">Простой алгоритм, который работает без вашего участия</p>

                    <div className="at-steps-scroll">
                        {[
                            {
                                n: '1',
                                title: 'Настройка отслеживания',
                                text:
                                    'Вы выбираете воронки и статусы, которые нужно контролировать. Например: «Переговоры», «Принятие решения».',
                            },
                            {
                                n: '2',
                                title: 'Автоматический мониторинг',
                                text:
                                    'Каждые 5 минут виджет проверяет все сделки на выбранных этапах и ищет те, в которых давно не было активности.',
                            },
                            {
                                n: '3',
                                title: 'Создание задач',
                                text:
                                    'Для «спящих» сделок автоматически создаётся задача с настроенным текстом и назначается ответственному менеджеру.',
                            },
                            {
                                n: '4',
                                title: 'Менеджер получает уведомление',
                                text:
                                    'Ответственный видит задачу в amoCRM и связывается с клиентом. Сделка возвращается в работу.',
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

function FeatureCard({ emoji, title, text }: { emoji: string; title: string; text: string }) {
    return (
        <div className="at-feature-card">
            <div className="at-feature-ico" aria-hidden>
                {emoji}
            </div>
            <h3 className="at-feature-title">{title}</h3>
            <p className="at-feature-text">{text}</p>
        </div>
    );
}
