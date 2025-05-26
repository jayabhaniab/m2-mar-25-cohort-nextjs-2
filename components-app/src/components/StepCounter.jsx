// src/components/StepCounter.jsx
"use client";

import { useState } from "react";

export default function StepCounter() {
  const [steps, setSteps] = useState(0);

  return (
    <div className="p-4 border rounded shadow text-center">
      <h2 className="text-lg font-bold">Step Counter 🚶‍♂️</h2>
      <p className="mt-2">Steps: {steps}</p>
      <button
        onClick={() => setSteps(steps + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded m-2"
      >
        + Step
      </button>
      <button
        onClick={() => setSteps(steps > 0 ? steps - 1 : 0)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        - Step
      </button>
    </div>
  );
}
