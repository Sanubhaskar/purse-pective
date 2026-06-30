import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { imageUrl, generationId } = await req.json();

    // Download image from Replicate
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error("Failed to download image");
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload into Supabase
    const path = `${generationId}/output/result.png`;

    const { error } = await supabase.storage
      .from("images")
      .upload(path, buffer, {
        contentType: "image/png",
        upsert: true,
      });

    if (error) throw error;

    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(path);

    return NextResponse.json({
      success: true,
      url: data.publicUrl,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Saving result failed",
      },
      {
        status: 500,
      }
    );
  }
}