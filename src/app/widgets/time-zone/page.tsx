import React from 'react';
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";

export default function TimezoneWidget() {

    return (
        <main id="timezone-widget" className="pb-20 pt-20 bg-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 pb-16 bg-white">
                <div className="text-center space-y-6">
                    <div
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-violet-100 px-6 py-2 rounded-full">
                        <span className="text-2xl">🕐</span>
                        <span className="text-blue-600 font-medium">Виджет времени клиента для AmoCRM</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-blue-800 bg-clip-text text-transparent leading-tight mt-8 mb-8">
                        Звоните в правильное время!
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        Автоматически определяйте регион и текущее время клиента по номеру телефона.
                        Никогда больше не разбудите клиента в 6 утра или не позвоните в полночь!
                    </p>

                    <div className="flex flex-col gap-3 justify-center items-center mb-10">
                        <button
                            className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            Установить виджет бесплатно 🚀
                        </button>
                        <a
                            href="#instruction"
                            className="text-blue-600 font-medium hover:text-violet-600 transition-colors cursor-pointer"
                        >
                            Смотреть как работает →
                        </a>
                    </div>
                </div>
            </section>


            {/* Solution Preview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            🎯 А теперь представьте...
                        </h2>
                        <p className="text-xl text-gray-600">
                            Как изменится ваша работа с виджетом времени клиента
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-green-50 border border-green-200 rounded-3xl p-8 mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                                    <span className="text-2xl text-white">👤</span>
                                </div>
                                <div>
                                    <div className="font-bold text-lg">Иван Петров</div>
                                    <div className="text-gray-600">+7 (495) 123-45-67</div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mb-6">
                                <div className="bg-white p-4 rounded-xl">
                                    <div className="text-sm text-gray-600">Регион</div>
                                    <div className="font-bold text-blue-600">Москва</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl">
                                    <div className="text-sm text-gray-600">Время клиента</div>
                                    <div className="font-bold text-green-600 text-xl">14:23</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl">
                                    <div className="text-sm text-gray-600">Оператор</div>
                                    <div className="font-bold">МТС</div>
                                </div>
                            </div>

                            <div className="bg-green-100 p-4 rounded-xl">
                                <div className="flex items-center gap-2">
                                    <span className="text-green-600">✅</span>
                                    <span className="font-medium text-green-800">Отличное время для звонка!</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                                    <span className="text-2xl text-white">👤</span>
                                </div>
                                <div>
                                    <div className="font-bold text-lg">Анна Владивостокова</div>
                                    <div className="text-gray-600">+7 (423) 987-65-43</div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mb-6">
                                <div className="bg-white p-4 rounded-xl">
                                    <div className="text-sm text-gray-600">Регион</div>
                                    <div className="font-bold text-blue-600">Владивосток</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl">
                                    <div className="text-sm text-gray-600">Время клиента</div>
                                    <div className="font-bold text-yellow-600 text-xl">01:23</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl">
                                    <div className="text-sm text-gray-600">Часовой пояс</div>
                                    <div className="font-bold">UTC+10</div>
                                </div>
                            </div>

                            <div className="bg-yellow-100 p-4 rounded-xl">
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-600">⚠️</span>
                                    <span className="font-medium text-yellow-800">Слишком поздно! Лучше позвонить после 9:00 по времени клиента</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* Instruction Section */}
            <section id="instruction" className="container mx-auto px-4 py-16 ">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-8 pt-8">
                        📋 Как настроить виджет за 3 минуты
                    </h2>
                    {/*<p className="text-xl text-gray-600">
                        Простая инструкция - справится даже новичок
                    </p>*/}
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    1
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Установите виджет в
                                        AmoCRM</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Добавьте виджет в вашу CRM-систему:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Перейдите в AmoCRM → amoМаркет → Виджеты</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Найдите &ldquo;Время клиента&rdquo; в каталоге</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Нажмите &ldquo;Установить&rdquo; и подтвердите</span>
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
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 mb-16" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <div className="flex items-start gap-6">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    2
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Готово! Пользуйтесь</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Теперь виджет автоматически показывает:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-600">✅</span>
                                                <span>Текущее время клиента</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-600">✅</span>
                                                <span>Регион и город</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-600">✅</span>
                                                <span>Мобильного оператора</span>
                                            </li>
                                        </ul>
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">⚡</span>
                                                <div>
                                                    <div className="font-semibold text-green-800">Автоматическая
                                                        работа
                                                    </div>
                                                    <p className="text-green-700 mt-1">После настройки виджет работает
                                                        автоматически - никаких дополнительных действий не требуется</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl">🎯</span>
                                                <div>
                                                    <div className="font-semibold text-yellow-800">Результат</div>
                                                    <p className="text-yellow-700 mt-1">Открывайте любую карточку
                                                        контакта и сразу видите всю информацию о времени клиента</p>
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
