import type { Metadata } from "next";
import { ARTICLES_PAGE_METADATA } from "@/shared/constants/metadata";
import { ArticlesList } from "@/widgets/articles/ui/ArticlesList";
import { CollectionPageSchemaTag } from "@/shared/lib/seo";
import { ARTICLES_LIST, SITE_URL } from "@/shared/constants";

export const metadata: Metadata = ARTICLES_PAGE_METADATA;

export default ArticlesPageContent;

function ArticlesPageContent() {
  return (
    <>
      <CollectionPageSchemaTag
        data={{
          name: "Статьи про amoCRM",
          description: "Полезные статьи про amoCRM: настройка, автоматизация, интеграции, лайфхаки. Практические кейсы и инструкции.",
          url: `${SITE_URL}/articles`,
        }}
        items={ARTICLES_LIST.map((article) => ({
          name: article.title,
          url: `${SITE_URL}${article.link}`,
          description: article.description,
        }))}
      />
      <main
        id="Articles"
        className="overflow-x-hidden mx-auto w-full max-w-[1200px] px-4"
      >
        <div className="my-10 sm:my-20">
          <ArticlesList />
        </div>
      </main>
    </>
  );
}
