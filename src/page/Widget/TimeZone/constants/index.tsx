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

        <div className="sc-cta" style={{ marginTop: 16 }}>
          <a
            href={getWidgetInstallUrl(widget.clientId!)}
            target="_blank"
            rel="noopener"
            className="dist-btn-primary"
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