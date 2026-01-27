"use client";

import Image from "next/image";
import HeaderNav from "@/widgets/header/ui/HeaderNav";
import Link from "next/link";
import HeaderActions from "./ui/HeaderActions";
import MobileMenuWrapper from "./ui/MobileMenuWrapper";
import { useHiddenInIframe } from "@/shared/utils/useHiddenInIframe";

const Header = () => {
const { isIframe } = useHiddenInIframe();

  if (isIframe) return null;

  return (
    <header className="container flex justify-between items-center px-4 sm:px-0 !py-4 sm:!py-0 sticky sm:static top-0 sm:top-auto z-100 sm:z-auto bg-white sm:bg-transparent">
      <div className="header__logo">
        <Link href="/" className="my-1 flex items-center gap-2 sm:gap-3">
          <Image
            src="/vector_logo.svg"
            alt="Логотип Про Автоматизацию"
            width={40}
            height={55}
            className="h-[48px] w-[36px] sm:h-[55px] sm:w-[40px]"
            priority
          />
          <span className="font-medium uppercase leading-[1.05] text-h8 sm:text-h7">
            <span className="block">ПРО</span>
            <span className="block">АВТОМАТИЗАЦИЮ</span>
          </span>
        </Link>
      </div>

      <div className="hidden sm:flex items-center gap-5">
        <HeaderNav />
        <HeaderActions />
      </div>

      <MobileMenuWrapper />
    </header>
  );
};

export default Header;

