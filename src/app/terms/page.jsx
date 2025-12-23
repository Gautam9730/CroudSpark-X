export default function TermsPage() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

            <div className="space-y-8 text-slate-700 leading-relaxed">
                <Section
                    title="1. Platform Usage"
                    text="CroudSpark-X is a crowdfunding platform. Users must provide accurate information and use the platform lawfully."
                />

                <Section
                    title="2. Campaign Responsibility"
                    text="Creators are fully responsible for the authenticity of their campaigns. Admin approval does not guarantee outcomes."
                />

                <Section
                    title="3. Donations"
                    text="All donations are voluntary. Refunds are subject to platform policy and campaign status."
                />

                <Section
                    title="4. Admin Rights"
                    text="CroudSpark-X reserves the right to approve, reject, suspend, or remove campaigns at any time."
                />

                <Section
                    title="5. Account Termination"
                    text="We may suspend accounts that violate our policies or misuse the platform."
                />
            </div>
        </section>
    );
}

function Section({ title, text }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p>{text}</p>
        </div>
    );
}
