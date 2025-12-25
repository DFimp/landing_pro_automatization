import { ArticleDescriptionSection } from "@/widgets/article/ArticleDescriptionSection/ArticleDescriptionSection";
import QuickAmoCrmSetupMoreContentSection from "@/widgets/article/QuickAmoCrmSetupContentSection/QuickAmoCrmSetupContentSection";
import { ArticleConclusionSection } from "@/widgets/article/ArticleConclusionSection/ArticleConclusionSection";

import styles from "./QuickAmoCrmSetup.module.css";

export default function QuickAmoCrmSetupArticle() {
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
                    <h1>Быстрая настройка amoCRM: чеклист для новичков за 1 день</h1>
                    <QuickAmoCrmSetupMoreContentSection />
                </div>
            </div>

            <ArticleConclusionSection />
        </>
    );
}
