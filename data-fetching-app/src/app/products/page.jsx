export default async function ProductsPage() {
    console.log("Fetching data after every 10 seconds...")
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 10 }
    });

    const products = await res.json();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Latest products</h1>

            <ul>
                {products.slice(0, 5).map((product) => (
                    <li key={product.id} className="mb-2">{product.title}</li>
                ))}
            </ul>
        </div>
    )
}