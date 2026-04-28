import { ArticleDescriptionSection } from "@/views/articles/shared/ArticleDescriptionSection/ArticleDescriptionSection";
import { ArticleConclusionSection } from "@/views/articles/shared/ArticleConclusionSection/ArticleConclusionSection";
import { ArticleSchemaTag } from "@/shared/lib/seo";
import { ARTICLES_DATA } from "@/shared/constants/articles";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import IntegrationSdecContentSection from "./IntegrationSdecContentSection/IntegrationSdecContentSection";

const article = ARTICLES_DATA["amocrm-integration-sdec"];

export default function AmocrmIntegrationSdecArticle() {
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
      <div className="mx-auto max-w-[1200px] px-5">
        <ArticleDescriptionSection
          category="CRM"
          tag="#СТАТЬИ"
          date="28.04.2026"
          readTime="16 минут"
        />
        <div className="text-[#0b0b0b] [&_h1]:text-[#3760E7] [&_h1]:text-[48px] [&_h1]:font-bold [&_h1]:leading-[1.1] [&_h1]:mb-[40px] [&_h1]:mt-[20px] [&_h2]:text-[28px] [&_h2]:font-bold [&_h2]:leading-[1.2] [&_h2]:mt-[40px] [&_h2]:mb-[16px] [&_h3]:text-[22px] [&_h3]:font-semibold [&_h3]:mt-[28px] [&_h3]:mb-[12px] [&_p]:text-[18px] [&_p]:leading-[1.7] [&_p]:mb-[16px] [&_p]:max-w-[780px] [&_ul]:mb-[16px] [&_ul]:pl-[24px] [&_ul]:max-w-[780px] [&_li]:text-[18px] [&_li]:leading-[1.7] [&_li]:mb-[8px] [&_ol]:mb-[16px] [&_ol]:pl-[24px] [&_ol]:max-w-[780px] max-[900px]:[&_h1]:text-[36px] max-[900px]:[&_h2]:text-[24px] max-[900px]:[&_h3]:text-[20px] max-[900px]:[&_p]:text-[16px] max-[900px]:[&_li]:text-[16px] max-[900px]:[&_p]:max-w-full max-[900px]:[&_ul]:max-w-full max-[900px]:[&_ol]:max-w-full">
          <ScrollReveal as="h1" variant="typeFast">
            Интеграция amoCRM с СДЭК — доставка из сделки без ручного переноса
          </ScrollReveal>
          <IntegrationSdecContentSection />
        </div>
      </div>
      <ArticleConclusionSection />
    </>
  );
}