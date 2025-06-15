// app/widgets/lead-distribution/components/LeadDistributionWidget.tsx
'use client';
import React from 'react';
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";

export default function LeadDistributionWidget() {
    const handleScrollToInstruction = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.querySelector('#instruction');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main id="lead-distribution-widget" className="pb-0 pt-20 bg-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 pb-16 bg-white">
                <div className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-violet-100 px-6 py-2 rounded-full">
                        <span className="text-2xl">⚖️</span>
                        <span className="text-blue-600 font-medium">Умное распределение сделок для AmoCRM</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-blue-800 bg-clip-text text-transparent leading-tight mt-8 mb-8">
                        Справедливо распределить нагрузку?
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        Автоматическое распределение новых сделок между менеджерами по процентам, максимальному количеству или равными долями. 
                        Учет контактов, компаний и активности менеджеров.
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
            <section className="py-20 animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Проблемы неравномерного распределения
                        </h2>
                        <p className="text-xl text-gray-600">
                            Ручное распределение сделок создает хаос и несправедливость
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "⚖️",
                                title: "Неравномерная нагрузка",
                                description: "Одни менеджеры перегружены сделками, другие простаивают. Это снижает общую эффективность команды."
                            },
                            {
                                icon: "🎯",
                                title: "Потеря горячих лидов",
                                description: "Новые заявки попадают к занятым менеджерам и теряются в общем потоке, пока клиент уходит к конкурентам."
                            },
                            {
                                icon: "😤",
                                title: "Конфликты в команде",
                                description: "Споры о том, кому достались лучшие клиенты, снижают мотивацию и портят атмосферу в коллективе."
                            },
                            {
                                icon: "📉",
                                title: "Снижение конверсии",
                                description: "Перегруженные менеджеры не успевают качественно обработать каждую сделку, что ведет к потере продаж."
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
            <section className="container mx-auto px-4 animate-fade-in-up bg-white py-20">
                <div className="text-center mb-16 mt-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Решение всех проблем
                    </h2>
                    <p className="text-xl text-gray-600">
                        Справедливое и умное распределение нагрузки
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {[
                        {
                            icon: "🎯",
                            title: "Автоматическое распределение",
                            description: "Новые сделки мгновенно назначаются подходящему менеджеру без участия руководителя."
                        },
                        {
                            icon: "📊",
                            title: "Распределение по процентам",
                            description: "Задайте процент нагрузки для каждого менеджера в зависимости от опыта и производительности."
                        },
                        {
                            icon: "🔢",
                            title: "Лимиты по количеству",
                            description: "Установите максимальное количество сделок для каждого менеджера, чтобы никто не перегружался."
                        },
                        {
                            icon: "🔄",
                            title: "Круговое распределение",
                            description: "Равномерное распределение сделок между всеми активными менеджерами по очереди."
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

            {/* Instruction Section */}
            <section id="instruction" className="container mx-auto px-4 animate-fade-in-up py-16 bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 pt-8">
                        📋 Пошаговая инструкция
                    </h2>
                    <p className="text-xl text-gray-600">
                        Настройте справедливое распределение за 8 простых шагов
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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Установка и активация виджета</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Установите виджет в вашу amoCRM и активируйте его в нужных воронках:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Нажмите "Установить виджет" и следуйте инструкциям</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Виджет автоматически синхронизирует список ваших менеджеров</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-4">
                                        <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                                            Установить виджет сейчас
                                        </button>
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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Настройка активности менеджеров</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Включите/выключите участие менеджеров в распределении:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span><strong>Активные менеджеры</strong> - получают новые сделки</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span><strong>Неактивные менеджеры</strong> - исключаются из распределения</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Меняйте статус в реальном времени (отпуск, больничный)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    3
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Настройка триггера в воронке</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Создайте триггер в amoCRM для автоматического распределения:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Зайдите в "Настройки воронки" → выберите этап</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Выберите виджет "Распределение сделок"</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Выберите нужный вам триггер воронки</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Приступайте к настройке</span>
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
                                    4
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Выбор алгоритма распределения</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Виджет поддерживает несколько алгоритмов распределения:</p>
                                        <div className="space-y-4">
                                            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-xl">🔄</span>
                                                    <div>
                                                        <div className="font-semibold text-green-800">Равными долями (по умолчанию)</div>
                                                        <div className="text-green-700 mt-1">Если не настраивать таблицу распределения - сделки автоматически распределяются поочередно между всеми активными менеджерами</div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-xl">📊</span>
                                                    <div>
                                                        <div className="font-semibold text-blue-800">По процентам</div>
                                                        <div className="text-blue-700 mt-1">Каждый менеджер получает определенный процент от общего потока (настраивается в таблице)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-xl">🔢</span>
                                                    <div>
                                                        <div className="font-semibold text-orange-800">По максимальному количеству</div>
                                                        <div className="text-orange-700 mt-1">Ограничение количества сделок для каждого менеджера (настраивается в таблице)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    5
                                </div>
                                <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Настройка таблицы распределения (опционально)</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Если нужно распределение по процентам или лимитам - заполните таблицу:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span><strong>Менеджер:</strong> выберите из списка нужных сотрудников</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span><strong>Макс. кол-во:</strong> лимит сделок (0 = без лимита)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span><strong>Процент:</strong> доля от общего потока (0 = не учитывать)</span>
                                            </li>
                                        </ul>
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">🎯</span>
                                                <div>
                                                    <div className="font-semibold text-green-800">Умная адаптация:</div>
                                                    <div className="text-green-700 mt-1">Если один из менеджеров в таблице станет неактивным, система автоматически исключит его и пересчитает проценты между оставшимися активными менеджерами</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">💡</span>
                                                <div>
                                                    <div className="font-semibold text-yellow-800">Важно:</div>
                                                    <div className="text-yellow-700 mt-1">Если таблица пустая - все активные менеджеры автоматически участвуют в равном распределении</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">📊</span>
                                                <div>
                                                    <div className="font-semibold text-purple-800">Логика процентного распределения</div>
                                                    <div className="text-purple-700 mt-1">При поступлении новой сделки система пересчитывает: "Сколько сделок должен иметь каждый менеджер при новом общем количестве?" Сделка достается тому, кто больше всего "отстает" от своего целевого процента.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    6
                                </div>
                                <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Настройка учета нагрузки для лимитов</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Если используете лимиты по количеству сделок - настройте как считать нагрузку:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span><strong>"Учитывать максимальное число сделок на этапах":</strong> включите чтобы ограничить подсчет нагрузки только определенными воронками и этапами</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span><strong>Выберите воронки и этапы:</strong> только сделки на этих этапах будут учитываться при проверке лимитов менеджеров</span>
                                            </li>
                                        </ul>
                                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">📊</span>
                                                <div>
                                                    <div className="font-semibold text-blue-800">По умолчанию:</div>
                                                    <div className="text-blue-700 mt-1">Если не выбирать конкретные воронки и этапы, система будет учитывать сделки менеджера только в той воронке и на том этапе, где настроен триггер</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">🎯</span>
                                                <div>
                                                    <div className="font-semibold text-green-800">Пример использования:</div>
                                                    <div className="text-green-700 mt-1">Лимит 20 сделок, но считать сделки менеджера только из этапы "Переговоры" и "Принятие решения", а не всю воронку</div>
                                                </div>
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
                                    7
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Настройка связанных сущностей</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Настройте что делать с контактами, компаниями и задачами:</p>
                                        <div className="space-y-4">
                                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-xl">🏢</span>
                                                    <div>
                                                        <div className="font-semibold text-blue-800">Учет существующих связей</div>
                                                        <div className="text-blue-700 mt-1">
                                                            • <strong>Контакты:</strong> если у контакта сделки уже есть ответственный менеджер - сделка достанется ему<br/>
                                                            • <strong>Компании:</strong> аналогично для ответственного за компанию
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-xl">🔄</span>
                                                    <div>
                                                        <div className="font-semibold text-green-800">Обновление ответственного</div>
                                                        <div className="text-green-700 mt-1">
                                                            • <strong>Контакты:</strong> назначить ответственного за сделку также ответственным за контакт<br/>
                                                            • <strong>Компании:</strong> назначить ответственного за сделку также ответственным за компанию<br/>
                                                            • <strong>Задачи сделки:</strong> переназначить все задачи сделки новому ответственному
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-xl">⚠️</span>
                                                    <div>
                                                        <div className="font-semibold text-amber-800">Исключение менеджера</div>
                                                        <div className="text-amber-700 mt-1">Укажите ID менеджера в поле "кроме" - для него НЕ будет работать логика контактов/компаний, сделки будут распределяться по основным правилам</div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-xl">ℹ️</span>
                                                    <div>
                                                        <div className="font-semibold text-gray-800">Как это работает</div>
                                                        <div className="text-gray-700 mt-1 space-y-1">
                                                            <div><strong>Без учета связей:</strong> сделки распределяются только по заданным правилам (проценты, максимум, круговое)</div>
                                                            <div><strong>С учетом связей:</strong> система сначала проверяет ответственных за контакт/компанию, затем применяет основные правила</div>
                                                            <div><strong>Обновление:</strong> после назначения ответственного за сделку, система может автоматически назначить его ответственным за связанные сущности</div>
                                                        </div>
                                                    </div>
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
            <section className="bg-white py-20 animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            🚀 Дополнительные возможности
                        </h2>
                        <p className="text-xl text-gray-600">
                            Продвинутые функции для максимальной эффективности
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {[
                            {
                                icon: "🎯",
                                title: "Учет контактов и компаний",
                                description: "Сделки автоматически назначаются менеджерам, которые уже работают с клиентом или его компанией."
                            },
                            {
                                icon: "⚡",
                                title: "Мгновенное распределение",
                                description: "Новые сделки назначаются ответственному в момент перехода на настроенный этап воронки."
                            },
                            {
                                icon: "📊",
                                title: "Умная балансировка",
                                description: "Система учитывает текущую нагрузку менеджеров на разных этапах разных воронок."
                            },
                            {
                                icon: "🔄",
                                title: "Круговое распределение",
                                description: "Справедливое поочередное назначение сделок всем активным менеджерам без настройки процентов."
                            },
                            {
                                icon: "👥",
                                title: "Управление активностью",
                                description: "Быстрое включение/выключение менеджеров из распределения (отпуск, больничный, увольнение)."
                            },
                            {
                                icon: "🎛️",
                                title: "Гибкие настройки",
                                description: "Комбинирование разных алгоритмов: процентов, лимитов, приоритетов контактов и компаний."
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

            <ConsultCard></ConsultCard>
        </main>
    );
}