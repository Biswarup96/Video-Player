import React, { useRef } from "react";
import { UploadCloud } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DropzoneProps {
  onFiles: (files: FileList | null) => void;
}

const Dropzone = ({ onFiles }: DropzoneProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onFiles(e.dataTransfer.files);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={handleClick}
      className="border border-dashed border-gray-400 p-4 rounded cursor-pointer flex items-center gap-2"
    >
      <UploadCloud /> Drag & drop or click to upload
      <Input
        type="file"
        multiple
        accept="video/*"
        className="hidden"
        ref={fileInputRef}
        onChange={(e) => onFiles(e.target.files)}
      />
    </div>
  );
};

export default Dropzone;
