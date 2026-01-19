import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['google-sheets'];

export default function Googleheets({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  const isIframe = searchParams.embed === "true";

  return (
    <>
      <ServiceSchemaTag
        data={{
          serviceType: "Разработка виджетов amoCRM",
          name: widget.title,
          description: widget.description,
          provider: { name: "Про Автоматизацию" },
          areaServed: { name: "Россия" },
        }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">
          ProAutomatization amoCRM for Googlesheets
        </h1>
      
      <p className="text-xl text-gray-600 mb-8">
        Виджет для автоматической выгрузки данных из amoCRM в Google Таблицы и Google Документы.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Возможности</h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Выгрузка сделок, контактов и компаний</strong> — выбирайте нужные поля и выгружайте в Google Sheets
          </li>
          <li>
            <strong>Связанные данные</strong> — получайте данные контактов и компаний вместе со сделками
          </li>
          <li>
            <strong>Автоматическое форматирование</strong> — заголовки, ширина колонок настраиваются автоматически
          </li>
          <li>
            <strong>Синхронизация</strong> — изменения в amoCRM отражаются в таблице
          </li>
          <li>
            <strong>Google Документы</strong> — генерируйте документы на основе данных из CRM
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Для кого</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Руководители отделов продаж</strong> — отчёты и аналитика</li>
          <li><strong>Маркетологи</strong> — выгрузка данных для анализа</li>
          <li><strong>Бухгалтерия</strong> — формирование документов</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Как начать</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Установите виджет в amoCRM</li>
          <li>Авторизуйтесь через Google аккаунт</li>
          <li>Выберите поля для выгрузки</li>
          <li>Получите данные в Google Таблицу</li>
        </ol>
      </section>
      </div>
    </>
  )
}