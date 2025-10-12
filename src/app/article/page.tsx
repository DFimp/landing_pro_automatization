import { ArticleConclusionSection, ArticleDescriptionSection, ArticleContentSection } from "@/widgets/article"
import { FinalSection } from "@/widgets/audit";

export default function Article() {
    return (
        <main id="article" className="overflow-hidden">
            <ArticleDescriptionSection></ArticleDescriptionSection>
            <ArticleContentSection></ArticleContentSection>
            <ArticleConclusionSection></ArticleConclusionSection>
        </main>
    );
}
