import { ArticleDescriptionSection } from "@/views/articles/shared/ArticleDescriptionSection/ArticleDescriptionSection";
import SellMoreContentSection from "@/views/articles/shared/SellMoreContentSection/SellMoreContentSection";
import { ArticleConclusionSection } from "@/views/articles/shared/ArticleConclusionSection/ArticleConclusionSection";
import { ArticleSchemaTag } from "@/shared/lib/seo";
import { ARTICLES_DATA } from "@/shared/constants/articles";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

const article = ARTICLES_DATA["amocrm-helps-sell"];

export default function AmoCrmHelpsSellArticle() {
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
          date="24.12.2025"
          readTime="6 минут"
        />

        <div className="text-[#0b0b0b] [&_h1]:text-[48px] [&_h1]:leading-[1.1] [&_h1]:font-bold [&_h1]:tracking-[-0.02em] [&_h1]:mt-[18px] [&_h1]:mb-[28px] [&_p]:text-[18px] [&_p]:leading-[1.75] [&_p]:my-[10px] [&_p]:max-w-[900px] [&_h2]:m-0 [&_h3]:m-0 [&_h2+_p]:mt-[14px] [&_h2+_div]:mt-[14px] [&_h2+_ul]:mt-[14px] [&_p+_h2]:mt-[28px] [&_ul+_h2]:mt-[28px] [&_div+_h2]:mt-[28px] [&_h3]:text-[22px] [&_h3]:font-bold [&_h3]:leading-[1.25] [&_h3]:mt-[8px] [&_h3]:mb-[8px] max-[900px]:[&_h1]:text-[36px] max-[900px]:[&_p]:text-[16px] max-[900px]:[&_p]:leading-[1.7] max-[900px]:[&_p]:max-w-full">
          <ScrollReveal as="h1" variant="typeFast">
            AmoCRM: почему эта CRM реально помогает бизнесу продавать больше
          </ScrollReveal>

          <SellMoreContentSection />
        </div>
      </div>

      <ArticleConclusionSection />
    </>
  );
}
