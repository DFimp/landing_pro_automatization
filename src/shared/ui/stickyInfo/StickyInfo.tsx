type StickyInfoProps = {
    text: string
    left?: boolean
}

export default function StickyInfo({text, left = true}: StickyInfoProps) {
    return (
        <div className="sticky-info h-10">
            <div className="relative max-w-6xl">
                <div
                    className={`absolute bg-blue text-white text-h4 font-normal py-4 px-10 pr-32  max-w-1250 
                    ${left ? "-left-50 rounded-r-full pl-50" : "-right-50 rounded-l-full pr-50"}`}>
                    {text}
                </div>
            </div>
        </div>
    );
}
