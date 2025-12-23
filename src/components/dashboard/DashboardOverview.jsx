export default function DashboardOverview() {
    const stats = [
        { label: "Total Campaigns", value: 3 },
        { label: "Total Raised", value: "₹1,66,000" },
        { label: "Active Campaigns", value: 2 },
    ];

    return (
        <div className="grid gap-6 md:grid-cols-3 mb-12">
            {stats.map((s) => (
                <div
                    key={s.label}
                    className="bg-white p-6 rounded-xl shadow"
                >
                    <p className="text-sm text-slate-500">{s.label}</p>
                    <p className="text-2xl font-bold mt-2">{s.value}</p>
                </div>
            ))}
        </div>
    );
}
