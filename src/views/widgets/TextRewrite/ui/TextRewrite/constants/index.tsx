import type { CaseItem } from "@/sections/landing/caseCard/CaseCard";
import type { ProblemItem } from "@/sections/landing/problemsCard/ProblemsCard";
import type { FeatureItem } from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["text-rewrite"];
const installHref = widget.clientId
  ? getWidgetInstallUrl(widget.clientId)
  : "https://www.amocrm.ru/";

export const STEPS = [
  {
    title: "Установка виджета",
    content: (
      <div>
        <p>Подключите TextRewrite AI в вашем аккаунте amoCRM:</p>
        <ul className="sc-list">
          <li>amoCRM → Настройки → Интеграции/Виджеты</li>
          <li>Найдите виджет TextRewrite AI</li>
          <li>Нажмите «Установить» и подтвердите доступы</li>
        </ul>

        <a
          href={installHref}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-[#386bff] text-white font-bold shadow-[0_12px_28px_rgba(56,107,255,0.35)] mt-[18px]"
          style={{ marginTop: 12 }}
        >
          Установить виджет сейчас
        </a>
      </div>
    ),
  },
  {
    title: "Выберите стиль переписывания",
    content: (
      <div>
        <p>
          В настройках задайте базовый стиль, который будет применяться при
          переписывании текста.
        </p>
        <ul className="sc-list">
          <li>Деловой — для формальной коммуникации</li>
          <li>Свободный — для более дружелюбного тона</li>
          <li>Нейтральный — универсальный вариант для большинства задач</li>
          <li>Без стиля — только ваши ручные инструкции</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Добавьте собственные правила",
    content: (
      <div>
        <p>
          Поле «Своя инструкция» позволяет тонко управлять итоговой формулировкой
          ответа.
        </p>
        <ul className="sc-list">
          <li>Укажите, как обращаться к клиенту</li>
          <li>Добавьте ограничения по словам и формулировкам</li>
          <li>Задайте обязательный финальный call-to-action</li>
        </ul>

        <div className="sc-note sc-note--yellow" style={{ marginTop: 12 }}>
          <div className="sc-note-title">Пример</div>
          <div>
            «Обращайся на Вы, не используй канцеляризмы, завершай сообщение
            вопросом о следующем шаге».
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Используйте быстрые шаблоны",
    content: (
      <div>
        <p>
          Для типовых ситуаций можно применять готовые пресеты без ручного
          ввода длинных инструкций.
        </p>
        <ul className="sc-list">
          <li>Краткость — сокращает объём и убирает лишние фразы</li>
          <li>Призыв к действию — добавляет чёткий следующий шаг</li>
          <li>Правила обращения — фиксирует корпоративный tone of voice</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Переписывайте текст прямо в карточке сделки",
    content: (
      <div>
        <p>Виджет добавляет кнопку переписывания рядом с областью сообщения.</p>
        <ul className="sc-list">
          <li>Введите черновик в поле сообщения</li>
          <li>Нажмите кнопку AI-переписывания</li>
          <li>Получите обновлённый текст с учётом ваших правил</li>
          <li>Если нужно, откатитесь к исходному варианту кнопкой назад</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Сохраните настройки и проверьте результат",
    content: (
      <div>
        <p>
          После выбора стиля и инструкций сохраните настройки и протестируйте
          работу на нескольких реальных сценариях переписки.
        </p>
        <ul className="sc-list">
          <li>Короткий ответ клиенту</li>
          <li>Follow-up после звонка</li>
          <li>Сообщение с предложением следующего шага</li>
        </ul>
      </div>
    ),
  },
];

export const CASE_ITEMS: CaseItem[] = [
  {
    type: "stripe",
    side: "left",
    white: true,
    text: "TEXT REWRITE TEXT REWRITE TEXT REWRITE",
  },
  {
    type: "card",
    title: "Единый тон коммуникации",
    text: (
      <>
        Все менеджеры отправляют сообщения в одинаковом стиле, без резких
        различий в подаче и формулировках.
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo.svg",
  },
  {
    type: "card",
    title: "Ускорение подготовки ответа",
    text: (
      <>
        Черновик превращается в готовое сообщение за секунды, что экономит
        время команды и сокращает задержки в коммуникации.
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo (1).svg",
  },
  {
    type: "stripe",
    side: "right",
    text: "TEXT REWRITE TEXT REWRITE TEXT REWRITE",
  },
  {
    type: "stripe",
    side: "left",
    text: "TEXT REWRITE TEXT REWRITE TEXT REWRITE",
  },
  {
    type: "card",
    title: "Контроль формулировок",
    text: (
      <>
        Собственные инструкции позволяют заранее закрепить требования к
        приветствию, аргументации и финальному призыву к действию.
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo (2).svg",
  },
  {
    type: "card",
    title: "Безопасный откат",
    text: (
      <>
        Если результат не подошёл, можно быстро вернуться к исходному тексту и
        отправить правки вручную.
      </>
    ),
    mobileDecorUrl: "/widgets/BackAll/amo (3).svg",
  },
  {
    type: "stripe",
    side: "right",
    white: true,
    text: "TEXT REWRITE TEXT REWRITE TEXT REWRITE",
  },
];

export const PROBLEMS: ProblemItem[] = [
  {
    title: "Разный стиль ответов у менеджеров",
    text: (
      <>
        Коммуникация с клиентами получается неоднородной: один менеджер пишет
        формально, другой слишком разговорно, что ухудшает целостное восприятие
        бренда.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_web.jpeg",
  },
  {
    title: "Слишком много времени на редактирование",
    text: (
      <>
        Вместо отправки менеджер тратит минуты на правку черновика,
        переформулирование и проверку, подходит ли текст под задачу.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_watch.jpeg",
  },
  {
    title: "Слабые или отсутствующие CTA",
    text: (
      <>
        Сообщения часто заканчиваются без чёткого следующего шага, из-за чего
        клиент не отвечает или диалог затягивается.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_chart.jpeg",
  },
  {
    title: "Ошибки в формулировках в спешке",
    text: (
      <>
        При высокой нагрузке возрастает риск отправить сырое или двусмысленное
        сообщение, что снижает конверсию и доверие клиента.
      </>
    ),
    bgUrl: "/widgets/BackAll/back_basket.jpeg",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    iconUrl: "/widgets/BackAll/gear.jpeg",
    title: "Готовые стили переписывания",
    text: (
      <>
        Выбирайте подходящий тон ответа: деловой, свободный, нейтральный или
        работа только по вашей инструкции.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/burger.jpeg",
    title: "Свои правила для каждого сценария",
    text: (
      <>
        Добавляйте требования к обращениям, запрещённым словам, длине и
        обязательным элементам финального сообщения.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/shield.jpeg",
    title: "Переписывание без потери контекста",
    text: (
      <>
        Виджет работает с текущим черновиком менеджера, сохраняя смысл и
        адаптируя под выбранный стиль.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/tag.jpeg",
    title: "Быстрые шаблоны инструкций",
    text: (
      <>
        Применяйте заготовки для сокращения текста, усиления призыва к действию
        и соблюдения корпоративного стандарта общения.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/boxes.jpeg",
    title: "Работа прямо в карточке сделки",
    text: (
      <>
        Менеджеру не нужно переключаться между сервисами: переписывание
        выполняется в интерфейсе amoCRM рядом с полем ввода.
      </>
    ),
  },
  {
    iconUrl: "/widgets/BackAll/magnifier.jpeg",
    title: "Контроль качества отправки",
    text: (
      <>
        Перед отправкой менеджер получает более чистую и структурированную
        формулировку, что повышает читаемость и вероятность ответа клиента.
      </>
    ),
  },
];
