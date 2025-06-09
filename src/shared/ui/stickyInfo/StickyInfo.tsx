type StickyInfoProps = {
    text: string;
    left?: boolean;
    className?: string;
};

export default function StickyInfo({
                                       text,
                                       left = true,
                                       className = "",
                                   }: StickyInfoProps) {
    return (
        <div className="sticky-info w-full">
            <div className="flex items-stretch">
                <div className={`flex-1 ${left ? "bg-blue" : ""}`}></div>
                <div
                    className="container"
                    style={{padding:'0'}}>
                    <div className={`bg-blue text-white text-h4 font-normal py-5 whitespace-normal 
            ${left ? "rounded-r-full pl-5 pr-20" : "rounded-l-full pr-5 pl-20"} 
            ${className}`}
                    >
                        {text}
                    </div>
                </div>
                <div className={`flex-1 ${!left ? "bg-blue" : ""}`}></div>
            </div>
        </div>
    );
}