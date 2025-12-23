import SupportForm from "@/components/support/SupportForm";
import SupportCards from "@/components/support/SupportCards";

export default function SupportPage() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4">Support Center</h1>
            <p className="text-slate-600 mb-10">
                We’re here to help you with campaigns, donations, or account issues.
            </p>

            <SupportCards />
            <SupportForm />
        </section>
    );
}
