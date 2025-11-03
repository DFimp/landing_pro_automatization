'use client';
import './style.css';
import React from 'react';
import { hiddenInIframe } from '@/shared/utils/hiddenInIframe';
import SettingsCard from '@/shared/ui/settings/SettingsCard';
import ConsultCard from '@/shared/ui/ConsultCard/ConsultCard';
import CaseCard from '@/shared/ui/Case/CaseCard';
import type { CaseItem } from '@/shared/ui/Case/CaseCard';
import ProblemsCard, { type ProblemItem } from '@/shared/ui/ProblemsCard/ProblemsCard';
import FeaturesCard, { type FeatureItem } from '@/shared/ui/FeaturesCard/FeaturesCard';
import PreviewCard from '@/shared/ui/PreviewCard/PreviewCard';

export default function WhatsappButton() {
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
                    <p>Установите виджет в вашу amoCRM одним кликом:</p>
                    <ul className="sc-list">
                        <li>Нажмите кнопку «Установить виджет»</li>
                        <li>Авторизуйтесь в amoCRM, если потребуется</li>
                        <li>Подтвердите установку виджета</li>
                        <li>Виджет сразу начнёт работать во всех разделах amoCRM, где есть номера телефонов</li>
                    </ul>

                    <div className="sc-note sc-note--green">
                        <div className="sc-note-title">Важно</div>
                        Виджет абсолютно бесплатный и не требует никаких дополнительных настроек.
                    </div>

                    <div className="sc-cta" style={{ marginTop: 16 }}>
                        <a
                            href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=9bd50964-9b79-40a5-b786-59c079f7edc8"
                            target="_blank"
                            rel="noopener"
                            className="dist-btn-primary"
                        >
                            Установить виджет сейчас
                        </a>
                    </div>
                </div>
            ),
        },
        {
            title: 'Готово! Пользуйтесь',
            content: (
                <div>
                    <p>Теперь рядом с каждым номером телефона будет кнопка WhatsApp:</p>
                    <ul className="sc-list">
                        <li>Кликните по номеру телефона в любой карточке</li>
                        <li>Выберите кнопку «Написать в WhatsApp»</li>
                        <li>WhatsApp откроется с чатом для этого номера</li>
                    </ul>

                    <div className="sc-note sc-note--purple">
                        <div className="sc-note-title">Результат</div>
                        Ваши менеджеры начнут работать в 10 раз быстрее и будут чаще связываться с клиентами!
                    </div>
                </div>
            ),
        },

    ];

    const caseItems: CaseItem[] = [
        { type: 'stripe', side: 'left', white: true, text: 'AMO CRM AMO CRM AMO CRM' },

        {
            type: 'card',
            title: 'Автоматическое объединение',
            text: <>
                Мгновенно получайте уведомления
                о новых заявках и сразу связывайтесь с клиентом
            </>,
            mobileDecorUrl: '/widgets/CaseCard/amo.svg',
        },

        {
            type: 'card',
            title: 'Гибкие настройки',
            text: <>
                Отслеживайте движение сделок по этапам. Автоматически отправляйте
                уведомления при переходе на новый этап
            </>,
            mobileDecorUrl: '/widgets/CaseCard/amo (1).svg',
        },

        { type: 'stripe', side: 'right', text: 'AMO CRM AMO CRM AMO CRM' },

        { type: 'stripe', side: 'left', text: 'AMO CRM AMO CRM AMO CRM' },

        {
            type: 'card',
            title: 'Умные алгоритмы',
            text: <>
                Уведомляйте руководителей о
                крупных сделках, а коллег - о
                необходимости позвонить клиенту
            </>,
            mobileDecorUrl: '/widgets/CaseCard/amo (2).svg',
        },

        {
            type: 'card',
            title: 'Сохранение истории',
            text: <>
                При объединении сохраняются все
                контакты, теги, компании и важные
                данные из всех сделок
            </>,
            mobileDecorUrl: '/widgets/CaseCard/amo (3).svg',
        },

        { type: 'stripe', side: 'right', white: true, text: 'AMO CRM AMO CRM AMO CRM' },
    ];

    const problems: ProblemItem[] = [
        {
            title: 'Долгий процесс',
            text: (
                <>
                Копировать номер → Открыть WhatsApp → Найти контакт → Начать чат. До минуты на каждого клиента<span className="at-mark">вместо 1 секунды</span>
                </>
            ),
            bgUrl: '/widgets/WhatsappButton/back_timer.png',
        },
        {
            title: 'Постоянные переключения',
            text: (
                <>
                    Туда-сюда между amoCRM и WhatsApp сбивает концентрацию и замедляет работу менеджеров
                </>
            ),
            bgUrl: '/widgets/WhatsappButton/back_switch.png',
        },
        {
            title: 'Ошибки при вводе',
            text: (
                <>
                    Опечатки в номере приводят к тому, что сообщения идут не тому человеку или вообще не доходят
                </>
            ),
            bgUrl: '/widgets/WhatsappButton/back_cross.png',
        },
        {
            title: 'Упущенные продажи',
            text: (
                <>
                    <span className="at-mark">Клиенты не ждут</span> - пока вы ищете их в WhatsApp, они могут уйти к более быстрым конкурентам.
                </>
            ),
            bgUrl: '/widgets/WhatsappButton/back_basket.png',
        },
    ];

    const features: FeatureItem[] = [
        {
            iconUrl: '/widgets/WhatsappButton/group.png',
            title: 'Поддержка всех номеров',
            text: <>Работает с российскими и международными номерами в любом формате записи</>,
        },
        {
            iconUrl: '/widgets/WhatsappButton/sort.png',
            title: 'Автоматическое форматирование',
            text: <>Виджет сам приводит номер к нужному формату для WhatsApp, исключая ошибки</>,
        },
        {
            iconUrl: '/widgets/WhatsappButton/deadline.png',
            title: 'Мгновенная работа',
            text: <>Никаких задержек - кнопка работает сразу после клика по номеру телефона</>,
        },
        {
            iconUrl: '/widgets/WhatsappButton/mobile.png',
            title: 'Веб и мобильные версии',
            text: <>Корректно открывает WhatsApp Web в браузере или мобильное приложение на устройстве</>,
        },
        {
            iconUrl: '/widgets/WhatsappButton/target.png',
            title: 'Точное попадание',
            text: <>Всегда открывает чат именно с нужным контактом, даже если номер записан в нестандартном формате</>,
        },
        {
            iconUrl: '/widgets/WhatsappButton/free.png',
            title: 'Полностью бесплатно',
            text: <>Никаких подписок, ограничений по количеству использований или скрытых платежей</>,
        },
    ];

    return (
        <main className="bg-white">
            <section className="dist-hero" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="at-container">
                    <div className="dist-pill dist-bleed-left">Мгновенный переход в WhatsApp из amoCRM</div>

                    <h1 className="dist-hero-title">Написать в WhatsApp за 1 клик?</h1>

                    <p className="dist-hero-sub">
                        Превратите каждый номер телефона в прямую ссылку на чат с клиентом в WhatsApp. Больше никакого копирования номеров и поиска контактов!
                    </p>

                    <div className="dist-cta">
                        <a
                            className="dist-btn-primary"
                            href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=9bd50964-9b79-40a5-b786-59c079f7edc8"
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

            <ProblemsCard
                title="Проблемы традиционного способа"
                subtitle="Почему менеджеры теряют время и клиентов при работе с WhatsApp"
                items={problems}
            />

            <CaseCard
                title="Решение всех проблем"
                subtitle="Умные алгоритмы для автоматического объединения дублей"
                items={caseItems}
            />

            <PreviewCard
                title="Посмотрите, как это работает!"
                subtitle="Просто и понятно - кликнул и уже в чате!"
                videoUrl=""
                imageUrl="/widgets/WhatsappButton/preview-example.png"
            />

            <section id="instruction" className="ds-how sc-wrapper" aria-label="Пошаговая настройка виджета">
                <SettingsCard
                    id="settings-distribution"
                    title="Как настроить виджет за 3 минуты"
                    subtitle="Следуйте простым шагам для быстрой настройки:"
                    steps={steps}
                    showVideo
                    videoId='b9b542ff41657b10b50987b118fe3920'
                />
            </section>

            <FeaturesCard
                title="Дополнительные возможности"
                subtitle="Уникальные функции для максимальной скорости и удобства"
                items={features}
            />

            <section className="ds-prefooter" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="ds-container">
                    <ConsultCard />
                </div>
            </section>
        </main>
    );
}
