import ArticleSubtitle from "../ui/ArticleSubtitle";
import ArticleBlockWrapper from "../ui/ArticleBlockWrapper";
import ArticleList from "../ui/ArticleList";

export default function ArticleConclusion() {
    const optimalWorkflow = [
        "объединять контакты для целостной картины;",
        "сохранять сделки раздельными для учёта всех интересов клиента;",
        "правильно настраивать блоки объединения, исключая этапы «Успешно реализовано» и «Закрыто и нереализовано»."
    ]
    return (
        <ArticleBlockWrapper>
            <ArticleSubtitle subtitle="Заключение"></ArticleSubtitle>
            <p>
                Правильная работа с дублями сделок — это не мелочь, а ключевой фактор, который напрямую<br/>
                влияет на продажи и прибыль компании. Если объединять всё подряд — можно потерять повторные<br/>
                заявки и клиентов. Если не объединять вовсе — CRM быстро превратится в хаос.
            </p>
            <p>
                Оптимальный подход — это баланс:
            </p>
            <ArticleList items={optimalWorkflow}></ArticleList>
            <p>
                Такой подход позволяет компании не терять ни одного клиента, поддерживать чистоту базы и<br/>
                зарабатывать больше.
            </p>
        </ArticleBlockWrapper>
    )
}