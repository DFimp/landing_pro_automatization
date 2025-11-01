"use client";

import Link from "next/link";
import Image from "next/image";
import { hiddenInIframe } from "@/shared/utils/hiddenInIframe";

export const Footer = () => {
  const { isIframe } = hiddenInIframe();

  const cols = [
    {
      title: "Услуги",
      items: [
        { label: "Аудит", href: "/#audit" },
        { label: "Внедрение", href: "/#implementation" },
        { label: "Сопровождение", href: "/#support" },
        { label: "Лицензия", href: "/license" },
      ],
    },
    {
      title: "Виджеты",
      items: [
        { label: "Телеграм виджет", href: "/widgets/telegram-notify" },
        { label: "Автозадачи для amoCRM", href: "/widgets/auto-tasks" },
        { label: "Объединение дублей сделок", href: "/widgets/duplicate-leads" },
        { label: "Объединение дублей контактов", href: "/widgets/duplicate-contacts" },
      ],
    },
    {
      title: "",
      items: [
        { label: "Виджет времени клиента", href: "/widgets/time-zone" },
        { label: "Умное распределение сделок", href: "/widgets/lead-distribution" },
        { label: "Переход в Telegram", href: "/widgets/telegram-button" },
        { label: "Переход в WhatsApp", href: "/widgets/whatsapp-button" },
      ],
    },
  ];

  return (
    <footer id={isIframe ? "hidden-in-iframe" : ""} className="pt-6">
      <div className="w-full rounded-b-[24px] text-white
    bg-[radial-gradient(1200px_600px_at_0%_100%,rgba(108,0,255,.22),transparent_60%),radial-gradient(1000px_500px_at_100%_0%,rgba(0,102,255,.22),transparent_60%),linear-gradient(180deg,#1a1530_0%,#0f1427_100%)]">

        <div className="mx-auto max-w-[1200px] px-4 py-6 md:py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="-ml-2 sm:-ml-3">
              <Link href="/">
                <Image
                  src="/widgets/footer/footer_logo.png"
                  alt="Про Автоматизацию"
                  width={210}
                  height={60}
                  className="block w-[210px] h-auto"
                  priority
                />
              </Link>
            </div>

            <div className="mt-6 text-[14px] leading-relaxed text-[#e9ecff]">
              <div>
                Email:{" "}
                <a className="hover:underline" href="mailto:info@pro-automatization.ru">
                  info@pro-automatization.ru
                </a>
              </div>
              <div>
                Телефон:{" "}
                <a className="hover:underline" href="tel:+74951234567">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div>Ставропольский край, г. Ессентуки</div>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 md:pl-4">
            {cols.map((col, i) => (
              <div
                key={i}
                className={i === 0 ? "pb-5 sm:pb-0" : ""}
              >
                {col.title ? (
                  <div className="mb-3 text-[16px] font-semibold text-white/95">{col.title}</div>
                ) : (
                  <div className="mb-3" />
                )}
                <ul className="space-y-2 text-[14px] text-[#e9ecff]">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <Link href={it.href} className="hover:text-white transition-colors">
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 w-full">
        <div className="mx-auto max-w-[1200px] px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-[14px] text-[#4b4b4b]">
          <div>ИП Горбань М.О. (ИНН 262609479757)</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:underline">
              Политика конфиденциальности
            </Link>
            <Link
              href="https://t.me/proavtomatization_support_bot"
              target="_blank"
              className="hover:underline"
            >
              Написать в поддержку
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
