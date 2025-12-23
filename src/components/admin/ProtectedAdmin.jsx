"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedAdmin({ children }) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user || user.role !== "ADMIN") {
            router.push("/");
        }
    }, [user]);

    if (!user || user.role !== "ADMIN") return null;

    return children;
}
