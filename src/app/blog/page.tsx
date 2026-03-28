import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/content/blog";
import BlogFilter from "@/components/blog/BlogFilter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights for OTs building postpartum practices. Articles on clinical practice, business strategy, and maternal health.",
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
            Blog
          </h1>
          <p className="text-lg text-[#6B6560] font-serif max-w-lg mx-auto">
            Insights for OTs building postpartum practices
          </p>
        </div>

        <BlogFilter posts={posts} categories={categories} />
      </section>
    </main>
  );
}
