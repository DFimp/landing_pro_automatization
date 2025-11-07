import type { ProblemItem } from "@/shared/ui/ProblemsCard/ProblemsCard";
import type { FeatureItem } from "@/shared/ui/FeaturesCard/FeaturesCard";

export const STEPS = [
  {
    title: "Установка виджета в amoCRM",
    content: (
      <div>
        <p>
          Установите виджет «Массовое создание сделок» в вашу amoCRM систему:
        </p>
        <ul className="sc-list">
          <li>Зайдите в amoCRM → Настройки → Виджеты</li>
          <li>Найдите «Массовое создание сделок» в каталоге</li>
          <li>Нажмите «Установить» и подтвердите установку</li>
        </ul>

        <div className="sc-cta" style={{ marginTop: 16 }}>
          <a
            href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=48c94f76-e88e-4cb5-ad9c-a8a8c53e5a64"
            target="_blank"
            rel="noopener"
            className="dist-btn-primary"
          >
            Установить виджет сейчас
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Запуск виджета",
    content: (
      <div>
        <p>Начните создание сделок в списке контактов:</p>
        <ul className="sc-list">
          <li>Перейдите в amoCRM → Списки → Контакты</li>
          <li>Выберите контакты одним из способов:</li>
        </ul>

        <div style={{ marginTop: 8 }}>
          <div className="sc-note sc-note--blue">
            <div className="sc-note-title">Способ 1: По фильтру</div>
            Укажите нужные фильтры — виджет сам найдёт контакты и создаст для
            них сделки.
          </div>
          <div className="sc-note sc-note--green" style={{ marginTop: 10 }}>
            <div className="sc-note-title">Способ 2: Конкретные контакты</div>
            Отметьте галочками контакты в списке — сделки создадутся для
            выбранных.
          </div>
        </div>

        <ul className="sc-list" style={{ marginTop: 10 }}>
          <li>В левом верхнем углу активируется кнопка «Создать сделки»</li>
          <li>
            Наведитесь на неё (выезжает панель) и нажмите — откроется форма
            виджета
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Заполнение основных данных",
    content: (
      <div>
        <p>Настройте параметры будущих сделок:</p>

        <div className="sc-note sc-note--blue">
          <div className="sc-note-title">Название сделки</div>
          Укажите понятное общее название (например: «Новогодняя акция 2025»,
          «Лиды с выставки RetailTech», «Реактивация — май 2025», «Партнёрские
          лиды CompanyX»).
        </div>

        <div className="sc-note sc-note--green" style={{ marginTop: 10 }}>
          <div className="sc-note-title">Воронка и этап</div>В поле «Статус»
          выберите нужную воронку и этап — все сделки будут созданы именно там.
        </div>

        <div className="sc-note sc-note--blue" style={{ marginTop: 10 }}>
          <div className="sc-note-title">Теги для сегментации</div>
          Добавьте теги (если их нет — создадутся автоматически). Примеры:{" "}
          <code>холодный лид, реклама, москва</code>,{" "}
          <code>выставка, горячий, b2b</code>,{" "}
          <code>реактивация, vip, повторная продажа</code>.
        </div>
      </div>
    ),
  },
  {
    title: "Запуск создания сделок",
    content: (
      <div>
        <p>Проверьте параметры и запустите процесс:</p>
        <ul className="sc-list">
          <li>Проверьте выбранные контакты, статус и теги</li>
          <li>Убедитесь, что количество сделок соответствует ожиданиям</li>
          <li>Нажмите «Создать» и дождитесь завершения</li>
        </ul>

        <div className="sc-note sc-note--blue">
          <div className="sc-note-title">Прогресс</div>
          Во время работы виджета отображается прогресс-бар выполнения операции.
        </div>

        <div className="sc-note sc-note--green" style={{ marginTop: 10 }}>
          <div className="sc-note-title">Время выполнения</div>
          Пример: создание ~100 сделок занимает 1–2 минуты. Не закрывайте
          страницу до завершения.
        </div>
      </div>
    ),
  },
  {
    title: "Контроль результатов",
    content: (
      <div>
        <p>Проверьте созданные сделки и продолжайте работу:</p>
        <ul className="sc-list">
          <li>
            Перейдите в выбранную воронку и убедитесь, что сделки созданы на
            нужном этапе
          </li>
          <li>
            Используйте добавленные теги для быстрой фильтрации и сегментации
          </li>
        </ul>

        <div className="sc-note sc-note--green">
          <div className="sc-note-title">Готово!</div>
          Вы создали множество сделок одновременно — можно сосредоточиться на
          продажах.
        </div>
      </div>
    ),
  },
];

export const PROBLEMS: ProblemItem[] = [
  {
    title: "Запуск новой рекламной кампании",
    text: (
      <>
        У вас есть база из 500 потенциальных клиентов из новой рекламы? Создайте
        для всех сделки за 2 минуты вместо 5 часов ручной работы.
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_timer.png",
  },
  {
    title: "Участие в выставке или событии",
    text: (
      <>
        Собрали 200 контактов на выставке? Мгновенно создайте сделки с тегом
        «Выставка 2025» и начинайте отработку, пока интерес клиентов горячий.
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_switch.png",
  },
  {
    title: "Email-маркетинг кампании",
    text: (
      <>
        Планируете отправить предложение всем клиентам из определённого
        сегмента? Создайте сделки заранее и отслеживайте конверсию каждого
        письма.
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_cross.png",
  },
  {
    title: "Реактивация старых клиентов",
    text: (
      <>
        Хотите вернуть клиентов, которые не покупали больше года? Создайте
        сделки для всех неактивных контактов с тегом «Реактивация».
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_basket.png",
  },
  {
    title: "Сезонные акции и распродажи",
    text: (
      <>
        Новогодняя распродажа для всех VIP-клиентов? Создайте персональные
        сделки для каждого и предложите индивидуальные условия.
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_timer.png",
  },
  {
    title: "Работа с партнёрскими базами",
    text: (
      <>
        Получили список потенциальных клиентов от партнёра? Быстро создайте
        сделки с соответствующими тегами и нужной воронкой.
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_switch.png",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    iconUrl: "/widgets/WhatsappButton/group.png",
    title: "Массовое создание за секунды",
    text: (
      <>
        Создавайте сделки для сотен контактов одновременно. То, что раньше
        занимало часы, теперь делается за минуты!
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/sort.png",
    title: "Умная фильтрация контактов",
    text: (
      <>
        Выбирайте контакты по любым критериям или загружайте готовый список.
        Точное попадание в целевую аудиторию!
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/free.png",
    title: "Автоматическое добавление тегов",
    text: (
      <>
        Создавайте новые теги и автоматически применяйте их ко всем новым
        сделкам. Идеальная сегментация с самого начала!
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/target.png",
    title: "Выбор воронки и этапа",
    text: (
      <>
        Размещайте сделки точно в нужную воронку и этап. Никакой путаницы — всё
        структурировано с первого дня!
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/deadline.png",
    title: "Отслеживание прогресса",
    text: (
      <>
        Видите статус каждой операции в реальном времени. Полный контроль над
        процессом создания сделок!
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/mobile.png",
    title: "Простота использования",
    text: (
      <>
        Интуитивный интерфейс без сложных настроек. Освоите за 5 минут,
        сэкономите час!
      </>
    ),
  },
];
