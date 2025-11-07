export const STEPS = [
  {
    title: "Установка виджета в amoCRM",
    content: (
      <div>
        <p>Первым делом установите виджет в вашу amoCRM систему:</p>
        <ul className="sc-list">
          <li>Зайдите в amoCRM → Настройки → Виджеты</li>
          <li>
            Найдите виджет «Запрет закрытия задачи без результата» в каталоге
          </li>
          <li>Нажмите «Установить» и подтвердите установку</li>
          <li>
            Виджет автоматически создаст необходимое поле «Не проверять на
            задачи»
          </li>
        </ul>

        <div className="sc-cta" style={{ marginTop: 16 }}>
          <a
            href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=05248753-81ac-40a2-94fb-e0b7c6d05092"
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
    title: "Настройка правил",
    content: (
      <div>
        <p>Для установки правил закрытия задачи:</p>
        <ul className="sc-list">
          <li>Перейдите в расширенные настройки виджета</li>
          <li>Установите максимальное количество символов</li>
          <li>Нажмите на кнопку «Сохранить»</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Тестирование и мониторинг",
    content: (
      <div>
        <p>Создайте тестовую задачу и проверьте работу виджета:</p>
        <ul className="sc-list">
          <li>Попробуйте закрыть без результата</li>
          <li>Убедитесь, что виджет блокирует закрытие</li>
        </ul>

        <div className="sc-note sc-note--red" style={{ marginTop: 12 }}>
          Если задача закрылась без результата, обратитесь в поддержку
        </div>
      </div>
    ),
  },
];
