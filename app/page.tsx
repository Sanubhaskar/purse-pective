import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold mb-4">
        Purse-pective
      </h1>

      <p className="text-gray-600 mb-10">
        AI Luxury Handbag Try-On
      </p>

      <div className="flex gap-4">
        <Link
          href="/signup"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Get Started
        </Link>

        <Link
          href="/login"
          className="border px-6 py-3 rounded-xl"
        >
          Login
        </Link>
      </div>
    </main>
  );
}