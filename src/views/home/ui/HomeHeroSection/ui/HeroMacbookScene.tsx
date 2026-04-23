import { useId } from "react";
import styles from "./HeroMacbookScene.module.css";

type DealLane = {
  labelLines: string[];
  count: string;
  color: string;
  x: number;
  width: number;
  cards: Array<{
    y: number;
    accent: string;
  }>;
};

type SettingsItem = {
  title: string;
  lineOne: number;
  lineTwo: number;
  y: number;
  active: boolean;
  animated?: boolean;
};

type LaneCardProps = {
  x: number;
  y: number;
  accent: string;
  width: number;
};

const copy = {
  dealsPage: "ВОРОНКА",
  addDeal: "+ СДЕЛКА",
  settingsPage: "НАСТРОЙКИ",
  brand: "amoCRM",
  conversion: "КОНВЕРСИЯ",
};

const dealLanes: DealLane[] = [
  {
    labelLines: ["ПЕРВИЧНЫЙ", "КОНТАКТ"],
    count: "4 сделки",
    color: "#7AA6FF",
    x: 196,
    width: 96,
    cards: [
      { y: 156, accent: "#4E7CFF" },
      { y: 222, accent: "#6E95FF" },
      { y: 288, accent: "#88ABFF" },
    ],
  },
  {
    labelLines: ["ПЕРЕГОВОРЫ"],
    count: "2 сделки",
    color: "#F5B339",
    x: 304,
    width: 96,
    cards: [
      { y: 156, accent: "#F5B339" },
      { y: 222, accent: "#F7C569" },
    ],
  },
  {
    labelLines: ["СОГЛАСОВАНИЕ"],
    count: "1 сделка",
    color: "#FF8E77",
    x: 412,
    width: 96,
    cards: [{ y: 222, accent: "#FF8E77" }],
  },
  {
    labelLines: ["СДЕЛКА"],
    count: "1 сделка",
    color: "#10B981",
    x: 520,
    width: 96,
    cards: [{ y: 156, accent: "#10B981" }],
  },
];

const settingsItems: SettingsItem[] = [
  {
    title: "Уведомления Telegram",
    lineOne: 156,
    lineTwo: 138,
    y: 110,
    active: false,
    animated: true,
  },
  {
    title: "Распределение сделок",
    lineOne: 164,
    lineTwo: 124,
    y: 188,
    active: true,
  },
  {
    title: "Дубликаты сделок",
    lineOne: 142,
    lineTwo: 118,
    y: 266,
    active: true,
  },
];

function LaneCard({ x, y, accent, width }: LaneCardProps) {
  const height = 52;
  const accentX = width - 20;

  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={width} height={height} rx="12" fill="#FFFFFF" stroke="#D8E4FA" strokeWidth="1.2" />
      <rect x="12" y="12" width="34" height="6" rx="3" fill="#CBD9F6" />
      <rect x="12" y="24" width="50" height="4" rx="2" fill="#E6EEFF" />
      <rect x="12" y="33" width="38" height="4" rx="2" fill="#EEF3FF" />
      <circle cx={accentX} cy="31" r="8" fill={accent} fillOpacity="0.9" />
    </g>
  );
}

