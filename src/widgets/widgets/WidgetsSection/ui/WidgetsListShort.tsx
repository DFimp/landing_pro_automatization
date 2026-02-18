import Link from "next/link";
import { WidgetsListItem } from "./WidgetsListItem";

const VARIANT_PATTERN = [2, 1, 1, 3, 4, 1] as const;
const getVariant = (index: number) => VARIANT_PATTERN[index % VARIANT_PATTERN.length];

export function WidgetsListShort() {
  const widgets = [
    {
      text: `Получайте мгновенные уведомления в Telegram
                и запускайте SalesBot одним нажатием. Полная автоматизация коммуникаций с клиентами прямо
                в мессенджере.`,
      title: `Телеграм уведомления для amoCRM`,
      link: "/widgets/telegram-notify",
    },
    {
      text: `Автоматическое распределение новых сделок между менеджерами по процентам, максимальному количеству или равными долями. Учет контактов, компаний и активности менеджеров.`,
      title: `Распределение сделок для amoCRM`,
      link: "/widgets/lead-distribution",
    },
    {
      text: `Автоматическое склеивание дублированных сделок
с сохранением всех важных данных. Экономьте время менеджеров и улучшайте качество вашей базы данных.`,
      title: `Дубли сделок (объединение дублей сделок) для amoCRM`,
      link: "/widgets/duplicate-leads",
    },
    {
      text: `Автоматическое склеивание дублированных контактов с умными алгоритмами поиска. Экономьте время менеджеров и улучшайте качество вашей базы контактов.`,
      title: `Дубли контактов (объединение дублей контактов) для amoCRM`,
      link: "/widgets/duplicate-contacts",
    },
  ];

  return (
    <div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-[40px]">
        {widgets.map((widget, index) => (
          <WidgetsListItem
            key={widget.link}
            link={widget.link}
            text={widget.text}
            title={widget.title}
            variant={getVariant(index)}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/widgets"
          className="
            inline-flex items-center justify-center
            px-8 py-4
            rounded-full
            bg-[#3F5FEA]
            text-white
            text-[16px] sm:text-[18px]
            font-semibold
            leading-none
            hover:bg-[#3554D6]
            transition-colors
          "
        >
          Посмотреть все виджеты
        </Link>
      </div>
    </div>
  );
}
