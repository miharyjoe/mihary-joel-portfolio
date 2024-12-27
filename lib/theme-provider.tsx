"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme =
  | "zinc"
  | "slate"
  | "stone"
  | "gray"
  | "neutral"
  | "red"
  | "rose"
  | "orange"
  | "green"
  | "blue"
  | "yellow"
  | "violet";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultDark?: boolean;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const initialState: ThemeProviderState = {
  theme: "zinc",
  setTheme: () => null,
  isDark: false,
  setIsDark: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "slate",
  defaultDark = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [isDark, setIsDark] = useState(defaultDark);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedDark = localStorage.getItem("isDark");

    if (savedTheme) {
      setTheme(savedTheme);
    }

    if (savedDark !== null) {
      setIsDark(savedDark === "true");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("isDark", String(isDark));

    const root = document.documentElement;
    root.classList.remove(...root.classList);
    root.classList.add(`theme-${theme}`);
    if (isDark) {
      root.classList.add("dark");
    }
  }, [theme, isDark]);

  return (
    <ThemeProviderContext.Provider
      value={{ theme, setTheme, isDark, setIsDark }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
