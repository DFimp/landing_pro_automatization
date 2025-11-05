'use client';
import './style.css';
import React from 'react';
import { hiddenInIframe } from '@/shared/utils/hiddenInIframe';
import SettingsCard from '@/shared/ui/settings/SettingsCard';
import ConsultCard from '@/shared/ui/ConsultCard/ConsultCard';
import CaseCard, { type CaseItem } from '@/shared/ui/Case/CaseCard';

export default function DuplicateContacts() {
    const { isIframe } = hiddenInIframe();

    const handleScrollToInstruction = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#instruction')?.scrollIntoView({ behavior: 'smooth' });
    };

    const steps = [
        {
            title: 'Установка виджета',
            content: (
                <div>
                    <p>Установите виджет в вашу amoCRM:</p>
                    <ul className="sc-list">
                        <li>amoCRM → Настройки → Интеграции/Виджеты</li>
                        <li>Найдите «Объединение дублей контактов»</li>
                        <li>Нажмите «Установить» и подтвердите доступы</li>
                    </ul>

                    <a
                        href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=e6a1837c-6178-4a0c-9fc0-3e5768595fa2"
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
            title: 'Выбор основного поля',
            content: (
                <div>
                    <p>В разделе «Настройка блока» выберите поле, по которому будут искаться дубли:</p>
                    <ul className="sc-list">
                        <li><strong>Телефон</strong> — объединение контактов с одинаковыми номерами</li>
                        <li><strong>Email</strong> — поиск дублей по одинаковой электронной почте</li>
                        <li><strong>Имя</strong> — объединение контактов с одинаковыми именами</li>
                        <li><strong>Другие поля</strong> — любое другое поле из вашей CRM</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Добавление дополнительных условий',
            content: (
                <div>
                    <p>Нажмите "+ Добавить поле" чтобы добавить дополнительные условия:</p>
                    <ul className="sc-list">
                        <li>Выберите поле из списка</li>
                        <li>Контакты объединятся только если совпадают все указанные поля</li>
                        <li>Например: "Телефон" + "Компания" = объединение только при совпадении и телефона, и компании</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Настройка исключений',
            content: (
                <div>
                    <p>Исключения помогают избежать нежелательных объединений:</p>
                    <ul className="sc-list">
                        <li>Нажмите "+ Исключение" под любым полем</li>
                        <li>Введите значение, которое должно остановить объединение</li>
                        <li>Пример: под "Должность" напишите "Директор" — тогда контакты с этой должностью никогда не объединятся</li>
                    </ul>

                    <div className="sc-note sc-note--yellow" style={{ marginTop: 12 }}>
                        <div className="sc-note-title">Зачем это нужно:</div>
                        <div>
                            Если у вас несколько директоров с одинаковыми телефонами компании,
                            они не должны объединяться в одного контакта.
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Создание альтернативных условий',
            content: (
                <div>
                    <p>Можете создать несколько наборов условий для объединения:</p>
                    <ul className="sc-list">
                        <li>Добавьте второй блок в настройках</li>
                        <li>Контакты объединятся, если подходят под любой из ваших наборов условий</li>
                    </ul>

                    <div className="sc-note" style={{ marginTop: 12 }}>
                        <div className="sc-note-title">Пример:</div>
                        <div className="sc-list">
                            <div>Набор 1: Телефон + Должность</div>
                            <div>Набор 2: Email + Компания</div>
                            <div className="text-sm">
                                Контакты объединятся, если совпадают (телефон и должность) или (email и компания).
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Настройка сохранения данных',
            content: (
                <div>
                    <p>
                        По умолчанию при объединении сохраняются данные из более старого контакта. В правом блоке
                        "Настройка приоритетности полей разных контактов" вы можете изменить это:
                    </p>
                    <ul className="sc-list">
                        <li>Выберите поле из списка</li>
                        <li>Для выбранных полей будут сохраняться данные из более нового контакта</li>
                        <li>Пример: Выберите "Телефон" — тогда при объединении сохранится телефон из нового контакта</li>
                    </ul>

                    <div className="sc-note sc-note--blue" style={{ marginTop: 12 }}>
                        <div className="sc-note-title">Практический совет:</div>
                        <div>
                            Выбирайте поля, которые чаще обновляются — телефоны, должности, адреса. Так у вас будет самая актуальная информация.
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Сохранение и применение',
            content: (
                <div>
                    <p>После настройки всех параметров:</p>
                    <ul className="sc-list">
                        <li>Сначала нажмите кнопку "Сохранить" - это сохранит ваши настройки</li>
                        <li>Затем нажмите "Применить к существующим контактам" - это запустит поиск и объединение уже созданных контактов</li>
                        <li>Все новые контакты будут автоматически проверяться на дубли</li>
                    </ul>
                </div>
            ),
        },
    ];

    const caseItems: CaseItem[] = [
        { type: 'stripe', side: 'left', white: true, text: 'AMO CRM AMO CRM AMO CRM' },

        {
            type: 'card',
            title: 'Автоматическое объединение',
            text: <>Виджет самостоятельно находит и склеивает дубли контактов по настраиваемым правилам, сохраняя всю важную информацию</>,
            mobileDecorUrl: '/widgets/BackAll/amo.svg',
        },

        {
            type: 'card',
            title: 'Гибкие настройки',
            text: <>Настройте поиск дублей по телефону, email, имени или любым другим полям с возможностью создания исключений</>,
            mobileDecorUrl: '/widgets/BackAll/amo (1).svg',
        },

        { type: 'stripe', side: 'right', text: 'AMO CRM AMO CRM AMO CRM' },
        { type: 'stripe', side: 'left', text: 'AMO CRM AMO CRM AMO CRM' },

        {
            type: 'card',
            title: 'Умные алгоритмы',
            text: <>Многоуровневый поиск дублей создания альтернативных условий объединения</>,
            mobileDecorUrl: '/widgets/BackAll/amo (2).svg',
        },

        {
            type: 'card',
            title: 'Сохранение истории',
            text: <>При объединении сохраняются все связанные сделки, задачи, теги и важные данные из всех контактов</>,
            mobileDecorUrl: '/widgets/BackAll/amo (3).svg',
        },

        { type: 'stripe', side: 'right', white: true, text: 'AMO CRM AMO CRM AMO CRM' },
    ];

    return (
        <main className="bg-white">
            <section className="tg-hero" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="tg-container">
                    <div className="tg-pill tg-bleed-left">Объединение дублей контактов для amoCRM</div>

                    <h1 className="tg-hero-title">Избавиться от дублей контактов?</h1>

                    <p className="tg-hero-sub">
                        Автоматическое склеивание дублированных контактов с умными алгоритмами поиска. Экономьте время менеджеров и улучшайте качество вашей базы контактов.
                    </p>

                    <div className="tg-cta">
                        <a
                            className="tg-btn-primary"
                            href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=e6a1837c-6178-4a0c-9fc0-3e5768595fa2"
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

            <CaseCard
                title="Решение всех проблем"
                subtitle="Умные алгоритмы для автоматического объединения дублей"
                items={caseItems}
            />


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
                                <img src="/widgets/BackAll/gear.png" alt="" />
                            </div>
                            <h3 className="at-more-title">Умное объединение данных</h3>
                            <p className="at-more-text">
                                При склеивании сохраняются все сделки, задачи, теги и кастомные поля из всех дублированных контактов. Приоритетные поля берутся из более нового контакта
                            </p>
                        </article>

                        <article className="at-more-card">
                            <div className="at-more-ico" aria-hidden>
                                <img src="/widgets/BackAll/burger.png" alt="" />
                            </div>
                            <h3 className="at-more-title">Гибкая настройка приоритетов</h3>
                            <p className="at-more-text">
                                Выберите, какие поля должны сохраняться из более нового контакта, а какие - из более старого
                            </p>
                        </article>

                        <article className="at-more-card">
                            <div className="at-more-ico" aria-hidden>
                                <img src="/widgets/BackAll/shield.png" alt="" />
                            </div>
                            <h3 className="at-more-title">Безопасность данных</h3>
                            <p className="at-more-text">
                                Виджет не удаляет данные, а корректно объединяет их. Все связанные сделки и компании сохраняются в основном контакте
                            </p>
                        </article>

                        <article className="at-more-card">
                            <div className="at-more-ico" aria-hidden>
                                <img src="/widgets/BackAll/tag.png" alt="" />
                            </div>
                            <h3 className="at-more-title">Система исключений</h3>
                            <p className="at-more-text">
                                Настройте исключения по конкретным значениям полей, чтобы избежать ошибочного объединения разных людей
                            </p>
                        </article>

                        <article className="at-more-card">
                            <div className="at-more-ico" aria-hidden>
                                <img src="/widgets/BackAll/boxes.png" alt="" />
                            </div>
                            <h3 className="at-more-title">Альтернативные условия</h3>
                            <p className="at-more-text">
                                Создавайте несколько наборов условий для поиска дублей - контакты объединятся, если подходят под любой из них
                            </p>
                        </article>

                        <article className="at-more-card">
                            <div className="at-more-ico" aria-hidden>
                                <img src="/widgets/BackAll/magnifier.png" alt="" />
                            </div>
                            <h3 className="at-more-title">Точное обнаружение дублей</h3>
                            <p className="at-more-text">
                                Многоуровневый алгоритм поиска по телефонам, email, именам и дополнительным полям с исключением ложных совпадений
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
