import React from 'react';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ 
  size = 'medium', 
  color = '#3B82F6',
  className = '' 
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  return (
    <div className={`inline-block ${className}`}>
      <div 
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        style={{ borderColor: `${color} transparent ${color} ${color}` }}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Загрузка...</span>
      </div>
    </div>
  );
};

export default Loader;