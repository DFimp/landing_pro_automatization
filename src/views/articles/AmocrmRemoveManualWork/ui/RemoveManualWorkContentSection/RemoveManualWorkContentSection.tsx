import ArticleBlockWrapper from "@/views/articles/shared/ArticleContentSection/ui/ArticleBlockWrapper";
import Reveal from "@/shared/ui/Reveal/Reveal";

function ManualActionsTable() {
  return (
    <div className="my-4 overflow-x-auto">
      <div className="min-w-[723px] overflow-hidden rounded-[16px] border border-[#3760E7]/45 bg-white">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="border-b border-r border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                Ручное действие
              </td>
              <td className="border-b border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                Что можно настроить в amoCRM
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Менеджер сам создает сделку
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                автоматическое создание сделки из заявки
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Руководитель вручную раздает лиды
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                распределение заявок по правилам
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Менеджер сам ставит задачу
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                автоматические задачи на каждом этапе
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Недозвоны держатся в памяти
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                повторные задачи и отдельный сценарий
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Руководитель ищет просрочки
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                уведомления и отчеты по нарушениям
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Клиенты дублируются
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                проверка дублей контактов и сделок
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Документы делают вручную
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                генерация документов из данных CRM
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Счета выставляют отдельно
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                интеграция с платежами или банком
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Статусы доставки проверяют в кабинете
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                интеграция с доставкой
              </td>
            </tr>
            <tr>
              <td className="border-r border-[#3760E7]/20 p-3">
                Отчеты собирают в таблицах
              </td>
              <td className="p-3">
                аналитика внутри amoCRM или во внешней BI-системе
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StageActionsTable() {
  return (
    <div className="my-4 overflow-x-auto">
      <div className="min-w-[723px] overflow-hidden rounded-[16px] border border-[#3760E7]/45 bg-white">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="border-b border-r border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                Этап сделки
              </td>
              <td className="border-b border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                Автоматическое действие
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Новая заявка
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                связаться с клиентом
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Недозвон
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                повторить звонок
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Квалификация
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                уточнить потребность
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Предложение отправлено
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                проверить решение клиента
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Счет выставлен
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                проконтролировать оплату
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Договор в работе
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                проверить согласование
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-[#3760E7]/20 p-3">
                Ожидаем решение
              </td>
              <td className="border-b border-[#3760E7]/20 p-3">
                сделать повторное касание
              </td>
            </tr>
            <tr>
              <td className="border-r border-[#3760E7]/20 p-3">
                Сделка без движения
              </td>
              <td className="p-3">уведомить менеджера или руководителя</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function RemoveManualWorkContentSection() {
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
              Автоматизация отдела продаж в amoCRM нужна не для того, чтобы
              “CRM продавала сама”. Ее задача - убрать ручную рутину, снизить
              потери заявок и сделать работу менеджеров контролируемой.
            </strong>
          </p>
          <p>
            Если менеджеры вручную распределяют заявки, ставят задачи, проверяют
            недозвоны, копируют данные в документы, ищут дубли и напоминают себе
            о клиентах - отдел продаж зависит от дисциплины отдельных
            сотрудников. Пока заявок мало, это может работать. Когда поток
            растет, начинаются потери.
          </p>
          <p>
            Автоматизация помогает сделать процесс стабильным: заявка попадает в
            CRM, получает ответственного, запускает задачу, фиксируется в
            отчетах и не пропадает без действия.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={60}
      >
        <ArticleBlockWrapper>
          <h2>Что можно автоматизировать в amoCRM</h2>
          <p>
            Автоматизация должна начинаться не с вопроса «какие функции
            включить», а с вопроса: <strong>какие ручные действия мешают продажам прямо сейчас</strong>.
          </p>
          <ManualActionsTable />
          <p>
            Автоматизировать нужно не все подряд. Сначала - те точки, где
            теряются заявки, время и контроль.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={80}
      >
        <ArticleBlockWrapper>
          <h2>Приоритет 1. Новые заявки</h2>
          <p>
            Новая заявка - самая важная точка автоматизации. Если она не попала
            в работу быстро, все остальные настройки уже не имеют значения.
          </p>
          <p>Что должно происходить автоматически:</p>
          <ol>
            <li>
              Заявка приходит с сайта, формы, телефона, мессенджера или другого
              источника.
            </li>
            <li>В amoCRM создается сделка.</li>
            <li>Фиксируется источник обращения.</li>
            <li>Назначается ответственный менеджер.</li>
            <li>Ставится задача на первый контакт.</li>
            <li>Менеджер получает уведомление.</li>
            <li>
              Руководитель видит просрочку, если заявка не обработана вовремя.
            </li>
          </ol>
          <p>
            Здесь автоматизация напрямую влияет на деньги: клиент не ждет,
            заявка не висит без ответственного, руководитель видит нарушение.
          </p>
          <p>
            <strong>Внутренняя ссылка:</strong> статья «Как не терять заявки в
            amoCRM»
            <br />
            <strong>Анкор:</strong> как не терять заявки в amoCRM
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={100}
      >
        <ArticleBlockWrapper>
          <h2>Приоритет 2. Распределение лидов</h2>
          <p>Ручное распределение заявок быстро становится узким местом.</p>
          <p>Проблемы:</p>
          <ul>
            <li>
              руководитель не всегда вовремя назначает ответственного;
            </li>
            <li>один менеджер перегружен, другой свободен;</li>
            <li>заявки спорят между сотрудниками;</li>
            <li>лид может остаться без владельца;</li>
            <li>повторный клиент попадает не к тому менеджеру.</li>
          </ul>
          <p>Автоматизация распределения может учитывать:</p>
          <ul>
            <li>очередь;</li>
            <li>нагрузку;</li>
            <li>источник заявки;</li>
            <li>продукт или направление;</li>
            <li>филиал;</li>
            <li>город;</li>
            <li>график работы;</li>
            <li>закрепленного клиента;</li>
            <li>повторное обращение.</li>
          </ul>
          <p>
            Главное правило: <strong>у каждой заявки должен быть ответственный и задача</strong>. Просто назначить менеджера мало. Нужно сразу запустить действие.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={120}
      >
        <ArticleBlockWrapper>
          <h2>Приоритет 3. Недозвоны</h2>
          <p>Недозвон - одна из самых частых точек потери клиентов.</p>
          <p>Плохой процесс выглядит так:</p>
          <ol>
            <li>Менеджер позвонил.</li>
            <li>Клиент не ответил.</li>
            <li>Сделка осталась в CRM.</li>
            <li>Повторный звонок зависит от памяти менеджера.</li>
          </ol>
          <p>Нормальный автоматизированный сценарий:</p>
          <ol>
            <li>Первый недозвон фиксируется.</li>
            <li>Система ставит повторную задачу.</li>
            <li>После второго недозвона создается следующая попытка.</li>
            <li>
              После нескольких попыток можно отправить сообщение в мессенджер.
            </li>
            <li>Руководитель видит, если регламент нарушен.</li>
            <li>Сделка не закрывается без понятной причины.</li>
          </ol>
          <p>
            Автоматизация недозвонов не должна быть сложной. Она должна
            гарантировать, что клиент не исчез после одной неудачной попытки
            связи.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={140}
      >
        <ArticleBlockWrapper>
          <h2>Приоритет 4. Задачи по этапам воронки</h2>
          <p>У каждой активной сделки должно быть следующее действие.</p>
          <p>Для этого задачи нужно привязать к этапам:</p>
          <StageActionsTable />
          <p>
            Если сделка стоит в воронке без задачи, она фактически выпала из
            процесса.
          </p>
          <p>
            <strong>Внутренняя ссылка:</strong> статья «Автоматические задачи в
            amoCRM»
            <br />
            <strong>Анкор:</strong> автоматические задачи в amoCRM
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={160}
      >
        <ArticleBlockWrapper>
          <h2>Приоритет 5. Уведомления</h2>
          <p>
            Уведомления нужны не для того, чтобы отправлять в чат каждое
            действие. Они нужны для событий, где требуется реакция.
          </p>
          <p>Полезные уведомления:</p>
          <ul>
            <li>новая заявка назначена менеджеру;</li>
            <li>задача просрочена;</li>
            <li>заявка не обработана вовремя;</li>
            <li>клиент написал сообщение;</li>
            <li>пропущен звонок;</li>
            <li>сделка стоит без движения;</li>
            <li>крупная сделка зависла;</li>
            <li>интеграция вернула ошибку;</li>
            <li>сделка без следующей задачи.</li>
          </ul>
          <p>
            Для менеджера уведомление - это подсказка к действию.
            <br />
            Для руководителя - сигнал о нарушении процесса.
          </p>
          <p>
            Если уведомлений слишком много, они превращаются в шум. Поэтому их
            нужно настраивать точечно.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={180}
      >
        <ArticleBlockWrapper>
          <h2>Приоритет 6. Дубли</h2>
          <p>Дубли нельзя считать мелкой проблемой базы. Они мешают продажам.</p>
          <p>Что происходит из-за дублей:</p>
          <ul>
            <li>один клиент ведется в нескольких карточках;</li>
            <li>история общения разбивается;</li>
            <li>
              менеджеры могут работать с одним клиентом параллельно;
            </li>
            <li>отчеты показывают больше заявок, чем есть на самом деле;</li>
            <li>повторные обращения обрабатываются хаотично.</li>
          </ul>
          <p>Автоматизация может проверять совпадения по:</p>
          <ul>
            <li>телефону;</li>
            <li>email;</li>
            <li>активным сделкам;</li>
            <li>внешнему номеру заказа;</li>
            <li>повторным обращениям;</li>
            <li>источнику заявки.</li>
          </ul>
          <p>
            <strong>Внутренняя ссылка:</strong> статья «Дубли в amoCRM»
            <br />
            <strong>Анкор:</strong> как убрать дубли в amoCRM
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={200}
      >
        <ArticleBlockWrapper>
          <h2>Приоритет 7. Документы, счета и оплаты</h2>
          <p>
            Если менеджеры вручную готовят документы и счета, это съедает время
            и дает ошибки.
          </p>
          <p>Автоматизировать можно:</p>
          <ul>
            <li>коммерческие предложения;</li>
            <li>договоры;</li>
            <li>счета;</li>
            <li>акты;</li>
            <li>шаблоны документов;</li>
            <li>передачу реквизитов;</li>
            <li>контроль оплаты;</li>
            <li>смену этапа после оплаты;</li>
            <li>уведомление менеджера о платеже.</li>
          </ul>
          <p>
            Здесь важно не просто создать документ, а встроить его в процесс
            сделки. Например: сделка дошла до этапа «Счет» - система подтянула
            данные клиента, сформировала документ, поставила задачу на контроль
            оплаты.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={220}
      >
        <ArticleBlockWrapper>
          <h2>Приоритет 8. Интеграции</h2>
          <p>Автоматизация часто выходит за пределы amoCRM.</p>
          <p>
            Если менеджеры переносят данные между системами, стоит рассмотреть
            интеграции:
          </p>
          <ul>
            <li>сайт → amoCRM;</li>
            <li>телефония → amoCRM;</li>
            <li>WhatsApp → amoCRM;</li>
            <li>amoCRM → 1С;</li>
            <li>amoCRM → МойСклад;</li>
            <li>amoCRM → СДЭК;</li>
            <li>amoCRM → платежные системы;</li>
            <li>hh.ru → amoCRM;</li>
            <li>amoCRM → аналитика.</li>
          </ul>
          <p>Интеграция должна иметь понятную схему:</p>
          <ol>
            <li>Какое событие запускает обмен.</li>
            <li>Какие данные передаются.</li>
            <li>Куда возвращается результат.</li>
            <li>Что делать при ошибке.</li>
            <li>Кто получает задачу.</li>
            <li>Как руководитель видит статус.</li>
          </ol>
          <p>
            <strong>Внутренняя ссылка:</strong> страница «Интеграции amoCRM с
            внешними сервисами»
            <br />
            <strong>Анкор:</strong> интеграции amoCRM с внешними сервисами
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={240}
      >
        <ArticleBlockWrapper>
          <h2>Что не стоит автоматизировать сразу</h2>
          <p>Не всякая автоматизация полезна.</p>
          <p>Плохие идеи:</p>
          <ul>
            <li>автоматизировать процесс, который еще не описан;</li>
            <li>создавать много задач без приоритета;</li>
            <li>отправлять уведомления обо всем подряд;</li>
            <li>делать сложные сценарии без тестирования;</li>
            <li>строить интеграции без понимания полей и статусов;</li>
            <li>добавлять роботов, которые менеджеры не понимают;</li>
            <li>автоматизировать хаос вместо исправления процесса.</li>
          </ul>
          <p>
            Сначала нужно навести порядок в базовой логике: заявки, этапы,
            задачи, ответственные, источники, отчеты. Потом добавлять сложные
            сценарии.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={260}
      >
        <ArticleBlockWrapper>
          <h2>Как понять, что автоматизация нужна уже сейчас</h2>
          <p>
            Автоматизация нужна, если в отделе продаж есть повторяющиеся ручные
            действия, которые влияют на скорость, точность или контроль.
          </p>
          <p>Проверьте:</p>
          <ul>
            <li>заявки создаются вручную;</li>
            <li>ответственные назначаются вручную;</li>
            <li>задачи менеджеры ставят сами;</li>
            <li>недозвоны не контролируются;</li>
            <li>руководитель ищет просрочки вручную;</li>
            <li>документы собираются копированием данных;</li>
            <li>счета выставляются отдельно от CRM;</li>
            <li>менеджеры ищут дубли глазами;</li>
            <li>
              статусы доставок или оплат проверяются в других кабинетах;
            </li>
            <li>отчеты собираются в таблицах;</li>
            <li>сотрудники постоянно переключаются между сервисами.</li>
          </ul>
          <p>
            Если таких пунктов много, отдел продаж тратит время не на продажи,
            а на операционку.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={280}
      >
        <ArticleBlockWrapper>
          <h2>Как внедрять автоматизацию по шагам</h2>
          <h3>Шаг 1. Найти ручные действия</h3>
          <p>
            Составляем список действий, которые менеджеры делают каждый день:
          </p>
          <ul>
            <li>что создают;</li>
            <li>что копируют;</li>
            <li>что проверяют;</li>
            <li>что переносят;</li>
            <li>о чем напоминают себе вручную.</li>
          </ul>

          <h3>Шаг 2. Оценить риск</h3>
          <p>
            Смотрим, что будет, если действие забыли или сделали с ошибкой:
          </p>
          <ul>
            <li>потеряется заявка;</li>
            <li>клиенту не перезвонят;</li>
            <li>счет уйдет неверно;</li>
            <li>доставка не создастся;</li>
            <li>руководитель не увидит просрочку;</li>
            <li>отчет будет неверным.</li>
          </ul>
          <p>Сначала автоматизируются действия с высоким риском.</p>

          <h3>Шаг 3. Описать правила</h3>
          <p>Перед настройкой нужно четко прописать:</p>
          <ul>
            <li>когда срабатывает автоматизация;</li>
            <li>какие данные используются;</li>
            <li>кто ответственный;</li>
            <li>какая задача создается;</li>
            <li>что делать при ошибке;</li>
            <li>как проверить результат.</li>
          </ul>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={300}
      >
        <ArticleBlockWrapper>
          <h3>Шаг 4. Настроить и протестировать</h3>
          <p>
            Автоматизацию нельзя включать без проверки на реальных сценариях:
          </p>
          <ul>
            <li>новая заявка;</li>
            <li>недозвон;</li>
            <li>повторный клиент;</li>
            <li>дубль;</li>
            <li>просрочка;</li>
            <li>ошибка интеграции;</li>
            <li>неверно заполненное поле.</li>
          </ul>

          <h3>Шаг 5. Обучить сотрудников</h3>
          <p>
            Менеджеры должны понимать, что делает система и что остается на их
            стороне.
          </p>
          <p>Если автоматизация непонятна, ее будут обходить.</p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={320}
      >
        <ArticleBlockWrapper>
          <h2>Пример правильной автоматизации</h2>
          <p>
            Компания получает заявки с сайта, звонков и WhatsApp. До
            автоматизации менеджеры вручную создавали сделки, сами ставили
            задачи и проверяли, кому нужно перезвонить.
          </p>
          <p>После настройки:</p>
          <ol>
            <li>Заявки из всех каналов попадают в amoCRM.</li>
            <li>Сделки распределяются между менеджерами.</li>
            <li>На первый контакт создается задача.</li>
            <li>Недозвон запускает повторную задачу.</li>
            <li>Пропущенный звонок попадает в контроль.</li>
            <li>Дубли проверяются по телефону.</li>
            <li>Руководитель получает сигнал по просрочкам.</li>
            <li>Отчеты показывают источники и скорость обработки.</li>
            <li>Документы формируются по шаблону.</li>
            <li>Ручной контроль стал меньше.</li>
          </ol>
          <p>
            Это не «магия CRM». Это правильная связка процесса, задач и
            автоматизации.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={340}
      >
        <ArticleBlockWrapper>
          <h2>Когда лучше начать с аудита</h2>
          <p>
            Если amoCRM уже настроена, но непонятно, что автоматизировать,
            лучше сначала провести аудит.
          </p>
          <p>Аудит покажет:</p>
          <ul>
            <li>где теряются заявки;</li>
            <li>какие задачи не создаются;</li>
            <li>где менеджеры работают вручную;</li>
            <li>какие отчеты не работают;</li>
            <li>где появляются дубли;</li>
            <li>какие виджеты нужны;</li>
            <li>какие интеграции стоит подключить;</li>
            <li>что можно не трогать.</li>
          </ul>
          <p>
            <strong>Внутренняя ссылка:</strong> страница «CRM-аудит amoCRM»
            <br />
            <strong>Анкор:</strong> аудит amoCRM перед автоматизацией
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        shownClassName="opacity-100 translate-y-0"
        delayMs={360}
      >
        <ArticleBlockWrapper>
          <h2>CTA</h2>
          <p>Оставьте заявку на автоматизацию отдела продаж в amoCRM.</p>
          <p>
            Разберем ваш процесс, найдем ручные действия, которые мешают
            продажам, и предложим план автоматизации: заявки, задачи, недозвоны,
            распределение, уведомления, документы, счета, интеграции и контроль
            менеджеров.
          </p>
        </ArticleBlockWrapper>
      </Reveal>
    </div>
  );
}
