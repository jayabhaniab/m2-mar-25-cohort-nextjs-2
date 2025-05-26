"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if(darkMode) {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)} className="bg-blue-500 text-white px-6 py-3 rounded text-lg">
            {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    )
}