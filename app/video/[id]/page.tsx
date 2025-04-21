"use client";

import React from "react";
import { use } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

interface VideoFile {
  id: string;
  name: string;
  url: string;
}

const VideoDetailPage = ({ params }: Props) => {
  const { id: videoId } = use(params);

  const videos: VideoFile[] = localStorage.getItem("uploaded-videos")
    ? JSON.parse(localStorage.getItem("uploaded-videos")!)
    : [];

  const video = videos.find((v) => v.id === videoId);

  if (!video) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white">
        <p className="text-lg text-red-500">Video not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-4 py-6">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Video Player */}
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
          <video
            src={video.url}
            controls
            autoPlay
            className="w-full h-full object-contain"
          />
        </div>

        {/* Video Info */}
        <div className="mt-4">
          <h1 className="text-2xl font-semibold mb-2">{video.name}</h1>
          <p className="text-sm text-zinc-400">Video ID: {videoId}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailPage;
