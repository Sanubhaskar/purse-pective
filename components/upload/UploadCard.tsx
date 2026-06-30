"use client";

import { UploadCloud, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useRef } from "react";

type Props = {
  title: string;
  file: File | null;
  onFileChange: (file: File | null) => void;
};

export default function UploadCard({
  title,
  file,
  onFileChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Card
      className="rounded-3xl border-dashed border-2 border-gray-300 p-8 h-80 flex flex-col justify-center items-center hover:border-black transition-all cursor-pointer relative"
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            onFileChange(e.target.files[0]);
          }
        }}
      />

      {file ? (
        <>
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            className="w-40 h-40 object-cover rounded-xl"
          />

          <p className="mt-4 font-medium text-center">
            {file.name}
          </p>

          <button
            className="absolute top-4 right-4"
            onClick={(e) => {
              e.stopPropagation();
              onFileChange(null);
            }}
          >
            <X />
          </button>
        </>
      ) : (
        <>
          <UploadCloud
            size={50}
            className="text-gray-400 mb-5"
          />

          <h2 className="text-xl font-semibold">
            {title}
          </h2>

          <p className="text-gray-500 mt-2 text-center">
            Drag & Drop
            <br />
            or click to upload
          </p>
        </>
      )}
    </Card>
  );
}