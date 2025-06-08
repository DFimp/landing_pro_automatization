import React from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  mask?: 'phone';
  error?: string;
  maxLength?: number;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  mask, 
  error,
  maxLength,
  ...props 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let inputValue = e.target.value;
    
    if (mask === 'phone') {
      // Удаляем все нецифровые символы
      const digitsOnly = inputValue.replace(/\D/g, '');
      
      // Ограничиваем до 11 цифр (российский номер) - это ключевая проверка
      const limitedDigits = digitsOnly.slice(0, 11);
      
      // Применяем маску +7 (___) ___-__-__
      if (limitedDigits.length > 0) {
        let workingDigits = limitedDigits;
        
        if (workingDigits.startsWith('8')) {
          workingDigits = '7' + workingDigits.slice(1);
        }
        if (!workingDigits.startsWith('7')) {
          workingDigits = '7' + workingDigits;
        }
        
        const match = workingDigits.match(/^7(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
        if (match) {
          inputValue = '+7';
          if (match[1]) inputValue += ` (${match[1]}`;
          if (match[1] && match[1].length === 3) inputValue += ')';
          if (match[2]) inputValue += ` ${match[2]}`;
          if (match[3]) inputValue += `-${match[3]}`;
          if (match[4]) inputValue += `-${match[4]}`;
        }
        
        // Дополнительная проверка: если получившаяся строка больше 18 символов, обрезаем
        if (inputValue.length > 18) {
          inputValue = inputValue.slice(0, 18);
        }
      } else {
        inputValue = '';
      }
    } else {
      // Проверяем maxLength для обычных полей
      if (maxLength && inputValue.length > maxLength) {
        inputValue = inputValue.slice(0, maxLength);
      }
    }
    
    onChange(inputValue);
  };

  // Дополнительная проверка на keyPress для предотвращения ввода лишних символов
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (mask === 'phone') {
      const currentDigits = value.replace(/\D/g, '');
      // Если уже 11 цифр и пытаемся ввести еще одну цифру
      if (currentDigits.length >= 11 && /\d/.test(e.key)) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {maxLength && !mask && (
          <span className="text-gray-400 text-xs ml-2">
            ({value.length}/{maxLength})
          </span>
        )}
      </label>
      <input
        className={`w-full px-4 py-3 border-2 rounded-lg text-base transition-all duration-200 focus:outline-none ${
          error 
            ? 'border-red-500 focus:border-red-500' 
            : 'border-gray-200 focus:border-blue-500'
        }`}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
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