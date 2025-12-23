import CampaignCard from "@/components/campaign/CampaignCard";

const campaigns = [
  {
    id: 1,
    title: "Rural School for 300 Kids",
    description: "Help us build a school in a remote village.",
    raised: 52000,
    goal: 100000,
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    id: 2,
    title: "Cancer Treatment Support",
    description: "Urgent medical funds for life-saving treatment.",
    raised: 87000,
    goal: 150000,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },
  {
    id: 3,
    title: "Solar Startup Initiative",
    description: "Affordable solar power for small homes.",
    raised: 120000,
    goal: 200000,
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
];

export default function CampaignsPage() {
  return (
    <section className="px-10 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Explore Campaigns
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((c) => (
          <CampaignCard key={c.id} campaign={c} />
        ))}
      </div>
    </section>
  );
}
