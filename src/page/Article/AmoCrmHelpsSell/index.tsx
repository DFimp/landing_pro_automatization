import { ArticleDescriptionSection } from "@/widgets/article/ArticleDescriptionSection/ArticleDescriptionSection";
import AmoCrmHelpsSellMoreContentSection from "@/widgets/article/AmoCrmHelpsSellMoreContentSection/AmoCrmHelpsSellMoreContentSection";
import { ArticleConclusionSection } from "@/widgets/article/ArticleConclusionSection/ArticleConclusionSection";
import { ArticleSchemaTag } from "@/shared/lib/seo";
import { ARTICLES_DATA } from "@/shared/constants/articles";
import { SITE_URL } from "@/shared/constants/routes";

import styles from "./AmoCrmHelpsSell.module.css";

const article = ARTICLES_DATA['helps-sell'];

export default function AmoCrmHelpsSellArticle() {
    return (
        <>
            <ArticleSchemaTag
                data={{
                    headline: article.title,
                    description: article.description,
                    datePublished: article.publishedTime,
                    dateModified: article.modifiedTime,
                    author: { name: "Про Автоматизацию" },
                    publisher: {
                        name: "Про Автоматизацию",
                        logo: { url: `${SITE_URL}/logo.png` },
                    },
                }}
            />
            <div className={styles.wrapper}>
                <ArticleDescriptionSection
                    category="CRM"
                    tag="#СТАТЬИ"
                    date="24.12.2025"
                    readTime="6 минут"
                />

                <div className={styles.content}>
                    <h1>AmoCRM: почему эта CRM реально помогает бизнесу продавать больше</h1>

                    <AmoCrmHelpsSellMoreContentSection />
                </div>
            </div>

            <ArticleConclusionSection />
        </>
    );
}
