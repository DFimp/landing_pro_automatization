import {
  ArticleConclusionSection,
  ArticleDescriptionSection,
  ArticleContentSection,
} from "@/widgets/article";
import { ArticleSchemaTag } from "@/shared/lib/seo";
import { ARTICLES_DATA } from "@/shared/constants/articles";

const article = ARTICLES_DATA['duplicate-leads'];

export default function ArticleDuplicateLeads() {
    return (
        <>
            <ArticleSchemaTag
                data={{
                    headline: article.title,
                    description: article.description,
                    datePublished: article.publishedTime,
                    dateModified: article.modifiedTime,
                }}
            />
            <main id="duplicate_contacts" className="overflow-hidden">
                <ArticleDescriptionSection></ArticleDescriptionSection>
                <ArticleContentSection></ArticleContentSection>
                <ArticleConclusionSection></ArticleConclusionSection>
            </main>
        </>
    );
}
