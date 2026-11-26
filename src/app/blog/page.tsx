import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/content/blog";
import BlogFilter from "@/components/blog/BlogFilter";

export const metadata: Metadata = {
  title: "Postpartum Questions, Answered by an Occupational Therapist",
  description:
    "Notes from Melissa O'Neal, OTR/L. Some earlier posts were written for occupational therapists and are unchanged. Newer pages on this site are for parents.",
};

export default function BlogPage() {
  // Extract unique categories
  const categories = Array.from(new Set(blogPosts.map((p) => p.category))).sort();

  // Pass serializable data to the client component (no functions, no complex objects)
  const posts = blogPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    category: p.category,
  }));

  return (
    <main className="bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://thepostpartumot.com" }, { name: "Blog", url: "https://thepostpartumot.com/blog" }])) }} />
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 font-sans text-4xl font-bold text-[#0A3660] md:text-5xl">
            Postpartum Questions, Answered by an Occupational Therapist
          </h1>
          <p className="font-serif text-base text-black">
            Educational information, not medical or professional advice.
          </p>
          <p className="mt-4 font-serif text-lg text-black">
            By Melissa O&apos;Neal, OTR/L. Older posts for occupational therapists are unchanged. If you need help now, use Need help now.
          </p>
        </div>

        <BlogFilter posts={posts} categories={categories} />
      </section>
    </main>
  );
}
