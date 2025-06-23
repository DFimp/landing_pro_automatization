'use client';
import React from 'react';
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import { hiddenInIframe } from "@/shared/utils/hiddenInIframe";

export default function TelegramWidget() {
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
                        <span className="text-2xl">💬</span>
                        <span className="text-blue-600 font-medium">Telegram Виджет для AmoCRM</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-blue-800 bg-clip-text text-transparent leading-tight mt-8 mb-8">
                        Готовы быть в курсе событий?
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        Получайте мгновенные уведомления в Telegram и запускайте SalesBot одним нажатием.
                        Полная автоматизация коммуникаций с клиентами прямо в мессенджере.
                    </p>

                    <div className="flex flex-col gap-3 justify-center items-center mb-10">
                        <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            Установить виджет бесплатно ⚡
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

            {/* Features Section */}
            <section id={isIframe ? "hidden-in-iframe" : ""} className="container mx-auto px-4 animate-fade-in-up bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Почему именно наш виджет?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Уникальные возможности для максимальной эффективности
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {[
                        {
                            icon: "⚡",
                            title: "Мгновенные уведомления",
                            description: "Получайте информацию о важных событиях в сделках сразу же, как только они происходят. Никаких задержек!"
                        },
                        {
                            icon: "🎯",
                            title: "Умные триггеры",
                            description: "Настройте отправку сообщений только при переходе в нужную воронку или этап. Никакого спама!"
                        },
                        {
                            icon: "🤖",
                            title: "Запуск SalesBot одним кликом",
                            description: "Прямо из Telegram запускайте любую автоматизацию AmoCRM. Экономьте время на рутинных действиях!"
                        },
                        {
                            icon: "🕐",
                            title: "Контроль времени отправки",
                            description: "Настройте дни недели и часы для отправки. Не беспокойте клиентов в неподходящее время!"
                        },
                        {
                            icon: "🧹",
                            title: "Автоочистка сообщений",
                            description: "Сообщения могут автоматически удаляться после активации SalesBot. Никакого мусора в чате!"
                        },
                        {
                            icon: "📊",
                            title: "Полная информация о сделке",
                            description: "В сообщении отображается вся ключевая информация: клиент, сумма, ответственный, товары и многое другое!"
                        }
                    ].map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)'}}>
                            <div className="text-4xl mb-4 animate-bounce-slow">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Preview Section */}
            <section id={isIframe ? "hidden-in-iframe" : ""} className="bg-white py-20 animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            📱 Как выглядят уведомления
                        </h2>
                        <p className="text-xl text-gray-600">
                            Наглядный пример сообщений в Telegram
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500" style={{
                            boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(0, 0, 0, 0.1)'
                        }}>
                            <img
                                src="/telegram-notifications-demo.png"
                                alt="Примеры уведомлений Telegram виджета в AmoCRM"
                                className="w-full h-full object-contain rounded-lg"
                            />
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
                        Следуйте простым шагам для быстрой настройки
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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Установка виджета в AmoCRM</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Установите виджет в вашу AmoCRM систему:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Зайдите в AmoCRM → Настройки → Виджеты</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Найдите виджет &ldquo;Telegram Уведомления&rdquo; в каталоге</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Нажмите &ldquo;Установить&rdquo;</span>
                                            </li>
                                        </ul>

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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Получение Telegram ID</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Каждый сотрудник, который хочет получать уведомления, должен узнать свой Telegram ID:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Перейдите в нашего бота: <a href="https://t.me/pro_automatization_telegram_bot" className="text-blue-600 underline hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">@pro_automatization_telegram_bot</a></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Нажмите &ldquo;Запустить&rdquo; или отправьте команду <code className="bg-gray-100 px-2 py-1 rounded">/start</code></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Бот автоматически пришлет ваш уникальный Telegram ID</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Скопируйте и сохраните этот ID - он понадобится для настройки</span>
                                            </li>
                                        </ul>

                                        <div className="bg-blue-600 text-white p-4 rounded-xl font-mono text-sm">
                                            <div className="font-bold mb-2">Пример ответа бота:</div>
                                            <div className="space-y-1">
                                                <div>🆔 Ваш ID для использования виджета: <strong>123456789</strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 - NEW */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    3
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Настройка пользователей</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Добавьте пользователей, которым будут приходить уведомления:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Откройте настройки виджета в AmoCRM</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>В столбце &ldquo;Пользователь&rdquo; выберите сотрудника из AmoCRM</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>В поле &ldquo;ФИО&rdquo; укажите имя, которое будет отображаться в триггере</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>В поле &ldquo;Номер чата Telegram&rdquo; введите ID, полученный от бота</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Нажмите &ldquo;Добавить&rdquo; для сохранения пользователя</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Повторите для всех сотрудников, затем нажмите &ldquo;Сохранить&rdquo;</span>
                                            </li>
                                        </ul>

                                        <div className="bg-gray-50 border rounded-xl p-4">
                                            <div className="font-semibold mb-2">Пример заполнения:</div>
                                            <div className="text-sm space-y-1">
                                                <div><strong>Пользователь:</strong> Иван Петров</div>
                                                <div><strong>ФИО:</strong> Менеджер Иван</div>
                                                <div><strong>ID Telegram:</strong> 123456789</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 7 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    4
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Настройка цифровой воронки</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Создайте правило для автоматической отправки уведомлений:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Зайдите в воронку и нажмите &ldquo;Настроить воронку&rdquo;</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Выберите нужный этап и нажмите &ldquo;Добавить триггер&rdquo;</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Найдите виджет &ldquo;Уведомления в телеграм от Про Автоматизацию&rdquo;</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Нажмите кнопку &ldquo;Добавить&rdquo;</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    5
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Настройка параметров уведомления</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-6">
                                        <p>Самая важная часть - настройка того, как и когда отправлять сообщения:</p>

                                        <div>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">📝 Текст сообщения</h4>
                                            <p className="mb-3">В поле &ldquo;Текст&rdquo; можно использовать специальные переменные для подстановки данных сделки:</p>
                                            <div className="bg-gray-50 p-4 rounded-xl">
                                                <div className="font-semibold mb-2">Доступные переменные:</div>
                                                <div className="grid md:grid-cols-2 gap-2 text-sm">
                                                    <div><code>{`{leadId}`}</code> - ID сделки</div>
                                                    <div><code>{`{name}`}</code> - название сделки</div>
                                                    <div><code>{`{price}`}</code> - бюджет сделки</div>
                                                    <div><code>{`{responsableUserName}`}</code> - ответственный</div>
                                                    <div><code>{`{link}`}</code> - ссылка на сделку</div>
                                                    <div><code>{`{companyId}`}</code> - ID компании</div>
                                                    <div><code>{`{companyName}`}</code> - название компании</div>
                                                    <div><code>{`{companyPhone}`}</code> - телефон компании</div>
                                                    <div><code>{`{companyEmail}`}</code> - email компании</div>
                                                    <div><code>{`{contactId}`}</code> - ID контакта</div>
                                                    <div><code>{`{contactName}`}</code> - имя контакта</div>
                                                    <div><code>{`{contactPhone}`}</code> - телефон контакта</div>
                                                    <div><code>{`{contactEmail}`}</code> - email контакта</div>
                                                    <div><code>{`{contactPosition}`}</code> - должность</div>
                                                    <div><code>{`{products}`}</code> - список товаров</div>
                                                </div>
                                                <div className="mt-3 text-sm text-gray-600">
                                                    <strong>Примечание:</strong> Также доступны все пользовательские поля сделки, компании и контакта по их названиям.
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">👤 Получатель</h4>
                                            <p>В поле &ldquo;Кому&rdquo; укажите сотрудника (из шага &ldquo;Настройка пользователей&rdquo;).</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">🕐 Время работы</h4>
                                            <p className="mb-3">Настройте дни недели и часы, когда можно отправлять уведомления:</p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>Выберите дни недели (например: ПН-ПТ для рабочих дней)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>Укажите временной диапазон (например: 09-18 для рабочего времени)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>Если время не подходящее, сообщение отправится в ближайшее рабочее время</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">🤖 SalesBot кнопки</h4>
                                            <p className="mb-3">Самая мощная функция - возможность запускать автоматизации прямо из Telegram:</p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>Нажмите кнопку + или создайте нового бота</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>Введите название кнопки (например: &ldquo;Отправить договор&rdquo;)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>Можно добавить несколько кнопок для разных действий</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>При нажатии на кнопку в Telegram запустится выбранный SalesBot</span>
                                                </li>
                                            </ul>

                                            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-xl">💡</span>
                                                    <div>
                                                        <div className="font-semibold text-green-800">Идеи для SalesBot кнопок:</div>
                                                        <ul className="text-green-700 mt-2 space-y-1">
                                                            <li>• &ldquo;Отправить коммерческое предложение&rdquo;</li>
                                                            <li>• &ldquo;Назначить встречу&rdquo;</li>
                                                            <li>• &ldquo;Перевести в следующий этап&rdquo;</li>
                                                            <li>• &ldquo;Отправить договор&rdquo;</li>
                                                            <li>• &ldquo;Создать задачу менеджеру&rdquo;</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">🧹 Удаление сообщений</h4>
                                            <p>Включите опцию &ldquo;Удалять сообщение после активации SalesBot&rdquo;, если хотите автоматически очищать чат от обработанных уведомлений.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    6
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Тестирование настроек</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Проверим, что все работает корректно:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Создайте тестовую сделку или переведите существующую на нужный этап</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Проверьте, что уведомление пришло в Telegram</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Нажмите на кнопку SalesBot и убедитесь, что автоматизация запустилась</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Проверьте корректность всех переменных в тексте сообщения</span>
                                            </li>
                                        </ul>

                                        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">⚠️</span>
                                                <div>
                                                    <div className="font-semibold text-red-800">Если уведомления не приходят:</div>
                                                    <ul className="text-red-700 mt-2 space-y-1">
                                                        <li>• Проверьте правильность Telegram ID</li>
                                                        <li>• Убедитесь, что пользователь запустил бота командой /start</li>
                                                        <li>• Проверьте настройки времени работы</li>
                                                        <li>• Убедитесь, что условие срабатывания настроено правильно</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up mb-10" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    7
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Масштабирование на команду</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Настройте уведомления для всех сотрудников:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Попросите каждого сотрудника получить свой Telegram ID у бота</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Создайте отдельные правила цифровой воронки для каждого менеджера</span>
                                            </li>
                                        </ul>

                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">💡</span>
                                                <div>
                                                    <div className="font-semibold text-green-800">Примеры настроек для разных ролей:</div>
                                                    <ul className="text-green-700 mt-2 space-y-1">
                                                        <li><strong>Менеджеры:</strong> уведомления о новых лидах и переходах этапов</li>
                                                        <li><strong>Руководители:</strong> уведомления о крупных сделках и потерянных клиентах</li>
                                                        <li><strong>Отдел поддержки:</strong> уведомления о возвратах и жалобах</li>
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

            {/* Use Cases Section */}
            <section id={isIframe ? "hidden-in-iframe" : ""} className="bg-white py-20 animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            🎯 Сценарии использования
                        </h2>
                        <p className="text-xl text-gray-600">
                            Реальные примеры того, как виджет поможет вашему бизнесу
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "🏃‍♂️",
                                title: "Быстрое реагирование на горячие лиды",
                                description: "Мгновенно получайте уведомления о новых заявках и сразу связывайтесь с клиентом. "
                            },
                            {
                                icon: "📊",
                                title: "Контроль воронки продаж",
                                description: "Отслеживайте движение сделок по этапам. Автоматически отправляйте уведомления при переходе на новый этап."
                            },
                            {
                                icon: "👥",
                                title: "Командная работа",
                                description: "Уведомляйте руководителей о крупных сделках, а коллег - о необходимости позвонить клиенту."
                            },
                            {
                                icon: "🚨",
                                title: "Предотвращение потерь",
                                description: "Получайте уведомления своевременно, когда клиент еще настроен на покупку."
                            }
                        ].map((useCase, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                                <div className="text-3xl mb-4 animate-bounce-slow">{useCase.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{useCase.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
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
