import { useState, useEffect } from "react";

export function detectMobile() {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  
  useEffect(() => {
    try {
      setIsMobileView(window.screen.width <= 600);
    } catch (e) {
      setIsMobileView(false);
    }
  }, []);

  return {
    isMobileView,
  }
}