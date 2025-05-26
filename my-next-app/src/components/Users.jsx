async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}

export default async function Users() {
    const users = await getUsers();

    return (
        <div>
            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}