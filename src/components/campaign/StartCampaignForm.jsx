"use client";

import { useState } from "react";

export default function StartCampaignForm() {
    const [form, setForm] = useState({
        title: "",
        category: "",
        goal: "",
        description: "",
        image: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Campaign data (mock):", form);
        alert("Campaign submitted (mock). Backend will be connected later.");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-6">

            <div>
                <label className="block text-sm font-medium mb-1">Campaign Title</label>
                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-4 py-2"
                    placeholder="Help build a school"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-4 py-2"
                >
                    <option value="">Select category</option>
                    <option>Education</option>
                    <option>Health</option>
                    <option>Environment</option>
                    <option>Startup</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Funding Goal (₹)</label>
                <input
                    type="number"
                    name="goal"
                    value={form.goal}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-4 py-2"
                    placeholder="100000"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Campaign Image URL</label>
                <input
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    className="w-full border rounded-md px-4 py-2"
                    placeholder="https://image-url"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="w-full border rounded-md px-4 py-2"
                    placeholder="Describe your campaign..."
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md"
            >
                Submit Campaign
            </button>
        </form>
    );
}
