// src/components/TaskProgress.jsx
"use client";

import { useState } from "react";

export default function TaskProgress() {
  const [progress, setProgress] = useState(0);

  function increaseProgress() {
    if (progress < 100) setProgress(progress + 10);
  }

  function decreaseProgress() {
    if (progress > 0) setProgress(progress - 10);
  }

  return (
    <div className="p-4 border rounded shadow text-center">
      <h2 className="text-lg font-bold">Task Progress 📊</h2>
      <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
        <div
          className="bg-blue-500 h-6 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2">{progress}% Completed</p>
      <button onClick={increaseProgress} className="bg-green-500 text-white px-4 py-2 rounded m-2">
        +10%
      </button>
      <button onClick={decreaseProgress} className="bg-red-500 text-white px-4 py-2 rounded">
        -10%
      </button>
    </div>
  );
}
