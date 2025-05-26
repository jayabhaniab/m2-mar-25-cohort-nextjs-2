"use client"

import { useState } from "react"

export default function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div>
            <p>Current Mode: {darkMode ? "Dark" : "Light"}</p>
            <button onClick={() => setDarkMode(!darkMode)} className="bg-blue-500 text-white px-4 py-2">Toggle Theme</button>
        </div>
    )
}