import ProtectedAdmin from "@/components/admin/ProtectedAdmin";
import AdminCampaignList from "@/components/admin/AdminCampaignList";

export default function AdminPage() {
    return (
        <ProtectedAdmin>
            <section className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
                <AdminCampaignList />
            </section>
        </ProtectedAdmin>
    );
}
