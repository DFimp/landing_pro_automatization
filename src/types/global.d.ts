// Глобальные типы для аналитики
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    ym?: (...args: unknown[]) => void;
  }
}

export {};
