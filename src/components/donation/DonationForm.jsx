"use client";

import { useState } from "react";

export default function DonationForm({ campaignTitle }) {
    const [amount, setAmount] = useState("");
    const [name, setName] = useState("");
    const [anonymous, setAnonymous] = useState(false);

    const submitDonation = (e) => {
        e.preventDefault();

        const donationData = {
            campaignTitle,
            amount,
            donorName: anonymous ? "Anonymous" : name,
        };

        console.log("Donation (mock):", donationData);
        alert("Donation submitted (mock). Payment integration later.");
    };

    return (
        <form
            onSubmit={submitDonation}
            className="bg-white p-6 rounded-xl shadow space-y-4"
        >
            <h2 className="text-xl font-bold">Support this Campaign</h2>

            {/* Amount */}
            <div>
                <label className="block text-sm font-medium mb-1">
                    Donation Amount (₹)
                </label>
                <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border px-4 py-2 rounded-md"
                    placeholder="500"
                />
            </div>

            {/* Name */}
            {!anonymous && (
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Your Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border px-4 py-2 rounded-md"
                        placeholder="Your name"
                    />
                </div>
            )}

            {/* Anonymous */}
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={anonymous}
                    onChange={() => setAnonymous(!anonymous)}
                />
                <span className="text-sm">Donate anonymously</span>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md"
            >
                Donate Now
            </button>

            <p className="text-xs text-slate-500 text-center">
                Payments are secure. You’ll receive a confirmation later.
            </p>
        </form>
    );
}
