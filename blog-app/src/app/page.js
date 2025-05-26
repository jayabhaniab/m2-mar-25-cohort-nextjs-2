import Link from "next/link";

const blogPosts = [
  { id: 1, title: "Introduction to Next.js" },
  { id: 2, title: "Understanding Dynamic Routing" },
  { id: 3, title: "Client vs. Server Components" }
]

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">My Blog</h1>
      <ul className="space-y-2">
        {blogPosts.map((post) => (
          <li key={post.id}><Link href={`/blog/${post.id}`} className="text-lg text-green-600 hover:underline">{post.title}</Link></li>
        ))}
      </ul>
    </div>
  )
}