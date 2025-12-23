import Link from "next/link";

export default function EmptyState({ title, message, cta, href }) {
    return (
        <div className="bg-white rounded-xl shadow p-10 text-center">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-slate-600 mb-6">{message}</p>
            {cta && (
                <Link href={href} className="bg-blue-600 text-white px-5 py-2 rounded-md">
                    {cta}
                </Link>
            )}
        </div>
    );
}
