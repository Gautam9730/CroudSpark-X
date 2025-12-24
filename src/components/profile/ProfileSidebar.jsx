"use client";

import { useEffect, useRef } from "react";
import { useAuth } from "@/context/AuthContext";

export default function ProfileSidebar({ onClose }) {
    const { user } = useAuth();
    const ref = useRef();

    // close when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-end">
            <aside
                ref={ref}
                className="bg-white w-80 h-full p-6 shadow-xl animate-slideIn"
            >
                {/* Profile Info */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                        {user?.name?.[0]}
                    </div>
                    <h3 className="mt-3 font-semibold text-lg">{user?.name}</h3>
                    <p className="text-sm text-slate-500">{user?.role}</p>
                </div>

                {/* Actions */}
                <div className="space-y-4">
                    <button className="w-full text-left px-4 py-2 rounded-md hover:bg-slate-100">
                        Edit Profile
                    </button>

                    <button className="w-full text-left px-4 py-2 rounded-md hover:bg-slate-100">
                        Change Password
                    </button>

                    <button className="w-full text-left px-4 py-2 rounded-md text-red-600 hover:bg-red-50">
                        Logout
                    </button>
                </div>
            </aside>
        </div>
    );
}
