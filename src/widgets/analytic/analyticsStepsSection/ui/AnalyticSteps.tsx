import { ProcessItem } from "@/widgets/home/homeServiceSection/ui/ui/ProcessItem";

const steps = [
    { title: "Понимание проблем и возможностей", text: "Мы находим слабые места и точки роста." },
    { title: "Понимание проблем и возможностей", text: "Мы находим слабые места и точки роста." },
    { title: "Понимание проблем и возможностей", text: "Мы находим слабые места и точки роста." },
];

export default function AnalyticsSteps() {
    return (
        <ul>
            {steps.map((step, i) => (
                <ProcessItem
                    key={i}
                    direction="left"
                    alt={`${i + 1}`}
                    style={{ marginLeft: `${i * 150}px` }}
                    description={
                        <div className='flex items-center justify-between w-full'>
                            <h2 className='text-blue mr-8' style={{ fontSize: '64px' }}>{i + 1}</h2>
                            <div className='w-full'>
                                <h4 className="font-medium text-h4 text-blue">{step.title}</h4>
                                <p className="font-normal text-h5">{step.text}</p>
                            </div>
                        </div>
                    }
                />
            ))}
        </ul>
    );
}
