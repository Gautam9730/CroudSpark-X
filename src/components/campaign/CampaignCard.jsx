import Link from "next/link";

export default function CampaignCard({ campaign }) {
    const progress = Math.min(
        Math.round((campaign.raised / campaign.goal) * 100),
        100
    );

    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img
                src={campaign.image}
                alt={campaign.title}
                className="h-48 w-full object-cover"
            />

            <div className="p-4">
                <span className="text-sm text-blue-600">{campaign.category}</span>
                <h3 className="font-semibold text-lg mt-1 mb-2">
                    {campaign.title}
                </h3>

                <div className="h-2 bg-slate-200 rounded">
                    <div
                        className="h-2 bg-blue-600 rounded"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="flex justify-between text-sm text-slate-600 mt-2">
                    <span>₹{campaign.raised.toLocaleString()} raised</span>
                    <span>{progress}%</span>
                </div>

                <Link
                    href={`/campaigns/${campaign.id}`}
                    className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-md"
                >
                    View Campaign
                </Link>
            </div>
        </div>
    );
}
