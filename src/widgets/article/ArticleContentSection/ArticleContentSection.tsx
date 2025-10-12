import ArticleIntroducion from "./blocks/ArticleIntroducion";
import ArticleFirstCase from "./blocks/ArticleFirstCase";
import ArticleSecondCase from "./blocks/ArticleSecondCase";
import ArticleThirdCase from "./blocks/ArticleThirdCase";
import ArticleConclusion from "./blocks/ArticleConclusion";

export function ArticleContentSection() {
    return (
        <div className="container sm:mb-[60px]! mb-[40px]!">
            <h1 className="font-bold sm:text-[48px] text-[20px] leading-[1.2] sm:mb-[40px] mb-[20px]">Как работать с дублями и почему<br/>это очень важно.</h1>
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