import { ArticlesList } from "@/views/ArticlesPage/ui/ArticlesList";
import { CollectionPageSchemaTag } from "@/shared/lib/seo";
import { ARTICLES_LIST, SITE_URL } from "@/shared/constants";

export default ArticlesPageContent;

function ArticlesPageContent() {
  return (
    <>
      <CollectionPageSchemaTag
        data={{
          name: "Статьи про amoCRM",
          description:
            "Полезные статьи про amoCRM: настройка, автоматизация, интеграции, лайфхаки. Практические кейсы и инструкции.",
          url: `${SITE_URL}/articles`,
        }}
        items={ARTICLES_LIST.map((article) => ({
          name: article.title,
          url: `${SITE_URL}${article.link}`,
          description: article.description,
        }))}
      />
      <main id="Articles" className="mx-auto w-full max-w-[1200px] px-4">
        <h1 className="text-2xl sm:text-[32px] font-semibold mt-10 sm:mt-20 mb-6 sm:mb-10">
          Статьи про amoCRM, автоматизацию продаж и виджеты
        </h1>
        <div className="mb-10 sm:mb-20">
          <ArticlesList />
        </div>
      </main>
    </>
  );
}
