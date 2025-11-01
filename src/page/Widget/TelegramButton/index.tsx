'use client';
import './style.css';
import React from 'react';
import { hiddenInIframe } from '@/shared/utils/hiddenInIframe';
import SettingsCard from '@/shared/ui/settings/SettingsCard';
import ConsultCard from '@/shared/ui/ConsultCard/ConsultCard';
import CaseCard from '@/shared/ui/Case/CaseCard';
import type { CaseItem } from '@/shared/ui/Case/CaseCard';
import ProblemsCard, { type ProblemItem } from '@/shared/ui/ProblemsCard/ProblemsCard';

export default function TelegramButton() {
    const { isIframe } = hiddenInIframe();

    const handleScrollToInstruction = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#instruction')?.scrollIntoView({ behavior: 'smooth' });
    };

    const steps = [
        {
            title: 'Установка и активация виджета',
            content: (
                <div>
                    <p>Установите виджет в вашу amoCRM и активируйте его в нужных воронках:</p>
                    <ul className="sc-list">
                        <li>Нажмите "Установить виджет" и следуйте инструкциям</li>
                        <li>Виджет автоматически синхронизирует список ваших менеджеров</li>
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
            title: 'Настройка активности менеджеров',
            content: (
                <div>
                    <p><strong>Важная настройка для работы виджета:</strong></p>
                    <p>Для этого нажмите на "Аккаунт" в левом верхнем углу, где сможете включить/выключить участие менеджеров в распределении:</p>

                    <img
                        src="/widgets/Distribution/allocate_leads_active_panel.png"
                        alt="Активность менеджеров"
                        style={{ display: 'block', height: 'auto', borderRadius: 12, margin: '12px 0' }}
                    />

                    <ul className="sc-list">
                        <li><strong>Активные менеджеры</strong> - получают новые сделки</li>
                        <li><strong>Неактивные менеджеры</strong> - исключаются из распределения</li>
                        <li>Меняйте статус в реальном времени (отпуск, больничный)</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Настройка триггера в воронке',
            content: (
                <div>
                    <p>Создайте триггер в amoCRM для автоматического распределения:</p>
                    <ul className="sc-list">
                        <li>Зайдите в "Настройки воронки" → выберите этап</li>
                        <li>Выберите виджет "Распределение сделок"</li>
                        <li>Выберите нужный вам триггер воронки</li>
                        <li>Приступайте к настройке</li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Выбор алгоритма распределения',
            content: (
                <div>
                    <p>Виджет поддерживает несколько алгоритмов распределения:</p>

                    <div className="sc-note sc-note--green">
                        <div className="sc-note-title"><strong>Равными долями (по умолчанию)</strong></div>
                        <div>Если не настраивать таблицу распределения - сделки автоматически распределяются поочередно между всеми активными менеджерами</div>
                    </div>

                    <div className="sc-note sc-note--blue">
                        <div className="sc-note-title"><strong>По процентам</strong></div>
                        <div>Каждый менеджер получает определенный процент от общего потока (настраивается в таблице)</div>
                    </div>

                    <div className="sc-note sc-note--red">
                        <div className="sc-note-title"><strong>По максимальному количеству</strong></div>
                        <div>Ограничение количества сделок для каждого менеджера (настраивается в таблице)</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Настройка таблицы распределения (опционально)',
            content: (
                <div>
                    <p>Если нужно распределение по процентам или лимитам - заполните таблицу:</p>
                    <ul className="sc-list">
                        <li><strong>Менеджер:</strong> выберите из списка нужных сотрудников</li>
                        <li><strong>Макс. кол-во:</strong> лимит сделок (0 = без лимита)</li>
                        <li><strong>Процент:</strong> доля от общего потока (0 = не учитывать)</li>
                    </ul>

                    <div className="sc-note sc-note--green">
                        <div className="sc-note-title"><strong>Умная адаптация:</strong></div>
                        <div>Если один из менеджеров в таблице станет неактивным, система автоматически исключит его и пересчитает проценты между оставшимися активными менеджерами</div>
                    </div>

                    <div className="sc-note sc-note--blue">
                        <div className="sc-note-title"><strong>Важно:</strong></div>
                        <div>Если таблица пустая - все активные менеджеры автоматически участвуют в равном распределении</div>
                    </div>

                    <div className="sc-note sc-note--red">
                        <div className="sc-note-title"><strong>Логика процентного распределения</strong></div>
                        <div>При поступлении новой сделки система пересчитывает: "Сколько сделок должен иметь каждый менеджер при новом общем количестве?" Сделка достается тому, кто больше всего "отстает" от своего целевого процента.</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Настройка учета нагрузки для лимитов',
            content: (
                <div>
                    <p>Если используете лимиты по количеству сделок - настройте как считать нагрузку:</p>
                    <ul className="sc-list">
                        <li><strong>"Учитывать максимальное число сделок на этапах":</strong> включите чтобы ограничить подсчет нагрузки только определенными воронками и этапами</li>
                        <li><strong>Выберите воронки и этапы:</strong> только сделки на этих этапах будут учитываться при проверке лимитов менеджеров</li>
                    </ul>

                    <div className="sc-note sc-note--blue">
                        <div className="sc-note-title"><strong>По умолчанию:</strong></div>
                        <div>Если не выбирать конкретные воронки и этапы, система будет учитывать сделки менеджера только в той воронке и на том этапе, где настроен триггер</div>
                    </div>

                    <div className="sc-note sc-note--green">
                        <div className="sc-note-title"><strong>Пример использования:</strong></div>
                        <div>Лимит 20 сделок, но считать сделки менеджера только из этапы "Переговоры" и "Принятие решения", а не всю воронку</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Настройка связанных сущностей',
            content: (
                <div>
                    <p>Настройте что делать с контактами, компаниями и задачами:</p>

                    <div className="sc-note sc-note--blue">
                        <div className="sc-note-title"><strong>Учет существующих связей</strong></div>
                        <div>
                            • <strong>Контакты:</strong> если у контакта сделки уже есть ответственный менеджер - сделка достанется ему<br />
                            • <strong>Компании:</strong> аналогично для ответственного за компанию
                        </div>
                    </div>

                    <div className="sc-note sc-note--green">
                        <div className="sc-note-title"><strong>Обновление ответственного</strong></div>
                        <div>
                            • <strong>Контакты:</strong> назначить ответственного за сделку также ответственным за контакт<br />
                            • <strong>Компании:</strong> назначить ответственного за сделку также ответственным за компанию<br />
                            • <strong>Задачи сделки:</strong> переназначить все задачи сделки новому ответственному
                        </div>
                    </div>

                    <div className="sc-note sc-note--red">
                        <div className="sc-note-title"><strong>Исключение менеджера</strong></div>
                        <div>Укажите ID менеджера в поле "кроме" - для него НЕ будет работать логика контактов/компаний, сделки будут распределяться по основным правилам</div>
                    </div>

                    <div className="sc-note sc-note--blue">
                        <div className="sc-note-title"><strong>Как это работает</strong></div>
                        <div className="space-y-1">
                            <div><strong>Без учета связей:</strong> сделки распределяются только по заданным правилам (проценты, максимум, круговое)</div>
                            <div><strong>С учетом связей:</strong> система сначала проверяет ответственных за контакт/компанию, затем применяет основные правила</div>
                            <div><strong>Обновление:</strong> после назначения ответственного за сделку, система может автоматически назначить его ответственным за связанные сущности</div>
                        </div>
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
            // 1
            title: 'Долгий процесс',
            text: (
                <>
                    Копировать номер → Открыть Telegram → Найти контакт → Написать сообщение.
                    <span className="at-mark"> Минимум 30–60 секунд </span> на каждого клиента.
                </>
            ),
            bgUrl: '/widgets/TelegramButton/back_wheel.png',
        },
        {
            // 2
            title: 'Ошибки в номерах',
            text: (
                <>
                    Опечатки при копировании приводят к тому, что сообщения не доходят до клиента
                    или идут не тому человеку.
                </>
            ),
            bgUrl: '/widgets/TelegramButton/back_what.png',
        },
        {
            // 3
            title: 'Потеря концентрации',
            text: (
                <>
                    <span className="at-mark">Постоянное</span> переключение между amoCRM и Telegram
                    сбивает с рабочего ритма и снижает продуктивность.
                </>
            ),
            bgUrl: '/widgets/TelegramButton/back_electricity.png',
        },
        {
            // 4
            title: 'Упущенные продажи',
            text: (
                <>
                    <span className="at-mark">Пока менеджер ищет</span> контакт в Telegram, клиент может
                    передумать или обратиться к конкурентам.
                </>
            ),
            bgUrl: '/widgets/TelegramButton/back_basket.png',
        },
    ];

    return (
        <main className="bg-white">
            <section className="dist-hero" id={isIframe ? 'hidden-in-iframe' : ''}>
                <div className="at-container">
                    <div className="dist-pill dist-bleed-left">Мгновенный переход в Telegram из amoCRM</div>

                    <h1 className="dist-hero-title">Написать в Telegram за 1 клик?</h1>

                    <p className="dist-hero-sub">
                        Превратите каждый номер телефона в прямую ссылку на чат с клиентом в Telegram. Больше никакого копирования номеров и поиска контактов!
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
                subtitle="Почему менеджеры теряют время и клиентов при работе с Telegram"
                items={problems}
            />

            <CaseCard
                title="Решение всех проблем"
                subtitle="Умные алгоритмы для автоматического объединения дублей"
                items={caseItems}
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
