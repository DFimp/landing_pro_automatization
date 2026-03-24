import ArticleBlockWrapper from "../ui/ArticleBlockWrapper";
import ArticleList from "../ui/ArticleList";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

export default function ArticleIntroducion() {
    const duplicatesList = [
        "потеря клиента",
        "искажение аналитики",
        "потеря времени менеджеров",
        "ошибки в клиентской истории",
        "конфликты внутри команды"
    ]
  return (
    <ScrollReveal as="div" variant="typeFast">
      <ArticleBlockWrapper>
        <p>
            В amoCRM часто возникают дубли — одна и та же заявка может<br/>
            попасть из разных каналов. Это сбивает менеджеров, портит аналитику и<br/>
            мешает продажам. Поэтому работа с дублями — ключ к чистой базе и<br/>
            эффективной воронке.</p>
        <p><span className="font-semibold">Дубли</span> — причина множества сложностей, среди которых:</p>
        <ArticleList items={duplicatesList}></ArticleList>
        <p>
            В этой статье мы расскажем на <span className="sm:font-semibold">реальных кейсах</span>, как с помощью нашего виджета<br/>
            объединения дублей быстро навести порядок в базе и <span className="sm:font-semibold">забыть об этих проблемах.</span>
        </p>
      </ArticleBlockWrapper>
    </ScrollReveal>
  );
}
