import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["time-zone"];

export const STEPS = [
  {
    title: "Установите виджет в amoCRM",
    content: (
      <div>
        <p>Добавьте виджет в вашу CRM-систему:</p>
        <ul className="sc-list">
          <li>Перейдите в amoCRM → amoМаркет → Виджеты</li>
          <li>Найдите «Время клиента» в каталоге</li>
          <li>Нажмите «Установить» и подтвердите</li>
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
    title: "Готово! Пользуйтесь",
    content: (
      <div>
        <p>Теперь виджет автоматически показывает:</p>
        <ul className="sc-list">
          <li>Текущее время клиента</li>
          <li>Регион и город</li>
          <li>Мобильного оператора</li>
        </ul>

        <div className="sc-note sc-note--green">
          <div className="sc-note-title">Автоматическая работа</div>
          После установки виджет работает автоматически — никаких
          дополнительных действий не требуется.
        </div>

        <div className="sc-note sc-note--yellow" style={{ marginTop: 12 }}>
          <div className="sc-note-title">Результат</div>
          Открывайте любую карточку контакта — сразу видна вся информация о
          времени клиента.
        </div>
      </div>
    ),
  },
];