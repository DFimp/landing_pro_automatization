'use client';
import './style.css';
import React from 'react';
import Image from 'next/image';
import ConsultCard from '@/shared/ui/ConsultCard/ConsultCard';
import SettingsCard from '@/shared/ui/settings/SettingsCard';
import { hiddenInIframe } from '@/shared/utils/hiddenInIframe';

export default function TelegramNotify() {
    const handleScrollToInstruction = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#instruction')?.scrollIntoView({ behavior: 'smooth' });
    };

    const { isIframe } = hiddenInIframe();

    const steps = [
        {
            title: 'Установка виджета в amoCRM',
            content: (
                <div>
                    <p>Установите виджет в вашу amoCRM:</p>
                    <ul className="sc-list">
                        <li>amoCRM → Настройки → Виджеты</li>
                        <li>Найдите «Telegram уведомления»</li>
                        <li>Нажмите «Установить»</li>
                    </ul>
                    <div className="sc-note sc-note--blue">
                        <div className="sc-note-title">Подсказка</div>
                        Если у вас нет прав на установку — обратитесь к администратору аккаунта.
                    </div>
                    <a
                        href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=c31be896-9148-4ec1-9d7a-2aba7b16906e"
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
            title: 'Получение Telegram ID',
            content: (
                <div>
                    <p>Каждому сотруднику нужен свой Telegram ID:</p>
                    <ul className="sc-list">
                        <li>
                            Откройте бота{' '}
                            <a
                                href="https://t.me/pro_automatization_telegram_bot"
                                className="underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @pro_automatization_telegram_bot
                            </a>
                        </li>
                        <li>Нажмите «Запустить» или отправьте /start</li>
                        <li>Скопируйте выданный ID</li>
                    </ul>
                    <div className="sc-note">
                        <div className="sc-note-title">Пример</div>
                        Ваш ID: <strong>123456789</strong>
                    </div>
                </div>
            ),
        },
        {
            title: 'Настройка пользователей',
            content: (
                <div>
                    <p>Добавьте сотрудников в настройках виджета:</p>
                    <ul className="sc-list">
                        <li>Выберите пользователя amoCRM</li>
                        <li>Укажите отображаемое ФИО</li>
                        <li>Вставьте Telegram ID из шага выше</li>
                        <li>Нажмите «Добавить», затем «Сохранить»</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Настройка цифровой воронки',
            content: (
                <div>
                    <p>Создайте правила отправки:</p>
                    <ul className="sc-list">
                        <li>Откройте «Настроить воронку»</li>
                        <li>На нужном этапе добавьте триггер</li>
                        <li>Выберите «Уведомления в Telegram от Про Автоматизацию»</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Настройка параметров уведомления',
            content: (
                <div>
                    <p>Определите текст и получателя:</p>
                    <ul className="sc-list">
                        <li>
                            Текст поддерживает подстановки: <code>{'{name}'}</code>, <code>{'{price}'}</code>,{' '}
                            <code>{'{responsableUserName}'}</code>, <code>{'{link}'}</code> и др.
                        </li>
                        <li>В поле «Кому» выберите сотрудника из списка</li>
                        <li>Задайте дни/часы, когда можно отправлять сообщения</li>
                    </ul>
                    <div className="sc-note sc-note--green">
                        <div className="sc-note-title">Идеи для кнопок SalesBot</div>
                        «Отправить КП», «Назначить встречу», «Создать задачу», «Перевести этап».
                    </div>
                </div>
            ),
        },
        {
            title: 'Тестирование настроек',
            content: (
                <div>
                    <p>Проверьте, что всё работает:</p>
                    <ul className="sc-list">
                        <li>Создайте тестовую сделку/переведите на нужный этап</li>
                        <li>Убедитесь, что уведомление пришло в Telegram</li>
                        <li>Нажмите кнопку SalesBot и проверьте автоматизацию</li>
                    </ul>
                    <div className="sc-note sc-note--red">
                        <div className="sc-note-title">Если уведомления не приходят</div>
                        Проверьте Telegram ID, запуск бота (/start), расписание времени и условие срабатывания.
                    </div>
                </div>
            ),
        },
        {
            title: 'Масштабирование на команду',
            content: (
                <div>
                    <p>Настройте правила для всех ролей:</p>
                    <ul className="sc-list">
                        <li>Менеджеры — новые лиды и смены этапов</li>
                        <li>Руководители — крупные сделки, потери</li>
                        <li>Поддержка — возвраты и жалобы</li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <main className="bg-white">
            <section className="tg-hero" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="tg-container">
                    <div className="tg-pill tg-bleed-left">Виджет Телеграм уведомления для amoCRM</div>

                    <h1 className="tg-hero-title">Готовы быть в курсе событий?</h1>

                    <p className="tg-hero-sub">
                        Получайте мгновенные уведомления в Telegram и запускайте SalesBot<br /> одним нажатием. Полная автоматизация
                        коммуникаций с клиентами<br /> прямо в мессенджере.
                    </p>

                    <div className="tg-cta">
                        <a
                            className="tg-btn-primary"
                            href='https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=c31be896-9148-4ec1-9d7a-2aba7b16906e'
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

            <section className="tg-container" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="tg-features-grid">
                    <div className="tg-feature-card">
                        <div className="tg-feature-ico">
                            <Image src="/widgets/TelegramNotify/bell.png" alt="Иконка колокольчика" width={40} height={40} priority />
                        </div>
                        <h3 className="tg-feature-title">Мгновенные уведомления</h3>
                        <p className="tg-feature-text">
                            Получайте информацию о важных событиях сразу же, как только они происходят. Никаких задержек!
                        </p>
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

            <section className="tg-preview" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="tg-preview-grid">
                    <div className="tg-preview-left">
                        <h2 className="tg-h2">Как выглядят уведомления</h2>
                        <p className="tg-preview-sub">Наглядный пример <br />сообщений в Telegram</p>
                    </div>

                    <div className="tg-preview-right">
                        <div className="tg-phone-wrap">
                            <div className="tg-phone-blob" aria-hidden />
                            <Image
                                src="/widgets/TelegramNotify/telephone.png"
                                alt="Макет телефона"
                                width={540}
                                height={760}
                                className="tg-phone"
                                priority
                            />
                            <div className="tg-bubble">
                                <div className="tg-bubble-inner">
                                    <div className="tg-bubble-msg">
                                        Оплачена сделка: Разработка сайта
                                        <br />
                                        Сумма: 850 000₽
                                        <br />
                                        Клиент: Максим Технологов
                                        <br />
                                        Телефон: <a href="tel:+79994567890">+7(999) 456-78-90</a>
                                    </div>
                                    <button type="button" className="tg-bubble-btn">Подтвердить</button>
                                    <button type="button" className="tg-bubble-btn tg-bubble-btn--ghost">Назначить встречу</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SettingsCard
                id="settings"
                title="Пошаговая настройка виджета"
                subtitle="Следуйте простым шагам для быстрой настройки:"
                steps={steps}
                showVideo
                videoId='4098b9cd2b565c4cd067a39b67350e26'
            />

            <section className="tg-cases" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="tg-container">
                    <h3 className="tg-cases-title">Сценарии использования</h3>
                    <p className="tg-cases-sub">
                        Реальные примеры того, как виджет<br />поможет вашему бизнесу
                    </p>

                    <div className="tg-cases-grid tg-cases-grid--3cols">
                        <div className="tg-case">
                            <div className="tg-case-decor" aria-hidden />
                            <div className="tg-case-card">
                                <h4 className="tg-case-title">Быстрое реагирование<br />на горячие лиды</h4>
                                <p className="tg-case-text">Мгновенно получайте уведомления о новых заявках и сразу связывайтесь с клиентом.</p>
                            </div>
                        </div>

                        <div className="tg-case">
                            <div className="tg-case-decor" aria-hidden />
                            <div className="tg-case-card">
                                <h4 className="tg-case-title">Контроль воронки продаж</h4>
                                <p className="tg-case-text">Отслеживайте движение сделок по этапам. Автоматически отправляйте уведомления при переходе на новый этап.</p>
                            </div>
                        </div>

                        <div className="tg-case-amo tg-case-amo--left" aria-hidden>
                            <span className="tg-case-amo__text">AMO CRM AMO CRM AMO CRM</span>
                        </div>

                        <div className="tg-case-amo tg-case-amo--right" aria-hidden>
                            <span className="tg-case-amo__text">AMO CRM AMO CRM AMO CRM</span>
                        </div>

                        <div className="tg-case">
                            <div className="tg-case-decor" aria-hidden />
                            <div className="tg-case-card">
                                <h4 className="tg-case-title">Командная работа</h4>
                                <p className="tg-case-text">Уведомляйте руководителя о крупных сделках, а коллег — о необходимости позвонить клиенту.</p>
                            </div>
                        </div>

                        <div className="tg-case">
                            <div className="tg-case-decor" aria-hidden />
                            <div className="tg-case-card">
                                <h4 className="tg-case-title">Предотвращение потерь</h4>
                                <p className="tg-case-text">Получайте уведомления своевременно, когда клиент ещё находится на пути к покупке.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tg-prefooter" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="tg-container">
                    <ConsultCard />
                </div>
            </section>
        </main>
    );
}
