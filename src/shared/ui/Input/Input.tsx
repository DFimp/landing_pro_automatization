import React from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  mask?: 'phone';
  error?: string;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  mask, 
  error, 
  ...props 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let inputValue = e.target.value;
    
    if (mask === 'phone') {
      // Удаляем все нецифровые символы
      inputValue = inputValue.replace(/\D/g, '');
      
      // Применяем маску +7 (___) ___-__-__
      if (inputValue.length > 0) {
        if (inputValue.startsWith('8')) {
          inputValue = '7' + inputValue.slice(1);
        }
        if (!inputValue.startsWith('7')) {
          inputValue = '7' + inputValue;
        }
        
        const match = inputValue.match(/^7(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
        if (match) {
          inputValue = '+7';
          if (match[1]) inputValue += ` (${match[1]}`;
          if (match[1] && match[1].length === 3) inputValue += ')';
          if (match[2]) inputValue += ` ${match[2]}`;
          if (match[3]) inputValue += `-${match[3]}`;
          if (match[4]) inputValue += `-${match[4]}`;
        }
      }
    }
    
    onChange(inputValue);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        className={`w-full px-4 py-3 border-2 rounded-lg text-base transition-all duration-200 focus:outline-none ${
          error 
            ? 'border-red-500 focus:border-red-500' 
            : 'border-gray-200 focus:border-blue-500'
        }`}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;