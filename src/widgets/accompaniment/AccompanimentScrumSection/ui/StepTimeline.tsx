'use client'

import { motion } from 'framer-motion';
import {steps} from "@/widgets/widgets/widgetsStepsSection/ui/lib"; // Исправлено: используем framer-motion вместо motion/react

export default function StepTimeline() {
    // Длина линии рассчитывается на основе ширины и высоты контейнера
    const lineLength = Math.hypot(100, 100); // Процентные единицы для адаптивности

    return (
        <div className="timeline-container relative w-full h-[80vh] max-h-[628px] text-white mb-20">
            {/* Diagonal Line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transformOrigin: 'top left',
                    background: 'transparent',
                }}
            >
                <div
                    className="absolute bg-blue-500 h-[2px]"
                    style={{
                        width: `${lineLength}%`,
                        transform: `rotate(${Math.atan2(628, window.innerWidth) * (180 / Math.PI)}deg)`,
                        transformOrigin: 'top left',
                    }}
                />
            </motion.div>

            <ul>
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                    >
                        <h4 className="font-semibold text-lg mb-10 max-w-50 whitespace-pre-line">
                            {step.content}
                        </h4>
                        <div className="flex items-center justify-center mb-10 w-25 h-25 border-2 text-blue border-blue-500 rounded-full text-4xl font-bold bg-black z-10 mx-auto">
                            {index + 1}
                        </div>
                        <p className="text-sm text-gray-300 max-w-[200px]">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </ul>
        </div>
    );
}