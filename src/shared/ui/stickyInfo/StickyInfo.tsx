type StickyInfoProps = {
    text: string
    left?: boolean
    className?: string
}

export default function StickyInfo({
                                       text,
                                       left = true,
    className = "",
}: StickyInfoProps) {
    return (
        <div className="sticky-info h-10 w-full">
            <div className="relative">
                <div
                    className={`absolute bg-blue top-0 text-white text-h4 font-normal py-4 px-10 pr-32 ${className} 
                    ${left ? "left-0 rounded-r-full pl-50" : "right-0 rounded-l-full pr-50"}`}>
                    {text}
                </div>
            </div>
        </div>
    );
}
