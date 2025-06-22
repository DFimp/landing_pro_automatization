"use client";

import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-[1200px] m-auto py-10 flex items-center justify-between">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/logo.png"
            alt="Про автоматизацию"
            width={100}
            height={100}
          />
        </Link>

        <Link href={"/privacy"} className="text-h7 text-blue">
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
};
