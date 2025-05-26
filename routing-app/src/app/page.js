// export default function HomePage() {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <h1 className="text-4xl font-bold text-blue-600">Welcome to Home Page</h1>
//     </div>
//   )
// }



// router.push()

// "use client";
// import { useRouter } from "next/navigation";

// export default function HomePage() {
//   const router = useRouter();

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-4xl font-bold text-blue-600">Home Page</h1>
//       <button onClick={() => router.push("/about")} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Go to About</button>
//     </div>
//   )
// }




// rounter.replace()
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/dashboard");
    }, 3000);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-600">Redirecting to Dashboard...</h1>
    </div>
  )
}