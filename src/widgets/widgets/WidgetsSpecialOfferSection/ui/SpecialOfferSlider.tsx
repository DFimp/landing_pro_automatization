'use client'
import { useState, useEffect, useRef } from "react";
import { detectMobile } from "@/shared/utils/detectMobile";

interface SpecialOfferSliderProps {
    setValue: (v: 6 | 9 | 12 | 24) => void;
    value: number
}

export default function SpecialOfferSlider({ setValue, value }: SpecialOfferSliderProps) {
const { isMobileView } = detectMobile()
const availableValues = [6, 9, 12, 24];
const aviailableValuesLabels = [
    "+ 1 месяц",
    "+ 2 месяца",
    "+ 3 месяца",
    "+ 7 месяцев"
]
  const [currentValue, setCurrentValue] = useState(availableValues[1]); // Start with 50
  const [currentValueIndex, setValueIndex] = useState(1)
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const getClosestValue = (percentage) => {
    return availableValues.reduce((prev, curr, index) => 
      Math.abs(index * 25 - percentage) < Math.abs((index - 1) * 25 - percentage) ? curr : prev
    );
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateValue(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging && sliderRef.current) {
      updateValue(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateValue = (e) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    let clickX = e.clientX - rect.left;
    

    clickX = Math.max(0, Math.min(clickX, rect.width));
    const percentage = (clickX / rect.width) * 100;
    const targetValue = getClosestValue(percentage);
    setCurrentValue(targetValue);
    const targetValueIndex = availableValues.indexOf(targetValue)
    console.log(targetValueIndex)
    setValueIndex(targetValueIndex)
  };

  const handleClick = (e) => {
    if (!isDragging) {
      updateValue(e);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    setValue(currentValue)
  }, [currentValue])

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  return (
        <div className="mb-8 w-full">
          
          <div 
            ref={sliderRef}
            className="relative h-[5px] bg-[#AFC1FF] rounded-full cursor-pointer"
            onMouseDown={handleMouseDown}
            onClick={handleClick}
          >
            <div 
              className="z-2 absolute top-0 left-0 h-full bg-[#3760E7] rounded-full transition-all duration-150 ease-out"
              style={isMobileView ? { width: `${33 * currentValueIndex}%` } : { width: `${25 * currentValueIndex}%` }}
            />
            

            <div 
              className="absolute top-1/2 transform -translate-y-1/2 sm:w-6 sm:h-6 w-3 h-3 bg-[#3760E7] border-3 border-[#3760E7] rounded-full shadow-lg cursor-grab active:cursor-grabbing transition-all duration-150 ease-out hover:scale-105"
              style={isMobileView ? { left: `calc(${33 * currentValueIndex}% - 8px)` } : { left: `calc(${25 * currentValueIndex}% - 8px)` }}
            />
            
            {availableValues.map((value, index) => (
            
              <div
                key={index}
                className={`absolute top-1/2 transform flex flex-col items-center`}
                style={isMobileView ? { left: `calc(${33 * index}% - 8px)` } : { left: `calc(${25 * index}% - 32px)` }}
              >
                <div className={`w-[3px] h-[18px] transition-colors duration-150 -translate-y-1/2 ${
                  currentValue >= value ? 'bg-[#3760E7]' : 'bg-[#AFC1FF]'
                }`}></div>
                <div className="mt-[13px] mb-[8px] leading-[1]">{value}</div>
                { isMobileView ?
                    <></>
                    : <div className="text-[#3760E7]">{aviailableValuesLabels[index]}</div>}
                </div>

            ))}
          </div>
        </div>
  );
}