"use client";

import { useState } from "react";

export default function UserInput() {
    const [name, setName] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded w-64 text-black"
            />
            <p className="mt-2 text-lg">Hello, {name || "Guest"}</p>
        </div>
    )
}