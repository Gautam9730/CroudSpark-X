import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-slate-600 mb-6">
                The page you’re looking for doesn’t exist.
            </p>
            <Link href="/" className="text-blue-600">
                Go back home
            </Link>
        </div>
    );
}
