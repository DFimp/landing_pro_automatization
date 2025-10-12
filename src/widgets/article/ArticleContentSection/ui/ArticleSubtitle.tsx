interface ArticleSubtitleProps {
    title?: string
    subtitle?: string
}

export default function ArticleSubtitle({ title, subtitle }: ArticleSubtitleProps) {
  return (
    <div>
        { title && <h2 className="text-[#3760E7] font-bold sm:text-[48px] text-[24px] mb-[10px] leading-[1]">{title}</h2> }
        { subtitle && <h3 className="font-semibold sm:text-[32px] text-[20px]">{subtitle}</h3> }
    </div>
  );
}