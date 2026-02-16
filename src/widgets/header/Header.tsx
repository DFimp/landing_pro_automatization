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

const SCROLL_DELTA = 6;
const FLOAT_THRESHOLD = 8;

const Header = () => {
  const { isIframe } = useHiddenInIframe();
  const headerRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const accumulatedDelta = useRef(0);
  const wasNearTop = useRef(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isFloating, setIsFloating] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(92);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    if (isIframe) return;
    if (typeof window === "undefined") return;

    lastScrollY.current = window.scrollY;
    setIsFloating(window.scrollY > FLOAT_THRESHOLD);
    setIsVisible(true);

    const updateOnScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      const nearTop = currentY <= FLOAT_THRESHOLD;
      if (nearTop) {
        setIsFloating(false);
        setIsVisible(true);
        accumulatedDelta.current = 0;
        if (hideTimer.current) {
          clearTimeout(hideTimer.current);
          hideTimer.current = null;
        }
      } else if (delta > 0) {
        if (accumulatedDelta.current < 0) accumulatedDelta.current = 0;
        accumulatedDelta.current += delta;
        if (accumulatedDelta.current >= SCROLL_DELTA) {
          setIsFloating(false);
          setIsVisible(false);
          accumulatedDelta.current = 0;
          if (hideTimer.current) {
            clearTimeout(hideTimer.current);
            hideTimer.current = null;
          }
        }
      } else if (delta < 0) {
        setIsFloating(true);
        if (accumulatedDelta.current > 0) accumulatedDelta.current = 0;
        accumulatedDelta.current += delta;
        if (accumulatedDelta.current <= -SCROLL_DELTA) {
          setIsVisible(true);
          accumulatedDelta.current = 0;
        }
      }

      lastScrollY.current = currentY;
      wasNearTop.current = nearTop;
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(updateOnScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isIframe]);

  if (isIframe) return null;

  return (
    <div style={{ ["--header-height" as any]: `${headerHeight}px` }}>
      <div aria-hidden="true" style={{ height: isFloating ? headerHeight : 0 }} />
      <header
        ref={headerRef}
        className={clsx(
          "w-full transition-transform",
          isVisible ? "duration-200" : "duration-300",
          isFloating ? "fixed left-0 right-0 top-0 z-[1500]" : "relative z-[1500]",
          isVisible ? "translate-y-0" : "-translate-y-full pointer-events-none"
        )}
      >
        <div
          className={clsx(
            "ml-auto max-w-[100vw] min-w-0 transition-[width,max-width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:ml-0",
            isMobileMenuOpen ? "w-[80vw] min-w-[260px] max-w-[520px]" : "w-full",
            "sm:w-full sm:max-w-none",
            isFloating
              ? clsx(
                  clsx("bg-white", !isMobileMenuOpen && "sm:bg-white/70 sm:backdrop-blur-xl"),
                  !isMobileMenuOpen && "shadow-[0_10px_30px_rgba(15,23,42,0.12)]"
                )
              : "bg-white sm:bg-transparent"
          )}
        >
          <div className="container w-full flex justify-between items-center px-4 sm:px-0 !py-4 sm:!py-0">
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
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                ariaLabel={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              />
            </div>
          </div>
        </div>
      </header>

      <MobileMenuWrapper isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </div>
  );
};

export default Header;
