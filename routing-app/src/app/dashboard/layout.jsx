export default function DashboardLayout({children}) {
    return (
        <div>
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-lg font-bold">Dashboard Layout</h1>
            </header>
            <div className="p-4">{children}</div>
        </div>
    )
}