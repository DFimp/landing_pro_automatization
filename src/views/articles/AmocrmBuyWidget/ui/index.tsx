import { ArticleDescriptionSection } from "@/views/articles/shared/ArticleDescriptionSection/ArticleDescriptionSection";
import { ArticleConclusionSection } from "@/views/articles/shared/ArticleConclusionSection/ArticleConclusionSection";
import { ArticleSchemaTag } from "@/shared/lib/seo";
import { ARTICLES_DATA } from "@/shared/constants/articles";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import BuyWidgetContentSection from "./BuyWidgetContentSection/BuyWidgetContentSection";

const article = ARTICLES_DATA["amocrm-buy-widget"];

export default function AmocrmBuyWidgetArticle() {
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
        <ArticleDescriptionSection category="CRM" tag="#СТАТЬИ" date="28.04.2026" readTime="14 минут" />

        <div className="text-[#0b0b0b] [&_h1]:text-[#3760E7] [&_h1]:text-[48px] [&_h1]:leading-[1.1] [&_h1]:font-bold [&_h1]:tracking-[-0.02em] [&_h1]:mt-[18px] [&_h1]:mb-[28px] [&_p]:text-[18px] [&_p]:leading-[1.7] [&_p]:my-[6px] [&_p]:max-w-[900px] [&_p+_p]:mt-[10px] [&_h2]:text-[#3760E7] [&_h2]:text-[36px] [&_h2]:font-bold [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.015em] [&_h2]:mt-[48px] [&_h2]:mb-[16px] [&_p+_h2]:mt-[56px] [&_ul+_h2]:mt-[56px] [&_div+_h2]:mt-[56px] [&_h3]:text-[#3760E7] [&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:leading-[1.3] [&_h3]:mt-[8px] [&_h3]:mb-[8px] [&_ul]:my-[8px] [&_ul]:mb-[12px] [&_ul]:pl-0 [&_ul]:list-none [&_ul>li]:relative [&_ul>li]:pl-[22px] [&_ul>li]:my-[4px] [&_ul>li]:leading-[1.6] [&_ul>li]:before:content-[''] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.62em] [&_ul>li]:before:w-[8px] [&_ul>li]:before:h-[8px] [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-[#3760E7] [&_ol]:my-[8px] [&_ol]:mb-[12px] [&_ol]:pl-[26px] [&_ol]:list-decimal [&_ol]:list-inside [&_ol>li]:my-[4px] [&_ol>li]:leading-[1.6] [&_ol>li::marker]:text-[#3760E7] [&_ol>li::marker]:font-semibold max-[900px]:[&_h1]:text-[36px] max-[900px]:[&_p]:text-[16px] max-[900px]:[&_p]:max-w-full">
          <ScrollReveal as="h1" variant="typeFast">
            Купить виджет amoCRM
          </ScrollReveal>
          <BuyWidgetContentSection />
        </div>
      </div>

      <ArticleConclusionSection />
    </>
  );
}
