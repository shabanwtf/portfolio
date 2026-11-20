"use client";

import { MoonStar, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  return (
    <Button
      className="rounded-full"
      onClick={toggleTheme}
      size="icon-sm"
      variant="dashed"
    >
      <SunDim className="size-4.5 scale-0 rotate-90 transition-transform duration-200 ease-in-out dark:scale-100 dark:rotate-0" />
      <MoonStar className="absolute size-3.5 scale-100 rotate-0 transition-transform duration-200 ease-in-out dark:scale-0 dark:-rotate-90" />
      <span className="sr-only">Switch Theme</span>
    </Button>
  );
}
