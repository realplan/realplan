import type { MetadataRoute } from "next";
import { getSiteUrl, toAbsoluteUrl } from "@/lib/sitemapRoutes";

export const revalidate = 86400;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: toAbsoluteUrl("/sitemap.xml"),
    host: getSiteUrl(),
  };
}
