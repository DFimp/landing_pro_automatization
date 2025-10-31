'use client';
import './style.css';
import React from 'react';
import { hiddenInIframe } from '@/shared/utils/hiddenInIframe';
import SettingsCard from '@/shared/ui/settings/SettingsCard';
import ConsultCard from '@/shared/ui/ConsultCard/ConsultCard';

export default function Distribution() {
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
                    <p>Установите виджет «Распределение сделок» в вашу amoCRM:</p>
                    <ul className="sc-list">
                        <li>amoCRM → Настройки → Виджеты</li>
                        <li>Найдите «Умное распределение сделок»</li>
                        <li>Нажмите «Установить» и подтвердите доступы</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Настройка отслеживаемых статусов',
            content: (
                <div>
                    <p>Выберите воронки и этапы, в которых нужно распределять новые сделки.</p>
                    <ul className="sc-list">
                        <li>Добавьте один или несколько этапов</li>
                        <li>При необходимости задайте фильтры</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Правила распределения',
            content: (
                <div>
                    <p>Определите схему распределения: по процентам, по максимуму количеству или поровну.</p>
                    <ul className="sc-list">
                        <li>Задайте веса/проценты для менеджеров</li>
                        <li>Учитывайте активность, контакты и компании</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Сохранение настроек',
            content: (
                <div>
                    <p>Сохраните изменения и проверьте логику на тестовой сделке.</p>
                </div>
            ),
        },
    ];

    return (
        <main className="bg-white">
            <section className="dist-hero" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="at-container">
                    <div className="dist-pill dist-bleed-left">Умное распределение сделок для amoCRM</div>

                    <h1 className="dist-hero-title">Справедливо распределить нагрузку?</h1>

                    <p className="dist-hero-sub">
                        Автоматическое распределение новых сделок между менеджерами по процентам,
                        максимальному количеству или равными долями. Учёт контактов, компаний и активности менеджеров.
                    </p>

                    <div className="dist-cta">
                        <a
                            className="dist-btn-primary"
                            href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=..."
                            target="_blank"
                            rel="noopener"
                        >
                            Установить виджет
                        </a>
                        <a href="#instruction" onClick={handleScrollToInstruction} className="dist-btn-link">
                            Смотреть инструкцию →
                        </a>
                    </div>
                </div>
            </section>

            <section className="dist-problems">
                <div className="at-container">
                    <h2 className="at-section-title">Проблемы неравномерного распределения</h2>
                    <p className="dist-subtitle">Ручное распределение сделок создаёт хаос и несправедливость</p>

                    <div className="dist-problems-grid">
                        <article className="dist-problem-card dist-problem--load">
                            <h3 className="dist-problem-title">Неравномерная нагрузка</h3>
                            <p className="dist-problem-text">
                                Одни менеджеры <span className="dist-mark">перегружены</span> сделками, другие<br />
                                <span className="dist-mark"> простаивают</span>. Это снижает общую эффективность<br />команды.
                            </p>
                        </article>

                        <article className="dist-problem-card dist-problem--leads">
                            <h3 className="dist-problem-title">Потеря горячих лидов</h3>
                            <p className="dist-problem-text">
                                Новые заявки попадают к занятым менеджерам и<br />теряются в общем потоке, пока клиент уходит к<br />конкурентам.
                            </p>
                        </article>

                        <article className="dist-problem-card dist-problem--team">
                            <h3 className="dist-problem-title">Конфликты в команде</h3>
                            <p className="dist-problem-text">
                                Споры о том, кому достались лучшие клиенты,<br />снижают мотивацию и портят атмосферу в<br />коллективе.
                            </p>
                        </article>

                        <article className="dist-problem-card dist-problem--conv">
                            <h3 className="dist-problem-title">Снижение конверсии</h3>
                            <p className="dist-problem-text">
                                Перегруженные менеджеры не успевают<br /> <span className="dist-mark">качественно</span> обработать каждую сделку, что ведёт к<br />потере продаж.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section id="instruction" className="ds-how sc-wrapper" aria-label="Пошаговая настройка виджета">
                <SettingsCard
                    id="settings-distribution"
                    title="Как настроить виджет за 3 минуты"
                    subtitle="Следуйте простым шагам для быстрой настройки:"
                    steps={steps}
                    showVideo
                />
            </section>

            <section className="ds-prefooter" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="ds-container">
                    <ConsultCard />
                </div>
            </section>
        </main>
    );
}
