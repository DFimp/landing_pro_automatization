"use client";

import Image from "next/image";
import HeaderNav from "@/widgets/header/ui/HeaderNav";
import Link from "next/link";
import HeaderActions from "./ui/HeaderActions";
import MobileMenuWrapper from "./ui/MobileMenuWrapper";
import MobileMenuToggle from "./ui/MobileMenuToggle";
import { useHiddenInIframe } from "@/shared/utils/useHiddenInIframe";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const { isIframe } = useHiddenInIframe();
  const headerRef = useRef<HTMLElement | null>(null);
  const [isFloating] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(92);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isMenuAlignedRight, setIsMenuAlignedRight] = useState(false);
  const pathname = usePathname();
  const isMenuOpen = isHydrated && isMobileMenuOpen;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuAlignedRight(true);
      return;
    }

    if (!isMenuAlignedRight) return;
    const timeoutId = window.setTimeout(() => {
      setIsMenuAlignedRight(false);
    }, 420);

    return () => window.clearTimeout(timeoutId);
  }, [isMenuOpen, isMenuAlignedRight]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMenuAlignedRight(false);
  }, [pathname]);

  useEffect(() => {
    if (isIframe) return;
    if (!headerRef.current || typeof ResizeObserver === "undefined") {
      return;
    }

    const updateHeight = () => {
      setHeaderHeight(headerRef.current?.offsetHeight ?? 0);
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, [isIframe]);

  if (isIframe) return null;
  return (
    <div style={{ ["--header-height" as any]: `${headerHeight}px` }}>
      <div aria-hidden="true" style={{ height: headerHeight }} />
      <header
        ref={headerRef}
        className={clsx(
          "w-full fixed left-0 right-0 top-0 z-[1500]"
        )}
      >
        <div
          className={clsx(
            "relative w-full",
            isFloating
              ? clsx(
                  clsx("bg-white", !isMenuOpen && "sm:bg-white/70 sm:backdrop-blur-xl"),
                  !isMenuOpen && "shadow-[0_10px_30px_rgba(15,23,42,0.12)]"
                )
              : "bg-white sm:bg-transparent"
          )}
        >
          <div
            className={clsx(
              "pointer-events-none absolute left-0 top-0 bottom-0 w-[20vw] bg-[#020617]/45 transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          />
          <div
            className={clsx(
              "max-w-[100vw] min-w-0 transition-[width,max-width] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:ml-0",
              isMenuOpen ? "w-[80vw] min-w-[260px] max-w-[520px]" : "w-full",
              "sm:w-full sm:max-w-none",
              isMenuAlignedRight && "ml-auto"
            )}
          >
            <div className="mx-auto w-full max-w-[1200px] px-4 w-full flex justify-between items-center px-4 sm:px-0 !py-4 sm:!py-0">
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
                <HeaderNav isFloating={isFloating} />
                <HeaderActions />
              </div>

              <div className="sm:hidden">
                <MobileMenuToggle
                  isOpen={isMenuOpen}
                  onClick={() => setIsMobileMenuOpen((open) => !open)}
                  ariaLabel={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenuWrapper isOpen={isMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </div>
  );
};

export default Header;
