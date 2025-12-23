import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import MyCampaigns from "@/components/dashboard/MyCampaigns";

export default function DashboardPage() {
    return (
        <ProtectedRoute>
            <section className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
                <DashboardOverview />
                <MyCampaigns />
            </section>
        </ProtectedRoute>
    );
}
