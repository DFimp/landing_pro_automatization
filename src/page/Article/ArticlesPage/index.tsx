import { ArticlesList } from "@/widgets/articles/ui/ArticlesList";

export default function ArticlesPage() {
  return (
    <main id="Articles" className="overflow-hidden container">
      <div className="my-10 sm:my-20">
        <ArticlesList />
      </div>
    </main>
  );
}
