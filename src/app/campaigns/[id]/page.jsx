import { campaigns } from "@/data/campaigns";
import CampaignDetails from "@/components/campaign/CampaignDetails";

export default async function CampaignDetailsPage({ params }) {
  const { id } = await params;
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
