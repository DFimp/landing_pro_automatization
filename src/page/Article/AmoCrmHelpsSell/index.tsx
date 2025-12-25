import { ArticleDescriptionSection } from "@/widgets/article/ArticleDescriptionSection/ArticleDescriptionSection";
import AmoCrmHelpsSellMoreContentSection from "@/widgets/article/AmoCrmHelpsSellMoreContentSection/AmoCrmHelpsSellMoreContentSection";
import { ArticleConclusionSection } from "@/widgets/article/ArticleConclusionSection/ArticleConclusionSection";

import styles from "./AmoCrmHelpsSell.module.css";

export default function AmoCrmHelpsSellArticle() {
    return (
        <>
            <div className={styles.wrapper}>
                <ArticleDescriptionSection
                    category="CRM"
                    tag="#СТАТЬИ"
                    date="24.12.2025"
                    readTime="6 минут"
                />

                <div className={styles.content}>
                    <h1>amoCRM: почему эта CRM реально помогает бизнесу продавать больше</h1>

                    <AmoCrmHelpsSellMoreContentSection />
                </div>
            </div>

            <ArticleConclusionSection />
        </>
    );
}
