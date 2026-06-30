"use client";

import Sidebar from "@/components/layout/Sidebar";
import { signOut } from "@/services/auth";
import { useRouter } from "next/navigation";
import { LogOut, User, Info } from "lucide-react";

export default function SettingsPage() {
  const router = useRouter();

  async function handleLogout() {
    await signOut();
    router.push("/login");
  }

  return (
    <main className="flex min-h-screen bg-[#F7F7F7]">
      <Sidebar />

      <section className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Settings
        </h1>

        <div className="space-y-6 max-w-2xl">

          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <div className="flex items-center gap-3 mb-2">
              <User size={22} />
              <h2 className="text-xl font-semibold">Account</h2>
            </div>

            <p className="text-gray-600">
              You are currently signed in to Purse-pective.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <div className="flex items-center gap-3 mb-2">
              <Info size={22} />
              <h2 className="text-xl font-semibold">About</h2>
            </div>

            <p className="text-gray-600">
              Purse-pective is an AI-powered luxury handbag virtual try-on
              platform that combines custom LoRA models, Replicate, and
              Supabase to generate realistic handbag visualizations.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 bg-black text-white rounded-xl px-6 py-3 hover:bg-gray-800 transition"
            >
              <LogOut size={18} />
              Logout
            </button>

          </div>

        </div>

      </section>
    </main>
  );
}