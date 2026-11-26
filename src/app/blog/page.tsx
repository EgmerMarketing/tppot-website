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
    <main className="bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://thepostpartumot.com" }, { name: "Blog", url: "https://thepostpartumot.com/blog" }])) }} />
      <header className="band-teal-deep bg-teal-deep text-white">
        <div className="mx-auto max-w-[1120px] px-6 py-12 md:px-8 md:py-16">
          <h1 className="max-w-3xl font-sans text-4xl font-bold text-white md:text-5xl">
            Postpartum Questions, Answered by an Occupational Therapist
          </h1>
          <p className="mt-4 font-serif text-base text-white">
            Educational information, not medical or professional advice.
          </p>
          <p className="mt-4 max-w-3xl font-serif text-lg text-white">
            By Melissa O&apos;Neal, OTR/L. Older posts for occupational therapists are unchanged. If you need help now, use Need help now.
          </p>
        </div>
      </header>
      <section className="band-cream mx-auto max-w-[1280px] px-6 py-12 md:px-12 md:py-16">
        <BlogFilter posts={posts} categories={categories} />
      </section>
    </main>
  );
}
