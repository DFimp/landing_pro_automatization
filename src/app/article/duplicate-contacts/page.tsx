import { ArticleConclusionSection, ArticleDescriptionSection, ArticleContentSection } from "@/widgets/article"

export default function DuplicateContacts() {
    return (
        <main id="duplicate_contacts" className="overflow-hidden">
            <ArticleDescriptionSection></ArticleDescriptionSection>
            <ArticleContentSection></ArticleContentSection>
            <ArticleConclusionSection></ArticleConclusionSection>
        </main>
    );
}
