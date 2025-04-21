"use client";

import React from "react";
import { VideoIcon, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Topbar = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-medium">
          <VideoIcon className="w-5 h-5" />
          <span>VideoPlayer</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search videos..."
            className="pl-9 bg-muted/50 border-0 shadow-none"
          />
        </div>

        {/* User */}
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};

export default Topbar;