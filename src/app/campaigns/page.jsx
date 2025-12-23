import { campaigns } from "@/data/campaigns";
import CampaignCard from "@/components/campaign/CampaignCard";

export default function CampaignsPage() {
  return (
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">All Campaigns</h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {campaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </section>
  );
}
