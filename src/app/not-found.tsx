import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Страница не найдена",
  description:
    "Запрошенная страница не существует или была перемещена. Перейдите на главную или откройте каталог виджетов.",
};

export default function NotFound() {
  return (
    <main className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_0%_0%,rgba(55,96,231,0.16),transparent_65%),radial-gradient(800px_420px_at_100%_10%,rgba(119,15,235,0.12),transparent_70%),radial-gradient(700px_360px_at_45%_100%,rgba(108,0,255,0.1),transparent_65%)]" />
        <div className={`absolute -left-8 top-12 h-40 w-40 rounded-full bg-[#3760E7]/25 blur-3xl ${styles.float}`} />
        <div className={`absolute right-6 top-28 h-56 w-56 rounded-full bg-[#770FEB]/20 blur-3xl ${styles.drift}`} />
        <div className={`absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#AFC1FF]/35 blur-3xl ${styles.drift}`} />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-4 py-[60px] relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#3760E7]/25 bg-white/80 px-4 py-2 text-h8 font-medium text-[#1B46D4] shadow-[0_10px_25px_rgba(55,96,231,0.12)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#3760E7] shadow-[0_0_10px_rgba(55,96,231,0.7)]" />
              Ошибка 404
            </div>

            <h1 className="mt-6 text-[40px] leading-[1.05] text-[#0f1427] sm:text-[64px]">
              Страница не найдена
            </h1>

            <p className="mt-4 max-w-[560px] text-h6 text-[#828B8D]">
              Похоже, ссылка устарела или была введена с ошибкой. Мы собрали
              быстрые маршруты, чтобы вы не потеряли нужный раздел.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-4xl border border-transparent bg-[#3760E7] px-5 py-3 text-h8 font-medium text-white transition hover:bg-white hover:text-[#3760E7] hover:border-[#3760E7]"
              >
                На главную
              </Link>
              <Link
                href="/widgets"
                className="inline-flex items-center justify-center rounded-4xl border border-[#3760E7] bg-white/80 px-5 py-3 text-h8 font-medium text-[#3760E7] transition hover:bg-[#3760E7] hover:text-white"
              >
                Каталог виджетов
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center justify-center rounded-4xl border border-[#1B46D4]/40 bg-white/70 px-5 py-3 text-h8 font-medium text-[#1B46D4] transition hover:bg-[#1B46D4] hover:text-white"
              >
                Аудит amoCRM
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[20px] border border-[#3760E7]/15 bg-white/80 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <p className="text-h7 font-semibold text-[#0f1427]">
                  Быстрые разделы
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-h8 text-[#3760E7]">
                  <Link href="/accompaniment" className="hover:underline">
                    Сопровождение
                  </Link>
                  <Link href="/license" className="hover:underline">
                    Лицензии
                  </Link>
                  <Link href="/articles" className="hover:underline">
                    Статьи
                  </Link>
                  <Link href="/cases" className="hover:underline">
                    Кейсы
                  </Link>
                </div>
              </div>

              <div className="rounded-[20px] border border-[#3760E7]/15 bg-white/80 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <p className="text-h7 font-semibold text-[#0f1427]">
                  Нужна помощь?
                </p>
                <p className="mt-2 text-h8 text-[#828B8D]">
                  Напишите нам в поддержку, поможем найти нужный раздел или подскажем решение.
                </p>
                <a
                  href="https://t.me/proavtomatization_support_bot"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-h8 font-medium text-[#1B46D4] hover:underline"
                >
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="widget-card rounded-[40px] border border-[#3760E7]">
              <div className="widget-card__inner rounded-[40px] bg-white/80 px-8 py-10 sm:px-10 sm:py-14">
                <div className="text-[120px] font-semibold leading-none text-transparent sm:text-[180px]">
                  <span className={`${styles.shimmer} bg-[linear-gradient(120deg,#3760E7,#770FEB,#1B46D4)] bg-clip-text`}>
                    404
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-h8">
                  <span className="text-[#828B8D]">
                    Ошибка маршрута
                  </span>
                  <span className="rounded-full border border-[#3760E7]/25 bg-[#3760E7]/10 px-3 py-1 text-[#1B46D4]">
                    pro-automatization.ru
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[18px] border border-[#3760E7]/15 bg-white/70 p-4">
                    <p className="text-h8 font-semibold text-[#0f1427]">
                      Проверьте ссылку
                    </p>
                    <p className="mt-2 text-h8 text-[#828B8D]">
                      Иногда помогает повторное открытие из письма или мессенджера.
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-[#3760E7]/15 bg-white/70 p-4">
                    <p className="text-h8 font-semibold text-[#0f1427]">
                      Посмотрите каталог
                    </p>
                    <p className="mt-2 text-h8 text-[#828B8D]">
                      Мы собрали все виджеты и интеграции в одном месте.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`pointer-events-none absolute -bottom-10 -right-6 h-28 w-28 rounded-full border border-[#3760E7]/30 bg-white/70 shadow-[0_12px_35px_rgba(55,96,231,0.2)] ${styles.float}`} />
          </div>
        </div>
      </div>
    </main>
  );
}
