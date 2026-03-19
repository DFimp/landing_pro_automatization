import ArticleBlockWrapper from "@/views/articles/shared/ArticleContentSection/ui/ArticleBlockWrapper";
import ArticleSubtitle from "@/views/articles/shared/ArticleContentSection/ui/ArticleSubtitle";
import ArticleList from "@/views/articles/shared/ArticleContentSection/ui/ArticleList";
import ArticleAccentBlock from "@/views/articles/shared/ArticleContentSection/ui/ArticleAccentBlock";

import Reveal from "@/shared/ui/Reveal/Reveal";

function ArticleImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-6 flex justify-center">
      <div className="w-full max-w-[900px] border border-[#3B5BFF] rounded-[12px] bg-white p-2 box-border">
        <img className="block w-full h-auto rounded-[8px]" src={src} alt={alt} loading="lazy" />
      </div>
    </div>
  );
}

export default function SellMoreContentSection() {
  return (
    <div>
      <Reveal className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none" shownClassName="opacity-100 translate-y-0" delayMs={0}>
        <ArticleBlockWrapper>
          <p>
            <strong>amoCRM</strong> — одна из самых популярных CRM-систем для отделов продаж,
            ориентированная не на «учёт ради учёта», а на результат: заявки, сделки и выручку.
            За годы работы интегратором мы видим одну и ту же картину: компании, которые
            правильно внедряют amoCRM, получают прозрачный контроль продаж, рост конверсии и
            управляемую лидогенерацию. Те же, кто настраивает систему «на глаз», часто
            разочаровываются и говорят, что «CRM не работает».
          </p>

          <p>
            В этой статье разберёмся, чем amoCRM действительно хороша для бизнеса, какие у неё
            ключевые преимущества и почему без грамотной настройки потенциал системы
            используется максимум на 50–60%.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none" shownClassName="opacity-100 translate-y-0" delayMs={80} variant="dropZ">
        <ArticleImage
          src="/articles/AmoCRMHelpsSellMore/analytics-growth.jpeg"
          alt="CRM analytics growth chart"
        />
      </Reveal>

      <Reveal className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none" shownClassName="opacity-100 translate-y-0" delayMs={120}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Что такое amoCRM и для какого бизнеса она подходит" />

          <p>
            amoCRM — это CRM-система, созданная в первую очередь для продаж и работы с лидами.
            В центре логики — сделка, клиент и все касания с ним: звонки, чаты, письма, заявки
            с сайта и рекламы.
          </p>

          <h3>amoCRM отлично подходит:</h3>
          <ArticleList
            items={[
              "малому и среднему бизнесу",
              "отделам продаж от 2–3 менеджеров",
              "компаниям с активной лидогенерацией",
              "онлайн-сервисам, агентствам, e-commerce",
              "B2B и B2C с длинным или средним циклом сделки",
            ]}
          />

          <h3>Где amoCRM особенно сильна:</h3>
          <ArticleList
            items={[
              "входящие заявки из разных каналов",
              "контроль работы менеджеров",
              "автоматизация рутинных действий",
              "аналитика по воронкам и источникам лидов",
            ]}
          />
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none" shownClassName="opacity-100 translate-y-0" delayMs={80} variant="dropZ">
        <ArticleImage
          src="/articles/AmoCRMHelpsSellMore/business-segments.jpeg"
          alt="Business segments labels"
        />
      </Reveal>

      <Reveal className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none" shownClassName="opacity-100 translate-y-0" delayMs={120}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Ключевые преимущества amoCRM по сравнению с другими CRM" />

          <p>
            Если сравнивать amoCRM с «классическими» CRM-системами, её главное отличие —
            ориентация на продажи, а не на склад данных.
          </p>

          <ArticleAccentBlock>
            <p>
              <strong>Интуитивная воронка продаж</strong> — менеджер всегда видит, на каком
              этапе находится сделка и что делать дальше.
            </p>
            <p>
              <strong>Омниканальность</strong> — звонки, WhatsApp, Telegram, email, заявки с
              сайта — всё в одной карточке клиента.
            </p>
            <p>
              <strong>Гибкая автоматизация</strong> — роботы, триггеры и сценарии позволяют
              системе делать часть работы за менеджеров.
            </p>
            <p>
              <strong>Масштабируемость</strong> — подходит как для старта, так и для роста
              команды и процессов.
            </p>
            <p>
              <strong>Экосистема виджетов</strong> — тысячи готовых решений и возможность
              разработки кастомных виджетов под бизнес.
            </p>
          </ArticleAccentBlock>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none" shownClassName="opacity-100 translate-y-0" delayMs={120}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Почему amoCRM идеально подходит для продаж и лидогенерации" />

          <p>
            amoCRM создавалась с пониманием реальной работы отдела продаж. Здесь нет лишних
            сущностей — только то, что влияет на конверсию.
          </p>

          <h3>Что это даёт бизнесу:</h3>
          <ArticleList
            items={[
              "ни одна заявка не теряется",
              "менеджеры работают по понятному сценарию",
              "руководитель видит реальные цифры, а не отчёты «на словах»",
              "лиды автоматически распределяются и обрабатываются",
            ]}
          />

          <h3>amoCRM особенно эффективна, когда лиды идут из:</h3>
          <ArticleList
            items={[
              "рекламы (Google, Яндекс, соцсети)",
              "сайтов и лендингов",
              "мессенджеров",
              "маркетплейсов и агрегаторов",
            ]}
          />
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none" shownClassName="opacity-100 translate-y-0" delayMs={80} variant="dropZ">
        <ArticleImage
          src="/articles/AmoCRMHelpsSellMore/omnichannel-leads.jpeg"
          alt="Omnichannel leads on mobile"
        />
      </Reveal>

      <Reveal className="opacity-0 translate-y-[14px] transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none" shownClassName="opacity-100 translate-y-0" delayMs={120}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Автоматизация в amoCRM: воронки, роботы, триггеры" />

          <p>
            Одна из сильнейших сторон amoCRM — автоматизация без программирования (и с
            программированием, если нужно больше).
          </p>

          <h3>Что можно автоматизировать:</h3>
          <ArticleList
            items={[
              "создание сделок при поступлении заявки",
              "распределение лидов между менеджерами",
              "постановку задач",
              "отправку сообщений клиентам",
              "смену этапов сделки",
              "контроль сроков и SLA",
            ]}
          />

          <ArticleAccentBlock>
            <p>
              <strong>Пример:</strong> Клиент оставил заявку → сделка создана → менеджеру
              поставлена задача → клиенту ушло сообщение → если нет ответа 15 минут —
              уведомление руководителю. И всё это — без участия человека.
            </p>
          </ArticleAccentBlock>
        </ArticleBlockWrapper>
      </Reveal>
    </div>
  );
}


