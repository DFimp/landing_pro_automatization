import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["closing-ban"];

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
    title: "Настройка правил",
    content: (
      <div>
        <p>Для установки правил закрытия задачи:</p>
        <ul className="sc-list">
          <li>Перейдите в расширенные настройки виджета</li>
          <li>Установите минимальное количество символов</li>
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
