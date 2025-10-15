"use state"
import { useState, useEffect } from 'react';

interface SpecialOfferPlanProps {
    setValue: (v:number) => void;
    value: number
}

export default function SpecialOfferPlanSelect({ value, setValue }: SpecialOfferPlanProps) {
  const tariffs = ['Базовый', 'Расширенный', 'Профессиональный'];
  const [selectedTariff, setSelectedTariff] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  

  const handleSelectTariff = (value: number) => {
    setSelectedTariff(value);
    setIsOpen(false)
  };

  useEffect(() => {
      setValue(selectedTariff)
    }, [selectedTariff])

  return (
    <div className="flex flex-col">
      <label className="sm:text-[20px] text-[16px] font-medium mb-[16px]">Тариф</label>
      

      <div
        className="relative cursor-pointer h-[44px] w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        onClick={() => {setIsOpen(!isOpen)}}
      >
        {tariffs[selectedTariff]}
        
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className=""
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        {isOpen && <div className='w-full absolute top-[44px] left-0 bg-white border border-gray-300 rounded-lg'>
            {tariffs.map((tariff, index) => (
            <div className="my-2 py-2 px-4 hover:bg-gray-100 cursor-pointer" key={index} onClick={() => handleSelectTariff(index)}>
              {tariff}
            </div>
          ))}
        </div>}
      </div>
    </div>
  );
}