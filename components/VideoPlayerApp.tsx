"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import {  Table as TableIcon, Grid3X3 } from "lucide-react";
import VideoGrid from "./VideoGrid";
import VideoTable from "./VideoTable";
import Dropzone from "@/components/DropZone";

export interface VideoFile {
  id: string;
  name: string;
  url: string;
}

const VideoPlayerApp = () => {
  const [videos, setVideos] = useState<VideoFile[]>([]);
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    const newVideos: VideoFile[] = [];

    Array.from(files).forEach(file => {
      if (!file.type.startsWith("video/")) {
        alert("Only video files are allowed.");
        return;
      }
      const url = URL.createObjectURL(file);
      newVideos.push({
        id: crypto.randomUUID(),
        name: file.name,
        url
      });
    });

    setVideos(prev => {
      const updated = [...prev, ...newVideos];
      localStorage.setItem("uploaded-videos", JSON.stringify(updated));
      return updated;
    });
  };

  const updateName = (id: string, newName: string) => {
    setVideos(prev => prev.map(v => (v.id === id ? { ...v, name: newName } : v)));
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header + Controls */}
      <div className="flex justify-between items-center gap-4 p-4 bg-background/50 rounded-lg border">
        <Dropzone onFiles={handleFileUpload} />
        
        <div className="flex gap-2">
          <Button 
            onClick={() => setViewMode('table')} 
            variant={viewMode === 'table' ? 'default' : 'outline'}
            size="sm"
            className="gap-2"
          >
            <TableIcon className="w-4 h-4" />
            <span>Table</span>
          </Button>
          <Button 
            onClick={() => setViewMode('grid')} 
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            className="gap-2"
          >
            <Grid3X3 className="w-4 h-4" />
            <span>Grid</span>
          </Button>
        </div>
      </div>

      {/* Content Area */}
      <div className="rounded-lg border bg-background p-4 shadow-sm">
        {viewMode === 'table' ? (
          <VideoTable videos={videos} updateName={updateName} />
        ) : (
          <VideoGrid videos={videos} updateName={updateName} />
        )}
      </div>
    </div>
  );
};

export default VideoPlayerApp;