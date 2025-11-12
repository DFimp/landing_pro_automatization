"use client";

type CasesItem = {
  tag: string;
  title: string;
  text: string;
  author: string;
  avatar?: string;
};

const TOP: CasesItem[] = [
  {
    tag: "ОБРАЗОВАНИЕ",
    title: "Разработали уникальную систему расчёта зарплаты",
    text:
      "«Технолог Академия» - наш давний клиент, обучает и сертифицирует кадров в крупном бизнесе. За год выросли показатели на 37% на сотрудника. Построили систему расчёта зарплат и KPI, отчёты и интеграции - команда успевает продавать больше.",
    author: "Руководитель проекта - Дмитрий Марченко",
    avatar: "/Cases/pm-1.png",
  },
  {
    tag: "НЕДВИЖИМОСТЬ",
    title: "Получили лиды по 65₽ для аренды премиум-недвижимости в Сочи",
    text:
      "Внедрили WhatsApp-рассылки и сквозную аналитику. Снизили стоимость лида с 2000–3000 ₽ до 65 ₽, заполнили объекты на сезон. Запустили автоворонки, лид-формы и целевые рассылки.",
    author: "Руководитель проекта - Виолетта Полушина",
    avatar: "/Cases/pm-2.png",
  },
  {
    tag: "УСЛУГИ",
    title: "Перенесли базу из Битрикс24 в amoCRM",
    text:
      "Интекс - занимается оформлением ипотечных кредитов. Другая CRM была неудобной. Мигрировали базу, интегрировали ключевые сервисы и автоматизировали процессы.",
    author: "Руководитель проекта - Ренат Голиц",
    avatar: "/Cases/pm-3.png",
  },
];

const BOTTOM: CasesItem[] = [
  {
    tag: "СТРОИТЕЛЬСТВО",
    title:
      "Внедрение amoCRM в компанию по строительству и обслуживанию бассейнов и саун",
    text:
      "Настроили этапы воронок, регламенты, документы и интеграции. Систематизировали продажи, сократили сроки отгрузок и вывели ключевые метрики руководителю.",
    author: "Руководитель проекта - Ярослав Черный",
    avatar: "/Cases/pm-4.png",
  },
  {
    tag: "УСЛУГИ",
    title: "Как перейти с гугл-таблиц в amoCRM?",
    text:
      "Оцифровали процессы в CRM, настроили автозадачи и уведомления, обучили менеджеров. Организовали ежедневную рутину и контроль качества.",
    author: "Руководитель проекта - Ренат Голиц",
    avatar: "/Cases/pm-5.png",
  },
  {
    tag: "МЕДИЦИНА",
    title: "Убрали выездных врачей в amoCRM с трекингом на карте",
    text:
      "«Медиклиник» сократили время записи и число ошибок. Подключили виджеты и интеграции, внедрили сквозную аналитику, уведомления и отчёты.",
    author: "Руководитель проекта - Андрей Семёнов",
    avatar: "/Cases/pm-6.png",
  },
];

