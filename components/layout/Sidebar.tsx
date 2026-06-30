"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Sparkles,
  Images,
  Settings,
  LogOut,
} from "lucide-react";

import { signOut } from "@/services/auth";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await signOut();
    router.push("/login");
  }

  return (
    <aside className="w-72 bg-white border-r p-8 flex flex-col justify-between">

      {/* Top Section */}
      <div>
        <h1 className="text-3xl font-black">
          Purse-pective
        </h1>

        <p className="text-gray-500 mt-2">
          AI Handbag Studio
        </p>

        <div className="mt-10 space-y-3">

          <Link
            href="/dashboard"
            className={`flex items-center gap-3 rounded-xl px-5 py-3 transition ${
              pathname === "/dashboard"
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <Sparkles size={20} />
            <span className="font-medium">Try On</span>
          </Link>

          <Link
            href="/library"
            className={`flex items-center gap-3 rounded-xl px-5 py-3 transition ${
              pathname === "/library"
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <Images size={20} />
            <span className="font-medium">Library</span>
          </Link>

          <Link
            href="/settings"
            className={`flex items-center gap-3 rounded-xl px-5 py-3 transition ${
              pathname === "/settings"
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </Link>

        </div>
      </div>

      {/* Bottom Card */}
      <div className="rounded-2xl bg-black text-white p-5">

        <h2 className="text-lg font-semibold">
          Purse-pective AI
        </h2>

        <p className="text-sm mt-2 text-gray-300">
          Generate premium handbag try-ons in seconds.
        </p>

        <button
          onClick={handleLogout}
          className="mt-5 flex items-center justify-center gap-2 w-full rounded-xl bg-white text-black py-3 font-medium hover:bg-gray-200 transition"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}