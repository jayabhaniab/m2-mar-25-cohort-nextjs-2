export default function NotFoundPage() {
    return (
        <div>
            <h1 className="text-5xl font-bold text-red-600">404</h1>
            <p className="text-xl text-gray-600 mt-2">Oops! Page Not Found</p>
            <a href="/" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Go to Home</a>
        </div>
    )
}