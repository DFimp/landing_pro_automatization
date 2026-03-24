import type { ProblemItem } from "@/sections/landing/problemsCard/ProblemsCard";
import type { FeatureItem } from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["copying-fields"];

export const STEPS = [
  {
    title: "Установка виджета в amoCRM",
    content: (
      <div>
        <p>
          Установите виджет «Копирование полей между аккаунтами и удаление полей списком» в вашу amoCRM систему:
        </p>
        <ul className="sc-list">
          <li>Зайдите в amoCRM → Настройки → Виджеты</li>
          <li>Найдите «Копирование полей между аккаунтами и удаление полей списком» в каталоге</li>
          <li>Нажмите «Установить» и подтвердите установку</li>
        </ul>

        <div className="mt-4">
          <a
            href={getWidgetInstallUrl(widget.clientId!)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center h-11 px-8 rounded-full bg-[#386bff] text-white font-bold text-[16px] shadow-[0_8px_24px_rgba(56,107,255,0.35)] transition-[transform,box-shadow,background] duration-150 mt-[18px] hover:bg-[#2f5cf0] hover:-translate-y-[1px] hover:shadow-[0_12px_28px_rgba(56,107,255,0.4)]"
          >
            Установить виджет сейчас
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Переход в настройки полей",
    content: (
      <div>
        <p>Откройте страницу управления полями и группами:</p>
        <ul className="sc-list">
          <li>Перейдите в amoCRM → Настройки → Поля и группы</li>
          <li>Выберите нужный раздел: Сделки, Контакты или Компании</li>
          <li>Убедитесь, что видите список пользовательских полей</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Копирование полей",
    content: (
      <div>
        <p>Сохраните набор полей, который хотите перенести (копирование идёт блоком по сущности):</p>
        <ul className="sc-list">
          <li>Откройте меню виджета</li>
          <li>Нажмите «Копировать поля»</li>
          <li>Выберите сущность (сделки/контакты/компании)</li>
        </ul>

        <div className="sc-note sc-note--blue">
          <div className="sc-note-title">Важно</div>
          Копируются все пользовательские поля выбранной сущности. Выбора отдельных
          полей нет — перенос происходит целым блоком.
        </div>
      </div>
    ),
  },
  {
    title: "Вставка полей",
    content: (
      <div>
        <p>Вставьте поля в нужный раздел:</p>
        <ul className="sc-list">
          <li>Откройте нужную вкладку (Сделки/Контакты/Компании)</li>
          <li>Нажмите «Вставить поля»</li>
          <li>Выберите, откуда были скопированы поля</li>
        </ul>

        <div className="sc-note sc-note--green" style={{ marginTop: 10 }}>
          <div className="sc-note-title">Важно</div>
          Если копировали сделки — вставляйте сделки. Для каждой сущности
          используется свой блок.
        </div>
      </div>
    ),
  },
  {
    title: "Удаление лишних полей в расширенных настройках",
    content: (
      <div>
        <p>Если после вставки нужно убрать часть полей — используйте массовое удаление:</p>
        <ul className="sc-list">
          <li>Откройте «Настройки → Поля и группы»</li>
          <li>Нажмите кнопку удаления вверху (рядом с плюсиком)</li>
          <li>Отметьте нужные поля чекбоксами и подтвердите удаление</li>
        </ul>

        <div className="sc-note sc-note--red">
          <div className="sc-note-title">Примечание</div>
          Чекбоксы появляются только у пользовательских полей, системные не затрагиваются.
        </div>
      </div>
    ),
  },
  {
    title: "Проверка результата",
    content: (
      <div>
        <p>Убедитесь, что всё перенеслось корректно:</p>
        <ul className="sc-list">
          <li>Проверьте порядок, группы и отображение полей</li>
          <li>Убедитесь, что вставка сделана в нужной сущности</li>
          <li>При необходимости повторите копирование для другой сущности</li>
        </ul>

        <div className="sc-note sc-note--green">
          <div className="sc-note-title">Готово!</div>
          Вы перенесли нужную структуру полей быстро и без ручной настройки.
        </div>
      </div>
    ),
  },
];

export const PROBLEMS: ProblemItem[] = [
  {
    title: "Нужно повторить поля в другой сущности",
    text: (
      <>
        Создали удобный набор полей в сделках и хотите такой же в контактах или
        компаниях? Виджет переносит структуру за пару кликов.
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_timer.jpeg",
  },
  {
    title: "Запуск новой воронки или отдела",
    text: (
      <>
        Появилась новая команда или продукт? Быстро копируйте наборы полей и
        запускайте работу без долгой ручной настройки.
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_switch.jpeg",
  },
  {
    title: "Переезд на новый аккаунт",
    text: (
      <>
        Переносите настройки между аккаунтами или тестовыми стендами — виджет
        ускоряет миграцию пользовательских полей.
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_cross.jpeg",
  },
  {
    title: "Стандартизация карточек",
    text: (
      <>
        Хотите единый формат карточек для отдела продаж и клиентского сервиса?
        Копирование полей обеспечивает единые правила работы.
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_basket.jpeg",
  },
  {
    title: "Оптимизация структуры",
    text: (
      <>
        Полей стало слишком много и они разбросаны? Быстро переносите нужные и
        удаляйте лишние без риска пропустить важное.
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_timer.jpeg",
  },
  {
    title: "Снижение ошибок ручной настройки",
    text: (
      <>
        Ручное добавление часто приводит к пропущенным параметрам. Виджет
        копирует поля с типами, группами и настройками целиком.
      </>
    ),
    bgUrl: "/widgets/WhatsappButton/back_switch.jpeg",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    iconUrl: "/widgets/WhatsappButton/group.jpeg",
    title: "Копирование в один клик",
    text: (
      <>
        Копируйте поля блоком по выбранной сущности — сделки, контакты или компании.
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/sort.jpeg",
    title: "Поддержка всех сущностей",
    text: (
      <>
        Работает со сделками, контактами и компаниями — удобно для любой
        структуры CRM.
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/free.jpeg",
    title: "Сохранение типов и групп",
    text: (
      <>
        Переносятся не только названия, но и типы полей, порядок и логика
        отображения.
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/target.jpeg",
    title: "Мгновенный результат",
    text: (
      <>
        Поля появляются сразу после вставки — без перезагрузки и ожиданий.
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/deadline.jpeg",
    title: "Безопасность",
    text: (
      <>
        Виджет работает только с пользовательскими полями и не затрагивает
        системные.
      </>
    ),
  },
  {
    iconUrl: "/widgets/WhatsappButton/mobile.jpeg",
    title: "Удаление лишнего",
    text: (
      <>
        В расширенных настройках отмечайте поля чекбоксами и удаляйте их одним действием.
      </>
    ),
  },
];
