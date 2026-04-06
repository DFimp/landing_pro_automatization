"use client";

import { useLayoutEffect } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function isInView(el: Element, amount: number) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || 0;
  const triggerLine = vh * (1 - clamp(amount, 0, 1));
  return rect.top <= triggerLine && rect.bottom >= 0;
}

export default function ScrollRevealObserver() {
  useLayoutEffect(() => {
    const observersByThreshold = new Map<number, IntersectionObserver>();

    const getObserver = (threshold: number) => {
      const key = clamp(threshold, 0, 1);
      const existing = observersByThreshold.get(key);
      if (existing) return existing;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const el = entry.target as HTMLElement;
            if (!el.dataset.sr) continue;

            const once = (el.dataset.srOnce ?? "true") !== "false";
            if (entry.isIntersecting) {
              el.dataset.srRevealed = "true";
              if (once) observer.unobserve(el);
            } else if (!once) {
              el.dataset.srRevealed = "false";
            }
          }
        },
        { threshold: key }
      );

      observersByThreshold.set(key, observer);
      return observer;
    };

    const observeOne = (el: HTMLElement) => {
      if (el.dataset.sr !== "true") return;
      if (el.dataset.srRevealed === "true") return;

      const amount = clamp(parseFloat(el.dataset.srAmount ?? "0.25"), 0, 1);
      if (isInView(el, amount)) {
        el.dataset.srRevealed = "true";
        return;
      }

      getObserver(amount).observe(el);
    };

    const observeAll = (root: ParentNode) => {
      const els = root.querySelectorAll?.<HTMLElement>('[data-sr="true"]');
      if (!els) return;
      els.forEach(observeOne);
    };

    observeAll(document);

    const mutationObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of Array.from(m.addedNodes)) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.matches?.('[data-sr="true"]')) {
            observeOne(node);
            continue;
          }

          if (node.querySelector?.('[data-sr="true"]')) {
            observeAll(node);
          }
        }
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observersByThreshold.forEach((o) => o.disconnect());
      observersByThreshold.clear();
    };
  }, []);

  return null;
}

