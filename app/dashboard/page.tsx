"use client";
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import UploadCard from "@/components/upload/UploadCard";
import { Button } from "@/components/ui/button";
import { uploadImage } from "@/services/upload";
import { v4 as uuid } from "uuid";
import { saveResult } from "@/services/saveResult";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/services/auth";
import { saveGeneration } from "@/services/generation";

export default function Home() {

  const [modelImage, setModelImage] = useState<File | null>(null);
  const [productImage, setProductImage] = useState<File | null>(null);
  const [resultImage, setResultImage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

useEffect(() => {
  async function checkUser() {
    const user = await getCurrentUser();

    if (!user) {
      router.replace("/login");
    }
  }

  checkUser();
}, [router]);
  async function handleGenerate() {
  if (!modelImage || !productImage) {
    alert("Please upload both images.");
    return;
  }
  const generationId = uuid();

  try {
    setLoading(true);

    const modelUrl = await uploadImage(
  modelImage,
  generationId,
  "model"
);


const productUrl = await uploadImage(
  productImage,
  generationId,
  "product"
);

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        modelImage: modelUrl,
        productImage: productUrl,
      }),
    });

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));

    if (data.success) {
  const permanentUrl = await saveResult(
    data.output[0],
    generationId
  );

  await saveGeneration(
    generationId,
    modelUrl,
    productUrl,
    permanentUrl
  );

  setResultImage(permanentUrl);
} else {
  alert("Generation Failed");
}
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
}
  return (
    <main className="flex min-h-screen bg-[#F7F7F7]">

      <Sidebar />

      <section className="flex-1 p-8">

  <div className="bg-white rounded-3xl shadow-sm border p-10">

    <h1 className="text-4xl font-bold">
      AI Try-On Studio
    </h1>

    <p className="text-gray-500 mt-2">
      Upload a model and a handbag to generate realistic try-ons.
    </p>

    <div className="grid grid-cols-2 gap-8 mt-10">

      <UploadCard
  title="Model Image"
  file={modelImage}
  onFileChange={setModelImage}
/>

<UploadCard
  title="Handbag Image"
  file={productImage}
  onFileChange={setProductImage}
/>

    </div>

    <Button
    onClick={handleGenerate}
    disabled={loading}
    className="mt-10 h-14 rounded-2xl w-full"
>
    {loading ? "Generating..." : "Generate"}
</Button>

{
  resultImage && (
    <div className="mt-10">
      <img
        src={resultImage}
        alt="Generated"
        className="rounded-2xl w-full"
      />
    </div>
  )
}

  </div>

</section>
    </main>
  );
}