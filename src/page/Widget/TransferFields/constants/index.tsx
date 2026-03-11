import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["transfer-fields"];

export const STEPS = [
    {
        title: "Установка виджета в amoCRM",
        content: (
            <div>
                <p>Для начала установите виджет в вашу amoCRM систему:</p>
                <ul className="sc-list">
                    <li>Зайдите в amoCRM → Настройки → Интеграции / Виджеты</li>
                    <li>
                        Найдите виджет «Перенос длинных названий полей» в каталоге или
                        откройте страницу установки по нашей ссылке
                    </li>
                    <li>Нажмите «Установить» и подтвердите доступы</li>
                    <li>
                        Дождитесь окончания установки — дополнительная настройка не
                        требуется, виджет работает автоматически.
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
        title: "Проверка работы в карточке",
        content: (
            <div>
                <p>После установки откройте любую карточку сделки, контакта или компании:</p>
                <ul className="sc-list">
                    <li>
                        Найдите поле с длинным названием — например, многострочный текст или
                        техническое поле с большим заголовком.
                    </li>
                    <li>
                        Убедитесь, что длинное название <b>больше не обрезается</b>{" "}
                        многоточием.
                    </li>
                    <li>
                        Заголовок должен автоматически переноситься на новую строку,
                        оставаясь полностью читаемым.
                    </li>
                </ul>

                <div className="sc-note" style={{ marginTop: 12 }}>
                    Виджет работает со всеми типами пользовательских полей и не вносит
                    изменений в структуру карточки. Он лишь улучшает отображение данных.
                </div>
            </div>
        ),
    },
    {
        title: "Как работает улучшенный перенос текста",
        content: (
            <div>
                <p>После активации виджета вы сразу заметите изменения:</p>
                <ul className="sc-list">
                    <li>
                        Длинные названия больше не накладываются друг на друга — высота
                        строки рассчитывается автоматически.
                    </li>
                    <li>
                        Текст корректно переносится даже при очень длинных словах
                        («SuperLongCustomFieldNameWithoutSpaces123»).
                    </li>
                    <li>
                        Виджет учитывает изменения на странице amoCRM и автоматически
                        применяет корректный перенос при обновлении карточки.
                    </li>
                </ul>

                <div className="sc-note" style={{ marginTop: 12 }}>
                    Никаких кнопок, настроек и действий от пользователя не требуется —
                    виджет полностью автоматический и работает “за кадром”.
                </div>
            </div>
        ),
    },
];
