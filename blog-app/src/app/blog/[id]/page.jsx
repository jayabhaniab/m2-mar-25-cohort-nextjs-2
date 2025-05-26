"use client";

import { useRouter } from "next/navigation";

const blogPosts = [
  { id: 1, title: "Introduction to Next.js", content: "Next.js is a React framework that provides server-side rendering and static site generation." },
  { id: 2, title: "Understanding Dynamic Routing", content: "Dynamic routing in Next.js allows creating pages based on URL parameters like /blog/[id]." },
  { id: 3, title: "Client vs. Server Components", content: "Next.js has Server Components by default but allows Client Components with 'use client'." }
]

export default function BlogPost({params}) {
    const router = useRouter();

    const post = blogPosts.find((p) => p.id === Number(params.id));
    console.log(post);

    if(!post) {
        return <h1 className="text-3xl font-bold text-red-600">Post Not Found!</h1>
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-blue-600">{post.title}</h1>
            <p className="text-gray-600 mt-2 max-w-lg">{post.content}</p>

            <button onClick={() => router.push("/")} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Back to Home</button>
        </div>
    )
}