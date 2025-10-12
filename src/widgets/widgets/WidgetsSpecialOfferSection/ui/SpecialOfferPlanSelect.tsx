"use state"
import { useState } from 'react';

export default function SpecialOfferPlanSelect() {
  const [selectedTariff, setSelectedTariff] = useState('Basic');
  const tariffs = ['Basic', 'Standard', 'Premium', 'Enterprise'];

  const handleSelectChange = (event) => {
    setSelectedTariff(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="sm:text-[20px] text-[16px] font-medium mb-[16px]">Тариф</label>
      

      <div className="relative">
        <select
          value={selectedTariff}
          onChange={handleSelectChange}
          className="h-[44px] w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
        >
          {tariffs.map((tariff) => (
            <option key={tariff} value={tariff}>
              {tariff}
            </option>
          ))}
        </select>
        
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
      </div>
    </div>
  );
}