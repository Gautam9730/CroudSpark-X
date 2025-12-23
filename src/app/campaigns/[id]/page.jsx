import CampaignDetails from "@/components/campaign/CampaignDetails";

const campaigns = [
  {
    id: "1",
    title: "Rural School for 300 Kids",
    description: "We aim to build a fully functional school in a remote village.",
    raised: 52000,
    goal: 100000,
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    id: "2",
    title: "Cancer Treatment Support",
    description: "Help a family afford urgent life-saving cancer treatment.",
    raised: 87000,
    goal: 150000,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },
];

export default async function CampaignDetailsPage({ params }) {
  const { id } = await params; // ✅ THIS IS THE FIX

  const campaign = campaigns.find((c) => c.id === id);

  if (!campaign) {
    return (
      <div className="text-center py-20 text-slate-600">
        Campaign not found
      </div>
    );
  }

  return <CampaignDetails campaign={campaign} />;
}
