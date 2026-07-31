import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { locales, getDictionary } from "@/lib/dictionaries";

const staticPaths = ["", "/public-translation", "/localization", "/portfolio", "/about", "/blog", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const dict = getDictionary(locale);

    for (const path of staticPaths) {
      entries.push({
        url: `${siteConfig.url}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "/blog" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
    for (const post of dict.blog.posts) {
      entries.push({
        url: `${siteConfig.url}/${locale}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
