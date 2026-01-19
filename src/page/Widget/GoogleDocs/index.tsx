import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['google-docs'];

export default function GoogleDocs({
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
      <main className="bg-transparent">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            ProAutomatization amoCRM for Google Docs
          </h1>
      
      <p className="text-xl text-gray-600 mb-8">
        Виджет для автоматической генерации документов в Google Документы на основе данных из amoCRM.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Возможности</h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Генерация документов по шаблонам</strong> — создавайте договоры, КП, акты и любые документы на основе ваших шаблонов
          </li>
          <li>
            <strong>Подстановка данных из CRM</strong> — поля сделок, контактов и компаний автоматически заполняют документ
          </li>
          <li>
            <strong>Массовая генерация</strong> — создавайте документы сразу для нескольких сделок
          </li>
          <li>
            <strong>Сохранение в карточку</strong> — готовые документы прикрепляются к сделке в amoCRM
          </li>
          <li>
            <strong>Гибкие шаблоны</strong> — используйте любые переменные и условную логику
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Для кого</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Менеджеры по продажам</strong> — мгновенное создание КП и договоров</li>
          <li><strong>Юристы</strong> — автоматизация рутинных документов</li>
          <li><strong>Бухгалтерия</strong> — формирование актов и счетов</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Как начать</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Установите виджет в amoCRM</li>
          <li>Авторизуйтесь через Google аккаунт</li>
          <li>Загрузите шаблон с переменными</li>
          <li>Генерируйте документы в один клик</li>
        </ol>
      </section>
        </div>
      </main>
    </>
  );
}