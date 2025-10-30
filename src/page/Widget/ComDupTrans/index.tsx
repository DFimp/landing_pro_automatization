'use client';
import './style.css';
import React from 'react';
import { hiddenInIframe } from '@/shared/utils/hiddenInIframe';
import SettingsCard from '@/shared/ui/settings/SettingsCard';
import ConsultCard from '@/shared/ui/ConsultCard/ConsultCard';

export default function ComDupTrans() {
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
                    <p>Установите виджет в вашу amoCRM:</p>
                    <ul className="sc-list">
                        <li>amoCRM → Настройки → Интеграции/Виджеты</li>
                        <li>Найдите «Объединение дублей сделок»</li>
                        <li>Нажмите «Установить» и подтвердите доступы</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Настройка отслеживаемых статусов',
            content: (
                <div>
                    <p>Выберите воронки и этапы, в которых нужно искать и объединять дубли.</p>
                    <p>Для каждого блока можно включать/выключать объединение.</p>
                </div>
            ),
        },
        {
            title: 'Настройка задач',
            content: (
                <div>
                    <p>Включите автоматическое создание задач после объединения:</p>
                    <ul className="sc-list">
                        <li>Выберите тип задачи</li>
                        <li>Укажите текст задачи</li>
                        <li>Задача будет создана для основной сделки</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Сохранение настроек',
            content: (
                <div>
                    <p>Нажмите «Сохранить». При необходимости примените настройки к уже созданным сделкам.</p>
                </div>
            ),
        },
        {
            title: 'Тестирование и мониторинг',
            content: (
                <div>
                    <p>Создайте правило для автоматической отправки уведомлений:</p>
                    <ul className="sc-list">
                        <li>Зайдите в воронку и нажмите «Настроить воронку»</li>
                        <li>Выберите нужный этап и нажмите «Добавить триггер»</li>
                        <li>Найдите виджет «Уведомления в Telegram от Про Автоматизацию»</li>
                        <li>Нажмите кнопку «Добавить»</li>
                    </ul>

                    <div className="sc-note sc-note--green" style={{ marginTop: 12 }}>
                        <div className="sc-note-title">Настройте уведомления для всех сотрудников:</div>
                        <ul className="sc-list">
                            <li>Попросите каждого сотрудника получить свой Telegram ID у бота</li>
                            <li>Создайте отдельные правила цифровой воронки для каждого менеджера</li>
                        </ul>
                    </div>

                    <div className="sc-note" style={{ marginTop: 12 }}>
                        <div className="sc-note-title">Примеры настроек для разных ролей:</div>
                        <ul className="sc-list">
                            <li>Менеджеры: уведомления о новых лидах и переходах этапов</li>
                            <li>Руководители: уведомления о крупных сделках и потерянных клиентах</li>
                            <li>Отдел поддержки: уведомления о возвратах и жалобах</li>
                        </ul>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <main className="bg-white">
            <section className="tg-hero" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="tg-container">
                    <div className="tg-pill tg-bleed-left">Объединение дублей сделок для amoCRM</div>

                    <h1 className="tg-hero-title">Навести порядок в сделках?</h1>

                    <p className="tg-hero-sub">
                        Автоматическое склеивание дублированных сделок с сохранением всех важных данных.
                        Экономьте время менеджеров и улучшайте качество вашей базы данных.
                    </p>

                    <div className="tg-cta">
                        <a
                            className="tg-btn-primary"
                            href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=9036b829-2690-470d-9248-e7c4bb3f6699"
                            target="_blank"
                            rel="noopener"
                        >
                            Установить виджет
                        </a>
                        <a href="#instruction" onClick={handleScrollToInstruction} className="tg-btn-link">
                            Смотреть инструкцию →
                        </a>
                    </div>
                </div>
            </section>

            <section className="at-problems">
                <div className="at-container">
                    <h2 className="at-section-title">Проблемы дублей в amoCRM</h2>
                    <p className="tg-hero-sub" style={{ color: '#5a6180', marginTop: 6 }}>
                        Дубли в amoCRM создают хаос в работе отдела продаж
                    </p>

                    <div className="at-problems-grid" style={{ marginTop: 20 }}>
                        <article className="at-problem-card at-problem--money">
                            <h3 className="at-problem-title">Хаос в системе</h3>
                            <p className="at-problem-text">
                                Одинаковые клиенты создают <span className="at-mark">несколько</span> сделок, что
                                приводит к путанице и потере важной информации.
                            </p>
                        </article>

                        <article className="at-problem-card at-problem--time">
                            <h3 className="at-problem-title">Потеря времени</h3>
                            <p className="at-problem-text">
                                Менеджеры тратят драгоценное время на поиск и ручное объединение дублированных сделок.
                            </p>
                        </article>

                        <article className="at-problem-card at-problem--chart">
                            <h3 className="at-problem-title">Неточная статистика</h3>
                            <p className="at-problem-text">
                                Дубли искажают отчёты и аналитику, <span className="at-mark">мешая</span> принятию
                                правильных управленческих решений.
                            </p>
                        </article>

                        <article className="at-problem-card at-problem--sleep">
                            <h3 className="at-problem-title">Упущенные продажи</h3>
                            <p className="at-problem-text">
                                Из-за дублей можно <span className="at-mark">потерять</span> клиента или дважды
                                обработать одну заявку, что снижает эффективность.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="at-cases" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="at-container">
                    <h3 className="at-cases-title">Решение всех проблем</h3>
                    <p className="at-cases-sub">Умные алгоритмы для автоматического объединения дублей</p>

                    <div className="at-cases-grid">
                        <div className="at-case-amo at-case-amo--left at-case-amo--white" aria-hidden>
                            <span className="at-case-amo__text">AMO CRM AMO CRM AMO CRM</span>
                        </div>

                        <div className="at-case">
                            <div className="at-case-decor" aria-hidden />
                            <div className="at-case-card">
                                <h4 className="at-case-title">Автоматическое объединение</h4>
                                <p className="at-case-text">
                                    Мгновенно получайте уведомления о новых заявках и сразу связывайтесь с клиентом.
                                </p>
                            </div>
                        </div>

                        <div className="at-case">
                            <div className="at-case-decor" aria-hidden />
                            <div className="at-case-card">
                                <h4 className="at-case-title">Гибкие настройки</h4>
                                <p className="at-case-text">
                                    Отслеживайте движение сделок по этапам. Автоматически отправляйте уведомления при переходе на новый этап.
                                </p>
                            </div>
                        </div>

                        <div className="at-case-amo at-case-amo--right" aria-hidden>
                            <span className="at-case-amo__text">AMO CRM AMO CRM AMO CRM</span>
                        </div>

                        <div className="at-case-amo at-case-amo--left" aria-hidden>
                            <span className="at-case-amo__text">AMO CRM AMO CRM AMO CRM</span>
                        </div>

                        <div className="at-case">
                            <div className="at-case-decor" aria-hidden />
                            <div className="at-case-card">
                                <h4 className="at-case-title">Умные алгоритмы</h4>
                                <p className="at-case-text">
                                    Уведомляйте руководителей о крупных сделках, а коллег — о необходимости позвонить клиенту.
                                </p>
                            </div>
                        </div>

                        <div className="at-case">
                            <div className="at-case-decor" aria-hidden />
                            <div className="at-case-card">
                                <h4 className="at-case-title">Сохранение истории</h4>
                                <p className="at-case-text">
                                    При объединении сохраняются все контакты, теги, компании и важные данные из всех сделок.
                                </p>
                            </div>
                        </div>

                        <div className="at-case-amo at-case-amo--right at-case-amo--white" aria-hidden>
                            <span className="at-case-amo__text">AMO CRM AMO CRM AMO CRM</span>
                        </div>
                    </div>
                </div>
            </section>


            <section id="instruction" className="sc-wrapper" aria-label="Пошаговая настройка виджета">
                <SettingsCard
                    id="settings-dup"
                    title="Пошаговая настройка виджета"
                    subtitle="Следуйте простым шагам для быстрой настройки:"
                    steps={steps}
                    showVideo
                />
            </section>

            <section className="at-more">
                <div className="at-container">
                    <h2 className="at-section-title">Дополнительные возможности</h2>
                    <p className="at-subtitle">Уникальные функции для максимальной эффективности</p>

                    <div className="at-more-grid">
                        <article className="at-more-card">
                            <div className="at-more-ico" aria-hidden>
                                <img src="/widgets/ComDupTrans/gear.png" alt="" />
                            </div>
                            <h3 className="at-more-title">Умное объединение данных</h3>
                            <p className="at-more-text">
                                При склеивании сохраняются все контакты, теги, компании и кастомные поля из всех
                                дубликатов. Приоритетные поля берутся из самой новой сделки.
                            </p>
                        </article>

                        <article className="at-more-card">
                            <div className="at-more-ico" aria-hidden>
                                <img src="/widgets/ComDupTrans/burger.png" alt="" />
                            </div>
                            <h3 className="at-more-title">Гибкая настройка приоритетов</h3>
                            <p className="at-more-text">
                                Настройте приоритеты этапов в каждой воронке. Сделка с более высоким приоритетом
                                станет основной при объединении.
                            </p>
                        </article>

                        <article className="at-more-card">
                            <div className="at-more-ico" aria-hidden>
                                <img src="/widgets/ComDupTrans/shield.png" alt="" />
                            </div>
                            <h3 className="at-more-title">Безопасность данных</h3>
                            <p className="at-more-text">
                                Виджет не удаляет данные, а корректно объединяет их. Все связанные контакты и
                                компании сохраняются в основной сделке.
                            </p>
                        </article>

                        <article className="at-more-card">
                            <div className="at-more-ico" aria-hidden>
                                <img src="/widgets/ComDupTrans/tag.png" alt="" />
                            </div>
                            <h3 className="at-more-title">Автоматические теги</h3>
                            <p className="at-more-text">
                                После объединения к основной сделке автоматически добавляется специальный тег для
                                отслеживания выполненных операций.
                            </p>
                        </article>

                        <article className="at-more-card">
                            <div className="at-more-ico" aria-hidden>
                                <img src="/widgets/ComDupTrans/boxes.png" alt="" />
                            </div>
                            <h3 className="at-more-title">Работа с блоками</h3>
                            <p className="at-more-text">
                                Создавайте блоки воронок и настраивайте разные правила объединения для разных типов
                                сделок.
                            </p>
                        </article>

                        <article className="at-more-card">
                            <div className="at-more-ico" aria-hidden>
                                <img src="/widgets/ComDupTrans/magnifier.png" alt="" />
                            </div>
                            <h3 className="at-more-title">Точное обнаружение дублей</h3>
                            <p className="at-more-text">
                                Многоуровневый алгоритм поиска учитывает контакты, компании и дополнительные поля,
                                исключая ложные совпадения.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="at-prefooter" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="at-container">
                    <ConsultCard />
                </div>
            </section>
        </main>
    );
}
