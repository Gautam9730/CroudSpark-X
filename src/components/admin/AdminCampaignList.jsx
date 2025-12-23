import { campaigns } from "@/data/campaigns";

export default function AdminCampaignList() {
    return (
        <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full">
                <thead className="bg-slate-100">
                <tr>
                    <th className="p-4 text-left">Title</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Actions</th>
                </tr>
                </thead>
                <tbody>
                {campaigns.map((c) => (
                    <tr key={c.id} className="border-t">
                        <td className="p-4">{c.title}</td>
                        <td className="p-4 text-yellow-600">PENDING</td>
                        <td className="p-4 flex gap-2">
                            <button className="bg-green-600 text-white px-3 py-1 rounded">
                                Approve
                            </button>
                            <button className="bg-red-600 text-white px-3 py-1 rounded">
                                Reject
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
