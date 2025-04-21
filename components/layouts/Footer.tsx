import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-border" />
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span className="h-px w-8 bg-border" />
          </div>
          <p className="text-center">
            Crafted with care by Biswarup
          </p>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} • Next.js + TypeScript • Tailwind CSS • Lucide Icons 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;