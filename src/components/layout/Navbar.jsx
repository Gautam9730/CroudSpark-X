"use client";

import Link from "next/link";
import {useState} from "react";
import {useAuth} from "@/context/AuthContext";
import ProfileSidebar from "@/components/profile/ProfileSidebar";


export default function Navbar() {
    const {user, logout} = useAuth();
    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-blue-600">
                    CroudSpark-X
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/campaigns">Campaigns</Link>
                    <Link href="/start-campaign">Start a Campaign</Link>

                    {!user ? (
                        <>
                            <Link href="/auth/login">Login</Link>
                            <Link
                                href="/auth/register"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md"
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/dashboard">Dashboard</Link>
                            <button
                                onClick={() => setProfileOpen(true)}
                                className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center"
                            >
                                U
                            </button>

                            <button
                                onClick={logout}
                                className="text-red-600"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </nav>

                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    ☰
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3">
                    <Link href="/campaigns">Campaigns</Link>
                    <Link href="/start-campaign">Start a Campaign</Link>
                    {user?.role === "ADMIN" && (
                        <Link href="/admin" className="text-red-600 font-semibold">
                            Admin
                        </Link>
                    )}

                    {!user ? (
                        <>
                            <Link href="/auth/login">Login</Link>
                            <Link href="/auth/register">Sign Up</Link>
                        </>
                    ) : (
                        <>
                            <Link href="/dashboard">Dashboard</Link>
                            <button onClick={logout}>Logout</button>
                        </>
                    )}
                </div>
            )}
            {profileOpen && (
                <ProfileSidebar onClose={() => setProfileOpen(false)} />
            )}

        </header>
    );
}
