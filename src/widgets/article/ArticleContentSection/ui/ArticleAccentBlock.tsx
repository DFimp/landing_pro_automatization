import { PropsWithChildren } from 'react'

export default function ArticleAccentBlock({ children }: PropsWithChildren) {
  return (
    <div className="border-l-[2px] border-[#3760E7] pl-[21px]">
      {children}
    </div>
  );
}