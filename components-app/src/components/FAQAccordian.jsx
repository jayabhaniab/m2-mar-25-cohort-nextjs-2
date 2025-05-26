"use client";

import { useState } from "react";

const faqs = [
    { id: 1, question: "What is Next.js?", answer: "Next.js is a React based framework which supports both SSR and CSR." },
    { id: 2, question: "What is the difference between Client Component and Server Component?", answer: "Server Components are fast and SEO-friendly, Client Components are interavtive." },
    { id: 3, question: "Does Next.js has API routes?", answer: "Yes, Next.js has API routes which can handle backend functionality." }
]

export default function FAQAccordian() {
    const [openIndex, setOpenIndex]= useState(null);

    return (
        <div>
            <h2 className="text-lg font-bold">FAQs</h2>
            {faqs.map((faq, index) => (
                <div key={faq.id} className="border-b py-2">
                    <button className="w-full text-left font-semibold" onClick={() => setOpenIndex(openIndex === index ? null : index)}>{faq.question}</button>
                    {openIndex === index && <p className="mt-2">{faq.answer}</p>}
                </div>

            ))}
        </div>
    )
}