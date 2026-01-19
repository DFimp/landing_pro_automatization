import { TitleH2 } from "./TitleH2";
import { TitleH3 } from "./TitleH3";
import { privacyPolicy } from "../model/const";
import { Point } from "./Point";
import { Fragment } from "react";
import { phone } from "@/shared/constants";

type PrivacySection = {
  title: string;
  description: string;
  subOption?: string[];
};

export default function PrivacyPage() {
  return (
    <main id="policy" className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto my-20">
        <section className="mb-8 text-center">
          <h1 className="text-h2 font-bold text-blue2 mb-4">
            Политика в отношении обработки персональных данных
          </h1>
          <p className="text-gray text-h7">
            Дата последнего обновления: 18.06.2025
          </p>
        </section>

        {/* Section 1 */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <TitleH2>{privacyPolicy[0].title}</TitleH2>
            <p className="text-h7 text-gray leading-relaxed mb-4">
              {privacyPolicy[0].description}
            </p>
            <div className="ml-4">
              {privacyPolicy[0]?.point?.map((el, index) => (
                <Point
                  key={index}
                  title={el.title}
                  description={el.description}
                />
              ))}
            </div>
          </section>

          {/* Operator Info */}
          <section className="mb-8 p-6 bg-light-blue rounded-lg">
            <h3 className="text-h4 font-semibold text-blue mb-4">
              1.4. Сведения об Операторе
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-h7">
              <div>
                <p>
                  <strong>Полное наименование:</strong> Индивидуальный
                  предприниматель Горбань Маргарита Олеговна
                </p>
                <p>
                  <strong>Сокращенное наименование:</strong> ИП Горбань М.О.
                </p>
                <p>
                  <strong>ИНН:</strong> 262609479757
                </p>
                <p>
                  <strong>ОГРНИП:</strong> 325265100085900
                </p>
              </div>
              <div>
                <p>
                  <strong>Email:</strong> info@pro-automatization.ru
                </p>
                <p>
                  <strong>Телефон:</strong> +7 (495) 123-45-67
                </p>
                <p>
                  <strong>Сайт:</strong> https://pro-automatization.ru
                </p>
                <p>
                  <strong>Адрес:</strong> 357635, Ставропольский край, г.
                  Ессентуки, ул. Долина Роз, 11, кв. 3
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[1].title}</TitleH2>
            <div className="space-y-3">
              {privacyPolicy[1]?.point?.map((el, index) => (
                <Point
                  key={index}
                  title={el.title}
                  description={el.description}
                />
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[2].title}</TitleH2>
            {privacyPolicy[2]?.point?.map((el: PrivacySection, index) => (
              <div className="mb-6" key={index}>
                <TitleH3>{el.title}</TitleH3>
                
                <ul className="list-disc pl-6 space-y-2 text-h7 text-gray">
                  {el?.subOption?.map((subPoint, index) => (
                    <li key={index}>{subPoint}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[3].title}</TitleH2>
            {privacyPolicy[3]?.point?.map((el: PrivacySection, index) =>
              el.title === "4.3" ? (
                <Point
                  key={index}
                  title={el.title + " "}
                  description={el.description}
                />
              ) : (
                <div className="mb-6" key={index}>
                  <TitleH3>{el.title + " " + el.description}</TitleH3>
                  <ul className="list-disc pl-6 space-y-2 text-h7 text-gray">
                    {el?.subOption?.map((subPoint, index) => (
                      <li key={index}>{subPoint}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[4].title}</TitleH2>
            {privacyPolicy[4]?.point?.map((el, index) => (
              <Point
                key={index}
                className={el.title.startsWith('5.10') && el.title !== '5.10' ? "ml-4" : ""}
                title={el.title + " "}
                description={el.description}
              />
            ))}
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[5].title}</TitleH2>
            {privacyPolicy[5]?.point?.map((el, index) => (
              <Point
                key={index}
                title={el.title + " "}
                description={el.description}
              />
            ))}
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[6].title}</TitleH2>
            {privacyPolicy[6]?.point?.map((el: PrivacySection, index) =>
              el.title === '7.1' ? (
                <div className="mb-6" key={index}>
                  <TitleH3>{el.title + " " + el.description}</TitleH3>
                  <ul className="list-disc pl-6 space-y-2 text-h7 text-gray">
                    {el?.subOption?.map((subPoint, index) => (
                      <li key={index}>{subPoint}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Point
                  key={index}
                  title={el.title + " "}
                  description={el.description}
                />
              )
            )}
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[7].title}</TitleH2>
            {privacyPolicy[7]?.point?.map((el: PrivacySection, index) =>
              el.title === '8.1' ? (
                <div className="mb-6" key={index}>
                  <TitleH3>{el.title + " " + el.description}</TitleH3>
                  <ul className="list-disc pl-6 space-y-2 text-h7 text-gray">
                    {el?.subOption?.map((subPoint, index) => (
                      <li key={index}>{subPoint}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Point
                  key={index}
                  title={el.title + " "}
                  description={el.description}
                />
              )
            )}
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[8].title}</TitleH2>
            {privacyPolicy[8]?.point?.map((el, index) => (
              <Point
                key={index}
                title={el.title + " "}
                description={el.description}
              />
            ))}
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[9].title}</TitleH2>
            {privacyPolicy[9]?.point?.map((el, index) => (
              <Point
                className={el.title.startsWith('10.1') && el.title !== '10.1' ? "ml-4" : ""}
                key={index}
                title={el.title + " "}
                description={el.description}
              />
            ))}
          </section>

          {/* Section 11 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[10].title}</TitleH2>
            {privacyPolicy[10]?.point?.map((el, index) => (
              <Point
                key={index}
                title={el.title + " "}
                description={el.description}
              />
            ))}
          </section>

          {/* Section 12 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[11].title}</TitleH2>
            <p className="text-h7 text-gray leading-relaxed mb-4">
              {privacyPolicy[11].description}
            </p>
            {privacyPolicy[11]?.point?.map((el, index) => (
              <Point
                className={el.title.startsWith('12.2') && el.title !== '12.2' ? "ml-4" : ""}
                key={index}
                title={el.title + " "}
                description={el.description}
              />
            ))}
          </section>

          {/* Section 13 - Cookies */}
          <section className="mb-8">
            <TitleH2>13. Использование файлов cookie и систем аналитики</TitleH2>
            <div className="space-y-4">
              <p className="text-h7 text-gray">
                <strong>
                  13.1. На сайте https://pro-automatization.ru используются
                  следующие типы файлов cookie:
                </strong>
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-light-blue rounded-lg">
                  <h4 className="text-h5 font-semibold text-violet mb-2">
                    Технические cookie
                  </h4>
                  <p className="text-h8 text-gray mb-2">
                    <strong>Назначение:</strong> обеспечение работы сайта,
                    запоминание настроек пользователя
                  </p>
                  <p className="text-h8 text-gray mb-2">
                    <strong>Срок хранения:</strong> до 1 года
                  </p>
                  <p className="text-h8 text-gray">
                    <strong>Отключение:</strong> ограничено (может нарушить
                    работу сайта)
                  </p>
                </div>

                <div className="p-4 border border-light-blue rounded-lg">
                  <h4 className="text-h5 font-semibold text-violet mb-2">
                    Аналитические cookie
                  </h4>
                  <p className="text-h8 text-gray mb-2">
                    <strong>Назначение:</strong> сбор статистики посещений,
                    анализ поведения пользователей
                  </p>
                  <p className="text-h8 text-gray mb-2">
                    <strong>Сервисы:</strong> Яндекс.Метрика
                  </p>
                  <p className="text-h8 text-gray mb-2">
                    <strong>Срок хранения:</strong> до 2 лет
                  </p>
                  <p className="text-h8 text-gray">
                    <strong>Отключение:</strong> доступно в настройках браузера
                  </p>
                </div>

                <div className="p-4 border border-light-blue rounded-lg">
                  <h4 className="text-h5 font-semibold text-violet mb-2">
                    Маркетинговые cookie
                  </h4>
                  <p className="text-h8 text-gray mb-2">
                    <strong>Назначение:</strong> персонализация рекламы,
                    ретаргетинг
                  </p>
                  <p className="text-h8 text-gray mb-2">
                    <strong>Сервисы:</strong> Яндекс.Директ
                  </p>
                  <p className="text-h8 text-gray mb-2">
                    <strong>Срок хранения:</strong> до 1 года
                  </p>
                  <p className="text-h8 text-gray">
                    <strong>Отключение:</strong> доступно в настройках браузера
                  </p>
                </div>
              </div>

              {privacyPolicy[12]?.point?.map((el, index) => (
                <Point
                  key={index}
                  title={el.title + " "}
                  description={el.description}
                />
              ))}
            </div>
          </section>

          {/* Section 14 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[13].title}</TitleH2>
            {privacyPolicy[13]?.point?.map((el, index) => (
              <Point
                key={index}
                title={el.title + " "}
                description={el.description}
              />
            ))}
          </section>

          {/* Section 15 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[14].title}</TitleH2>
            {privacyPolicy[14]?.point?.map((el, index) => (
              <Point
                key={index}
                title={el.title + " "}
                description={el.description}
              />
            ))}
          </section>

          {/* Section 16 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[15].title}</TitleH2>
            <p className="text-h7 text-gray leading-relaxed mb-4">
              {privacyPolicy[15].description}
            </p>
          </section>

          {/* Section 17 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[16].title}</TitleH2>
            {privacyPolicy[16]?.point?.map((el: PrivacySection, index) => (
              <Fragment key={index}>
                <Point
                  title={el.title + " "}
                  description={el.description}
                />
                <div className="mb-6" key={index}>
                  <ul className="list-disc pl-6 space-y-2 text-h7 text-gray">
                    {el?.subOption?.map((subPoint, index) => (
                      <li key={index}>{subPoint}</li>
                    ))}
                  </ul>
                </div>
              </Fragment>
            ))}
          </section>

          {/* Section 18 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[17].title}</TitleH2>
            {privacyPolicy[17]?.point?.map((el: PrivacySection, index) => (
              <Fragment key={index}>
                <Point
                  title={el.title + " "}
                  description={el.description}
                />
                <div className="mb-6" key={index}>
                  <ul className="list-disc pl-6 space-y-2 text-h7 text-gray">
                    {el?.subOption?.map((subPoint, index) => (
                      <li key={index}>{subPoint}</li>
                    ))}
                  </ul>
                </div>
              </Fragment>
            ))}
          </section>

          {/* Section 19 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[18].title}</TitleH2>
            {privacyPolicy[18]?.point?.map((el: PrivacySection, index) => (
              <Fragment key={index}>
                <Point
                  title={el.title + " "}
                  description={el.description}
                />
                <div className="mb-6" key={index}>
                  <ul className="list-disc pl-6 space-y-2 text-h7 text-gray">
                    {el?.subOption?.map((subPoint, index) => (
                      <li key={index}>{subPoint}</li>
                    ))}
                  </ul>
                </div>
              </Fragment>
            ))}
          </section>

          {/* Section 20 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[19].title}</TitleH2>
            {privacyPolicy[19]?.point?.map((el, index) => (
              <Point
                key={index}
                title={el.title + " "}
                description={el.description}
              />
            ))}
          </section>

          {/* Section 21 */}
          <section className="mb-8">
            <TitleH2>{privacyPolicy[20].title}</TitleH2>
            {privacyPolicy[20]?.point?.map((el, index) => (
              <Point
                key={index}
                title={el.title + " "}
                description={el.description}
              />
            ))}
          </section>

          {/* Contact information */}
          <section className="bg-light-blue2 p-6 rounded-lg mt-8">
            <p className="text-h6 font-semibold text-blue mb-4">
              Дата последнего обновления: 18.06.2025
            </p>

            <div className="space-y-2">
              <h3 className="text-h5 font-bold text-blue mb-4">
                Контактная информация Оператора:
              </h3>
              <p>
                <strong>ИП Горбань Маргарита Олеговна</strong>
              </p>
              <p>
                <strong>ИНН:</strong> 262609479757
              </p>
              <p>
                <strong>ОГРНИП:</strong> 325265100085900
              </p>
              <p>
                <strong>Юридический адрес:</strong> 357635, Ставропольский край,
                г. Ессентуки, ул. Долина Роз, 11, кв. 3
              </p>
              <p>
                <strong>Адрес электронной почты:</strong>{" "}
                <a
                  href="mailto:info@pro-automatization.ru"
                  className="text-blue hover:text-blue2 underline"
                >
                  info@pro-automatization.ru
                </a>
              </p>
              <p>
                <strong>Контактный телефон:</strong>{" "}
                <a
                  href={`tel:${phone.href}`}
                  className="text-blue hover:text-blue2 underline"
                >
                  {phone.display}
                </a>
              </p>
              <p>
                <strong>Веб-сайт:</strong>{" "}
                <a
                  href="https://pro-automatization.ru"
                  className="text-blue hover:text-blue2 underline"
                >
                  https://pro-automatization.ru
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
