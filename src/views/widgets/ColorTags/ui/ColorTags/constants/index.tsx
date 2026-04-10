import {
  createFeatures,
  createProblems,
  createSteps,
  stepAction,
  stepList,
  stepNote,
  stepParagraph,
} from "@/features/widget-page";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["color-tags"];

export const STEPS = createSteps([
  {
    title: "Установка виджета",
    blocks: [
      stepParagraph("Установите виджет «Раскраска тегов» в ваш аккаунт amoCRM:"),
      stepList([
        "Зайдите в amoCRM → Настройки → Виджеты",
        "Найдите «Раскраска тегов» в каталоге",
        "Нажмите «Установить» и подтвердите установку",
      ]),
      widget.clientId
        ? stepAction(getWidgetInstallUrl(widget.clientId), "Установить виджет сейчас")
        : stepNote(
            "Примечание",
            "Если кнопка установки недоступна, напишите нам - пришлем прямую ссылку на установку.",
            { tone: "blue", style: { marginTop: 16 } },
          ),
    ],
  },
  {
    title: "Добавьте правило для тегов",
    blocks: [
      stepParagraph("В настройках виджета создайте первое правило:"),
      stepList([
        "Нажмите «Добавить тег»",
        "Выберите один или несколько тегов в мультисписке",
        "Включите правило переключателем активности",
      ]),
    ],
  },
  {
    title: "Настройте цвета",
    blocks: [
      stepParagraph("Для выбранных тегов задайте визуальный стиль:"),
      stepList([
        "Фон тега",
        "Цвет рамки",
        "Цвет текста",
      ]),
      stepNote(
        "Важно",
        "Цвета применяются только к отображению. Данные в сделке не изменяются.",
        { tone: "green" },
      ),
    ],
  },
  {
    title: "Сохраните и проверьте",
    blocks: [
      stepParagraph("Сохраните настройки и проверьте результат в интерфейсе:"),
      stepList([
        "Список сделок",
        "Доска канбан",
        "Карточка сделки",
      ]),
      stepNote(
        "Подсказка",
        "Если изменения не видны сразу, обновите страницу amoCRM.",
        { tone: "blue" },
      ),
    ],
  },
]);

export const PROBLEMS = createProblems([
  {
    title: "Сложно быстро понять, какие сделки приоритетные",
    text: (
      <>
        Когда тегов много, менеджер тратит время на чтение карточек. Цветные теги
        показывают приоритет сразу.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_web.jpeg",
  },
  {
    title: "Воронка выглядит однотипно",
    text: (
      <>
        Без визуальных маркеров важные сделки теряются. Раскраска тегов создаёт
        понятные акценты в общем потоке.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_watch.jpeg",
  },
  {
    title: "Разные сотрудники работают в разных режимах",
    text: (
      <>
        Кто-то работает в списке, кто-то в канбане. Виджет показывает цветные теги
        одинаково в обоих режимах и в карточке сделки.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_chart.jpeg",
  },
  {
    title: "Нужно снизить риск пропуска срочных сделок",
    text: (
      <>
        Цветные теги помогают быстрее заметить «горячие» сделки и вовремя
        отреагировать.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_basket.jpeg",
  },
]);

export const FEATURES = createFeatures([
  {
    iconUrl: "/widgets/BackAll/tag.jpeg",
    title: "Раскраска по выбранным тегам",
    text: <>Выберите нужные теги и назначьте им единый стиль отображения.</>,
  },
  {
    iconUrl: "/widgets/BackAll/gear.jpeg",
    title: "Простая настройка",
    text: <>Добавляйте правила в несколько кликов без сложной логики и формул.</>,
  },
  {
    iconUrl: "/widgets/BackAll/magnifier.jpeg",
    title: "Быстрый визуальный фокус",
    text: <>Менеджеры сразу видят важные сделки по цвету тегов.</>,
  },
  {
    iconUrl: "/widgets/BackAll/boxes.jpeg",
    title: "Работает везде",
    text: <>Подсветка автоматически применяется в списке, канбане и карточке сделки.</>,
  },
  {
    iconUrl: "/widgets/BackAll/shield.jpeg",
    title: "Безопасно для данных",
    text: <>Виджет меняет только внешний вид интерфейса, а не данные в CRM.</>,
  },
  {
    iconUrl: "/widgets/BackAll/burger.jpeg",
    title: "Удобно масштабировать",
    text: <>Добавляйте новые правила по мере роста количества тегов и процессов.</>,
  },
]);
