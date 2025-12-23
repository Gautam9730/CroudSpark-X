"use client";

import { useState } from "react";

export default function SupportForm() {
    const [form, setForm] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();
        alert("Support request submitted (mock)");
    };

    return (
        <form
            onSubmit={submit}
            className="bg-white p-8 rounded-xl shadow max-w-2xl mx-auto"
        >
            <h2 className="text-2xl font-bold mb-6">Contact Support</h2>

            <input
                className="w-full border px-4 py-2 mb-4"
                placeholder="Your email"
                required
            />

            <input
                className="w-full border px-4 py-2 mb-4"
                placeholder="Subject"
                required
            />

            <textarea
                className="w-full border px-4 py-2 mb-6"
                rows="4"
                placeholder="Describe your issue..."
                required
            />

            <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
                Submit Request
            </button>
        </form>
    );
}
