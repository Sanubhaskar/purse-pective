export async function uploadImage(
  file: File,
  generationId: string,
  type: "model" | "product"
) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("generationId", generationId);
  formData.append("type", type);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  const data = await response.json();

  return data.url;
}