"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { lockBodyScroll } from "@/shared/utils/lockBodyScroll";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  panelClassName?: string;
  contentClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  panelClassName,
  contentClassName,
}) => {
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const openTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (isOpen) {
      setShouldRender(true);
      setIsActive(false);
      openTimerRef.current = window.setTimeout(() => {
        setIsActive(true);
        openTimerRef.current = null;
      }, 18);
      return () => {
        if (openTimerRef.current) {
          window.clearTimeout(openTimerRef.current);
          openTimerRef.current = null;
        }
      };
    }

    setIsActive(false);
    closeTimerRef.current = window.setTimeout(() => {
      setShouldRender(false);
      closeTimerRef.current = null;
    }, 500);

    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = null;
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!shouldRender) return;
    return lockBodyScroll();
  }, [shouldRender]);

  useEffect(() => {
    if (!shouldRender) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [shouldRender, onClose]);

  if (!mounted || !shouldRender) return null;

  const isClosing = shouldRender && !isOpen;

  return createPortal(
    <div
      className="fixed inset-0 z-[3000] flex items-center justify-center overflow-hidden"
      style={{ zIndex: 2147483647 }}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`absolute inset-0 transition-[opacity,backdrop-filter,background-color] ${
          isActive
            ? "duration-[560ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-100 bg-[rgba(4,10,26,0.62)] backdrop-blur-[6px]"
            : isClosing
              ? "duration-[380ms] ease-[cubic-bezier(0.4,0,1,1)] opacity-0 bg-[rgba(3,8,22,0)] backdrop-blur-0"
              : "duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 bg-[rgba(3,8,22,0)] backdrop-blur-0"
        }`}
        onClick={onClose}
      />

      <div
        aria-hidden
        className={`pointer-events-none absolute h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(58,94,255,0.45)_0%,rgba(58,94,255,0.08)_45%,transparent_72%)] blur-[20px] transition-[opacity,transform] ${
          isActive
            ? `${styles.modalGlowEntrance} opacity-100`
            : isClosing
              ? `${styles.modalGlowExit} opacity-0`
              : "duration-[620ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 scale-[0.72]"
        }`}
      />

      <div
        className={`relative w-full max-w-md mx-4 overflow-hidden rounded-2xl bg-white shadow-[0_40px_90px_rgba(2,10,30,0.35)] border border-white/70 will-change-transform transition-[opacity,transform,filter] ${
          isActive
            ? `${styles.modalPanelEntrance} opacity-100`
            : isClosing
              ? `${styles.modalPanelExit} opacity-0`
              : "duration-[680ms] ease-[cubic-bezier(0.18,0.9,0.2,1.05)] opacity-0 translate-y-[88px] scale-[0.82] rotate-[-3deg] blur-[12px]"
        } ${panelClassName ?? ""}`}
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500 ${
            isActive
              ? "opacity-100 [box-shadow:inset_0_0_0_1px_rgba(120,149,255,0.35)]"
              : "opacity-0"
          }`}
        />
        <div
          className={`relative rounded-[inherit] transition-[opacity,transform] ${
            isActive
              ? `${styles.modalContentEntrance} opacity-100`
              : isClosing
                ? `${styles.modalContentExit} opacity-0`
                : "duration-[580ms] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 translate-y-[18px]"
          } ${contentClassName ?? ""}`}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
