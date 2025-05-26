export default function ServerTime() {
    const time = new Date().toLocaleTimeString();

    return (
        <div className="p-4 border rounded">
            <h2 className="text-lg font-bold">Current Server Time</h2>
            <p>{time}</p>
        </div>
    )
}