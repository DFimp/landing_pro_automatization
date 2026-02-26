"use client";

let lockCount = 0;

type SavedState = {
  scrollY: number;
  htmlOverflow: string;
  bodyOverflow: string;
  bodyPosition: string;
  bodyTop: string;
  bodyLeft: string;
  bodyRight: string;
  bodyWidth: string;
  bodyPaddingRight: string;
  prevModalOpen: string | undefined;
};

let saved: SavedState | null = null;

export function lockBodyScroll() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

  lockCount += 1;

  if (lockCount === 1) {
    const body = document.body;
    const html = document.documentElement;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const scrollY = window.scrollY;

    saved = {
      scrollY,
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
      bodyPaddingRight: body.style.paddingRight,
      prevModalOpen: body.dataset.modalOpen,
    };

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.dataset.modalOpen = "true";

    if (scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`;
    }
  }

  let released = false;
  return () => {
    if (released) return;
    released = true;

    if (lockCount === 0) return;
    lockCount -= 1;

    if (lockCount !== 0) return;
    if (!saved) return;

    const body = document.body;
    const html = document.documentElement;

    html.style.overflow = saved.htmlOverflow;
    body.style.overflow = saved.bodyOverflow;
    body.style.position = saved.bodyPosition;
    body.style.top = saved.bodyTop;
    body.style.left = saved.bodyLeft;
    body.style.right = saved.bodyRight;
    body.style.width = saved.bodyWidth;
    body.style.paddingRight = saved.bodyPaddingRight;

    if (typeof saved.prevModalOpen === "undefined") {
      delete body.dataset.modalOpen;
    } else {
      body.dataset.modalOpen = saved.prevModalOpen;
    }

    const prevScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, saved.scrollY);
    requestAnimationFrame(() => {
      html.style.scrollBehavior = prevScrollBehavior;
    });
    saved = null;
  };
}

