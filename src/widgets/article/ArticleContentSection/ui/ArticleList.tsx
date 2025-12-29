import Image from "next/image";

interface ArticleListProps {
    items: string[]
}

export default function ArticleList({ items }: ArticleListProps) {
  return (
    <div className="flex flex-col gap-[20px]">
        { items.map(
            (item, index) => <div key={index} className="flex sm:gap-[12px] gap-[16px] items-center leading-[1]">
                <Image
                    src="/decor/list_marker.svg"
                    alt="пункт-кружок списка"
                    width={14}
                    height={14}
                />
                {item}
            </div>
            )}
    </div>
  );
}