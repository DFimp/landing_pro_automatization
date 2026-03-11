import type { CaseItem } from "@/shared/ui/Case/CaseCard";
import type { ProblemItem } from "@/shared/ui/ProblemsCard/ProblemsCard";
import type { FeatureItem } from "@/shared/ui/FeaturesCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["delete-notes-ban"];

export const STEPS = [
    {
        title: "Установка виджета",
        content: (
            <div>
                <p>Сначала установите виджет в ваш аккаунт amoCRM:</p>
                <ul className="sc-list">
                    <li>amoCRM → Настройки → Интеграции/Виджеты</li>
                    <li>Найдите «Запрет редактирования и удаления примечаний»</li>
                    <li>Нажмите «Установить» и подтвердите доступы</li>
                </ul>
                <p>
                    После установки в настройках виджета появятся вкладки:
                    «Параметры», «Инструкция», «Техническая поддержка».
                </p>
                <a
                    href={getWidgetInstallUrl(widget.clientId!)}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-[#386bff] text-white font-bold shadow-[0_12px_28px_rgba(56,107,255,0.35)] mt-[18px]"
                    style={{ marginTop: 12 }}
                >
                    Подключить виджет сейчас
                </a>
            </div>
        ),
    },
    {
        title: "Основные запреты на вкладке «Параметры»",
        content: (
            <div>
                <p>
                    Откройте вкладку <strong>«Параметры»</strong> — здесь настраиваются
                    глобальные запреты для каждого пользователя:
                </p>
                <ul className="sc-list">
                    <li>
                        Для каждого менеджера можно включить следующие запреты:
                        <ul className="sc-list" style={{ marginTop: 6 }}>
                            <li>
                                <strong>Запрещено редактировать</strong> — запрещает менять уже
                                добавленные примечания (комментарии) в карточках сделок,
                                контактов и компаний
                            </li>
                            <li>
                                <strong>Запрещено удалять</strong> — блокирует удаление
                                примечаний, чтобы история коммуникации не «пропадала»
                            </li>
                        </ul>
                    </li>
                    <li>
                        Можно быстро <strong>«Включить всех»</strong> или{" "}
                        <strong>«Выключить всех»</strong> и затем точечно отрегулировать доступы
                    </li>
                    <li>
                        После изменений обязательно нажмите{" "}
                        <strong>«Сохранить настройки»</strong>
                    </li>
                </ul>
                <div className="sc-note sc-note--yellow" style={{ marginTop: 12 }}>
                    <div className="sc-note-title">Важно:</div>
                    <div>
                        Запреты относятся именно к примечаниям (комментариям) и не мешают
                        стандартной работе с задачами, сделками и другими сущностями.
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Как работает блокировка в карточке",
        content: (
            <div>
                <p>
                    После включения запрета:
                </p>
                <ul className="sc-list">
                    <li>
                        Кнопки <strong>«Удалить»</strong> и <strong>«Изменить»</strong> для примечаний становятся недоступны
                    </li>
                    <li>
                        Виджет предотвращает действия на уровне интерфейса: даже при быстрых кликах действие не выполнится
                    </li>
                    <li>
                        Это защищает историю общения и заметки менеджеров от случайных изменений
                    </li>
                </ul>
                <div className="sc-note" style={{ marginTop: 12 }}>
                    <div className="sc-note-title">Совет:</div>
                    <div>
                        Для руководителей и тимлидов можно оставить доступ на редактирование/удаление,
                        а для стажёров и менеджеров — включить строгий режим.
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Разные настройки для разных ролей",
        content: (
            <div>
                <p>
                    Используйте разграничение прав, чтобы создать оптимальную систему доступа:
                </p>
                <ul className="sc-list">
                    <li><strong>Стажёры и новые менеджеры</strong> — запрет редактирования и удаления</li>
                    <li><strong>Опытные менеджеры</strong> — запрет удаления, редактирование по регламенту</li>
                    <li><strong>Тимлиды и руководители</strong> — доступ к корректировкам при необходимости</li>
                </ul>
                <p>
                    Такой подход сохраняет дисциплину и защищает данные, не мешая рабочей гибкости.
                </p>
            </div>
        ),
    },
    {
        title: "Финальное применение и контроль",
        content: (
            <div>
                <p>После завершения настройки:</p>
                <ul className="sc-list">
                    <li>Сохраните изменения</li>
                    <li>Сообщите сотрудникам о новых правилах работы с примечаниями</li>
                    <li>
                        Проверьте качество фиксации результатов общения — теперь важные комментарии не будут «пропадать»
                    </li>
                </ul>
                <div className="sc-note sc-note--blue" style={{ marginTop: 12 }}>
                    <div className="sc-note-title">Результат:</div>
                    <div>
                        История коммуникаций сохраняется, меньше спорных ситуаций и выше доверие к данным в CRM.
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
        text: "AMO CRM AMO CRM AMO CRM",
    },

    {
        type: "card",
        title: "Защита комментариев от «чистки»",
        text: (
            <>
                Примечания больше нельзя удалять «по-тихому». История общения с клиентом сохраняется,
                а руководитель видит полную картину по сделке.
            </>
        ),
        mobileDecorUrl: "/widgets/BackAll/amo.svg",
    },

    {
        type: "card",
        title: "Прозрачность коммуникаций",
        text: (
            <>
                Все договоренности, итоги звонков и важные детали остаются в карточке. Меньше споров
                и больше ответственности за фиксирование результатов.
            </>
        ),
        mobileDecorUrl: "/widgets/BackAll/amo (1).svg",
    },

    { type: "stripe", side: "right", text: "AMO CRM AMO CRM AMO CRM" },
    { type: "stripe", side: "left", text: "AMO CRM AMO CRM AMO CRM" },

    {
        type: "card",
        title: "Контроль качества заполнения",
        text: (
            <>
                Если в компании принят регламент фиксировать результаты общения в примечаниях — виджет
                помогает соблюдать правила и предотвращает случайные правки.
            </>
        ),
        mobileDecorUrl: "/widgets/BackAll/amo (2).svg",
    },

    {
        type: "card",
        title: "Сохранение полной истории по клиенту",
        text: (
            <>
                Примечания формируют реальную историю работы. Когда их нельзя удалять и переписывать,
                CRM становится надежным источником данных для аналитики и контроля.
            </>
        ),
        mobileDecorUrl: "/widgets/BackAll/amo (3).svg",
    },

    {
        type: "stripe",
        side: "right",
        white: true,
        text: "AMO CRM AMO CRM AMO CRM",
    },
];

export const PROBLEMS: ProblemItem[] = [
    {
        title: "Примечания исчезают из карточки",
        text: (
            <>
                Менеджеры могут <span className="at-mark">случайно</span> или намеренно удалить примечание,
                и вы теряете важные детали по клиенту.
            </>
        ),
        bgUrl: "/widgets/BackAll/back_web.jpeg",
    },
    {
        title: "«Переписывание» истории общения",
        text: (
            <>
                Примечания можно редактировать задним числом, из-за чего{" "}
                <span className="at-mark">сложно</span> понять, что было на самом деле и когда это произошло.
            </>
        ),
        bgUrl: "/widgets/BackAll/back_watch.jpeg",
    },
    {
        title: "Споры между менеджером и руководителем",
        text: (
            <>
                Без неизменяемой истории появляются{" "}
                <span className="at-mark">спорные ситуации</span>: что обещали клиенту, кто говорил, кто виноват.
            </>
        ),
        bgUrl: "/widgets/BackAll/back_chart.jpeg",
    },
    {
        title: "Потеря качества базы и аналитики",
        text: (
            <>
                Когда комментарии можно менять и удалять, падает качество данных в CRM и{" "}
                <span className="at-mark">искажается</span> аналитика по работе отдела продаж.
            </>
        ),
        bgUrl: "/widgets/BackAll/back_basket.jpeg",
    },
];

export const FEATURES: FeatureItem[] = [
    {
        iconUrl: "/widgets/BackAll/gear.jpeg",
        title: "Глобальный запрет действий с примечаниями",
        text: (
            <>
                Настраивайте запрет на <strong>редактирование</strong> и <strong>удаление</strong> примечаний
                для выбранных менеджеров или отделов.
            </>
        ),
    },
    {
        iconUrl: "/widgets/BackAll/shield.jpeg",
        title: "Сохранение истории коммуникаций",
        text: (
            <>
                Примечания остаются в карточке и формируют надежную историю общения. Это повышает
                контроль качества и снижает количество спорных ситуаций.
            </>
        ),
    },
    {
        iconUrl: "/widgets/BackAll/tag.jpeg",
        title: "Разграничение по ролям",
        text: (
            <>
                Стажёрам — строгие ограничения, менеджерам — по регламенту, руководителям — доступ к корректировкам.
                Виджет легко подстраивается под структуру отдела.
            </>
        ),
    },
    {
        iconUrl: "/widgets/BackAll/magnifier.jpeg",
        title: "Визуальная индикация ограничений",
        text: (
            <>
                Заблокированные действия становятся тусклыми и помечаются визуально — сразу видно,
                что действие недоступно.
            </>
        ),
    },
    {
        iconUrl: "/widgets/BackAll/burger.jpeg",
        title: "Работа без ломки интерфейса",
        text: (
            <>
                Виджет не меняет стандартную логику amoCRM и не удаляет данные. Его можно оперативно
                отключить или скорректировать при изменении регламентов.
            </>
        ),
    },
    {
        iconUrl: "/widgets/BackAll/shield.jpeg",
        title: "Безопасность и контроль данных",
        text: (
            <>
                Данные в CRM становятся более надежными: меньше «потерь» и «правок задним числом»,
                больше прозрачности в работе команды.
            </>
        ),
    },
];

