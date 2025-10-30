"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { WordmarkIcon } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { SITE_NAME } from "@/config/site";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const scrolled = useScroll(10);
  const { isMobile } = useMediaQuery();

  return (
    <motion.header
      animate={
        scrolled && !isMobile
          ? {
              borderRadius: "999px",
              maxWidth: "576px",
              top: 18,
              padding: "4px",
            }
          : {
              borderRadius: "0px",
              maxWidth: "672px",
              top: 0,
              padding: "8px",
            }
      }
      className={cn(
        "sticky top-0 z-1 mx-auto w-full max-w-2xl border-b border-dashed bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50",
        scrolled && !isMobile && "border"
      )}
      initial={false}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 18,
        mass: 0.6,
      }}
    >
      <div className="flex items-center justify-between">
        <Link
          className="cursor-pointer rounded-full p-2 hover:bg-accent"
          href="/"
        >
          <WordmarkIcon className="h-4" />
          <span className="sr-only">{SITE_NAME}</span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
