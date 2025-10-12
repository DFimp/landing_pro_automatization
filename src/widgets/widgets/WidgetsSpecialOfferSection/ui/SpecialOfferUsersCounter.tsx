"use client"

import { useState } from 'react';

export default function SpecialOfferUsersCounter() {
    const [count, setCount] = useState(10);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col">

      <label className="sm:text-[20px] text-[16px] font-medium mb-[16px]">Пользователи</label>
      

      <div className="h-[44px] flex items-center justify-between bg-white rounded-lg border border-gray-300 px-4 py-2">

        <button
          onClick={handleDecrement}
          className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
          disabled={count <= 0}
        >
          <span className="text-xl font-bold">−</span>
        </button>
        

        <span className="text-xl font-semibold text-gray-800 min-w-[2rem] text-center">
          {count}
        </span>
        

        <button
          onClick={handleIncrement}
          className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
        >
          <span className="text-xl font-bold">+</span>
        </button>
      </div>
    </div>
  );
}