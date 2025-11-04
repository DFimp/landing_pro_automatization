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

export default function СlosingBan() {
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
                    <p>Первым делом установите виджет в вашу amoCRM систему:</p>
                    <ul className="sc-list">
                        <li>Зайдите в amoCRM → Настройки → Виджеты</li>
                        <li>Найдите виджет «Запрет закрытия задачи без результата» в каталоге</li>
                        <li>Нажмите «Установить» и подтвердите установку</li>
                        <li>Виджет автоматически создаст необходимое поле «Не проверять на задачи»</li>
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
            title: 'Настройка правил',
            content: (
                <div>
                    <p>Для установки правил закрытия задачи:</p>
                    <ul className="sc-list">
                        <li>Перейдите в расширенные настройки виджета</li>
                        <li>Установите максимальное количество символов</li>
                        <li>Нажмите на кнопку «Сохранить»</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Тестирование и мониторинг',
            content: (
                <div>
                    <p>Создайте тестовую задачу и проверьте работу виджета:</p>
                    <ul className="sc-list">
                        <li>Попробуйте закрыть без результата</li>
                        <li>Убедитесь, что виджет блокирует закрытие</li>
                    </ul>

                    <div className="sc-note sc-note--red" style={{ marginTop: 12 }}>
                        Если задача закрылась без результата, обратитесь в поддержку
                    </div>
                </div>
            ),
        },
    ];

    return (
        <main className="bg-white">
            <section className="dist-hero" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="at-container">
                    <div className="dist-pill dist-bleed-left">Запрет закрытия задач без результата для amoCRM</div>

                    <h1 className="dist-hero-title">Нет задачам без результата!</h1>

                    <p className="dist-hero-sub">
                        Виджет не даст закрыть задачу без описания результата. Полная прозрачность работы команды и контроль качества выполнения.
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

            <PreviewCard
                title="Как это выглядит?"
                subtitle="После установки виджета при попытке закрыть задачу пустое поле с результатом подсвечивается красным, и кнопка закрытия не срабатывает. Можно задать минимальное количество символов для текста с результатом."
                videoUrl="/widgets/ClosingBan/ClosingBan.gif"
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

            <section className="ds-prefooter" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="ds-container">
                    <ConsultCard />
                </div>
            </section>
        </main>
    );
}
