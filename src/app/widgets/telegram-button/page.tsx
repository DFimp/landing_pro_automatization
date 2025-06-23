'use client';
import React from 'react';
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import './styles.css';
import { hiddenInIframe } from "@/shared/utils/hiddenInIframe";

export default function Page() {
    const { isIframe } = hiddenInIframe();

    const handleScrollToInstruction = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.querySelector('#instruction');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main id="telegram-widget" className="pb-20 pt-20 bg-white">
            {/* Hero Section */}
            <section id={isIframe ? "hidden-in-iframe" : ""} className="container mx-auto px-4 pb-16 bg-white">
                <div className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-violet-100 px-6 py-2 rounded-full">
                        <span className="text-2xl">📱</span>
                        <span className="text-blue-600 font-medium">Мгновенный переход в Telegram из amoCRM</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-blue-800 bg-clip-text text-transparent leading-tight mt-8 mb-8">
                        Написать в Telegram за 1 клик?
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        Превратите каждый номер телефона в прямую ссылку на чат с клиентом в Telegram. 
                        Больше никакого копирования номеров и поиска контактов!
                    </p>

                    <div className="flex flex-col gap-3 justify-center items-center mb-10">
                        <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            Установить виджет ⚡
                        </button>
                        <a
                            href="#instruction"
                            className="text-blue-600 font-medium hover:text-violet-600 transition-colors cursor-pointer"
                            onClick={handleScrollToInstruction}
                        >
                            Смотреть инструкцию →
                        </a>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section id={isIframe ? "hidden-in-iframe" : ""} className="py-20 animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Проблемы традиционного способа
                        </h2>
                        <p className="text-xl text-gray-600">
                            Почему менеджеры теряют время и клиентов при работе с Telegram
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "🐌",
                                title: "Долгий процесс",
                                description: "Копировать номер → Открыть Telegram → Найти контакт → Написать сообщение. Минимум 30-60 секунд на каждого клиента."
                            },
                            {
                                icon: "❌",
                                title: "Ошибки в номерах",
                                description: "Опечатки при копировании приводят к тому, что сообщения не доходят до клиента или идут не тому человеку."
                            },
                            {
                                icon: "😤",
                                title: "Потеря концентрации",
                                description: "Постоянное переключение между amoCRM и Telegram сбивает с рабочего ритма и снижает продуктивность."
                            },
                            {
                                icon: "⏰",
                                title: "Упущенные продажи",
                                description: "Пока менеджер ищет контакт в Telegram, клиент может передумать или обратиться к конкурентам."
                            }
                        ].map((problem, index) => (
                            <div key={index} className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)'}}>
                                <div className="text-4xl mb-4 animate-bounce-slow">{problem.icon}</div>
                                <h3 className="text-xl font-bold text-black-600 mb-3">{problem.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{problem.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section id={isIframe ? "hidden-in-iframe" : ""}  className="container mx-auto px-4 animate-fade-in-up bg-white py-20">
                <div className="text-center mb-16 mt-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Решение всех проблем
                    </h2>
                    <p className="text-xl text-gray-600">
                        Мгновенный переход в чат с клиентом
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {[
                        {
                            icon: "⚡",
                            title: "1 секунда вместо минуты",
                            description: "Один клик по кнопке и вы уже в чате с клиентом. Экономия времени в 30-60 раз!"
                        },
                        {
                            icon: "🎯",
                            title: "100% точность",
                            description: "Автоматическое форматирование номера исключает любые ошибки при переходе в чат."
                        },
                        {
                            icon: "🔄",
                            title: "Без переключений",
                            description: "Telegram открывается в новой вкладке, amoCRM остается активной. Никаких потерь концентрации."
                        },
                        {
                            icon: "📈",
                            title: "Больше продаж",
                            description: "Мгновенная связь с клиентом увеличивает конверсию и снижает время реакции на заявки."
                        }
                    ].map((benefit, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)'}}>
                            <div className="text-4xl mb-4 animate-bounce-slow">{benefit.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Demo Section */}
            <section id={isIframe ? "hidden-in-iframe" : ""} className="py-20 animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Посмотрите, как это работает
                        </h2>
                        <p className="text-xl text-gray-600">
                            Просто и понятно - кликнул и уже в чате!
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 shadow-xl">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">До установки виджета:</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                                            <span className="text-2xl">😫</span>
                                            <div>
                                                <div className="font-semibold text-red-800">+7 961 314-79-02</div>
                                                <div className="text-red-700 text-sm">Нужно копировать номер вручную</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <span>→ Копировать номер</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <span>→ Открыть Telegram</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <span>→ Найти контакт</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <span>→ Написать сообщение</span>
                                        </div>
                                        <div className="text-red-600 font-semibold">⏱️ Время: 30-60 секунд</div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">После установки виджета:</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                                            <span className="text-2xl">😍</span>
                                            <div className="flex-1">
                                                <div className="font-semibold text-green-800 mb-2">+7 961 314-79-02</div>
                                                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all">
                                                    <span>📱</span>
                                                    Написать в Telegram
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-green-600">
                                            <span>→ Один клик по кнопке</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-green-600">
                                            <span>→ Готово! Вы в чате с клиентом</span>
                                        </div>
                                        <div className="text-green-600 font-semibold">⚡ Время: 1 секунда</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instruction Section */}
            <section id="instruction" className="container mx-auto px-4 animate-fade-in-up py-16 bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 pt-8">
                        📋 Пошаговая инструкция
                    </h2>
                    <p className="text-xl text-gray-600">
                        Настройте быстрый переход в Telegram за 3 простых шага
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    1
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Установка виджета</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Установите виджет в вашу amoCRM одним кликом:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Нажмите кнопку "Установить виджет"</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Авторизуйтесь в amoCRM, если потребуется</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Подтвердите установку виджета</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-600">•</span>
                                                <span>Виджет сразу начнет работать во всех разделах amoCRM, где есть номера телефонов</span>
                                            </li>
                                        </ul>
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">✨</span>
                                                <div>
                                                    <div className="font-semibold text-green-800">Важно:</div>
                                                    <div className="text-green-700 mt-1">Виджет абсолютно бесплатный и не требует никаких дополнительных настроек</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                                                Установить виджет сейчас
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    2
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Готово! Пользуйтесь</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Теперь рядом с каждым номером телефона будет кнопка Telegram:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Кликните по номеру телефона в любой карточке</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Выберите кнопку "Написать в Telegram"</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Telegram откроется с чатом для этого номера</span>
                                            </li>
                                        </ul>
                                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">🚀</span>
                                                <div>
                                                    <div className="font-semibold text-purple-800">Результат:</div>
                                                    <div className="text-purple-700 mt-1">Ваши менеджеры начнут работать в 10 раз быстрее и будут чаще связываться с клиентами!</div>
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

            {/* Features Section */}
            <section id={isIframe ? "hidden-in-iframe" : ""}  className="bg-white py-20 animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            🚀 Дополнительные возможности
                        </h2>
                        <p className="text-xl text-gray-600">
                            Все для максимального удобства работы
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {[
                            {
                                icon: "🌍",
                                title: "Поддержка всех номеров",
                                description: "Работает с российскими и международными номерами в любом формате записи."
                            },
                            {
                                icon: "🔧",
                                title: "Автоматическое форматирование",
                                description: "Виджет сам приводит номер к нужному формату для Telegram, исключая ошибки."
                            },
                            {
                                icon: "⚡",
                                title: "Мгновенная работа",
                                description: "Никаких задержек - кнопка работает сразу после клика по номеру телефона."
                            },
                            {
                                icon: "📱",
                                title: "Веб и мобильные версии",
                                description: "Корректно открывает Telegram Web в браузере или мобильное приложение на устройстве."
                            },
                            {
                                icon: "🎯",
                                title: "Точное попадание",
                                description: "Всегда открывает чат именно с нужным контактом, даже если номер записан в нестандартном формате."
                            },
                            {
                                icon: "💝",
                                title: "Полностью бесплатно",
                                description: "Никаких подписок, ограничений по количеству использований или скрытых платежей."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up w-full max-w-sm" style={{animationDelay: `${index * 0.1}s`, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                                <div className="text-3xl mb-4 animate-bounce-slow">{feature.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section id={isIframe ? "hidden-in-iframe" : ""} >
                <ConsultCard></ConsultCard>
            </section>
        </main>
    );
}