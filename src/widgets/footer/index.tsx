"use client";

import Link from "next/link";
import Image from "next/image";
import { hiddenInIframe } from "@/shared/utils/hiddenInIframe";

export const Footer = () => {
  const { isIframe } = hiddenInIframe();

  return (
    <footer id={isIframe ? "hidden-in-iframe" : ""} className="bg-[#1e1e1e]">
      <div className="max-w-[1200px] m-auto py-2 flex items-center justify-between">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/logo.png"
            alt="Про автоматизацию"
            width={100}
            height={100}
          />
        </Link>

        <div className="text-h7 text-blue flex flex-col items-end gap-1">
          <Link href={"/privacy"}>
            Политика конфиденциальности
          </Link>

          <Link href={"https://t.me/@proavtomatization_support_bot"} target="_blank">
            Написать в поддержку
          </Link>
        </div>
      </div>
    </footer>
  );
};
