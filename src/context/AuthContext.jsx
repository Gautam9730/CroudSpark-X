"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    // change role to "ADMIN" to test admin UI
    const [user, setUser] = useState({
        id: "1",
        name: "Admin User",
        role: "ADMIN", // USER | CREATOR | ADMIN
    });

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
