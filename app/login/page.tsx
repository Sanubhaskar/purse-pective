"use client";

import { useState } from "react";
import { signIn } from "@/services/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { error } = await signIn(email, password);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white rounded-3xl shadow-lg p-10 w-[420px]">

        <h1 className="text-3xl font-bold mb-8">
          Welcome Back
        </h1>

        <input
          className="border rounded-xl p-3 w-full mb-4"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border rounded-xl p-3 w-full mb-6"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full h-12 bg-black text-white rounded-xl"
        >
          Login
        </button>

      </div>

    </main>
  );
}