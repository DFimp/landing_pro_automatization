"use client";
import React from "react";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import { hiddenInIframe } from "@/shared/utils/hiddenInIframe";

const ContactDuplicateWidgetPage = () => {
  const { isIframe } = hiddenInIframe();
  const handleScrollToInstruction = (e: any) => {
    e.preventDefault();
    const element = document.querySelector("#instruction");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="pb-20 pt-20 bg-white">
      {/* Hero Section */}
      <section id={isIframe ? "hidden-in-iframe" : ""} className="container mx-auto px-4 pb-16 bg-white">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-violet-100 px-6 py-2 rounded-full">
            <span className="text-2xl">🔗</span>
            <span className="text-blue-600 font-medium">
              Объединение дублей контактов для amoCRM
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-blue-800 bg-clip-text text-transparent leading-tight mt-8 mb-8">
            Избавиться от дублей контактов?
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Автоматическое склеивание дублированных контактов с умными
            алгоритмами поиска. Экономьте время менеджеров и улучшайте качество
            вашей базы контактов.
          </p>

          <div className="flex flex-col gap-3 justify-center items-center mb-10">
            <a
              href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=e6a1837c-6178-4a0c-9fc0-3e5768595fa2"
              target="_blank"
              rel="noopener"
            >
              <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
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
        </div>
      </section>

      {/* Problems Section */}
      <section id={isIframe ? "hidden-in-iframe" : ""} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Проблемы дублей контактов в amoCRM
            </h2>
            <p className="text-xl text-gray-600">
              Дубли контактов создают хаос в работе с клиентской базой
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💸",
                title: "Хаос в системе",
                description:
                  "Одинаковые клиенты создают несколько карточек контактов, что приводит к путанице и потере важной информации.",
              },
              {
                icon: "⏰",
                title: "Потеря времени",
                description:
                  "Менеджеры тратят драгоценное время на поиск и ручное объединение дублированных контактов.",
              },
              {
                icon: "📊",
                title: "Неточная статистика",
                description:
                  "Дубли искажают отчеты и аналитику по клиентам, мешая принятию правильных управленческих решений.",
              },
              {
                icon: "🎯",
                title: "Упущенные возможности",
                description:
                  "Из-за дублей можно потерять историю общения с клиентом или дважды обработать одну заявку, что снижает качество сервиса.",
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105"
                style={{
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id={isIframe ? "hidden-in-iframe" : ""} className="container mx-auto px-4 bg-white py-20">
        <div className="text-center mb-16 mt-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Решение всех проблем
          </h2>
          <p className="text-xl text-gray-600">
            Умные алгоритмы для автоматического объединения дублей контактов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {[
            {
              icon: "🤖",
              title: "Автоматическое объединение",
              description:
                "Виджет самостоятельно находит и склеивает дубли контактов по настраиваемым правилам, сохраняя всю важную информацию.",
            },
            {
              icon: "⚙️",
              title: "Гибкие настройки",
              description:
                "Настройте поиск дублей по телефону, email, имени или любым другим полям с возможностью создания исключений.",
            },
            {
              icon: "🧠",
              title: "Умные алгоритмы",
              description:
                "Многоуровневый поиск дублей с возможностью создания альтернативных условий объединения.",
            },
            {
              icon: "💾",
              title: "Сохранение истории",
              description:
                "При объединении сохраняются все связанные сделки, задачи, теги и важные данные из всех контактов.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:transform hover:scale-105"
              style={{
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Instruction Section */}
      <section
        id="instruction"
        className="container mx-auto px-4 py-16 bg-white"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 pt-8">
            📋 Пошаговая инструкция
          </h2>
          <p className="text-xl text-gray-600">
            Следуйте простым шагам для быстрой настройки виджета
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Step 1 */}
            <div
              className="bg-white rounded-3xl p-8 transition-all duration-500"
              style={{
                boxShadow:
                  "0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Установка виджета
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Нажмите кнопку "Установить виджет" и следуйте инструкциям
                      amoCRM для подключения.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    Установить виджет сейчас
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className="bg-white rounded-3xl p-8 transition-all duration-500"
              style={{
                boxShadow:
                  "0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Выбор основного поля
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      В разделе "Настройка блока" выберите поле, по которому
                      будут искаться дубли:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          <strong>Телефон</strong> - объединение контактов с
                          одинаковыми номерами
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          <strong>Email</strong> - поиск дублей по одинаковой
                          электронной почте
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          <strong>Имя</strong> - объединение контактов с
                          одинаковыми именами
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          <strong>Другие поля</strong> - любое другое поле из
                          вашей CRM
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className="bg-white rounded-3xl p-8 transition-all duration-500"
              style={{
                boxShadow:
                  "0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Добавление дополнительных условий
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Нажмите "+ Добавить поле" чтобы добавить дополнительные
                      условия:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Выберите поле из списка</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          Контакты объединятся только если совпадают все
                          указанные поля
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          Например: "Телефон" + "Компания" = объединение только
                          при совпадении и телефона, и компании
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div
              className="bg-white rounded-3xl p-8 transition-all duration-500"
              style={{
                boxShadow:
                  "0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Настройка исключений
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Исключения помогают избежать нежелательных объединений:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Нажмите "+ Исключение" под любым полем</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          Введите значение, которое должно остановить
                          объединение
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          Пример: Под "Должность" написать "Директор" - тогда
                          контакты с должностью "Директор" никогда не
                          объединятся
                        </span>
                      </li>
                    </ul>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">💡</span>
                        <div>
                          <div className="font-semibold text-yellow-800">
                            Зачем это нужно:
                          </div>
                          <div className="text-yellow-700 mt-1">
                            Если у вас несколько директоров с одинаковыми
                            телефонами компании, они не должны объединяться в
                            одного контакта.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div
              className="bg-white rounded-3xl p-8 transition-all duration-500"
              style={{
                boxShadow:
                  "0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Создание альтернативных условий
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Можете создать несколько наборов условий для объединения:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Добавьте второй блок в настройках</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          Контакты объединятся, если подходят под любой из ваших
                          наборов условий
                        </span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                      <div className="font-semibold text-gray-800 mb-2">
                        Пример:
                      </div>
                      <div className="space-y-1 text-gray-700">
                        <div>Набор 1: Телефон + Должность</div>
                        <div>Набор 2: Email + Компания</div>
                        <div className="text-sm">
                          Контакты объединятся если совпадают (телефон и
                          должность) или (email и компания)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div
              className="bg-white rounded-3xl p-8 transition-all duration-500"
              style={{
                boxShadow:
                  "0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Настройка сохранения данных
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      По умолчанию при объединении сохраняются данные из более
                      старого контакта. В правом блоке "Настройка приоритетности
                      полей разных контактов" вы можете изменить это:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Выберите поле из списка</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          Для выбранных полей будут сохраняться данные из более
                          нового контакта
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          Пример: Выберите "Телефон" - тогда при объединении
                          сохранится телефон из нового контакта
                        </span>
                      </li>
                    </ul>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">💡</span>
                        <div>
                          <div className="font-semibold text-blue-800">
                            Практический совет:
                          </div>
                          <div className="text-blue-700 mt-1">
                            Выбирайте поля, которые чаще обновляются - телефоны,
                            должности, адреса. Так у вас будет самая актуальная
                            информация.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div
              className="bg-white rounded-3xl p-8 transition-all duration-500 mb-10"
              style={{
                boxShadow:
                  "0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 15px 20px -10px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  7
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Сохранение и применение
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>После настройки всех параметров:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          Сначала нажмите кнопку "Сохранить" - это сохранит ваши
                          настройки
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          Затем нажмите "Применить к существующим контактам" -
                          это запустит поиск и объединение уже созданных
                          контактов
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          Все новые контакты будут автоматически проверяться на
                          дубли
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id={isIframe ? "hidden-in-iframe" : ""} className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🚀 Дополнительные возможности
            </h2>
            <p className="text-xl text-gray-600">
              Уникальные функции для максимальной эффективности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {[
              {
                icon: "🧠",
                title: "Умное объединение данных",
                description:
                  "При склеивании сохраняются все сделки, задачи, теги и кастомные поля из всех дублированных контактов. Приоритетные поля берутся из более нового контакта.",
              },
              {
                icon: "⚙️",
                title: "Гибкая настройка приоритетов",
                description:
                  "Выберите, какие поля должны сохраняться из более нового контакта, а какие - из более старого.",
              },
              {
                icon: "🔒",
                title: "Безопасность данных",
                description:
                  "Виджет не удаляет данные, а корректно объединяет их. Все связанные сделки и компании сохраняются в основном контакте.",
              },
              {
                icon: "🏷️",
                title: "Система исключений",
                description:
                  "Настройте исключения по конкретным значениям полей, чтобы избежать ошибочного объединения разных людей.",
              },
              {
                icon: "📊",
                title: "Альтернативные условия",
                description:
                  "Создавайте несколько наборов условий для поиска дублей - контакты объединятся, если подходят под любой из них.",
              },
              {
                icon: "🔍",
                title: "Точное обнаружение дублей",
                description:
                  "Многоуровневый алгоритм поиска по телефонам, email, именам и дополнительным полям с исключением ложных совпадений.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl transition-all duration-500 hover:transform hover:scale-105 w-full max-w-sm"
                style={{
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 16px -8px rgba(0, 0, 0, 0.15)",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id={isIframe ? "hidden-in-iframe" : ""}>
        <ConsultCard></ConsultCard>
      </section>
    </main>
  );
};

export default ContactDuplicateWidgetPage;
