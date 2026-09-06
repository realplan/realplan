import type { MetadataRoute } from "next";
import { BLOGS } from "@/data/blogsData";
import { SOLUTIONS } from "@/data/solutionsData";

type SitemapEntry = MetadataRoute.Sitemap[number];

export type SitemapRoute = {
  path: string;
  changeFrequency: SitemapEntry["changeFrequency"];
  priority: NonNullable<SitemapEntry["priority"]>;
};

export const DEFAULT_SITE_URL = "https://www.realplan.in";

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    DEFAULT_SITE_URL
  ).replace(/\/$/, "");
}

export function toAbsoluteUrl(pathname: string): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function getCurrentLastModified(): Date {
  return new Date();
}

export function getStaticRoutes(): SitemapRoute[] {
  return [
    { path: "/", changeFrequency: "weekly", priority: 0.8 },
    { path: "/about_us", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact_us", changeFrequency: "monthly", priority: 0.8 },
    { path: "/blogs", changeFrequency: "weekly", priority: 0.6 },
    { path: "/case_studies", changeFrequency: "monthly", priority: 0.5 },
    { path: "/location", changeFrequency: "monthly", priority: 0.5 },
    { path: "/privacy_policy", changeFrequency: "yearly", priority: 0.5 },
    { path: "/sectors", changeFrequency: "monthly", priority: 0.5 },
    { path: "/terms_of_service", changeFrequency: "yearly", priority: 0.5 },
  ];
}

export async function getAllSolutionSlugs(): Promise<string[]> {
  // Replace this local-data read with a CMS/API call when solution pages move there.
  return Object.keys(SOLUTIONS);
}

export async function getAllBlogSlugs(): Promise<string[]> {
  // Replace this local-data read with a CMS/API call when blog pages move there.
  return BLOGS.map((blog) => blog.slug).filter(Boolean);
}

export async function getDynamicRoutes(): Promise<SitemapRoute[]> {
  const [solutionSlugs, blogSlugs] = await Promise.all([
    getAllSolutionSlugs(),
    getAllBlogSlugs(),
  ]);

  return [
    ...solutionSlugs.map((slug) => ({
      path: `/solutions/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...blogSlugs.map((slug) => ({
      path: `/blogs/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}

export async function getSitemapRoutes(): Promise<SitemapRoute[]> {
  return [...getStaticRoutes(), ...(await getDynamicRoutes())];
}
