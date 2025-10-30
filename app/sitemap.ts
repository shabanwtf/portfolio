import type { MetadataRoute } from "next";
import { SITE_HOME_URL } from "@/config/site";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const date = new Date().toISOString();

  const routes = [
    {
      url: `${SITE_HOME_URL}`,
      lastModified: date,
    },
  ];

  return routes;
}
