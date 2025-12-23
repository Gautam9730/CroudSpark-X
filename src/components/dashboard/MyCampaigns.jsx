import { campaigns } from "@/data/campaigns";

export default function MyCampaigns() {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">My Campaigns</h2>

            <div className="bg-white rounded-xl shadow overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-100">
                    <tr>
                        <th className="p-4">Title</th>
                        <th className="p-4">Goal</th>
                        <th className="p-4">Raised</th>
                        <th className="p-4">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {campaigns.map((c) => (
                        <tr key={c.id} className="border-t">
                            <td className="p-4">{c.title}</td>
                            <td className="p-4">₹{c.goal.toLocaleString()}</td>
                            <td className="p-4">₹{c.raised.toLocaleString()}</td>
                            <td className="p-4">
                  <span className="text-green-600 font-medium">
                    Active
                  </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
