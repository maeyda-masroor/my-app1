// components/Counter.tsx
"use client"
import { useState, useEffect } from 'react';

interface CounterProps {
    start: number;
    end: number;
    duration: number;
    what:string
}

const Counter: React.FC<CounterProps> = ({ start, end, duration , what}) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let startCount = start;
        const endCount = end;
        const stepTime = Math.abs(Math.floor(duration / (endCount - startCount)));

        const timer = setInterval(() => {
            if (startCount < endCount) {
                startCount++;
                setCount(startCount);
            } else {
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer); // Cleanup interval on unmount
    }, [start, end, duration , what]);

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md w-32">
            <h1 className="text-4xl font-bold">{count}</h1>
            <p className="text-lg text-gray-500">{what}</p>
        </div>
    );
};

export default Counter;
