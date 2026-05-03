import type { CaseItem } from "@/sections/landing/caseCard/CaseCard";
import type { ProblemItem } from "@/sections/landing/problemsCard/ProblemsCard";
import type { FeatureItem } from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["normalizer-tel"];
const installHref = widget.clientId ? getWidgetInstallUrl(widget.clientId) : undefined;

export const STEPS = [
  {
    title: "Установите виджет и откройте расширенные настройки",
    content: (
      <div>
        <p>Перейдите в настройки интеграций amoCRM и откройте страницу NormalizerTel.</p>
        <ul className="sc-list">
          <li>amoCRM → Настройки → Интеграции / Виджеты</li>
          <li>Найдите виджет «Нормализация телефонов»</li>
          <li>Откройте вкладку расширенных настроек</li>
        </ul>
        {installHref ? (
          <a
            href={installHref}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-[#386bff] text-white font-bold shadow-[0_12px_28px_rgba(56,107,255,0.35)] mt-[18px]"
            style={{ marginTop: 12 }}
          >
            Установить виджет сейчас
          </a>
        ) : null}
      </div>
    ),
  },
  {
    title: "Создайте шаблон нормализации",
    content: (
      <div>
        <p>Добавьте шаблон, который будет описывать, какие номера нужно обрабатывать.</p>
        <ul className="sc-list">
          <li>Задайте название и описание шаблона</li>
          <li>Добавьте условия: «начинается с», «содержит» или «заканчивается на»</li>
          <li>Выберите действия: добавить «+», убрать пробелы, удалить лишние символы</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Назначьте шаблон по умолчанию и включите сервис",
    content: (
      <div>
        <p>Именно шаблон по умолчанию применяется в карточках и массовой обработке.</p>
        <ul className="sc-list">
          <li>Нажмите «Сделать основным» у нужного шаблона</li>
          <li>Включите переключатель «Сервис включён»</li>
          <li>При необходимости включите «Автоматическая нормализация»</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Проверьте поведение в карточке",
    content: (
      <div>
        <p>В карточках контактов и сделок виджет анализирует поля телефона перед сохранением.</p>
        <ul className="sc-list">
          <li>Введите номер в произвольном формате</li>
          <li>Используйте кнопку «Изменить», чтобы вручную применить нормализацию</li>
          <li>Сохраните карточку и проверьте итоговое значение</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Запустите массовую нормализацию базы",
    content: (
      <div>
        <p>После сохранения настроек можно запустить обработку существующих записей.</p>
        <ul className="sc-list">
          <li>Нажмите «Нормализовать всю базу»</li>
          <li>Дождитесь завершения job и проверьте прогресс</li>
          <li>Контролируйте количество обработанных, изменённых и ошибочных записей</li>
        </ul>
        <div className="sc-note sc-note--green" style={{ marginTop: 12 }}>
          <div className="sc-note-title">Совет:</div>
          <div>
            Сначала сохраните шаблоны и только затем запускайте массовую обработку, чтобы в job применились актуальные правила.
          </div>
        </div>
      </div>
    ),
  },
];

export const CASE_ITEMS: CaseItem[] = [
  {
    type: "stripe",
    side: "left",
    white: true,
    text: "PHONE CRM PHONE CRM PHONE CRM",
  },
  {
    type: "card",
    title: "Единый формат телефонов",
    text: (
      <>
        Номера приводятся к одинаковому виду независимо от того, как менеджер ввёл данные.
        Это упрощает звонки, поиск и проверки дублей.
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo.svg",
  },
  {
    type: "card",
    title: "Нормализация при сохранении карточки",
    text: (
      <>
        Виджет отслеживает сохранение и применяет основной шаблон автоматически.
        Менеджерам не нужно вспоминать правила форматирования вручную.
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo (1).svg",
  },
  { type: "stripe", side: "right", text: "PHONE CRM PHONE CRM PHONE CRM" },
  { type: "stripe", side: "left", text: "PHONE CRM PHONE CRM PHONE CRM" },
  {
    type: "card",
    title: "Массовая очистка старой базы",
    text: (
      <>
        Через встроенный job можно пройтись по накопленным контактам и привести старые номера
        к новому стандарту без ручного редактирования каждой карточки.
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo (2).svg",
  },
  {
    type: "card",
    title: "Прозрачный контроль результата",
    text: (
      <>
        В интерфейсе видно статус job, количество обработанных записей, изменений и ошибок,
        поэтому легко контролировать качество нормализации.
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo (3).svg",
  },
  {
    type: "stripe",
    side: "right",
    white: true,
    text: "PHONE CRM PHONE CRM PHONE CRM",
  },
];

export const PROBLEMS: ProblemItem[] = [
  {
    title: "Номера хранятся в десятках форматов",
    text: (
      <>
        В карточках встречаются пробелы, скобки, тире и случайные символы.
        Из-за этого растёт число <span className="at-mark">дубликатов и ошибок звонка</span>.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_web.jpeg",
  },
  {
    title: "Автоматизации срабатывают нестабильно",
    text: (
      <>
        Роботы и интеграции ожидают предсказуемый формат телефона, а получают «шум».
        Это ломает <span className="at-mark">сегментацию и маршрутизацию</span>.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_watch.jpeg",
  },
  {
    title: "Менеджеры тратят время на ручные исправления",
    text: (
      <>
        Команда постоянно правит номера руками перед звонком или рассылкой.
        Это снижает скорость и увеличивает вероятность человеческой ошибки.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_chart.jpeg",
  },
  {
    title: "Старая база остаётся неочищенной",
    text: (
      <>
        Даже после внедрения правил в новых карточках исторические данные часто остаются
        в хаотичном виде и продолжают портить отчётность.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_basket.jpeg",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    iconUrl: "/widgets/BackAll/gear.jpeg",
    title: "Гибкие условия шаблонов",
    text: (
      <>
        Поддерживаются проверки «начинается с», «содержит» и «заканчивается на»,
        чтобы точнее определять, какие номера нужно менять.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/tag.jpeg",
    title: "Набор действий нормализации",
    text: (
      <>
        Добавляйте «+», удаляйте пробелы и посторонние символы.
        Порядок действий влияет на финальный формат и полностью контролируется в шаблоне.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/boxes.jpeg",
    title: "Основной шаблон по умолчанию",
    text: (
      <>
        Вы выбираете один шаблон как основной: он применяется в runtime,
        при сохранении карточек и при запуске массовой обработки базы.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/magnifier.jpeg",
    title: "Кнопка ручного применения",
    text: (
      <>
        В карточке появляется действие «Изменить», если номер можно улучшить.
        Менеджер видит результат сразу, не покидая форму.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/burger.jpeg",
    title: "Массовая нормализация через job",
    text: (
      <>
        Запускайте обработку всей базы из настроек виджета и отслеживайте прогресс
        по статусу задания и счётчикам изменений.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/shield.jpeg",
    title: "Безопасное управление режимами",
    text: (
      <>
        Отдельные переключатели «Сервис включён» и «Автоматическая нормализация»
        позволяют аккуратно включать функционал по этапам.
      </>
    ),
  },
];
