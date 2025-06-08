import React, { useEffect, useState } from 'react';

interface CustomAlertProps {
  isVisible: boolean;
  type: 'success' | 'error';
  message: string;
  duration?: number; // в миллисекундах
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  isVisible,
  type,
  message,
  duration = 5000,
  onClose
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300); // Время анимации закрытия
  };

  if (!isVisible) return null;

  const alertStyles = {
    success: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: '✓'
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: '✕'
    }
  };

  const currentStyle = alertStyles[type];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`
          ${currentStyle.bg} ${currentStyle.border} ${currentStyle.text}
          border rounded-lg p-4 shadow-lg min-w-80 max-w-md
          transform transition-all duration-300 ease-in-out
          ${isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}
      >
        <div className="flex items-start gap-3">
          <div className={`
            flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-sm font-bold
            ${type === 'success' ? 'bg-blue-200' : 'bg-red-200'}
          `}>
            {currentStyle.icon}
          </div>
          
          <div className="flex-1">
            <p className="text-sm font-medium">
              {message}
            </p>
          </div>
          
          <button
            onClick={handleClose}
            className={`
              flex-shrink-0 text-lg leading-none hover:opacity-70 transition-opacity
              ${currentStyle.text}
            `}
          >
            ×
          </button>
        </div>
        
        {/* Прогресс бар */}
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
          <div
            className={`
              h-1 rounded-full transition-all ease-linear
              ${type === 'success' ? 'bg-blue-400' : 'bg-red-400'}
            `}
            style={{
              width: '100%',
              animation: `shrink ${duration}ms linear`
            }}
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default CustomAlert;