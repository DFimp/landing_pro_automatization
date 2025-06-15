'use client';
import React from 'react';
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";

export default function MassiveLeadsWidget() {
    const handleScrollToInstruction = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.querySelector('#instruction');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main id="massive-leads-widget" className="pb-20 pt-20 bg-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 pb-16 bg-white">
                <div className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-violet-100 px-6 py-2 rounded-full">
                        <span className="text-2xl">🚀</span>
                        <span className="text-blue-600 font-medium">Массовое создание сделок для AmoCRM</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-blue-800 bg-clip-text text-transparent leading-tight mt-8 mb-8">
                        Создавайте сотни сделок за секунды!
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        Автоматизируйте создание сделок для всех ваших контактов одним нажатием.
                        Забудьте о рутинной работе - виджет сделает всё за вас быстро и без ошибок.
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
            <section className="container mx-auto px-4 animate-fade-in-up bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Почему наш виджет незаменим?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Мощные функции для максимальной эффективности продаж
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {[
                        {
                            icon: "⚡",
                            title: "Массовое создание за секунды",
                            description: "Создавайте сделки для сотен контактов одновременно. То, что раньше занимало часы, теперь делается за минуты!"
                        },
                        {
                            icon: "🎯",
                            title: "Умная фильтрация контактов",
                            description: "Выбирайте контакты по любым критериям или загружайте готовый список. Точное попадание в целевую аудиторию!"
                        },
                        {
                            icon: "🏷️",
                            title: "Автоматическое добавление тегов",
                            description: "Создавайте новые теги и автоматически применяйте их ко всем новым сделкам. Идеальная сегментация с самого начала!"
                        },
                        {
                            icon: "📊",
                            title: "Выбор воронки и этапа",
                            description: "Размещайте сделки точно в нужную воронку и этап. Никакой путаницы - всё структурировано с первого дня!"
                        },
                        {
                            icon: "🔄",
                            title: "Отслеживание прогресса",
                            description: "Видите статус каждой операции в реальном времени. Полный контроль над процессом создания сделок!"
                        },
                        {
                            icon: "📱 ",
                            title: "Простота использования",
                            description: "Интуитивный интерфейс без сложных настроек. Освоите за 5 минут, сэкономите час!"
                        }
                    ].map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105" style={{animationDelay: `${index * 0.1}s`, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)'}}>
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 ">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            🎯 Когда виджет особенно полезен?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Реальные сценарии использования в бизнесе
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: "📈",
                                title: "Запуск новой рекламной кампании",
                                description: "У вас есть база из 500 потенциальных клиентов из новой рекламы? Создайте для всех сделки за 2 минуты вместо 5 часов ручной работы."
                            },
                            {
                                icon: "🎪",
                                title: "Участие в выставке или событии",
                                description: "Собрали 200 контактов на выставке? Мгновенно создайте сделки с тегом 'Выставка 2025' и начинайте отработку, пока интерес клиентов горячий."
                            },
                            {
                                icon: "📧",
                                title: "Email-маркетинг кампании",
                                description: "Планируете отправить предложение всем клиентам из определенного сегмента? Создайте сделки заранее и отслеживайте конверсию каждого письма."
                            },
                            {
                                icon: "🔄",
                                title: "Реактивация старых клиентов",
                                description: "Хотите вернуть клиентов, которые не покупали больше года? Создайте сделки для всех неактивных контактов с тегом 'Реактивация'."
                            },
                            {
                                icon: "🎁",
                                title: "Сезонные акции и распродажи",
                                description: "Новогодняя распродажа для всех VIP-клиентов? Создайте персональные сделки для каждого и предложите индивидуальные условия."
                            },
                            {
                                icon: "👥",
                                title: "Работа с партнерскими базами",
                                description: "Получили список потенциальных клиентов от партнера? Быстро создайте сделки с соответствующими тегами и воронкой."
                            }
                        ].map((useCase, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105">
                                <div className="text-3xl mb-4">{useCase.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Instruction Section */}
            <section id="instruction" className="container mx-auto px-4 py-16 bg-white">
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
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    1
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Установка виджета</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Установите виджет в вашу AmoCRM систему:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Зайдите в AmoCRM → Настройки → Виджеты</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Найдите "Массовое создание сделок" в каталоге</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Нажмите "Установить" и подтвердите установку</span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    2
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Запуск виджета</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Начните создание сделок:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Перейдите в "Контакты" в разделе "Списки" в AmoCRM</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Выберите несколько контактов способами:</span>
                                            </li>
                                            <div>
                                                <h4 className="text-lg font-semibold text-blue-600 mb-3">🔍 Способ 1: По
                                                    фильтру</h4>
                                                <p className="mb-3">Укажите в интерфейсе AmoCRM нужные фильтры,
                                                    виджет сам найдет нужные контакты и создаст для них сделки</p>
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-semibold text-blue-600 mb-3">👥 Способ 2:
                                                    Конкретные контакты</h4>
                                                <p className="mb-3">Выберите конкретных контактов из списка - отметьте галочками тех, для кого создавать сделки</p>
                                                <ul className="space-y-2 ml-4">
                                                </ul>
                                            </div>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>В левом верхнем углу активируется кнопка "Создать сделки",
                                                    наведитесь на нее чтобы она выехала из боковой панели</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Нажмите на неё - откроется форма виджета</span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500" style={{
                            boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(0, 0, 0, 0.1)'
                        }}>
                            <div className="flex items-start gap-6">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    3
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Заполнение основных
                                        данных</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-6">
                                        <p>Настройте параметры будущих сделок:</p>

                                        <div>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">📝 Название
                                                сделки</h4>
                                            <p className="mb-3">Укажите понятное название, которое будет у всех
                                                создаваемых сделок:</p>
                                            <div className="bg-gray-50 p-4 rounded-xl">
                                                <div className="font-semibold mb-2">Примеры хороших названий:</div>
                                                <ul className="text-sm space-y-1">
                                                    <li>• "Новогодняя акция 2025"</li>
                                                    <li>• "Лиды с выставки RetailTech"</li>
                                                    <li>• "Реактивация клиентов - май 2025"</li>
                                                    <li>• "Партнерские лиды от CompanyX"</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">🎯 Воронка и
                                                этап</h4>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>В поле "Статус" выберите воронку и этап</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>Все сделки будут созданы на выбранном этапе</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">🏷️ Теги для сегментации</h4>
                                            <p className="mb-3">Добавьте теги для сделок:</p>
                                            <div className="bg-gray-50 p-4 rounded-xl">
                                                <div className="font-semibold mb-2">Примеры тегов:</div>
                                                <ul className="text-sm space-y-1">
                                                    <li>• <code className="bg-white px-2 py-1 rounded">холодный лид, реклама, москва</code></li>
                                                    <li>• <code className="bg-white px-2 py-1 rounded">выставка, горячий, b2b</code></li>
                                                    <li>• <code className="bg-white px-2 py-1 rounded">реактивация, vip, повторная продажа</code></li>
                                                </ul>
                                                <p className="text-xs text-gray-600 mt-2">Если тега не существует, он будет создан автоматически</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    4
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Запуск создания сделок</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Последний шаг - запустите процесс создания:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Проверьте все параметры еще раз</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Убедитесь, что количество сделок соответствует ожиданиям</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Нажмите кнопку "Создать"</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Дождитесь завершения операции</span>
                                            </li>
                                        </ul>

                                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">📊</span>
                                                <div>
                                                    <div className="font-semibold text-blue-800">Результат в реальном времени
                                                    </div>
                                                    <p className="text-blue-700 mt-1">Виджет покажет прогресс-бар во время создания</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">⏱️</span>
                                                <div>
                                                    <div className="font-semibold text-yellow-800">Время выполнения
                                                    </div>
                                                    <p className="text-yellow-700 mt-1">Создание 100 сделок занимает
                                                        примерно 1-2 минуты. Не закрывайте страницу до завершения!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 mb-16" style={{
                            boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(0, 0, 0, 0.1)'
                        }}>
                            <div className="flex items-start gap-6">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    6
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Контроль результатов</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Отслеживайте процесс и проверяйте результаты:</p>
                                        <ul className="space-y-2 ml-4">

                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Перейдите в выбранную воронку и проверьте результат</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Используйте созданные теги для быстрой фильтрации</span>
                                            </li>
                                        </ul>

                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">🎉</span>
                                                <div>
                                                    <div className="font-semibold text-green-800">Поздравляем!</div>
                                                    <p className="text-green-700 mt-1">Вы успешно создали множество сделок одновременно. Теперь можете сосредоточиться на продажах!</p>
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


            <ConsultCard></ConsultCard>
        </main>
    );
}
