import type { MetadataRoute } from "next";
import {
  getCurrentLastModified,
  getSitemapRoutes,
  toAbsoluteUrl,
} from "@/lib/sitemapRoutes";

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = getCurrentLastModified();
  const routes = await getSitemapRoutes();

  return routes.map((route) => ({
    url: toAbsoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