export default function HeroMacbookScene() {
  const id = useId().replace(/:/g, "");
  const shellGradientId = `${id}-shell`;
  const shellEdgeGradientId = `${id}-shell-edge`;
  const baseGradientId = `${id}-base`;
  const screenGradientId = `${id}-screen`;
  const glowGradientId = `${id}-glow`;
  const laptopShadowId = `${id}-laptop-shadow`;
  const screenClipId = `${id}-screen-clip`;

  return (
    <div className={styles.frame} aria-hidden="true">
      <svg
        viewBox="0 0 760 560"
        className={styles.svg}
        role="presentation"
        focusable="false"
      >
        <defs>
          <linearGradient id={shellGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#111723" />
            <stop offset="100%" stopColor="#05070D" />
          </linearGradient>

          <linearGradient id={shellEdgeGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CDD5E0" />
            <stop offset="16%" stopColor="#F9FBFF" />
            <stop offset="46%" stopColor="#AAB4C8" />
            <stop offset="80%" stopColor="#F7FAFF" />
            <stop offset="100%" stopColor="#9AA6BA" />
          </linearGradient>

          <linearGradient id={baseGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E7ECF3" />
            <stop offset="26%" stopColor="#BBC4D1" />
            <stop offset="56%" stopColor="#F8FBFF" />
            <stop offset="100%" stopColor="#9AA7BB" />
          </linearGradient>

          <linearGradient id={screenGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAFCFF" />
            <stop offset="58%" stopColor="#F0F5FF" />
            <stop offset="100%" stopColor="#E1EBFF" />
          </linearGradient>

          <radialGradient id={glowGradientId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6C93FF" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#6C93FF" stopOpacity="0" />
          </radialGradient>

          <filter id={laptopShadowId} x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow
              dx="0"
              dy="28"
              stdDeviation="26"
              floodColor="#8AA9FF"
              floodOpacity="0.22"
            />
          </filter>

          <clipPath id={screenClipId}>
            <rect x="102" y="38" width="556" height="352" rx="20" />
          </clipPath>
        </defs>

        <ellipse
          className={styles.floorGlow}
          cx="384"
          cy="486"
          rx="212"
          ry="36"
          fill={`url(#${glowGradientId})`}
        />

        <g className={styles.laptop}>
          <g filter={`url(#${laptopShadowId})`}>
            <rect x="80" y="14" width="600" height="396" rx="28" fill={`url(#${shellGradientId})`} />
            <rect
              x="84"
              y="18"
              width="592"
              height="388"
              rx="26"
              fill="none"
              stroke={`url(#${shellEdgeGradientId})`}
              strokeWidth="1.5"
              strokeOpacity="0.55"
            />
            <rect x="100" y="34" width="560" height="360" rx="18" fill="#050811" />
            <rect x="102" y="38" width="556" height="352" rx="20" fill="#24384A" />
            <circle cx="380" cy="24" r="4.5" fill="#0B0E15" />
            <circle cx="380" cy="24" r="1.4" fill="#2A3241" />
            <path
              className={styles.screenSheen}
              d="M470 16 L640 16 C664 16 680 32 680 56 L680 248 Z"
              fill="#FFFFFF"
              fillOpacity="0.08"
            />
          </g>

          <g clipPath={`url(#${screenClipId})`}>
            <rect x="100" y="36" width="560" height="356" fill="#24384A" />

            <rect x="96" y="34" width="68" height="360" fill="#24384A" />
            <rect x="164" y="38" width="494" height="352" fill={`url(#${screenGradientId})`} />
            <rect x="164" y="38" width="494" height="46" fill="#FFFFFF" fillOpacity="0.98" />
            <line x1="164" y1="84" x2="658" y2="84" stroke="#DCE5F7" strokeWidth="1" />

            <circle cx="124" cy="63" r="4" fill="#7B8DA3" />
            <circle cx="136" cy="63" r="4" fill="#7B8DA3" />

            <g>
              <rect x="121" y="100" width="14" height="14" rx="4.5" fill="#5F85FF">
                <animate
                  attributeName="fill"
                  values="#5F85FF;#5F85FF;#93AEDF;#93AEDF;#5F85FF;#5F85FF"
                  keyTimes="0;0.3;0.38;0.78;0.86;1"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect x="121" y="138" width="14" height="14" rx="4.5" fill="#93AEDF">
                <animate
                  attributeName="fill"
                  values="#93AEDF;#93AEDF;#93AEDF;#93AEDF;#93AEDF;#93AEDF"
                  keyTimes="0;0.3;0.38;0.78;0.86;1"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect x="121" y="176" width="14" height="14" rx="4.5" fill="#93AEDF" />
              <rect x="121" y="214" width="14" height="14" rx="4.5" fill="#93AEDF" />
              <rect x="121" y="252" width="14" height="14" rx="4.5" fill="#93AEDF" />
              <rect x="121" y="290" width="14" height="14" rx="4.5" fill="#93AEDF" />
              <rect x="121" y="328" width="14" height="14" rx="4.5" fill="#93AEDF">
                <animate
                  attributeName="fill"
                  values="#93AEDF;#93AEDF;#5F85FF;#5F85FF;#93AEDF;#93AEDF"
                  keyTimes="0;0.3;0.38;0.78;0.86;1"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>

            <g className={styles.dealsView}>
              <text
                x="180"
                y="67"
                fill="#1C2435"
                fontSize="13"
                fontWeight="700"
                letterSpacing="0.06em"
                fontFamily="inherit"
              >
                {copy.dealsPage}
              </text>
              <rect x="560" y="51" width="74" height="22" rx="11" fill="#3167E8" />
              <text x="579" y="66" fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="inherit">
                <tspan x="597" textAnchor="middle">
                  {copy.addDeal}
                </tspan>
              </text>

              {dealLanes.map((lane) => (
                <g key={lane.labelLines.join("-")}>
                  <text
                    x={lane.x + lane.width / 2}
                    y={lane.labelLines.length > 1 ? "108" : "116"}
                    fill="#5D6F98"
                    fontSize="8"
                    fontWeight="700"
                    letterSpacing="0.04em"
                    fontFamily="inherit"
                    textAnchor="middle"
                  >
                    {lane.labelLines.map((line, index) => (
                      <tspan
                        key={`${line}-${index}`}
                        x={lane.x + lane.width / 2}
                        dy={index === 0 ? 0 : 10}
                      >
                        {line}
                      </tspan>
                    ))}
                  </text>
                  <text
                    x={lane.x + lane.width / 2}
                    y="136"
                    fill="#94A6CB"
                    fontSize="8"
                    fontWeight="600"
                    fontFamily="inherit"
                    textAnchor="middle"
                  >
                    {lane.count}
                  </text>
                  <line
                    x1={lane.x}
                    y1="142"
                    x2={lane.x + lane.width}
                    y2="142"
                    stroke={lane.color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {lane.cards.map((card, index) => (
                    <LaneCard
                      key={`${lane.labelLines.join("-")}-${card.y}-${index}`}
                      x={lane.x}
                      y={card.y}
                      accent={card.accent}
                      width={lane.width}
                    />
                  ))}
                </g>
              ))}

              <g className={styles.dealsPulseCard}>
                <rect
                  x="520"
                  y="156"
                  width="96"
                  height="52"
                  rx="12"
                  fill="#FFFFFF"
                  stroke="#10B981"
                  strokeWidth="1.3"
                />
                <rect x="532" y="168" width="34" height="6" rx="3" fill="#50CFA0" />
                <rect x="532" y="180" width="50" height="4" rx="2" fill="#E6EEFF" />
                <rect x="532" y="189" width="38" height="4" rx="2" fill="#EEF4FF" />
                <circle cx="596" cy="187" r="8" fill="#10B981" />
              </g>

            </g>

            <g className={styles.settingsView}>
              <text
                x="180"
                y="67"
                fill="#1C2435"
                fontSize="13"
                fontWeight="700"
                letterSpacing="0.06em"
                fontFamily="inherit"
              >
                {copy.settingsPage}
              </text>

              {settingsItems.map((item) => {
                const switchY = item.y + 18;
                const knobStart = item.animated ? 558 : item.active ? 578 : 558;
                const switchFill = item.active ? "#3167E8" : "#D7E4FF";

                return (
                  <g key={item.title}>
                    <rect
                      x="184"
                      y={item.y}
                      width="430"
                      height="64"
                      rx="16"
                      fill="#FFFFFF"
                      stroke="#DCE5F7"
                    />
                    <text
                      x="204"
                      y={item.y + 25}
                      fill="#24324B"
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="inherit"
                    >
                      {item.title}
                    </text>
                    <rect
                      x="204"
                      y={item.y + 34}
                      width={item.lineOne}
                      height="5"
                      rx="2.5"
                      fill="#DCE7FB"
                    />
                    <rect
                      x="204"
                      y={item.y + 44}
                      width={item.lineTwo}
                      height="5"
                      rx="2.5"
                      fill="#EDF3FF"
                    />
                    <rect x="544" y={switchY} width="48" height="24" rx="12" fill={switchFill}>
                      {item.animated ? (
                        <animate
                          attributeName="fill"
                          values="#D7E4FF;#D7E4FF;#3167E8;#3167E8;#D7E4FF"
                          keyTimes="0;0.58;0.64;0.74;1"
                          dur="8s"
                          repeatCount="indefinite"
                        />
                      ) : null}
                    </rect>
                    <circle cx={knobStart} cy={switchY + 12} r="9" fill="#FFFFFF">
                      {item.animated ? (
                        <animate
                          attributeName="cx"
                          values="558;558;578;578;558"
                          keyTimes="0;0.58;0.64;0.74;1"
                          dur="8s"
                          repeatCount="indefinite"
                        />
                      ) : null}
                    </circle>
                  </g>
                );
              })}
            </g>

            <g className={styles.cursor}>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="520 226;132 334;132 334;564 140;564 140;132 106;132 106;520 226"
                keyTimes="0;0.22;0.3;0.54;0.64;0.8;0.88;1"
                dur="8s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.34 0 0.18 1;0.34 0 0.18 1;0.34 0 0.18 1;0.34 0 0.18 1;0.34 0 0.18 1;0.34 0 0.18 1;0.34 0 0.18 1"
              />
              <path
                d="M3 2 L3 30 L10 23 L15 34 L20 31.5 L15.2 20.8 L26 20.8 Z"
                fill="#FFFFFF"
                stroke="#17315B"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </g>

            <circle cx="132" cy="335" r="0" fill="none" stroke="#3167E8" strokeWidth="2" opacity="0">
              <animate
                attributeName="r"
                values="0;0;0;14;22;0;0"
                keyTimes="0;0.24;0.26;0.3;0.34;0.38;1"
                dur="8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0;0.9;0.7;0;0;0"
                keyTimes="0;0.26;0.28;0.32;0.36;0.38;1"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="568" cy="140" r="0" fill="none" stroke="#3167E8" strokeWidth="2" opacity="0">
              <animate
                attributeName="r"
                values="0;0;0;14;22;0;0"
                keyTimes="0;0.56;0.58;0.62;0.66;0.7;1"
                dur="8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0;0.9;0.7;0;0;0"
                keyTimes="0;0.58;0.6;0.64;0.68;0.7;1"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="132" cy="107" r="0" fill="none" stroke="#3167E8" strokeWidth="2" opacity="0">
              <animate
                attributeName="r"
                values="0;0;0;14;22;0;0"
                keyTimes="0;0.84;0.86;0.9;0.94;0.98;1"
                dur="8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0;0.9;0.7;0;0;0"
                keyTimes="0;0.86;0.88;0.92;0.96;0.98;1"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>

          </g>

          <g>
            <path
              d="M54 410 H706 C703 430 678 445 632 448 H128 C83 445 57 430 54 410 Z"
              fill={`url(#${baseGradientId})`}
            />
            <rect x="48" y="406" width="664" height="18" rx="9" fill={`url(#${baseGradientId})`} />
            <rect x="313" y="414" width="134" height="11" rx="5.5" fill="#BCC6D6" />
            <path d="M48 414 H712" stroke="#F8FBFF" strokeOpacity="0.8" strokeWidth="1.4" />
          </g>
        </g>
      </svg>
    </div>
  );
}
