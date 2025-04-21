import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base styles
        "flex h-10 w-full min-w-0 rounded-lg border border-input bg-background/70 px-4 py-2 text-base text-foreground shadow-sm transition focus:outline-none",
        
        // File input customization
        "file:inline-flex file:h-8 file:border-0 file:bg-transparent file:px-2 file:text-sm file:font-medium file:text-foreground",

        // Placeholder and selection
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",

        // Focus states
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40",

        // Invalid states
        "aria-invalid:border-destructive aria-invalid:ring-destructive/40",

        // Disabled states
        "disabled:cursor-not-allowed disabled:opacity-50",

        // Dark mode (semi-transparent bg & subtle border)
        "dark:bg-input/40 dark:placeholder:text-zinc-500",

        // Custom passed class
        className
      )}
      {...props}
    />
  );
}

export { Input };
