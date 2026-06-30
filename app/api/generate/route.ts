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

  prompt: `
The first image is a human model.
The second image is a handbag product.

Create a realistic luxury fashion photograph where the model is naturally carrying or wearing the handbag from the second image.

Requirements:
- Preserve the model's face, identity, hairstyle, skin tone, body shape, pose, expression, and background exactly as shown in the first image.
- Preserve the handbag's design, color, texture, stitching, logo, hardware, proportions, and every product detail exactly as shown in the second image.
- Do not redesign, recolor, or distort the handbag.
- Position the handbag naturally on the model's shoulder, arm, or hand depending on the pose.
- Match the lighting, shadows, reflections, perspective, and scale so the handbag looks physically realistic.
- Do not add or remove any accessories, clothing, jewelry, or objects.
- Produce a premium high-end e-commerce fashion photograph with photorealistic quality.
`,

  lora_scales: [1],

  aspect_ratio: "match_input_image",

  lora_weights: [
    "https://huggingface.co/sanu1408/purse-pective-lora/resolve/main/catalogue_training_000001500.safetensors",
  ],
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