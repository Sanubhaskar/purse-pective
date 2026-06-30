import { supabase } from "@/lib/supabase";

export async function saveGeneration(
  generationId: string,
  modelUrl: string,
  productUrl: string,
  resultUrl: string
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not logged in");
  }

  const { error } = await supabase.from("generations").insert({
    id: generationId,
    user_id: user.id,
    model_url: modelUrl,
    product_url: productUrl,
    result_url: resultUrl,
    status: "completed",
  });

  if (error) throw error;
}