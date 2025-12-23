export default function SupportCards() {
    const items = [
        {
            title: "Campaign Issues",
            desc: "Problems creating, editing, or approval delays.",
        },
        {
            title: "Payment & Donations",
            desc: "Donation failed, refund questions, or receipts.",
        },
        {
            title: "Account Help",
            desc: "Login, role upgrade, or profile issues.",
        },
    ];

    return (
        <div className="grid gap-6 md:grid-cols-3 mb-12">
            {items.map((i) => (
                <div
                    key={i.title}
                    className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
                >
                    <h3 className="font-semibold text-lg mb-2">{i.title}</h3>
                    <p className="text-slate-600 text-sm">{i.desc}</p>
                </div>
            ))}
        </div>
    );
}
