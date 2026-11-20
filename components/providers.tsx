"use client";

import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider } from "next-themes";
import type * as React from "react";
// import { Toaster } from './toaster';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: Omit<ThemeProviderProps, "children">;
}

export function RootProviders({ children, themeProps }: ProvidersProps) {
  return (
    <ThemeProvider {...themeProps}>
      {children}
      {/* <Toaster /> */}
    </ThemeProvider>
  );
}
