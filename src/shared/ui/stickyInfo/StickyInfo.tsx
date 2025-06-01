type StickyInfoProps = {
    text: string
}

export default function StickyInfo({text}: StickyInfoProps) {
    return (
        <div className="sticky-info h-10">
            <div className="relative max-w-6xl">
                <div className="absolute -left-50 pl-50 bg-blue text-white text-h4 font-normal py-4 px-10 pr-32 rounded-r-full max-w-1250">
                    {text}
                </div>
            </div>
        </div>
    );
}
