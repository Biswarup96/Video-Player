"use client";

import React from "react";
import { VideoFile } from "./VideoPlayerApp";
import Link from "next/link";

interface Props {
  video: VideoFile;
}

const VideoCard: React.FC<Props> = ({ video }) => {
  return (
    <Link href={`/video/${video.id}`}>
      <div className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <video
          src={video.url}
          className="w-full h-40 object-cover"
          muted
          loop
          playsInline
        />
        <div className="p-2 bg-white">
          <p className="text-sm font-medium truncate">{video.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
