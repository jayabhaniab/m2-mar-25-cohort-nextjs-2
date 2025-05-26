import "./globals.css";
import Link from "next/link";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <nav className="bg-blue-600 text-white p-4">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
          </ul>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}