import { PropsWithChildren } from 'react'


export default function SupportChips({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center items-center gap-[10px] flex-grow-1 border border-[#D9D9D9] rounded-[10px] h-[70px]">
      {children}
    </div>
  );
}