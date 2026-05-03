import Link from "next/link";
import ArticleBlockWrapper from "@/views/articles/shared/ArticleContentSection/ui/ArticleBlockWrapper";
import Reveal from "@/shared/ui/Reveal/Reveal";

const REVEAL_CLASS =
  "opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none";

const REVEAL_SHOWN = "opacity-100 translate-y-0";

const ARTICLE_CONTENT_CLASS =
  "[&_h2]:text-[#3760E7] [&_h3]:text-[#3760E7] [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:marker:text-[#3760E7] [&_ul]:marker:text-[1.25em] [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:marker:text-[#3760E7] [&_ol]:marker:text-[1.05em]";

export default function IntegrationTgContentSection() {
  return (
    <div>
      <Reveal
        className={REVEAL_CLASS}
        shownClassName={REVEAL_SHOWN}
        delayMs={0}
        amount={0.05}
      >
        <ArticleBlockWrapper>
          <div className={ARTICLE_CONTENT_CLASS}>
            <p>
              Интеграция amoCRM с Telegram нужна, если Telegram используется в продажах,
              поддержке или внутреннем контроле: клиенты пишут в чат, заявки приходят через
              бота, менеджеры получают уведомления, руководитель отслеживает просрочки, а часть
              общения остаётся вне CRM.
            </p>
            <p>Важно разделять два сценария.</p>
            <p>
              Первый — <strong>Telegram как канал общения с клиентами</strong>: бот, чат, заявки,
              сообщения, обращения.
            </p>
            <p>
              Второй — <strong>Telegram как канал внутренних уведомлений</strong>: новая заявка,
              просроченная задача, сделка без движения, пропущенный звонок, ошибка интеграции.
            </p>
            <p>
              Оба сценария полезны, но настраиваются по-разному. Если смешать всё в один поток,
              Telegram быстро превращается в шум, а не в инструмент контроля.
            </p>
          </div>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className={REVEAL_CLASS}
        shownClassName={REVEAL_SHOWN}
        delayMs={30}
        amount={0.05}
      >
        <ArticleBlockWrapper>
          <div className={ARTICLE_CONTENT_CLASS}>
            <h2>Какие задачи может закрывать связка amoCRM и Telegram</h2>

            <div className="min-w-[723px] overflow-hidden rounded-[16px] border border-[#3760E7]/45 bg-white my-4">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="border-b border-r border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                      Сценарий
                    </td>
                    <td className="border-b border-r border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                      Что происходит
                    </td>
                    <td className="border-b border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                      Зачем это бизнесу
                    </td>
                  </tr>

                  {[
                    ["Заявка из Telegram-бота", "Клиент пишет боту, данные попадают в amoCRM", "Обращения не теряются в чате"],
                    ["Сообщение от клиента", "Переписка фиксируется в карточке клиента", "История общения остаётся в CRM"],
                    ["Уведомление менеджеру", "Менеджер получает сигнал о новой сделке или задаче", "Быстрее реакция"],
                    ["Уведомление руководителю", "Руководитель видит просрочку или нарушение", "Контроль без ручной проверки"],
                    ["Ошибка интеграции", "Ответственному приходит сигнал", "Проблема не висит незамеченной"],
                    ["Заявка из группы или канала", "Обращение передаётся в CRM по правилам", "Поток из Telegram становится управляемым"],
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="border-b border-r border-[#3760E7]/20 p-3">
                        {row[0]}
                      </td>
                      <td className="border-b border-r border-[#3760E7]/20 p-3">
                        {row[1]}
                      </td>
                      <td className="border-b border-[#3760E7]/20 p-3">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Перед настройкой нужно выбрать, какой сценарий нужен. Просто «подключить Telegram
              к amoCRM» — слишком общая задача.
            </p>
          </div>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className={REVEAL_CLASS}
        shownClassName={REVEAL_SHOWN}
        delayMs={60}
        amount={0.05}
      >
        <ArticleBlockWrapper>
          <div className={ARTICLE_CONTENT_CLASS}>
            <h2>Сценарий 1. Telegram-бот передаёт заявки в amoCRM</h2>
            <p>Это полезно, если клиент может оставить заявку через бота.</p>
            <p>Например:</p>

            <ul>
              <li>запросить консультацию;</li>
              <li>оставить телефон;</li>
              <li>выбрать услугу;</li>
              <li>записаться на звонок;</li>
              <li>отправить вопрос;</li>
              <li>выбрать город или направление;</li>
              <li>оставить заявку на аудит;</li>
              <li>запросить стоимость;</li>
              <li>отправить данные для расчёта.</li>
            </ul>

            <p>
              В этом случае бот должен не просто прислать сообщение администратору, а создать
              сделку в amoCRM.
            </p>

            <h3>Что передавать из Telegram-бота</h3>

            <div className="min-w-[723px] overflow-hidden rounded-[16px] border border-[#3760E7]/45 bg-white my-4">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="border-b border-r border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                      Данные из Telegram
                    </td>
                    <td className="border-b border-r border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                      Куда в amoCRM
                    </td>
                    <td className="border-b border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                      Зачем
                    </td>
                  </tr>

                  {[
                    ["Имя пользователя", "Контакт", "Идентификация клиента"],
                    ["Телефон", "Контакт", "Связь и проверка дублей"],
                    ["Telegram username", "Поле контакта", "Быстрый переход к клиенту"],
                    ["Выбранная услуга", "Поле сделки", "Понимание интереса"],
                    ["Текст сообщения", "Примечание", "Контекст обращения"],
                    ["Источник", "Поле источника", "Аналитика по Telegram"],
                    ["Дата обращения", "Событие или поле", "Контроль скорости ответа"],
                    ["Ответы бота", "Поля сделки или комментарий", "Квалификация заявки"],
                    ["Ответственный", "Пользователь amoCRM", "Закрепление за менеджером"],
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="border-b border-r border-[#3760E7]/20 p-3">
                        {row[0]}
                      </td>
                      <td className="border-b border-r border-[#3760E7]/20 p-3">
                        {row[1]}
                      </td>
                      <td className="border-b border-[#3760E7]/20 p-3">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Если бот собирает только текст без телефона, нужно заранее определить, как
              менеджер будет продолжать контакт. Для продаж телефон обычно критичен.
            </p>
          </div>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className={REVEAL_CLASS}
        shownClassName={REVEAL_SHOWN}
        delayMs={90}
        amount={0.05}
      >
        <ArticleBlockWrapper>
          <div className={ARTICLE_CONTENT_CLASS}>
            <h2>Сценарий 2. Telegram как канал уведомлений</h2>
            <p>Это самый частый сценарий для amoCRM.</p>
            <p>Telegram-уведомления можно отправлять:</p>

            <ul>
              <li>менеджеру;</li>
              <li>руководителю;</li>
              <li>администратору CRM;</li>
              <li>в общий чат отдела продаж;</li>
              <li>в отдельный чат контроля просрочек;</li>
              <li>в чат технической поддержки;</li>
              <li>в чат по интеграциям.</li>
            </ul>

            <p>
              Но правило простое: <strong>в Telegram должны уходить только события, где нужно действие</strong>.
            </p>

            <p>Плохие уведомления:</p>

            <ul>
              <li>каждое изменение поля;</li>
              <li>каждый комментарий;</li>
              <li>каждый переход этапа;</li>
              <li>все задачи подряд;</li>
              <li>все системные события.</li>
            </ul>

            <p>Полезные уведомления:</p>

            <ul>
              <li>новая заявка назначена менеджеру;</li>
              <li>задача просрочена;</li>
              <li>сделка без движения;</li>
              <li>у сделки нет задачи;</li>
              <li>клиент написал сообщение;</li>
              <li>пропущен звонок;</li>
              <li>ошибка интеграции;</li>
              <li>заявка из важного источника;</li>
              <li>крупная сделка зависла на этапе;</li>
              <li>руководителю нужно вмешаться.</li>
            </ul>

            <p>
              Подробнее о том, как выстроить систему оповещений, читайте в статье про{" "}
              <Link
                href="/articles/amocrm-notice-in-tg"
                className="text-[#3760E7] underline underline-offset-2 hover:opacity-75 transition-opacity"
              >
                уведомления из amoCRM в Telegram
              </Link>
              .
            </p>
          </div>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className={REVEAL_CLASS}
        shownClassName={REVEAL_SHOWN}
        delayMs={120}
        amount={0.05}
      >
        <ArticleBlockWrapper>
          <div className={ARTICLE_CONTENT_CLASS}>
            <h2>Сценарий 3. Telegram для контроля руководителя</h2>
            <p>
              Руководителю не нужно получать все события из amoCRM. Ему нужны только
              отклонения от нормального процесса.
            </p>
            <p>Например:</p>

            <div className="min-w-[723px] overflow-hidden rounded-[16px] border border-[#3760E7]/45 bg-white my-4">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="border-b border-r border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                      Событие
                    </td>
                    <td className="border-b border-r border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                      Кому отправить
                    </td>
                    <td className="border-b border-[#3760E7]/30 bg-[#EEF3FF] p-3">
                      Что должен сделать получатель
                    </td>
                  </tr>

                  {[
                    ["Новая заявка не обработана за 15 минут", "Руководителю", "Проверить менеджера"],
                    ["Сделка без задачи", "Руководителю или РОПу", "Вернуть сделку в процесс"],
                    ["Просрочен первый контакт", "Руководителю", "Проконтролировать реакцию"],
                    ["Сделка стоит на этапе дольше нормы", "РОПу", "Выяснить причину зависания"],
                    ["Ошибка передачи данных в сервис", "Ответственному за CRM", "Исправить данные или интеграцию"],
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="border-b border-r border-[#3760E7]/20 p-3">
                        {row[0]}
                      </td>
                      <td className="border-b border-r border-[#3760E7]/20 p-3">
                        {row[1]}
                      </td>
                      <td className="border-b border-[#3760E7]/20 p-3">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>Так Telegram становится не лентой событий, а системой быстрых сигналов.</p>
          </div>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className={REVEAL_CLASS}
        shownClassName={REVEAL_SHOWN}
        delayMs={150}
        amount={0.05}
      >
        <ArticleBlockWrapper>
          <div className={ARTICLE_CONTENT_CLASS}>
            <h2>Сценарий 4. Telegram как канал переписки с клиентом</h2>
            <p>
              Если клиенты реально общаются с менеджерами в Telegram, переписку нужно
              привязывать к карточке клиента.
            </p>
            <p>Иначе возникает типичная проблема:</p>

            <ul>
              <li>клиент написал менеджеру лично;</li>
              <li>договорённость осталась в чате;</li>
              <li>в amoCRM ничего не зафиксировано;</li>
              <li>руководитель не видит коммуникацию;</li>
              <li>при передаче клиента история теряется;</li>
              <li>при увольнении менеджера компания теряет часть данных.</li>
            </ul>

            <p>Для нормальной работы нужно определить:</p>

            <ul>
              <li>какие Telegram-аккаунты или боты используются;</li>
              <li>как сообщения попадают в CRM;</li>
              <li>как искать клиента по телефону или username;</li>
              <li>когда создавать новую сделку;</li>
              <li>когда привязывать сообщение к текущей сделке;</li>
              <li>какие задачи создавать после диалога;</li>
              <li>как контролировать ответ менеджера.</li>
            </ul>

            <p>
              Если Telegram используется только как личный мессенджер менеджера, CRM не
              контролирует процесс.
            </p>
          </div>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className={REVEAL_CLASS}
        shownClassName={REVEAL_SHOWN}
        delayMs={180}
        amount={0.05}
      >
        <ArticleBlockWrapper>
          <div className={ARTICLE_CONTENT_CLASS}>
            <h2>Что нужно настроить в amoCRM</h2>
            <p>Перед интеграцией нужно подготовить CRM-логику.</p>

            <h3>Поля</h3>
            <p>Могут понадобиться:</p>

            <ul>
              <li>Telegram username;</li>
              <li>источник заявки;</li>
              <li>тип обращения;</li>
              <li>услуга или продукт;</li>
              <li>текст первичного запроса;</li>
              <li>ссылка на чат;</li>
              <li>ответственный;</li>
              <li>статус обработки;</li>
              <li>дата первого ответа;</li>
              <li>причина отказа;</li>
              <li>канал коммуникации.</li>
            </ul>

            <h3>Этапы</h3>
            <p>Если Telegram — отдельный значимый источник, можно завести этапы:</p>

            <ul>
              <li>новая заявка из Telegram;</li>
              <li>первый контакт;</li>
              <li>уточнение запроса;</li>
              <li>предложение отправлено;</li>
              <li>ожидаем ответ;</li>
              <li>успешно;</li>
              <li>отказ.</li>
            </ul>

            <p>
              Если Telegram просто один из каналов, достаточно фиксировать его как источник
              в общей воронке.
            </p>

            <h3>Задачи</h3>
            <p>Нужны задачи:</p>

            <ul>
              <li>ответить на заявку;</li>
              <li>перезвонить клиенту;</li>
              <li>уточнить потребность;</li>
              <li>отправить предложение;</li>
              <li>вернуться к клиенту;</li>
              <li>проверить зависшую переписку;</li>
              <li>обработать заявку из бота;</li>
              <li>исправить ошибку передачи.</li>
            </ul>

            <h3>Уведомления</h3>
            <p>Уведомления стоит разделить:</p>

            <ul>
              <li>менеджеру — новые заявки и сообщения;</li>
              <li>руководителю — просрочки и нарушения;</li>
              <li>администратору — ошибки интеграции;</li>
              <li>общему чату — только критичные события.</li>
            </ul>
          </div>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className={REVEAL_CLASS}
        shownClassName={REVEAL_SHOWN}
        delayMs={210}
        amount={0.05}
      >
        <ArticleBlockWrapper>
          <div className={ARTICLE_CONTENT_CLASS}>
            <h2>Как не превратить Telegram в мусорный канал</h2>
            <p>Главная ошибка — отправлять слишком много.</p>
            <p>
              Если в чат падает каждое движение сделки, менеджеры перестают реагировать.
              Руководитель тоже перестаёт читать поток.
            </p>
            <p>Нужно заранее прописать правила:</p>

            <ol>
              <li>Какие события реально требуют реакции.</li>
              <li>Кто должен получить уведомление.</li>
              <li>Через сколько минут считать событие просроченным.</li>
              <li>Что делать после уведомления.</li>
              <li>Как понять, что задача выполнена.</li>
              <li>Какие события не отправлять вообще.</li>
            </ol>

            <p>Telegram должен помогать работать быстрее, а не отвлекать от продаж.</p>
          </div>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className={REVEAL_CLASS}
        shownClassName={REVEAL_SHOWN}
        delayMs={240}
        amount={0.05}
      >
        <ArticleBlockWrapper>
          <div className={ARTICLE_CONTENT_CLASS}>
            <h2>Ошибки именно в интеграции amoCRM и Telegram</h2>

            <h3>Telegram подключили только для уведомлений, но не связали с задачами</h3>
            <p>
              Менеджер получил сообщение, но в amoCRM нет задачи. Через час уведомление
              потерялось в чате, а клиент остался без действия.
            </p>
            <p>
              Правильно: важное уведомление должно быть связано с задачей или событием
              в сделке.
            </p>

            <h3>Бот собирает заявки, но не передаёт источник</h3>
            <p>
              В amoCRM появляется сделка, но непонятно, что она пришла из Telegram.
              Аналитика ломается.
            </p>

            <h3>Нет проверки дублей</h3>
            <p>
              Клиент мог уже быть в CRM. Если каждый запрос из Telegram создаёт новую
              карточку, база загрязняется. Подробнее о проблеме —{" "}
              <Link
                href="/articles/amocrm-ruined-sales"
                className="text-[#3760E7] underline underline-offset-2 hover:opacity-75 transition-opacity"
              >
                как убрать дубли в amoCRM
              </Link>
              .
            </p>

            <h3>Руководителю отправляют слишком много</h3>
            <p>
              Руководителю нужны нарушения и отклонения, а не вся лента CRM.
            </p>

            <h3>Переписка остаётся в личных аккаунтах</h3>
            <p>
              Если общение идёт в личном Telegram менеджера и не фиксируется в amoCRM,
              бизнес теряет историю клиента.
            </p>
          </div>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className={REVEAL_CLASS}
        shownClassName={REVEAL_SHOWN}
        delayMs={270}
        amount={0.05}
      >
        <ArticleBlockWrapper>
          <div className={ARTICLE_CONTENT_CLASS}>
            <h2>Пример процесса: заявка из Telegram-бота</h2>
            <p>Компания использует Telegram-бота для первичных обращений.</p>
            <p>Настроенный процесс:</p>

            <ol>
              <li>Клиент открывает бота и выбирает «Получить консультацию».</li>
              <li>Бот просит имя, телефон и тему обращения.</li>
              <li>Данные передаются в amoCRM.</li>
              <li>Создаётся сделка в воронке «Входящие заявки».</li>
              <li>Источник фиксируется как Telegram.</li>
              <li>В карточке сохраняются ответы клиента.</li>
              <li>Ответственный назначается по правилу распределения.</li>
              <li>Менеджеру ставится задача на первый контакт.</li>
              <li>Если задача просрочена — руководитель получает уведомление.</li>
              <li>После разговора менеджер переводит сделку на следующий этап.</li>
            </ol>

            <p>Так бот не просто собирает сообщения, а запускает процесс продаж.</p>
          </div>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className={REVEAL_CLASS}
        shownClassName={REVEAL_SHOWN}
        delayMs={300}
        amount={0.05}
      >
        <ArticleBlockWrapper>
          <div className={ARTICLE_CONTENT_CLASS}>
            <h2>Пример процесса: контроль просрочек через Telegram</h2>
            <p>Компания хочет, чтобы руководитель быстро видел нарушения.</p>
            <p>Настроенный процесс:</p>

            <ol>
              <li>Новая заявка пришла в amoCRM.</li>
              <li>Менеджеру поставлена задача на первый контакт.</li>
              <li>Через 15 минут задача не выполнена.</li>
              <li>Руководитель получает Telegram-уведомление.</li>
              <li>В сообщении указаны сделка, ответственный, источник и время просрочки.</li>
              <li>Руководитель переходит в amoCRM и проверяет ситуацию.</li>
            </ol>

            <p>Так Telegram работает как быстрый сигнал, а не как замена CRM.</p>
          </div>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal
        className={REVEAL_CLASS}
        shownClassName={REVEAL_SHOWN}
        delayMs={330}
        amount={0.05}
      >
        <ArticleBlockWrapper>
          <div className={ARTICLE_CONTENT_CLASS}>
            <h2>Когда нужна простая настройка, а когда интеграция сложнее</h2>
            <p>Простая настройка подходит, если нужно:</p>

            <ul>
              <li>отправлять уведомления по событиям amoCRM;</li>
              <li>получать заявки из простого Telegram-бота;</li>
              <li>фиксировать источник;</li>
              <li>ставить задачу менеджеру;</li>
              <li>отправлять сообщения в рабочий чат.</li>
            </ul>

            <p>Более сложная интеграция нужна, если:</p>

            <ul>
              <li>несколько ботов;</li>
              <li>разные сценарии заявок;</li>
              <li>нужно вести переписку внутри CRM;</li>
              <li>есть распределение по отделам;</li>
              <li>нужны отчёты по Telegram как источнику;</li>
              <li>нужно учитывать повторных клиентов;</li>
              <li>нужна связь с телефонией, сайтом или другими каналами;</li>
              <li>есть технические ошибки и статусы обработки.</li>
            </ul>

            <h2>Что подготовить перед настройкой</h2>
            <p>Для оценки интеграции нужно понять:</p>

            <ul>
              <li>Telegram нужен для заявок, переписки или уведомлений;</li>
              <li>используется бот, группа, канал или личные чаты;</li>
              <li>какие данные нужно передавать в amoCRM;</li>
              <li>нужно ли создавать сделку;</li>
              <li>кто должен быть ответственным;</li>
              <li>какие задачи должны создаваться;</li>
              <li>какие уведомления нужны менеджерам;</li>
              <li>какие уведомления нужны руководителю;</li>
              <li>какие события не нужно отправлять;</li>
              <li>как проверять дубли;</li>
              <li>какие отчёты нужны по Telegram.</li>
            </ul>

            <p>
              Оставьте заявку на интеграцию amoCRM с Telegram. Разберём, как вы используете
              Telegram: заявки, бот, переписки, уведомления или контроль руководителя. После
              этого предложим схему настройки: какие данные передавать, какие задачи создавать,
              кому отправлять уведомления и как не превратить Telegram в поток лишнего шума.
            </p>
          </div>
        </ArticleBlockWrapper>
      </Reveal>
    </div>
  );
}