import type { CaseItem } from "@/widgets/landing/caseCard/CaseCard";
import type { ProblemItem } from "@/widgets/landing/problemsCard/ProblemsCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["group-fields"];

export const STEPS = [
    {
        title: "Установка виджета",
        content: (
            <div>
                <p>
                    Нажмите кнопку «Установить виджет» на лендинге и следуйте
                    стандартной инструкции amoCRM для подключения.
                </p>
                <a
                    href={getWidgetInstallUrl(widget.clientId!)}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-[#386bff] text-white font-bold shadow-[0_12px_28px_rgba(56,107,255,0.35)] mt-[18px]"
                >
                    Установить виджет сейчас
                </a>
            </div>
        ),
    },
    {
        title: "Подготовка полей в amoCRM",
        content: (
            <div>
                <p>Создайте служебные поля-маркеры, которые будут задавать структуру:</p>
                <ul className="sc-list">
                    <li>
                        <strong>--- Группа ---</strong> — начало блока (группы)
                    </li>
                    <li>
                        <strong>-- Подгруппа --</strong> — начало подгруппы внутри группы
                    </li>
                    <li>
                        <strong>-- END --</strong> — конец подгруппы
                    </li>
                    <li>
                        <strong>--- END ---</strong> — конец группы
                    </li>
                </ul>
                <p style={{ marginTop: 8 }}>
                    Эти поля можно оставить в самом низу списка, они будут скрыты виджетом
                    и не будут мешать менеджерам.
                </p>
            </div>
        ),
    },
    {
        title: "Настройка структуры карточки",
        content: (
            <div>
                <p>
                    Откройте карточку сделки и расставьте маркеры в нужном порядке,
                    чтобы задать структуру:
                </p>
                <ul className="sc-list">
                    <li>Сгруппируйте логически связанные поля в одну группу</li>
                    <li>Используйте подгруппы для сложных блоков (например, «Адрес», «Оплата»)</li>
                    <li>Для нескольких групп повторите набор маркеров</li>
                </ul>

                <div className="sc-note sc-note--blue" style={{ marginTop: 12 }}>
                    <div className="sc-note-title">Совет:</div>
                    <div>
                        Сначала спланируйте структуру на бумаге, а затем перенесите её в поля.
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Автоматическая группировка",
        content: (
            <div>
                <p>
                    После установки и расстановки маркеров откройте карточку сделки
                    заново — виджет автоматически:
                </p>
                <ul className="sc-list">
                    <li>Соберёт поля в группы и подгруппы</li>
                    <li>Скроет служебные маркеры из интерфейса</li>
                    <li>Сделает группы сворачиваемыми</li>
                </ul>
            </div>
        ),
    },
    {
        title: "Работа с группами и подгруппами",
        content: (
            <div>
                <p>Используйте возможности сгруппированной карточки:</p>
                <ul className="sc-list">
                    <li>Разворачивайте только нужные блоки во время работы</li>
                    <li>Скрывайте второстепенные подгруппы, чтобы не перегружать экран</li>
                    <li>Быстро переходите к нужному разделу без долгой прокрутки</li>
                </ul>
            </div>
        ),
    },
    {
        title: "Изменение структуры",
        content: (
            <div>
                <p>
                    Хотите изменить расположение блоков или добавить новые группы?
                    Просто обновите порядок и подписи маркеров в списке полей.
                </p>
                <p>
                    Виджет автоматически подстроится под новую структуру при следующем
                    открытии карточки.
                </p>
            </div>
        ),
    },
];

export const PROBLEMS: ProblemItem[] = [
    {
        title: "Слишком много полей в карточке",
        text: (
            <>
                Менеджерам приходится{" "}
                <span className="at-mark">долго прокручивать</span> карточку сделки,
                чтобы найти нужное поле. Это замедляет работу и раздражает сотрудников.
            </>
        ),
        bgUrl: "/widgets/BackAll/back_web.jpeg",
    },
    {
        title: "Хаос в расположении информации",
        text: (
            <>
                Важно помнить, где лежит нужное поле — вверху, внизу, посередине.
                Новым сотрудникам{" "}
                <span className="at-mark">сложно разобраться</span> в карточке без
                понятной структуры.
            </>
        ),
        bgUrl: "/widgets/BackAll/back_watch.jpeg",
    },
    {
        title: "Скрытые и технические поля мешают работе",
        text: (
            <>
                Технические поля, созданные для интеграций и автоматизаций, постоянно
                <span className="at-mark">мозолят глаза</span> менеджерам и мешают
                фокусироваться на важном.
            </>
        ),
        bgUrl: "/widgets/BackAll/back_chart.jpeg",
    },
    {
        title: "Потеря времени и концентрации",
        text: (
            <>
                Чем больше полей, тем выше шанс{" "}
                <span className="at-mark">ошибиться</span>, забыть что-то заполнить
                или пропустить ключевую информацию о клиенте.
            </>
        ),
        bgUrl: "/widgets/BackAll/back_basket.jpeg",
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
        title: "Автоматический порядок в полях",
        text: (
            <>
                Все поля в карточке сделки автоматически группируются в аккуратные
                блоки: общая информация, финансы, контакты, детали услуги и т.д.
            </>
        ),
        mobileDecorUrl: "/widgets/BackAll/amo.svg",
    },

    {
        type: "card",
        title: "Скрытие служебных маркеров",
        text: (
            <>
                Поля-маркеры остаются в системе, но{" "}
                <span className="at-mark">не мешают</span> менеджерам. Виджет
                использует их только для построения структуры.
            </>
        ),
        mobileDecorUrl: "/widgets/BackAll/amo (1).svg",
    },

    { type: "stripe", side: "right", text: "AMO CRM AMO CRM AMO CRM" },
    { type: "stripe", side: "left", text: "AMO CRM AMO CRM AMO CRM" },

    {
        type: "card",
        title: "Свертываемые группы и подгруппы",
        text: (
            <>
                Менеджеры видят только те блоки, которые нужны им прямо сейчас.
                Остальные можно свернуть одним кликом, чтобы{" "}
                <span className="at-mark">не перегружать</span> экран.
            </>
        ),
        mobileDecorUrl: "/widgets/BackAll/amo (2).svg",
    },

    {
        type: "card",
        title: "Удобство для новичков и опытных",
        text: (
            <>
                Новым сотрудникам проще разобраться в карточке, а опытные менеджеры{" "}
                работают быстрее: вся информация лежит по полочкам.
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

