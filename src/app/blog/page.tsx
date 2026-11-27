import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/content/blog";
import BlogFilter from "@/components/blog/BlogFilter";
import PageHeader from "@/components/site/PageHeader";
import { WhereNext } from "@/components/site/Character";

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
    minutes: Math.max(1, Math.round(p.content.split(/\s+/).length / 200)),
  }));

  return (
    <main className="bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://thepostpartumot.com" }, { name: "Blog", url: "https://thepostpartumot.com/blog" }])) }} />
      <PageHeader
        title="Postpartum Questions, Answered by an Occupational Therapist"
        emphasis="Questions"
        lede="By Melissa O'Neal, OTR/L. Older posts for occupational therapists are unchanged. If you need help now, use Need help now."
      />
      <section className="mx-auto max-w-[1280px] px-6 py-12 md:px-12 md:py-16">
        <BlogFilter posts={posts} categories={categories} />
      </section>
      <WhereNext links={[{ href: "/start-here", label: "Start here" }, { href: "/podcast", label: "Functional Fourth Trimester" }]} />
    </main>
  );
}
