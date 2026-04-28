import ArticleBlockWrapper from "@/views/articles/shared/ArticleContentSection/ui/ArticleBlockWrapper";
import Reveal from "@/shared/ui/Reveal/Reveal";

function ProcessMappingTable() {
  return (
    <div className="my-4 overflow-x-auto">
      <div className="min-w-[723px] overflow-hidden rounded-[16px] border border-[#3760E7]/45 bg-white">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="border-b border-r border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                Процесс в бизнесе
              </td>
              <td className="border-b border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                Как это отражается в amoCRM
              </td>
            </tr>

            {[
              ["Клиент оставил заявку", "создается сделка или лид"],
              ["Нужно быстро связаться", "ставится задача на первый контакт"],
              ["Клиент не ответил", "включается сценарий недозвона"],
              ["Менеджер отправил предложение", "создается задача на контроль решения"],
              ["Выставлен счет", "появляется контроль оплаты"],
              ["Клиент отказался", "фиксируется причина отказа"],
              ["Сделка зависла", "руководитель видит просрочку или отсутствие движения"],
              ["Клиент пришел повторно", "система помогает найти старую карточку"],
              ["Заявка пришла из рекламы", "источник фиксируется для отчета"],
            ].map((row, index) => (
              <tr key={index}>
                <td className="border-b border-r border-[#3760E7]/20 p-3">
                  {row[0]}
                </td>
                <td className="border-b border-[#3760E7]/20 p-3">
                  {row[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ManagerActionsTable() {
  return (
    <div className="my-4 overflow-x-auto">
      <div className="min-w-[723px] overflow-hidden rounded-[16px] border border-[#3760E7]/45 bg-white">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="border-b border-r border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                Этап
              </td>
              <td className="border-b border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                Действие менеджера
              </td>
            </tr>

            {[
              ["Новая заявка", "связаться с клиентом"],
              ["Недозвон", "повторить звонок по регламенту"],
              ["Квалификация", "уточнить потребность, бюджет, сроки"],
              ["Предложение отправлено", "проверить, получил ли клиент предложение"],
              ["Счет выставлен", "проконтролировать оплату"],
              ["Ожидаем решение", "сделать повторное касание"],
              ["Отказ", "указать точную причину"],
            ].map((row, index) => (
              <tr key={index}>
                <td className="border-b border-r border-[#3760E7]/20 p-3">
                  {row[0]}
                </td>
                <td className="border-b border-[#3760E7]/20 p-3">
                  {row[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function BusinessProcessImplementationContentSection() {
  return (
    <div>
      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={0}
      >
        <ArticleBlockWrapper>
          <p>
            <strong>
              amoCRM нужно внедрять не под «как обычно делают в CRM», а под то,
              как реально работает ваш бизнес.
            </strong>
          </p>
          <p>
            Если сначала создать воронку, добавить поля и подключить
            пользователей, а уже потом пытаться подогнать под это отдел продаж,
            система быстро станет неудобной. Менеджеры будут обходить CRM через
            чаты и таблицы, руководитель не увидит нормальную аналитику, а
            заявки продолжат теряться.
          </p>
          <p>
            Правильный порядок другой: сначала разбирается процесс продаж, потом
            под него проектируется amoCRM.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={60}
      >
        <ArticleBlockWrapper>
          <h2>Главная ошибка при внедрении</h2>
          <p>Многие начинают с интерфейса:</p>
          <ul>
            <li>какие этапы создать;</li>
            <li>какие поля добавить;</li>
            <li>каких пользователей завести;</li>
            <li>какие роботы включить;</li>
            <li>какие уведомления настроить.</li>
          </ul>
          <p>Это технический слой. Он важен, но не первый.</p>
          <p>Начинать нужно с вопросов бизнеса:</p>
          <ul>
            <li>откуда приходят заявки;</li>
            <li>кто отвечает за первый контакт;</li>
            <li>сколько времени есть на обработку лида;</li>
            <li>что делать при недозвоне;</li>
            <li>какие данные нужны менеджеру;</li>
            <li>что должен видеть руководитель;</li>
            <li>где сейчас теряются клиенты;</li>
            <li>какие действия выполняются вручную;</li>
            <li>какие отчеты нужны для управления.</li>
          </ul>
          <p>
            Без этих ответов amoCRM будет настроена формально. Внешне система
            есть, но продажи она не контролирует.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={80}
      >
        <ArticleBlockWrapper>
          <h2>Как выглядит внедрение под процесс</h2>
          <p>
            Внедрение под процесс - это когда каждая настройка в amoCRM
            привязана к конкретному действию в продажах.
          </p>
          <ProcessMappingTable />
          <p>
            Так CRM становится продолжением процесса продаж, а не отдельной
            программой, которую менеджеры заполняют «потому что надо».
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={100}
      >
        <ArticleBlockWrapper>
          <h2>Что нужно описать до настройки amoCRM</h2>
          <h3>1. Источники заявок</h3>
          <p>Сначала нужно понять, откуда приходят обращения.</p>
          <p>Обычно это:</p>
          <ul>
            <li>сайт;</li>
            <li>формы заявок;</li>
            <li>телефония;</li>
            <li>WhatsApp;</li>
            <li>Telegram;</li>
            <li>email;</li>
            <li>реклама;</li>
            <li>социальные сети;</li>
            <li>Авито;</li>
            <li>повторные обращения;</li>
            <li>ручные заявки от сотрудников или партнеров.</li>
          </ul>
          <p>Для каждого источника нужно определить:</p>
          <ul>
            <li>как заявка попадает в amoCRM;</li>
            <li>какие данные передаются;</li>
            <li>кто становится ответственным;</li>
            <li>какая задача создается;</li>
            <li>какой источник фиксируется;</li>
            <li>как руководитель видит просрочку.</li>
          </ul>
          <p>
            <strong>Внутренняя ссылка:</strong> статья «Интеграция amoCRM с
            сайтом»
            <br />
            <strong>Анкор:</strong> интеграция amoCRM с сайтом
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={120}
      >
        <ArticleBlockWrapper>
          <h3>2. Путь клиента</h3>
          <p>
            Дальше нужно описать, какие этапы проходит клиент от заявки до
            результата.
          </p>
          <p>Например:</p>
          <ol>
            <li>Новая заявка.</li>
            <li>Первый контакт.</li>
            <li>Недозвон.</li>
            <li>Квалификация.</li>
            <li>Предложение.</li>
            <li>Счет.</li>
            <li>Договор.</li>
            <li>Оплата.</li>
            <li>Успешно.</li>
            <li>Отказ.</li>
          </ol>
          <p>
            Но этапы нельзя копировать из чужой CRM. У разных бизнесов процесс
            отличается.
          </p>
          <p>
            У недвижимости есть бронирование, показы, ипотека, договор, оплата.
            <br />
            У клиники - запись, подтверждение, прием, повторный визит.
            <br />
            У производства - расчет, согласование, счет, запуск в работу,
            отгрузка.
            <br />
            У услуг - консультация, предложение, договор, оплата, выполнение.
          </p>
          <p>
            Если этапы не отражают реальный путь клиента, отчеты будут
            бесполезны.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={140}
      >
        <ArticleBlockWrapper>
          <h3>3. Действия менеджера</h3>
          <p>На каждом этапе должно быть понятно, что делает менеджер.</p>
          <p>Пример:</p>
          <ManagerActionsTable />
          <p>
            Если этап не требует действия, он часто не нужен. Этапы должны
            помогать управлять продажами, а не просто украшать воронку.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={160}
      >
        <ArticleBlockWrapper>
          <h3>4. Роли и ответственность</h3>
          <p>До внедрения нужно определить, кто за что отвечает.</p>
          <p>Например:</p>
          <ul>
            <li>менеджер принимает и ведет заявку;</li>
            <li>руководитель контролирует просрочки;</li>
            <li>маркетолог смотрит источники;</li>
            <li>администратор управляет настройками;</li>
            <li>бухгалтерия видит счета или оплаты;</li>
            <li>собственник смотрит ключевые отчеты.</li>
          </ul>
          <p>
            Если роли не прописаны, в CRM начинается хаос: непонятно, кто
            должен обработать заявку, кто может менять поля, кто отвечает за
            просрочку и кто следит за отчетами.
          </p>

          <h3>5. Данные для контроля</h3>
          <p>
            Поля в amoCRM должны появляться не случайно, а под конкретную
            задачу.
          </p>
          <p>Нужно заранее понять, какие данные нужны:</p>
          <ul>
            <li>для продажи;</li>
            <li>для отчетов;</li>
            <li>для документов;</li>
            <li>для автоматизации;</li>
            <li>для сегментации клиентов;</li>
            <li>для повторных касаний.</li>
          </ul>
          <p>
            Лишние поля мешают менеджерам. Недостающие поля ломают аналитику.
            Нужен баланс.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={180}
      >
        <ArticleBlockWrapper>
          <h2>Что настраивается после проектирования</h2>
          <p>Когда процесс описан, можно переходить к настройке.</p>

          <h3>Воронки и этапы</h3>
          <p>Создаются воронки под реальные направления бизнеса.</p>
          <p>Например:</p>
          <ul>
            <li>первичные продажи;</li>
            <li>повторные продажи;</li>
            <li>сопровождение;</li>
            <li>сервисные обращения;</li>
            <li>заявки на аудит;</li>
            <li>заявки на виджеты;</li>
            <li>подбор сотрудников;</li>
            <li>обработка заказов.</li>
          </ul>
          <p>
            Не всегда нужна одна общая воронка. Если процессы отличаются, их
            лучше разделять.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={200}
      >
        <ArticleBlockWrapper>
          <h3>Поля и обязательные данные</h3>
          <p>Настраиваются поля, которые нужны для работы:</p>
          <ul>
            <li>источник;</li>
            <li>продукт или услуга;</li>
            <li>сумма;</li>
            <li>город;</li>
            <li>тип клиента;</li>
            <li>причина отказа;</li>
            <li>статус оплаты;</li>
            <li>дата следующего контакта;</li>
            <li>ответственный;</li>
            <li>комментарий по потребности.</li>
          </ul>
          <p>
            На отдельных этапах поля можно сделать обязательными. Например,
            нельзя закрыть отказ без причины или перевести сделку к счету без
            суммы.
          </p>

          <h3>Задачи и регламенты</h3>
          <p>Задачи в amoCRM должны повторять правила отдела продаж.</p>
          <p>Например:</p>
          <ul>
            <li>новая заявка - задача на первый контакт;</li>
            <li>недозвон - повторная задача;</li>
            <li>предложение отправлено - задача на контроль ответа;</li>
            <li>счет выставлен - задача проверить оплату;</li>
            <li>клиент попросил позже - задача на конкретную дату.</li>
          </ul>
          <p>
            <strong>Внутренняя ссылка:</strong> статья «Регламент обработки
            заявок в amoCRM»
            <br />
            <strong>Анкор:</strong> регламент обработки заявок в amoCRM
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={220}
      >
        <ArticleBlockWrapper>
          <h3>Источники и интеграции</h3>
          <p>После настройки структуры подключаются каналы и сервисы:</p>
          <ul>
            <li>сайт;</li>
            <li>формы;</li>
            <li>телефония;</li>
            <li>WhatsApp;</li>
            <li>Telegram;</li>
            <li>email;</li>
            <li>1С;</li>
            <li>МойСклад;</li>
            <li>СДЭК;</li>
            <li>платежные системы;</li>
            <li>аналитика.</li>
          </ul>
          <p>
            Интеграции должны попадать в уже подготовленную структуру. Если
            сначала подключить сервисы, а потом думать, куда должны идти данные,
            получится хаос.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={240}
      >
        <ArticleBlockWrapper>
          <h2>Как понять, что amoCRM внедрена правильно</h2>
          <p>
            Правильное внедрение видно не по количеству настроек, а по
            управляемости процесса.
          </p>
          <p>После внедрения должно быть понятно:</p>
          <ul>
            <li>сколько заявок пришло;</li>
            <li>из каких источников;</li>
            <li>кто их получил;</li>
            <li>как быстро менеджер связался с клиентом;</li>
            <li>какие задачи просрочены;</li>
            <li>какие сделки без движения;</li>
            <li>где клиенты чаще всего отказываются;</li>
            <li>какие менеджеры нарушают регламент;</li>
            <li>какие ручные действия можно убрать дальше.</li>
          </ul>
          <p>
            Если руководитель все равно спрашивает статусы в чате, а менеджеры
            ведут параллельные таблицы, внедрение сделано неполно.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={260}
      >
        <ArticleBlockWrapper>
          <h2>Пример: почему нельзя копировать чужую воронку</h2>
          <p>
            Две компании могут обе использовать amoCRM, но иметь разные
            процессы.
          </p>
          <p>Компания А продает услуги. Ей нужны этапы:</p>
          <ul>
            <li>заявка;</li>
            <li>консультация;</li>
            <li>предложение;</li>
            <li>договор;</li>
            <li>оплата;</li>
            <li>выполнение.</li>
          </ul>
          <p>Компания Б продает товары с доставкой. Ей нужны этапы:</p>
          <ul>
            <li>заявка;</li>
            <li>подтверждение заказа;</li>
            <li>оплата;</li>
            <li>сборка;</li>
            <li>доставка;</li>
            <li>получено;</li>
            <li>возврат.</li>
          </ul>
          <p>
            Если обеим компаниям поставить одну универсальную воронку «Новая -
            В работе - Думает - Успешно», руководитель не увидит реальный
            процесс. Менеджеры начнут использовать этапы как придется, а отчеты
            будут слабыми.
          </p>
          <p>CRM должна отражать конкретную операционную логику бизнеса.</p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={280}
      >
        <ArticleBlockWrapper>
          <h2>Что будет, если внедрять без процесса</h2>
          <p>Обычно появляются одинаковые проблемы:</p>
          <ul>
            <li>менеджеры не понимают, когда двигать сделки;</li>
            <li>задачи ставятся вручную или не ставятся вообще;</li>
            <li>недозвоны не контролируются;</li>
            <li>причины отказов заполняются формально;</li>
            <li>источники заявок смешиваются;</li>
            <li>руководитель не видит просрочки;</li>
            <li>отчеты не помогают управлять;</li>
            <li>сотрудники считают CRM лишней нагрузкой;</li>
            <li>часть работы уходит обратно в таблицы и чаты.</li>
          </ul>
          <p>
            После этого бизнес делает вывод «CRM не работает». Хотя на деле
            проблема не в amoCRM, а в том, что ее не связали с процессом продаж.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={300}
      >
        <ArticleBlockWrapper>
          <h2>Когда нужен аудит перед внедрением</h2>
          <p>
            Если amoCRM уже есть, но работает плохо, лучше не начинать с полной
            переделки.
          </p>
          <p>Сначала стоит провести аудит, если:</p>
          <ul>
            <li>текущая настройка досталась от прошлого подрядчика;</li>
            <li>непонятно, какие функции реально используются;</li>
            <li>в базе много дублей;</li>
            <li>воронки устарели;</li>
            <li>менеджеры жалуются на CRM;</li>
            <li>отчеты не вызывают доверия;</li>
            <li>есть интеграции, которые нельзя сломать.</li>
          </ul>
          <p>
            <strong>Внутренняя ссылка:</strong> страница «CRM-аудит amoCRM»
            <br />
            <strong>Анкор:</strong> аудит amoCRM перед перенастройкой
          </p>
          <p>
            Аудит покажет, что можно сохранить, что нужно исправить, а что
            проще пересобрать заново.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={320}
      >
        <ArticleBlockWrapper>
          <h2>Что подготовить для внедрения</h2>
          <p>Перед началом полезно собрать:</p>
          <ul>
            <li>список источников заявок;</li>
            <li>текущую схему продаж;</li>
            <li>список менеджеров и ролей;</li>
            <li>причины отказов;</li>
            <li>примеры типовых сделок;</li>
            <li>список нужных отчетов;</li>
            <li>ручные действия менеджеров;</li>
            <li>сервисы, которые нужно связать с amoCRM;</li>
            <li>требования руководителя к контролю.</li>
          </ul>
          <p>
            Если этого нет, процесс можно собрать на интервью. Но внедрение без
            этих данных лучше не начинать.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={340}
      >
        <ArticleBlockWrapper>
          <h2>CTA</h2>
          <p>Оставьте заявку на консультацию.</p>
          <p>
            Разберем ваш процесс продаж и покажем, как внедрить amoCRM под
            реальную работу бизнеса: заявки, этапы, задачи, роли, источники,
            отчеты, интеграции и контроль менеджеров.
          </p>
        </ArticleBlockWrapper>
      </Reveal>
    </div>
  );
}
