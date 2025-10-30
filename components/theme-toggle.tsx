"use client";

import { MoonStar, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      className="rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="icon-sm"
      variant="dashed"
    >
      <SunDim className="size-4.5 rotate-90 scale-0 transition-transform duration-200 ease-in-out dark:rotate-0 dark:scale-100" />
      <MoonStar className="dark:-rotate-90 absolute size-3.5 rotate-0 scale-100 transition-transform duration-200 ease-in-out dark:scale-0" />
      <span className="sr-only">Switch Theme</span>
    </Button>
  );
}
