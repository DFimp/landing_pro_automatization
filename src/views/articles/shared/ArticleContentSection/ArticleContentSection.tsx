import ArticleIntroducion from "./blocks/ArticleIntroducion";
import ArticleFirstCase from "./blocks/ArticleFirstCase";
import ArticleSecondCase from "./blocks/ArticleSecondCase";
import ArticleThirdCase from "./blocks/ArticleThirdCase";
import ArticleConclusion from "./blocks/ArticleConclusion";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

export function ArticleContentSection() {
    return (
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:!mb-[60px] !mb-[40px]">
            <ScrollReveal
                as="h1"
                variant="typeFast"
                className="font-bold sm:text-[48px] text-[20px] leading-[1.2] sm:mb-[40px] mb-[20px]"
            >
                Как работать с дублями сделок в amoCRM - 3 практических кейса
            </ScrollReveal>
            <div className="flex flex-col sm:gap-[60px] gap-[40px]">
            <ArticleIntroducion></ArticleIntroducion>
            <ArticleFirstCase></ArticleFirstCase>
            <ArticleSecondCase></ArticleSecondCase>
            <ArticleThirdCase></ArticleThirdCase>
            <ArticleConclusion></ArticleConclusion>
            </div>
        </div>
    )
}
