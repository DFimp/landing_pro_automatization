"use client";

import { useEffect, useState } from "react";

interface SpecialOfferUsersCountProps {
  setValue: (v: number) => void;
  value: number;
}

export default function SpecialOfferUsersCounter({
  setValue,
  value,
}: SpecialOfferUsersCountProps) {
  const [count, setCount] = useState(10);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setValue(count);
  }, [count, setValue]);

  useEffect(() => {
    setCount(value);
  }, [value]);

  return (
    <div className="flex flex-col">
      <label className="mb-[8px] text-[14px] font-medium sm:text-[18px]">Пользователи</label>

      <div className="flex h-[38px] items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 sm:h-[42px]">
        <button
          onClick={handleDecrement}
          className="flex h-6 w-6 items-center justify-center rounded-md text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800"
          disabled={count <= 0}
        >
          <span className="text-xl font-bold">−</span>
        </button>

        <span className="min-w-[2rem] text-center text-[16px] font-semibold text-gray-800 sm:text-xl">
          {count}
        </span>

        <button
          onClick={handleIncrement}
          className="flex h-6 w-6 items-center justify-center rounded-md text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800"
        >
          <span className="text-xl font-bold">+</span>
        </button>
      </div>
    </div>
  );
}
