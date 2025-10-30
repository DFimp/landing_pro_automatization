import ComDupTrans from '@/page/Widget/ComDupTrans';

export default function Page() {
  return <ComDupTrans />;
}

// 'use client';
// import React from 'react';
// import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
// import './style.css';
// import { hiddenInIframe } from "@/shared/utils/hiddenInIframe";
// import { detectMobile } from '@/shared/utils/detectMobile';

// export default function Page() {
//     const { isMobileView } = detectMobile()
//     const { isIframe } = hiddenInIframe();
//     const handleScrollToInstruction = (e: React.MouseEvent<HTMLAnchorElement>) => {
//         e.preventDefault();
//         const element = document.querySelector('#instruction');
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <main id="duplicate-widget" className="sm:pb-20 sm:pt-20 bg-white">
//             {/* Hero Section */}
//             <section id={isIframe ? "hidden-in-iframe" : ""} className="container mx-auto px-4 pb-16 bg-white">
//                 <div className="text-center space-y-6">
//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-violet-100 px-6 py-2 rounded-full">
//                         <span className="text-2xl">🔗</span>
//                         <span className="text-blue-600 font-medium">Объединение дублей сделок для amoCRM</span>
//                     </div>

//                     <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-blue-800 bg-clip-text text-transparent leading-tight mt-8 mb-8">
//                         Навести порядок в сделках?
//                     </h1>

//                     <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
//                         Автоматическое склеивание дублированных сделок с сохранением всех важных данных. 
//                         Экономьте время менеджеров и улучшайте качество вашей базы данных.
//                     </p>

//                     <div className="flex flex-col gap-3 justify-center items-center mb-10">
//                         <a href='https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=9036b829-2690-470d-9248-e7c4bb3f6699' target="_blank" rel="noopener">
//                             <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
//                                 Установить виджет ⚡
//                             </button>
//                         </a>
//                         <a
//                             href="#instruction"
//                             className="text-blue-600 font-medium hover:text-violet-600 transition-colors cursor-pointer"
//                             onClick={handleScrollToInstruction}
//                         >
//                             Смотреть инструкцию →
//                         </a>
//                     </div>
//                 </div>
//             </section>

