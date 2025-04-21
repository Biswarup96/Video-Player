"use client";

import React from "react";
import VideoPlayerApp from "@/components/VideoPlayerApp";
import Topbar from "@/components/layouts/Topbar";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      
      <main className="flex-1 bg-gradient-to-br from-background to-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12 space-y-3">
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
              Modern Video Hub
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamlessly upload, organize, and view your video collection with multiple display options
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
            <VideoPlayerApp />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}