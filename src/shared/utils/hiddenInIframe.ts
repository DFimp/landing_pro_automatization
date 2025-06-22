import { useState, useEffect } from "react";

export function hiddenInIframe() {
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
  }
}