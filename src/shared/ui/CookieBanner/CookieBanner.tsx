"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Button from "@/shared/ui/button/Button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("embed") !== null) return;
    if (localStorage.getItem("cookie_accepted")) return;

    const show = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    }, 2000);

    return () => clearTimeout(show);
  }, []);

  function accept() {
    localStorage.setItem("cookie_accepted", "1");
    setAnimate(false);
    setTimeout(() => setVisible(false), 400);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-md px-4
        transition-all duration-500 ease-out
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(2,10,30,0.18)] border border-gray-100 px-6 py-5">
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Мы используем файлы cookie для улучшения работы сайта. Продолжая
          пользоваться сайтом, вы соглашаетесь с нашей{" "}
          <Link
            href="/privacy"
            className="text-blue underline underline-offset-2 hover:text-blue2 transition-colors duration-200"
          >
            политикой конфиденциальности
          </Link>
          .
        </p>
        <Button text="Принять" onClick={accept} fullWidth />
      </div>
    </div>
  );
}
