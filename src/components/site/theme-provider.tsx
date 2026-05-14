"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  mounted: boolean;
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const storageKey = "ajiralink-theme";
const defaultTheme: Theme = "light";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey);
    const initialTheme: Theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : defaultTheme;
    window.localStorage.setItem(storageKey, initialTheme);
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    setMounted(true);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      mounted,
      theme,
      toggleTheme: () => {
        setTheme((currentTheme) => {
          const nextTheme = currentTheme === "dark" ? "light" : "dark";
          window.localStorage.setItem(storageKey, nextTheme);
          document.documentElement.dataset.theme = nextTheme;
          return nextTheme;
        });
      },
    }),
    [mounted, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
