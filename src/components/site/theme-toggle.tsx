"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/site/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { mounted, theme, toggleTheme } = useTheme();
  const isLight = mounted && theme === "light";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isLight}
      onClick={toggleTheme}
      className={cn(
        "theme-toggle grid h-9 w-9 place-items-center rounded-full border border-white/14 bg-white/9 text-white shadow-sm shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#FFC727]/40 hover:bg-white/14",
        className,
      )}
    >
      {isLight ? <Sun size={16} className="text-[#0A3D91]" /> : <Moon size={16} className="text-[#FFC727]" />}
    </button>
  );
}
