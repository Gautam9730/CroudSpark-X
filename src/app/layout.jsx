import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {AuthProvider} from "@/context/AuthContext";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className="bg-slate-50 text-slate-900">
        <AuthProvider>

            <Navbar/>
            <main className="min-h-[80vh]">{children}</main>
            <Footer/>

        </AuthProvider>
        </body>
        </html>
    );
}
export const metadata = {
    title: "CroudSpark-X | Power Ideas. Fund Dreams.",
    description:
        "CroudSpark-X is a modern crowdfunding platform to support ideas, causes, and startups.",
    keywords: [
        "crowdfunding",
        "fundraising",
        "donations",
        "startup funding",
        "charity",
    ],
};
