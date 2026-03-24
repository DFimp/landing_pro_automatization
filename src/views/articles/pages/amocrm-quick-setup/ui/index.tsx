import { ArticleDescriptionSection } from "@/views/articles/shared/ArticleDescriptionSection/ArticleDescriptionSection";
import QuickAmoCrmSetupMoreContentSection from "@/views/articles/shared/QuickAmoCrmSetupContentSection/QuickAmoCrmSetupContentSection";
import { ArticleConclusionSection } from "@/views/articles/shared/ArticleConclusionSection/ArticleConclusionSection";
import { ArticleSchemaTag } from "@/shared/lib/seo";
import { ARTICLES_DATA } from "@/shared/constants/articles";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

const article = ARTICLES_DATA["amocrm-quick-setup"];

export default function QuickAmoCrmSetupArticle() {
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
      <div className="mx-auto max-w-[1200px] px-5 [&_.sm\:gap-\[40px\]]:gap-[16px]">
        <ArticleDescriptionSection
          category="CRM"
          tag="#СТАТЬИ"
          date="24.12.2025"
          readTime="6 минут"
        />

        <div className="text-[#0b0b0b] [&_h1]:text-[48px] [&_h1]:leading-[1.1] [&_h1]:font-bold [&_h1]:tracking-[-0.02em] [&_h1]:mt-[18px] [&_h1]:mb-[28px] [&_p]:text-[18px] [&_p]:leading-[1.7] [&_p]:my-[6px] [&_p]:max-w-[900px] [&_p+_p]:mt-[10px] [&_h2]:text-[36px] [&_h2]:font-bold [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.015em] [&_h2]:mt-[48px] [&_h2]:mb-[16px] [&_p+_h2]:mt-[56px] [&_ul+_h2]:mt-[56px] [&_div+_h2]:mt-[56px] [&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:leading-[1.3] [&_h3]:mt-[8px] [&_h3]:mb-[8px] [&_ul]:my-[8px] [&_ul]:mb-[12px] [&_ul]:pl-[18px] [&_li]:my-[4px] [&_li]:leading-[1.6] max-[900px]:[&_h1]:text-[36px] max-[900px]:[&_p]:text-[16px] max-[900px]:[&_p]:max-w-full">
          <ScrollReveal as="h1" variant="typeFast">
            Быстрая настройка amoCRM: чеклист для новичков за 1 день
          </ScrollReveal>
          <QuickAmoCrmSetupMoreContentSection />
        </div>
      </div>

      <ArticleConclusionSection />
    </>
  );
}
