export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm">
                © {new Date().getFullYear()} CroudSpark-X. All rights reserved.
            </div>
        </footer>
    );
}
