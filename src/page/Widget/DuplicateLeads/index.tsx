'use client';
import './style.css';
import React from 'react';
import { hiddenInIframe } from '@/shared/utils/hiddenInIframe';
import SettingsCard from '@/shared/ui/settings/SettingsCard';
import ConsultCard from '@/shared/ui/ConsultCard/ConsultCard';
import CaseCard, { type CaseItem } from '@/shared/ui/Case/CaseCard';
import ProblemsCard, { type ProblemItem } from '@/shared/ui/ProblemsCard/ProblemsCard';
import FeaturesCard, { type FeatureItem } from '@/shared/ui/FeaturesCard/FeaturesCard';

export default function DuplicateLeads() {
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
                    <p>Нажмите кнопку «Установить виджет» и следуйте инструкциям amoCRM для подключения.</p>
                    <a
                        href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=9036b829-2690-470d-9248-e7c4bb3f6699"
                        target="_blank"
                        rel="noopener"
                        className="sc-btn"
                    >
                        Установить виджет сейчас
                    </a>
                </div>
            ),
        },
        {
            title: 'Основные настройки',
            content: (
                <div>
                    <p>Выберите сущность объединения:</p>
                    <ul className="sc-list">
                        <li><strong>Основной контакт</strong> — объединение по первому контакту в сделке</li>
                        <li><strong>Контакт</strong> — поиск дублей по всем контактам</li>
                        <li><strong>Компания</strong> — объединение по компании</li>
                        <li><strong>Компания или Основной контакт</strong> — универсальный режим</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Приоритет объединения',
            content: (
                <div>
                    <p>Выберите стратегию объединения:</p>
                    <ul className="sc-list">
                        <li><strong>В сторону старшей сделки</strong> — сохраняется самая старая сделка</li>
                        <li><strong>По приоритету в блоке</strong> — учитывается настроенный приоритет этапов</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Дополнительная проверка',
            content: (
                <div>
                    <p>Укажите дополнительное поле для точной проверки дублей. Например, по номеру телефона или email.</p>

                    <div className="sc-note sc-note--blue" style={{ marginTop: 12 }}>
                        <div className="sc-note-title">Совет:</div>
                        <div>Это поможет избежать ошибочного объединения разных клиентов с одинаковыми именами.</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Приоритетные поля',
            content: (
                <div>
                    <p>Выберите поля, значения которых нужно брать из самой новой сделки при объединении.</p>
                    <p>Например: "Ответственный", "Цена", "Название" и любые кастомные поля.</p>
                </div>
            ),
        },
        {
            title: 'Настройка блоков',
            content: (
                <div>
                    <p>Создайте блоки воронок с этапами. В каждом блоке можно:</p>
                    <ul className="sc-list">
                        <li>Задать приоритеты этапов (первый в блоке - самый приоритетный - последний в блоке - самый приоритетный)</li>
                        <li>Включить/выключить объединение внутри блока</li>
                        <li>Настроить несколько воронок в одном блоке</li>
                    </ul>

                    <div className="sc-note sc-note--red" style={{ marginTop: 12 }}>
                        <div className="sc-note-title">Внимание:</div>
                        <p>Если включена опция "Не склеивать внутри блока", дубли в этом блоке объединяться не будут.</p>
                    </div>
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
            title: 'Запуск объединения',
            content: (
                <div>
                    <p>После настройки нажмите <strong>«Применить к существующим сделкам»</strong>, чтобы обработать уже созданные сделки.</p>
                    <p>Новые сделки будут автоматически проверяться на дубли при создании.</p>
                </div>
            ),
        },
    ];

    const features: FeatureItem[] = [
        {
            iconUrl: '/widgets/BackAll/gear.png',
            title: 'Умное объединение данных',
            text: (
                <>
                    При склеивании сохраняются все контакты, теги, компании и кастомные поля
                    из всех дубликатов. Приоритетные поля берутся из самой новой сделки.
                </>
            ),
        },
        {
            iconUrl: '/widgets/BackAll/burger.png',
            title: 'Гибкая настройка приоритетов',
            text: (
                <>
                    Настройте приоритеты этапов в каждой воронке. Сделка с более высоким
                    приоритетом станет основной при объединении.
                </>
            ),
        },
        {
            iconUrl: '/widgets/BackAll/shield.png',
            title: 'Безопасность данных',
            text: (
                <>
                    Виджет не удаляет данные, а корректно объединяет их. Все связанные контакты
                    и компании сохраняются в основной сделке.
                </>
            ),
        },
        {
            iconUrl: '/widgets/BackAll/tag.png',
            title: 'Автоматические теги',
            text: (
                <>
                    После объединения к основной сделке автоматически добавляется специальный тег
                    для отслеживания выполненных операций.
                </>
            ),
        },
        {
            iconUrl: '/widgets/BackAll/boxes.png',
            title: 'Работа с блоками',
            text: (
                <>
                    Создавайте блоки воронок и настраивайте разные правила объединения для разных
                    типов сделок.
                </>
            ),
        },
        {
            iconUrl: '/widgets/BackAll/magnifier.png',
            title: 'Точное обнаружение дублей',
            text: (
                <>
                    Многоуровневый алгоритм поиска учитывает контакты, компании и дополнительные
                    поля, исключая ложные совпадения.
                </>
            ),
        },
    ];

    const problems: ProblemItem[] = [
        {
            title: 'Хаос в системе',
            text: (
                <>
                    Одинаковые клиенты создают <span className="at-mark">несколько</span> сделок, что приводит
                    к путанице и потере важной информации.
                </>
            ),
            bgUrl: '/widgets/BackAll/back_web.png',
        },
        {
            title: 'Потеря времени',
            text: (
                <>
                    Менеджеры тратят драгоценное время на поиск и ручное объединение
                    дублированных сделок.
                </>
            ),
            bgUrl: '/widgets/BackAll/back_watch.png',
        },
        {
            title: 'Неточная статистика',
            text: (
                <>
                    Дубли искажают отчёты и аналитику, <span className="at-mark">мешая</span> принятию правильных
                    управленческих решений.
                </>
            ),
            bgUrl: '/widgets/BackAll/back_chart.png',
        },
        {
            title: 'Упущенные продажи',
            text: (
                <>
                    Из-за дублей можно <span className="at-mark">потерять</span> клиента или дважды обработать
                    одну заявку, что снижает эффективность.
                </>
            ),
            bgUrl: '/widgets/BackAll/back_basket.png',
        },
    ];

    const caseItems: CaseItem[] = [
        { type: 'stripe', side: 'left', white: true, text: 'AMO CRM AMO CRM AMO CRM' },

        {
            type: 'card',
            title: 'Автоматическое объединение',
            text: <>Мгновенно получайте уведомления о новых заявках и сразу связывайтесь с клиентом.</>,
            mobileDecorUrl: '/widgets/BackAll/amo.svg',
        },

        {
            type: 'card',
            title: 'Гибкие настройки',
            text: <>Отслеживайте движение сделок по этапам. Автоматически отправляйте уведомления при переходе на новый этап.</>,
            mobileDecorUrl: '/widgets/BackAll/amo (1).svg',
        },

        { type: 'stripe', side: 'right', text: 'AMO CRM AMO CRM AMO CRM' },
        { type: 'stripe', side: 'left', text: 'AMO CRM AMO CRM AMO CRM' },

        {
            type: 'card',
            title: 'Умные алгоритмы',
            text: <>Уведомляйте руководителей о крупных сделках, а коллег — о необходимости позвонить клиенту.</>,
            mobileDecorUrl: '/widgets/BackAll/amo (2).svg',
        },

        {
            type: 'card',
            title: 'Сохранение истории',
            text: <>При объединении сохраняются все контакты, теги, компании и важные данные из всех сделок.</>,
            mobileDecorUrl: '/widgets/BackAll/amo (3).svg',
        },

        { type: 'stripe', side: 'right', white: true, text: 'AMO CRM AMO CRM AMO CRM' },
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

            <ProblemsCard
                title="Проблемы дублей в amoCRM"
                subtitle="Дубли в amoCRM создают хаос в работе отдела продаж"
                items={problems}
                id={isIframe ? 'hidden-in-iframe' : ''}
            />

            <CaseCard
                title="Решение всех проблем"
                subtitle="Умные алгоритмы для автоматического объединения дублей"
                items={caseItems}
                id={isIframe ? 'hidden-in-iframe' : ''}
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

            <FeaturesCard
                title="Дополнительные возможности"
                subtitle="Уникальные функции для максимальной скорости и удобства"
                items={features}
                id={isIframe ? 'hidden-in-iframe' : ''}
            />

            <section className="at-prefooter" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="at-container">
                    <ConsultCard />
                </div>
            </section>
        </main>
    );
}
