"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)
    }, []);

    return (
        <div>
            <h2 className="text-lg font-bold">Current Time</h2>
            <p>{time}</p>
        </div>
    )
}