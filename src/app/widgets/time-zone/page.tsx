"use client"

import React from 'react';
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import { hiddenInIframe } from "@/shared/utils/hiddenInIframe";

export default function TimezoneWidget() {
    const { isIframe } = hiddenInIframe();
    
    return (
        <main id="timezone-widget" className="pb-20 pt-20 bg-white">
            {/* Hero Section */}
            <section id={isIframe ? "hidden-in-iframe" : ""} className="container mx-auto px-4 pb-16 bg-white">
                <div className="text-center space-y-6">
                    <div
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-violet-100 px-6 py-2 rounded-full">
                        <span className="text-2xl">🕐</span>
                        <span className="text-blue-600 font-medium">Виджет времени клиента для amoCRM</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-blue-800 bg-clip-text text-transparent leading-tight mt-8 mb-8">
                        Звоните в правильное время!
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        Автоматически определяйте регион и текущее время клиента по номеру телефона.
                        Никогда больше не разбудите клиента в 6 утра или не позвоните в полночь!
                    </p>

                    <div className="flex flex-col gap-3 justify-center items-center mb-10">
                        <a href='https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=25f94eb8-f182-4296-b86f-da4e26854b47' target="_blank" rel="noopener">
                            <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                                Установить виджет ⚡
                            </button>
                        </a>
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
            <section id={isIframe ? "hidden-in-iframe" : ""} className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Как это выглядит?
                        </h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Виджет автоматически отображается прямо в карточке контакта
                        </p>
                    </div>

                    {/* GIF Demo */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500" style={{
                            boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(0, 0, 0, 0.1)'
                        }}>
                            <div
                                className="aspect-video w-full rounded-2xl overflow-hidden flex items-center justify-center">
                                <video
                                    src="/time-zone-demo.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-contain"
                                >
                                    <source src="/time-zone-demo.mp4" type="video/mp4"/>
                                </video>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-gray-600 text-lg">
                                    Виджет показывает время клиента, регион и оператора связи прямо в amoCRM
                                </p>
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
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500" style={{
                            boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(0, 0, 0, 0.1)'
                        }}>
                            <div className="flex items-start gap-6">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    1
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Установите виджет в
                                        amoCRM</h3>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>Добавьте виджет в вашу CRM-систему:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>Перейдите в amoCRM → amoМаркет → Виджеты</span>
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
                        <div className="bg-white rounded-3xl p-8 transition-all duration-500 mb-16" style={{
                            boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(0, 0, 0, 0.1)'
                        }}>
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
                                                    <p className="text-green-700 mt-1">После установки виджет работает
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

            <section id={isIframe ? "hidden-in-iframe" : ""}>
                <ConsultCard></ConsultCard>
            </section>
        </main>
    );
}