//             {/* Problems Section */}
//             <section id={isIframe ? "hidden-in-iframe" : ""} className="py-20 animate-fade-in-up">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                             Проблемы дублей в amoCRM
//                         </h2>
//                         <p className="text-xl text-gray-600">
//                             Дубли в amoCRM создают хаос в работе отдела продаж
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {[
//                             {
//                                 icon: "💸",
//                                 title: "Хаос в системе",
//                                 description: "Одинаковые клиенты создают несколько сделок, что приводит к путанице и потере важной информации."
//                             },
//                             {
//                                 icon: "⏰",
//                                 title: "Потеря времени",
//                                 description: "Менеджеры тратят драгоценное время на поиск и ручное объединение дублированных сделок."
//                             },
//                             {
//                                 icon: "📊",
//                                 title: "Неточная статистика",
//                                 description: "Дубли искажают отчеты и аналитику, мешая принятию правильных управленческих решений."
//                             },
//                             {
//                                 icon: "🎯",
//                                 title: "Упущенные продажи",
//                                 description: "Из-за дублей можно потерять клиента или дважды обработать одну заявку, что снижает эффективность."
//                             }
//                         ].map((problem, index) => (
//                             <div key={index} className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)'}}>
//                                 <div className="text-4xl mb-4 animate-bounce-slow">{problem.icon}</div>
//                                 <h3 className="text-xl font-bold text-black-600 mb-3">{problem.title}</h3>
//                                 <p className="text-gray-600 leading-relaxed text-sm">{problem.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Solutions Section */}
//             <section id={isIframe ? "hidden-in-iframe" : ""} className="container mx-auto px-4 animate-fade-in-up bg-white py-20">
//                 <div className="text-center mb-16 mt-16">
//                     <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                         Решение всех проблем
//                     </h2>
//                     <p className="text-xl text-gray-600">
//                         Умные алгоритмы для автоматического объединения дублей
//                     </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//                     {[
//                         {
//                             icon: "🤖",
//                             title: "Автоматическое объединение",
//                             description: "Виджет самостоятельно находит и склеивает дубли по настраиваемым правилам, сохраняя всю важную информацию."
//                         },
//                         {
//                             icon: "⚙️",
//                             title: "Гибкие настройки",
//                             description: "Настройте приоритеты полей, выберите основание для поиска дублей и задайте правила объединения."
//                         },
//                         {
//                             icon: "🧠",
//                             title: "Умные алгоритмы",
//                             description: "Поиск дублей по контактам, компаниям или дополнительным полям с учетом приоритетов этапов."
//                         },
//                         {
//                             icon: "💾",
//                             title: "Сохранение истории",
//                             description: "При объединении сохраняются все контакты, теги, компании и важные данные из всех сделок."
//                         }
//                     ].map((benefit, index) => (
//                         <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)'}}>
//                             <div className="text-4xl mb-4 animate-bounce-slow">{benefit.icon}</div>
//                             <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
//                             <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Instruction Section */}
//             <section id="instruction" className="container mx-auto px-4 animate-fade-in-up py-16 bg-white">
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl font-bold text-gray-900 mb-8 pt-8">
//                         📋 Пошаговая инструкция
//                     </h2>
//                     <p className="text-xl text-gray-600">
//                         Следуйте простым шагам для быстрой настройки виджета
//                     </p>
//                 </div>

//                 <div className="max-w-4xl mx-auto">
//                     <div className="space-y-8">
//                         {/* Step 1 */}
//                         <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
//                             <div className="flex items-start gap-6">
//                                 <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
//                                     1
//                                 </div>
//                                 <div className="flex-1">
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Установка виджета</h3>
//                                     <div className="text-gray-700 leading-relaxed space-y-4">
//                                         <p>Нажмите кнопку "Установить виджет" и следуйте инструкциям amoCRM для подключения.</p>
//                                     </div>
//                                     { isMobileView && <div className="mt-4">
//                                     <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
//                                         Установить виджет сейчас
//                                     </button>
//                                 </div> }
//                                 </div>
//                                 { !isMobileView && <div className="mt-4">
//                                     <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
//                                         Установить виджет сейчас
//                                     </button>
//                                 </div> }
//                             </div>
//                         </div>

//                         {/* Step 2 */}
//                         <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
//                             <div className="flex items-start gap-6">
//                                 <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
//                                     2
//                                 </div>
//                                 <div className="flex-1">
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Основные настройки</h3>
//                                     <div className="text-gray-700 leading-relaxed space-y-4">
//                                         <p>Выберите сущность объединения:</p>
//                                         <ul className="space-y-2 ml-4">
//                                             <li className="flex items-start gap-2">
//                                                 <span className="text-blue-600">•</span>
//                                                 <span><strong>Основной контакт</strong> - объединение по первому контакту в сделке</span>
//                                             </li>
//                                             <li className="flex items-start gap-2">
//                                                 <span className="text-blue-600">•</span>
//                                                 <span><strong>Контакт</strong> - поиск дублей по всем контактам</span>
//                                             </li>
//                                             <li className="flex items-start gap-2">
//                                                 <span className="text-blue-600">•</span>
//                                                 <span><strong>Компания</strong> - объединение по компании</span>
//                                             </li>
//                                             <li className="flex items-start gap-2">
//                                                 <span className="text-blue-600">•</span>
//                                                 <span><strong>Компания или Основной контакт</strong> - универсальный режим</span>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Step 3 */}
//                         <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
//                             <div className="flex items-start gap-6">
//                                 <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
//                                     3
//                                 </div>
//                                 <div className="flex-1">
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Приоритет объединения</h3>
//                                     <div className="text-gray-700 leading-relaxed space-y-4">
//                                         <p>Выберите стратегию объединения:</p>
//                                         <ul className="space-y-2 ml-4">
//                                             <li className="flex items-start gap-2">
//                                                 <span className="text-blue-600">•</span>
//                                                 <span><strong>В сторону старшей сделки</strong> - сохраняется самая старая сделка</span>
//                                             </li>
//                                             <li className="flex items-start gap-2">
//                                                 <span className="text-blue-600">•</span>
//                                                 <span><strong>По приоритету в блоке</strong> - учитывается настроенный приоритет этапов</span>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Step 4 */}
//                         <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
//                             <div className="flex items-start gap-6">
//                                 <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
//                                     4
//                                 </div>
//                                 <div className="flex-1">
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Дополнительная проверка</h3>
//                                     <div className="text-gray-700 leading-relaxed space-y-4">
//                                         <p>Укажите дополнительное поле для точной проверки дублей. Например, по номеру телефона или email.</p>
//                                         <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
//                                             <div className="flex items-start gap-3">
//                                                 <span className="text-xl">💡</span>
//                                                 <div>
//                                                     <div className="font-semibold text-yellow-800">Совет:</div>
//                                                     <div className="text-yellow-700 mt-1">Это поможет избежать ошибочного объединения разных клиентов с одинаковыми именами.</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Step 5 */}
//                         <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
//                             <div className="flex items-start gap-6">
//                                 <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
//                                     5
//                                 </div>
//                                 <div className="flex-1">
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Приоритетные поля</h3>
//                                     <div className="text-gray-700 leading-relaxed space-y-4">
//                                         <p>Выберите поля, значения которых нужно брать из самой новой сделки при объединении.</p>
//                                         <p>Например: "Ответственный", "Цена", "Название" и любые кастомные поля.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Step 6 */}
//                         <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
//                             <div className="flex items-start gap-6">
//                                 <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
//                                     6
//                                 </div>
//                                 <div className="flex-1">
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Настройка блоков</h3>
//                                     <div className="text-gray-700 leading-relaxed space-y-4">
//                                         <p>Создайте блоки воронок с этапами. В каждом блоке можно:</p>
//                                         <ul className="space-y-2 ml-4">
//                                             <li className="flex items-start gap-2">
//                                                 <span className="text-blue-600">•</span>
//                                                 <span>Задать приоритеты этапов (первый в блоке - самый приоритетный -&gt; последний в блоке - самый приоритетный)</span>
//                                             </li>
//                                             <li className="flex items-start gap-2">
//                                                 <span className="text-blue-600">•</span>
//                                                 <span>Включить/выключить объединение внутри блока</span>
//                                             </li>
//                                             <li className="flex items-start gap-2">
//                                                 <span className="text-blue-600">•</span>
//                                                 <span>Настроить несколько воронок в одном блоке</span>
//                                             </li>
//                                         </ul>
//                                         <div className="bg-red-50 border border-red-200 rounded-xl p-4">
//                                             <div className="flex items-start gap-3">
//                                                 <span className="text-xl">⚠️</span>
//                                                 <div>
//                                                     <div className="font-semibold text-red-800">Внимание:</div>
//                                                     <div className="text-red-700 mt-1">Если включена опция "Не склеивать внутри блока", дубли в этом блоке объединяться не будут.</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Step 7 */}
//                         <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
//                             <div className="flex items-start gap-6">
//                                 <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
//                                     7
//                                 </div>
//                                 <div className="flex-1">
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Настройка задач</h3>
//                                     <div className="text-gray-700 leading-relaxed space-y-4">
//                                         <p>Включите автоматическое создание задач после объединения:</p>
//                                         <ul className="space-y-2 ml-4">
//                                             <li className="flex items-start gap-2">
//                                                 <span className="text-blue-600">•</span>
//                                                 <span>Выберите тип задачи</span>
//                                             </li>
//                                             <li className="flex items-start gap-2">
//                                                 <span className="text-blue-600">•</span>
//                                                 <span>Укажите текст задачи</span>
//                                             </li>
//                                             <li className="flex items-start gap-2">
//                                                 <span className="text-blue-600">•</span>
//                                                 <span>Задача будет создана для основной сделки</span>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Step 8 */}
//                         <div className="bg-white rounded-3xl p-8 transition-all duration-500 animate-fade-in-up mb-10" style={{boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
//                             <div className="flex items-start gap-6">
//                                 <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
//                                     8
//                                 </div>
//                                 <div className="flex-1">
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Запуск объединения</h3>
//                                     <div className="text-gray-700 leading-relaxed space-y-4">
//                                         <p>После настройки нажмите "Применить к существующим сделкам" для обработки уже созданных сделок.</p>
//                                         <p>Новые сделки будут автоматически проверяться на дубли при создании.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section id={isIframe ? "hidden-in-iframe" : ""} className="bg-white py-20 animate-fade-in-up">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                             🚀 Дополнительные возможности
//                         </h2>
//                         <p className="text-xl text-gray-600">
//                             Уникальные функции для максимальной эффективности
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
//                         {[
//                             {
//                                 icon: "🧠",
//                                 title: "Умное объединение данных",
//                                 description: "При склеивании сохраняются все контакты, теги, компании и кастомные поля из всех дубликатов. Приоритетные поля берутся из самой новой сделки."
//                             },
//                             {
//                                 icon: "⚙️",
//                                 title: "Гибкая настройка приоритетов",
//                                 description: "Настройте приоритеты этапов в каждой воронке. Сделка с более высоким приоритетом станет основной при объединении."
//                             },
//                             {
//                                 icon: "🔒",
//                                 title: "Безопасность данных",
//                                 description: "Виджет не удаляет данные, а корректно объединяет их. Все связанные контакты и компании сохраняются в основной сделке."
//                             },
//                             {
//                                 icon: "🏷️",
//                                 title: "Автоматические теги",
//                                 description: "После объединения к основной сделке автоматически добавляется специальный тег для отслеживания выполненных операций."
//                             },
//                             {
//                                 icon: "📊",
//                                 title: "Работа с блоками",
//                                 description: "Создавайте блоки воронок и настраивайте разные правила объединения для разных типов сделок."
//                             },
//                             {
//                                 icon: "🔍",
//                                 title: "Точное обнаружение дублей",
//                                 description: "Многоуровневый алгоритм поиска учитывает контакты, компании и дополнительные поля, исключая ложные совпадения."
//                             }
//                         ].map((feature, index) => (
//                             <div key={index} className="bg-white p-6 rounded-2xl transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up w-full max-w-sm" style={{animationDelay: `${index * 0.1}s`, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
//                                 <div className="text-3xl mb-4 animate-bounce-slow">{feature.icon}</div>
//                                 <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
//                                 <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <section id={isIframe ? "hidden-in-iframe" : ""}>
//                 <ConsultCard></ConsultCard>
//             </section>
//         </main>
//     );
// }
