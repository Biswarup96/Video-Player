import React from "react";
import { VideoFile } from "./VideoPlayerApp";
import VideoCard from "./VideoCard";

interface Props {
  videos: VideoFile[];
  updateName: (id: string, name: string) => void;
}

const VideoGrid: React.FC<Props> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
