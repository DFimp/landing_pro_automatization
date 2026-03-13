import type { ProblemItem } from "@/widgets/landing/problemsCard/ProblemsCard";
import type { FeatureItem } from "@/widgets/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["setting-feed"];

export const STEPS = [
    {
        title: "Установка виджета в amoCRM",
        content: (
            <div>
                <p>Установите виджет «Фильтр ленты событий» в вашу amoCRM систему:</p>

                <ul className="sc-list">
                    <li>Откройте amoCRM → Настройки → Виджеты</li>
                    <li>Найдите «Фильтр ленты событий» в каталоге</li>
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
        title: "Где работает виджет",
        content: (
            <div>
                <p>Виджет появляется в карточке сделки над полем добавления события:</p>

                <ul className="sc-list">
                    <li>Откройте любую сделку (amoCRM → Сделки → выберите сделку)</li>
                    <li>Перейдите в блок «Лента»</li>
                    <li>Сверху над полем «Примечание» появится панель вкладок</li>
                </ul>

                <div className="sc-note sc-note--blue" style={{ marginTop: 10 }}>
                    <div className="sc-note-title">Подсказка</div>
                    Панель вкладок остаётся на месте даже при нажатии «Отменить» —
                    пользоваться фильтром можно постоянно.
                </div>
            </div>
        ),
    },
    {
        title: "Выбор нужного типа событий",
        content: (
            <div>
                <p>Фильтруйте ленту по типам событий одним кликом:</p>

                <ul className="sc-list">
                    <li><b>Все</b> — показывает полную ленту</li>
                    <li><b>Задачи</b> — только задачи</li>
                    <li><b>Примечания</b> — только примечания</li>
                    <li><b>Письма</b> — только email-события</li>
                    <li><b>Звонки</b> — только звонки</li>
                    <li><b>Чаты</b> — только сообщения/чаты</li>
                </ul>

                <div className="sc-note sc-note--green" style={{ marginTop: 10 }}>
                    <div className="sc-note-title">Быстрое применение</div>
                    Виджет мгновенно скрывает лишние события, чтобы вы видели только то,
                    что нужно для текущей задачи.
                </div>
            </div>
        ),
    },
    {
        title: "Автоподстройка под ленту",
        content: (
            <div>
                <p>Виджет работает корректно даже при длинной истории сделки:</p>

                <ul className="sc-list">
                    <li>При догрузке событий (скролл / «загрузить ещё») фильтр применяется автоматически</li>
                    <li>Если выбранный тип событий отсутствует — лента становится чистой</li>
                    <li>Даты без событий также скрываются, чтобы не оставалось “пустых” разделителей</li>
                </ul>

                <div className="sc-note sc-note--blue">
                    <div className="sc-note-title">Результат</div>
                    Меньше шума — больше фокуса: менеджер быстрее принимает решения и не
                    теряет важные действия в потоке событий.
                </div>
            </div>
        ),
    },
    {
        title: "Готово — работайте быстрее",
        content: (
            <div>
                <p>Теперь лента в сделке под контролем:</p>
                <ul className="sc-list">
                    <li>Быстро находите нужные заметки или задачи</li>
                    <li>Не пролистываете десятки “служебных” событий</li>
                    <li>Ускоряете работу в сделках с длинной историей</li>
                </ul>

                <div className="sc-note sc-note--green">
                    <div className="sc-note-title">Готово!</div>
                    Фильтр ленты экономит время каждый день — особенно в сделках с большим
                    количеством коммуникаций.
                </div>
            </div>
        ),
    },
];

export const PROBLEMS: ProblemItem[] = [
    {
        title: "Слишком длинная лента в сделке",
        text: (
            <>
                В сделке сотни событий: системные изменения, заметки, задачи, звонки,
                письма. Найти нужное — как искать иголку в стоге сена.
            </>
        ),
        bgUrl: "/widgets/WhatsappButton/back_timer.jpeg",
    },
    {
        title: "Нужно быстро найти последнюю задачу",
        text: (
            <>
                Менеджер открывает сделку и должен понять, что делать дальше. Но в ленте
                много шума — задача теряется среди событий.
            </>
        ),
        bgUrl: "/widgets/WhatsappButton/back_switch.jpeg",
    },
    {
        title: "Проверка коммуникаций перед звонком",
        text: (
            <>
                Перед звонком важно увидеть только письма и чаты, чтобы понимать контекст.
                Пролистывать всё вручную — долго и неудобно.
            </>
        ),
        bgUrl: "/widgets/WhatsappButton/back_cross.jpeg",
    },
    {
        title: "Контроль работы по сделке",
        text: (
            <>
                Руководителю нужно быстро увидеть только задачи или только звонки, чтобы
                оценить активность и качество ведения сделки.
            </>
        ),
        bgUrl: "/widgets/WhatsappButton/back_basket.jpeg",
    },
    {
        title: "Много системных событий",
        text: (
            <>
                Изменения полей, статусов и автоматизаций забивают ленту. Важные
                комментарии и договорённости становится сложно заметить.
            </>
        ),
        bgUrl: "/widgets/WhatsappButton/back_timer.jpeg",
    },
    {
        title: "Догрузка событий ломает фокус",
        text: (
            <>
                Даже если вы нашли нужный блок — догрузка событий при прокрутке снова
                смешивает всё. Фильтр должен применяться автоматически.
            </>
        ),
        bgUrl: "/widgets/WhatsappButton/back_switch.jpeg",
    },
];

export const FEATURES: FeatureItem[] = [
    {
        iconUrl: "/widgets/WhatsappButton/group.jpeg",
        title: "Фильтр по типам событий",
        text: (
            <>
                Оставляйте в ленте только то, что нужно сейчас: задачи, примечания,
                письма, звонки или чаты.
            </>
        ),
    },
    {
        iconUrl: "/widgets/WhatsappButton/sort.jpeg",
        title: "Мгновенное переключение",
        text: (
            <>
                Один клик — и лента очищается от лишнего. Никаких ожиданий и перезагрузок.
            </>
        ),
    },
    {
        iconUrl: "/widgets/WhatsappButton/free.jpeg",
        title: "Скрытие пустых дат",
        text: (
            <>
                Если под датой нет подходящих событий — дата тоже скрывается. Лента выглядит
                аккуратно и без “пустых разделителей”.
            </>
        ),
    },
    {
        iconUrl: "/widgets/WhatsappButton/target.jpeg",
        title: "Работает в карточке сделки",
        text: (
            <>
                Панель вкладок находится прямо над добавлением события — там, где менеджер
                работает чаще всего.
            </>
        ),
    },
    {
        iconUrl: "/widgets/WhatsappButton/deadline.jpeg",
        title: "Автоприменение при догрузке",
        text: (
            <>
                При подгрузке истории (скролл/«загрузить ещё») выбранный фильтр применяется
                автоматически.
            </>
        ),
    },
    {
        iconUrl: "/widgets/WhatsappButton/mobile.jpeg",
        title: "Простота и привычный UI",
        text: (
            <>
                Внешне похоже на родные вкладки — сотрудники сразу понимают, как пользоваться,
                без обучения и инструкций.
            </>
        ),
    },
];

