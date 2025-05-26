export default async function PostsPage() {
    console.log("Fetching data only once at build time...")

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "force-cache"
    });

    const posts = await res.json();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
            <ul>
                {posts.slice(0, 10).map((post) => (
                    <li key={post.id} className="mb-2">{post.title}</li>
                ))}
            </ul>
        </div>
    )

}