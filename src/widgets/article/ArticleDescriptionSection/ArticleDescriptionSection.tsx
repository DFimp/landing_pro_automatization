import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

type ArticleDescriptionSectionProps = {
  category?: string;   // например: "CRM" или "РАЗРАБОТКА"
  tag?: string;        // например: "#СТАТЬИ"
  date?: string;       // "24.12.2025" или "1 окт 2025"
  readTime?: string;   // "4 минуты"
};

export function ArticleDescriptionSection({
  category = "РАЗРАБОТКА",
  tag = "#СТАТЬИ",
  date = "1 окт 2025",
  readTime = "4 минуты",
}: ArticleDescriptionSectionProps) {
  return (
    <ScrollReveal
      as="div"
      variant="typeFast"
      className="mx-auto w-full max-w-[1200px] px-4 !mt-[66px] flex sm:flex-row flex-col gap-x-[60px] gap-y-[18px] sm:items-center !mb-[60px] flex-wrap"
    >
      <div className="flex sm:gap-x-[60px] gap-x-[40px] items-center">
        <div className="bg-[#D8E3FD] rounded-[10px] p-[10px] text-[14px] leading-[1]">
          {category}
        </div>
        <div className="text-[14px]">{tag}</div>
      </div>

      <div className="flex sm:gap-x-[60px] gap-x-[24px] items-center">
        <div className="block text-[14px] text-[#969696]">{date}</div>
        <div className="text-[14px] text-[#969696]">
          Время на прочтение - {readTime}.
        </div>
      </div>
    </ScrollReveal>
  );
}
