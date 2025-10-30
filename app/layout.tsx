import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
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
        className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} overscroll-none bg-background font-sans text-foreground antialiased`}
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
              "before:-inset-y-20 before:-left-px before:absolute before:z-1 before:border-border before:border-dashed md:before:border-l",
              "after:-inset-y-20 after:-right-px after:absolute after:z-1 after:border-border after:border-dashed md:after:border-r"
            )}
          >
            {children}
          </main>
        </RootProviders>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS as string} />
    </html>
  );
}
