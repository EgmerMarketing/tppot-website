import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/schema";

// Lists only pages that exist on this branch. Add each new page as it ships.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: BASE_URL, changeFrequency: "weekly", priority: 1 }];
}
