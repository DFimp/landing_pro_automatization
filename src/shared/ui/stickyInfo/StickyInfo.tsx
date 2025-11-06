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
        <div className="container" style={{ padding: "0" }}>
          <div
            className={`bg-blue text-white sm:text-h4 text-[14px] font-normal py-3 sm:py-5 whitespace-normal 
            ${
              left
                ? "rounded-r-full pl-5 pr-5 sm:pr-20"
                : "rounded-l-full pr-5 sm:pl-20 pl-10 sm:ml-0 ml-5"
            } 
            ${className}`}
          >
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
          </div>
        </div>
        <div className={`flex-1 ${!left ? "bg-blue" : ""}`}></div>
      </div>
    </div>
  );
}
