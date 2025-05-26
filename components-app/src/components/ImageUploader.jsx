// src/components/ImageUploader.jsx
"use client";

import { useState } from "react";

export default function ImageUploader() {
  const [image, setImage] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <div className="p-4 border rounded shadow text-center">
      <h2 className="text-lg font-bold">Image Uploader 📷</h2>
      <input type="file" onChange={handleImageChange} className="mt-2" />
      {image && <img src={image} alt="Preview" className="mt-4 w-40 h-40 rounded-full shadow" />}
    </div>
  );
}
