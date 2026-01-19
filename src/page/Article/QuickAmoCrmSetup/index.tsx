import { ArticleDescriptionSection } from "@/widgets/article/ArticleDescriptionSection/ArticleDescriptionSection";
import QuickAmoCrmSetupMoreContentSection from "@/widgets/article/QuickAmoCrmSetupContentSection/QuickAmoCrmSetupContentSection";
import { ArticleConclusionSection } from "@/widgets/article/ArticleConclusionSection/ArticleConclusionSection";
import { ArticleSchemaTag } from "@/shared/lib/seo";
import { ARTICLES_DATA } from "@/shared/constants/articles";
import { SITE_URL } from "@/shared/constants/routes";

import styles from "./QuickAmoCrmSetup.module.css";

const article = ARTICLES_DATA['quick-setup'];

export default function QuickAmoCrmSetupArticle() {
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
                    <h1>Быстрая настройка amoCRM: чеклист для новичков за 1 день</h1>
                    <QuickAmoCrmSetupMoreContentSection />
                </div>
            </div>

            <ArticleConclusionSection />
        </>
    );
}
