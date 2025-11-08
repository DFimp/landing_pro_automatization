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
        <Link href="/">
          <Image
            src="/widgets/header/header_logo.webp"
            alt="Про автоматизацию"
            width={195}
            height={60}
            className="sm:w-[260px] sm:h-[80px]"
          />
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
