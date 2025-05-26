"use client";

import { useState } from "react";

export default function UserSearch() {
    const [user, setUser] = useState(null);

    async function fetchUser() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        setUser(data);
    }

    return (
        <div>
            <button onClick={fetchUser} className="bg-green-500 text-white p-2">Get User</button>
            {user && <p>{user.name}</p>}
        </div>
    )
}