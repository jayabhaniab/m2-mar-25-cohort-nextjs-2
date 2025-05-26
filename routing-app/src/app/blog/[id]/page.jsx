export default function Blogpost({params}) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-blue-600">
                Blog Post: {params.id}
            </h1>
            <p className="text-gray-600 mt-2">This is blog post number {params.id}</p>
        </div>
    )
}


