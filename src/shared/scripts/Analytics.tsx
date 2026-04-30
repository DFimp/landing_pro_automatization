"use client";

import Script from "next/script";
import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const YM_ID = 104625972;

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;

    if (window.ym) {
      window.ym(YM_ID, "hit", url);
    }
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  return (
    <>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>

      <Script id="yandex-metrika" strategy="afterInteractive">
        {`(function (m, e, t, r, i, k, a) {
          m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
          m[i].l = 1 * new Date();
          for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) { return; }
          }
          (k = e.createElement(t)), (a = e.getElementsByTagName(t)[0]),
          (k.async = 1), (k.src = r), a.parentNode.insertBefore(k, a);
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(${YM_ID}, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          ecommerce: "dataLayer",
        });`}
      </Script>
    </>
  );
}
