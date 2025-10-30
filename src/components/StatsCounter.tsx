import React, { useEffect, useState } from "react";

interface CounterProps {
    value: number;
    label: string;
    suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, label, suffix = "+" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // 2 seconds
        const incrementTime = 20;
        const step = value / (duration / incrementTime);

        const counter = setInterval(() => {
            start += step;
            if (start >= value) {
                start = value;
                clearInterval(counter);
            }
            setCount(Math.floor(start));
        }, incrementTime);

        return () => clearInterval(counter);
    }, [value]);

    return (
        <div className="flex flex-col items-center justify-center text-blue-600 px-4 py-6">
            <h3 className="text-4xl sm:text-5xl md:text-5xl font-cisco font-thin mb-2 drop-shadow-lg">
                {count}
                {suffix}
            </h3>
            <p className="text-lg sm:text-xl font-cisco font-thin opacity-90">{label}</p>
        </div>
    );
};

const StatsCounter: React.FC = () => {
    const stats = [
        { value: 500, label: "Projects Completed" },
        { value: 200, label: "Global Clients" },
        { value: 13, label: "Years of Excellence" },
        { value: 99, label: "System Reliability", suffix: "%" },
    ];

    return (
        <section className="bg-blue-50 py-16 md:py-20">
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 text-center gap-8 px-4">
                {stats.map((item, index) => (
                    <Counter
                        key={index}
                        value={item.value}
                        label={item.label}
                        suffix={item.suffix}
                    />
                ))}
            </div>
        </section>
    );
};

export default StatsCounter;
