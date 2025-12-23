import ProtectedRoute from "@/components/auth/ProtectedRoute";
import StartCampaignForm from "@/components/campaign/StartCampaignForm";

export default function StartCampaignPage() {
    return (
        <ProtectedRoute>
            <section className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8">Start a Campaign</h1>
                <StartCampaignForm />
            </section>
        </ProtectedRoute>
    );
}
