import Link from "next/link";

export default function CTA() {
    return (
        <section className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to bring your idea to life?
                </h2>
                <p className="text-slate-300 mb-8">
                    Launch your campaign today and get support from people worldwide.
                </p>
                <Link
                    href="/start-campaign"
                    className="bg-blue-600 px-6 py-3 rounded-md font-medium"
                >
                    Start a Campaign
                </Link>
            </div>
        </section>
    );
}
