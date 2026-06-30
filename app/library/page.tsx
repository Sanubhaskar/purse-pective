"use client";

import { useEffect, useState } from "react";
import { getGenerations } from "@/services/library";

export default function LibraryPage() {

  const [generations, setGenerations] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getGenerations();
      setGenerations(data);
    }

    load();
  }, []);

  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold mb-10">
        Your Library
      </h1>

      <div className="grid grid-cols-3 gap-8">

        {generations.map((generation) => (

          <div
            key={generation.id}
            className="rounded-2xl overflow-hidden border shadow"
          >

            <img
              src={generation.result_url}
              className="w-full h-80 object-cover"
            />

            <div className="p-4">

              <p className="text-sm text-gray-500">
                {new Date(
                  generation.created_at
                ).toLocaleString()}
              </p>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}