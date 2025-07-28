'use client';
import React from 'react';
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import { hiddenInIframe } from "@/shared/utils/hiddenInIframe";

export default function AutoTasksWidget() {
    const { isIframe } = hiddenInIframe();
    
    const handleScrollToInstruction = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.querySelector('#instruction');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <main id="auto-tasks-widget" className="pb-20 pt-20 bg-white">
            {/* Hero Section */}
            <section id={isIframe ? "hidden-in-iframe" : ""} className="container mx-auto px-4 pb-16 bg-white">
                <div className="text-center space-y-6">
                    <div
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-violet-100 px-6 py-2 rounded-full">
                        <span className="text-2xl">⚡</span>
                        <span className="text-blue-600 font-medium">Автозадачи для amoCRM</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-blue-800 bg-clip-text text-transparent leading-tight mt-8 mb-8">
                        Никогда не забывайте о сделках!
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        Автоматически создавайте задачи для сделок без активности. Настраиваемые статусы, типы задач и
                        ответственные.
                        <strong className="text-blue-600"> Увеличьте конверсию на 35%</strong> благодаря
                        своевременному контакту с клиентами.
                    </p>

                    <div className="flex flex-col gap-3 justify-center items-center mb-10">
                        <a href='https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=ffb5b225-672a-4016-b868-6a98db446851' target="_blank" rel="noopener">
                            <button
                                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                            >
                              Установить виджет ⚡
                            </button>
                        </a>
                        <a
                            href="#instruction"
                            className="text-blue-600 font-medium hover:text-violet-600 transition-colors cursor-pointer"
                            onClick={handleScrollToInstruction}
                        >
                            Смотреть инструкцию →
                        </a>
                    </div>

                    {/* Статистика */}
                    <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
                        <div className="text-center p-6 bg-blue-50 rounded-xl">
                            <div className="text-3xl font-bold text-blue-600">+35%</div>
                            <div className="text-gray-600">Рост конверсии</div>
                        </div>
                        <div className="text-center p-6 bg-violet-50 rounded-xl">
                            <div className="text-3xl font-bold text-violet-600">0</div>
                            <div className="text-gray-600">Забытых сделок</div>
                        </div>
                        <div className="text-center p-6 bg-green-50 rounded-xl">
                            <div className="text-3xl font-bold text-green-600">5 мин</div>
                            <div className="text-gray-600">На настройку</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section id={isIframe ? "hidden-in-iframe" : ""} className="container mx-auto px-4 animate-fade-in-up py-16 rounded-3xl mb-16">
                <div className="text-center mb-12 mt-27">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        😰 Знакомые проблемы?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        {
                            icon: "💸",
                            title: "Сделки «висят» без движения",
                            description: "Менеджеры забывают связаться с клиентами, сделки теряются, а вы теряете деньги. Особенно критично для дорогих продуктов."
                        },
                        {
                            icon: "😴",
                            title: "Менеджеры «забывают» работать",
                            description: "Без напоминаний сотрудники могут неделями не контактировать с потенциальными клиентами. Результат - потерянная прибыль."
                        },
                        {
                            icon: "📊",
                            title: "Низкая конверсия воронки",
                            description: "Без системного подхода к работе со сделками ваша конверсия остается на уровне 3-5% вместо возможных 15-20%."
                        },
                        {
                            icon: "⏰",
                            title: "Ручной контроль отнимает время",
                            description: "Руководители тратят часы на проверку активности менеджеров вместо развития бизнеса."
                        }
                    ].map((problem, index) => (
                        <div key={index}
                             className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105 animate-fade-in-up"
                             style={{
                                 animationDelay: `${index * 0.1}s`,
                                 boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)'
                             }}>
                            <div className="text-4xl mb-4">{problem.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section id={isIframe ? "hidden-in-iframe" : ""} className="container mx-auto px-4 animate-fade-in-up bg-white">
                <div className="text-center mb-16 mt-35">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Решение: Автозадачи в сделках
                    </h2>
                    <p className="text-xl text-gray-600">
                        Виджет автоматически следит за всеми сделками и создает задачи для &quot;спящих&quot; клиентов
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {[
                        {
                            icon: "🎯",
                            title: "Умное отслеживание",
                            description: "Виджет мониторит все сделки на выбранных этапах каждые 5 минут. Если сделка долго без движения - автоматически создается задача."
                        },
                        {
                            icon: "⚙️",
                            title: "Гибкая настройка",
                            description: "Выберите статусы для отслеживания, тип задач, ответственного и текст. Разные настройки для разных воронок и этапов."
                        },
                        {
                            icon: "🚫",
                            title: "Исключение системных сделок",
                            description: "Специальное поле «Не проверять на задачи» позволяет исключить определенные сделки из автоматического контроля."
                        },
                        {
                            icon: "👤",
                            title: "Контроль ответственности",
                            description: "Задачи создаются для ответственного за сделку или назначаются конкретному менеджеру по вашему выбору."
                        },
                        {
                            icon: "🕐",
                            title: "Постоянная работа",
                            description: "Виджет работает 24/7 в фоновом режиме. Проверка каждые 5 минут гарантирует, что ни одна сделка не останется без внимания."
                        },
                        {
                            icon: "📈",
                            title: "Рост продаж",
                            description: "Своевременная работа с клиентами повышает конверсию. Клиенты получают внимание в нужный момент и чаще покупают."
                        }
                    ].map((feature, index) => (
                        <div key={index}
                             className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105 animate-fade-in-up"
                             style={{
                                 animationDelay: `${index * 0.1}s`,
                                 boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)'
                             }}>
                            <div className="text-4xl mb-4 animate-bounce-slow">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How it works Section */}
            <section id={isIframe ? "hidden-in-iframe" : ""} className="py-20 animate-fade-in-up rounded-3xl">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            🔄 Как это работает
                        </h2>
                        <p className="text-xl text-gray-600">
                            Простой алгоритм, который работает без вашего участия
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {[
                                {
                                    step: 1,
                                    title: "Настройка отслеживания",
                                    description: "Вы выбираете воронки и статусы, которые нужно контролировать. Например: «Переговоры», «Принятие решения».",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: 2,
                                    title: "Автоматический мониторинг",
                                    description: "Каждые 5 минут виджет проверяет все сделки на выбранных этапах и ищет те, в которых давно не было активности.",
                                    color: "bg-violet-500"
                                },
                                {
                                    step: 3,
                                    title: "Создание задач",
                                    description: "Для «спящих» сделок автоматически создается задача с настроенным текстом и назначается ответственному менеджеру.",
                                    color: "bg-green-500"
                                },
                                {
                                    step: 4,
                                    title: "Менеджер получает уведомление",
                                    description: "Ответственный видит задачу в amoCRM и связывается с клиентом. Сделка возвращается в работу!",
                                    color: "bg-purple-500"
                                }
                            ].map((item, index) => (
                                <div key={index}
                                     className={`flex items-center gap-6 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
                                     style={{boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)'}}>
                                    <div
                                        className={`${item.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0`}>
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Instruction Section */}
            <section id="instruction" className="container mx-auto px-4 animate-fade-in-up py-16 bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-8 pt-8">
                        📋 Пошаговая настройка виджета
                    </h2>
                    <p className="text-xl text-gray-600">
                        5 простых шагов для полной автоматизации работы с сделками
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up"
                             style={{
                                 boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)',
                                 border: '1px solid rgba(0, 0, 0, 0.1)'
                             }}>
                            <div className="flex items-start gap-6">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    1
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Установка виджета в
                                        amoCRM</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Первым делом установите виджет в вашу amoCRM систему:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Зайдите в amoCRM → Настройки → Виджеты</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Найдите виджет &quot;Автозадачи в сделках&quot; в каталоге</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Нажмите &quot;Установить&quot; и подтвердите установку</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Виджет автоматически создаст необходимое поле &quot;Не проверять на задачи&quot;</span>
                                            </li>
                                        </ul>

                                        <div className="mt-4">
                                            <button
                                                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                                                Установить виджет сейчас
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up"
                             style={{
                                 boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)',
                                 border: '1px solid rgba(0, 0, 0, 0.1)'
                             }}>
                            <div className="flex items-start gap-6">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    2
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Настройка отслеживаемых
                                        статусов</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Выберите воронки и этапы, которые нужно контролировать:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Откройте настройки виджета в amoCRM</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>В поле &quot;Статус&quot; выберите воронку или конкретные статусы</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Повторите для всех важных этапов (например: &quot;Переговоры&quot;, &quot;Принятие решения&quot;)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Остальные шаги... */}
                        {/* Step 3 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up"
                             style={{
                                 boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)',
                                 border: '1px solid rgba(0, 0, 0, 0.1)'
                             }}>
                            <div className="flex items-start gap-6">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    3
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Настройка задач</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-6">
                                        <p>Настройте параметры автоматически создаваемых задач:</p>

                                        <div>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">📝 Тип задачи</h4>
                                            <p className="mb-3">Выберите тип задачи из списка доступных в amoCRM:</p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>Встреча - для назначения личных встреч</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>Звонок - для напоминания о необходимости позвонить</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>Любой другой настроенный в вашей amoCRM тип</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">📝 Текст задачи</h4>
                                            <p className="mb-3">Напишите текст, который должен быть указан в задаче</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">👤 Ответственный
                                                за задачу</h4>
                                            <p className="mb-3">Выберите, кому назначать создаваемые задачи:</p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span><strong>Ответственному за сделку</strong> - задача назначается текущему ответственному (рекомендуется)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span><strong>Конкретному пользователю</strong> - выберите менеджера из списка (например, для контроля руководителем)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up"
                             style={{
                                 boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)',
                                 border: '1px solid rgba(0, 0, 0, 0.1)'
                             }}>
                            <div className="flex items-start gap-6">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    4
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Сохранение настроек</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Завершите настройку виджета:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Проверьте все заполненные поля</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Убедитесь, что выбраны правильные статусы для отслеживания</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Нажмите кнопку &quot;Сохранить настройки&quot;</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Виджет автоматически начнет работу в фоновом режиме</span>
                                            </li>
                                        </ul>

                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">✅</span>
                                                <div>
                                                    <div className="font-semibold text-green-800">Виджет настроен и
                                                        запущен!
                                                    </div>
                                                    <div className="text-green-700 mt-2">
                                                        Каждые 5 минут система будет проверять все сделки на выбранных
                                                        этапах и создавать задачи для тех, с которыми давно не было
                                                        активности.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up"
                             style={{
                                 boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)',
                                 border: '1px solid rgba(0, 0, 0, 0.1)'
                             }}>
                            <div className="flex items-start gap-6">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    5
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Тестирование и мониторинг</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Проверьте работу виджета и настройте мониторинг:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Найдите сделки на отслеживаемых этапах без недавней активности</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Подождите до 5-10 минут и проверьте, создались ли задачи</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Если нужно исключить сделку из проверки - поставьте галочку в поле &quot;Не проверять на задачи&quot;</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Обучите менеджеров работать с новыми автоматическими задачами</span>
                                            </li>
                                        </ul>

                                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">💡</span>
                                                <div>
                                                    <div className="font-semibold text-yellow-800">Советы по эффективному использованию:</div>
                                                    <ul className="text-yellow-700 mt-2 space-y-1">
                                                        <li>• Начните с 2-3 самых важных этапов</li>
                                                        <li>• Используйте понятные тексты задач с конкретными действиями</li>
                                                        <li>• Отслеживайте количество создаваемых задач в первые дни</li>
                                                        <li>• При необходимости скорректируйте настройки</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">⚠️</span>
                                                <div>
                                                    <div className="font-semibold text-red-800">Если задачи не создаются:</div>
                                                    <ul className="text-red-700 mt-2 space-y-1">
                                                        <li>• Проверьте правильность указанных воронок и этапов</li>
                                                        <li>• Убедитесь, что есть сделки на выбранных этапах</li>
                                                        <li>• Проверьте, что сделки не имеют галочку &quot;Не проверять на задачи&quot;</li>
                                                        <li>• Подождите от 5 до 10 минут - виджет работает с интервалом</li>
                                                        <li>• Обратитесь к нам за консультацией</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id={isIframe ? "hidden-in-iframe" : ""} className={"mt-16"}>
                <ConsultCard></ConsultCard>
            </section>

        </main>
    );
}
