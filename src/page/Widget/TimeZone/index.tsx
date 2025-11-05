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

export default function TimeZone() {
    const { isIframe } = hiddenInIframe();

    const handleScrollToInstruction = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#instruction')?.scrollIntoView({ behavior: 'smooth' });
    };

    const steps = [
        {
            title: 'Установите виджет в amoCRM',
            content: (
                <div>
                    <p>Добавьте виджет в вашу CRM-систему:</p>
                    <ul className="sc-list">
                        <li>Перейдите в amoCRM → amoМаркет → Виджеты</li>
                        <li>Найдите «Время клиента» в каталоге</li>
                        <li>Нажмите «Установить» и подтвердите</li>
                    </ul>

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
                    <p>Теперь виджет автоматически показывает:</p>
                    <ul className="sc-list">
                        <li>Текущее время клиента</li>
                        <li>Регион и город</li>
                        <li>Мобильного оператора</li>
                    </ul>

                    <div className="sc-note sc-note--green">
                        <div className="sc-note-title">Автоматическая работа</div>
                        После установки виджет работает автоматически — никаких дополнительных действий не требуется.
                    </div>

                    <div className="sc-note sc-note--yellow" style={{ marginTop: 12 }}>
                        <div className="sc-note-title">Результат</div>
                        Открывайте любую карточку контакта — сразу видна вся информация о времени клиента.
                    </div>
                </div>
            ),
        }


    ];

    return (
        <main className="bg-white">
            <section className="dist-hero" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="at-container">
                    <div className="dist-pill dist-bleed-left">Время клиента для amoCRM</div>

                    <h1 className="dist-hero-title">Звоните в правильное время!</h1>

                    <p className="dist-hero-sub">
                        Автоматически определяйте регион и текущее время клиента по номеру телефона. Никогда больше не разбудите клиента в 6 утра или не позвоните в полночь!
                    </p>

                    <div className="dist-cta">
                        <a
                            className="dist-btn-primary"
                            href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=25f94eb8-f182-4296-b86f-da4e26854b47"
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

            <PreviewCard
                title="Как это выглядит?"
                subtitle="Виджет автоматически отображается прямо в карточке контакта"
                videoUrl="/widgets/TimeZone/time-zone-demo.gif"
                imageUrl=""
                id={isIframe ? 'hidden-in-iframe' : ''}
            />

            <section id="instruction" className="ds-how sc-wrapper" aria-label="Пошаговая настройка виджета">
                <SettingsCard
                    id="settings-distribution"
                    title="Как настроить виджет за 3 минуты"
                    subtitle="Следуйте простым шагам для быстрой настройки:"
                    steps={steps}
                    showVideo
                    // videoId='b9b542ff41657b10b50987b118fe3920'
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
