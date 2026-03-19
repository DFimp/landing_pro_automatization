import { PropsWithChildren } from 'react'

export default function ArticleImageWrapper({ children }: PropsWithChildren) {
  return (
    <div className="flex gap-x-[56px] gap-y-[22px] justify-center flex-wrap">
      {children}
    </div>
  );
}