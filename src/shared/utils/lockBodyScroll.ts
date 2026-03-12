"use client";

let lockCount = 0;

type SavedState = {
  htmlOverflow: string;
  bodyOverflow: string;
  bodyTouchAction: string;
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

    saved = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyTouchAction: body.style.touchAction,
      bodyPaddingRight: body.style.paddingRight,
      prevModalOpen: body.dataset.modalOpen,
    };

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
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
    body.style.touchAction = saved.bodyTouchAction;
    body.style.paddingRight = saved.bodyPaddingRight;

    if (typeof saved.prevModalOpen === "undefined") {
      delete body.dataset.modalOpen;
    } else {
      body.dataset.modalOpen = saved.prevModalOpen;
    }

    saved = null;
  };
}

