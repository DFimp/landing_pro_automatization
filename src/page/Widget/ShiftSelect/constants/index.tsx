import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["shift-select"];

export const STEPS = [
    {
        title: "Установка виджета в amoCRM",
        content: (
            <div>
                <p>Для начала установите виджет в вашу amoCRM систему:</p>
                <ul className="sc-list">
                    <li>Зайдите в amoCRM → Настройки → Интеграции / Виджеты</li>
                    <li>
                        Найдите виджет «Групповое выделение (Shift-выбор)» в каталоге или
                        откройте страницу установки по нашей ссылке
                    </li>
                    <li>Нажмите «Установить» и подтвердите доступы</li>
                    <li>
                        Дождитесь окончания установки — дополнительной настройки полей не
                        требуется
                    </li>
                </ul>

                <div className="sc-note" style={{ marginTop: 16 }}>
                    Если вы устанавливаете виджет по прямой ссылке, убедитесь, что
                    авторизованы в нужном аккаунте amoCRM.
                </div>

                <div style={{ marginTop: 16 }}>
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
        title: "Проверка работы в списках",
        content: (
            <div>
                <p>После установки откройте любой список в amoCRM:</p>
                <ul className="sc-list">
                    <li>Перейдите в список сделок, контактов или компаний</li>
                    <li>Убедитесь, что в строках сущностей отображаются чекбоксы</li>
                    <li>
                        При необходимости включите чекбоксы через настройки отображения
                        списка
                    </li>
                </ul>

                <div className="sc-note" style={{ marginTop: 12 }}>
                    Виджет работает со стандартными списками amoCRM, использует уже
                    существующие чекбоксы и не меняет вашу воронку.
                </div>
            </div>
        ),
    },
    {
        title: "Использование Shift и протягивания",
        content: (
            <div>
                <p>Теперь протестируйте основные сценарии работы:</p>
                <ul className="sc-list">
                    <li>
                        Кликните по первому чекбоксу, затем зажмите <b>Shift</b> и
                        кликните по второму — все чекбоксы между ними (включая оба)
                        будут выделены.
                    </li>
                    <li>
                        Зажмите <b>левую кнопку мыши</b> на любом чекбоксе и проведите по
                        списку — виджет выделит или снимет выделение сразу с целого
                        диапазона строк.
                    </li>
                    <li>
                        Обычный одиночный клик по чекбоксу продолжает работать стандартным
                        образом, без задержек и конфликтов.
                    </li>
                </ul>

                <div className="sc-note" style={{ marginTop: 12 }}>
                    Используйте виджет для массовой смены ответственных, статусов и
                    запуска автоматизаций — подготовка выборки займёт секунды.
                </div>
            </div>
        ),
    },
];
