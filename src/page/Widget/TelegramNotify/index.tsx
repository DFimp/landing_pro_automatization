'use client';
import './style.css';
import React from 'react';
import Image from 'next/image';
import ConsultCard from '@/shared/ui/ConsultCard/ConsultCard';

export default function TelegramNotify() {
    const handleScrollToInstruction = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#instruction')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="bg-white">
            <section className="tg-hero">
                <div className="tg-container">
                    <div className="tg-pill tg-bleed-left">Виджет Телеграм уведомления для amoCRM</div>

                    <h1 className="tg-hero-title">Готовы быть в курсе событий?</h1>

                    <p className="tg-hero-sub">
                        Получайте мгновенные уведомления в Telegram и запускайте SalesBot одним нажатием.
                        Полная автоматизация коммуникаций с клиентами прямо в мессенджере.
                    </p>

                    <div className="flex items-center gap-6 mt-8">
                        <a
                            className="tg-btn-primary"
                            href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=26e34407-779d-4b47-bb48-b1ffaed3cc78"
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

            <section className="tg-container">
                <div className="tg-features-grid">
                    <div className="tg-feature-card">
                        <div className="tg-feature-ico">
                            <Image src="/widgets/TelegramNotify/bell.png" alt="Иконка колокольчика" width={40} height={40} priority />
                        </div>
                        <h3 className="tg-feature-title">Мгновенные уведомления</h3>
                        <p className="tg-feature-text">Получайте информацию о важных событиях сразу же, как только они происходят. Никаких задержек!</p>
                    </div>

                    <div className="tg-feature-card">
                        <div className="tg-feature-ico">
                            <Image src="/widgets/TelegramNotify/letter_star.png" alt="Иконка письма" width={40} height={40} />
                        </div>
                        <h3 className="tg-feature-title">Умные триггеры</h3>
                        <p className="tg-feature-text">Отправляйте сообщения только при переходе в нужную воронку или этап. Никакого спама!</p>
                    </div>

                    <div className="tg-feature-card">
                        <div className="tg-feature-ico">
                            <Image src="/widgets/TelegramNotify/cursor.png" alt="Иконка курсора" width={40} height={40} />
                        </div>
                        <h3 className="tg-feature-title">Запуск SalesBot одним кликом</h3>
                        <p className="tg-feature-text">Запускайте любую автоматизацию amoCRM прямо из Telegram и экономьте время на рутине.</p>
                    </div>

                    <div className="tg-feature-card">
                        <div className="tg-feature-ico">
                            <Image src="/widgets/TelegramNotify/clock.png" alt="Иконка часов" width={40} height={40} />
                        </div>
                        <h3 className="tg-feature-title">Контроль времени отправки</h3>
                        <p className="tg-feature-text">Настройте дни недели и часы для отправки. Не беспокойте клиентов в неподходящее время!</p>
                    </div>

                    <div className="tg-feature-card">
                        <div className="tg-feature-ico">
                            <Image src="/widgets/TelegramNotify/letter_cist.png" alt="Иконка письма с кистью" width={40} height={40} />
                        </div>
                        <h3 className="tg-feature-title">Автоочистка сообщений</h3>
                        <p className="tg-feature-text">Сообщения могут автоматически удаляться после активации SalesBot. Никакого мусора в чате!</p>
                    </div>

                    <div className="tg-feature-card">
                        <div className="tg-feature-ico">
                            <Image src="/widgets/TelegramNotify/pyramid.png" alt="Иконка пирамидки со стрелкой" width={40} height={40} />
                        </div>
                        <h3 className="tg-feature-title">Полная информация о сделке</h3>
                        <p className="tg-feature-text">В сообщении отображается ключевая информация: клиент, сумма, ответственный, товары и многое другое!</p>
                    </div>
                </div>
            </section>

            <section className="tg-preview">
                <div className="tg-preview-grid">
                    <div className="tg-preview-left">
                        <h2 className="tg-h2">Как выглядят уведомления</h2>
                        <p className="tg-preview-sub">Наглядный пример сообщений в Telegram</p>
                    </div>

                    <div className="tg-preview-right">
                        <div className="tg-phone-wrap">
                            <div className="tg-phone-glow" aria-hidden />
                            <Image
                                src="/widgets/TelegramNotify/telephone.png"
                                alt="Макет телефона"
                                width={540}
                                height={760}
                                className="tg-phone"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="tg-steps">
                <div className="tg-container">
                    <div className="tg-steps-inner">
                        <h3 className="tg-steps-title">Пошаговая настройка виджета</h3>

                        <div className="tg-video" id="instruction">
                            <div className="tg-play" aria-hidden />
                        </div>

                        <div className="tg-steps-sub">Следуйте простым шагам для быстрой настройки:</div>

                        <div className="tg-acc-list">
                            {[
                                'Установка виджета в amoCRM',
                                'Получение Telegram ID',
                                'Настройка пользователей',
                                'Настройка цифровой воронки',
                                'Настройка параметров уведомления',
                                'Тестирование настроек',
                                'Масштабирование на команду',
                            ].map((title, i) => (
                                <AccordionItem key={i} index={i + 1} title={title} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="tg-cases">
                <div className="tg-container">
                    <h3 className="tg-cases-title">Сценарии использования</h3>
                    <p className="tg-cases-sub">
                        Реальные примеры того, как виджет<br />поможет вашему бизнесу
                    </p>

                    <div className="tg-cases-body">
                        <div className="tg-deco tg-deco--right" aria-hidden>AMO</div>
                        <div className="tg-deco tg-deco--left" aria-hidden>AMO</div>

                        <div className="tg-cases-grid">
                            <div className="tg-case-card">
                                <h4 className="tg-case-title">Быстрое реагирование<br />на горячие лиды</h4>
                                <p className="tg-case-text">Мгновенно получайте уведомления о новых заявках и сразу связывайтесь с клиентом.</p>
                            </div>

                            <div className="tg-case-card">
                                <h4 className="tg-case-title">Контроль воронки продаж</h4>
                                <p className="tg-case-text">Отслеживайте движение сделок по этапам. Автоматически отправляйте уведомления при переходе на новый этап.</p>
                            </div>

                            <div className="tg-case-card">
                                <h4 className="tg-case-title">Командная работа</h4>
                                <p className="tg-case-text">Уведомляйте руководителя о крупных сделках, а коллег — о необходимости позвонить клиенту.</p>
                            </div>

                            <div className="tg-case-card">
                                <h4 className="tg-case-title">Предотвращение потерь</h4>
                                <p className="tg-case-text">Получайте уведомления своевременно, когда клиент ещё находится на пути к покупке.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tg-prefooter">
                <div className="tg-container">
                    <ConsultCard />
                </div>
            </section>
        </main>
    );
}

function AccordionItem({ index, title }: { index: number; title: string }) {
    const [open, setOpen] = React.useState(false);
    return (
        <div className={`tg-acc-item ${open ? 'open' : ''}`}>
            <button className="tg-acc-btn" onClick={() => setOpen(v => !v)}>
                <span className="tg-acc-num">{index}</span>
                <span className="tg-acc-title">{title}</span>
                <span className="tg-plus" aria-hidden />
            </button>
            <div className="tg-acc-content">Здесь будет подробная инструкция для шага «{title}».</div>
        </div>
    );
}
