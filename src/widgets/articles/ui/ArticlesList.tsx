import { ArticlesListItem } from "./ArticlesListItem";

export function ArticlesList() {
    const articles = [
        {
            title: "Как работать с дублями сделок в amoCRM — 3 кейса на практике",
            text: "Разбираем на реальных кейсах, как правильно объединять дубли сделок в amoCRM. Узнайте, как не потерять клиентов, сэкономить время менеджеров и навести порядок в базе CRM.",
            link: "/articles/duplicate-leads",
            variant: 1,
        },
    ];

    return (
        <div className="grid sm:grid-cols-3 grid-cols-2 grid-cols-1 gap-[40px]">
            {articles.map((article, index) => (
                <ArticlesListItem
                    key={index}
                    title={article.title}
                    text={article.text}
                    link={article.link}
                    variant={article.variant}
                />
            ))}
        </div>
    );
}