function AvatarDiv({ src }: { src?: string }) {
  return (
    <div
      className="rounded-full border border-white/60 flex-shrink-0"
      style={{
        width: 64,
        height: 64,
        backgroundImage: src
          ? `url(${src})`
          : "radial-gradient(circle at 50% 40%, #fff 0%, #e3ecff 60%, #c7d6ff 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-hidden
    />
  );
}

function splitAuthor(author: string) {
  const m = author.match(/^(.*?)\s*[-—–]\s*(.*)$/);
  if (!m) return { role: "Руководитель проекта", name: author };
  return { role: m[1] || "Руководитель проекта", name: m[2] || "" };
}

function CasesCard({ item }: { item: CasesItem }) {
  const { role, name } = splitAuthor(item.author);

  return (
    <article
      className="relative text-white"
      style={{
        width: 371,
        height: 675,
        background: "#3760E7",
        borderRadius: 60,
        padding: 44,
        paddingTop: 90,
        boxShadow: "0 32px 48px rgba(55, 96, 231, 0.25)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 38,
          left: 44,
          background: "#0F1427",
          color: "#fff",
          padding: "1px 10px",
          borderRadius: 12,
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: ".02em",
          border: "2px solid #0F1427",
        }}
      >
        {item.tag}
      </div>

      <h3
        style={{
          marginTop: 12,
          fontSize: 22,
          lineHeight: 1.25,
          fontWeight: 600,
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          marginTop: 10,
          fontSize: 16,
          lineHeight: 1.6,
          opacity: 0.98,
        }}
      >
        {item.text}
      </p>

      <div
        style={{
          position: "absolute",
          left: 44,
          right: 44,
          bottom: 36,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <AvatarDiv src={item.avatar} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 16,
              lineHeight: 1.2,
              opacity: 0.9,
              marginBottom: 6,
            }}
          >
            {role}
          </span>
          <span style={{ fontSize: 18, lineHeight: 1.2, fontWeight: 600 }}>
            {name}
          </span>
        </div>
      </div>
    </article>
  );
}

function CasesHero() {
  return (
    <section style={{ paddingTop: 24, paddingBottom: 8 }}>
      <div
        className="at-container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "16px",
          paddingRight: "16px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "start",
          gap: 32,
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              color: "#386bff",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.02,
              fontSize: 72,
            }}
          >
            Кейсы
          </h1>

          <div
            style={{
              marginTop: 6,
              color: "#386bff",
              fontWeight: 800,
              textTransform: "uppercase",
              fontSize: 28,
              lineHeight: 1.1,
            }}
          >
            внедрений amoCRM
          </div>

          <p
            style={{
              marginTop: 18,
              maxWidth: 560,
              color: "#4a4f65",
              fontSize: 14,
              lineHeight: 1.45,
            }}
          >
            Как amoCRM и облачные сервисы помогают увеличить показатели компании без
            дополнительных ресурсов. Отзывы и кейсы реальных клиентов.
          </p>
        </div>

        <div
          aria-label="логотипы клиентов"
          style={{
            display: "grid",
            gridAutoFlow: "column",
            alignItems: "center",
            gap: 28,
            filter: "grayscale(100%)",
            opacity: 0.9,
          }}
        >
          <img src="/Cases/logos/t.png" alt="T" style={{ height: 36, width: "auto" }} />
          <img src="/Cases/logos/consulting.png" alt="Consulting" style={{ height: 36, width: "auto" }} />
          <img src="/Cases/logos/rzd.png" alt="РЖД" style={{ height: 36, width: "auto" }} />
          <img src="/Cases/logos/smp.png" alt="СМП" style={{ height: 36, width: "auto" }} />
        </div>
      </div>
    </section>
  );
}

export default function Cases() {
  return (
    <main className="py-10 md:py-14">
      <CasesHero />

      <div
        className="at-container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <div className="relative mb-6" style={{ height: 28 }}>
          <span
            className="absolute left-0 right-0"
            style={{ top: 14, height: 2, background: "#0F1427" }}
          />
          <span
            className="absolute"
            style={{
              right: 0,
              top: 7,
              width: 12,
              height: 12,
              borderTop: "2px solid #0F1427",
              borderRight: "2px solid #0F1427",
              transform: "rotate(45deg)",
            }}
          />
        </div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 371px)",
            columnGap: 40,
            rowGap: 40,
            justifyContent: "space-between",
          }}
        >
          {TOP.map((item) => (
            <CasesCard key={item.title} item={item} />
          ))}
        </section>

        <div className="relative my-6" style={{ height: 28 }}>
          <span
            className="absolute left-0 right-0"
            style={{ top: 14, height: 2, background: "#0F1427" }}
          />
          <span
            className="absolute"
            style={{
              left: 0,
              top: 7,
              width: 12,
              height: 12,
              borderTop: "2px solid #0F1427",
              borderRight: "2px solid #0F1427",
              transform: "rotate(-135deg)",
            }}
          />
        </div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 371px)",
            columnGap: 40,
            rowGap: 40,
            justifyContent: "space-between",
          }}
        >
          {BOTTOM.map((item) => (
            <CasesCard key={item.title} item={item} />
          ))}
        </section>
      </div>
    </main>
  );
}
