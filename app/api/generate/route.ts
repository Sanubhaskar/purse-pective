/*import Replicate from "replicate";
import { NextResponse } from "next/server";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { modelImage, productImage } = await req.json();

    const input = {
  images: [modelImage, productImage],

  prompt: `
A professional e-commerce fashion photograph. The exact handbag from the reference image is being carried by the model from the reference image, held naturally in her right hand at hip height.

Do not alter the handbag in any way — same silhouette, same color. Treat the handbag as a fixed object being composited into the scene, not something to redesign.

The model's face, hair, pose, and outfit remain exactly as in the reference image. Studio lighting, soft shadows, clean white background, sharp focus throughout, no motion blur, no double exposure, no ghosting.
`,

  num_inference_steps: 50,
  guidance_scale: 4,
  lora_scales: [0.8],

  aspect_ratio: "match_input_image",

  output_megapixels: "2",

  lora_weights: [
    "https://huggingface.co/sanu1408/purse-pective-lora/resolve/main/catalogue_training_000001500.safetensors",
  ],
  seed: 42,
};

   const output = await replicate.run(
  "black-forest-labs/flux-2-klein-9b-base-lora",
  { input }
);

// Convert FileOutput objects to URLs
const imageUrls = await Promise.all(
  (output as any[]).map(async (file) => {
    return await file.url();
  })
);

return NextResponse.json({
  success: true,
  output: imageUrls,
});
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Generation failed",
      },
      { status: 500 }
    );
  }
}*/

import Replicate from "replicate";
import { NextResponse } from "next/server";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { modelImage, productImage } = await req.json();

    const input = {
      images: [modelImage, productImage],

      // Mirrors your training caption template almost verbatim.
      // "wear or carry" is your trigger phrase — keep it in this exact
      // structural position, not reworded into a different sentence.
      prompt: `Make the model from Image 1 wear or carry the product from Image 2. Preserve the model's face, identity, pose, expression, body proportions, lighting, shadows, camera angle, and overall composition exactly as in Image 1. Preserve the product's size, design, color, texture, pattern, branding, and all visual details exactly as in Image 2. Only make the model carry or wear the product naturally. Do not alter any other elements of the image.`,

      num_inference_steps: 20,
      guidance_scale: 5,
      lora_scales: [0.9],

      aspect_ratio: "match_input_image",

      output_megapixels: "2",

      lora_weights: [
        "https://huggingface.co/sanu1408/purse-pective-lora/resolve/main/catalogue_training_000001500.safetensors",
      ],
      // Try leaving seed unset (or randomize) for a few test runs first —
      // a fixed seed can lock you into one bad noise draw while you're
      // still debugging the prompt/LoRA interaction.
      //seed: 42,
    };

    const output = await replicate.run(
      "black-forest-labs/flux-2-klein-9b-base-lora",
      { input }
    );

    // Convert FileOutput objects to URLs
    const imageUrls = await Promise.all(
      (output as any[]).map(async (file) => {
        return await file.url();
      })
    );

    return NextResponse.json({
      success: true,
      output: imageUrls,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Generation failed",
      },
      { status: 500 }
    );
  }
}