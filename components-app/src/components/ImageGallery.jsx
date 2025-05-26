"use client";

import { useState } from "react";

const images = [
    { id: 1, category: "Nature", src: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, category: "Animals", src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, category: "Travel", src: "https://images.unsplash.com/photo-1739959272086-afc87e72776b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, category: "Food", src: "https://images.unsplash.com/photo-1618219877704-18411f61719d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

export default function ImageGallery() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredImages = selectedCategory === "All" ? images : images.filter((img) => img.category === selectedCategory);

    return (
        <div className="text-center">
            <h2 className="text-lg font-bold">Image Gallery</h2>
            <div className="space-x-2 mb-4">
                {["All", "Nature", "Animals", "Travel", "Food"].map((category) => (
                    <button key={category} onClick={() => setSelectedCategory(category)} className="bg-blue-500 text-white px-4 py-2 rounded m-2">{category}</button>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
                {filteredImages.map((img) => (
                    <img key={img.id} src={img.src} alt={img.category} className="rounded shadow mx-auto" />
                ))}
            </div>
        </div>
    )

}