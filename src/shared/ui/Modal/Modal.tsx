"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { lockBodyScroll } from "@/shared/utils/lockBodyScroll";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    return lockBodyScroll();
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[3000] flex items-center justify-center"
      style={{ zIndex: 2147483647 }}
    >
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
