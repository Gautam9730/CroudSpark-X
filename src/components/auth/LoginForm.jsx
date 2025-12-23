"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();            // mock login
    router.push("/dashboard");
  };

  return (
      <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input className="w-full border px-4 py-2 mb-4" placeholder="Email" />
        <input className="w-full border px-4 py-2 mb-6" placeholder="Password" />

        <button className="w-full bg-blue-600 text-white py-2 rounded-md">
          Login
        </button>
      </form>
  );
}
