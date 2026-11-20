import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { RootProviders } from "@/components/providers";
import { fontHeading, fontMono, fontSans } from "@/lib/fonts";
import { constructMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = constructMetadata({
  canonicalUrl: "/",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} bg-background text-foreground overscroll-none font-sans antialiased`}
      >
        <RootProviders
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
          }}
        >
          {/* <SiteHeader /> */}
          <main
            className={cn(
              "site-container relative grow",
              "before:border-border before:absolute before:-inset-y-20 before:-left-px before:z-1 before:border-dashed md:before:border-l",
              "after:border-border after:absolute after:-inset-y-20 after:-right-px after:z-1 after:border-dashed md:after:border-r"
            )}
          >
            {children}
          </main>
        </RootProviders>
        <Analytics />
      </body>
    </html>
  );
}
