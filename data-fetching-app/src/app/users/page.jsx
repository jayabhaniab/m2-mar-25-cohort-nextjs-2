export default async function UsersPage() {
    console.log("Fetching data on every requests...")
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store"
    });

    const users = await res.json();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="mb-2">{user.name}</li>
                ))}
            </ul>
        </div>
    )
}