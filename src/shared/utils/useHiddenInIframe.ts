"use client";

import { useState, useEffect } from "react";

export function useHiddenInIframe() {
  const [isIframe, setIsIframe] = useState<boolean>(false);

  useEffect(() => {
    try {
      setIsIframe(window.self !== window.top);
    } catch (e) {
      setIsIframe(true);
    }
  }, []);

  return {
    isIframe,
  };
}
