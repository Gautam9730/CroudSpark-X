import DonationForm from "@/components/donation/DonationForm";


export default function CampaignDetails({ campaign }) {
    const progress = Math.min(
        Math.round((campaign.raised / campaign.goal) * 100),
        100
    );

    return (
        <section className="max-w-4xl mx-auto px-4 py-12">
            <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-72 object-cover rounded-xl mb-6"
            />

            <span className="text-blue-600 text-sm">{campaign.category}</span>
            <h1 className="text-3xl font-bold mt-2 mb-4">
                {campaign.title}
            </h1>

            <div className="h-3 bg-slate-200 rounded mb-2">
                <div
                    className="h-3 bg-blue-600 rounded"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="flex justify-between text-sm text-slate-600 mb-6">
                <span>₹{campaign.raised.toLocaleString()} raised</span>
                <span>{progress}% of ₹{campaign.goal.toLocaleString()}</span>
            </div>

            <p className="text-slate-700 mb-8">
                This campaign is raising funds to support an important cause.
                Your contribution helps bring this vision to life.
            </p>

            <DonationForm campaignTitle={campaign.title} />

        </section>
    );
}
