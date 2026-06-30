export async function saveResult(
  imageUrl: string,
  generationId: string
) {
  const response = await fetch("/api/save-result", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imageUrl,
      generationId,
    }),
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error("Saving result failed");
  }

  return data.url;
}