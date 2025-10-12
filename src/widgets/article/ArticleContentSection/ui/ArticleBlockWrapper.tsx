import { PropsWithChildren } from 'react'

export default function ArticleBlockWrapper({ children }: PropsWithChildren) {
  return (
    <div className="leading-[1.2] sm:text-[20px] text-[14px] font-[400] flex flex-col sm:gap-[40px] gap-[20px]">
      {children}
    </div>
  );
}