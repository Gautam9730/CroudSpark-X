import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <div className="max-w-7xl mx-auto px-4 py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Power Ideas. Fund Dreams.
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    CroudSpark-X helps creators raise funds and supporters back ideas that matter.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        href="/campaigns"
                        className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium"
                    >
                        Explore Campaigns
                    </Link>
                    <Link
                        href="/start-campaign"
                        className="border border-white px-6 py-3 rounded-md font-medium"
                    >
                        Start a Campaign
                    </Link>
                </div>
            </div>
        </section>
    );
}
