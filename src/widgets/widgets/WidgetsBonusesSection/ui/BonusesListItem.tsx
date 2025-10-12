interface BonusesListItemProps {
    text: string;
    className?: string
}

export function BonusesListItem({ text, className }: BonusesListItemProps) {
    return (
        <div className={`text-white sm:text-[16px] text-[14px] px-[20px] py-[10px] border border-white rounded-full sm:w-fit w-full  ${className}`}>
            <span dangerouslySetInnerHTML={{ __html: text}}></span>           
        </div>
    );
}