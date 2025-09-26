'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { steps } from "@/widgets/accompaniment/AccompanimentScrumSection/ui/lib"
import { detectMobile } from '@/shared/utils/detectMobile'

export default function StepTimeline() {
    const positions = [20, 50, 80]; // x-координаты (%)
    const yPositions = [10, 35, 55]; // y-координаты (%)

    function topSwitch(width: number): number {
        switch (width) {
            case 1536:
                return 50;
            case 1707:
                return 15;
            case 1920:
                return -15;
            case 1396:
                return 85;
            case 1229:
                return 110
            default:
                return 50;
        }
    }

    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [top, setTop] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const refs = useRef<(HTMLLIElement | null)[]>([]);
    const [coordinates, setCoordinates] = useState<{ x: number, y: number }[]>([]);
    const { isMobileView } = detectMobile()

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.6", "end 0.4"]
    });

    // Трансформации для появления цифр
    const step1Opacity = useTransform(
        scrollYProgress,
        [0, 0.1], // Появляется сразу при начале скролла
        [0, 1]
    );
    const step2Opacity = useTransform(
        scrollYProgress,
        [0.25, 0.4], // Появляется при 1/3 длины линии
        [0, 1]
    );
    const step3Opacity = useTransform(
        scrollYProgress,
        [0.45, 0.7], // Появляется при 2/3 длины линии
        [0, 1]
    );

    const updateMeasurements = () => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const coords = refs.current.map((el) => {
            if (el) {
                const rect = el.getBoundingClientRect();
                return {
                    x: rect.left + rect.width / 2 - containerRect.left,
                    y: rect.top + rect.height / 2 - containerRect.top
                };
            }
            return { x: 0, y: 0 };
        });
        setCoordinates(coords);
        setContainerSize({ width: containerRect.width, height: containerRect.height });
    };

    useEffect(() => {
        updateMeasurements();
        window.addEventListener("resize", updateMeasurements);
        return () => window.removeEventListener("resize", updateMeasurements);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const width = window.innerWidth;
          const newTop = -0.2 * width + 370;
          setTop(newTop);
        }
    }, [window.innerWidth])

    const angle = useMemo(() => {
        if (coordinates.length >= 3) {
            const dx = coordinates[2].x - coordinates[0].x;
            const dy = coordinates[2].y - coordinates[0].y;
            return Math.atan2(dy, dx) * (180 / Math.PI);
        }
        return 0;
    }, [coordinates]);

    const lineLength = useMemo(() => {
        function normalizeForMobile(length: number) {
            return length > 400 ? 400 : length
        }
        const length = Math.hypot(containerSize.width, containerSize.height) + 40
        
        return isMobileView ? normalizeForMobile(length) : length;
    }, [containerSize]);

    const lineWidth = useTransform(
        scrollYProgress,
        [0, 1],
        [0, lineLength]
    );

    return (
        <div ref={containerRef} className="timeline-container relative w-full sm:h-[80vh] sm:max-h-[628px] text-white sm:mb-20 sm:mt-20 mt-10">
            <motion.div
                key={1 + Number(isMobileView) * 100}
                style={{
                    width: lineWidth,
                    rotate: isMobileView ? '90deg' : `${angle}deg`,
                    top: `${top}px`,
                    transformOrigin: 'top left',
                }}
                className='absolute bg-blue-500 h-[2px] sm:left-0 left-[62px]'
            />

            <ul className='relative sm:h-full container'>
                {/* Шаг 1 - появляется сразу */}
                <motion.li
                    key={2 + Number(isMobileView) * 100}
                    ref={(el) => { refs.current[0] = el }}
                    className='sm:absolute flex flex-col items-center'
                    style={isMobileView ? {} : {
                        left: `${positions[0]}%`,
                        top: `${yPositions[0]}%`,
                        transform: 'translateX(-50%)',
                        opacity: step1Opacity
                    }}
                >
                   {
                    !isMobileView ? (<>
                        <h4 className="font-semibold text-h5 mb-8 max-w-[240px]">{steps[0].title}</h4>
                        <div className="flex items-center justify-center mb-20 w-25 h-25 border-2 text-blue-500 border-blue-500 rounded-full font-bold bg-black z-10" style={{ fontSize: "64px" }}>
                            1
                        </div>
                        <p className="text-h6 font-normal text-gray-300 max-w-[270px]">{steps[0].description}</p>
                    </>):
                    (
                        <>
                            <div className='flex mb-[50px]'>
                                <div className="flex items-center justify-center mb-20 w-[60px] h-[60px] border-2 text-blue-500 border-blue-500 rounded-full font-bold bg-black z-10" style={{ fontSize: "24px" }}>
                                    1
                                </div>
                                <div className='mt-2 ml-5'>
                                <h4 className="font-semibold text-[14px] mb-5 max-w-[240px]">{steps[0].title}</h4>
                                <p className="text-[14px] font-normal text-gray-300 max-w-[294px] -ml-6">{steps[0].description}</p>
                                </div>
                            </div>
                        </>
                    )}
                </motion.li>

                {/* Шаг 2 - появляется при 1/3 */}
                <motion.li
                    key={3 + Number(isMobileView) * 100}
                    ref={(el) => { refs.current[1] = el }}
                    className='sm:absolute flex flex-col items-center'
                    style={isMobileView ? {} : {
                        left: `${positions[1]}%`,
                        top: `${yPositions[1]}%`,
                        transform: 'translateX(-50%)',
                        opacity: step2Opacity
                    }}
                >
                    {
                    !isMobileView ? (<>
                        <h4 className="font-semibold text-h5 mb-8 max-w-[240px]">{steps[1].title}</h4>
                        <div className="flex items-center justify-center mb-20 w-25 h-25 border-2 text-blue-500 border-blue-500 rounded-full font-bold bg-black z-10" style={{ fontSize: "64px" }}>
                            2
                        </div>
                        <p className="text-h6 font-normal text-gray-300 max-w-[270px]">{steps[1].description}</p>
                    </>):
                    (
                        <div className='flex mb-[50px]'>
                            <div className="flex items-center justify-center mb-20 w-[60px] h-[60px] border-2 text-blue-500 border-blue-500 rounded-full font-bold bg-black z-10" style={{ fontSize: "24px" }}>
                                2
                            </div>
                            <div className='mt-5 ml-5'>
                            <h4 className="font-semibold text-[14px] mb-5 max-w-[240px]">{steps[1].title}</h4>
                            <p className="text-[14px] font-normal text-gray-300 max-w-[294px] -ml-6">{steps[1].description}</p>
                            </div>
                        </div>
                    )}
                    
                </motion.li>

                {/* Шаг 3 - появляется при 2/3 */}
                <motion.li
                    key={4 + Number(isMobileView) * 100}
                    ref={(el) => { refs.current[2] = el }}
                    className='sm:absolute flex flex-col items-center'
                    style={isMobileView ? {} : {
                        left: `${positions[2]}%`,
                        top: `${yPositions[2]}%`,
                        transform: 'translateX(-50%)',
                        opacity: step3Opacity
                    }}
                >
                    {
                    !isMobileView ? (<>
                        <h4 className="font-semibold text-h5 mb-8 max-w-[240px]">{steps[2].title}</h4>
                        <div className="flex items-center justify-center mb-20 w-25 h-25 border-2 text-blue-500 border-blue-500 rounded-full font-bold bg-black z-10" style={{ fontSize: "64px" }}>
                            3
                        </div>
                        <p className="text-h6 font-normal text-gray-300 max-w-[270px]">{steps[2].description}</p>
                    </>):
                    (
                        <div className='flex mb-[50px]'>
                            <div className="flex items-center justify-center mb-20 w-[60px] h-[60px] border-2 text-blue-500 border-blue-500 rounded-full font-bold bg-black z-10" style={{ fontSize: "24px" }}>
                                3
                            </div>
                            <div className='mt-5 ml-5'>
                            <h4 className="font-semibold text-[14px] mb-5 max-w-[240px]">{steps[2].title}</h4>
                            <p className="font-normal text-[14px] text-gray-300 max-w-[294px] -ml-6">{steps[2].description}</p>
                            </div>
                        </div>
                    )}
                </motion.li>
            </ul>
        </div>
    );
}